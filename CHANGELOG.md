## 0.39.26 – Feldaufmaß: automatische Gewerke

- Größerer PDF-Titel; Gewerk aus den zugeordneten Bauteilkategorien, ohne Dubletten.
- Gewerk mit eigener Beschriftung im Kopf; keine manuelle Eingabe.
- Beide ungenutzten Info.txt entfernt.

## 0.39.25 – Feldaufmaßkopf und Paketbereinigung

- Bauvorhaben, Feldaufmaßnummer und Gewerk neben dem Logo im Kopf; Leistungszuordnung und Ausgeführte Leistungen – Maße und Berechnung.
- Eine aktuelle RELEASE.md; bisherige Release-Notizen im CHANGELOG archiviert. Nicht verwendete Excel-Vorlage entfernt.

## 0.39.24 – Reihenfolge Feldaufmaß

- Ausgeführte Leistungen / Maße vor der Aufmaßskizze; Abschnittsnummern angepasst. Einseitiges Layout und alle Exportwege unverändert.

## 0.39.23 – Feldaufmaß Kopf und Textumbruch

- Bauvorhaben, Feldaufmaßnummer und Gewerk im Kopfbereich; Abrechnungszettel entfällt. Aufmaßtext nutzt die volle Breite mit begrenzter PDF-Textbreite.

## 0.39.22 – Kompaktes Feldaufmaß

- LV-Position mit Kurztext in einer Zeile; Bauwerke und Bauteile getrennt. Kostenstelle, doppeltes Datum und allgemeine Erläuterungen/Hinweise entfallen nur im Feldaufmaß. Eigene Aufmaßtexte bleiben erhalten.
- Feldaufmaß-Checkbox linksbündig; einseitiges A4-Layout und alle Exportwege bleiben erhalten.

## 0.39.21 – Einseitiges Feldaufmaß

- Festes A4-Formblatt mit dynamischem Skizzenbereich und Unterschriften am Seitenende.
- Gemeinsames Layout für Einzel-, PDF- und ZIP-Export; Warnung bei nicht lesbar unterzubringenden Inhalten.

## 0.39.20 – ZIP-Export

- Separater ZIP-Export mit Abrechnungs-PDF ohne eingebettete Anlagen, Dateipfadverzeichnis, Originalplänen, QS-Nachweisen, Originalfotos und einzelnen aktiven Feldaufmaßen.
- Doppelte Dateizuordnungen werden zusammengeführt; gleichnamige Dateien erhalten eindeutige Namen. PDF-Gesamtexport bleibt erhalten.

## 0.39.19 – Vektor-PDF und Feldaufmaß

- Gemeinsame PDF-Ausgabe mit selektierbaren Texten, Tabellen und Feldaufmaßskizzen.
- Neues Feldaufmaßlayout; Anlagenverzeichnis mit tatsächlichen Startseiten ohne Anlagendeckblätter.
- Original-PDF-Nachweise bleiben erhalten. Bestandsplan-Komposit und Fotos bleiben rasterbasiert.

## 0.39.18 – Optionales Feldaufmaß

- Feldaufmaß per Checkbox aktivieren; nur aktivierte Aufmaße werden exportiert. Bestehende Daten bleiben erhalten.

## 0.39.17 – Tabellarischer Abrechnungs-PDF-Export

- Vier bisherige Tabellenspalten wiederhergestellt.
- Zwischenüberschriften, Trennlinien, Textumbruch und dynamische Zeilenhöhen.
- Wiederholter Tabellenkopf bei Seitenwechsel; Anlagenexport unverändert.

## 0.39.16 – Abrechnungs-PDF und Feldaufmaß

- Getrennte Erläuterungen, Hinweise und Zuordnungen im PDF.
- Positionsbezogene Anlagen: Feldaufmaße, ausgewählte Lieferscheine und Fotos.
- Automatische Feldaufmaßnummern je Abrechnungszettel und LV-Übernahme.
- Flächenfüllung und Deckkraft in Zeichenwerkzeugen.
- Neue Abhängigkeit pdf-lib für Original-PDF-Seiten.

## 0.39.15 – Abrechnungsleistungen übertragen

- Einzelne Leistungen duplizieren oder verschieben; bestehende oder neue Zielzettel.
- Kopien ohne Zuwachsmenge; QS, Fotos und Feldaufmaß optional.
- Linksbündige Auswahlbäume und größere Fotovorschau.
- Veraltete Aktion „Offene übernehmen“ entfernt.

## 0.39.14 – Hierarchische Leistungsauswahl

- Separate Mehrfachauswahl für Bauwerke und Bauteile mit aufklappbaren Bauwerken.
- Separate Planauswahl nach den vier Ebenen der Planverwaltung.
- Fotos und QS-Nachweise nach gewählten Bauwerken und Bauteilen gefiltert.

## 0.39.13 – Build-Hotfix

- Unzulässigen Typvergleich in der zentralen Popup-Komponente entfernt. Fehler bleiben als Dialog sichtbar.

## 0.39.12 – LV-Baum und Leistungserfassung

- Separater LV-Auswahldialog mit Titelhierarchie und Suche.
- Mehrfachzuordnung von Bauwerken und Bauteilen, QS-Filter nach Zuordnung.
- Status aus Leistungserfassung entfernt.
- Kreiswerkzeug in Feldaufmaß, Fotoeditor, Bestandsplanung und grafischem Aufmaß.
- Zentrale Fehlerdialoge oberhalb der Arbeitsfenster.

## 0.39.11 – Leistungserfassung

- Vollständige paginierte HLV-/NT-Auswahl, Mengeneinheit aus LV, mehrere Pläne, Fotos im Feldaufmaß, sichtbare Speicherfehler.

## 0.39.10 – Firmenlogo als Favicon

- Originales Firmenlogo ohne Schriftzug als SVG-Browser-Icon; GitHub-Pages-kompatibler Pfad.

## 0.39.9 – Feldaufmaß-Zeicheneditor

Freihand, Linie, Rechteck, Pfeil, Text, Farbe, Strichstärke, Undo/Redo; Skizzen werden mit der Leistung gespeichert und im PDF ausgegeben.

## 0.39.7 – Bauteil-Kategorien korrigiert

- Tiefbau → Erdbau und Straßenbau → Hochbau ausschließlich im Bauteil-Kategoriensystem.
- Bestehende lokale Standardkategorien werden beim Laden abgeglichen.
- Plan- und QS-Ablagekategorien bleiben unverändert.

## 0.39.6 – 23.11.2026
- Abrechnungszettel bearbeiten und löschen; Abrechnungsvorbereitung neu gegliedert.
- Rotes X und Escape in Abrechnungsdialogen.
- Gelbe UI-Akzente; Bauteilkategorie Erdbau statt Tiefbau.
- Siehe RELEASE_0.39.6.md für Prüfstatus.

## 0.39.5 – Dokumentenimport und Dokumentenarten

- 22 alphabetisch sortierte Standard-Dokumentenarten ohne Plan-Typen.
- QS-Ablagekategorie, Dokumentenart und Bauteilzuordnung im Importdialog.
- Dokumentenart unabhängig von QS-Ablagekategorie; hierarchische QS-Auswahl.
- Vorhandene benutzte Dokumentenarten bleiben archiviert erhalten; eigene Ergänzungen bleiben bestehen.

## 0.39.4 – Kategorienverwaltung
- Doppelte alte Kategorienmaske entfernt.
- Hierarchische Qualitätskategorien und editierbare Standards.
- Bauteilkategorien aus dem neuen Katalog geladen.

## 0.39.3 – GAEB-Import-Hotfix
- Dezimalpunkt in GAEB-Einheitspreisen korrekt verarbeitet; Referenz-LV geprüft.

# Änderungsprotokoll – sbau.akte

## 0.39.2 – Planviewer und Konsistenz (23.11.2026)
- Separate Kontrollkästchen für Transparenz und Sichtbarkeit von Pins und Flächen
- Polygonlinien werden bei Zoom dünner dargestellt; Eckpunktgriffe behalten eine kleine, lesbare Bildschirmgröße
- Ausgewählte Pläne aus der Planverwaltung im Planviewer öffnen
- Versionsnummer zentral in `src/appVersion.ts`; Kopfzeile und Funktionsübersicht aktualisiert
- Oberflächenbezeichnung auf `sbau.akte` vereinheitlicht
- Dashboard-Warnung bei ungewöhnlich hoher Vertragssumme; keine automatische Änderung bestehender Abrechnungsdaten
- README und Changelog neu strukturiert

## 0.39.1 – Build-Hotfix
- Ungültige `null`-Werte in optionalen Kategoriefeldern korrigiert
- GitHub Actions auf Node.js 24 angepasst

## 0.39.0 – Kategorienverwaltung
- Globale Standardkategorien mit projektbezogenen Ergänzungen
- Bauteil-, Plan- und Qualitätskategorien, einschließlich Stahlbau-QS
- Erweiterte Datenbankstruktur und Kategoriezuordnung

## 0.38.5 – LV-Mengen-Hotfix
- LV-Mengen mit Dezimalpunkt (z. B. `1.000` = `1`) beim Import korrigiert

## Vorherige Entwicklungsstände
- 0.38.x: Projekt-Dashboard und Kategorienintegration
- 0.37.x: Einführungstour, mobile Oberfläche und Stabilisierung
- 0.36.x: Planstruktur, Revisionen und Markierungslogik
- 0.35.x: LV-Import, Aufmaß und Abrechnung
- 0.14–0.34: Grundfunktionen und schrittweise Erweiterungen

Details zu älteren Versionen befinden sich in den archivierten `RELEASE_*.md`-Dateien.

## 0.39.8
- Suchbare, paginierte Nachweisauswahl und direkte LV-Treffer.
- Fotovorschau und Fotoimport aus der Leistungserfassung.
- Feldaufmaß mit Blattnummer, Gewerk, Freitext und PDF-Export.

## Archivierte Release-Notizen

### RELEASE_0.35

# SBauAkte 0.35.0 – Abrechnung & Aufmaß

## Neuer Arbeitsbereich
- LV-Positionen manuell anlegen; CSV- und XLSX-Import mit Spaltennamen OZ/Position, Kurztext/Bezeichnung, Einheit, Menge, Einheitspreis.
- Rechnerische Aufmaßansätze mit Grundrechenarten, Klammern und negativen Mengen.
- Grafisches Aufmaß (Strecke, Rechteck, Polygon), Referenzstrecken-Kalibrierung je Planseite, Abzüge, optionale Dicke für m³.
- Kumulative Abschlagsabrechnung mit unveränderlichen Mengen-/Preis-Snapshots.
- CSV- und PDF-Übersicht; Projektsicherung enthält auch LV, Aufmaße und Abrechnungsstände.
- SVG-Firmenlogo im Kopfbereich aus bereitgestellter PDF-Vektorgrafik.
- Freie Zeichenfarbe in der Bestandsplanung; alte Markierungen bleiben in ihrer bisherigen Kategoriefarbe.

## Wichtige Grenzen
- Das grafische Aufmaß ist ein Hilfsmittel und erfordert eine geprüfte Maßstabskalibrierung. Kalibrierungen werden derzeit nur für die laufende Sitzung gehalten; gespeicherte Aufmaße enthalten ihren verwendeten Faktor.
- Abrechnungsstände werden als unveränderliche Datensätze abgelegt. Keine Rechnungsprüfung, Zahlungsbuchhaltung, GAEB oder REB/DA11.
- PDF-Abrechnung ist eine kompakte Übersicht, kein formell vollständiges Rechnungsdokument.
- Es gibt keine Mehrbenutzer-Synchronisation. Projektsicherungen regelmäßig exportieren.
- Die XLSX-Verarbeitung benötigt das neue npm-Paket `xlsx`.


### RELEASE_0.36.1

# SBauAkte 0.36.1 – Planverwaltung und Markierungen

- Planmenü: nur Planverwaltung und Planviewer.
- Planauswahl im Viewer nach vier Planebenen gruppiert.
- Planimport als geführter Ablauf mit Ebene, Bauwerk, Bauteil und Datei.
- Plan löschen einschließlich Revisionen und Flächenmarkierungen (mit Bestätigung).
- Markierungen: Bauwerk oder Bauteil, Pin oder geschlossene Fläche. Doppelklick schließt die Fläche; Escape bricht ab.
- Vollständige Namen in der Auswahl; passende Menüicons; Programmübersicht auf der Startseite.
- Firmenlogo `sbau-logo.svg` in der oberen linken Leiste.

## Prüfstatus
Die Syntax wurde mit globalem TypeScript auf Parserfehler untersucht. Ein vollständiger Build ist **nicht** bestätigt, da `npm install` in dieser Umgebung am Zeitlimit scheiterte. Die ZIP-Datei ist deshalb ein Entwicklungsstand und muss vor dem produktiven Einsatz über GitHub Actions gebaut und im Browser getestet werden.

## Hinweise
Bestehende Markierungen bleiben bei Revisionen erhalten; eine automatische Geometrieanpassung an geänderte Planmaßstäbe findet nicht statt. Der Löschvorgang für Pläne entfernt die Planrevisionen und Flächen, lässt zugeordnete Bauteile selbst bestehen.


### RELEASE_0.36.2

# SBauAkte 0.36.2 – Markierungsworkflow und Startseite

## Änderungen
- Planviewer: zentraler Button „Markierung hinzufügen“ mit Auswahl Bauwerk/Bauteil, vorhandenes Objekt oder Neuanlage und Pin/Fläche.
- Neuanlage eines Bauwerks oder Bauteils unmittelbar im Viewer; Bauteile benötigen ein Bauwerk.
- Flächen: Kurzbezeichnung als kleiner, zoomstabiler Button statt skalierter SVG-Schrift; Klick aktiviert Eckpunktbearbeitung, Speichern/Abbrechen und Entfernen.
- Pins: Auswahl mit sichtbarer Aktion „Pin entfernen“; Bauwerks-Pins sind separate Markierungen, die das Bauwerk nicht löschen.
- Flächen und Pins werden getrennt von Bauwerken/Bauteilen gespeichert; Entfernen einer Markierung löscht nicht das Objekt.
- Navigation: linksbündige Menüpunkte; Firmenlogo links in der Kopfleiste größer und mit passendem weißem Hintergrund.
- Startseite: großes zentriertes Firmenlogo und typografischer SBauAkte-Schriftzug oberhalb der Projektverwaltung.

## Prüfung und Grenzen
- TypeScript-TSX-Syntaxprüfung über `transpileModule`: erfolgreich.
- ZIP-Integrität: erfolgreich.
- Vollständiger Build **nicht** möglich: npm-Registry im Container nicht erreichbar (`EAI_AGAIN`); daher noch keine Freigabe.
- Die Verschiebung von Polygon-Eckpunkten und das Verhalten bei Touch-Gesten müssen im Browser getestet werden.
- Bestehende Daten bleiben im Dexie-Schema erhalten; `markerType` ist ein optionales Feld in der vorhandenen Planflächen-Tabelle.


### RELEASE_0.36.2_BUILDFIX

# SBauAkte 0.36.2 – Buildfix (Prüfstand)

- pdfjs-dist: nicht unterstützten `canvas`-Parameter bei `page.render()` in PlanViewer, AsBuiltWorkspace und BillingWorkspace entfernt; `canvasContext` und `viewport` bleiben erhalten.
- PlanViewer: Pins mit ungültigen negativen Koordinaten werden nicht mehr angezeigt.
- Kein Funktionsumfang hinzugefügt, keine Datenbankmigration.
- Achtung: npm-Abhängigkeiten waren in der Umgebung nicht installierbar; ein vollständiger `npm run build` ist noch nicht bestätigt.


### RELEASE_0.36.3

# SBauAkte 0.36.3

- Bauteilverwaltung aus Navigation entfernt; Bauteile direkt im Bereich Bauteile anlegen.
- Bauteilnummer in der Detailansicht durch Kurzbezeichnung ersetzt.
- Bauwerks-Kurzbezeichnungen auf 1 bis 5 Zeichen begrenzt.
- Farben für neue und bestehende Planflächen auswählbar und gespeichert.
- Native Dropdown-Farben für Dunkelmodus angepasst.
- Zurück-Navigation merkt vorherigen Arbeitsbereich, bei leerem Verlauf zurück zur Projektübersicht.

Hinweis: Vollständiger Build und Browserprüfung erforderlich.


### RELEASE_0.36

# SBauAkte 0.36.0 – Entwicklungsstand (nicht produktionsfreigegeben)

## Umgesetzt im Quellcode
- Eigenständige Bauwerksverwaltung mit Lang- und Kurzbezeichnung.
- Bauteilverwaltung mit Bauwerkszuordnung, Kurzbezeichnung (1–5 Zeichen), Kategorie und Pinform/Deckkraft.
- Pläne-Dropdown mit vier Ebenen; Planattribute, Status und revisionssichere Historie.
- Planviewer: Polygonflächen für Bauwerke/Bauteile, Pinverschiebung, konstante Pin-Bildschirmgröße und Transparenz.
- Projekt-/Bauwerks-/Bauteildokumentation als PDF mit Deckblatt, Inhaltsübersicht, Fotos und darstellbaren PDF-/Bildnachweisen.
- Foto-Metadaten Ort/Lage und Bauwerkszuordnung; Kategorie aus Bauteil.
- Bearbeitbare Dokumentenarten mit Archivierung bei bestehender Verwendung.
- Sicherung und Wiederherstellung der neuen Entitäten im JSON-Projektexport.
- IndexedDB Schema v8; bestehende Bauteile erhalten automatisch ein zugeordnetes Bauwerk anhand des bisherigen Freitextfelds.
- Korrektur des fehlenden downloadBlob aus der bereitgestellten BillingWorkspace.tsx.

## Noch offen / Einschränkungen
- Keine vollständige npm-/TypeScript-/Vite-Buildprüfung: Abhängigkeiten konnten in dieser Umgebung nicht installiert werden.
- Planrevisionen übernehmen die Koordinaten; eine halbtransparente Alt/Neu-Überlagerung mit Kalibrierung fehlt.
- Polygonflächen werden gezeichnet und gespeichert, aber noch nicht über Griffpunkte verschoben.
- PDF-Gesamtdokumentation rastert vorhandene PDF-Anlagen; eingebettete Originaldateien und klickbare Seitenzahlen fehlen.
- Mehrseitige große Exporte können hohen Speicherbedarf haben.
- Noch keine ZIP-Originaldatei-Sammelablage und keine globalen Suchindizes.
- Bauwerk/Foto-Zuordnung bestehender Daten sollte vor produktivem Einsatz getestet werden.

## Deployment
Das Paket enthält die bisherige GitHub-Actions-Konfiguration unverändert. Dateien müssen im Repository-Stamm liegen. Vor Veröffentlichung `npm install` und `npm run build` ausführen und Browser-Funktionstests vornehmen.


### RELEASE_0.37.0

# SBauAkte 0.37.0 – Einführungstour

## Umfang

- Ein Musterprojekt **DEMO · EÜ Lindenstraße – Neustadt** wird beim ersten Start der Tour lokal in IndexedDB erzeugt. Es ist **kein reales Bauprojekt**.
- 4 Bauwerke, 18 Bauteile, 12 schematische SVG-Pläne über alle vier Ebenen, 24 schematische Bildillustrationen (keine realen Baustellenfotos), 12 SVG-Musterprüfunterlagen, 30 LV-Positionen, 20 Aufmaße und 2 Abschlagsstände.
- 19-Schritte-Tour mit Navigation, hervorgehobenen Elementen, Weiter/Zurück und lokal gespeichertem Fortschritt.
- Freies Erkunden und Zurücksetzen des Musterprojekts.

## Wichtige Grenzen

- Die Bilder sind generierte **SVG-Illustrationen**, keine fotorealistischen Baustellenaufnahmen. Die Musterunterlagen sind SVG-Bilddateien, keine originalen PDF-Prüfberichte. Der PDF-Gesamtexport kann die SVG-Unterlagen je nach Browser als Bilder übernehmen.
- Die Tour führt durch die vorhandenen Ansichten und erklärt die Funktionen. Sie überprüft die Ausführung einzelner Übungsaufgaben noch nicht automatisch.
- Die Tour wird im bestehenden Projekt gespeichert und kann durch Benutzeränderungen verändert werden; Zurücksetzen stellt die Musterdaten wieder her.
- Ein vollständiger npm-/Vite-Build konnte in dieser Umgebung wegen eines npm-Installations-Timeouts nicht ausgeführt werden. Die neuen TypeScript-/TSX-Dateien wurden syntaktisch transpiliert.

## GitHub

Die Dateien aus dem Archiv gehören direkt ins Repository-Hauptverzeichnis, insbesondere `package.json`, `src/` und `public/`. Die GitHub-Workflowdatei wurde nicht verändert.


### RELEASE_0.37.1

# SBauAkte 0.37.1 – Tour-Popup Fix

- Behebt das überlagerte Tour-Popup bei Schritt 6 (Planverwaltung).
- Rendert die Tour über ein React-Portal direkt im document.body.
- Begrenzung der Popup-Position auf den sichtbaren Viewport.
- Verhindert, dass hervorgehobene Bereiche das Tourfenster überdecken.
- Weiter-/Zurück-Buttons bleiben bedienbar.

Hinweis: Vollständiger npm/Vite-Build wurde in dieser Umgebung nicht ausgeführt.


### RELEASE_0.37.2

# SBauAkte 0.37.2 – LV-Import-Hotfix

## Importformat
Excel `.xlsx` (erstes Tabellenblatt), CSV mit Semikolon, Komma oder Tab und GAEB DA XML `.x83` / `.x84` / `.xml` (Basisunterstützung).

Empfohlene Kopfzeile: `OZ;Typ;Kurztext;Einheit;Menge;Einheitspreis;Langtext;Vertragsart`.
Typ: `Titel`, `Untertitel`, `Position`; Vertragsart: `Vertrag` oder `Nachtrag`.
Bei fehlender Typ-Spalte erkennt die Anwendung Titel an leeren Mengen-/Preis- und Einheitsfeldern; dies ist eine Heuristik, die in der Vorschau zu prüfen ist.

## Funktionen
- Vorschau der ersten 100 Importzeilen, Anzahl Positionen/Titel, Warnungen und Bestätigung.
- Doppelte Ordnungszahlen werden nicht übernommen.
- Aufklappbare Titel und Untertitel, Titelsummen und Anzeige von Langtexten.
- Kumulative Abrechnung und Vertragssumme ohne Titelzeilen.
- Manuelles Hinzufügen von Titel-/Untertitelzeilen möglich.

## Grenzen
- GAEB DA XML ist ein best-effort Parser und keine vollständige GAEB-Zertifizierung. Unterschiedliche GAEB-Strukturen, insbesondere komplexe Text- und OZ-Kodierungen, können eine externe Konvertierung erfordern.
- Titelhierarchie setzt durch Punkte gegliederte OZ voraus (z. B. `01`, `01.02`, `01.02.0010`).
- Der vollständige Vite-/TypeScript-Build konnte hier mangels npm-Registry-Verbindung nicht durchgeführt werden. Syntaxprüfung der geänderten TS/TSX-Dateien wurde durchgeführt.


### RELEASE_0.37.3

# sbau.akte 0.37.3 – Darstellung und mobile Navigation

- Sichtbarer Programmname und Startseiten-Wortmarke: **sbau.akte**.
- Firmenlogo in der Kopfzeile nur innerhalb eines geöffneten Projekts; auf der Startseite bleibt das große zentrale Firmenlogo erhalten.
- Darstellung: Automatisch folgt der Betriebssystemeinstellung (hell/dunkel), auch beim Wechsel während der Sitzung. Hell und Dunkel können weiterhin manuell gewählt werden.
- Mobile Kopfzeile: Drei Menüs (Projekte, Pläne, Bereiche) stehen bei schmalen Bildschirmen in einer zweiten Zeile, statt seitlich abgeschnitten zu werden.
- Versionsnummer 0.37.3. GitHub-Pages-Konfiguration unverändert.


### RELEASE_0.37.4

# sbau.akte 0.37.4 – GAEB-Import

- Direkter Import von RIB iTWO GAEB XML (.RIBX81, .X81, .X83, .X84, .xml).
- Echte GAEB-Gliederung über BoQCtgy mit Titel und Untertitel, einschließlich Zwischenüberschriften.
- Übernahme von OZ, Kurz-/Langtext, Menge, Einheit und EP.
- Struktur und Positionen werden in der Importvorschau angezeigt.
- Vorhandene LV-Positionen bleiben erhalten; doppelte OZ werden nicht überschrieben.
- GAEB DA81 enthält nicht zwingend Preise; fehlende EP werden mit 0 eingelesen.
- Import bleibt vollständig lokal im Browser.


### RELEASE_0.37.5

# sbau.akte 0.37.5

GAEB-Import inkl. RIBX81; Zahlen im GAEB-XML werden normgerecht mit Dezimalpunkt eingelesen. Beispiel 1.000 = 1, 1.500 = 1,5. Excel/CSV behalten die bisherige deutsche Zahleninterpretation. Bestehende fehlerhaft importierte LV-Daten müssen neu importiert werden.


### RELEASE_0.38.0

# sbau.akte 0.38.0 – LV und Abrechnungsvorbereitung

- Eigenständiges Menü **Leistungsverzeichnis** für Hauptvertrag und Nachträge.
- Direkter Import von iTWO-GAEB-DA-XML (.RIBX81/.x81/.x83/.x84/.xml), CSV und XLSX. Titel-/Untertitelhierarchie, Suche nach OZ/Kurz-/Langtext und Langtextanzeige.
- Importvorschau, Ersatzimport und Löschung je Vertragsart. Gleiche OZ behalten ihre ID, verknüpfte entfernte Positionen werden archiviert.
- Eigenständiges Menü **Abrechnung** mit frei datierten, fortlaufend ergänzbaren Abrechnungszetteln.
- Einträge je LV-Position mit Mehrfachzuordnung von Bauteilen, optionalen Mengen, Rechenansätzen, Plänen, Dokumenten, Fotos und Rückfragen.
- Status der Zettel und Einträge, Übernahme offener Einträge, PDF-Zuarbeit und strukturierter JSON-Export.
- Dexie Schema v9, bestehende Projekte und frühere Abrechnungsdaten bleiben gespeichert.

## Grenzen dieser ersten Umsetzung

- Keine direkte iTWO-Synchronisierung, keine rechtsverbindlichen Aufmaßblätter und keine Abschlagsrechnung.
- Keine automatische Abrechnungsprognose: Dafür ist ein belastbarer importierter Ist-Abrechnungsstand aus iTWO erforderlich.
- Planmarkierungen/Feldaufmaßblatt sind noch nicht direkt im neuen Abrechnungszettel zeichnend bearbeitbar; vorhandene Pläne können verknüpft werden.
- Der PDF-Zettel enthält Verweise auf Anlagen, aber die binären Anlagen werden nicht eingebettet.
- GAEB-Import muss bei abweichenden Exportvarianten kontrolliert werden.
- Vollständiger Vite-Build wurde mangels verfügbarer npm-Abhängigkeiten in dieser Umgebung nicht ausgeführt; TypeScript-Transpilierung der geänderten Dateien war ohne Syntaxdiagnosen.


### RELEASE_0.38.1

# sbau.akte 0.38.1 – Größere Touch-Ziele und einheitliche Dialoge

- Schaltflächen, Auswahl- und Eingabefelder sind auf Tablet/Handy (`pointer: coarse` oder Breite ≤ 650 px) mindestens 44 px hoch. Die Werkzeugleiste im Planviewer bricht bei wenig Platz in eine zweite Zeile um.
- Plan-Pins und Eckpunkte von Flächenmarkierungen behalten ihre Größe, die tippbare Fläche ist aber um 9 px erweitert.
- Neues Modul `src/dialogs.tsx` mit `confirmDialog()` und `notify()`; `<DialogHost/>` ist in `main.tsx` eingebunden.
  - Löschdialoge: roter Bestätigen-Button, Fokus zunächst auf „Abbrechen“, Escape/Klick daneben bricht ab, Fokus kehrt zum auslösenden Element zurück.
  - Mehrere Rückfragen hintereinander werden nacheinander angezeigt.
  - Erfolgs-, Info- und Fehlermeldungen erscheinen als Hinweis am unteren Rand (Fehler bleiben länger sichtbar).
- Entfernt: alle nativen `confirm()`/`alert()`-Aufrufe (20 Rückfragen, 3 Hinweise).
- Behoben: Pin eines Bauwerks im Plan entfernen fragte zweimal nach.
- Sichtbarer Tastaturfokus (`:focus-visible`) für Schaltflächen, Felder und Auswahllisten.
- Versionsanzeige im Kopfbereich korrigiert.

## Grenzen / Hinweise

- Vollständiger Vite-Build wurde mangels npm-Abhängigkeiten in dieser Umgebung nicht ausgeführt. Geprüft wurden TypeScript-Syntax aller Dateien (keine Diagnosen) sowie Dialog, Meldungen und Touch-Größen in einem Chromium-Test mit dem echten `dialogs.tsx` und `style.css`.
- Nicht auf echtem iPad/iPhone getestet. Bei 360 px Breite kann die Kopfzeile durch die breitere Zurück-Schaltfläche knapp werden.


### RELEASE_0.38.2

# sbau.akte 0.38.2 – Navigation und Lesbarkeit

## Navigation
- Zwei Menüknöpfe statt drei: **Projekte** und **Bereiche**. „Pläne“ ist in „Bereiche“ aufgegangen (Planviewer und Planverwaltung stehen jetzt unter *Planen*).
- Gruppen im Bereichsmenü: Planen (Planviewer, Planverwaltung, Bestandsplanung, Bauwerke, Bauteile), Dokumentieren (Fotodokumentation, Qualitätsnachweise, Nachweisübersicht, Gesamtdokumentation), Abrechnen (Leistungsverzeichnis, Abrechnung), Projekt (Projekteinstellungen).
- Der Menüknopf zeigt den aktuellen Bereich; im Menü ist er hervorgehoben (`aria-current`).
- Klick/Tippen außerhalb und Escape schließen die Menüs.
- Behoben: Das Bauteil-Panel im Planviewer (`menu==='parts'`) klappte zusätzlich das Bereichsmenü auf.

## Lesbarkeit
- Mindestschrift 12 px außer bei Plan-Beschriftungen (`.plan-pin`, `.area-label`).
- Neue Farbvariablen `--ok-text`, `--warn-text`, `--bad-text`, `--faint-text`, `--plan-empty-text`, `--link-text`, `--text` (hell/dunkel getrennt); `--muted` im hellen Design abgedunkelt (4,5:1 auch auf dem Seitenhintergrund).
- Pin-Textfarbe passt sich der Kategoriefarbe an (`readableOn()` in `PlanViewer.tsx`).
- Behoben (dunkles Design): Pin-Zähler im Planviewer unlesbar, weil `--text` nirgends definiert war.

## Sonstiges
- Fotodokumentation: `src` bleibt leer-frei, bis die Bild-URL vorliegt.
- Tourtext „Projektnavigation“ angepasst.

## Prüfung
- Syntax aller TypeScript-Dateien ohne Diagnosen; keine `await`-Fehler.
- Echte App (`main.tsx`) mit In-Memory-Datenbank-Attrappe in Chromium: Menü-Verhalten, Löschdialog, Handy-Layout (390 px), Warnungen.
- Kontrast- und Schriftaudit über alle Bereiche, hell und dunkel: Kontrastverstöße 40 → 0 (hell) bzw. 12 → 0 (dunkel).

## Grenzen
- Vollständiger Vite-Build und PDF-/Excel-Funktionen wurden hier nicht ausgeführt (keine npm-Pakete, PDF/XLSX/Dexie waren Attrappen).
- Nicht auf echtem iPad/iPhone getestet.
- Das Bereichsmenü ist auf dem Handy höher als der Bildschirm und scrollt.


### RELEASE_0.38.3

# sbau.akte 0.38.3 – Projekt-Dashboard, Startseite, Bauteil-Details

## Projekt-Dashboard
- Öffnen eines Projekts (Projektkarte, Musterprojekt, Tour) führt auf die neue Seite **Dashboard**; sie ist auch der erste Eintrag im Menü „Bereiche“.
- Inhalt: Projektkopf (Bauherr, Ort, Kostenstelle, Vertrag, Bauzeit mit Fortschrittsbalken), 5 Kennzahl-Kacheln mit Sprung in den Bereich, Dokumentationsstand (gleiche Berechnung wie Nachweisübersicht), „Braucht Aufmerksamkeit“, Abrechnung, „Zuletzt hinzugefügt“.
- „Braucht Aufmerksamkeit“ nennt: fehlendes Bauwerk/Bauteile/Plan, Bauteile ohne jeden Nachweis, die drei größten Lücken je Nachweisart, Fotos/Dokumente ohne Bauteilzuordnung, Abrechnungszettel im Entwurf. „Keine offenen Punkte“ erscheint nur, wenn nichts offen ist.
- Keine Änderung am Datenbankschema; alle Zahlen stammen aus vorhandenen Tabellen.

## Startseite
- Mit mindestens einem echten Projekt ist der Demo-Block eine schmale Zeile mit Umschalter (`aria-expanded`); ohne echtes Projekt bleibt er wie bisher groß.

## Bauteil-Details
- Hauptaktion „Bearbeiten“; „Bauteil löschen“ abgesetzt unter einer Trennlinie. Fotos/Dokumente/Plan erreichst du weiter über das Bauteil-Dossier.

## Tour
- Start im Dashboard, neuer Schritt „Projekt-Dashboard“ (der gespeicherte Tour-Fortschritt kann dadurch um einen Schritt verschoben sein).

## Fehlerbehebungen
- Helles Design: dunkle Schrift auf dunklem Grund bei „Zeichenfarbe“ (Bestandsplanung), Sammelaktions-Panel und Auswahlfeld in der Dokumentenverwaltung.
- Entfernt: toter Platzhalter-Zweig in `main.tsx`, ungenutzter Import.

## Prüfung
- Syntax aller Dateien ohne Diagnosen. Echte App (`main.tsx`) mit In-Memory-Datenbank-Attrappe in Chromium: Dashboard-Inhalt und Zahlen (19 %, Vertragssumme), Navigation und Zurück, Wiedereinstieg, neues leeres Projekt, kompakter Demo-Block, komplette Tour (20 Schritte), Bauteil-Details und Löschen, Handy-Layout (390 px).
- Kontrast-/Schriftaudit über alle Bereiche, hell und dunkel: 0 Verstöße; Schriften unter 12 px nur bei Pin-/Flächenbeschriftungen im Plan.

## Grenzen
- Vollständiger Vite-Build, PDF-/Excel-Funktionen und echte iPad-/iPhone-Tests stehen weiter aus (hier keine npm-Pakete; Dexie/PDF/XLSX waren Attrappen).
- Dashboard zählt Abrechnungswerte wie die Abrechnung selbst (alle LV-Positionen ohne Titelzeilen, ungeprüft auf Archivierung).
- Die Werkzeugleiste im Planviewer überdeckt bei schmalen Fenstern weiterhin den oberen Planrand (nicht Teil dieser Version).


### RELEASE_0.38.4

# sbau.akte 0.38.4 – Planviewer

## Werkzeugleiste
- Eigene Zeile über der Plan-Fläche statt Overlay: Der obere Planrand (Plantitel) bleibt sichtbar, der Plan wird in die verbleibende Fläche eingepasst.
- Gruppen: **Markieren** · **Ansicht** (Pins verschieben, Transparenz, Pins an/aus, Kategorie) · **Zoom** (−, %, +, Einpassen, Vollbild).
- Responsiv über Container-Query (`viewer`): ≤ 1180 px Plan-Breite nur Icons (Tooltip + `aria-label`), darüber mit Beschriftung. Handy (≤ 650 px): zwei Zeilen (Markieren + Filter / Icon-Werkzeuge).
- Wirkungslose Zoom-Knöpfe in der oberen Leiste entfernt (steuerten nur einen ungenutzten `zoom`-State in `App`).

## Vollbild
- Beenden-Knopf in der Plan-Werkzeugleiste (bleibt im Vollbild sichtbar) und Escape. Vorher war der einzige Knopf von der Plan-Fläche verdeckt.

## Zoom per Mausrad/Trackpad
- Nativer, nicht-passiver `wheel`-Listener; Strg+Wheel/Trackpad-Pinch skaliert stufenlos.

## Barrierefreiheit und Touch
- `role="toolbar"`, `aria-pressed` bei Zustandsknöpfen, `aria-label` bei Icon-Knöpfen; Touch-Ziele ≥ 44 px.

## Prüfung
- Syntax aller Dateien ohne Diagnosen. Echte App in Chromium mit In-Memory-Datenbank-Attrappe, 1000/1500 px Desktop, iPad (820 px) und Handy (390 px): keine Überdeckung des Plans, Zoom (Knöpfe, Mausrad), Ziehen, Pins ein/aus, Markierungsmodus, Pin-Klick, Vollbild an/aus (Knopf und Escape), keine Konsolenfehler.

## Grenzen
- Vollbild-Layout nur in Chromium geprüft; Container-Queries benötigen Safari ≥ 16 (iPadOS ≥ 16). In älteren Browsern bleiben die Beschriftungen sichtbar und die Leiste bricht in mehrere Zeilen um.
- Nicht auf echtem iPad/iPhone getestet; PDF-Pläne wurden hier nicht gerendert (pdf.js war eine Attrappe, Demo-Pläne sind SVG/Bild).
- Zwei rasche Klicks an derselben Stelle gelten dem Browser als Doppelklick und zoomen den Plan (bestehendes Verhalten, jetzt nicht mehr durch Werkzeug-Knöpfe auslösbar).


### RELEASE_0.38.5

# sbau.akte 0.38.5 – LV-Mengen-Hotfix

- Mengen mit Dezimalpunkt werden korrekt gelesen: `1.000` → 1; `0.500` → 0,5; `12.345` → 12,345.
- Mengen mit Dezimalkomma bleiben möglich: `1,500` → 1,5.
- Einheitspreise behalten die bisherige deutsche Formatinterpretation.
- Excel-Import liest echte Zellwerte statt formatierter Anzeigetexte (`raw:true`).
- Betrifft CSV, XLSX, GAEB-XML und manuelle LV-Mengeneingabe.
- Importvorschau zeigt Mengen mit deutschem Dezimalkomma.

**Achtung:** Bereits importierte Positionen werden nicht automatisch verändert. Vor erneutem Import Daten sichern und vorhandene LV-Positionen kontrollieren. Bei gemischten externen Formaten bitte die Importvorschau mit dem Original-LV abgleichen.


### RELEASE_0.39.0

# sbau.akte 0.39.0 – Kategorienmodell (Entwicklungsstand)

## Umgesetzt
- Neue Dexie-Datenbankversion 10 mit `appCategories` und `projectCategorySettings`.
- Globale Standardkategorien mit projektbezogenen Ergänzungen und Ausblendungen.
- Bauteilkategorien mit Farben; bestehende Bauteil-UI nutzt weiterhin kompatible `categories`-Datensätze.
- 36 Planablagekategorien 3.2.2–3.2.37.
- QS-Struktur 3.6 (5), 3.7 (12), 3.11 Stahlbau/3_QM mit 34 Unterordnern aus der bereitgestellten ZIP.
- Neue Kategorienverwaltung in Projekteinstellungen; QS-Kategorie im Dokument-Bearbeitungsdialog; Plankategorie im Plan-Bearbeitungsdialog.
- Projektbezogene Kategorie-Metadaten im Projekt-JSON-Export/-Import.
- Ausgangsbasis 0.38.5 einschließlich LV-Mengen-Hotfix.

## Noch offen / vor produktiver Nutzung prüfen
- `npm install` konnte in dieser Umgebung nicht abgeschlossen werden; Build und UI-Laufzeittest sind NICHT verifiziert.
- Beim Neuanlegen eines Plans oder Dokuments erfolgt die Ablagezuordnung bislang im nachfolgenden Bearbeitungsdialog.
- Bereits vorhandene Alt-Kategorien aus Testprojekten werden nicht automatisch neu klassifiziert.
- Server-/Cloud-Synchronisation ist nicht implementiert.
- Externe Ordnerpfade sind Vorlagen, keine validierten tatsächlichen Ablagepfade des Unternehmens.
- Alle Änderungen vor Einsatz in GitHub Actions mit `npm ci && npm run build` prüfen.


### RELEASE_0.39.1

# sbau.akte 0.39.1 - Build-Hotfix

- Entfernt null-Werte fuer optionale String-Felder in src/categoryCatalog.ts.
- GitHub Actions Node-Version auf 24 aktualisiert.
- Keine Aenderung an Kategorieninhalten oder Datenbankstruktur.


### RELEASE_0.39.3

# sbau.akte 0.39.3 – GAEB-Zahlenformat-Hotfix

- GAEB/RIBX81: Mengen (`Qty`) und Einheitspreise (`UP`) werden als Dezimalzahlen mit Punkt interpretiert; keine Tausenderpunkt-Heuristik.
- Excel/CSV: bisherige länderspezifische Verarbeitung unverändert.
- Regressionsfall: `Qty=1.000`, `UP=114780.960` ergibt 114.780,96 € und nicht 114.780.960 €.
- Referenzdatei `Leistungsverzeichnis(2).RIBX81`: 571 Positionen, GAEB `TotalNet=14.556.677,85 €`; Summe aus `Qty * UP` = 14.556.677,838 € (Rundungsabweichung).
- Bereits falsch importierte LV-Daten müssen neu importiert werden. Keine automatische Datenkorrektur.
- Vollständiger npm/TypeScript-Build in dieser Umgebung nicht verifiziert.


### RELEASE_0.39.4

# sbau.akte 0.39.4 – Kategorienverwaltung

- Entfernt die veraltete, doppelte Kategorienbearbeitung in den Projekteinstellungen.
- Verwendet die neuen globalen und projektbezogenen Bauteilkategorien auch in der Bauteilansicht.
- Qualitätsunterlagen werden als echter hierarchischer Baum mit auf- und zuklappbaren Oberordnern angezeigt (3.6, 3.7 und 3.11 / 3_QM).
- Namen aller Kategorien und Farben der Bauteilkategorien sind bearbeitbar; globale Änderungen wirken auf alle Projekte.
- Projektbezogene Kategorien können ergänzt und, sofern unbenutzt, gelöscht werden.
- Die bisherigen Änderungen am GAEB-LV-Import aus 0.39.3 bleiben erhalten.

## Prüfstatus
Quellcode und Paketstruktur geprüft. Vollständiger TypeScript-/Vite-Build in dieser Umgebung nicht möglich: npm-Abhängigkeiten nicht im lokalen Cache; bitte GitHub Actions ausführen.


### RELEASE_0.39.5

# sbau.akte 0.39.5

Dokumentenarten neu sortiert, QS-Kategorie bei Import verpflichtend, Bauteile optional (projektweite Dokumente möglich).


### RELEASE_0.39.6

# sbau.akte 0.39.6 – Abrechnungsvorbereitung

## Änderungen
- Abrechnungszettel können umbenannt und in ihrem Zeitraum bearbeitet werden.
- Abrechnungszettel können nach Bestätigung gelöscht werden. Zugehörige Leistungseinträge werden entfernt; LV-Positionen, Pläne und Qualitätsnachweise bleiben bestehen.
- Abrechnungsvorbereitung mit getrennten Bereichen für Zettelauswahl, Neuanlage und Bearbeitungsaktionen.
- Die Dialoge der Abrechnungsvorbereitung haben rote X-Schaltflächen und lassen sich per Escape schließen.
- Bauteilkategorie Tiefbau in Erdbau umbenannt; die gleichnamige Planablagekategorie bleibt erhalten.
- Dezente gelbe Akzente bei Überschriften und Fokusmarkierungen, abgestimmt auf das dunkelblaue Erscheinungsbild der bereitgestellten Präsentation.

## Einschränkungen / Prüfung
- Die Vereinheitlichung aller Schließen-Buttons in *sämtlichen* anderen Programmteilen ist noch offen.
- Kein vollständiger Produktionsbuild: npm-Abhängigkeiten konnten offline nicht installiert werden. GitHub Actions und Browserfunktionen müssen getestet werden.
- Löschen ist endgültig. Vor dem Test mit wichtigen Daten eine Projektsicherung exportieren.


### RELEASE_0.39.7

# sbau.akte 0.39.7

Korrektur der Bauteil-Standardkategorien: Erdbau statt Tiefbau, Hochbau statt Straßenbau. Auch bereits lokal gespeicherte globale Standardkategorien werden beim Laden aktualisiert. Die offiziellen Plan- und QS-Ablageordner bleiben unverändert.

