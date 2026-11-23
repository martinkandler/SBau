# sbau.akte 0.38.5 – LV-Mengen-Hotfix

- Mengen mit Dezimalpunkt werden korrekt gelesen: `1.000` → 1; `0.500` → 0,5; `12.345` → 12,345.
- Mengen mit Dezimalkomma bleiben möglich: `1,500` → 1,5.
- Einheitspreise behalten die bisherige deutsche Formatinterpretation.
- Excel-Import liest echte Zellwerte statt formatierter Anzeigetexte (`raw:true`).
- Betrifft CSV, XLSX, GAEB-XML und manuelle LV-Mengeneingabe.
- Importvorschau zeigt Mengen mit deutschem Dezimalkomma.

**Achtung:** Bereits importierte Positionen werden nicht automatisch verändert. Vor erneutem Import Daten sichern und vorhandene LV-Positionen kontrollieren. Bei gemischten externen Formaten bitte die Importvorschau mit dem Original-LV abgleichen.
