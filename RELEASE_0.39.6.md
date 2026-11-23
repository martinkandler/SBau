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
