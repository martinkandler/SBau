import type {Plan} from './db';

const files = import.meta.glob<string>('./demo-assets/*', {
  eager: true,
  import: 'default',
  query: '?url&no-inline',
});

export const PDF = 'application/pdf';

type DemoPlan = {
  file: string;
  name: string;
  number: string;
  revision: string;
  level: NonNullable<Plan['level']>;
  building?: number;
  part?: number;
};

export const demoPlans: DemoPlan[] = [
  {file: '00_Lageplan.pdf', name: 'Städtischer Lageplan', number: 'L01', revision: '01', level: 'overview'},
  {file: '00_Baustelleneinrichtung.pdf', name: 'Baustelleneinrichtung und Verkehrsführung', number: 'L02', revision: '01', level: 'overview'},
  {file: '01_Bauwerksuebersicht.pdf', name: 'Bauwerksübersicht Brücke', number: '01', revision: '00', level: 'building', building: 0},
  {file: '07_Widerlager_West.pdf', name: 'Widerlager West – Übersicht', number: 'B02', revision: '01', level: 'building', building: 1},
  {file: '08_Widerlager_Ost.pdf', name: 'Widerlager Ost – Übersicht', number: 'B03', revision: '01', level: 'building', building: 2},
  {file: '09_Ueberbau_Schalplan.pdf', name: 'Überbau – Schalplan', number: 'B04', revision: '01', level: 'part', building: 0, part: 0},
  {file: '02_Schalplan_Widerlager.pdf', name: 'Widerlager West – Schalplan', number: '02', revision: '00', level: 'part', building: 1, part: 5},
  {file: '10_Fluegelwand_Bewehrung.pdf', name: 'Flügelwand West Nord – Bewehrungsanordnung', number: 'B05', revision: '01', level: 'part', building: 1, part: 7},
  {file: '11_Entwaesserung_Leitungsplan.pdf', name: 'Straßenentwässerung – Leitungsplan', number: 'E01', revision: '01', level: 'part', building: 3, part: 13},
  {file: '12_Ueberbau_Kappendetail.pdf', name: 'Brückenkappe Nord – Anschlussdetail', number: 'D01', revision: '01', level: 'detail', building: 0, part: 1},
  {file: '03_Fundament.pdf', name: 'Fundament F01 – Grundriss und Schnitt', number: '03', revision: '00', level: 'detail', building: 1, part: 6},
  {file: '13_Entwaesserung_Schachtdetail.pdf', name: 'Kontrollschacht SCH01 – Prinzipschnitt', number: 'D02', revision: '01', level: 'detail', building: 3, part: 15},
];

export const demoPhotos = [
  {file: '01_Fundament_F01_Bewehrung_Uebersicht.jpg', part: 6, date: '2026-09-14', location: 'Baugrube West', caption: 'Bewehrungskorb und Randschalung des Fundaments F01 vor der Betonage.'},
  {file: '02_Fundament_F01_Bewehrung_Detail.jpg', part: 6, date: '2026-09-14', location: 'Baugrube West', caption: 'Detail der Fundamentbewehrung mit Anschlussstäben der aufgehenden Wand.'},
  {file: '03_Fundament_F01_Betonage.jpg', part: 6, date: '2026-09-15', location: 'Baugrube West', caption: 'Einbau des Frischbetons für das Fundament F01.'},
  {file: '04_Widerlager_W01_Schalung.jpg', part: 5, date: '2026-10-01', location: 'Widerlager West', caption: 'Wandschalung mit Abstützung über dem bereits hergestellten Fundament.'},
  {file: '05_Ueberbau_Lindenstrasse.jpg', part: 0, date: '2026-10-26', location: 'Lindenstraße', caption: 'Blick von der gesperrten Lindenstraße auf den weitgehend fertiggestellten Überbau.'},
  {file: '06_Entwaesserung_DN01.jpg', part: 13, date: '2026-11-04', location: 'Lindenstraße, Nordseite', caption: 'Entwässerungsleitung DN 200 in der Rohrbettung vor der Verfüllung.'},
];

export const demoDocuments = [
  {file: '04_Frischbetonpruefung.pdf', kind: 'Betonprüfprotokoll', description: 'Frischbetonprüfung C30/37 am 15.09.2026 zum Lieferschein M-260915-01.'},
  {file: '05_Betonlieferschein.pdf', kind: 'Betonlieferschein', description: 'M-260915-01 für Fundament F01, 8,00 m³ als Einzellieferung.'},
  {file: '06_Feldaufmass.pdf', kind: 'Feldaufmaß', description: 'Feldaufmaß am 15.09.2026. 14,00 × 5,00 × 1,20 m ergeben 84,00 m³.'},
];

export const demoRevision = '01_Bauwerksuebersicht_Vorabzug.pdf';

export async function loadDemoAssets() {
  const names = [...demoPlans, ...demoPhotos, ...demoDocuments].map(asset => asset.file);
  names.push(demoRevision);
  const entries = await Promise.all(names.map(async name => {
    const url = files['./demo-assets/' + name];
    if (!url) throw new Error('Musterdatei fehlt im Paket: ' + name);
    const response = await fetch(url);
    const mime = name.endsWith('.pdf') ? PDF : 'image/jpeg';
    const blob = await response.blob();
    if (!response.ok || blob.type !== mime || !blob.size) {
      throw new Error('Musterdatei konnte nicht geladen werden: ' + name);
    }
    return [name, blob] as const;
  }));
  const blobs = new Map(entries);
  return (name: string) => blobs.get(name)!;
}
