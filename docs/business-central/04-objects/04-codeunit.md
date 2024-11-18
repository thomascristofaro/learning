
# Codeunit

## Cosa è la Codeunit

La **codeunit** è uno degli oggetti principali dell'applicazione Microsoft Dynamics 365 Business Central. 
Le codeunit raggruppano **diverse procedure** in un **unico oggetto**. E' possibile accedere a queste procedure da altre procedure contenute all'interno di pagine, tabelle e codeunit. 

Una codeunit **contiene** i seguenti elementi:

- Trigger
- Funzioni
- Variabili
- Proprietà
- Dichiarazioni

Una codeunit contiene solo un **trigger: OnRun**. Questo trigger è sempre disponibile e viene implementato quando si esegue una codeunit. 

:::info Informazione
Usando la snippet **_tcodeunit_** per la creazione di una codeunit con Visual Studio Code, il trigger OnRun viene generato automaticamente.
:::

### Proprietà Subtype

Puoi utilizzare la proprietà **Access** per verificare se la tua codeunit è di tipo _Public_ o _Internal_. 
Una codeunit di tipo _Public_ può essere richiamata sia dalla stessa estensione che da un'altra estensione. Invece, una codeunit di tipo _Internal_ può essere richiamata solamente dalla stessa estensione. 

La proprietà **Subtype** offre cinque valori disponibili: 

1. **Normal**: questo è il valore predefinito per ogni nuova codeunit e ha un solo trigger: OnRun.

2. **Install**: questo tipo di codeunit viene eseguito solo durante l'installazione del pacchetto di estensione. Fornisce l'accesso a due trigger aggiuntivi. 

3. **Upgrade**: questo tipo di codeunit viene eseguito solo durante il processo di aggiornamento di un'estensione. Offre l'accesso a cinque trigger extra. 

4. **Test**: questo sottotipo consente di scrivere funzioni di test dell'unità. Non è consigliato creare funzioni normali in questa codeunit poiché può essere eseguita solo durante il test. 

5. **TestRunner**: questo sottotipo eseguirà una o più codeunit di test.

## Creare una codeunit

Per creare una nuova codeunit, puoi utilizzare lo snippet tcodeunit. Assicurati di fornire un **numero** e un **nome** per la tua codeunit. 

```al
codeunit 50100 MyCodeunit
{
    Access = Public;
    Subtype = Normal;

    trigger OnRun()
    begin

    end;

    procedure MyFunction(Param1: Integer; Param2: Text[50]): Boolean
    begin

    end;
}
```

Per **accedere alle funzioni** all'interno di una codeunit, occorre **creare** prima una **variabile di tipo Codeunit**. Successivamente, puoi accedere a tutte le funzioni della codeunit (a seconda della loro proprietà di accesso).

```al
codeunit 50101 MyCodeunit2
{
    trigger OnRun()
    var
        MyCodeUnit1: Codeunit MyCodeunit;
        Result: Boolean;
    being
        Result := MyCodeUnit1.MyFunction(5, 'Test');
    end;
}

```

### Proprietà RunObject

Si può accedere a una codeunit dall'interno di una pagina usando la proprietà **RunObject** di una action.
Se si utilizza la proprietà RunObject, è possibile eseguire solo il trigger OnRun, non le altre funzioni all'interno della codeunit. 

Per accedere alle altre funzioni è possibile utilizzare il trigger **OnAction**. 

### I parametri

Nel contesto della creazione e utilizzo di funzioni, l'**attenzione ai parametri** riveste un ruolo cruciale. I parametri costituiscono il **mezzo** attraverso il quale è possibile **trasmettere informazioni** a una funzione. 

Quando si richiamano funzioni all'interno del codice in Visual Studio Code, l'ambiente di sviluppo offre supporto mediante l'esposizione di dettagli sui parametri necessari per ciascuna funzione. Nel momento in cui inizi a digitare, l'ItelliSense di Visual Studio Code presenta i parametri associati alla funzione, fornendo informazioni aggiuntive sulla loro corretta utilizzazione. Se un parametro è delimitato tra parentesi quadre, ciò indica che esso è facoltativo.

Per definire una funzione con parametri è essenziale separare ciasun parametro mediante un punto e virgola all'interno della dichiarazione della funzione. 

### Istruzione Exit

```al
local procedure MyFunction(): Integer
var
    myResult: Integer
begin
    myResult := Power(2,3);
    exit(myResult);
end;
```
Quando definisci una funzione e il suo blocco di codice ha completato l'esecuzione, se intendi che la funzione **restituisca un valore**, puoi utilizzare l'istruzione "**exit**". Questa istruzione è particolarmente utile quando desideri interrompere la funzione in seguito al verificarsi di una condizione specifica.


Nel processo di creazione di una funzione, è comune che essa operi su diverse variabili, che possono essere sia globali che locali. Le variabili locali sono accessibili esclusivamente all'interno della funzione in cui vengono dichiarate, pertanto il loro ambito è circoscritto alla funzione corrente in fase di sviluppo.

D'altra parte, le variabili globali possono essere richiamate da qualsiasi parte dell'oggetto in cui sono definite, ma non sono accessibili al di fuori di quest'ultimo. È importante notare che soltanto le funzioni globali possono essere raggiunte da altri oggetti.


## Link Utili:
* [Codeunit](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/devenv-codeunit-object)

