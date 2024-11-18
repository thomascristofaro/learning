# Power BI Desktop: modello dimensionale da segnalare

In questa esercitazione si inizia con un modello dimensionale e si crea un report dall'inizio alla dine in 45 minuti.

### Analisi
Si lavora in AdventureWorks e il manager vuole visualizzare un report sulle cifre di vendita più recenti. Hanno richiesto un riepilogo esecutivo di:
- Quale giorno ha avuto il maggior numero di vendite nel febbraio 2019?
- In quale paese/area geografica l'azienda ha ottenuto il maggior successo?
- In quale categoria di prodotto e tipo di business rivenditore deve continuare a investire l'azienda?

### Prerequisiti
* Prima di iniziare, è necessario [scaricare Power BI Desktop](https://powerbi.microsoft.com/desktop/).
* Se si prevede di pubblicare il report nel servizio Power BI e non si è ancora iscritti, [iscriversi per ottenere una versione di valutazione](https://app.powerbi.com/signupredirect?pbi_source=web) gratuita. 

### Ottenere dati: scaricare l'esempio
1. Scaricare la [cartella di lavoro di Excel](https://github.com/microsoft/powerbi-desktop-samples/blob/main/AdventureWorks%20Sales%20Sample/AdventureWorks%20Sales.xlsx) di esempio AdventureWorks Sales.
2. Apri Power BI Desktop.
3. Nella sezione **Dati** della barra multifunzione **Home** selezionare **Excel**.
4. Passare alla posizione in cui è stata salvata la cartella di lavoro di esempio e selezionare **Apri**.

### Preparare i dati
Nel riquadro **Strumento di esplorazione** è possibile effettuare la *trasformazione* o *caricare i dati*. Questo strumento offre un'anteprima dei dati per consentire la verifica dell'intervallo di dati corretto. I tipi di dati numerici sono in corsivo. In questa esercitazione, si procederà con la trasformazione dei dati prima del caricamento.

Selezionare tutte le tabelle e optare per la Trasformazione dati. Assicurarsi di non selezionare i fogli (etichettati _data).

![Power BI Desktop](/img/power-platform/exc-bi/bi-34.png)

Verificare che i tipi di dati delle colonne corrispondano ai tipi di dati nella tabella seguente. Per permettere a Power BI di rilevare automaticamente i tipi di dati, selezionare una query e successivamente selezionare una o più colonne. Nella scheda **Trasforma**, optare per **Rileva tipo di dati**. Per apportare modifiche al tipo di dati rilevato, spostarsi sulla scheda **Home**, selezionare **Tipo di dati** e quindi scegliere il tipo di dati appropriato dall'elenco.

![Power BI Desktop](/img/power-platform/exc-bi/bi-35.png)

![Power BI Desktop](/img/power-platform/exc-bi/bi-36.png)

Nella scheda **Home** selezionare **Chiudi & applica**.

![Power BI Desktop](/img/power-platform/exc-bi/bi-37.png)

### Modellare i dati
I dati caricati sono quasi pronti per la creazione di report. Esaminare il modello di dati e apportare alcune modifiche.
Selezionare **Visualizzazione modello** a sinistra.

![Power BI Desktop](/img/power-platform/exc-bi/bi-38.png)

Il modello di dati dovrebbe essere simile all'immagine seguente, con ogni tabella in una casella.
![Power BI Desktop](/img/power-platform/exc-bi/bi-39.png)


### Creare relazioni
Questo modello rappresenta uno schema *a stella tipico*, comunemente visualizzato nei data warehouse, che assomiglia a una stella. Il nucleo della stella è una tabella Fact. Le tabelle circostanti sono denominate tabelle Dimension, correlate alla tabella Fact tramite relazioni. La tabella Fact contiene informazioni numeriche sulle transazioni di vendita, come ad esempio l'Importo delle Vendite e il Costo Standard del Prodotto. Le dimensioni forniscono il contesto in modo che sia possibile, tra le altre cose, analizzare:

- Quale prodotto è stato venduto...
- a cui cliente...
- con il rivenditore...
- in cui territorio di vendita.

Se si osserva attentamente, si noterà che tutte le tabelle Dimension sono correlate al fatto con una relazione, ad eccezione della tabella Date. Aggiungere ora alcune relazioni a Date. Trascinare DateKey dalla tabella Date a OrderDateKey nella tabella Sales. È stata creata una relazione chiamata "uno-a-molti" da Date a Sales, come indicato da 1 e dall'asterisco * (molti) alle due estremità della riga.

La relazione è "uno-a-molti" perché sono presenti uno o più ordini Sales per una data specificata. Se ogni data avesse un solo ordine Sales, la relazione sarebbe "uno-a-uno". La piccola freccia al centro della linea indica la "direzione di filtro incrociato". Questo indica che è possibile utilizzare i valori della tabella Date per filtrare la tabella Sales, consentendo così di analizzare quando è stato effettuato un ordine Sales.

![Power BI Desktop](/img/power-platform/exc-bi/bi-40.png)

La tabella Sales contiene ulteriori informazioni sulle date correlate agli ordini di vendita, come la data di scadenza e la data di spedizione. Aggiungere altre due relazioni alla tabella Date trascinando:
- DateKey a DueDateKey
- DateKey a ShipDateKey

![Power BI Desktop](/img/power-platform/exc-bi/bi-41.png)

Si noti che la prima relazione, in OrderDateKey, è attiva, evidenziata da una linea continua. Gli altri due sono inattivi, segnalati dalle linee tratteggiate. Power BI utilizza la relazione attiva per impostazione predefinita per correlare Vendite e Data. Di conseguenza, una somma di SalesAmount viene calcolata in base alla data dell'ordine, non alla data di scadenza o alla data di spedizione. È possibile influenzare questo comportamento.

### Nascondere le colonne chiave
Lo schema star tipico contiene diverse chiavi che contengono le relazioni tra Fatti e Dimensioni. In genere non si vogliono usare colonne chiave nei report. Nascondiamo le colonne chiave dalla visualizzazione, quindi l'elenco campi mostra meno campi e il modello di dati è più facile da usare.

Passare a tutte le tabelle e nascondere qualsiasi colonna il cui nome termina con *Chiave*:

Selezionare l'icona Occhio accanto alla colonna e scegliere **Nascondi nella visualizzazione** report.

![Power BI Desktop](/img/power-platform/exc-bi/bi-42.png)

È anche possibile selezionare l'icona Occhio accanto alla colonna nel riquadro Proprietà.
I campi nascosti hanno questa icona, un occhio con una linea attraverso di esso.

![Power BI Desktop](/img/power-platform/exc-bi/bi-43.png)

Nascondere questi campi.

![Power BI Desktop](/img/power-platform/exc-bi/bi-44.png)

Il modello di dati dovrebbe ora essere simile a questo modello di dati, con relazioni tra Sales e tutte le altre tabelle e tutti i campi chiave nascosti:

![Power BI Desktop](/img/power-platform/exc-bi/bi-45.png)

### Creare gerarchie
Ora che il modello di dati è più user-friendly grazie alle colonne nascoste, è possibile arricchirlo aggiungendo alcune *gerarchie* per semplificarne l'utilizzo. Le gerarchie facilitano la navigazione attraverso i raggruppamenti. Ad esempio, le città possono essere all'interno di uno stato o di una provincia, che a sua volta può trovarsi in un paese o in un'area geografica.

Creare le gerarchie seguenti:
1. Fare clic con il pulsante destro del mouse sul livello più alto o il campo meno granulare nella gerarchia e scegliere **Crea gerarchia**.
2. Nel riquadro **Proprietà** impostare il **nome** della gerarchia e impostare i livelli.
3. Applicare quindi le **modifiche al livello**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-46.png)

È anche possibile rinominare i livelli in una gerarchia nel riquadro Proprietà dopo averli aggiunti. Sarà necessario rinominare il livello Year e Quarter della gerarchia Fiscal nella tabella Date.

Ecco le gerarchie da creare.

![Power BI Desktop](/img/power-platform/exc-bi/bi-47.png)

Il modello di dati dovrebbe ora essere simile al modello di dati seguente. Contiene le stesse tabelle, ma ogni tabella delle dimensioni contiene una gerarchia:

![Power BI Desktop](/img/power-platform/exc-bi/bi-48.png)

### Rinominare le tabelle
Per completare la modellazione, rinominare le tabelle seguenti nel riquadro Proprietà:

![Power BI Desktop](/img/power-platform/exc-bi/bi-49.png)

Questo passaggio è necessario perché i nomi delle tabelle di Excel non possono contenere spazi.

A questo punto il modello di dati finale è pronto.

![Power BI Desktop](/img/power-platform/exc-bi/bi-50.png)

### Come scrivere una misura in DAX
La creazione di misure nel linguaggio delle formule DAX è estremamente potente per la modellazione dei dati. Al momento, procediamo scrivendo una misura di base che calcoli l'importo totale delle vendite per la data di scadenza nell'ordine di vendita anziché la data di ordine predefinita. Questa misura sfrutta la funzione U edizione Standard RELATIONSHIP per attivare la relazione tra Sales e Date in DueDate per il contesto della misura. Successivamente, utilizza la funzione CALCULATE per sommare l'importo delle vendite in tale contesto.

1. Selezionare **Vista dati** a sinistra.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-51.png)

2. Selezionare la tabella **Sales** nell'elenco **Campi**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-52.png)

3. Nella barra multifunzione **Home** selezionare **Nuova misura**.
4. Selezionare o digitare questa misura per calcolare l'importo totale delle vendite in base alla data di scadenza dell'ordine invece della data di ordine predefinita:
   ```dax
   Sales Amount by Due Date = CALCULATE(SUM(Sales[Sales Amount]), USERELATIONSHIP(Sales[DueDateKey],'Date'[DateKey]))
   ```

5. Selezionare il segno di spunta per il commit.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-53.png)

### Creare il report
Dopo aver modellato i dati, è possibile creare il report. Passare a Visualizzazione report. Nel riquadro Campi a destra sono visualizzati i campi nel modello di dati creato.

Verrà ora compilato il report finale, un oggetto visivo alla volta.

![Power BI Desktop](/img/power-platform/exc-bi/bi-54.png)

### Aggiungere un titolo
1. Nella barra multifunzione **Inserisci** selezionare **Casella** di testo. Digitare *Riepilogo esecutivo - Report vendite*.
2. Selezionare il testo digitato. Impostare le dimensioni del carattere su **20** e **Grassetto**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-55.png)

3. Nel riquadro **Formato casella** di testo, in **Effetti**, impostare Sfondo su **Disattivato**.
4. Ridimensionare la casella in modo che si adatti a una riga.

### Importo vendite per data
Successivamente si crea un grafico a linee per vedere quale mese e anno ha avuto l'importo di vendita più alto.

1. Dal riquadro Campi trascinare il campo **Sales Amount** dalla tabella **Sales** in un'area vuota nell'area di disegno report. Per impostazione predefinita, Power BI visualizza un istogramma con una colonna Sales Amount.
2. Trascinare il campo **Month** dalla **gerarchia Fiscal** nella tabella **Date** e rilasciarlo nell'istogramma.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-56.png)

3. Nella sezione **Campi** del riquadro Visualizzazioni rimuovere i campi **Anno fiscale** e **Trimestre fiscale** nella casella Asse X:

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-57.png)

4. Nel riquadro **Visualizzazioni** modificare il tipo di visualizzazione in Grafico ad area.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-58.png)

5. Se è stata aggiunta la misura DAX nel credito aggiuntivo precedente, aggiungerla anche all'asse Y.
6. Aprire il riquadro Formato, espandere la sezione **Righe** e in **Colori** modificare **Importo vendite per data** di scadenza in un colore più a contrasto, ad esempio rosso.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-59.png)

   Come si può notare, Sales Amount by Due Date traccia leggermente dietro Sales Amount.As you can see, Sales Amount by Due Date trailly behind Sales Amount. Ciò dimostra che usa la relazione tra le tabelle Sales e Date che usano DueDateKey.

### Order Quantity by Reseller Country-Region
A questo punto si creerà una mappa per vedere in quale Paese o area geografica i rivenditori hanno il valore di Quantità di ordine più alto.
1. Dal riquadro Campi trascinare il campo **Country-Region** dalla tabella **Reseller** in un'area vuota nell'area di disegno del report. Power BI crea una mappa.
2. Trascinare il campo **Order Quantity** dalla tabella **Sales** e rilasciarlo sulla mappa. Assicurarsi che l'area geografica sia nell'area **Posizione** e nella quantità di ordini nell'area **Dimensioni bolle**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-60.png)

### Sales Amount by Product Category and Reseller Business type
Verrà quindi creato un istogramma per esaminare i prodotti venduti in base al tipo di business dei rivenditori.
1. Trascinare i due grafici creati per essere affiancati nella metà superiore dell'area di disegno. Salvare una stanza sul lato sinistro dell'area di disegno.
2. Selezionare un'area vuota nella metà inferiore dell'area di disegno del report.
3. Nel riquadro Campi selezionare Sales Amount from Sales, Product Category from Product (Importo vendite), Product Category (Categoria prodotto) da Product (Prodotto) e Business Type from Reseller (Tipo di business da Rivenditore).

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-61.png)

   Power BI crea automaticamente un istogramma cluster. Modificare la visualizzazione in una **matrice**:
 
   ![Power BI Desktop](/img/power-platform/exc-bi/bi-62.png)

4. Trascinare il campo **Tipo di business** da **Colonne** e inserirlo in **Categoria** in **Righe**.

5. Con la matrice ancora selezionata, nel riquadro Filtri, in **Tipo di business** selezionare **tutto**, quindi deselezionare la casella **[Non applicabile]**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-63.png)

6. Trascinare la matrice in modo che sia sufficientemente ampia da riempire lo spazio sotto i due grafici superiori.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-64.png)

7. Nel riquadro Formattazione per la matrice cercare condizionale. Nella sezione **Elementi** cella attivare **Barre dei dati**. Selezionare l'opzione **fx** e impostare un colore più chiaro per la barra positiva. Seleziona **OK**.
8. Aumentare la larghezza della colonna Sales Amount in modo che riempia l'intera area trascinando la matrice.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-65.png)

Sembra che Bikes abbia un importo di vendita superiore nel complesso e i rivenditori value added vendono di più, seguiti da vicino dai magazzini. Per i componenti, i magazzini vendono più dei rivenditori value added.

### Filtro dei dati del calendario fiscale
I filtri dei dati sono uno strumento utile per filtrare gli oggetti visivi in una pagina del report in base a una selezione specifica. in questo caso, è possibile creare un filtro dei dati per limitare le prestazioni per ogni mese, trimestre e anno.
1. Nel riquadro Campi selezionare la gerarchia Fiscale dalla tabella Date e trascinarla nell'area vuota a sinistra dell'area di disegno.
2. Nel riquadro Visualizzazioni scegliere Filtro dei dati.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-66.png)

3. Nella sezione Campi del riquadro Visualizzazioni rimuovere Quarter e Date in modo che solo Year e Month vengano lasciati

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-67.png)

Ora se il manager chiede di visualizzare i dati solo per un mese specifico, è possibile usare il filtro dei dati per passare da anni a mesi specifici in ogni anno.

### Credito aggiuntivo: formattare il report
Se si desidera eseguire una formattazione chiara su questo report per aggiungere più lucidità, ecco alcuni semplici passaggi.

#### Tema
- Nella barra multifunzione **Visualizza** selezionare **Temi** e modificare il tema in **Executive**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-68.png)

#### Spruce up the visuals
Apportare le modifiche seguenti nella scheda **Formato** nel riquadro Visualizzazioni.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-69.png)

:::tip Suggerimento
Un modo rapido per trovare l'impostazione da modificare consiste nel digitare nella casella Di ricerca nel riquadro Formato.
:::

##### Oggetto visivo 2, Importo vendite per data
1. Selezionare Visual 2, Sales Amount by Date (Importo vendite per data).
2. Nella sezione **Titolo**, se non è stata aggiunta la misura DAX, impostare **Testo** su "Sales Amount by Order Date".
   Se è stata aggiunta la misura DAX, modificare **Text** in "Sales Amount by Order Date/Due Date".
   Assicurarsi di ottenere la sezione **Title** per l'oggetto visivo stesso, perché anche gli assi e la legenda possono avere titoli.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-70.png)

3. Impostare **Dimensioni testo** su **16 pt**.
4. Nella scheda **Generale** impostare **Ombreggiatura su Sì**.

##### Visual 3, Order Quantity by Reseller Country-Region
1. Selezionare Visual 3, Order Quantity by Reseller Country-Region .Select Visual 3, Order Quantity by Reseller Country-Region.
2. Nella sezione **Impostazione mappa** impostare Stile su **Scala di grigi**.
3. Nella scheda **Generale**, nella sezione **Titolo** , impostare Testo su "Order Quantity by Reseller Country-Region".
4. Impostare Dimensioni testo su **16 pt**.
5. Anche nella scheda **Generale**, attivare l'opzione **Ombreggiatura su Sì**.

##### Visual 4, Sales Amount by Product Category and Reseller Business Type
1. Selezionare Visual 4, Sales Amount by Product Category (Importo vendite per categoria prodotto) e Reseller Business Type (Tipo di business rivenditore).
2. Nella sezione Titolo della scheda Generale modificare **Testo** in "Sales Amount by Product Category and Reseller Business Type".
3. Impostare **Dimensioni** testo su **16 pt**.
4. Anche nella scheda **Generale**, attivare l'opzione **Ombreggiatura su Sì**.

##### Oggetto visivo 5, filtro dei dati del calendario fiscale
1. Selezionare Visual 5, Filtro dei dati calendario fiscale.
2. Nella sezione **Impostazioni** filtro dei dati, in Selezione, impostare l'opzione **Mostra "Seleziona tutto" su Sì**.
3. Nella sezione **Intestazione** filtro dei dati impostare **Dimensioni** testo su **16 pt**.

### Aggiungere una forma di sfondo per il titolo
1. Nella barra multifunzione **Inserisci** selezionare **Rettangolo forme>**.
2. Posizionarlo nella parte superiore della pagina e estenderlo in modo che sia la larghezza della pagina e l'altezza del titolo.
3. Nella sezione Bordo del riquadro **Stile** impostare Trasparenza su **100%**.
4. Nella sezione **Riempimento** modificare **Colore riempimento** in **Colore tema 5 #6B91C9** (blu).
5. Nella barra multifunzione **Formatta** selezionare **Invia all'indietro>Invia indietro**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-71.png)

6. Selezionare il testo in Visual 1, il titolo e impostare **Colore carattere** su **Bianco**.

### Report completato
Selezionare **FY2029** nel filtro dei dati.

![Power BI Desktop](/img/power-platform/exc-bi/bi-72.png)

### Salvataggio del report
Scegliere **Save (Salva)** dal menu **File**.

### Pubblicare nel servizio Power BI da condividere
Per condividere il report con il manager e i colleghi, pubblicarlo nel servizio Power BI. Quando si condivide con i colleghi che hanno un account Power BI, possono interagire con il report, ma non possono salvare le modifiche.

1. Nella barra multifunzione Home di Power BI Desktop selezionare **Pubblica**.
2. Selezionare una destinazione, ad esempio Area di lavoro personale, nella servizio Power BI **>Seleziona**.
3. Selezionare **Apri "nome-file"** in **Power BI**. Il report completato viene aperto nel browser.
4. Selezionare **Condividi** nella parte superiore del report per condividere il report con altri utenti.