import {useEffect,useState,type ReactNode} from 'react';
import {db,type AppCategory,type CategorySystem} from './db';
import {ensureCategoryCatalog,addProjectCategory,setProjectCategoryHidden} from './categoryService';
const systems:{id:CategorySystem;name:string}[]=[{id:'component',name:'Bauteile'},{id:'plan',name:'Pläne'},{id:'quality',name:'Qualitätsunterlagen'}];
export default function CategorySettings({projectId,onChanged}:{projectId:string;onChanged?:()=>void}){
 const [system,setSystem]=useState<CategorySystem>('component');
 const [items,setItems]=useState<AppCategory[]>([]);
 const [hidden,setHidden]=useState<string[]>([]);
 const [collapsed,setCollapsed]=useState<string[]>([]);
 const [name,setName]=useState('');const [parent,setParent]=useState('');const [color,setColor]=useState('#2674c7');const [error,setError]=useState('');
 const refresh=async()=>{await ensureCategoryCatalog();const [all,settings]=await Promise.all([db.appCategories.where('system').equals(system).toArray(),db.projectCategorySettings.where('projectId').equals(projectId).toArray()]);setItems(all.filter(x=>x.scope==='global'||x.projectId===projectId).sort((a,b)=>a.sortOrder-b.sortOrder));setHidden(settings.filter(s=>s.hidden).map(s=>s.categoryId))};
 useEffect(()=>{void refresh()},[system,projectId]);
 const notify=async()=>{await refresh();onChanged?.()};
 const save=async()=>{try{await addProjectCategory(system,projectId,name,parent||undefined,system==='component'?color:undefined);setName('');setError('');await notify()}catch(e){setError(String(e))}};
 const toggle=async(c:AppCategory)=>{try{await setProjectCategoryHidden(projectId,c.id,!hidden.includes(c.id));setError('');await notify()}catch(e){setError(String(e))}};
 const remove=async(c:AppCategory)=>{if(c.scope!=='project')return;const used=system==='component'?await db.parts.where('projectId').equals(projectId).filter(p=>p.categoryId===c.id).count():system==='plan'?await db.plans.where('projectId').equals(projectId).filter(p=>p.archiveCategoryId===c.id).count():await db.documents.where('projectId').equals(projectId).filter(d=>d.archiveCategoryId===c.id).count();if(used||items.some(x=>x.parentId===c.id)){setError('Kategorie wird noch verwendet oder besitzt Unterkategorien.');return}await db.appCategories.delete(c.id);await notify()};
 const edit=async(c:AppCategory,field:'name'|'code'|'color',value:string)=>{const v=value.trim();if(field==='name'&&!v){setError('Bezeichnung darf nicht leer sein.');return}if(field==='name'&&items.some(x=>x.id!==c.id&&x.parentId===c.parentId&&x.name.toLocaleLowerCase('de')===v.toLocaleLowerCase('de'))){setError('Name in dieser Ebene bereits vorhanden.');return}await db.appCategories.update(c.id,{[field]:v});setError('');await notify()};
 const children=(id?:string)=>items.filter(c=>(c.parentId||undefined)===id);
 const render=(c:AppCategory,depth:number):ReactNode=>{const nested=children(c.id),isClosed=collapsed.includes(c.id);return <div key={c.id}>
  <div className="category-catalog-row" style={{paddingLeft:12+depth*18,opacity:hidden.includes(c.id)?.5:1}}>
   {nested.length>0?<button type="button" aria-label={(isClosed?'Aufklappen ':'Zuklappen ')+c.name} onClick={()=>setCollapsed(v=>isClosed?v.filter(x=>x!==c.id):[...v,c.id])}>{isClosed?'▸':'▾'}</button>:<span style={{width:30,display:'inline-block'}}/>}
   {system==='component'&&<input aria-label={'Farbe '+c.name} type="color" value={c.color||'#89939e'} onChange={e=>void edit(c,'color',e.target.value)} style={{width:35,minWidth:35,padding:0}}/>}
   <span className="category-catalog-name" style={{display:'flex',gap:6,alignItems:'center',flexWrap:'wrap'}}>
    {c.code&&<strong>{c.code}</strong>}
    <input aria-label={'Bezeichnung '+c.name} key={c.id+c.name} defaultValue={c.name} onBlur={e=>void edit(c,'name',e.target.value)} style={{minWidth:150,flex:1}}/>
   </span><small>{c.scope==='global'?'Standard':'Projekt'}</small>
   <button type="button" onClick={()=>void toggle(c)}>{hidden.includes(c.id)?'Einblenden':'Ausblenden'}</button>
   {c.scope==='project'&&<button type="button" onClick={()=>void remove(c)}>Löschen</button>}
  </div>{!isClosed&&nested.map(child=>render(child,depth+1))}</div>};
 const roots=items.filter(c=>!c.parentId||!items.some(x=>x.id===c.parentId));
 return <section className="structure category-settings"><h3>Kategorienverwaltung</h3><p>Globale Standards und projektbezogene Ergänzungen. Standardänderungen gelten für alle Projekte; Ausblenden nur für dieses Projekt.</p>
 <div className="structure-actions">{systems.map(s=><button type="button" className={system===s.id?'primary':''} key={s.id} onClick={()=>{setSystem(s.id);setParent('');setError('');setCollapsed([])}}>{s.name}</button>)}</div>
 {error&&<p role="alert" className="viewer-error">{error}</p>}
 <div className="category-catalog-list">{roots.map(c=>render(c,0))}</div>
 <div className="structure-detail"><h4>Projektkategorie ergänzen</h4><div className="structure-actions"><input aria-label="Neue Kategorie" placeholder="Bezeichnung" value={name} onChange={e=>setName(e.target.value)}/>
 {system!=='component'&&<select aria-label="Übergeordnete Kategorie" value={parent} onChange={e=>setParent(e.target.value)}><option value="">Ohne Oberkategorie</option>{items.filter(c=>!hidden.includes(c.id)).map(c=><option key={c.id} value={c.id}>{c.code||''} {c.name}</option>)}</select>}
 {system==='component'&&<input aria-label="Neue Kategoriefarbe" type="color" value={color} onChange={e=>setColor(e.target.value)}/>}<button className="primary" type="button" onClick={()=>void save()}>Hinzufügen</button></div></div></section>
}
