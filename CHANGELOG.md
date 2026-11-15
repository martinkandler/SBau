## 0.33.2 - Build-Fix
- TypeScript-Null-Pruefung in Bauteildetails korrigiert (focused/selectedPart).
- GitHub Pages Build-Konfiguration beibehalten.

## 0.27.0 – Kontrollierter Dokumentenimport
- Vorschau vor dem Speichern mit Dateigröße und vorgeschlagener Dokumentart.
- Vorschläge zur Bauteilzuordnung anhand vollständiger Kennungen im Dateinamen; manuell korrigierbar.
- Mehrfachzuordnung beim Import, Suche und Entfernung einzelner Dateien.
- Bei Teilfehlern bleiben nicht importierte Dateien zur erneuten Bearbeitung erhalten.

## 0.26.0 – Dokumentenverwaltung und Stapelbearbeitung
- Dokumente mehrfach auswählen, auch über gefilterte Ansichten hinweg.
- Dokumentart und Bauteilzuordnung in einem Schritt für mehrere Dokumente ändern.
- Zuordnung hinzufügen, entfernen oder vollständig ersetzen.
- Mehrere Dokumente nach Sicherheitsabfrage löschen.
- Sortierung, Filter für nicht zugeordnete Dokumente und Trefferzähler.
- Dokumentart-Vorschlag anhand des Dateinamens (muss geprüft werden).

## 0.26.0 – Mehrfachzuordnung von Dokumenten

- Dokumente können mehreren Bauteilen zugeordnet werden; Checkbox-Auswahl im Bearbeitungsdialog.
- Kompatibilität mit vorhandenen Einzelzuordnungen durch Datenbankmigration auf Schema 6.
- Bauteilakte, automatische Nachweiserkennung, Dokumentenfilter und Zähler berücksichtigen Mehrfachzuordnungen.
- Projekt-Export/Import auf Format 0.26 erweitert, ältere Formate bleiben zulässig.
- Projektweite Dokumente ohne Bauteilzuordnung bleiben erhalten.

## 0.23.0 – Projektweite Dokumentationsübersicht
- Ampelstatus und Fortschritt je Bauteil
- Kennzahlen für vollständige, teilweise und nicht bestätigte Bauteile
- Filter nach Kategorie, Status, fehlendem Nachweis und Suchbegriff
- Direkter Sprung in die Bauteilakte
- CSV-Export der gefilterten Übersicht
- Weiterhin manuelle Nachweisbestätigung; keine automatische Dokumentenprüfung

## 0.22.0 – Dokumentationsstatus
- Manuelle Nachweis-Checkliste je Bauteil mit Fortschrittsanzeige.
- Persistente Speicherung in IndexedDB (Dexie Schema v5).
- Projekt-Export und -Import einschließlich Nachweisstatus.
- Versionsanzeige aktualisiert.

## 0.20.0 – Fotodokumentation
- Filter nach Kategorie und Aufnahmedatum (von/bis)
- Sortierung nach Datum oder Dateiname
- Anzeige ausschließlich annotierter Fotos
- Filter zurücksetzen und Ergebniszähler
- Download der unveränderten Originaldatei aus den Fotodetails
- Responsive Filterleiste mit Dark-Mode-kompatiblen Eingabefeldern

## 0.19.0
- Bauteilliste alphabetisch sortiert, scrollbar und mit Trefferzähler.
- Vorheriges/nächstes Bauteil direkt in der Detailansicht.
- Fotovorschau mit bis zu sechs zugeordneten Fotos; Klick öffnet Original/Annotation.
- Responsive Layout für Mobilgeräte.
- Exportformat 0.19; Import älterer Versionen bleibt möglich.

## 0.18.0
- Planansicht: Bauteilmarkierungen ein-/ausblenden und nach Kategorie filtern.
- Anzahl der sichtbaren Bauteile pro PDF-Seite anzeigen.
- Bauteilsuche direkt im ausklappbaren Plan-Bauteilmenü.
- Escape beendet den Markierungsmodus; kompaktere mobile Werkzeugleiste.

## 0.17.0 – UI- und Dark-Mode-Verbesserungen
- Einheitliche Farbvariablen für dunkle und helle Darstellung, insbesondere Bauteilliste und Bearbeitungsdialoge.
- Bessere Lesbarkeit und Tastatur-Fokusmarkierungen.
- Optimierte mobile Bauteilansicht und Dialoge.
- Leerer Suchzustand bei Bauteilfiltern.
- Versionsanzeige und Projektexportformat aktualisiert; ältere Exporte bleiben importierbar.

# Änderungsprotokoll

## 0.16.0 (Entwicklung)
- Bestandsplanung: Navigation, Auswahl und Verschieben von Zeichnungen
- Rückgängig und Wiederholen für Änderungen innerhalb der laufenden Sitzung
- Textanmerkungen als eigenständige Bestandsänderungen
- Druckansicht des aktuellen Plans mit sichtbaren Annotationen (Browser: als PDF speichern)
- Originalpläne bleiben unverändert

### Bekannte Einschränkungen
- Browser-Druck ist noch kein maßstabsgetreuer PDF-Export mit originalem PDF-Seitenformat.
- Keine vollwertige Zwei-Finger-Gestensteuerung im Zeichenmodus; für Pan Navigation wählen.
- Rückgängig-Verlauf wird nach Neuladen nicht beibehalten.
- Build und iPad-Praxistest sind nicht verifiziert.

## 0.21.0 – Zentrale Bauteilakte
- Bauteildetailansicht mit zusammengeführter Foto-, Dokumenten- und Bestandsänderungsübersicht.
- Registerkarten, Zähler, Fotogalerie, Dokumentendownload und Schnellnavigation.
- Projekt-Exportformat 0.21; bisherige Formate bleiben importierbar.

## 0.24.0 – Automatische Nachweiserkennung
- Erkennt bauteilbezogene Fotos, Bestandsänderungen und Dokumente anhand der hinterlegten Dokumentart.
- Dokumentationsübersicht mit Umschaltung zwischen automatisch erkannten und manuell bestätigten Nachweisen.
- Bauteilakte zeigt pro Nachweisart den Erkennungsstatus, ohne manuelle Bestätigungen zu überschreiben.
- Projektweite Dokumente werden nicht ungeprüft einzelnen Bauteilen zugerechnet; keine inhaltliche Qualitätsprüfung.

## 0.28.0–0.33.0 – Fotodokumentation und Bestandsplanung (gebündelter Entwicklungsstand)

### 0.28 – Fotoverwaltung
- Auswahl einzelner oder aller gefilterten Fotos; Stapelzuordnung zu Bauteilen und Kategorien.
- Gemeinsames Löschen mit Sicherheitsabfrage; Ergebnis- und Fehlermeldungen.

### 0.29 – Fotoberichte
- Lokaler Fotobericht mit zwei Fotos pro A4-Seite, Datum, Bauteil, Beschreibung und Seitenzuordnung.
- Export als eigenständige HTML-Datei; PDF über Browser-Druckdialog (Drucken > Als PDF sichern).
- Vorhandene transparente Annotationen können über dem Original dargestellt werden.

### 0.30 – Fotoeditor
- Erweiterung um Linie, Rechteck, Pfeil und Text zusätzlich zur Freihandzeichnung.
- Originalbilder bleiben unverändert, Annotationen werden separat gespeichert.

### 0.31 – Bestandsplan-Export
- PNG-Export der aktuell angezeigten Planseite einschließlich Markierungen.
- Export der Änderungen als JSON mit Plan-, Revisions- und Projektbezug.
- Browser-Druck/PDF bleibt als ergänzender Weg erhalten.

### 0.32 – Bedienung
- Kompaktere Stapelaktionen, mobile Schaltflächen und scrollbare Werkzeugleiste.
- Escape beendet das Zeichnen beziehungsweise schließt die Eingabemaske.

### 0.33 – Konsolidierung
- Versionierung vereinheitlicht, TypeScript-Transpilation aller Quelldateien ohne Syntaxfehler geprüft.
- Einschränkungen: kein nativer Vektor-PDF-Export, kein automatischer Abgleich von Planrevisionen, keine automatische Bild-/PDF-Inhaltsanalyse. Vollständiger Vite-Produktions-Build mangels installierbarer npm-Abhängigkeiten nicht verifiziert.

## 0.33.1 – GitHub Pages Hotfix
- GitHub-Pages-Basispfad aus `GITHUB_REPOSITORY` statt festem Repositorynamen.
- PWA-Service-Worker vorübergehend deaktiviert, um veraltete Cache-Bundles zu vermeiden.
- Sichtbare Fehlermeldung bei JavaScript-Laufzeitfehlern statt leerer Seite.
