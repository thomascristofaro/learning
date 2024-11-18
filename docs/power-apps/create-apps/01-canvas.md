# Canvas app

Le app canvas ti consentono di partire con la tua esperenza utente per sviluppare un'**interfaccia altamente personalizzata** utilizzando canvas vuote e collegandole a una gamma di oltre 200 origini dati. Le app canvas offrono la flessibilità necessaria per organizzare l'interfaccia e l'esperienza utente in base alle tue esigenze. 

Puoi iniziare a creare l'app dagli strumenti Microsoft in cui risiedono i tuoi dati, ad esempio:

- ### Crea app canvas da un elenco di SharePoint
   1. In SharePoint Online, apri un elenco e quindi seleziona **Integra** > **Power Apps** > **Crea un'app**.

   ![Creare un'app](/img/power-apps/generate-new-app.png)

   1. Nel pannello che viene visualizzato digita un nome per l'app e seleziona **Crea**.

Viene visualizzata una nuova scheda nel Web browser che mostra l'app creata in base all'elenco. L'app viene visualizzata in Power Apps Studio, dove puoi personalizzarla.

- ### Crea app canvas da una dashboard di Power BI

Quando si aggiunge l'oggetto visivo di Power Apps al report, Power Apps Studio viene avviato con una 
**connessione dati in tempo reale** tra Power Apps e Power BI. 

   1. **Aprire il report di esempio** di analisi delle opportunità e selezionare la pagina Opportunità imminenti. 

   1. **Spostare e ridimensionare alcuni riquadri** del report per creare spazio per il nuovo oggetto visivo. 

   1. Nel riquadro Visualizzazioni selezionare l'**icona di Power Apps** e quindi ridimensionare l'oggetto visivo in base allo spazio creato. 

   ![Creare app in Power BI](/img/power-apps/power-bi-powerapps-icon.png)

   4. Nell'oggetto visivo Power Apps selezionare l'ambiente Power Apps in cui si vuole creare l'app e quindi selezionare **Crea nuovo**.

   ![Crea nuova](/img/power-apps/power-bi-create-new-powerapp.png)

   5. In Power Apps Studio si noterà che viene creata un'app di base, con una raccolta che mostra uno dei campi selezionati in Power BI. 

![Raccolta dei campi in Power Apps Studio](/img/power-apps/power-bi-power-app.png)

Con Power Apps puoi trovare o creare la tua app in diversi modi:

- ### Crea app canvas dai dati (es. SharePoint)

- ### Crea app canvas da un esempio

  1. Accedi a Power Apps. 

  1. Seleziona **Crea** dal riquadro sinsitro. 

  1. In **Inizia da modello** scegli un'app di esempio nell'elenco delle app di esempio, ad esempio **Cost Estimator**. 

![Creare app da un esempio](/img/power-apps/cost-estimator-app.png)

- ### Crea app canvas da un'orgine Dataverse

In Power Apps, crea un'app canvas basata su un elenco di account di esempio in Dataverse. In questa app è possibile visualizzare l'elenco di tutti gli account e i dettagli di un singolo account e creare, aggiornare o eliminare un account. 

 1. Accedi a **Power Apps**.

 1. A seconda di come desideri creare la tua app, dalla schermata principale seleziona una delle seguenti opzioni:

    - Per creare un'app raccolta a pagina singola, bisogna selezionare: **Inizia con i dati** > Seleziona una tabella esistente, oppure **Inizia con un design di pagina** > Connessione della raccolta a tabella.

    - Per creare un'app per dispositivi mobili a tre schermi, seleziona **Inizia con un modello di app** > Da Dataverse.

 3. Selezionare una tabella, quindi **Crea app**.


- ### Crea app canvas da una canvas vuota

Sviluppa un'app canvas per gestire i dati archiviati in Dataverse, usando tabelle standard, tabelle personalizzate o entrambe. 

Quando si compila un' **app da Dataverse**, non è necessario creare un connessione da Power Apps, come avviene con le orgini dati come SharePoint, Dynamics 365 o Saleforce. E' sufficiente **specificare le tabelle da visualizzare o gestire nell'app**. 

Per creare un'app da zero che utilizzi i dati di Dataverse, il primo passaggio è **creare un'app vuota**.

1. **Accedi a Power Apps** e, se necessario cambia ambiente. 

1. Nel riquadro di navigazione sinistro, seleziona Crea > App vuota. 

1. Dalle opzioni disponibili, seleziona **Crea** sotto **App canvas da modello vuoto**.

1. Immetti un nome per l'app.

1. Seleziona **Crea** per creare l'app canvas da modello vuoto. 

- ### Crea app canvas tramite AppSource

Le app compilate e pubblicate con Power Apps vengono individuate e utilizzate sul Web in Dynamics 365. E' possibile cercare le app, filtrare per ambiente e aggiungere le app di uso più frequente nella parte superiore della pagina.

![Cercare le app](/img/power-apps/apps-dynamics365.png)

Microsoft AppSource è ora incorporato nella home pagne delle app Microsoft 365 e negli elementi di esploarazione comuni. Seleziona **Ottieni altre app** nella home page o nel riquadro attività e passa alla scheda **Organizzazione** per visualizzare le app disponibili. 

![Ottieni altre app - App disponibili](/img/power-apps/getmoreapps_1.png)

### Lab 3: Canvas app

**Esercizio proposto** : [Esercitazione Lab 23 - Canvas app](https://microsoftlearning.github.io/PL-400_Microsoft-Power-Platform-Developer/Instructions/Labs/LAB%5BPL-400%5D_Lab03_Canvas_App.html) 

**Obiettivo**: Man mano che continuiamo a creare la nostra soluzione, progetteremo un'app canvas di Power Apps che gli ispettori useranno sul campo sui loro dispositivi mobili. Le app canvas sono app low-code che possono essere progettate per i layout di un tablet o di un telefono cellulare. Costruirai un'app canvas a due schermi che consente agli ispettori di accedere ed elaborare rapidamente le ispezioni.

Seguiremo i passaggi di base seguenti per progettare l'app canvas:

- Creare l'app usando il fattore di forma del tablet.
- Connettiti a Microsoft Dataverse come origine dati.
- Configurare un controllo raccolta per visualizzare le ispezioni in sospeso.
- Utilizza una visualizzazione Microsoft Dataverse per popolare la galleria.
- Configurare una pagina di dettaglio con le informazioni sull'ispezione.
- Gestire il salvataggio dei risultati dell'ispezione in Microsoft Dataverse.
- Esportare la soluzione con il modello di dati e le app e importarla nell'ambiente "Produzione".

## Link

- [Panoramica della Creazione di App](https://learn.microsoft.com/it-it/power-apps/maker/#canvas-apps)

- [Overview Model-driven-app](https://learn.microsoft.com/it-it/power-apps/maker/model-driven-apps/model-driven-app-overview)

- [Creare App con Power Apps](https://weblog.metisoft.it/microsoft-powerapps)







