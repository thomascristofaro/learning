# Model-driven App

La progettazione app basata sul modello è un approccio che si concentra sull'aggiunta di componenti come **moduli**, **visualizzazioni**, e **grafici** e **dashboard** a **tabelle** utilizzando uno strumento di progettazione app. Inoltre, le **relazioni** collegano le tabelle in modo da consentire la navigazione tra esse e garantire che i dati non vengano ripetuti inutilmente.

Le **app basate su modello** sono particolarmente adatte all'elaborazione di app basate su **dati ad alta densità** e consentono agli utenti di **spostarsi facilmente** tra i **record correlati**. 

L'uso della progettazione app consente di creare app semplici o molto complesse con uso limitato di codice o senza codice.

### Passaggi per creare e condividere un'app basata su modello
Un'app basata su modello è costituita fondamentalmente dalle seguenti aree.

- **Modellazione** dei dati aziendali
- **Definizione** dei processi aziendali
- **Composizione** dell'app
- **Configurazione** di ruoli di sicurezza
- **Condivisione** dell'app

Gran parte del tempo dedicato alla creazione dell'app è dedicato alla modellazione dei dati aziendali e, in alcuni casi, alla definizione dei processi aziendali. La personalizzazione dei ruoli di sicurezza dipenderà dalle esigenze dell'organizzazione.


- ### Creare app basata sul modello

   1. Accedi a Power Apps. 

   1. Seleziona l'ambiente desiderato oppure passa a **Interfaccia di amministrazione Power Platform** per crearne uno nuovo. 

   1. E' consigliato creare l'app basata su modello da una soluzione. Una soluzione è un pacchetto che può contentere tabelle, moduli, viste, app, flussi e altri componenti di Dataverse.

   1. Nel riquadro di spostamento a sinistra, seleziona **Soluzioni**. Se l'elemento non si trova nel riquadro di navigazione a sinistra, seleziona …Altro, quindi l'elemento desiderato.

   1. Selezionare **Nuova soluzione**. Ulteriori informazioni: Creare una soluzione.

   1. Immetti un **Nome visualizzato** per la soluzione, ad esempio **Training Power Apps**. Successivamente, aggiungi la tabella account che verrà inclusa nell'app basata su modello.

   1. Nella soluzione, seleziona **Aggiungi esistente**, quindi seleziona **Tabella**.

   1. Nella schermata **Aggiungi tabelle esistenti** seleziona la tabella **Account**, quindi seleziona **Avanti**.

   1. Seleziona **Includi tutti i componenti** e quindi seleziona **Aggiungi**. Ora che hai una soluzione e hai aggiunto la tabella account, puoi creare un'app basata su modello.

   1. Nella soluzione seleziona **Nuovo**, seleziona **App** e quindi seleziona **App basata su modello**.

   1. Immetti un nome per l'app, ad esempio Nuova app personalizzata2 e quindi seleziona **Crea**. 

### Modellazione dei dati

Sebbene siano chiamate app basate su modelli, spesso è più facile pensarle come app basate su **modello di dati**. Questo perchè, senza un modello di dati ospitato in **Microsoft Dataverse**, non puoi creare un'app basata su modello.

### Vantaggi dell'approccio basato su modello
A differenza dello sviluppo di **app canvas** in cui il progettista ha il controllo completo sul layout dell'app, con le app basate su modello molto dell'interfaccia utente viene determinato automaticamente e in gran parte designato dai **componenti** che si aggiungono all'app.

Ci sono alcuni notevoli vantaggi in questo metodo di sviluppo delle applicazioni.

- Una volta che il **modello di dati** e le **relazioni** sono stati creati, il processo di compilazione è relativamente rapido grazie a ricchi strumenti di progettazione senza uso di codice incentrati sui componenti.
- Le app hanno un'interfaccia utente simile su vari dispositivi, dal desktop al dispositivo mobile.
- Le app sono **accessibili** e **reattive** automaticamente.
- L'esperienza utente è coerente in tutte le app basate su modello. Una volta che un utente è sicuro di un'app basata su modello, le app successive sono più facili da adottare all'interno di un'organizzazione.
- La migrazione di app tra gli **ambienti** di sviluppo, test e produzione è relativamente semplice usando le **soluzioni**.

### Requisiti minimi per la creazione di un'app basata su modello
Le app basate su modello possono essere complesse. Tuttavia, i requisiti minimi per crearle sono relativamente semplici.

- Una **licenza** Microsoft Power Apps.
- La **capacità** per creare un **ambiente** Power Platform. Questa è una funzionalità delle licenze Power Apps e Dynamics 365.
- Un ambiente Power Platform.
- Un **database** Dataverse nell'ambiente. Questa opzione è selezionata quando si crea un ambiente. Altre informazioni: **Creare un ambiente con un database**
- Privilegi per il creatore di lavorare come addetto alla personalizzazione di sistema o creatore di ambienti nell'ambiente in cui viene creata l'app basata su modello. Ulteriori informazioni: **Ruoli di sicurezza predefiniti**
- Una **tabella**. Molte tabelle standard, inclusa account, esistono per impostazione predefinita.
- Una **colonna** di tabella. Ogni tabella ha almeno una colonna e molte colonne di sistema.
- Una **visualizzazione** di tabella, per visualizzare i record. Ce ne sono diverse per impostazione predefinita.
- Un **modulo** di tabella, per inserire i dati. Ce ne sarà uno per impostazione predefinita.

Viene creata un'app basata su modello, aggiungendo una tabella alla mappa del sito usando la progettazione app e l'esecuzione del processo di pubblicazione e convalida dell'app.


### Lab 2: Model driven app

**Esercizio proposto** : [Esercitazione Lab 2 - Model driven app](https://microsoftlearning.github.io/PL-400_Microsoft-Power-Platform-Developer/Instructions/Labs/LAB%5BPL-400%5D_Lab02_Model_Driven_App.html) 

**Obiettivo**: In questa esercitazione continueremo a sviluppare i componenti di Microsoft Dataverse creati nella sessione precedente. Verrà ora creata un'app basata su modello di Power Apps per consentire al personale dell'ufficio di gestire i record per gli ispettori e agli ispettori di gestire i propri record in base alle esigenze.

## Link

- [Panoramica della Creazione di App](https://learn.microsoft.com/it-it/power-apps/maker/#canvas-apps)

- [Overview Model-driven-app](https://learn.microsoft.com/it-it/power-apps/maker/model-driven-apps/model-driven-app-overview)

- [Creare App con Power Apps](https://weblog.metisoft.it/microsoft-powerapps)







