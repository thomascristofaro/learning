# Esempio di Power BI
Questa guida fornisce istruzioni su come:
- Registrarsi per ottenere una licenza di Power BI, se non è già disponibile.
- Importare l'esempio di analisi delle vendite al dettaglio e aggiungerlo al servizio Power BI.
- Esplorare l'esempio all'interno del servizio.
- Creare un oggetto visivo utilizzando il linguaggio naturale in Q&A.
- Generare informazioni rapide basate sul modello semantico.
- Aprire il file pbix dell'esempio di analisi delle vendite al dettaglio in Power BI Desktop.

### Prerequisiti
Non è richiesta una licenza di Power BI per esplorare gli esempi in Power BI Desktop. È sufficiente disporre di una licenza gratuita di Power BI per esplorare l'esempio nel servizio Power BI e salvarlo nell'area di lavoro personale. Per aprire un file con estensione pbix di Power BI, è necessario ottenere Power BI Desktop.

### Importare l'esempio nel servizio Power BI
1. Aprire il servizio Power BI ([app.powerbi.com](https://app.powerbi.com/)) e selezionare **Learn ()** nel riquadro di spostamento a sinistra.
2. Nella pagina **Centro apprendimento**, in **Report** di esempio, scorrere fino a visualizzare l'esempio di **analisi delle vendite al dettaglio**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-73.png)

3. Selezionare l'esempio. Viene aperto in modalità lettura.
4. Power BI importa l'esempio predefinito, aggiungendo un nuovo dashboard, un report e un modello semantico all'area di lavoro corrente.

### Cos'è stato importato?
Con gli esempi predefiniti, Power BI ottiene una copia dall'esempio predefinito e la archivia nel cloud.
1. Power BI crea il nuovo dashboard, il report e il modello semantico nell'area di lavoro.
   
   ![Power BI Desktop](/img/power-platform/exc-bi/bi-74.png)

2. Nella scheda **Contenuto** vengono visualizzati il dashboard e il report, denominati *Esempio di analisi delle vendite* al dettaglio.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-75.png)

3. Nella scheda **Modelli semantici** e **flussi di dati** viene visualizzato anche il modello semantico denominato *Retail Analysis Sample*.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-76.png)

### Esplorare il nuovo contenuto
Ora esplorare il dashboard, il modello semantico e il report autonomamente. Esistono molti modi diversi per passare a dashboard, report e modelli semantici. Prima di tutto, iniziamo dal dashboard.
- Se un riquadro è stato creato usando Power BI Q&A, la pagina Q&A viene visualizzata quando viene selezionata.
- Se un riquadro è stato aggiunto da un report, verrà aperto il report.
- Se un riquadro è stato aggiunto da Excel, Excel Online si apre all'interno di Power BI.

#### Esplorare in Q&A
La funzionalità Q&A nel servizio Power BI consente di esplorare i dati nelle proprie parole, ponendo domande usando il linguaggio naturale.

1. Nell'area di lavoro selezionare il dashboard **Retail Analysis Sample** (Esempio di analisi delle vendite al dettaglio) per aprirlo.
   Viene aperto il dashboard con vari riquadri di visualizzazione.
2. Selezionare il riquadro **Vendite di quest'anno**, **Nuovi & negozi** esistenti, di **$22 M**.
   
   ![Power BI Desktop](/img/power-platform/exc-bi/bi-77.png)
   
Questo riquadro è stato creato con Power BI Q&A, quindi quando si seleziona il riquadro, Q&A si apre di nuovo.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-78.png)

3. Nella barra superiore, accanto alle vendite di quest'anno, inizia a digitare per negozio. Q&A crea un grafico a barre di valori per ogni archivio.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-79.png)

4. Nell'angolo superiore destro selezionare **Aggiungi oggetto visivo**.
5. Aggiungere il nuovo oggetto visivo al dashboard esistente, Esempio di analisi delle vendite al dettaglio.
6. Selezionare **Esci Q&A**.
   Power BI ha aggiunto il nuovo riquadro alla fine del dashboard. È possibile ridimensionarlo e trascinarlo in qualsiasi punto desiderato nel dashboard. Si noterà come gli altri riquadri si spostano per farlo.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-80.png)

#### Esplorazione del report
1. Selezionare uno degli altri riquadri nel dashboard per aprire il report sottostante. In questo esempio selezionare il grafico ad area Vendite dell'anno corrente, Vendite dell'anno precedente per mese fiscale.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-81.png)

Il report viene aperto nella pagina contenente il grafico ad area selezionato, in questo caso la pagina **District Monthly Sales** del report.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-82.png)

#### Esplorare le informazioni rapide
Un modo semplice per esplorare un modello semantico consiste nell'eseguire informazioni rapide.
1. Nella scheda **Modelli semantici** e flussi di dati selezionare **Altre opzioni (...)** accanto al modello semantico **Retail Analysis Sample** e quindi scegliere **Ottieni informazioni rapide**.
2. Quando le informazioni dettagliate sono pronte, selezionare **Visualizza informazioni dettagliate**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-83.png)

3. Se un'informazione è interessante, aggiungerla al dashboard.

### Crea un report dal modello semantico
Nella scheda Modelli semantici sono disponibili diverse opzioni per l'esplorazione del modello semantico. Tuttavia, non è possibile visualizzare le righe e le colonne dei dati, come è possibile in Power BI Desktop o Excel. Un modo per esplorare il modello semantico consiste nel creare un report usando la creazione automatica.

Per creare automaticamente un report:
1. Nell'area di lavoro selezionare il modello semantico Retail Analysis Sample per aprirlo.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-84.png)

2. Selezionare **Crea un report** e quindi **Crea automatico**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-85.png)

   Power BI mostra il nuove report. Selezionare **Modifica** per rivedere o migliorarlo.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-86.png)

### Scaricare l'esempio in Power BI Desktop
Quando si apre per la prima volta il file con estensione pbix di esempio in Power BI Desktop, viene visualizzato nella visualizzazione Report. Qui è possibile esplorare e modificare le pagine del report esistenti e aggiungerne di nuove, con visualizzazioni personalizzate. La visualizzazione Report offre un'esperienza di progettazione quasi identica a quella della modifica dei report nel servizio Power BI. È possibile spostare le visualizzazioni, copiare e incollare, modificare il tipo di visualizzazione e altro ancora.

A differenza della modifica di un report nel servizio Power BI, in Power BI Desktop è possibile utilizzare le query e modellare i dati per assicurarsi che supportino informazioni dettagliate nei report. È quindi possibile salvare il file di Power BI Desktop ovunque si desideri, sia sull'unità locale che nel servizio Power BI.

Per scaricare l'esempio:
Scaricare il file [pbix](https://download.microsoft.com/download/9/6/D/96DDC2FF-2568-491D-AAFA-AFDD6F763AE3/Retail%20Analysis%20Sample%20PBIX.pbix) di esempio di analisi delle vendite al dettaglio e aprirlo in Power BI Desktop.

![Power BI Desktop](/img/power-platform/exc-bi/bi-87.png)

Il file viene aperto nella visualizzazione Report. Nella parte inferiore dell'editor di report sono presenti quattro schede. Queste schede rappresentano le quattro pagine del report. Per questo esempio, la pagina Nuovi negozi è attualmente selezionata.

![Power BI Desktop](/img/power-platform/exc-bi/bi-88.png)

### Cosa c'è nel report?
Quando si scarica un file con estensione pbix di esempio, non viene scaricato solo un report, ma anche il modello semantico sottostante. Quando si apre il file, Power BI Desktop carica i dati insieme alle query e alle relazioni associate. È possibile visualizzare i dati e le relazioni sottostanti, ma non è possibile visualizzare direttamente le query nella Editor di query.

Per visualizzare i dati e il modello sottostanti:
1. Passare alla visualizzazione Dati selezionando l'icona  Visualizzazione dati.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-89.png)

   In Visualizzazione dati è possibile esaminare, esplorare e comprendere i dati nel modello di Power BI Desktop. Questa visualizzazione si differenzia dal modo in cui si consultano tabelle, colonne e dati nell'Editor di query. I dati nella visualizzazione Dati sono già caricati nel modello.

   Quando si modellano i dati, talvolta è utile vedere cosa è effettivamente contenuto nelle righe e nelle colonne di una tabella, senza dover creare un oggetto visivo nell'area di disegno del report. Ciò è particolarmente vero durante la creazione di misure e colonne calcolate o quando è necessario identificare un tipo di dati o una categoria di dati.

2. Passare alla visualizzazione Modello:

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-90.png)