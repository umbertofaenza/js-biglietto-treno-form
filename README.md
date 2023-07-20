# JS BIGLIETTO TRENO (form version)

## Traccia

Scrivere un programma che chieda all'utente:

- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

## Svolgimento

- Chiedo all'utente quanti chilometri vuole percorrere
- Chiedo all'utente l'età del passeggero
- Dichiaro una tariffa in euro al km.
- Calcolo il prezzo base del biglietto applicando la tariffa ai km inseriti.

- **SE** il passeggro è minorenne

  - Calcolo uno sconto del 20%

- **ALTRIMENTI SE** il passeggero è over 65

  - Calcolo uno sconto del 65%

- Calcolo il prezzo finale del biglietto
- Stampo il prezzo finale del biglietto
