# Applicazioni BC

### Agenda
* Software monolitico modulare
* Microsoft Base Application
* App Cliente e Prodotto
* Struttura di un'App
* Oggetti tecnici
* Business Logic

### Software Monolitico
**Software monolitico**: è un'architettura software in cui l'intera applicazione è sviluppata come un **unico blocco**, in cui tutte le funzionalità sono integrate all'interno dello stesso processo di esecuzione. 
Tutte le parti dell'applicazione sono scritte come un'unica unità di codice e sono eseguite all'interno dello stesso processo.

    ![software-monolitico](/img/business-central/software-monolitico.png)

### Software Monolitico Modulare
**Microsoft Business Central è un software monolitico modulare**

Un software **monolitico modulare** è un'evoluzione del sistema software monolitico tradizionale: 

* L'applicazione viene suddivisa in **moduli**, ognuno dei quali si occupa di una **funzionalità specifica**. 
* Invece di avere un'unica unità di codice per l'intera applicazione, l'applicazione è composta da più moduli che possono essere sviluppati e mantenuti separatamente.
* Consente di migliorare la **scalabilità** e la **manutenibilità** del sistema 
* I singoli moduli possono essere **sviluppati e testati indipendentemente** gli uni dagli altri. 
* Questo approccio consente di **aggiornare o sostituire un modulo** senza dover modificare l'intero sistema.

    ![software-monolitico-modulare](/img/business-central/software-monolitico-modulare.png)

* I moduli vengono chiamati **APP**: sono delle **estensioni** del core rilasciato da Microsoft che aggiungono o modificano oggetti o comportamenti del sistema base
* Il core distribuito da Microsoft è formato da 2 app base:
   * **System Application**: è un’ app «di sistema» che contiene moduli che interagiscono con la piattaforma Dynamics 365 Business Central e l'ecosistema online per supportare la logica di business nella Base Application
   * **Base Application**: essenzialmente è Business Central perché contiene tutte le Business Logic del prodotto (clienti, fornitori, ordini, fatture, mov. contabili e di magazzino, etc…) Il codice sorgente è pubblico e distribuito con lo zip di installazione. NON è modificabile direttamente

    ![software-monolitico-modulare-2](/img/business-central/software-monolitico-modulare-2.png)

### Dipendenze

* In questo scenario di organizzazione del codice in App nasce l’esigenza di creare dei legami tra le varie applicazioni.
* La dipendenza di un’app da un’altra fa si che il dipendente possa accedere agli oggetti dell’app di livello sottostante (logiche e dati)
* Di fatto tutte le applicazioni dipendono da System Application e Base Application di Microsoft
* Possono dipendere anche da altre app di terze parti a nostro piacere.
* I principi di dipendenza consentono di creare delle vere e proprie «pile» di applicazioni interdipendenti tra loro (gli Stack).

   ![dependence](/img/business-central/dependence.png)

### Le App cliente
Come «app cliente» intendiamo l’applicazione (o le applicazioni) che contengono le personalizzazioni specifiche richieste da un cliente e che, non avendo interesse generale o di scala, vengono sviluppate esclusivamente per quel cliente specifico.

Normalmente l’app cliente assume il nome del cliente stesso.

L’app cliente viene installata solo negli ambienti del cliente stesso.

### Le App prodotto
I partner Microsoft negli anni hanno sviluppato diverse soluzioni per accrescere il livello di funzionalità di Business Central o per meglio adattarlo alla specificità di determinati settori (automotive, farmaceutico, noleggio ed assistenza, retail, ecc.) o semplicemente alle richieste del mercato non pienamente coperte dalla standard.

Queste soluzioni sono raccolte in app tematiche che vengono gestite al pari di un prodotto e distribuite su più clienti.

### Le App
Sono sviluppate in **linguaggio AL** (Application Language).

L'AL è un linguaggio di **programmazione ad alto livello**, moderno e intuitivo utilizzato per lo sviluppo di estensioni personalizzate per Microsoft Business Central.

l’AL è integrato all'interno di **Visual Studio Code**, che consente agli sviluppatori di creare, testare e distribuire le loro estensioni direttamente all'interno dell'ambiente Business Central.

La compilazione genera un file .app, questi compilati vengono chiamati anche **simboli**.

**Estendono la business logic** dell’applicazione di Business Central tramite l’inserimento e/o la modifica di oggetti oppure con l’innesto di codice all’interno delle funzioni di Microsoft tramite degli eventi.

Vengono installate su Business Central tramite l’**Administration Shell**.

### Struttura di un'app
Possiamo dividere la struttura di un’app in 3 parti:

    ![struttura-app](/img/business-central/struttura-app.png)

**File di configurazione json**: il più importante è il file **App.json** perché è il manifesto dell’applicazione, contiene:
* Identificativo univoco dell’applicazione (ID) o GUID
* Nome dell’applicazione (Name)
* Produttore dell’applicazione (Publisher)
* La versione corrente (Version)
* La versione della base app
* Le dipendenze

Cartelle contenenti gli **oggetti dell’applicazione**: sono le macro-entità con cui vengono create le soluzioni basate su Business Central. Sono gli stessi oggetti tecnici utilizzati da Microsoft per creare il prodotto «base». Cartelle relative all’IDE (iniziano con il punto, es .vscode)

### Oggetti
* Tabelle
* Page
* Codeunit
* Report
* XmlReport
* Query
* Enum
* PermissionSet
Tutti hanno un *ID* ed un *Name* univoco.

#### Tabelle
* Definiscono una struttura dati per l’immagazzinamento delle informazioni a database.
* Sono composte da campi.
* Devono avere una chiave primaria (PK).
* Possono avere altri indici.
* Possono contenere del codice AL.

   ![table](/img/business-central/table.png)

#### Tabelle - Campi
* È l'unità minima di immagazzinamento dati.
* Corrisponde alla colonna di un file Excel.
* Ogni campo ha un tipo associato (Testo, data, numero intero, numero decimale, ecc).
* Esistono campi *logici* con funzioni particolari: FlowFields e FlowFilters.
* I campi calcolati (FlowFields) sono una caratteristica importante di Business Central.

#### Tabelle - Enum
* È un tipo dato che si può associare a campi o utilizzare come variabile.
* Rappresenta una lista di opzioni.
* Ogni «valore» ha un ID numerico collegato.
* È estensibile da altre App dipendenti.

   ![table-enum](/img/business-central/table-enum.png)

#### Page
* Definiscono le interfacce grafiche che vengono visualizzate sul client.
* Ogni pagina ha un tipo specifico (Lista, Scheda, Worksheet, ecc.) che determina il modo con cui verrà renderizzata nel client.
* Ogni pagina è associata ad una tabella.
* Nelle pagine sono definiti sia i dati da visualizzare (Layout) che le azioni che si possono eseguire su di essi (Actions).

   ![page](/img/business-central/page.png)

#### Codeunit
* Sono dei moduli di codice che possono contenere metodi e funzioni.
* Non ha un side effect come pagine (visualizzazione) o tabelle (database), sono solo un insieme di funzioni.

   ![codeunit](/img/business-central/codeunit.png)

#### Report
* Consentono di creare moduli di stampa per la presentazione dei dati.
* Ogni report può avere uno o più layout di stampa in diversi formati (RDLC, Word, Excel).
* La logica di funzionamento si riassume in:
   * Reperimento dei dati da stampare
   * Impaginazione secondo il layout selezionato
* Possono essere di sola elaborazione (ProcessOnly).

#### XMLPort
* Permettono di creare moduli di import o export dei dati da e verso Business Central.
* Consentono di supportare diversi formati: Xml, Csv, file di testo delimitati o a larghezza fissa.
* Il flusso dei dati può essere di:
   * Solo import
   * Solo export
   * Entrambi

#### Query
* Sono oggetti tecnici che consentono di creare delle interrogazioni dati con elaborazioni che possono toccare più tabelle in contemporanea o sviluppare funzioni dei aggregazione dei dati come la somma, la media, il conteggio.
* Consentono di creare query strutturate in linguaggio SQL come quelle che si potrebbero scrivere direttamente in SQL Management Studio.
* Molto utili per migliorare le performance nell’accesso ai dati ed i tempi di elaborazione.

#### PermissionSet
* Consente di definire dei set di autorizzazioni per l’accessibilità dei dati e degli altri oggetti da parte degli utenti.
* I PermissionSet sono associati ai singoli utenti per circoscrivere cosa possono fare / visualizzare all’interno del programma.

### La Business Logic
La logica di business **codifica le regole** di business del mondo reale che determinano il modo in cui gli utenti interagiscono con l'applicazione e **come i dati devono essere creati, scambiati e gestiti**.

È responsabile di garantire che tutti i dati che lo attraversano siano validi, coerenti e accurati.

Questo codice, scritto in istruzioni if-then o alberi decisionali, si trova tra l'interfaccia utente e il database. 

Lo sviluppo di codice significa utilizzare gli oggetti tecnici appena visti.

E se volessi modificare della business logic già scritta?

Si può **Estendere**, oltre agli oggetti è possibile utilizzare:
* Object Extensions
* Trigger
* Eventi

### Object-Extension
* Quasi tutti gli oggetti hanno la possibilità di essere *estesi* da altre App dipendenti.
* Le Extensions permettono ad esempio di aggiungere campi ad una tabella, ma anche di modificare il contenuto di una page o di un report. Con le estensioni possiamo aggiungere codice personalizzato prima e dopo numerosi trigger standard.

### Trigger
* I trigger attivano un metodo quando si verifica un determinato evento. 
* Quando si verifica un evento su un oggetto o un controllo, l'evento scatenato attiva il metodo correlato in cui è possibile definire del codice. Insieme l'evento e il metodo creano un trigger. (Es. click su un bottone attiva il trigger OnAction).
* I trigger sono molto utili per eseguire calcoli e convalide.

   ![trigger](/img/business-central/trigger.png)

### Eventi
* Sono punti di innesto di codice customizzato all’interno di una procedura.
* Devono essere definiti e previsti da chi crea la procedura «padre».
* Possono essere sottoscritti più volte.
* In base alla modalità di interscambio dei parametri, il chiamato può modificare il funzionamento del chiamante.
* Gli eventi consentono di separare le funzionalità personalizzate dalla logica standard dell'applicazione. Utilizzando gli eventi nell'applicazione in cui vengono in genere effettuate le personalizzazioni, è possibile ridurre il costo delle modifiche al codice e degli aggiornamenti dell'applicazione originale.
* È possibile apportare modifiche al codice alle funzionalità personalizzate senza dover modificare l'applicazione originale.
* È possibile apportare modifiche al codice dell'applicazione originale con un impatto minimo sulle personalizzazioni.

   ![events](/img/business-central/events.png)
