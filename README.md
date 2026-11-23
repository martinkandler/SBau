# sbau.akte 0.39.5

Offlinefähige digitale Baustellenakte. Dokumentenimport mit Bauteilzuordnung, QS-Ablagekategorie und unabhängiger Dokumentenart.

# sbau.akte – Digitale Baustellendokumentation

**Aktuelle Version: 0.39.4 (Entwicklungsstand)** · React, TypeScript, Vite, Dexie/IndexedDB · offlinefähige PWA

## Funktionsumfang
- Projekt-Dashboard, Projektverwaltung und JSON-Sicherung
- Planviewer für PDF/Bilder mit Pin- und Flächenmarkierungen, Zoom, Filter und Revisionsverwaltung
- Getrennte globale und projektbezogene Kategorien für Bauteile, Pläne und Qualitätsunterlagen
- Bauteilakten, Fotodokumentation, Bestandsplanung und Qualitätsnachweise
- LV-Import (Excel, CSV und GAEB), Aufmaß und Abrechnung

## Neuerungen in 0.39.4
- Flächenlinien und Bearbeitungsgriffe beim Zoom besser lesbar; unabhängige Schalter für Transparenz und Sichtbarkeit von Pins/Flächen
- Ausgewählten Plan direkt aus der Planverwaltung öffnen
- Versionsanzeige und Funktionsübersicht aktualisiert, UI-Branding vereinheitlicht
- Dashboard weist bei außergewöhnlich hohen Vertragssummen auf möglicherweise fehlerhafte importierte LV-Werte hin

## Entwicklung und Deployment
```bash
npm install
npm run dev
npm run build
```

Für GitHub Pages den Workflow `.github/workflows/deploy.yml` verwenden. Die veröffentlichte Anwendung läuft im Browser; Projektdateien liegen lokal in IndexedDB. Vor Änderungen oder Neuimporten Projekt-Backup erstellen.

**Wichtig zur LV-Summe:** Der Mengenparser interpretiert `1.000` als Menge `1`. Bereits zuvor falsch importierte Datensätze werden nicht stillschweigend umgerechnet. Die Vertragssumme berechnet sich aus der Summe von Vertragsmenge × Einheitspreis. Bei Abweichungen LV-Daten prüfen und korrigieren.

**Buildstatus:** In der aktuellen Bearbeitungsumgebung war wegen nicht erreichbarer npm-Registry kein vollständiger Build möglich. GitHub Actions muss vor Freigabe erfolgreich laufen.

## Versionspflege
Bei jeder Veröffentlichung `src/appVersion.ts`, `package.json`, `CHANGELOG.md` und die Funktionsübersicht in `src/ProgramInfo.tsx` prüfen und gemeinsam aktualisieren. Historische Release-Dateien bleiben als Archiv erhalten.
