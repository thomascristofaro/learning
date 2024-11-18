
# Errori e Transazioni
Il linguaggio AL dispone di numerose funzionalità di gestione degli errori che possono aiutarti a gestire le situazioni impreviste che si verificano durante l'esecuzione del codice. Vedremo l'utilizzo di questi metodi in AL per gestire gli errori che si verificano durante l'esecuzione del codice, assicurandosi al contempo che l'applicazione disponga di un'interfaccia utente coerente.

Ci sono vari tipi di errori nel linguaggio AL:
* **Errori di Sintassi**: gli errori di sintassi si verificano quando il codice non rispetta le regole grammaticali del linguaggio. Ad esempio, potrebbe esserci un errore se una variabile viene dichiarata in modo errato o se mancano parentesi graffe in una struttura di controllo.
* **Errori di Run-Time**: gli errori di run-time si verificano durante l'esecuzione del programma. Possono essere causati da situazioni impreviste, come una divisione per zero o un tentativo di accesso a un indice inesistente in un array.
* **Errori Logici**: gli errori logici non sono errori sintattici o di run-time evidenti ma possono causare risultati indesiderati a causa di un ragionamento sbagliato nella logica del programma.
* **Errori di Tipo**: gli errori di tipo si verificano quando si tenta di utilizzare una variabile o un valore di un tipo non corrispondente a quello previsto.
* **Errori di Logica dei Dati**: gli errori di logica dei dati si verificano quando i dati trattati dal programma non sono conformi alle aspettative. Ciò può portare a risultati imprevisti e comportamenti errati.
* **Errori di Concorrenza**: gli errori di concorrenza si verificano quando due o più parti del programma tentano di accedere o modificare le stesse risorse simultaneamente senza la dovuta sincronizzazione.
* **Errori di Gestione delle Eccezioni**: gli errori di gestione delle eccezioni si verificano quando non vengono gestite correttamente le eccezioni o non viene fornita una gestione appropriata per scenari di errore specifici.
* **Errori di Accesso a Dati**: gli errori di accesso a dati si verificano quando si tenta di leggere o scrivere dati in un database o in altre risorse dati e si verifica un problema, come una connessione persa o un'operazione non consentita.
* **Errori di Personalizzazione**: gli errori specifici alle personalizzazioni possono verificarsi quando si estende o si modifica l'applicazione base.

Una transazione rappresenta un blocco di codice che esegue una serie di operazioni sul database come un'unità atomica. Sono utilizzate per garantire la coerenza dei dati, cioè per assicurarsi che tutte le operazioni di database vengano eseguite con successo o che nessuna di esse venga eseguita affatto. Una transazione inizia con l'istruzione `begin transaction` e può includere una serie di operazioni che vengono eseguite in modo atomico, cioè vengono considerate come un'unica unità di lavoro che viene completata completamente come un'unica unità di lavoro che viene completata completamente o annullata. Le transazioni sono spesse legate alle operazioni di database. 
Quindi, gli errori in AL possono derivare da problemi di sintassi, run-time e logica, mentre le transazioni sono spesso utilizzate per garantire la coerenza dei dati in operazioni complesse di database.

## Transazioni e Commit
Ci sono due tipi di transazioni:
* **Operazioni Atomiche**: le transazioni in AL possono essere utilizzate per garantire che una serie di operazioni sul database vengano eseguite in modo atomico. Ciò significa che tutte le operazioni vengono eseguite con successo o nessuna viene eseguita affatto. Può essere utile in scenari in cui è necessario mantenere la coerenza dei dati.
* **Commit e Rollback**: Gli sviluppatori AL possono utilizzare le istruzioni "commi" per applicare permanentemente le modifiche apportate al database e "rollback" per annullare tutte le modifiche apportate durante la transazioni corrente.
**Commit** delle transazioni:
* L'istruzione **commit** viene utilizzata per applicare permanentemente le modifiche apportate al database all'interno di una transazione.
* Dopo aver eseguito tutte le operazioni di database all'interno della transazione e verificato che non ci siano errori, è possibile emettere l'istruzione `rollback` per annullare tutte le operazioni non ancora confermate.
È importante gestire attentamente le transazioni in modo da garantire l'integrità dei dati nel database. Il commit dovrebbe essere eseguito solo se tutte le operazioni sono andate a buon fine, altrimenti è preferibile eseguire il rollback per annullare le modifiche.

## Error
Se qualcosa va storto o alcune condizioni non vengono soddisfatte durante l'elaborazione del codice, puoi utilizzare il messaggio di errore per avvisare l'utente.
Quando viene invocata una procedura error, l'esecuzione del processo corrente termina, il messaggio viene immediatamente visualizzato e il database torna allo stato che aveva dopo l'ultima procedura in errore non fosse mai stato eseguito.

`**ErrorMessage**' è il messaggio di errore da visualizzare. Può includere variabili o espressioni di testo. La virgola ('**[,]**') indica che è possibile fornire più argomenti se necessario.
Esempio:

```al
var
    AccountNo: Integer;
    ErrorMessage: Text;
begin
    AccountNo := 123;
    // Creazione del messaggio di errore con l'uso di variabili
    ErrorMessage := 'Account number ' + Format(AccountNo) + ' is not valid.';
    // Chiamata alla funzione Error
    Error(ErrorMessage);
end;
```

Nell'esempio sopra, la funzione '**Error**' viene chiamata con un messaggio di errore costruito dinamicamente utilizzando la variabile '**ErrorMessage**'. Quando viene chiamata, il programma interrompe immediatamente l'esecuzione e visualizza il messaggio di errore fornito. È importante notare che l'uso della funzione '**Error**' dovrebbe essere attentamente considerato, poiché interrompe immediatamente l'esecuzione del programma. Può essere utile nei casi in cui si verificano condizioni gravi che richiedono l'interruzione immediata del flusso del programma.

Il miglioramento della gestione degli errori e dei messaggi di errore riduce gli attriti per gli utenti e ha un impatto significativo sull'esperienza dell'utente. Messaggi di errore chiari e informatici aiutano gli utenti a capire cosa è andato storto e come correggerlo, riducendo la frustrazione e migliorando la soddisfazione dell'utente.

### TestField
La funzione TestField è ampiamente utilizzata nel codice standard di Business Central. In una singola istruzione possiamo testare il valore di una variabile e generare un messaggio di errore se il test fallisce.
Con la funzione TestField, puoi verificare se un campo ha un valore o se è vuoto. Se il campo è vuoto, la funzione TestField genererà un errore di runtime.
È inoltre possibile utilizzare la funzione TestField per verificare se un campo contiene un valore specifico o meno. In caso contrario, il campo genererà un errore.
Nel codice sottostante stiamo cercando di chiamare un metodo o una funzione chiamata '**TestField**' sull'oggetto '**Customer**' con un argomento di tipo testo ("Salesperson Code"):

```al
Customer.TestField("Salesperson Code");
```

Nel codice sottostante stiamo cercando di impostare il valore 'DK' nel campo "Salesperson Code" dell'oggetto '**Customer**' e successivamente chiamare una funzione o un metodo '**TestField**' sull'oggetto '**Customer**' con due argomenti, presumibilmente "Salesperson Code" e 'ZX'.
Customer."Salesperson Code" := 'DK';
Customer.TestField("Salesperson Code", 'ZX');

### FieldError
FieldError è molto simile alla funzione TestField. Tuttavia, se TestField esegue un test e termina con un errore o un risultato OK, FieldError presume che il test sia già stato eseguito e il campo non ha superato il test.
FieldError è progettato per visualizzare un messaggio di errore e quindi terminare il processo. Questo approccio è seguito in gran parte della logic Business Central standard, in particolare nelle codeunit di registrazione.
Questa funzione è comunemente utilizzata all'interno di controlli di validazione per indicare che un determinato campo non soddisfa una condizione specifica.

Questa funzione è utile quando desideri implementare controlli di validazione personalizzati per i dati nel tuo sistema. Assicurati di chiamare '**FieldError**' solo quando è necessario segnalare un errore specifico per un campo. In caso contrario, il codice potrebbe risultare più difficile da manutenere e meno comprensibile.

```al
If Item."Unit Price" < 10 then
    Item.FieldError("Unit Price", 'must be greater than 10');
```

Poiché il messaggio di errore inizia con il nome del campo, dovremo fare attenzione che la nostra costante di testo dia strutturata in modo da rendere di facile lettura il messaggio di errore risultante.

## Strategie di gestione degli errori
La gestione degli errori è una parte essenziale dello sviluppo del software, poiché aiuta a migliorare l'affidabilità e la robustezza delle applicazioni. 
Il miglioramento della gestione degli errori e dei messaggi di errore riduce agli attriti per gli utenti e ha un impatto significativo sull'esperienza dell'utente. Messaggi di errore chiari e informativi aiutano gli utenti a capire cosa è andato storto e come correggerlo, riducendo la frustrazione e migliorando la soddisfazione dell'utente.
Quando un utente riceve una finestra di dialogo di errore mentre lavora in Business Central, viene emesso un segnale di telemetria che può essere registrato in una risorsa Azure Application Insights. Questi dati di telemetria consentono di identificare e analizzare dove e perché si verifica l'errore.

| Se vuoi... | Utilizza...|
|-|-|
| Esegui un'unità di codice e decidi di fare qualcosa se si verifica un errore. |  `if not Codeunit.run() ` |
| Verifica la presenza di un errore e mostra una finestra di dialogo di errore all'utente. | `Dialog.Error(Message: ErrorInfo)` |
| Verifica la presenza di un errore e mostra una finestra di dialogo di errore all'utente con informazioni di supporto aggiuntive. | Utilizzo del tipo di dati ErrorInfo con il metodo |
| Esegui convalide collettive in AL e non mostra all'utente una finestra di dialogo di errore per ciascuna di esse. | Raccolta degli errori |
| Cattura gli errori sollevati da altri metodi AL. | Gestione degli errori utilizzando i metodi Try |
| Rilevare errori/eccezioni generati durante le operazioni di interoperabilità di .NET Framework (solo in locale). | Gestione delle eccezioni .NET utilizzando i metodi Try |
| Gestire gli errori che si verificano nelle attività in background della pagina. | Il `OnPageBackgroundTaskError` trigger della pagina | 
| Registra un errore che si verifica all'interno di una transazione del database (quel rollback). | Registrare l'errore in una nuova sessione utilizzando una sessione in background oppure registrare l'errore nella telemetria |

## Link utili
* [Error Handling](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/devenv-al-error-handling) 
