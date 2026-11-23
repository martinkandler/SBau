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
