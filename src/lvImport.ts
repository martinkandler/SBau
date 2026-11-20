/** Local LV import. No server upload. */
export type LVRow={oz:string;text:string;unit:string;qty:number;price:number;kind:string;rowType:'Titel'|'Untertitel'|'Position';longText:string;level:number};
export type LVImportResult={rows:LVRow[];warnings:string[]};
const clean=(s:unknown)=>String(s??'').trim();
export const numberDE=(value:unknown):number=>{let s=clean(value).replace(/\s|€/g,'');if(!s)return 0;if(s.includes(',')&&s.includes('.'))s=s.lastIndexOf(',')>s.lastIndexOf('.')?s.replace(/\./g,'').replace(',','.'):s.replace(/,/g,'');else if(s.includes(','))s=s.replace(',','.');else if(/^[-+]?\d{1,3}(\.\d{3})+$/.test(s))s=s.replace(/\./g,'');return Number(s)};
export const parseCSV=(text:string):string[][]=>{const first=text.split(/\r?\n/)[0]||'';const sep=[';','\t',','].sort((a,b)=>first.split(b).length-first.split(a).length)[0];const rows:string[][]=[];let row:string[]=[],field='',quoted=false;for(let i=0;i<text.length;i++){const c=text[i];if(c==='"'){if(quoted&&text[i+1]==='"'){field+='"';i++}else quoted=!quoted}else if(c===sep&&!quoted){row.push(field);field=''}else if((c==='\r'||c==='\n')&&!quoted){if(c==='\r'&&text[i+1]==='\n')i++;row.push(field);if(row.some(x=>x.trim()))rows.push(row);row=[];field=''}else field+=c}row.push(field);if(row.some(x=>x.trim()))rows.push(row);return rows};
const norm=(s:string)=>s.toLowerCase().replace(/[^a-z0-9äöüß]/g,'');
export function parseLVTable(rows:string[][]):LVImportResult{const warnings:string[]=[];const headerIndex=rows.findIndex(r=>r.some(x=>/^(oz|ordnungszahl|positionsnummer|position)$/i.test(clean(x))));if(headerIndex<0)throw Error('Keine Kopfzeile mit OZ / Ordnungszahl gefunden');const headers=rows[headerIndex].map(norm);const col=(...aliases:string[])=>headers.findIndex(h=>aliases.some(a=>h===norm(a)||h.includes(norm(a))));const idx={oz:col('oz','ordnungszahl','positionsnummer','position'),text:col('kurztext','bezeichnung','leistung','beschreibung'),unit:col('einheit','mengeneinheit','me'),qty:col('vertragsmenge','menge','quantity'),price:col('einheitspreis','ep','preis'),type:col('typ','zeilentyp','positionsart'),kind:col('positionskategorie','vertragsart','nachtrag'),long:col('langtext','langbeschreibung')};if(idx.oz<0||idx.text<0)throw Error('Spalten OZ und Kurztext fehlen');const result:LVRow[]=[];const seen=new Set<string>();rows.slice(headerIndex+1).forEach((r,offset)=>{const line=headerIndex+offset+2;const get=(i:number)=>i<0?'':clean(r[i]);const oz=get(idx.oz),text=get(idx.text);if(!oz&&!text)return;if(!oz||!text){warnings.push(`Zeile ${line}: OZ oder Bezeichnung fehlt`);return}if(seen.has(oz)){warnings.push(`Zeile ${line}: doppelte OZ ${oz}`);return}const explicit=norm(get(idx.type));const unit=get(idx.unit),qtyText=get(idx.qty),priceText=get(idx.price);let rowType:LVRow['rowType'];if(['titel','haupttitel','obergruppe','los'].includes(explicit))rowType='Titel';else if(['untertitel','bereich','gruppe','untergruppe'].includes(explicit))rowType='Untertitel';else if(['position','lvposition','leistung'].includes(explicit))rowType='Position';else if(!unit&&!qtyText&&!priceText)rowType=oz.split('.').filter(Boolean).length<=1?'Titel':'Untertitel';else rowType='Position';const qty=numberDE(qtyText),price=numberDE(priceText);if(rowType==='Position'&&(!Number.isFinite(qty)||!Number.isFinite(price)||price<0)){warnings.push(`Zeile ${line}: ungültige Menge / Einheitspreis`);return}if(rowType==='Position'&&!unit)warnings.push(`Zeile ${line}: keine Einheit`);seen.add(oz);result.push({oz,text,unit,qty:rowType==='Position'?qty:0,price:rowType==='Position'?price:0,kind:/nachtrag|nt/i.test(get(idx.kind))?'Nachtrag':'Vertrag',rowType,longText:get(idx.long),level:oz.split('.').filter(Boolean).length})});return {rows:result,warnings}};
/** GAEB DA XML 3.x (including RIBX81). Structural categories are BoQCtgy, not BoQLevel. */
const direct=(el:Element,name:string)=>Array.from(el.children).find(c=>c.localName===name);
const descendants=(el:Element,name:string)=>Array.from(el.getElementsByTagName('*')).filter(c=>c.localName===name);
const plain=(el?:Element):string=>{if(!el)return '';const pieces:string[]=[];const visit=(node:Node)=>{if(node.nodeType===3){pieces.push(node.textContent||'');return}if(node.nodeType!==1)return;const tag=(node as Element).localName.toLowerCase();if(tag==='br'){pieces.push('\n');return}if(['p','div','li'].includes(tag)&&pieces.length)pieces.push('\n');for(const child of Array.from(node.childNodes))visit(child);if(['p','div','li'].includes(tag))pieces.push('\n')};visit(el);return pieces.join('').replace(/\u00a0/g,' ').replace(/[ \t]+/g,' ').replace(/ *\n */g,'\n').replace(/\n{3,}/g,'\n\n').trim()};
const ownText=(el:Element,name:string)=>plain(direct(el,name));
const description=(el:Element,short:boolean)=>{const desc=direct(el,'Description');const complete=desc&&direct(desc,'CompleteText');const section=complete&&direct(complete,short?'OutlineText':'DetailTxt');return plain(section||undefined)};
export function parseGAEB(xml:string):LVImportResult{
 const doc=new DOMParser().parseFromString(xml,'application/xml');
 if(descendants(doc.documentElement,'parsererror').length||doc.documentElement.localName==='parsererror')throw Error('Ungültige GAEB-XML-Datei');
 if(doc.documentElement.localName!=='GAEB')throw Error('Keine GAEB-DA-XML-Datei');
 const warnings:string[]=[],rows:LVRow[]=[],seen=new Set<string>();
 const boq=descendants(doc.documentElement,'BoQ')[0];if(!boq)throw Error('GAEB enthält kein Leistungsverzeichnis (BoQ)');
 const info=direct(boq,'BoQInfo');const structure=info?Array.from(info.children).filter(e=>e.localName==='BoQBkdn'):[];
 const lengths=structure.filter(e=>ownText(e,'Type')==='BoQLevel').map(e=>Number(ownText(e,'Length'))||0);
 const itemLength=Number(ownText(structure.find(e=>ownText(e,'Type')==='Item')||boq,'Length'))||0;
 const fmt=(part:string,len:number)=>len>0?part.padStart(len,'0'):part;
 const add=(row:LVRow)=>{if(seen.has(row.oz)){warnings.push(`Doppelte OZ ${row.oz}`);return}seen.add(row.oz);rows.push(row)};
 const walk=(node:Element,parents:string[])=>{
  for(const el of Array.from(node.children)){
   const tag=el.localName;
   if(tag==='BoQCtgy'||tag==='BoQLevel'){
    const raw=el.getAttribute('RNoPart')||ownText(el,'RNoPart')||ownText(el,'No');
    const path=raw?[...parents,fmt(raw,lengths[parents.length]||0)]:parents;
    const oz=path.join('.');const label=plain(direct(el,'LblTx'))||description(el,true)||ownText(el,'Name');
    if(oz&&label)add({oz,text:label,unit:'',qty:0,price:0,kind:'Vertrag',rowType:parents.length?'Untertitel':'Titel',longText:description(el,false),level:path.length});
    const body=direct(el,'BoQBody');if(body)walk(body,path);
   }else if(tag==='Item'){
    const raw=el.getAttribute('RNoPart')||ownText(el,'RNoPart')||ownText(el,'RNo');
    const oz=[...parents,fmt(raw,itemLength)].filter(Boolean).join('.');
    const short=description(el,true)||plain(direct(el,'LblTx'));
    const long=description(el,false);
    const qty=numberDE(ownText(el,'Qty')),price=numberDE(ownText(el,'UP'));
    if(!oz||(!short&&!long)){warnings.push(`Position ohne OZ oder Text übersprungen: ${raw}`);continue}
    if(!Number.isFinite(qty)||!Number.isFinite(price)){warnings.push(`Ungültige Menge / EP bei ${oz}`);continue}
    add({oz,text:short||long.slice(0,180),unit:ownText(el,'QU'),qty,price,kind:'Vertrag',rowType:'Position',longText:long,level:parents.length+1});
   }else if(tag==='Itemlist'||tag==='BoQBody')walk(el,parents);
  }
 };
 const body=direct(boq,'BoQBody');if(!body)throw Error('GAEB enthält keinen BoQBody');walk(body,[]);
 if(!rows.some(r=>r.rowType==='Position'))throw Error('Keine auswertbaren GAEB-Positionen gefunden');
 return {rows,warnings};
}
