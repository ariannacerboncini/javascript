# Javascript e Node.js
> Node.js ci permette di eseguire codice JavaScript e gestire i relativi pacchetti.

Quando vogliamo creare un progetto, occorre lanciare il comando **npm init** dalla console di Visual Studio Code. 

È possibile compilare i seguenti campi, se lo riteniamo necessario:
- name (nome del progetto)
- version (versione del progetto)
- description (descrizione del progetto)
- main (entry point del progetto)
- keywords
- author (autore del progetto)
- license

In alternativa, per rispondere "sì" a tutti, possiamo usare il comando **npm init -y**.
I campi sono poi modificabili in seguito perché viene creato un file *package.json* che contiene tutte le informazioni di configurazione.

A questo punto possiamo installare dei moduli per il nostro progetto, se lo desideriamo.
Per fare ciò dobbiamo utilizzare il comando **npm install nomePacchetto**, ad esempio **npm install express**.

Per far partire un file differente dall'entry point specificato nella configurazione del progresso usiamo il comando **node nomeFile**.

