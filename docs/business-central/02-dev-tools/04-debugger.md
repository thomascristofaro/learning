
# Debugger

## Introduzione

Il debug può essere utilizzato per i seguenti scopi:

- Una **condizione di errore** che termina il processo. In questo caso, l'**obiettivo** immediato è **trovare la causa** e **risolverla** il più rapidamente possibile.
- Il codice, pur essendo eseguito con successo, fornisce **risultati errati**.
- Aiutarci a **comprendere** meglio come funzionano **i processi di BC**. Potremmo semplicemente volerne sapere di più su come viene utilizzata una funzione o su come si determina il risultato in una routine standard di BC.
- Per i **programmatori**, il debug può servire a **convalidare le procedure implementate**.

Il debugger **avvia una nuova istanza** del web client ogni volta che si preme **F5**. 
Se chiudi la sessione di debug e quindi avvii una nuova sessione, questa nuova sessione si baserà su una nuova istanza del client.
Si consiglia di chiudere le istanze del client Web quando si chiude una sessione di debug.


## Resourse Exposure Policy

Quando si sviluppa un'estensione, il codice, per impostazione predefinita, è protetto contro il download o il debug.

Il pacchetto di sviluppo delle estensioni fornisce un'**impostazione preconfigurata** per la **protezione contro la visualizzazione** o il **download** del codice delle estensioni. Tuttavia, questa **impostazione può essere controllata** anche nel manifest: il file _app.json_.

![Resourse Exposure Policy](/img/business-central/debugger1.png) 

E’ possibile specificare un'impostazione denominata **ResourceExposurePolicy** che definisce l'accessibilità delle risorse e del codice sorgente durante diverse operazioni. In particolare:

- **allowDebugging**:
per **consentire il debug** nella tua estensione, quando l'estensione viene presa come dipendenza, devi impostare il flag allowDebugging , altrimenti il debug non è consentito. Se vuoi consentire ai debugger nella tua estensione di visualizzare il codice sorgente, la **proprietà allowDebuggin** nel file _app.json_ deve essere impostata su **true**.

- **allowDownloadingSource**:
quando questa impostazione è impostata su **true** nel file app.json, **è possibile scaricare il codice sorgente** e tutti i **file multimediali** con estensione Al. Il valore predefinito di allowDownloadingSource è false.

- **includeSourceInSymbolFile**:
quando questo parametro è impostato su **true** nel file app.json, il **file di simboli** scaricato in Visual Studio Code a cui si accede utilizzando la funzionalità Download symbols, **contiene simboli**, **codice sorgente** e tutte le **altre risorse dell'estensione AL**. La funzione Go to Definition per visualizzare il codice dipende da questa proprietà. Il valore predefinito di includesourceInSymbolFile è false.

## Interruzioni

Il concetto di base nel debug è il **punto di interruzione**, che è un segno che puoi impostare su un'istruzione. 

Quando il flusso del programma raggiunge l'istruzione, il debugger interviene e sospende l'esecuzione finché non viene indicato di continuare. 

![Interruzione](/img/business-central/debugger2.png)

Senza punti di interruzione, il codice è eseguito normalmente anche se il debugger è attivo. E' Possibile impostare un punto di interruzione usando il menu DEbug in VSC oppure puoi premere **F9** sulla riga di cui vuoi eseguire il debug.

### Breakpoint

È possibile accedere al codice dell'applicazione di base utilizzando la funzionalità **Vai a definizione (Go to definition)** e impostare punti di interruzione sul codice di riferimento, che in genere è un file esterno (.dal). 

![Go to Definition](/img/business-central/debugger3.png)

![Riga dove inserire interruzione](/img/business-central/debugger4.png)

Per **impostare un punto di interruzione** sul codice esterno o sul Base Application, completare i passaggi seguenti:

- **Crea una variabile** che fa riferimento ad un oggetto della Base Application o **seleziona** la **SourceTable** in una pagina. 

- Fare **clic con il pulsante destro** del mouse sulla variabile e selezionare **Vai a definizione** oppure premere **F12**. Si aprirà un file esterno (.dal).

- **Seleziona la riga** in cui desideri inserire un punto di interruzione e quindi **premi F9**.

Dalla **finestra Breakpoints** è possibile **visualizzare tutti i punti di interruzione impostati** ed è possibile aggiungerne di nuovi o cancellarli.


**Breakpoint Condizionali**

Il **punto di interruzione condizionale** può essere creato come un normale punto di interruzione. Verrà **mostrato** come un **punto di interruzione con un + all'interno**.

La maggior parte dei tipi di dati possono essere creati come punti di interruzione condizionali. Le _eccezioni_ sono i campi data, ora e data/ora.

![Edit condition](/img/business-central/debugger7.png)

Il **punto di interruzione condizionale** può essere **impostato solo nella finestra del debugger**. 

Pertanto, prima di attivare il debugger, si imposta un normale punto di interruzione e, solamente in fase di debug, possiamo sostituire il punto di interruzione con il punto di interruzione condizionale.

### Break on Error

Se desideri determinare la **causa di un errore** in fase di esecuzione, puoi **abilitare il debugger** che interromperà automaticamente l'esecuzione del codice quando rileverà un errore.

Specificare se il debugger si interrompe all'errore successivo utilizzando la proprietà **breakOnError**. Se il debugger è impostato su breakOnError, interrompe l'esecuzione sia degli errori gestiti nel codice che degli errori non gestiti.

![Break On Error](/img/business-central/debugger5.png)

Il **valore predefinito** della proprietà **breakOnError** è **All**, il che significa che, per impostazione predefinita, il debugger interrompe l'esecuzione ad ogni errore. Per saltare il processo di gestione degli errori, impostare la proprietà breakOnError su false nel launch.json file

![Break On Record Write](/img/business-central/debugger6.png)

Specificare se il debugger interrompe alla modifica dei record utilizzando la proprietà **breakOnRecordWrite**. Se il debugger è impostato per interrompersi alla modifica di un record, si **interrompe prima** di **creare**, **modificare** o **eliminare un record**. 

Il valore predefinito della proprietà breakOnRecordWrite è false, il che significa che per impostazione predefinita il debugger non è impostato per interrompersi alle modifiche ai record. 


## Debugger in VS Code

### Step by step

![Step by step](/img/business-central/debugger8.png)

Il debugger consente di eseguire il codice **un'istruzione alla volta** mentre si ispeziona il contenuto delle variabili globali, delle variabili locali e delle costanti di testo a ogni step. 

Ciò consente di vedere se i valori effettivamente utilizzati differiscono dai valori previsti durante la progettazione dell'applicazione.


**Shortcuts**

![Shortcuts](/img/business-central/debugger13.png)

- **Step Into (F11)**:
esegue la riga di codice successiva. Se la riga include una funzione, il debugger entrerà nella funzione ed eseguirà il debug del codice della funzione.

- **Step Over (F10)**:
esegue la riga di codice successiva ma se la riga include una funzione il debugger eseguirà il codice senza entrare nella funzione e rimanendo sulla funzione attuale.

- **Step Out (Shift+F11)**:
se il debugger è entrato nella funzione per errore o si decide che non c’è nulla di rilevante per il problema che si sta debuggando, il pulsante Step Out eseguirà il codice rimanente nella funzione e poi tornerà alla riga che originariamente richiamava la funzione.

- **Continue (F5)**:
esegue il codice rimanente. Tutti i punti di interruzione rimarranno e la finestra del debugger rimarrà aperta pronta per il prossimo debug.

- **Pause (F6)**:
il debugger si fermerà alla prossima riga di codice che sarà eseguita.

- **Stop (Shift + F5)**:
esce dalla sessione di debug, genera un errore e fa un rollback. Tutti i punti di interruzione rimarranno e la finestra del debugger rimarrà aperta e pronta per il prossimo debug. E’ particolarmente importante se lo scenario di test è difficile da ricreare. Arrestando il debugger, i dati di test rimarranno intatti per il prossimo debug.


### Call stack

![Call stack](/img/business-central/debugger11.png)

La finestra **Call Stack** mostra il **percorso** che il **sistema ha seguito** per **arrivare al punto di interruzione**. Facendo clic su una delle righe sottostanti verrà visualizzata la funzione che il sistema ha eseguito per raggiungere la posizione attuale.

### Code viewer

![Code viewer](/img/business-central/debugger12.png)

Nel code viewer, la **riga corrente** è identificata da una **freccia gialla** nel margine sinistro. Invece, i **punti di interruzione** sono identificati da un **punto rosso**.

**Evidenziando** con il mouse una **variabile**, un **campo** o una **costante di testo**, è possibile **ispezionarne il valore**.


### Variables

![Variables](/img/business-central/debugger14.png)

La finestra **Variables** mostra tutte le **variabili incluse nell’ambito della funzione**, **indicando** sia il **valore** che il tipo del **dato**.

Il tasto **Aggiungi espressione di controllo** consente di aggiungere una variabile o un campo nella finestra Watch.

Nella **sezione Local** è possibile ottenere informazioni relative alle performance, in particolare le ultime 10 query più lente eseguite da sql e il numero di query sql eseguite dall’avvio del debug.


### Watch 

![Watch](/img/business-central/debugger15.png)

La **variabile** è **visualizzata nella finestra Watch** fino a quando non viene rimossa di nuovo. Se viene eseguito il debug di qualcos'altro, verrà visualizzato come fuori ambito. 

E’ particolarmente **utile** se è presente un **lungo elenco di variabili** nella finestra Variables del debugger o se si desidera **visualizzare il valore di un campo** in una variabile record mentre si scorre il codice.


## Riferimenti
* [VS Code Debugging](https://code.visualstudio.com/docs/editor/debugging)
