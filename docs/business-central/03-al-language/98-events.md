# Eventi
I punti di innesto rappresentano inserzioni di codice personalizzato all'interno di una procedura. Questi devono essere definiti e anticipati dal creatore della procedura principale. Consentono di collegarsi all'applicazione principale senza apportare modifiche dirette al codice esistente. Inoltre, possono essere sottoscritti più volte da diverse applicazioni.

L'utilizzo degli eventi costituisce un concetto consolidato nella programmazione, agevolando gli aggiornamenti delle applicazioni e riducendo, se non eliminando, la necessità di apportare modifiche al codice delle applicazioni personalizzate in risposta a cambiamenti nella piattaforma dell'applicazione. Gli eventi favoriscono la separazione delle funzionalità personalizzate dalla logica di business dell'applicazione, consentendo di intercettare tali funzionalità senza dover modificare il codice originale.

Grazie all'adozione degli eventi, le modifiche al codice dell'applicazione principale hanno un impatto minimo sulle personalizzazioni. Di conseguenza, si riducono i costi associati a modifiche e aggiornamenti del codice.

### Implementare gli eventi
Per implementare gli eventi, effettuare i seguenti passaggi:
1. **Pubblicare l'evento**: creare e configurare una funzione.
2. **Generare l'evento**: aggiungere il codice che chiama la funzione autore dell'evento
3. **Eseguire la sottoscrizione all'evento**: aggiungere una o più funzioni sottoscrittore.

### Pubblicare un evento (event Publisher)
Un evento è una dichiarazione di un'occorrenza di modifica. Tale dichiarazione viene eseguita da una funzione AL, denominata autore di eventi. L'oggetto che contiene la funzione di creazione dell'evento è denominato autore (o Publisher).

La differenza tra un autore di eventi e una funzione normale consiste nel fatto che un autore di eventi ha solo una firma, ma non esegue codice. La firma di una funzione è rappresentata solo dal nome con i relativi parametri e il tipo di valore restituito.

```al
[IntegrationEvent(false, false)]

local procedure OnBeforeSetDefaultSalesperson(var Customer: Record Customer; var IsHandled: Boolean)
begin
end;
```

#### I tipi di evento
Sono previsti tre tipi di evento:
1. **Business events**: un evento custom che non cambierà mai.
2. **Integration events**: un evento custom che può cambiare.
3. **Global events**: venti di sistema predefiniti che vengono generati automaticamente da varie codeunit dell'applicazione di base.

### Generare un evento (Raise event)
Puoi aggiungere del codice per richiamare il metodo dell'autore evento nel punto interessato dell'oggetto.
La dichiarazione (Publisher) ed il relativo richiamo dovrebbero logicamente stare all'interno dello stesso oggetto.
Il Publisher va dichiarato come funzione locale.
Il punto di richiamo (normalmente) è uno solo.

```al
local procedure SetDefaultSalesperson()
var
    UserSetup: Record "User Setup";
    IsHandled: Boolean;
begin
    IsHandled := false;
    OnBeforeSetDefaultSalesperson(Rec, IsHandled);
    if IsHandled then
        exit;
    
    if not UserSetup.Get(UserId) then
        exit;
    
    if UserSetup."Salespers./Purch. Code" <> '' then
        Validate("Salesperson Code", UserSetup."Salespers./Purch. Code");
end;
```

### Sottoscrivere un evento (event Subscriber)
Un sottoscrittore ascolta e gestisce un evento pubblicato. Esso stesso è una funzione AL che esegue la sottoscrizione a una funzione autore dell'evento. Tale funzione include la logica per la gestione dell'evento. Possono esserci più sottoscrittori allo stesso evento, ma nella stessa App è meglio utilizzarne uno soltanto.

```al
[EventSubscriber(ObjectType::Table, Database::Customer, 'OnBeforeSetDefaultSalesperson', '', false, false)]

local procedure OnBeforeSetDefaultSalesperson(var Customer: Record Customer; var IsHandled:: Boolean);
begin
    Customer."Salesperson Code" := 'ME';
    IsHandled := true;
end;
```

### Sottoscrivere un evento - Note tecniche
Il codice di sottoscrizione eventi va sempre inserito in Codeunit ed il nome della funzione può differire dal nome dell'evento.
I parametri della funzione locale possono anche essere meno di quelli definiti, ma devono rispettarne l'ordine di definizione. (#)
La funzione è opportuno che sia definita come locale.
Possono esserci più sottoscrittori allo stesso evento da diverse posizioni nel codice dell'applicazione.
Quando viene generato un evento, i metodi del sottoscrittore vengono eseguiti uno alla volta senza un ordine particolare.

:::important Attenzione
Non è possibile specificare l'ordine in cui vengono chiamati i metodi del sottoscrittore.
:::

La sottoscrizione di un evento può essere scritta manualmente, magari copiando il publisher e modificando ciò che serve.
Ma se non ho accesso al codice sorgente, posso utilizzare la funzione nativa che ne recupera la definizione direttamente dai simboli.
Dalla palette dei comandi lanciare il metodo: `AL: Find Event`.

## Trigger o Eventi?
|   | Triggers | Events |
|---|---|---|
| **Nomi e numerosità** | Predefiniti dal sistema | A discrezione dello sviluppatore |
| **Dichiarazione** | Non necessaria | A cura dello sviluppatore |
| **Parametri** | Predefiniti | Possono variare (+) |
| **Richiamo** | Automatico | A cura dello sviluppatore |
| **Sottoscrizione** | Attraverso i metodi Trigger | A cura dello sviluppatore, in oggetti codeunit |

## Link Utili:
* [Eventi](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/devenv-events-in-al)ù
* [Architettura basata su eventi](https://learn.microsoft.com/it-it/training/modules/events-triggers/4-event-based)
* [Pubblicazione e sottoscrizione di eventi](https://learn.microsoft.com/it-it/training/modules/events-triggers/5-publish-subscribe)