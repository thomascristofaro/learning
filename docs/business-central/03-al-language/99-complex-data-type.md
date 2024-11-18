# Data Type complessi
I tipi di dati complessi si riferiscono a strutture di dati che consentono di organizzare e archiviare dati più complessi rispetto ai tipi di dati primitivi. Questi tipi di dati sono spesso utilizzati per rappresentare collezioni di elementi o strutture più complesse nei linguaggi di programmazione. Ecco i tipi di dati complessi:

| Tipo | Descrizione |
|-|-|
| **Any** | Questo tipo di dati può essere sostituito da qualsiasi altro tipo di dati. |
| **BigInteger** |	Memorizza numeri interi molto grandi che vanno da -9.223.372.036.854.775.807 a 9.223.372.036.854.775.807. |
| **BigText** |	Gestisce documenti di testo di grandi dimensioni. |
| **Blob** | È un tipo di dati complesso. Le variabili di questo tipo di dati differiscono dalle normali variabili numeriche e di stringa in quanto i BLOB hanno una lunghezza variabile. La dimensione massima di un BLOB (binary large object) è 2 GB. |
| **Boolean** | Indica vero o falso. |
| **Byte** | Memorizza un singolo carattere a 8 bit come valore compreso tra 0 e 255. È possibile convertire facilmente questo tipo di dati da un numero a un carattere e viceversa. Ciò significa che puoi utilizzare operatori matematici sulle variabili Byte. |
| **Char** | Memorizza un singolo carattere a 16 bit come valore compreso tra 0 e 65535. È possibile convertire questo tipo di dati da un numero a un carattere e viceversa. Ciò significa che puoi utilizzare operatori matematici sulle variabili Char. |
| **Code** | Denota un tipo speciale di stringa che viene convertita in maiuscolo e rimuove eventuali spazi finali o iniziali. |
| **Codeunit** | È un contenitore per il codice AL che è possibile utilizzare da altri oggetti dell'applicazione. |
| **CompanyProperty** | Fornisce supporto linguistico per le proprietà aziendali. |
| **Database** | Fornisce l'accesso alle funzionalità comuni del database. |
| **Trasferimento dati** | Una struttura che crea trasferimenti in blocco di dati tra tabelle. |
| **Date** | Indica una data che va dal 1 gennaio 1753 al 31 dicembre 9999. |
| **DateFormula** | Rappresenta una formula di data che ha le stesse funzionalità di una normale stringa di input per il metodo CALCDATE (Data). Il tipo di dati DateFormula viene utilizzato per fornire funzionalità multilingue al metodo CALCDATE (Data). |
| **DateTime** | Indica una data e un'ora che vanno dal 1 gennaio 1753, 00:00:00.000 al 31 dicembre 9999, 23:59:59.999. Un DateTime non definito o vuoto è specificato da 0DT. |
| **Debugger** | Abilita la comunicazione con un debugger. |
| **Decimal** | Indica i numeri decimali compresi tra -999.999.999.999.999,99 e +999.999.999.999.999,99. |
| **Dialog** | Rappresenta una finestra di dialogo. |
| **Dictionary** | Rappresenta una raccolta non ordinata di chiavi e valori. Il tipo di dati Dictionary è ottimizzato per la ricerca rapida dei valori. |
| **DotNet** | Rappresenta un tipo .NET non specificato. |
| **Duration** | Rappresenta la differenza tra due DateTime. Questo valore può essere negativo. Viene archiviato come numero intero a 64 bit. Il valore intero è il numero di millisecondi durante la durata. |
| **Enum** | Rappresenta il contenuto testuale di un elemento o attributo. |
| **ErrorInfo** | Fornisce una struttura per raggruppare le informazioni su un errore. |
| **FieldRef** | Identifica un campo in una tabella e ti dà accesso a questo campo. |
| **File** | Rappresenta un file. |
| **FilterPageBuilder** | Memorizza le configurazioni dei filtri per una pagina di filtro. Una pagina filtro è un tipo di pagina dinamica che contiene uno o più controlli filtro che consentono agli utenti di impostare filtri sui campi delle tabelle sottostanti. |
| **Guid** | Rappresenta un tipo di dati binario a 16 byte. Questo tipo di dati viene utilizzato per l'identificazione globale di oggetti, programmi, record e così via. La proprietà importante di un GUID è che ogni valore è univoco a livello globale. Il valore è generato da un algoritmo, sviluppato da Microsoft, che garantisce questa unicità. |
| **HttpClient** | Fornisce un tipo di dati per l'invio di richieste HTTP e la ricezione di risposte HTTP da una risorsa identificata da un URI. |
| **HttpContent** | Rappresenta il corpo di un'entità HTTP e le intestazioni di contenuto. |
| **HttpHeaders** | È una raccolta di intestazioni e dei relativi valori. |
| **Http RequestMessage** | Rappresenta un messaggio di richiesta HTTP. |
| **Http ResponseMessage** | Rappresenta un messaggio di risposta HTTP che include il codice di stato e i dati. |
| **InStream** | È un oggetto flusso generico che è possibile utilizzare per leggere o scrivere su file e BLOB. È possibile definire la struttura interna di un flusso come un flusso semplice di byte. È possibile assegnare uno stream a un altro. La lettura e la scrittura in un flusso avvengono in sequenza. |
| **Integer** | Memorizza numeri interi con valori compresi tra -2.147.483.647 e 2.147.483.647. |
| **IsolatedStorage** | Fornisce l'isolamento dei dati per le estensioni. |
| **JsonArray** | È un contenitore per qualsiasi array JSON ben formato. Un JsonArray predefinito contiene un array JSON vuoto. |
| **JsonObject** | È un contenitore per qualsiasi oggetto JSON ben formato. Un JsonObject predefinito contiene un oggetto JSON vuoto. |
| **JsonToken** | È un contenitore per tutti i dati JSON ben formati. Un oggetto JsonToken predefinito contiene il valore JSON NULL. |
| **JsonValue** | È un contenitore per qualsiasi valore JSON fondamentale ben formato. Un JsonValue predefinito è impostato sul valore JSON NULL. |
| **KeyRef** | Identifica una chiave in una tabella e i campi in questa chiave. |
| **Label** | Denota una costante stringa che può essere facoltativamente tradotta in più lingue. |
| **List** | Rappresenta un elenco fortemente tipizzato di oggetti ordinati a cui è possibile accedere tramite indice. Contrariamente al tipo di dati Array, una List è illimitata, pertanto la sua dimensione non deve essere specificata al momento della dichiarazione. |
| **Media** | Incapsula file multimediali, come file di immagine .jpg e .png, nelle tabelle del database dell'applicazione. Il tipo di dati Media può essere utilizzato come tipo di dati di campo tabella, ma non può essere utilizzato come variabile o parametro. Il tipo di dati Media consente di importare un file multimediale nel database dell'applicazione e fare riferimento al file dai record, rendendo possibile la visualizzazione del file multimediale nell'interfaccia utente del client. Puoi anche esportare contenuti multimediali dal database in file e flussi. | 
| **MediaSet** | Incapsula elementi multimediali, ad esempio immagini, nelle tabelle del database dell'applicazione. |
| **ModuleDependencyInfo** | Fornisce informazioni su un modulo dipendente. |
| **ModuleInfo** | Rappresenta informazioni su un materiale di consumo dell'applicazione di AL. |
| **NavApp** | Fornisce informazioni su una NavApp. |
| **None** | Viene utilizzato in modo implicito quando un metodo non restituisce un valore. |
| **Notification** | Fornisce un modo programmatico per inviare informazioni non intrusive all'interfaccia utente (UI) nel client Web Business Central. |
| **NumberSequence** | È un tipo di dati complesso per la creazione e la gestione di sequenze numeriche nel database. |
| **Option** |	Indica un valore di opzione. Nello snippet di codice seguente puoi vedere come viene dichiarato il tipo di dati Option. |
| **OutStream** | È un oggetto flusso generico che è possibile utilizzare per scrivere su file e BLOB. |
| **Page** | Contiene una serie di elementi più semplici chiamati controlli. I controlli vengono utilizzati per visualizzare informazioni all'utente o ricevere informazioni dall'utente. |
| **ProductName** | Un'applicazione può avere un nome completo, un nome commerciale e un nome breve. Le funzioni PRODUCTNAME consentono di recuperare queste variazioni di nome. |
| **Query** | Consente di recuperare dati da più tabelle e combinare i dati in un unico set di dati. |
| **Record** | È un tipo di dati complesso. |
| **RecordId** | Contiene il numero della tabella e la chiave primaria di una tabella. |
| **RecordRef** | Fa riferimento a un record in una tabella. |
| **Report** |	Viene utilizzato per visualizzare, stampare o elaborare informazioni da un database. |
| **RequestPage** | È una pagina che viene eseguita prima dell'avvio dell'esecuzione del report. Le pagine di richiesta consentono agli utenti finali di specificare opzioni e filtri per un report. |
| **SecretText** | 	Indica una stringa di testo segreta, che non è debuggabile. |
| **Session** | Rappresenta una sessione di Microsoft Dynamics Business Central. |
| **SessionInformation** | È un tipo di dati complesso per esporre le informazioni sulla sessione in AL. |
| **SessionSettings** | È un tipo di dati complesso per il passaggio delle impostazioni di personalizzazione dell'utente per una sessione client come oggetto. L'oggetto contiene proprietà che corrispondono ai campi nella tabella di sistema 2000000073 Personalizzazione utente , tra cui: ID app, Azienda, ID lingua, ID impostazioni locali, ID profilo, Ambito e Fuso orario. È possibile utilizzare i metodi AL del tipo di dati SessionSettings per ottenere, impostare e inviare le impostazioni di personalizzazione dell'utente per la sessione client corrente. |
| **System** | È un tipo di dati complesso. |
| **TaskScheduler** | È un tipo di dati complesso per la creazione e la gestione di attività nell'utilità di pianificazione, che esegue codeunit a orari pianificati. |
| **TestAction** |	Rappresenta un'azione di prova su una pagina. |
| **TestField** | Rappresenta un campo testabile su una pagina. |
| **TestFilter** |	Rappresenta un filtro di prova su una pagina. |
| **TestFilterField** | Rappresenta il tipo di filtro di campo in un filtro di prova su una pagina o su una pagina di richiesta. |
| **TestPage** | Rappresenta un tipo di variabile che può essere utilizzato per testare gli oggetti dell'applicazione di pagina. |
| **TestPart** | Rappresenta un tipo di variabile che può essere utilizzato per testare oggetti applicazione pagina di tipo Part.
| **TestRequestPage** | Memorizza le pagine di richiesta di test. Una parte della pagina di richiesta di test è una rappresentazione logica di una pagina di richiesta in un report. Una pagina di richiesta di test non visualizza un'interfaccia utente (UI). Il sottotipo di una pagina di richiesta di test è il report di cui si desidera testare la pagina di richiesta. |
| **Text** | Indica una stringa di testo. |
| **TextBuilder** | Rappresenta un wrapper leggero per l'implementazione .Net di StringBuilder. |
| **TextConst** | Denota una costante di stringa multilingue. |
| **Time** | Indica un tempo compreso tra 00:00:00.000 e 23:59:59.999. Un tempo non definito o vuoto è specificato da 0T. |
| **Variant** | Rappresenta un oggetto variabile AL. Il tipo di dati variante AL può contenere molti tipi di dati AL. |
| **Version** | Rappresenta una versione che corrisponde al formato: Major.Minor.Build.Revision. |
| **WebServiceActionContext** | Rappresenta un AL WebServiceActionContext. |
| **XmlAttribute** | Rappresenta un AL WebServiceActionContext. |
| **XmlAttributeCollection** | Rappresenta una raccolta di attributi XML. |
| **XmlCData** | Rappresenta una sezione CData. |
| **XmlComment** |	Rappresenta un commento XML. |
| **XmlDeclaration** |	Rappresenta una dichiarazione XML. |
| **XmlDocument** | Rappresenta un documento XML. |
| **XmlDocumentType** | Rappresenta un tipo di documento XML. |
| **XmlElement** | Rappresenta un elemento XML. |
| **XmlNamespaceManager** | Rappresenta un gestore dello spazio dei nomi che può essere utilizzato per risolvere, aggiungere e rimuovere spazi dei nomi in una raccolta. Fornisce inoltre la gestione dell'ambito per questi spazi dei nomi. |
| **XmlNamTable** | Rappresenta una tabella di oggetti stringa atomizzati. |
| **XmlNode** | Rappresenta un nodo XML che può essere ad esempio un attributo XML, un elemento XML o un documento XML. |
| **XmlNodeList** | Rappresenta una raccolta di nodi XML. |
| **Xmlport** | Le porte XmlPort vengono utilizzate per esportare o importare dati tra un'origine esterna e un database Microsoft Dynamics Business Central. |
| **XmlProcessingInstruction** | Rappresenta un'istruzione di elaborazione, che XML definisce per mantenere le informazioni specifiche del processore nel testo del documento. |
| **XmlReadOptions** | Rappresenta le opzioni che configurano il modo in cui XML viene caricato da un'origine dati. |
| **XmlText** | Rappresenta il contenuto testuale di un elemento o attributo. |
| **XmlWriteOptions** | Rappresenta le opzioni che configurano la modalità di salvataggio dell'XML. |
| **Action** |	Rappresenta l'azione eseguita dall'utente sulla pagina. |
| **AuditCategory** | Rappresenta una categoria di controllo per la telemetria di controllo IfX. |
| **ClientType** | Rappresenta il tipo di client che esegue l'operazione. |
| **CommitBehavior** | Specifica se il commit è consentito nell'ambito del metodo. |
| **DataClassification** |	Imposta la classificazione dei dati nella tabella o nel campo. |
| **DataScope** | Identifica l'ambito dei dati archiviati nell'archivio isolato. |
| **DefaultLayout** | Il layout predefinito da utilizzare in un report. |
| **ErrorBehavior** | Specifica se gli errori verranno raccolti nell'ambito del metodo. |
| **ErrorType** | Rappresenta il tipo di errore. |
| **ExecutionContext** | Rappresenta il contesto in cui è in esecuzione una sessione. In alcuni scenari, ad esempio durante l'aggiornamento, il sistema eseguirà una sessione in un contesto speciale per un tempo limitato. |
| **ExecutionMode** | La modalità di esecuzione della sessione corrente. |
| **FieldClass** | Rappresenta il tipo di una classe di campo. |
| **FieldType** | Rappresenta il tipo di campo di una tabella. |
| **InherentPermissionsScope** | I diversi tipi di ambito a cui può applicarsi l'attributo InherentPermissions. |
| **IsolationLevel** | Il livello di isolamento applicato per questo record. |
| **NotificationScope** | Specifica il contesto in cui viene visualizzata la notifica nel client. |
| **ObjectType** | Le diverse tipologie di oggetti. |
| **PageBackgroundTaskErrorLevel** | Specifica come viene visualizzato nel client un errore nell'attività in background della pagina. |
| **PermissionObjectType** | I diversi tipi di oggetti a cui possono essere assegnate autorizzazioni diverse. |
| **PromptMode** | Specifica la modalità corrente di una pagina PromptDialog. |
| **ReportFormat** | Specifica il formato del report. |
| **ReportLayoutType** | Rappresenta il tipo di layout di un report. |
| **SecurityFilter** | Specifica la modalità di applicazione dei filtri di sicurezza al record. |
| **SecurityOperationResult** | Rappresenta il risultato dell'operazione di controllo della sicurezza. |
| **TableConnectionType** | Utilizzare variabili di questo tipo di dati per specificare il tipo di connessione a un database esterno. |
| **TelemetryScope** | Rappresenta l'ambito di emissione del segnale di telemetria. |
| **TestPermissions** | Specifica un valore che può essere utilizzato per determinare quali set di autorizzazioni vengono utilizzati nei test eseguiti da codunità di test o funzioni di test. |
| **TextEncoding** | Rappresenta una codifica di file. |
| **TransactionModel** | Rappresenta un modello di transazione di prova. |
| **TransactionType** | Rappresenta un tipo di transazione. |
| **Verbosity** | Rappresenta il livello di sicurezza degli eventi. |
| **WebServiceActionResultCode** | Rappresenta un codice di stato dell'azione del servizio Web. |

## Array
Un array è una struttura dati che racchiude diverse variabili, alle quali si accede tramite indici calcolati. L'indice rappresenta la posizione della variabile immagazzinata nell'array. Gli elementi contenuti nell'array sono altresì denominati componenti dell'array. L'array conserva costantemente elementi dello stesso genere di dati.

Un array possiede un grado che stabilisce il numero di indici, ovvero quanto tempo richiede per raggiungere un componente. Nel caso in cui compaiano elementi duplicati, il loro grado è identico a quello della prima occorrenza nell'array. Il grado di un array è altresì chiamato dimensione dell'array. Un array con un grado pari a uno è denominato array unidimensionale. Un array con un grado superiore a uno è identificato come array multidimensionale. Gli insiemi multidimensionali di dimensioni definite sono frequentemente descritti come insiemi bidimensionali, insiemi tridimensionali e così via. Ad ogni dimensione di un array è associata una grandezza, che corrisponde a un numero intero maggiore o uguale a zero. Il numero massimo di dimensioni è 10, e il numero totale di componenti in tutte le dimensioni è 1.000.000.

La grandezza di una dimensione delinea l'intervallo valido degli indici per quella dimensione. Per una dimensione di grandezza N, gli indici possono variare da 1 a N inclusi. Il numero totale di componenti in un array è il risultato del prodotto delle grandezze di ciascuna dimensione nell'array. Se una o più dimensioni di un array hanno una grandezza pari a zero, l'array è considerato privo di elementi.

La sintassi corretta per dichiarare un array di un tipo specifico è la seguente:

```al
array [Dimension] of Type;
```

Dove, `Dimension` è un elenco delimitato da virgole di valori letterali interi o maggiori di 0, dove ciascun numero intero definisce il numero di elementi in quella dimensione, e, `Type` è il tipo di elemento dell'array.
Ecco alcuni esempi pratici:

```al
// Dichiarazione di una matrice con un tipo di elemento semplice
arrayOfInteger: array [10] of Integer;

// Dichiarazione di una matrice con un tipo di elemento di lunghezza fissa
arrayOfCode: array [10] of Code[20];
arrayOfText: array [10] of Text[20];

// Dichiarazione di una matrice con un tipo di elemento complesso
arrayOfCodeunits: array [10] of Codeunit 10;
arrayOfQueryes: array [10] of Query "My Query";
arrayOfTemporaryRecords: array [10] of Record 10 Temporary;
arrayOfDotNetVariables: array [10] of DotNet String;
```

## List
Un registro di dati denota un elenco altamente specifico di oggetti disposti in ordine, e l'accesso a ciascun elemento avviene tramite un indice. A differenza di un Array, una Lista non ha limiti, eliminando la necessità di specificare la sua dimensione durante la dichiarazione.

#### Metodi di istanza
I metodi disponibili sulle istanze del tipo di dati List sono:

| Nome del metodo | Descrizione |
| - | - |
| **Add(T)** | Aggiungere un valore alla fine dell'elenco. |
| **AddRange(T [, T, ...])** | Aggiunge gli elementi della raccolta specificata alla fine dell'elenco. |
| **AddRange(List of [T])** | Aggiunge gli elementi della raccolta specificata alla fine dell'elenco. |
| **Contains(T)** | Determina se un elemento è presente nell'elenco. |
| **Count()** | Ottiene il numero di elementi contenuti nell'elenco. |
| **Get(Integer, var T)** | Ottiene il numero di elementi contenuti nell'elenco. |
| **Get(Integer)** | Ottiene l'elemento in corrispondenza dell'indice specificato. Questo metodo genererà un errore se l'indice non è compreso nell'intervallo valido. |
| **GetRange(Integer, Integer)** | Ottieni una copia superficiale di una serie di elementi nella fonte. |
| **GetRange(Integer, Integer, var List of [T])** | Ottieni una copia superficiale di una serie di elementi nella fonte. |
| **IndexOf(T)** | Cerca il valore specificato e restituisce l'indice in base uno della prima occorrenza nell'intero List. |
| **Insert(Integer, T)** | Inserisce un elemento nella List in corrispondenza dell'indice specificato. |
| **LastIndexOf(T)** | Cerca il valore specificato e restituisce l'indice in base uno dell'ultima occorrenza all'interno dell'intero List. |
| **Remove(T)** | Rimuove la prima occorrenza di un valore specificato dall'elenco. |
| **RemoveAt(Integer)** | Rimuove l'elemento in corrispondenza dell'indice specificato di List. |
| **RemoveRange(Integer, Integer)** | Rimuove un intervallo di elementi dall'elenco. |
| **Reverse()** | Inverte l'ordine degli elementi nell'intero List. |
| **Set(Integer, T)** | Imposta l'elemento in corrispondenza dell'indice specificato. |
| **Set(Integer, T, var T)** | Imposta l'elemento in corrispondenza dell'indice specificato. |

L'utilizzo dell'Elenco è limitato ai soli tipi di base, il che significa che è possibile avere un Elenco di `Integer`, ma non un Elenco di `Blob`. In modo simile, il tipo di dato Elenco non consente la conservazione di record istanziati; per questo scopo, è consigliabile utilizzare tabelle temporanee.

Gli elenchi iniziano l'indicizzazione da 1, seguendo un approccio in cui il primo elemento è accessibile tramite l'indice 1.

Una Lista è di tipo riferimento, quindi quando si assegna un'istanza di una lista a un'altra variabile o la si passa come parametro a un metodo per valore (ad esempio, senza utilizzare var), si crea una seconda variabile che fa riferimento alla stessa lista per lettura/scrittura. Non si genera una nuova lista.

Se si desidera creare un nuovo elenco contenente gli stessi valori dell'elenco originale, è possibile eseguire le seguenti operazioni per effettuare una copia superficiale:

```al
trigger OnRun()
    var
        l1: List of [Integer];
        l2: List of [Integer];
    begin
        l2 := l1.GetRange(1, l1.Count);
    end;
```

Una copia superficiale non replica gli elementi all'interno dell'elenco, bensì solo la struttura dell'elenco stesso. In caso gli elementi dell'elenco siano a loro volta tipi di riferimento, come nel caso di un elenco di elenchi, questi elementi rimarranno gli stessi degli elenchi nell'elenco originale.

Per ottenere una copia profonda, ovvero copiare anche i tipi di riferimento all'interno degli elementi, è necessario applicare lo stesso approccio agli elementi stessi della lista:

```al
trigger OnRun()
    var
        innerlist: List of [Integer];
        l1: List of [List of [Integer]];
        l2: List of [List of [Integer]];
    begin
        foreach innerlist in l1 do begin
            l2.Add(innerlist.GetRange(1, innerlist.Count));
        end;
    end;
```

## Dictionary
Rappresenta una raccolta non ordinata di chaivi e valori. Il tipo di dati Dictionary è ottimizzato per la ricerca rapida dei valori.
I metodi disponibili sulle istanze del tipo di dati Dictionary sono:

| Nome del metodo | Descrizione |
| - | - |
| **Add(TKey, TValue)** | Aggiunge la chiave e il valore specificati al dizionario. |
| **ContainsKey(TKey)** | Determina se il dizionario contiene la chiave specificata. |
| **Count()** | Ottiene il numero di coppie chiave/valore contenute nel dizionario. |
| **Get(TKey, var TValue)** | 	Ottiene il valore associato alla chiave specificata. |
| **Get(TKey)** | Ottiene il valore associato alla chiave specificata. |
| **Keys()** | Ottiene una raccolta contenente le chiavi nel dizionario. |
| **Remove(TKey)** | Rimuove dal dizionario il valore con la chiave specificata. |
| **Set(TKey, TValue)** | Imposta il valore associato alla chiave specificata. |
| **Set(TKey, TValue, var TValue)** | Imposta il valore associato alla chiave specificata. |
| **Values()** | Ottiene una raccolta contenente i valori nel dizionario. |

Ogni inserimento in un dizionario è composto da un valore e dalla chiave corrispondente. È fondamentale che ogni chiave in un dizionario sia univoca. Le chiavi non possono essere nulle, mentre i valori possono esserlo, ma solo quando il tipo di valore è di tipo riferimento.

È importante notare che il tipo di dato Dictionary non consente la conservazione di record istanziati. Per tale scopo, si consiglia di utilizzare tabelle temporanee.

## InStream e OutStream
Il tipo di dato `InStream` è utilizzato per gestire flussi di dati in input. Questi flussi possono essere utilizzati per leggere dati da file o altre fonti di input. Ecco alcuni metodi disponibili sulle istanze del tipo di dato `InStream`:

1. **READ(Record, Length):** Legge una quantità specifica di dati dal flusso e li assegna a un record.
2. **READTEXT(TextVariable, Length):** Legge una quantità specifica di dati dal flusso e li assegna a una variabile di testo.
3. **READFILTERED(Record, Length, Filter):** Legge una quantità specifica di dati dal flusso e li assegna a un record, utilizzando un filtro per determinare quali campi devono essere letti.
4. **READSTREM(OutStream, Length):** Legge una quantità specifica di dati dal flusso e li scrive in un altro flusso.
5. **POSITION(Position):** Imposta la posizione corrente del flusso.
6. **SIZE(Size):** Restituisce la dimensione totale del flusso.
7. **ISEND(Flag):** Restituisce True se il flusso è alla fine.
8. **READBLOB(Blob, Length):** Legge una quantità specifica di dati dal flusso e li assegna a un campo di tipo Blob.
9. **READVARIANT(Variant):** Legge una quantità di dati dal flusso e li assegna a una variabile di tipo Variant.

Questi metodi consentono di manipolare i dati nei flussi durante l'esecuzione di operazioni di lettura in Microsoft Dynamics 365 Business Central.

Il tipo di dato `OutStream` è utilizzato per gestire flussi di dati in output. Questi flussi possono essere utilizzati per scrivere dati in file o altre destinazioni di output. Ecco alcuni metodi disponibili sulle istanze del tipo di dato `OutStream`:
1. **WRITE(Record, Length):** Scrive una quantità specifica di dati dal record nel flusso.
2. **WRITETEXT(Text, Length):** Scrive una quantità specifica di dati dalla variabile di testo nel flusso.
3. **WRITEFILTERED(Record, Length, Filter):** Scrive una quantità specifica di dati dal record nel flusso, utilizzando un filtro per determinare quali campi devono essere scritti.
4. **WRITESTREAM(InStream, Length):** Scrive una quantità specifica di dati da un altro flusso nel flusso corrente.
5. **POSITION(Position):** Imposta la posizione corrente del flusso.
6. **SIZE(Size):** Restituisce la dimensione totale del flusso.
7. **WRITEBLOB(Blob, Length):** Scrive una quantità specifica di dati dal campo di tipo Blob nel flusso.
8. **WRITEVARIANT(Variant):** Scrive una quantità di dati dalla variabile di tipo Variant nel flusso.

Questi metodi consentono di manipolare i dati nei flussi durante l'esecuzione di operazioni di scrittura in Microsoft Dynamics 365 Business Central. Sono utilizzati per generare output o salvare dati in file e altre destinazioni di output.
