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
