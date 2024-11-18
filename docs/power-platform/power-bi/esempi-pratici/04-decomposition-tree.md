# Creare un albero di scomposizione
In questa esercitazione, si parte da un modello semantico di esempio predefinito di Power BI e si crea un report con un albero di scomposizione. Un albero di scomposizione è un oggetto visivo interattivo che facilita l'esplorazione ad hoc e l'analisi della causa radice. Si tratta anche di una visualizzazione basata sull'intelligenza artificiale (IA). È possibile richiedere di individuare la categoria o la dimensione successiva per eseguire il drill-down in base a determinati criteri.

![Power BI Desktop](/img/power-platform/exc-bi/bi-91.png)

Questa esercitazione illustra come:
- Iscriversi per ottenere una licenza di Power BI, se non è disponibile.
- Importare l'esempio di analisi delle vendite al dettaglio e aggiungerlo al servizio Power BI.
- Creare un albero di scomposizione.
- Eseguire l'analisi della causa radice sui dati nell'albero di scomposizione in modalità di modifica.
- Salvare il report e continuare l'analisi della causa radice nella visualizzazione di lettura.

### Prerequisiti
Non è necessaria una licenza di Power BI per esplorare gli esempi in Power BI Desktop. È sufficiente disporre di una licenza gratuita di Fabric per esplorare l'esempio nel servizio Power BI e salvarlo nell'area di lavoro personale.
Per aprire un file con estensione pbix di Power BI, è necessario ottenere Power BI Desktop.

### Importare l'esempio nel servizio Power BI
1. Aprire il servizio Power BI ([app.powerbi.com](https://app.powerbi.com/)) e selezionare **Learn ()** nel riquadro di spostamento a sinistra.
2. Nella pagina **Centro apprendimento**, in **Report** di esempio, scorrere fino a visualizzare l'esempio di **analisi delle vendite al dettaglio**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-92.png)

3. Selezionare l'esempio. Viene aperto in modalità lettura.
4. Power BI importa l'esempio predefinito, aggiungendo un nuovo dashboard, un report e un modello semantico all'area di lavoro corrente.

### Creare un report dal modello semantico
Nella scheda **Modelli semantici** e flussi di dati sono disponibili diverse opzioni per l'esplorazione del modello semantico. In questa esercitazione si esaminerà il modello semantico creando un report personalizzato da zero.

![Power BI Desktop](/img/power-platform/exc-bi/bi-93.png)

1. Selezionare **Altre opzioni (...) >Creare un report**.

   Il modello semantico viene aperto in modalità di modifica del report.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-94.png)

### Creare un albero di decompilazione
Aggiungere un albero di scomposizione o *un albero di decompilazione* al report per l'analisi ad hoc.
1. Aprire Power BI Desktop e caricare l'esempio di analisi delle vendite al dettaglio.
2. Selezionare l'icona **Report** per aprire la visualizzazione Report. Nel riquadro **Visualizzazioni** selezionare l'icona **albero di scomposizione**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-95.png)

3. Trascinare il bordo in modo che riempia la maggior parte della pagina. Gli alberi di scomposizione possono essere estesi.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-96.png)

4. Gli alberi di decompilazione analizzano un valore in base a molte categorie o dimensioni. Espandere **Vendite>quest'anno vendite** e selezionare **Valore**. Power BI aggiunge valore alla **casella Analizza **.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-97.png)

5. Selezionare quindi i campi delle dimensioni e aggiungerli alla casella Spiega per . Aggiungere il numero desiderato, in qualsiasi ordine. È possibile usarli o meno, in qualsiasi ordine, nell'albero di decompilazione. È stato aggiunto:
   - District Manager
   - Categoria
   - Nome famiglia
   - Segmento
   - Chain
   - PostalCode
   - Tipo di store
   - Area

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-98.png)

### Analizzare nell'albero di decompilazione
Viene ora visualizzata la parte di analisi ad hoc.
1. Selezionare il segno più (+) accanto a This Year Sales e selezionare Valore elevato. Ciò significa che Power BI usa l'intelligenza artificiale per analizzare tutte le diverse categorie nella casella Spiega per e selezionare quella in cui eseguire il drill-into per ottenere il valore più elevato della misura analizzata.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-99.png)

   Seleziona **Tipo di archivio**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-100.png)

2. Continua selezionando **Valore elevato** finché non si dispone di un albero di decompilazione simile a questo.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-101.png)
   
   In alternativa, selezionare manualmente altri valori e verificare con cosa si finisce.

3. È possibile eliminare i livelli selezionando la **X** nell'intestazione.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-102.png)

4. Salvare il report. A questo punto, chiunque visualizza il report possa interagire con l'albero di decompilazione, a partire dal primo **This Year Sales** e scegliendo il proprio percorso da seguire.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-103.png)