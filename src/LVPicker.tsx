import {useState} from 'react';
import {ChevronDown,ChevronRight,X} from 'lucide-react';
import type {LVPosition} from './db';
type Node={key:string;label:string;children:Node[];position?:LVPosition};
export function buildLVTree(positions:LVPosition[]):Node[]{
 const roots:Node[]=[];
 for(const kind of ['Vertrag','Nachtrag']){
  const root:Node={key:kind,label:kind==='Vertrag'?'Hauptleistungsverzeichnis':'Nachtragsleistungsverzeichnis',children:[]};roots.push(root);
  const rows=positions.filter(p=>(p.kind==='Nachtrag'?'Nachtrag':'Vertrag')===kind);
  const groups=new Map<string,Node>();
  const ensure=(path:string):Node=>{const existing=groups.get(path);if(existing)return existing;const parent=path.includes('.')?ensure(path.slice(0,path.lastIndexOf('.'))):root;const n:Node={key:kind+':'+path,label:path,children:[]};groups.set(path,n);parent.children.push(n);return n};
  for(const p of rows){const path=p.oz.replace(/\.+$/,'');if(p.rowType==='Titel'||p.rowType==='Untertitel'){ensure(path).label=p.oz+' '+p.text;continue}const parent=path.includes('.')?ensure(path.slice(0,path.lastIndexOf('.'))):root;parent.children.push({key:p.id,label:p.oz+' – '+p.text,children:[],position:p})}
 }
 return roots;
}
export default function LVPicker({positions,selected,onClose,onSelect}:{positions:LVPosition[];selected:string;onClose:()=>void;onSelect:(id:string)=>void}){
 const [query,setQuery]=useState(''),[open,setOpen]=useState<string[]>(['Vertrag','Nachtrag']);
 const roots=buildLVTree(positions.filter(p=>!p.archived||p.id===selected));const q=query.trim().toLocaleLowerCase('de');
 const matches=(n:Node):boolean=>!!n.position&&(n.label+' '+(n.position.longText||'')).toLocaleLowerCase('de').includes(q)||n.children.some(matches);
 const render=(n:Node,depth:number):React.ReactNode=>{if(q&&!matches(n))return null;const expanded=!!q||open.includes(n.key);return <div key={n.key}><button type="button" className={'lv-tree-row '+(n.position?.id===selected?'primary':'')} style={{paddingLeft:12+depth*18}} onClick={()=>n.position?onSelect(n.position.id):setOpen(old=>old.includes(n.key)?old.filter(k=>k!==n.key):[...old,n.key])} aria-expanded={n.position?undefined:expanded}>{!n.position&&(expanded?<ChevronDown size={16}/>:<ChevronRight size={16}/>)}<span>{n.label}</span>{n.position&&<small>{n.position.unit}</small>}</button>{!n.position&&expanded&&n.children.map(c=>render(c,depth+1))}</div>};
 return <div className="modalback lv-picker-back" onClick={onClose}><div className="modal lv-picker" role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}><div className="modal-head"><h2>LV-Position auswählen</h2><button className="modal-close-x" onClick={onClose} aria-label="Schließen"><X size={20}/></button></div><input autoFocus placeholder="OZ oder Kurztext suchen …" value={query} onChange={e=>setQuery(e.target.value)}/><div className="lv-tree">{roots.map(n=>render(n,0))}{q&&!roots.some(matches)&&<p>Keine Position gefunden.</p>}</div></div></div>
}
