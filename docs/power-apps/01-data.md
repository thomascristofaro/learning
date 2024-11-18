
# Sorgenti Dati

Usando Power Apps è possibile creare rapidamente **app aziandali personalizzate** che si **connettono ai dati archiviati nella piattaforma** di dati sottostante (Microsoft Dataverse) o in varie origini dati online e locali ad esempio, SharePoint, Microsoft 365, Dynamics 365, SQL Server e così via. 

Le **origini dati** possono essere connesse a un servizio **cloud** oppure essere **locali** per un'app.

### Origini dati connesse

Le origini dati in Power Apps sono come i posti da cui prendiamo le informazioni per le nostre applicazioni. Le **tabelle** sono come **fogli di lavoro o elenchi** in cui vengono **conservati i dati**. Posiamo collegare le nostre app Power Apps a varie fonti di dati come Excel, Microsoft Lists, SharePoint, SQL e altri ancora. Questi dati possono essere conservati su servizi cloud come OneDrive, Dropbox o SQL Server.

Immagina le tabelle come fogli di carta su cui scriviamo numeri o parole. Alcune di queste tabelle vivono dentro l'app stessa (come appunti che abbiamo in testa), mentre altre sono conservate in un luogo speciale chiamato origine dati. Le **tabelle interne** sono come i **nostri appunti personali**, non salvati da nessuna parte, solo nella nostra mente (o memoria dell'app). Le **tabelle esterne** sono come **fogli di carta** che **conserviamo** in una cartella, un luogo dove possiamo **guardarli e condividerli con gli altri** in un secondo momento.

Power Apps ci dà la possibilità di collegarci a queste tabelle esterne attraverso "connessioni". Le **connessioni** ci permettono di **leggere e scrivere dati** in queste tabelle. Ogni connessione può connettersi a più tabelle di informazioni. Possiamo scegliere quali tabelle usare nelle nostre app, e ogni app diventa come una sua origine dati separata, pronta a ricevere e inviare informazioni.

### Aggiungere un'origine dati

Power Apps non può essere usato per creare un'origine dati connessa o per modificarne la struttura. L'origine dati deve esistere già nel servizio. Come si può aggiungere un'origine dati?

1. Creare **un'app canvas da modello vuoto**

1. Dal **menu di creazione delle app** in Studio di Power Apps, seleziona **Dati** > **Aggiungi dati**.

1. Espandi **Connettori** e se l'elenco delle connessioni comprende quella che vuoi usare, allora selezionala e aggiungila all'app. In caso contrario, vai avanti. Per connetterti quindi, a questo punto bisogna scegliere una tabella dall'elenco delle tabelle. 

1. Per creare una nuova connessione, cerca o seleziona un connettore come SharePoint. 

1. Seleziona **Aggiungi una connessione** per creare la connessione e aggiungerla all'app.

Alcuni connettori, ad esempio **Office 365 Outlook**, non necessitano di altri passaggi e puoi visualizzarne i dati immediatamente. Altri richiedono di fornire credenziali, di specificare un particolare set di dati o di eseguire altri passaggi. Ad esempio, SharePoint e SQL Server richiedono informazioni aggiuntive prima di poter essere usati. Con Dataverse, puoi modificare l'ambiente prima di selezionare una tabella.

## Tipi di storage

![storage](/img/power-apps/storage.png)

La Power Platform in generale e PowerApps in particolare si rivolgono ad un mondo il cui il dato rappresenta il re ed il fondamento per qualsiasi processo di business. Quindi, scegliere la sorgente dati corretta ha una rilevanza molto importante sul processo di design di un’app.

![Connect your app to data](/img/power-apps/connect-to-data.png)

Tra le sorgenti dati più comuni, troviamo le **liste SharePoint** ed i **fogli di calcolo Excel** ma vi sono più di 200 connettori dati disponibili.
PowerApps condivide connettori con Flow e le Logic Apps. Uno dei principali punti di forza della piattaforma è di fornire connettori al mondo Microsoft: **Office 365**, **Azure**, **SQL Server** e verso data source esterni come **Salesforce**, **Dropbox** o **Google Drive**.

In PowerApps, un connettore può fornire tabelle di dati o azioni, o entrambi.
Qui sotto un esempio di come una sorgente dati ad una tabella “Lessons” possa essere utilizzata in PowerApps:

![Tabella Lessons](/img/power-apps/lessons.png)

Un’azione dovrà essere manualmente connessa ad un comando per essere eseguita:

![GetMessagesnGroup](/img/power-apps/actionGetMessages.png)

Prestate attenzione alla scelta della sorgente dati poichè avrà un impatto sulle licenze necessarie a creare ed eseguire la vostra app.
Se scegliete o avete bisogno di una sorgente Premium (Salesforce or Common Data Service), avrete bisogno di una licenza PowerApps P1 o P2.

## I dati online o on-premises
![Dati](/img/power-apps/datii.png)

PowerApps è uno strumento “**born in the Cloud**” e si può connettere nativamente a **sorgenti dati Cloud**.
In ogni caso, si può connettere anche a **data source on-premises**. Perchè questo possa avvenire, dovete configurare un **data gateway on-premises**. Questo gateway è condiviso fra diverse app cloud: tutte quelle della Platform (**Power BI**, **Flow**, **PowerApps**), **Azure Logic Apps** e **Azure Analysis Services**.

![Data Gateway](/img/power-apps/datagateway.png)
Le sorgenti dati supportati dal gateway sono:

- SharePoint
- SQL Server
- Oracle
- Informix
- DB2
- Filesystem



:::info Caution
L’utilizzo delle sorgenti dati locali, impatterà sulle licenze necessarie a creare ed eseguire la vostra app. Se scegliete un data source locale, avrete bisogno di una licenza PowerApps P1 o P2.
:::

## Lab 1: Data modeling

**Esercizio proposto** : [Esercitazione Lab 1 - Modellazione dati](https://microsoftlearning.github.io/PL-400_Microsoft-Power-Platform-Developer/Instructions/Labs/LAB%5BPL-400%5D_Lab01_Data_Modeling.html) 

**Obiettivo**: Un dipartimento regionale per l'edilizia rilascia e monitora i permessi per le nuove costruzioni e gli aggiornamenti per la ristrutturazione degli edifici esistenti. Durante questo corso creerai applicazioni ed eseguirai l'automazione per consentire al dipartimento edilizio regionale di gestire il processo di autorizzazione. Si tratta di una soluzione end-to-end che ti aiuterà a comprendere il flusso complessivo del processo.

In questa esercitazione verrà creato un modello di dati per supportare i requisiti seguenti:

R1 – Monitorare lo stato dei permessi rilasciati per le nuove costruzioni e le modifiche edilizie esistenti.

R2 – I permessi sono associati a un sito di costruzione, che rappresenta l'edificio o il terreno da modificare

R3 – Il tipo di permesso indica il tipo di permesso e le ispezioni, altri dati che potrebbero essere richiesti su un permesso

R4 – Le ispezioni completate sul lavoro di autorizzazione devono essere tracciate per l'intero processo, vale a dire, dalla richiesta di ispezione al superamento o meno dell'ispezione

R5 – I permessi, per i nostri scopi di laboratorio, sono richiesti da una persona e dobbiamo tenere traccia di chi ha richiesto ogni permesso



## Link

- [Power Apps: come configurare una connessione ad una origine dati](https://appin5minuti.it/power-apps-come-configurare-una-connessione-ad-una-origine-dati/)

- [Aggiunta connessione dati](https://learn.microsoft.com/it-it/power-apps/maker/canvas-apps/add-data-connection)

- [Overview Power Apps](https://learn.microsoft.com/it-it/power-apps/powerapps-overview)

- [Come creare un'app e quali dati usare](https://www.resolve-consulenza.it/ispirazioni/powerapps-scelte-da-effettuare-quando-utilizzate-lo-strumento/)

