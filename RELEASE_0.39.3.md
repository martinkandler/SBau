# sbau.akte 0.39.3 – GAEB-Zahlenformat-Hotfix

- GAEB/RIBX81: Mengen (`Qty`) und Einheitspreise (`UP`) werden als Dezimalzahlen mit Punkt interpretiert; keine Tausenderpunkt-Heuristik.
- Excel/CSV: bisherige länderspezifische Verarbeitung unverändert.
- Regressionsfall: `Qty=1.000`, `UP=114780.960` ergibt 114.780,96 € und nicht 114.780.960 €.
- Referenzdatei `Leistungsverzeichnis(2).RIBX81`: 571 Positionen, GAEB `TotalNet=14.556.677,85 €`; Summe aus `Qty * UP` = 14.556.677,838 € (Rundungsabweichung).
- Bereits falsch importierte LV-Daten müssen neu importiert werden. Keine automatische Datenkorrektur.
- Vollständiger npm/TypeScript-Build in dieser Umgebung nicht verifiziert.
