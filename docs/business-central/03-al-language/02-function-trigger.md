
# Funzioni e Trigger

## Funzioni
Una funzione è un particolare costrutto sintattico che permette di raggruppare, all'interno di un programma, una sequenza di istruzioni in un unico blocco, espletando così una specifica operazione, azione o elaborazione sui dati del programma stesso in modo tale che, a partire da determinati input, restituisca determinati output.
L'importanza, la praticità e i vantaggi di una funzione stanno nel fatto che può essere "chiamata" in diversi punti del programma di cui fa parte ogni volta in cui si ha la necessità di farlo come se fosse una singola istruzione senza la necessità di doverne riscrivere ogni volta il relativo codice implementando dunque il cosiddetto riuso di codice, cui di aggiunge una più facile manutenibilità del codice all'interno del programma e una più facile progettazione del software.

#### Cos'è un metodo?
Un metodo è un termine che viene usato principalmente nel contesto della programmazione orientata agli oggetti per indicare un sottoprogramma associato in modo esclusivo ad una classe e che rappresenta un'operazione seguibile sugli oggetti e istance di quella classe. 
In AL possiamo impropriamente sintetizzare: è una funzione che non restituisce valori.

##### Metodo:

```al
procedure MyMethod()
begin
    // Do something
end;
local procedure MyMethod(Par1: Integer; Par2: Date)
begin
    //Do something
end;
```

##### Funzione:

```al
procedure MyFunction(): Decimal
begin
    //Do something
    exit(value);
end;
procedure MyFunction(Par1: Integer; Par2: Integer) Result: Decimal
begin
    //Do something
    Result := Par1 * Par2;
end;
```

### Scope
Il termine `scope` si riferisce al contesto o alla visibilità di una variabile o di una funzione all'interno di un programma. Lo scope determina dove e come una variabile o una funzione può essere utilizzata all'interno del codice. Esso definisce le regole che stabiliscono quando e dove una variabile è accessibile e modificabile.

Lo Scope di un'`entità` a livello teorico può essere:
* **private**: solo questa classe può accedere a questo membro. Nelle funzioni in AL si indica con la parola `local`.
* **protected**: solo i membri di questa classe o le sottoclassi di questa classe possono accedere a questo membro. Nelle funzioni in AL viene usato (per ora) solo con le variabili.
* **public**: qualsiasi altro oggetto o modulo può accedere a questo membro della classe. Nelle funzioni in AL lo è per default, se non specificato altro.

L'ambito di visibilità è un concetto che si applica anche alle variabili, e determina da dove è possibile leggere e/o scriverne il valore. Lo scope si determina in funzione di dove la variabile è stata dichiarata. 
1. All'interno della funzione / trigger
2. Nella sezione `generale` dell'oggetto

Nella maggior parte dei linguaggi di programmazione esistono due modi di passare parametri alle funzioni:
* per **valore**, è come se venisse duplicato il valore originale, copiato in una nuova area di memoria che verrà utilizzata dal codice interno alla funzione. Eventuali variazioni al parametro sono visibili unicamente all'interno della funzione. Di default in AL i parametri sono passati per valore.
   Esempio: 

   ![Parametri per Valore](/img/business-central/al-language/per-valore.png)

* per **riferimento**, è come se venisse passato il puntamento all'area di memoria in cui è salvato il dato, pertanto chiamante e chiamato leggono e scrivono l'informazione nello stesso posso. Eventuali variazioni al parametro eseguite nella funzione richiamata sono restituite al codice chiamante. I parametri passati per riferimento vanno dichiarati con var.
   Esempio:
   
   ![Parametri per Riferimento](/img/business-central/al-language/per-riferimento.png)

### Overloading
L'**overload** delle procedure consente gli sviluppatori di creare **più procedure** con lo stesso nome, ma con firme diverse, sullo stesso oggetto applicazione.
La risoluzione del sovraccarico viene eseguita utilizzando le firme delle procedure per trovare la corrispondenza migliore. 

La firma di una procedura è rappresentata dal suo nome e dal tipo, ordine e numero di parametri. Il tipo restituito di una procedura non fa parte della firma della procedura.
Esempio pratico di Overload:

```al
procedure XmlGetBoolean(): Boolean;
begin
    exit(TryBoolean(XmlGetText()));
end;
procedure XmlGetBoolean(XPath: Text): Boolean
begin
    exit(TryBoolean(XmlGetText(XPath)));
end;
procedure XmlGetBoolean(XmlNod: XmlNode; XPath: Text): Boolean
begin
    exit(TryBoolean(XmlGetText(XmlNod, XPath)));
end;
```

## Trigger
I trigger attivano un metodo quando si verifica un determinato evento. Sono funzioni predefinite generate automaticamente dal sistema. Uno sviluppatore può scrivere codice che verrà eseguito quando vengono attivate queste funzioni. I trigger sono molto utili per eseguire calcoli e convalide.
Esistono diversi trigger per i vari tipi di oggetto AL. Alcuni trigger sono impostati a livello di oggetto, mentre altri sono impostati sui controlli. 

I trigger vengono generalmente aggiunti alla fine del blocco di codice per l'oggetto o il controllo.

* **OnInsert**:

```al
trigger OnInsert()
begin
end;
```

* **OnModify**:

```al
trigger OnModify()
begin
end;
```

* **OnDelete**:

```al
trigger OnDelete()
begin
end;
```

* **OnRename**:

```al 
trigger OnRename()
begin
end;
```

#### Trigger di Campo
Questo tipo di trigger potrebbe essere utilizzato per eseguire azioni automatiche, validazioni o aggiornamento in risposta a cambiamenti specifici nei dati dell'applicazione. Ci sono due tipi di trigger sul campo:

* **OnValidate()**:

```al
trigger OnValidate()
begin
    ...
end;
```

Questo trigger viene eseguito dopo il comportamento di convalida predefinito quando i dati vengono immessi in un campo. Durante il comportamento di validazione predefinito, il sistema verifica che il tipo di dati del valore inserito corrisponda a quello definito per il campo e che rispetti i vincoli di proprietà impostati in tale campo prima che avvenga la validazione. Se si verifica un errore nel codice trigger, viene visualizzato un messaggio di errore. 
Esempio pratico:

```al
field(1; "No."; Code[20])
{
    Caption = "No.";
    DataClassification = CustomerContent;
    trigger OnValidate();
    begin
    end;
}
```

* **OnLookup()**:

```al
trigger OnLookup()
begin
    ...
end;
```

La proprietà di ricerca deve essere impostata su *True* per abilitare la ricerca. Sono disponibili tre opzioni di ricerca:
1. *Ricerca predefinita*: la ricerca nella tabella viene eseguita senza applicare filtri o altri parametri speciali.
2. *Ricerca campo*: è possibile utilizzare questo trigger per definire una ricerca campo che verrà utilizzata al posto della ricerca predefinita.
3. *Ricerca casella di testo*: è possibile utilizzare il trigger OnLookup per definire una ricerca in base al valore di una casella di testo. Questo valore verrà utilizzato al posto della ricerca predefinita o della ricerca sul campo.
Esempio pratico:

```al
field(4; "Country/Region Code"; Code[10])
{
    Caption = 'Country/Region Code';
    DataClassification = CustomerContent;
    TableRelation = "Country/Region";
    trigger OnLookup()
    begin
    end;
}
```

#### Trigger di Pagina
I trigger di Pagina vengono eseguiti quando si verifica un evento in una pagina o in combinazione con essa. Esistono svariati trigger di pagina:
* OnInit()
* OnOpenPage()
* OnClosePage()
* OnFindRecord()
* OnNextRecord()
* OnAfterGetRecord()
* OnNewRecord()
* OnInsert Record()
* OnModifyRecord()
* OnDeleteRecord()
* OnQueryClosePage()
* OnAfterGetCurrRecord()
* OnPageBackgroundTaskCompleted()
* OnPageBackgroundTaskError()
Vedremo nello specifico, però, quelli più usati: 
* **OnInit()**:

```al
trigger OnInit()
begin
    ...
end;
```

Il codice in linguaggio AL contiene un trigger che viene eseguito subito dopo la cancellazione delle variabili e il caricamento della pagina. Tuttavia, è importante notare che questo trigger non è progettato per interagire direttamente con i controlli presenti sulla pagina. Nonostante questa limitazione, è possibile apportare modifiche a proprietà dinamiche, comprese quelle che normalmente si possono modificare solo all'apertura della pagina
Se si verifica un errore nell'esecuzione del trigger, la pagina si chiude..
* **OnOpenPage()**:

```al
trigger OnOpenPage()
begin
    ...
end;
```

Puoi utilizzare il trigger OnOpenPage per modificare le proprietà dinamiche, comprese quelle che possono essere modificate solo quando la pagina viene aperta, come la Visible Property . È inoltre possibile scrivere nel database dal trigger.
Il trigger OnOpenPage è l'unico trigger che può attivare/disattivare la proprietà Visible e la proprietà può essere attivata solo sulle colonne.
Se si verifica un errore nell'esecuzione del trigger, la pagina si chiude.
* **OnAfterGetRecord()**:

```al
trigger OnAfterGetRecord()
begin
    ...
end;
```

Si usa questo trigger per calcolare le variabili che dipendono dal record corrente. 
Questo trigger è indipendente dal record attualmente selezionato nell'interfaccia utente. Il momento in cui viene generato dipende da quando l'interfaccia utente deve caricare più dati e dalla dimensione del blocco dei dati letti.
All'interno del trigger la `Rec` variabile farà riferimento al record appena letto.
Se si verifica un errore nell'esecuzione del trigger, la pagina si chiude.
* **OnAfterGetCurrRecord()**:

```al
trigger OnAfterGetCurrRecord()
begin
    ...
end;
```

OnAfterGetCurrRecord viene chiamato direttamente dopo che tutti i trigger OnAfterGetRecord sono stati chiamati per ogni riga in un elenco.
Se è presente un errore nel codice di attivazione, la pagina viene chiusa.

:::important Importante
Per le pagine di tipo Card, List, ListPlus, Documento Worksheet, il trigger OnAfterGetCurrRecord viene chiamato più di una volta se la pagina viene aperta in modalità di modifica e non dispone di record da visualizzare. Se la pagina viene aperta in modalità di visualizzazione o visualizza un record, il trigger viene chiamato solo una volta.
:::

#### Trigger di controllo
Ai trigger di pagina si aggiungono i trigger di controllo che si usano nei campi delle pagine.
* **OnValidate**
* **OnLookup**
* **OnDrillDown**
* **OnAssistEdit**

#### Trigger di Azione
Ogni azione eseguita su una pagina ha un trigger OnAction. È possibile usare questo trigger per scrivere codice da eseguire quando un utente seleziona il pulsante in una pagina.
* **OnAction**

```al
actions
{
    are(Processing)
    {
        action(ActionName)
        {
            Image = Action;
            
            trigger OnAction()
            begin
            end;
        }
    }
}
```

:::note Nota
Se si usano la proprietà RunObject e il trigger OnAction contemporaneamente, verranno eseguiti entrambi, il che può portare a conflitti. Assicurarsi di usare esclusivamente la proprietà RunObject o il trigger OnAction, ma non entrambi.
:::

## Link utili
* [Overload](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/methods/devenv-overload-method)
* [Trigger](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/triggers-auto/devenv-triggers)
* [Qui puoi trovare tutto sulle funzioni](https://learn.microsoft.com/it-it/training/modules/al-built-in-functions/)
* [Identificazione dei diversi trigger di tabella e campo](https://learn.microsoft.com/it-it/training/modules/events-triggers/2-table-field-triggers)
* [Identificazione dei diversi trigger di pagina, controllo e azione](https://learn.microsoft.com/it-it/training/modules/events-triggers/3-page-control-action-triggers)