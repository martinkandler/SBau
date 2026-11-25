import {db,defaults,type Project,type Building,type Part,type Plan,type Photo,type ConstructionDocument,type LVPosition,type Measurement,type BillingSnapshot,type PlanArea,type PlanRevision,type AccountingSheet,type AccountingEntry} from './db';
import {demoPlans, demoPhotos, demoDocuments, demoRevision, loadDemoAssets, PDF} from './demoAssets';
export const DEMO_ID='sbau-demo-eue-lindenstrasse-v0402';
const demo=(id:string)=>`${DEMO_ID}-${id}`;
const buildingDefs=[['BR01','Eisenbahnbrücke – Überbau'],['WL01','Widerlager West'],['WO01','Widerlager Ost'],['ENT01','Straßenentwässerung']];
const partDefs=[['ÜB01','Stahlbetonüberbau',0],['KP01','Brückenkappe Nord',0],['KP02','Brückenkappe Süd',0],['LG01','Lager West',0],['LG02','Lager Ost',0],['W01','Widerlagerwand West',1],['F01','Fundament West',1],['FL01','Flügelwand West Nord',1],['FL02','Flügelwand West Süd',1],['W02','Widerlagerwand Ost',2],['F02','Fundament Ost',2],['FL03','Flügelwand Ost Nord',2],['FL04','Flügelwand Ost Süd',2],['DN01','Entwässerungsleitung Nord',3],['DN02','Entwässerungsleitung Süd',3],['SCH01','Kontrollschacht 01',3],['SCH02','Kontrollschacht 02',3],['RIN01','Straßenablauf',3]] as const;
const partPins = [
 [601, 432], [567, 460], [625, 363], [494, 437], [706, 437],
 [451, 406], [412, 455], [402, 501], [402, 320], [761, 406], [789, 456], [800, 501], [800, 320],
 [640, 297], [640, 185], [640, 286], [640, 220], [658, 250],
] as const;

function demoAccounting(lvPositions:LVPosition[], parts:Part[], now:number) {
 const sheet:AccountingSheet={
  id:demo('sheet-1'), projectId:DEMO_ID, name:'DEMO – Abrechnungszettel September / Oktober',
  from:'2026-09-01', to:'2026-10-31', status:'Entwurf', created:now, updated:now,
 };
 const items = [
  {key:'3-0', qty:480, part:6, date:'2026-09-10', calc:'20 × 12 × 2', size:['20 m','12 m'], plan:0},
  {key:'5-0', qty:12, part:6, date:'2026-09-11', calc:'14 × 5 × 0,10 + 5,00', size:['14 m','5 m'], plan:10},
  {key:'5-2', qty:12.4, part:6, date:'2026-09-14', calc:'12,40 t laut Muster-Stahlliste', size:['14 m','5 m'], plan:10, photos:[0,1]},
  {key:'5-1', qty:84, part:6, date:'2026-09-15', calc:'14,00 × 5,00 × 1,20', size:['14 m','5 m'], plan:10, relatedPlan:6, documents:[0,1,2], photos:[2]},
  {key:'6-0', qty:186, part:5, date:'2026-10-01', calc:'2 × 15,5 × 6', size:['15,5 m','6 m'], plan:6, photos:[3]},
  {key:'6-1', qty:96, part:5, date:'2026-10-02', calc:'16 × 1 × 6', size:['16 m','1 m'], plan:6},
  {key:'7-0', qty:210, part:5, date:'2026-10-08', calc:'2 × 15 × 7', size:['15 m','7 m'], plan:3},
  {key:'3-1', qty:120, part:6, date:'2026-10-15', calc:'20 × 5 × 1,20', size:['20 m','5 m'], plan:0},
 ];
 const entries:AccountingEntry[] = items.map(({key,qty,part:pi,date,calc,size,plan,relatedPlan,documents=[],photos=[]},i)=>{
  const position = lvPositions.find(row=>row.id===demo('lv-'+key))!;
  const part = parts[pi];
  const planId = demo('plan-'+plan);
  const quantity = qty.toLocaleString('de-DE',{minimumFractionDigits:2,maximumFractionDigits:2});
  return {
   id:demo('entry-'+i), projectId:DEMO_ID, sheetId:sheet.id, positionId:position.id,
   buildingIds:part.buildingId?[part.buildingId]:[], partIds:[part.id], date, description:position.text,
   basis:'measured', quantityText:quantity, formula:'', planId, planIds:relatedPlan===undefined?[planId]:[planId,demo('plan-'+relatedPlan)],
   documentIds:documents.map(n=>demo('doc-'+n)), photoIds:photos.map(n=>demo('photo-'+n)),
   note:'Fiktive Musterleistung', status:'Erfasst', created:now, updated:now,
   fieldEnabled:true, fieldSheetNo:String(i+1), fieldNotes:`${calc} = ${quantity} ${position.unit}`,
   fieldSketch:[
    {tool:'rectangle',points:[{x:200,y:220},{x:800,y:480}],color:'#173650',width:3},
    {tool:'text',points:[{x:350,y:190}],color:'#173650',width:3,text:size[0]},
    {tool:'text',points:[{x:100,y:350}],color:'#173650',width:3,text:size[1]},
    {tool:'text',points:[{x:300,y:350}],color:'#173650',width:3,text:part.shortName||part.name},
   ],
  };
 });
 return {sheet,entries};
}

export async function ensureDemoProject(reset=false){
 if(!reset){
  const existing=await db.projects.get(DEMO_ID);
  if(existing&&!existing.deleted)return DEMO_ID;
 }
 const asset = await loadDemoAssets();
 const now = Date.now();
 const project:Project={
  id:DEMO_ID, name:'DEMO · EÜ Lindenstraße – Neustadt', costCenter:'DEMO-0402', contract:'MUSTER-2026-0402',
  client:'Fiktive Stadt Neustadt', contractor:'Musterbau Ingenieurbau GmbH (fiktiv)',
  description:'Fiktiver Ersatzneubau einer Eisenbahnüberführung über die Lindenstraße mit Musterplänen, KI-generierter Fotodokumentation und Abrechnungsnachweisen.',
  location:'Neustadt (fiktiver Ort)', start:'2026-03-01', end:'2027-02-28', contact:'Demo-Projektteam',
  notes:'DEMO – alle Unterlagen und Preise sind fiktiv. Nicht für reale Bauausführung oder Abrechnung verwenden.', updated:now,
 };
 const buildings:Building[]=buildingDefs.map(([shortName,name],i)=>({id:demo('building-'+i),projectId:DEMO_ID,name,shortName,description:'Fiktives Bauwerk des Musterprojekts',created:now}));
 const categories=defaults.map(([name,color],order)=>({id:demo('category-'+order),projectId:DEMO_ID,name,color,order}));
 const parts:Part[]=partDefs.map(([shortName,name,bi],i)=>({
  id:demo('part-'+i), projectId:DEMO_ID, planId:demo('plan-0'), name, shortName,
  buildingId:buildings[bi].id, building:buildings[bi].name, categoryId:categories[bi===3?6:0].id,
  description:shortName==='F01'?'Stahlbetonfundament C30/37, 14,00 × 5,00 × 1,20 m. Fiktives Betonvolumen 84,00 m³.':`Musterbauteil ${shortName} der EÜ Lindenstraße.`,
  x:partPins[i][0]/1190.55, y:1-partPins[i][1]/841.89, page:1, pinShape:'circle', pinOpacity:85, updated:now,
 }));
 const plans:Plan[]=demoPlans.map(({file,name,number,revision,level,building,part},i)=>({
  id:demo('plan-'+i), projectId:DEMO_ID, name, number, revision, level,
  buildingId:building===undefined?undefined:buildings[building].id,
  partId:part===undefined?undefined:parts[part].id,
  date:'2026-09-01', description:'Fiktiver PDF-Musterplan · nicht zur Bauausführung',
  mime:PDF, blob:asset(file), created:now+i, type:level==='detail'?'Detailplan':'Ausführungsplan', status:'In Prüfung',
 }));
 const photos:Photo[]=demoPhotos.map(({file,part,date,location,caption},i)=>({
  id:demo('photo-'+i), projectId:DEMO_ID, partId:parts[part].id, buildingId:parts[part].buildingId,
  name:file, description:`${caption} KI-generiertes Musterfoto.`, location, categoryId:parts[part].categoryId,
  captured:date, created:now+i, original:asset(file),
 }));
 const foundation = parts[6];
 const documents:ConstructionDocument[]=demoDocuments.map(({file,kind,description},i)=>({
  id:demo('doc-'+i), projectId:DEMO_ID, partId:foundation.id, partIds:[foundation.id],
  buildingId:foundation.buildingId, categoryId:foundation.categoryId, kind, name:file,
  description:`${description} Fiktive Musterunterlage.`, created:now+i, mime:PDF, original:asset(file),
 }));
 const groups:[string,string,string,number,number][][]=[
 [['Baustelleneinrichtung','Einrichten','psch',1,125000],['Baustelleneinrichtung','Vorhalten','Mt',12,8500],['Baustelleneinrichtung','Räumen','psch',1,28000]],
 [['Verkehrssicherung','Umleitung','Mt',12,4200],['Verkehrssicherung','Absperrung','m',240,38]],
 [['Abbruch','Stahlbeton abbrechen','m³',420,180],['Abbruch','Asphalt aufnehmen','m²',850,24]],
 [['Erdbau','Baugrubenaushub','m³',2400,28.5],['Erdbau','Verfüllung','m³',1200,42],['Erdbau','Planum','m²',850,9]],
 [['Verbau','Spundwand','m²',920,190],['Verbau','Aussteifung','t',38,2400]],
 [['Gründung','Sauberkeitsschicht','m³',24,165],['Gründung','Fundamentbeton C30/37','m³',168,265],['Gründung','Betonstahl B500B','t',32,1580]],
 [['Stahlbeton','Wandschalung','m²',372,88],['Stahlbeton','Widerlagerbeton C35/45','m³',192,285],['Stahlbeton','Betonstahl B500B','t',48,1580],['Stahlbeton','Überbaubeton C35/45','m³',310,320],['Stahlbeton','Traggerüst','m²',240,390]],
 [['Abdichtung','Bitumenabdichtung','m²',420,52],['Abdichtung','Schutzlage','m²',420,22]],
 [['Ausstattung','Brückenlager','St',4,18500],['Ausstattung','Geländer','m',72,480]],
 [['Entwässerung','Rohr DN 200','m',180,125],['Entwässerung','Kontrollschacht','St',4,4200]],
 [['Straßenbau','Schottertragschicht','m³',280,62],['Straßenbau','Asphaltdeckschicht','m²',850,38]],
 [['Restleistungen','Bestandsunterlagen','psch',1,8500],['Restleistungen','Bauwerksreinigung','m²',420,12]]];
 const additional:typeof groups=[[["Baustelleneinrichtung", "Bauzaun", "m", 120, 48], ["Baustelleneinrichtung", "Baustellenbeleuchtung", "St", 12, 180], ["Baustelleneinrichtung", "Baustromverteiler", "St", 12, 180], ["Baustelleneinrichtung", "Bauwasseranschluss", "St", 12, 180], ["Baustelleneinrichtung", "Container Büro", "Mt", 12, 850], ["Baustelleneinrichtung", "Container Sanitär", "Mt", 12, 850], ["Baustelleneinrichtung", "Baustraße herstellen", "m²", 240, 35], ["Baustelleneinrichtung", "Baustraße rückbauen", "m²", 240, 35], ["Baustelleneinrichtung", "Vermessungsgrundnetz", "psch", 1, 4500]], [["Verkehrssicherung", "Verkehrszeichen", "St", 12, 180], ["Verkehrssicherung", "Leitbaken", "St", 12, 180], ["Verkehrssicherung", "Umleitungsbeschilderung", "St", 12, 180], ["Verkehrssicherung", "Fußgängerführung", "m", 120, 48], ["Verkehrssicherung", "Schutzwand", "m", 120, 48], ["Verkehrssicherung", "Verkehrskontrolle", "Mt", 12, 850]], [["Abbruch", "Geländer demontieren", "m", 120, 48], ["Abbruch", "Schotter aufnehmen", "m³", 120, 52], ["Abbruch", "Gleisrost ausbauen", "m", 120, 48], ["Abbruch", "Betonsägearbeiten", "m²", 240, 35], ["Abbruch", "Fugen schneiden", "m", 120, 48], ["Abbruch", "Mauerwerk abbrechen", "m³", 120, 52], ["Abbruch", "Abbruchmaterial sortieren", "t", 24, 1550], ["Abbruch", "Beton entsorgen", "t", 24, 1550], ["Abbruch", "Asphalt entsorgen", "t", 24, 1550], ["Abbruch", "Altleitungen ausbauen", "m", 120, 48]], [["Erdbau", "Oberboden abtragen", "m³", 120, 52], ["Erdbau", "Oberboden lagern", "m³", 120, 52], ["Erdbau", "Boden lösen", "m³", 120, 52], ["Erdbau", "Boden abfahren", "m³", 120, 52], ["Erdbau", "Boden entsorgen", "t", 24, 1550], ["Erdbau", "Frostschutzmaterial", "m³", 120, 52], ["Erdbau", "Bodenaustausch", "m³", 120, 52], ["Erdbau", "Geotextil", "m²", 240, 35], ["Erdbau", "Verdichtungsprüfung", "St", 12, 180], ["Erdbau", "Suchschachtung", "m³", 120, 52], ["Erdbau", "Handschachtung", "m³", 120, 52], ["Erdbau", "Böschung profilieren", "m²", 240, 35], ["Erdbau", "Arbeitsraum verfüllen", "m³", 120, 52]], [["Verbau", "Spundbohlen liefern", "t", 24, 1550], ["Verbau", "Rammgerät mobilisieren", "psch", 1, 4500], ["Verbau", "Spundbohlen einbringen", "m²", 240, 35], ["Verbau", "Spundbohlen ziehen", "m²", 240, 35], ["Verbau", "Gurtung", "t", 24, 1550], ["Verbau", "Steifen montieren", "t", 24, 1550], ["Verbau", "Steifen demontieren", "t", 24, 1550], ["Verbau", "Verbau überwachen", "Mt", 12, 850], ["Verbau", "Eckprofile", "m", 120, 48], ["Verbau", "Dichtschlösser", "m", 120, 48], ["Verbau", "Wasserhaltung einrichten", "psch", 1, 4500], ["Verbau", "Wasserhaltung betreiben", "h", 160, 95]], [["Gründung", "Gründungssohle abnehmen", "St", 12, 180], ["Gründung", "Fundamentschalung", "m²", 240, 35], ["Gründung", "Abstandhalter", "St", 12, 180], ["Gründung", "Anschlussbewehrung", "t", 24, 1550], ["Gründung", "Arbeitsfugenband", "m", 120, 48], ["Gründung", "Fundament nachbehandeln", "m²", 240, 35], ["Gründung", "Betonprüfung", "St", 12, 180]], [["Stahlbeton", "Flügelwandschalung", "m²", 240, 35], ["Stahlbeton", "Flügelwandbeton", "m³", 120, 52], ["Stahlbeton", "Flügelwandbewehrung", "t", 24, 1550], ["Stahlbeton", "Überbauschalung", "m²", 240, 35], ["Stahlbeton", "Überbaubewehrung", "t", 24, 1550], ["Stahlbeton", "Kappenschalung", "m²", 240, 35], ["Stahlbeton", "Kappenbeton", "m³", 120, 52], ["Stahlbeton", "Kappenbewehrung", "t", 24, 1550], ["Stahlbeton", "Gerüsttreppe", "St", 12, 180], ["Stahlbeton", "Beton nachbehandeln", "m²", 240, 35], ["Stahlbeton", "Arbeitsfuge vorbereiten", "m²", 240, 35], ["Stahlbeton", "Fugenband", "m", 120, 48], ["Stahlbeton", "Ankerhülsen", "St", 12, 180], ["Stahlbeton", "Einbauteile", "St", 12, 180], ["Stahlbeton", "Aussparungen", "St", 12, 180], ["Stahlbeton", "Betonkanten fasen", "m", 120, 48], ["Stahlbeton", "Sichtbetonflächen", "m²", 240, 35], ["Stahlbeton", "Betonprobekörper", "St", 12, 180], ["Stahlbeton", "Bewehrungsabnahme", "St", 12, 180], ["Stahlbeton", "Schalungsabnahme", "St", 12, 180], ["Stahlbeton", "Betonierabschnitt dokumentieren", "St", 12, 180], ["Stahlbeton", "Traggerüst rückbauen", "m²", 240, 35], ["Stahlbeton", "Schutzgerüst", "m²", 240, 35]], [["Abdichtung", "Untergrund reinigen", "m²", 240, 35], ["Abdichtung", "Untergrund prüfen", "m²", 240, 35], ["Abdichtung", "Grundierung", "m²", 240, 35], ["Abdichtung", "Kratzspachtelung", "m²", 240, 35], ["Abdichtung", "Schweißbahn erste Lage", "m²", 240, 35], ["Abdichtung", "Schweißbahn zweite Lage", "m²", 240, 35], ["Abdichtung", "Anschlussdetail", "m", 120, 48], ["Abdichtung", "Fugenabdichtung", "m", 120, 48], ["Abdichtung", "Schutzmatte", "m²", 240, 35], ["Abdichtung", "Abdichtungsprüfung", "St", 12, 180]], [["Ausstattung", "Lagerplatten", "St", 12, 180], ["Ausstattung", "Lagerverguss", "St", 12, 180], ["Ausstattung", "Lagerkontrolle", "St", 12, 180], ["Ausstattung", "Geländerpfosten", "St", 12, 180], ["Ausstattung", "Handlauf", "m", 120, 48], ["Ausstattung", "Berührungsschutz", "m²", 240, 35], ["Ausstattung", "Kabelkanal", "m", 120, 48], ["Ausstattung", "Erdungsanschluss", "St", 12, 180]], [["Entwässerung", "Rohrgraben", "m³", 120, 52], ["Entwässerung", "Rohrbettung", "m³", 120, 52], ["Entwässerung", "Rohr DN 150", "m", 120, 48], ["Entwässerung", "Rohrbogen", "St", 12, 180], ["Entwässerung", "Straßenablauf", "St", 12, 180], ["Entwässerung", "Schachtabdeckung", "St", 12, 180], ["Entwässerung", "Dichtheitsprüfung", "m", 120, 48], ["Entwässerung", "Kamerabefahrung", "m", 120, 48]], [["Straßenbau", "Planum prüfen", "St", 12, 180], ["Straßenbau", "Frostschutzschicht", "m³", 120, 52], ["Straßenbau", "Asphalttragschicht", "m²", 240, 35], ["Straßenbau", "Asphaltbinderschicht", "m²", 240, 35], ["Straßenbau", "Bordstein", "m", 120, 48], ["Straßenbau", "Gehwegpflaster", "m²", 240, 35], ["Straßenbau", "Rinnenpflaster", "m²", 240, 35], ["Straßenbau", "Markierung", "m", 120, 48], ["Straßenbau", "Bankett", "m²", 240, 35], ["Straßenbau", "Oberboden andecken", "m²", 240, 35]], [["Restleistungen", "Bestandsvermessung", "psch", 1, 4500], ["Restleistungen", "Dokumentation QS", "psch", 1, 4500], ["Restleistungen", "Baustellenabnahme", "St", 12, 180], ["Restleistungen", "Restflächen begrünen", "m²", 240, 35]]];
 additional.forEach((g,i)=>groups[i].push(...g));
 const lvPositions:LVPosition[]=groups.flatMap((g,i)=>{const oz=String(i+1).padStart(2,'0');return [{id:demo('title-'+i),projectId:DEMO_ID,oz,text:g[0][0],unit:'',contractQty:0,unitPrice:0,kind:'Hauptvertrag',rowType:'Titel' as const},...g.map(([,text,unit,contractQty,unitPrice],j)=>({id:demo(`lv-${i}-${j}`),projectId:DEMO_ID,oz:`${oz}.${String((j+1)*10).padStart(3,'0')}`,text,unit,contractQty,unitPrice,kind:'Hauptvertrag',rowType:'Position' as const,longText:`${text} einschließlich erforderlicher Nebenleistungen, Lieferung, Ausführung und Dokumentation. Abrechnung nach nachgewiesener Menge in ${unit}. Fiktive Musterposition.`}))]});
 for(const [i,text,unit,contractQty,unitPrice] of [[1,'Zusätzliche Wasserhaltung','h',160,95],[2,'Zusätzliche Leitungsquerung','St',2,4800]] as const)lvPositions.push({id:demo('nt-'+i),projectId:DEMO_ID,oz:`NT${i}.010`,text,unit,contractQty,unitPrice,kind:`Nachtrag ${i}`,rowType:'Position',longText:'Zusätzliche Leistung – fiktiver Nachtrag.'});
 const measurements:Measurement[]=lvPositions.filter(v=>v.rowType==='Position').slice(0,20).map((v,i)=>({id:demo('measurement-'+i),projectId:DEMO_ID,positionId:v.id,description:`Musteraufmaß ${v.text}`,expression:String(Math.round(v.contractQty*.65*100)/100),quantity:Math.round(v.contractQty*.65*100)/100,partId:parts[i%parts.length].id,created:now+i}));
 const snapshots:BillingSnapshot[]=[1,2].map((number)=>{const rows=lvPositions.filter(v=>v.rowType==='Position').map((v,i)=>({positionId:v.id,oz:v.oz,text:v.text,unit:v.unit,quantity:Math.round(v.contractQty*(number===1?.3:.65)*100)/100,unitPrice:v.unitPrice,amount:Math.round(v.contractQty*(number===1?.3:.65)*100)/100*v.unitPrice}));const total=rows.reduce((sum,r)=>sum+r.amount,0);return{id:demo('billing-'+number),projectId:DEMO_ID,number,created:now-86400000*(3-number),status:'DEMO – Musterabrechnung',rows,total,previousTotal:number===1?0:lvPositions.reduce((sum,v)=>sum+Math.round(v.contractQty*.3*100)/100*v.unitPrice,0)}});
 const planAreas:PlanArea[]=[
  {id:demo('area-building'),projectId:DEMO_ID,planId:plans[0].id,page:1,entityType:'building',entityId:buildings[0].id,markerType:'area',color:'#2674c7',points:[{x:.430,y:.441},{x:.584,y:.441},{x:.584,y:.584},{x:.430,y:.584}]},
  {id:demo('area-part'),projectId:DEMO_ID,planId:plans[2].id,page:1,entityType:'part',entityId:parts[0].id,markerType:'area',color:'#e28b2e',points:[{x:.203,y:.566},{x:.774,y:.566},{x:.774,y:.606},{x:.203,y:.606}]},
 ];
 const planRevisions:PlanRevision[]=[{
  id:demo('revision'),projectId:DEMO_ID,planId:plans[2].id,revision:'P0',date:'2026-08-20',
  status:'Archiviert',blob:asset(demoRevision),mime:PDF,created:now-86400000,
 }];
 const {sheet,entries}=demoAccounting(lvPositions,parts,now);
 const tables=[db.accountingEntries,db.accountingSheets,db.lvImports,db.buildings,db.categories,
  db.parts,db.plans,db.photos,db.documents,db.lvPositions,db.measurements,db.billingSnapshots,
  db.planAreas,db.planRevisions,db.documentKinds,db.asBuilt,db.partChecks,db.appCategories,db.projectCategorySettings];
 await db.transaction('rw',[db.projects,...tables],async()=>{
  const existing=await db.projects.get(DEMO_ID);
  if(existing&&!existing.deleted&&!reset)return;
  if(existing||reset){
   for(const table of tables)await table.where('projectId').equals(DEMO_ID).delete();
  }
  await db.projects.put(project);
  await db.buildings.bulkPut(buildings);
  await db.categories.bulkPut(categories);
  await db.parts.bulkPut(parts);
  await db.plans.bulkPut(plans);
  await db.photos.bulkPut(photos);
  await db.documents.bulkPut(documents);
  await db.lvPositions.bulkPut(lvPositions);
  await db.measurements.bulkPut(measurements);
  await db.billingSnapshots.bulkPut(snapshots);
  await db.planAreas.bulkPut(planAreas);
  await db.planRevisions.bulkPut(planRevisions);
  await db.documentKinds.bulkPut(demoDocuments.map(({kind:name},i)=>({id:demo('kind-'+i),projectId:DEMO_ID,name})));
  await db.accountingSheets.put(sheet);
  await db.accountingEntries.bulkPut(entries);
 });
 return DEMO_ID;
}

export const resetDemoProject=()=>ensureDemoProject(true);
