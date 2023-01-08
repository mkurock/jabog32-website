# Schnittstellen Dateien in diesem Ordner
Dateien in diesem Ordner werden für Datenschnittstellen bereitgestellt. Die Dateien müssen mit korrketem Namen in diesem Verzeichnis liegen um von der Schnittstelle aufgegriffen zu werden.
Die möglichen Dateinamen werden im folgenden erklärt.

## Datei: PilotsStats.csv
### Erklärung
Diese Datei wird für die Schnittstelle der Piloten Stats im internen Bereich verwendet.

### Beispiel
Die Datei muss die folgenden Spalten enthalten:

```csv
Pilotenname;Einsaetze;LandingStreak;Tode;Ejections;Startzeit;Landezeit;Flugzeit;Starts;Landungen;Verdienst;Missionen gestartet;erfolgreiche Missionen;zuletzt gestartet von;zuletzt gelandet in;Flugzeugtyp;zerstoerte Bodeneinheiten;zerstoerte Strukturen;zerstoerte Flugzeuge;zerstoerte Helikopter;zerstoerte Schiffe;Bittersweet;LSO Bewertungen;Platzhalter1;Platzhalter2;Platzhalter3;Platzhalter4;Platzhalter6
JaBoG32_SNAFU;5;5;0;0;54398;59707;2.1306264825;5;5;7736840;1;1;Al Minhad;CVN-73;F-14B;0;0;0;1;0;0;LSO: GRADE:--- : (EGIW)  WIRE# 2[BC];24;25;26;27;28
```