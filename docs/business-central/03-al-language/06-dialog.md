# Procedure di Dialogo
Le procedure di dialogo fanno riferimento a un modello specifico di programmazione che coinvolge l'interazione con gli utenti attraverso finestre di dialogo o form di input/output.  
Lo scopo di queste procedure è di consentire la comunicazione tra il sistema e l'utente. Inoltre, le procedure Dialog possono essere utili per test/debug rapidi e semplici.

## Introduzione
È possibile utilizzare diversi metodi per visualizzare messaggi e raccogliere input. Ti consigliamo di utilizzare le pagine per assicurarti che la tua applicazione disponga di un'interfaccia utente coerente. Tuttavia, ci sono situazioni in cui potresti voler usare i metodi di dialogo invece delle pagine. Gli usi più importanti dei metodi di dialogo sono:
* per visualizzare una finestra che indica lo stato di avanzamento di alcune elaborazioni che potrebbero richiedere molto tempo.
* per interrompere il programma in esecuzione per visualizzare in esecuzione per visualizzare un messaggio di errore.
* per consentire all'utente di confermare una scelta prima che il programma continui a funzionare.
In ciascuna di queste procedure, i valori dei dati possono essere inseriti tramite l'uso di una stringa di sostituzione. La stringa di sostituzione è il carattere %, seguito dai numeri da 1 a 10, che si trovano all'interno di una stringa di testo del messaggio.

Possiamo avere fino a dieci stringhe di sostituzione in una procedura di dialogo. L'uso delle stringhe di sostituzione e dei valori di visualizzazione associati è opzionale.
Possiamo usare una qualsiasi delle procedure di dialogo semplicemente per visualizzare un messaggio di testo predefinito senza utilizzare delle variabili di sostituzione.
Si consiglia l'uso della costante di testo per il messaggio in quanto facilita la manutenzione e la traduzione in altre lingue.

## Message
La funzione Messaggio viene utilizzata spesso in Business Central per comunicare informazioni all'utente. Sfruttando la funzione Messaggio, è possibile informare l'utente che un particolare processo è stato completato con successo o visualizzare l'output di un'espressione.

Se la stringa contiene segnaposto, è possibile rimpiazzarli con i valori che seguono la stringa.

```al
Message(string [,Value1, ...]);
Message('Hello World');
```

```al
var
    MyInt: Integer;
    TheValueOfTxt: Label 'The value of %1 is %2';
begin
    MyInt := 5;
    Message(TheValueOfTxt, 'MyInt', MyInt);
    // Displays: The value of MyInt is 5
end;
```

Lo svantaggio dei messaggi è che non vengono mostrati fino a quando l'oggetto non completa la sua esecuzione o viene interrotto da qualche azione esterna. Inoltre, se si crea accidentalmente una situazione che genera centinaia o migliaia di messaggi, non esiste un modo agevole per interrompere la loro visualizzazione una volta avviata.
Spesso, la funzione Messaggio viene impiegata come uno strumento di log di base. È possibile programmare la visualizzazione dei messaggi in modo che avvenga solo in circostanze specifiche, utilizzandoli per tracciare il flusso di elaborazione (emettendo codici identificativi semplici da vari punti della logica) o per mostrare il contenuto di particolari elementi di dati attraverso diversi cicli di elaborazione.

## Confirm
Utilizza la funzione Accetta quando desideri eseguire alcune parti del tuo codice solo dopo aver ottenuto l'approvazione dell'utente. La funzione Accetta richiede una stringa, che viene impiegata per porre una domanda all'utente.
L'uso di Accetta interrompe il processo fino a quando l'utente non risponde ai pulsanti Sì e No.
Puoi specificare quale pulsante dovrebbe essere messo in primo piano quando la finestra viene mostrata. Questa preferenza può essere impostata tramite il secondo parametro. La stringa può contenere segnaposto che saranno sostituiti con valori provenienti da altri parametri.

```al
if Confirm('Are you sure you want to delete?') then
    Message('OK');
else
    Message('Not OK');
```

```al
Confirm('Vuoi procedere con questa operazione?', true);
```

## StrMenu
La funzione StrMenu può essere utilizzata per chiedere informazioni agli utenti e fornire loro una selezione di scelte.
L'uso della procedura StrMenu elemina la necessità di utilizzare un oggetto Pagina quando si chiede all'utente di selezionare da un insieme limitato di opzioni.

```al
var
    Days: Text[50];
    Selection: Integer;
begin
    Days := 'Monday, Tuesday, Wednesday, Thursday, Friday';
    Selection := StrMenu(Days, 1, 'Which day is today ?');
    Message('You selected %1.', Selection);
end;
```

## Progress
Se hai un'applicazione il cui processo richiede un tempo considerevole per essere completato, dovresti valutare l'opzione di mostrare una finestra che fornisce all'utente informazioni sullo stato di avanzamento. È sempre consigliabile tenere l'utente informato sul fatto che i processi sono ancora in corso.
Un pulsante "Annulla" viene automaticamente aggiunto a ogni finestra di dialogo, offrendo all'utente la possibilità di interrompere l'elaborazione se necessario.

In alcune situazioni, potrebbe essere utile creare una finestra in cui ogni campo viene aggiornato durante l'esecuzione del programma. Ad esempio, nei campi della finestra potrebbe essere visualizzato il conteggio delle registrazioni effettuate. In un altro scenario, potrebbe essere preferibile mostrare le informazioni relative al record attualmente in fase di elaborazione. Ad esempio, il campo nella finestra potrebbe visualizzare il numero del conto attualmente in fase di elaborazione.

## Dialog
La funzione apre una finestra di dialogo, con il testo desiderato visualizzato all'interno. Puoi utilizzare una barra rovesciata (\) per iniziare una nuova riga e i segni numerici (#) per inserire valori variabili nella stringa. Posiziona i segni numerici nel punto in cui desideri sostituire il valore della variabile.

```al
Dialog.Open(String: Text [, var variable1: Any, ...])
```

Le finestre di dialogo aperte da un oggetto vengono chiuse automaticamente quando l'oggetto termina.
Queste finestre sono ridimensionate automaticamente per contenere la riga di testo più lunga e il numero totale di righe.

Per una presentazione pulita, ti consigliamo di seguire queste linee guida:
- Usa costanti di testo per l'inserimento.
- Scrivi i messaggi usando la voce attiva. Ad esempio, scrivi "Articoli in elaborazione".
- Allinea il campo # a sinistra con almeno un carattere di spazio tra il testo e la variabile.

```al
var
    MyDialog: Dialog;
    MyText: Integer;
    Text000: Label 'Counting to 4 #1:';
begin
    MyText := 0;
    MyDialog.Open(Text000, MyText);
    repeat
        // Do some processing
        Sleep(1000);
        MyNext := MyNext + 1;
        MyDialog.Update(); // Update the field in the dialog
    until MyNext = 4;
    Sleep(1000);
    MyDialog.Close();
end;
```

## Link utili
* [Progress Windows, Message, Error, and Confirm Methods](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/devenv-progress-windows-message-error-and-confirm-methods)
