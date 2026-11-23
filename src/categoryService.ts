import {db,uid,type AppCategory,type CategorySystem} from './db';
import {STANDARD_CATEGORIES} from './categoryCatalog';
export async function ensureCategoryCatalog(){
 const existing=await db.appCategories.where('scope').equals('global').count();
 if(!existing)await db.appCategories.bulkPut(STANDARD_CATEGORIES);
}
export async function effectiveCategories(system:CategorySystem,projectId:string){
 await ensureCategoryCatalog();
 const [all,settings]=await Promise.all([db.appCategories.where('system').equals(system).toArray(),db.projectCategorySettings.where('projectId').equals(projectId).toArray()]);
 const hidden=new Set(settings.filter(s=>s.hidden).map(s=>s.categoryId));
 return all.filter(c=>c.active&&(c.scope==='global'||c.projectId===projectId)&&!hidden.has(c.id)).sort((a,b)=>a.sortOrder-b.sortOrder);
}
export async function addProjectCategory(system:CategorySystem,projectId:string,name:string,parentId?:string,color?:string){
 const normalized=name.trim();if(!normalized)throw Error('Bezeichnung erforderlich');
 const all=await effectiveCategories(system,projectId);
 if(all.some(c=>c.parentId===parentId&&c.name.toLocaleLowerCase('de')===normalized.toLocaleLowerCase('de')))throw Error('Kategorie existiert bereits');
 const item:AppCategory={id:uid(),system,scope:'project',projectId,name:normalized,parentId,color,sortOrder:Date.now(),active:true};
 await db.appCategories.add(item);if(system==='component')await db.categories.add({id:item.id,projectId,name:normalized,color:color||'#89939e',order:Date.now()});return item;
}
export async function setProjectCategoryHidden(projectId:string,categoryId:string,hidden:boolean){
 await db.projectCategorySettings.put({id:projectId+':'+categoryId,projectId,categoryId,hidden});
}
