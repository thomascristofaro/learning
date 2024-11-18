# Power BI Desktop: da Excel al report

In questa esercitazione creeremo un report dall'inizio alla fine in 20 minuti.
Illustreremo come:
* scaricare i dati di esempio in due modi diversi
* preparare i dati con alcune trasformazioni
* creare un report con un titolo, tre oggetti visivi e un filtro dei dati
* pubblicare il report nel servizio Power BI in modo da poterlo condividere con i colleghi


### Analisi
Il responsabile vuole visualizzare un report sulle cifre più recenti sulle vendite. Hanno richiesto un riepilogo esecutivo di:
* Quale mese e anno hanno avuto il maggior profitto?
* Dove l'azienda vede il maggior successo (per paese/are geografica)?
* Quale prodotto e segmento deve continuare a investire l'azienda?

### Prerequisiti
* Prima di iniziare, è necessario [scaricare Power BI Desktop](https://powerbi.microsoft.com/desktop/).
* Se si prevede di pubblicare il report nel servizio Power BI e non si è ancora iscritti, [iscriversi per ottenere una versione di valutazione](https://app.powerbi.com/signupredirect?pbi_source=web) gratuita. 

 ### Ottenere dati in Power BI Desktop
 Quando si apre Power BI Desktop, selezionare **Prova un modello** semantico di esempio nell'area di disegno vuota.

![Power BI Desktop](/img/power-platform/exc-bi/bi-1.png)

Procedere e scegliere **Carica dati**.

![Power BI Desktop](/img/power-platform/exc-bi/bi-2.png)

### Scaricare l'esempio
È anche possibile scaricare direttamente la cartella di lavoro di esempio.
1. Scaricare la [cartella di lavoro](https://go.microsoft.com/fwlink/?LinkID=521962) di Excel di esempio Financial.
2. Apri Power BI Desktop.
3. Nella **sezione Dati** della **barra multifunzione Home** selezionare **Excel**.
4. Passare alla posizione in cui è stata salvata la cartella di lavoro di esempio e selezionare **Apri**.

### Preparare i dati
In **Strumento di esplorazione**, è possibile modificare o caricare i dati. Questo strumento offre un'anteprima dei dati per consentire la verifica dell'intervallo di dati corretto. I tipi di dati numerici sono in corsivo. Se è necessario apportare modifiche, è possibile effettuare trasformazioni dei dati prima del caricamento. Al fine di agevolare la lettura delle visualizzazioni in un secondo momento, è consigliabile effettuare la trasformazione dei dati. Durante l'esecuzione di ogni trasformazione, viene visualizzato un aggiornamento nell'elenco di **Impostazioni Query** sotto la sezione **Passaggi applicati**.

1. Selezionare la **tabella Financials** e scegliere **Trasforma dati**.
![Power BI Desktop](/img/power-platform/exc-bi/bi-3.png)

2. Selezionare la colonna **Quantità venduta**. Nella scheda **Trasformare**, optare per **Categoria dati** e successivamente selezionare **Numero intero**. Optare per **Rimpiazza attuale** per effettuare la modifica del tipo di colonna. I passaggi principali nella pulizia dei dati spesso comportano la modifica dei tipi di dati. In questa situazione, le unità vendute sono in formato decimale. Non ha senso avere 0,2 o 0,5 di un'unità venduta, giusto? Pertanto, si procederà a modificare questo valore in numero intero.
![Power BI Desktop](/img/power-platform/exc-bi/bi-4.png)

3. Selezionare la colonna **Segmento**. Al fine di semplificare la visualizzazione dei segmenti nel grafico successivo, procediamo con la formattazione della colonna Segmento. Nella scheda **Trasforma** selezionare **Formato**, quindi selezionare **UPPERCA edizione Standard**.
![Power BI Desktop](/img/power-platform/exc-bi/bi-5.png)

4. Nella colonna **Prodotto** selezionare l'elenco a discesa e deselezionare la casella accanto a **Montana**.
Sappiamo che il prodotto Montana è stato sospeso lo scorso mese, quindi vogliamo filtrare questi dati dal report per evitare confusione.
![Power BI Desktop](/img/power-platform/exc-bi/bi-6.png)

5. Si noterà che ogni trasformazione è stata aggiunta all'elenco in **Query Impostazioni** in **Passaggi** applicati.   
![Power BI Desktop](/img/power-platform/exc-bi/bi-7.png)

6. Nella scheda **Home** selezionare **Chiudi & applica**. I dati sono quasi pronti per la creazione di un report.
Il simbolo Sigma viene visualizzato nell'elenco Campi? Power BI ha rilevato che tali campi sono numerici. Power BI indica anche il campo data con un simbolo di calendario.
![Power BI Desktop](/img/power-platform/exc-bi/bi-8.png)


### Come scrivere un'espressione in DAX
La scrittura di misure e la creazione di tabelle nel linguaggio delle formule DAX è molto potente per la modellazione dei dati. Sono disponibili molte informazioni su DAX nella documentazione di Power BI. Per il momento, scrivere un'espressione di base e unire due tabelle.

1. Nella **barra multifunzione Home** selezionare **Nuova misura**.
![Power BI Desktop](/img/power-platform/exc-bi/bi-9.png)

2. Digitare questa espressione per aggiungere tutti i numeri nella colonna Unità vendute.
   ```dax
   Total Units Sold = SUM(financials[Units Sold])
   ```

3. Selezionare il segno di spunta per il commit.
![Power BI Desktop](/img/power-platform/exc-bi/bi-10.png)

4. Selezionare ora la **visualizzazione Dati** a sinistra.
![Power BI Desktop](/img/power-platform/exc-bi/bi-11.png)

5. Nella **barra multifunzione Home** selezionare **Nuova tabella**.
![Power BI Desktop](/img/power-platform/exc-bi/bi-12.png)

6. Digitare questa espressione per generare una tabella Calendar di tutte le date comprese tra il 1° gennaio 2013 e il 31 dicembre 2014.
   ```dax
   Calendar = CALENDAR(DATE(2013,01,01),Date(2014,12,31))
   ```

7. Selezionare il segno di spunta per il commit.   
![Power BI Desktop](/img/power-platform/exc-bi/bi-13.png)

8. Selezionare ora **Visualizzazione modello** a sinistra.   
![Power BI Desktop](/img/power-platform/exc-bi/bi-14.png)

9. Trascinare il **campo Date** dalla tabella financials al **campo Date** della tabella Calendar per unire le tabelle e creare una relazione tra di esse.   
![Power BI Desktop](/img/power-platform/exc-bi/bi-15.png)


### Creare il report
Dopo aver trasformato e caricato i dati, è possibile procedere con la creazione del report. Nel riquadro Campi a destra, sono visualizzati i campi presenti nel modello di dati appena creato. Ora procediamo a compilare il report finale, un oggetto visivo alla volta.

![Power BI Desktop](/img/power-platform/exc-bi/bi-16.png)

### Aggiungere un titolo
1. Nella barra multifunzione **Inserisci** selezionare **Casella** di testo. Digitare "Executive Summary – Finance Report".
2. Selezionare il testo digitato. Impostare Dimensione carattere su 20 e Grassetto.
![Power BI Desktop](/img/power-platform/exc-bi/bi-17.png)

3. Ridimensionare la casella in modo che si adatti a una riga.


### Profit by Date
A questo scopo, si crea un grafico a linee per vedere quale mese e anno ha avuto il profitto più alto.
1. Dal riquadro Campi trascinare il campo Profit in un'area vuota nell'area di disegno report. Per impostazione predefinita, Power BI visualizza un istogramma con una colonna Profit.
2. Trascinare il campo **Data** nello stesso oggetto visivo. Se è stata creata una tabella Calendario in ["Credito aggiuntivo: creare una tabella in DAX"](/docs/power-platform/power-bi/esempi-pratici/01-desk-excel-to-report.md) in precedenza in questo articolo, trascinare invece il campo **Data** dalla tabella Calendario. Power BI aggiorna l'istogramma per mostrare i profitti dei due anni. 
![Power BI Desktop](/img/power-platform/exc-bi/bi-18.png)

3. Nella sezione **Campi** del riquadro Visualizzazioni selezionare l'elenco a discesa nel valore dell'asse X. Modificare **Data** da **Gerarchia data** a **Data**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-19.png)   

   Power BI aggiorna l'istogramma per visualizzare i profitti per ogni mese.   

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-20.png)

4. Nel riquadro Visualizzazioni modificare il tipo di visualizzazione in Grafico a linee.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-21.png)   
   Ora si può facilmente vedere che dicembre 2014 ha avuto il maggior profitto.


### Profit by Country/Region
Creare una mappa per visualizzare il paese o l'area geografica con i profitti più elevati.

1. Dal riquadro Campi trascinare il campo **Paese** in un'area vuota nell'area di disegno del report per creare una mappa.
2. Trascinare il campo **Profit** sulla mappa.
   
   Power BI crea un oggetto visivo mappa con bolle che rappresentano il profitto relativo di ogni posizione.
   ![Power BI Desktop](/img/power-platform/exc-bi/bi-22.png)
   L'Europa sembra migliorare le prestazioni di America del Nord.


### Vendite per prodotto e segmento
Creare un grafico a barre per determinare le aziende e i segmenti in cui investire.

1. Trascinare i due grafici creati per essere affiancati nella metà superiore dell'area di disegno. Salvare una stanza sul lato sinistro dell'area di disegno.
2. Selezionare un'area vuota nella metà inferiore dell'area di disegno del report.
3. Nel riquadro Campi selezionare i campi **Vendite**, **Prodotto** e **Segmento**.
   Power BI crea automaticamente un istogramma cluster.
4. Trascinare il grafico in modo che sia abbastanza ampio per riempire lo spazio sotto i due grafici superiori.
   ![Power BI Desktop](/img/power-platform/exc-bi/bi-23.png)
   Sembra che l'azienda continui a investire nel prodotto e per i segmenti Small Business e Government.

### Filtro dei dati Year
I filtri dei dati costituiscono uno strumento utile per filtrare gli oggetti visivi all'interno di una pagina del report in base a selezioni specifiche. In questo scenario, è possibile creare due filtri dati distinti per limitare le prestazioni per ogni mese e anno. Un filtro dati può utilizzare il campo data nella tabella originale, mentre l'altro può fare uso della tabella delle date creata come "credito aggiuntivo" in fasi precedenti di questa esercitazione.

**Filtro dei dati data usando la tabella originale**
1. Nel riquadro Campi selezionare il campo Data nella tabella Financials. Trascinarlo nell'area vuota a sinistra dell'area di disegno.
2. Nel riquadro Visualizzazioni scegliere Filtro dei dati.
   ![Power BI Desktop](/img/power-platform/exc-bi/bi-24.png)
   Power BI crea automaticamente un filtro dei dati di intervallo numerico.
3. È possibile trascinare le estremità da filtrare oppure selezionare la freccia nell'angolo superiore destro e modificarla in un tipo diverso di filtro dei dati.

**Filtro dei dati data tramite la tabella DAX**
1. Nel riquadro Campi selezionare il campo Data nella tabella Calendario. Trascinarlo nell'area vuota a sinistra dell'area di disegno.
2. Nel riquadro Visualizzazioni scegliere Filtro dei dati.
3. Nella sezione Campi del riquadro Visualizzazioni selezionare l'elenco a discesa campi. Rimuovi trimestre e giorno, quindi vengono lasciati solo anno e mese.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-25.png)

4. Espandere ogni anno e ridimensionare l'oggetto visivo, in modo che tutti i mesi siano visibili.
   
   ![Power BI Desktop](/img/power-platform/exc-bi/bi-26.png)
   
   Questo filtro dei dati verrà usato nel report completo.

Ora se il manager chiede di visualizzare solo i dati del 2013, è possibile usare il filtro dei dati per selezionare anni o mesi specifici di ogni anno.

### Come formattare il report
Se si desidera eseguire una formattazione chiara su questo report per aggiungere più lucidità, ecco alcuni semplici passaggi.
**Tema**
- Sulla barra multifunzione **Visualizza** modificare il tema in **Executive**.
![Power BI Desktop](/img/power-platform/exc-bi/bi-27.png)

**Abbellisci la grafica**

Apportare le modifiche seguenti nella scheda **Formato** nel riquadro **Visualizzazioni**.   
   
   ![Power BI Desktop](/img/power-platform/exc-bi/bi-28.png)

1. Selezionare Visual 2. Nella sezione **Titolo** modificare il testo titolo in "Profit by Month and Year" (Profit by Month and Year) e **Text size** (Dimensioni testo) su **16 pt**. Attiva/Disattiva ombreggiatura.
2. Selezionare Visual 3. Nella sezione Stili mappa impostare **Tema su Scala di grigi**. Nella sezione Titolo modificare le dimensioni del testo del titolo in **16 pt**. Attiva/Disattiva ombreggiatura.
3. Selezionare Visual 4. Nella sezione Titolo modificare le dimensioni del testo del titolo in 16 pt. Attiva/Disattiva ombreggiatura.
4. Selezionare Visual 5. Nella sezione **Controlli** di selezione impostare l'opzione **Mostra** "Seleziona tutto" su Sì. Nella sezione Intestazione filtro dei dati aumentare le dimensioni del testo a **16 pt**.

**Aggiungere una forma di sfondo per il titolo**
1. Nella barra multifunzione **Inserisci** selezionare **Rettangolo forme>**. Posizionarlo nella parte superiore della pagina e estenderlo in modo che sia la larghezza della pagina e l'altezza del titolo.
2. Nella sezione Struttura del riquadro **Formato forma** impostare Trasparenza su **100%**.
3. Nella sezione **Riempimento** modificare **Colore riempimento** in **Colore tema 5 #6B91C9** (blu).

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-29.png)

4. Nella scheda Formato selezionare Invia all'indietro >Invia indietro.
5. Selezionare il testo in Visual 1, il titolo e modificare il colore del carattere in **Bianco**.

**Aggiungere una forma di sfondo per gli oggetti visivi 2 e 3**
1. Nella barra multifunzione **Inserisci** selezionare **Rettangolo** forme> e estenderlo in modo che sia la larghezza e l'altezza degli oggetti visivi 2 e 3.
2. Nella sezione Struttura del riquadro **Formato forma** impostare **Trasparenza** su **100%**.
3. Nella sezione Riempimento impostare il colore su **Bianco**, **10% più scuro**.
4. Nella scheda Formato selezionare Invia all'indietro **>Invia indietro**.

### Report completato
Ecco come apparirà il report completo finale:

![Power BI Desktop](/img/power-platform/exc-bi/bi-30.png)

### Salvataggio del report
Scegliere **Save (Salva)** dal menu **File**.

### Pubblicare nel servizio Power BI da condividere
Per condividere il report con il manager e i colleghi, pubblicarlo nel servizio Power BI. Quando si condivide con i colleghi che hanno un account Power BI, possono interagire con il report, ma non possono salvare le modifiche.

1. In Power BI Desktop selezionare **Pubblica** sulla barra multifunzione **Home**.
2. Selezionare una destinazione, ad esempio **Area di lavoro personale**, nel servizio Power BI **>Seleziona**.
3. Selezionare **Apri "nome-file"** in Power BI.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-31.png)

   Il report completato viene aperto nel browser.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-32.png)

4. Selezionare **Condividi** nella parte superiore del report per condividere il report con altri utenti.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-33.png)