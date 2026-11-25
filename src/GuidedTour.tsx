import React,{useEffect,useState} from 'react';
import {createPortal} from 'react-dom';
import {ArrowLeft,ArrowRight,BookOpen,CheckCircle2,X} from 'lucide-react';
export type TourStep={chapter:string;title:string;description:string;area:string;selector?:string;task?:string};
export const TOUR_STEPS:TourStep[]=[
  {
    "chapter": "Start und Struktur",
    "title": "Willkommen",
    "description": "Erkunde die fiktive EÜ Lindenstraße – Neustadt mit technischen PDF-Plänen und KI-generierten Baustellenfotos. Alle Übungen betreffen das Musterprojekt.",
    "area": "Dashboard",
    "selector": ".dash"
  },
  {
    "chapter": "Start und Struktur",
    "title": "Projekt-Dashboard",
    "description": "Kacheln und Listen führen zu Dokumentationsstand, offenen Punkten, Fotos und Abrechnung.",
    "area": "Dashboard",
    "selector": ".dash"
  },
  {
    "chapter": "Start und Struktur",
    "title": "Navigation",
    "description": "Über Projekte und Bereiche wechselst du die Ansicht; Zurück führt zum vorherigen Bereich.",
    "area": "Dashboard",
    "selector": "header"
  },
  {
    "chapter": "Start und Struktur",
    "title": "Bauwerke",
    "description": "Bauwerke bilden die übergeordnete Struktur.",
    "area": "Bauwerke",
    "selector": ".section",
    "task": "Öffnen Sie ein Bauwerk und prüfe seine Daten."
  },
  {
    "chapter": "Start und Struktur",
    "title": "Bauteile",
    "description": "Bauteile besitzen Bauwerkszuordnung, Kategorie und Kurzbezeichnung.",
    "area": "Bauteile",
    "selector": ".parts-layout",
    "task": "Öffnen Sie ein Bauteil und prüfe seine Zuordnung."
  },
  {
    "chapter": "Start und Struktur",
    "title": "Bauteil hinzufügen",
    "description": "Neue Bauteile können mit Kategorie und Bauwerk angelegt werden.",
    "area": "Bauteile",
    "selector": ".parts-heading .primary",
    "task": "Öffnen Sie den Dialog und schließe ihn ohne Speichern."
  },
  {
    "chapter": "Pläne und Zeichnungen",
    "title": "Planverwaltung",
    "description": "Übersichts-, Bauwerks-, Bauteil- und Detailpläne verwalten; Kategorie, Status und Revision prüfen.",
    "area": "Planverwaltung",
    "selector": ".section"
  },
  {
    "chapter": "Pläne und Zeichnungen",
    "title": "Planrevisionen",
    "description": "Eine neue Revision ersetzt die aktuelle Fassung; ältere Revisionen bleiben nachvollziehbar.",
    "area": "Planverwaltung",
    "selector": ".section"
  },
  {
    "chapter": "Pläne und Zeichnungen",
    "title": "Planviewer",
    "description": "Pläne öffnen, verschieben, zoomen und einpassen.",
    "area": "Übersichtspläne",
    "selector": ".workspace"
  },
  {
    "chapter": "Pläne und Zeichnungen",
    "title": "Markierungen",
    "description": "Mit Markierung hinzufügen zwischen Bauwerk oder Bauteil sowie Pin oder Fläche wählen. Doppelklick schließt ein Polygon.",
    "area": "Übersichtspläne",
    "selector": ".workspace"
  },
  {
    "chapter": "Pläne und Zeichnungen",
    "title": "Flächen und Pins bearbeiten",
    "description": "Flächenpunkte, Farbe und Pins bearbeiten; Markierung entfernen, ohne das Bauteil zu löschen.",
    "area": "Übersichtspläne",
    "selector": ".workspace"
  },
  {
    "chapter": "Pläne und Zeichnungen",
    "title": "Sichtbarkeit und Transparenz",
    "description": "Pins und Flächen getrennt anzeigen oder ausblenden; Transparenz und Kategorienfilter einstellen.",
    "area": "Übersichtspläne",
    "selector": ".workspace"
  },
  {
    "chapter": "Pläne und Zeichnungen",
    "title": "Bestandsplanung",
    "description": "Zeichnungen gruppieren, bearbeiten und exportieren. Freihand, Linien, Pfeile, Text, Rechtecke und Kreise stehen zur Verfügung.",
    "area": "Bestandsplanung",
    "selector": ".section",
    "task": "Testen Sie Farbe, Füllung, Deckkraft und Rückgängig aus."
  },
  {
    "chapter": "Fotos und Qualitätssicherung",
    "title": "Fotos hinzufügen",
    "description": "Kamera oder Fotos hinzufügen öffnet nach der Auswahl automatisch die Fotodetails. Mehrere Bilder werden nacheinander bearbeitet.",
    "area": "Fotodokumentation",
    "selector": ".photo-head"
  },
  {
    "chapter": "Fotos und Qualitätssicherung",
    "title": "Fotodetails",
    "description": "Bauwerk und Bauteil sind freiwillig. Nach Bauwerksauswahl werden nur passende Bauteile angeboten. Speichern übernimmt das Foto; Schließen verwirft ein neues ungespeichertes Foto.",
    "area": "Fotodokumentation",
    "selector": ".photo-grid",
    "task": "Öffnen Sie ein vorhandenes Musterfoto und prüfe die Auswahl."
  },
  {
    "chapter": "Fotos und Qualitätssicherung",
    "title": "Fotos annotieren",
    "description": "Das Original bleibt erhalten. Zeichne Pfeile, Kreise, Rechtecke oder Texte; Füllung, Deckkraft und Strichstärke sind einstellbar.",
    "area": "Fotodokumentation",
    "selector": ".photo-grid"
  },
  {
    "chapter": "Fotos und Qualitätssicherung",
    "title": "Fotofilter und Fotobericht",
    "description": "Filtere nach Kategorie, Datum und Annotation. Mehrfachauswahl erlaubt Sammelzuordnung und PDF-Fotobericht.",
    "area": "Fotodokumentation",
    "selector": ".photo-filters"
  },
  {
    "chapter": "Fotos und Qualitätssicherung",
    "title": "Qualitätsnachweise importieren",
    "description": "Beim Import QS-Ablagekategorie und Dokumentart unabhängig wählen. Originaldateien bleiben erhalten.",
    "area": "Qualitätsnachweise",
    "selector": ".doc-upload"
  },
  {
    "chapter": "Fotos und Qualitätssicherung",
    "title": "Mehrfachzuordnung",
    "description": "Ein Nachweis kann mehreren Bauteilen oder projektweit zugeordnet werden. Sammelbearbeitung und Filter erleichtern die Pflege.",
    "area": "Qualitätsnachweise",
    "selector": ".doc-grid",
    "task": "Öffnen Sie einen Musternachweis und prüfe seine Zuordnung."
  },
  {
    "chapter": "Fotos und Qualitätssicherung",
    "title": "Nachweisübersicht",
    "description": "Prüfen Sie vorhandene Nachweise und Dokumentationslücken je Bauteil.",
    "area": "Nachweisübersicht",
    "selector": ".section"
  },
  {
    "chapter": "Leistungsverzeichnis und Abrechnung",
    "title": "LV importieren",
    "description": "GAEB/RIBX81, XML, Excel und CSV können über die Importvorschau eingelesen werden. Prüfen Sie Mengen, Einheiten und Preise vor der Bestätigung.",
    "area": "Leistungsverzeichnis",
    "selector": ".accounting-heading"
  },
  {
    "chapter": "Leistungsverzeichnis und Abrechnung",
    "title": "Hauptvertrag und Nachträge",
    "description": "HLV und Nachträge getrennt betrachten; nach OZ, Kurz- oder Langtext suchen.",
    "area": "Leistungsverzeichnis",
    "selector": ".accounting-v038"
  },
  {
    "chapter": "Leistungsverzeichnis und Abrechnung",
    "title": "Abrechnungszettel",
    "description": "Abrechnungszettel mit Zeitraum und Status anlegen, bearbeiten und auswählen.",
    "area": "Abrechnung",
    "selector": ".accounting-sheet-controls",
    "task": "Wählen Sie den vorbereiteten DEMO-Abrechnungszettel."
  },
  {
    "chapter": "Leistungsverzeichnis und Abrechnung",
    "title": "Leistung melden",
    "description": "Leistung ergänzen öffnet die Eingabe. LV-Position über die hierarchische Auswahl bestimmen; Einheit stammt aus dem LV.",
    "area": "Abrechnung",
    "selector": ".accounting-actions",
    "task": "Öffnen Sie Leistung ergänzen oder Bearbeiten bei einer Musterposition."
  },
  {
    "chapter": "Leistungsverzeichnis und Abrechnung",
    "title": "Bauwerke, Bauteile und Pläne",
    "description": "Mehrere Bauwerke, Bauteile und Pläne über die strukturierten Auswahldialoge zuordnen.",
    "area": "Abrechnung",
    "selector": ".accounting-sheet-panel"
  },
  {
    "chapter": "Leistungsverzeichnis und Abrechnung",
    "title": "Mengen und Nachweise",
    "description": "Zuwachsmenge, Grundlage, Erläuterung und Hinweise erfassen. QS-Unterlagen und Fotos passend zur Bauteilauswahl zuordnen.",
    "area": "Abrechnung",
    "selector": ".accounting-sheet-panel"
  },
  {
    "chapter": "Leistungsverzeichnis und Abrechnung",
    "title": "Fotos zur Leistung",
    "description": "Fotos auswählen oder direkt hinzufügen. Neu hinzugefügte Fotos werden auch in der Fotodokumentation gespeichert.",
    "area": "Abrechnung",
    "selector": ".accounting-sheet-panel"
  },
  {
    "chapter": "Leistungsverzeichnis und Abrechnung",
    "title": "Optionales Feldaufmaß",
    "description": "Feldaufmaß erstellen aktivieren, wenn ein separates Aufmaßblatt erforderlich ist. Die Gewerke werden automatisch aus den Bauteilkategorien ermittelt.",
    "area": "Abrechnung",
    "selector": ".accounting-sheet-panel",
    "task": "Öffnen Sie die erste Musterleistung und prüfe das aktivierte Feldaufmaß."
  },
  {
    "chapter": "Leistungsverzeichnis und Abrechnung",
    "title": "Aufmaßskizze",
    "description": "Maße und Berechnung erfassen; Skizze mit Stift, Linie, Kreis, Rechteck, Pfeil oder Text erstellen. Fotos können eingefügt werden.",
    "area": "Abrechnung",
    "selector": ".accounting-sheet-panel"
  },
  {
    "chapter": "Leistungsverzeichnis und Abrechnung",
    "title": "Feldaufmaß als PDF",
    "description": "Einseitiges A4-Blatt mit Leistungszuordnung, Berechnung, Skizze, Gesamtmenge und festen Unterschriftsfeldern. Texte sind kopierbar; Fotos bleiben Rasterbilder.",
    "area": "Abrechnung",
    "selector": ".accounting-sheet-panel",
    "task": "Exportieren Sie das Feldaufmaß einer Musterleistung."
  },
  {
    "chapter": "Leistungsverzeichnis und Abrechnung",
    "title": "Leistungen duplizieren oder verschieben",
    "description": "Eine Leistung in einen vorhandenen oder neuen Zettel übertragen. Nachweise, Fotos und Feldaufmaß optional mitnehmen; beim Duplizieren neue Menge erfassen.",
    "area": "Abrechnung",
    "selector": ".billing-table"
  },
  {
    "chapter": "Leistungsverzeichnis und Abrechnung",
    "title": "PDF-Zuarbeit",
    "description": "Der Gesamtexport enthält den Abrechnungszettel und vorgesehene Anlagen mit Seitenverzeichnis, ohne einzelne Anlagendeckblätter.",
    "area": "Abrechnung",
    "selector": ".accounting-actions"
  },
  {
    "chapter": "Leistungsverzeichnis und Abrechnung",
    "title": "ZIP-Export",
    "description": "Der ZIP-Export enthält den reinen Abrechnungszettel, Originalpläne, QS-Dateien, Einzelbilder und einzelne Feldaufmaß-PDFs in Ordnern.",
    "area": "Abrechnung",
    "selector": ".accounting-actions",
    "task": "Testen Sie PDF-Zuarbeit und ZIP-Export mit dem Musterzettel aus."
  },
  {
    "chapter": "Dokumentation und Einstellungen",
    "title": "Gesamtdokumentation",
    "description": "Bauteil-, Bauwerks- oder Projektdokumentation mit Fotos und Nachweisen zusammenstellen.",
    "area": "Gesamtdokumentation",
    "selector": ".section"
  },
  {
    "chapter": "Dokumentation und Einstellungen",
    "title": "Kategorienverwaltung",
    "description": "Bauteil-, Plan- und QS-Kategorien sind getrennte Systeme. Globale Standards und projektspezifische Ergänzungen verwalten.",
    "area": "Einstellungen",
    "selector": ".section",
    "task": "Globale Änderungen können auch echte Projekte betreffen: hier nur ansehen."
  },
  {
    "chapter": "Dokumentation und Einstellungen",
    "title": "Dokumentarten",
    "description": "Dokumentarten getrennt von QS-Ablagekategorien verwalten.",
    "area": "Einstellungen",
    "selector": ".section"
  },
  {
    "chapter": "Dokumentation und Einstellungen",
    "title": "Datensicherung",
    "description": "Projekt als JSON sichern und bei Bedarf importieren. Lokale Browserdaten regelmäßig extern sichern.",
    "area": "Einstellungen",
    "selector": ".section"
  },
  {
    "chapter": "Dokumentation und Einstellungen",
    "title": "Einführung abgeschlossen",
    "description": "Die Demo kann frei erkundet werden. Über die Kapitelauswahl können Sie einzelne Themen erneut aufrufen.",
    "area": "Dashboard",
    "selector": ".dash"
  }
];
const STORAGE='sbau-tour-0400-step';
export default function GuidedTour({onArea,onExit}:{onArea:(area:string)=>void;onExit:()=>void}){
 const [step,setStep]=useState(()=>{const v=Number(localStorage.getItem(STORAGE)||'0');return Number.isInteger(v)&&v>=0&&v<TOUR_STEPS.length?v:0});
 const [position,setPosition]=useState<React.CSSProperties>({top:'20%',left:'50%',transform:'translateX(-50%)'});
 const [compact,setCompact]=useState(false);
 const [focus,setFocus]=useState<{left:number;top:number;width:number;height:number}|null>(null);
 const steps=compact?TOUR_STEPS.filter((_,i)=>[0,2,5,8,13,16,20,22,23,27,31,32,33,37].includes(i)):TOUR_STEPS;
 const current=steps[step]||steps[0];
 useEffect(()=>{onArea(current.area);localStorage.setItem(STORAGE,String(step))},[step,current.area,onArea]);
 useEffect(()=>{
  const update=()=>{
   document.querySelectorAll('[data-tour-focus]').forEach(el=>el.removeAttribute('data-tour-focus'));
   const target=current.selector?document.querySelector(current.selector):null;
   const margin=16;
   const width=Math.min(370,window.innerWidth-2*margin);
   const height=Math.min(350,window.innerHeight-2*margin);
   if(!target){setFocus(null);setPosition({top:margin,left:Math.max(margin,window.innerWidth-width-margin),transform:'none'});return}
   target.setAttribute('data-tour-focus','true');
   const r=target.getBoundingClientRect();
   const leftEdge=Math.max(0,r.left-5),topEdge=Math.max(0,r.top-5);setFocus({left:leftEdge,top:topEdge,width:Math.max(0,Math.min(window.innerWidth,r.right+5)-leftEdge),height:Math.max(0,Math.min(window.innerHeight,r.bottom+5)-topEdge)});
   // Large workspace panels must never be used as a popup's vertical anchor.
   // In particular, the Planverwaltung step used to put the popup behind its panel.
   const preferredTop=r.height>window.innerHeight*.45?margin:(r.bottom+height+margin<window.innerHeight?r.bottom+12:r.top-height-12);
   const top=Math.max(margin,Math.min(window.innerHeight-height-margin,preferredTop));
   const left=Math.max(margin,Math.min(window.innerWidth-width-margin,r.left));
   setPosition({top,left,transform:'none'});
  };
  const id=window.setTimeout(update,180);
  window.addEventListener('resize',update);window.addEventListener('scroll',update,true);const refresh=window.setInterval(update,700);
  return()=>{window.clearTimeout(id);window.clearInterval(refresh);window.removeEventListener('scroll',update,true);window.removeEventListener('resize',update);document.querySelectorAll('[data-tour-focus]').forEach(el=>el.removeAttribute('data-tour-focus'))};
 },[step,current.selector,current.area]);
 return createPortal(<div className="tour-root" aria-live="polite">{focus?<div className="tour-spotlight" style={focus}/>:<div className="tour-shade"/>}<section className="tour-popover" role="dialog" aria-modal="false" aria-label="Interaktive Einführung" style={position}><div className="tour-top"><span><BookOpen size={17}/> Einführung · Schritt {step+1} von {steps.length}</span><button className="modal-close-x" title="Tour beenden" aria-label="Tour beenden" onClick={onExit}><X size={17}/></button></div><label className="tour-chapter">Modus<select value={compact?'short':'full'} onChange={e=>{setStep(0);setCompact(e.target.value==='short')}}><option value="full">Einführungstour</option><option value="short">Programmvorstellung</option></select></label><label className="tour-chapter">Kapitel<select value={current.chapter} onChange={e=>setStep(steps.findIndex(t=>t.chapter===e.target.value))}>{Array.from(new Set(steps.map(t=>t.chapter))).map(c=><option key={c}>{c}</option>)}</select></label><div className="tour-progress"><span style={{width:`${(step+1)/steps.length*100}%`}}/></div><h3>{current.title}</h3><p>{current.description}</p>{current.task&&<p className="tour-task">{current.task}</p>}<div className="tour-controls"><button disabled={step===0} onClick={()=>setStep(i=>i-1)}><ArrowLeft size={16}/> Zurück</button>{step===steps.length-1?<button className="primary" onClick={()=>{localStorage.removeItem(STORAGE);onExit()}}><CheckCircle2 size={16}/> Abschließen</button>:<button className="primary" onClick={()=>setStep(i=>i+1)}>Weiter <ArrowRight size={16}/></button>}</div><small>Sie können die Tour jederzeit schließen.</small></section></div>,document.body);
}
