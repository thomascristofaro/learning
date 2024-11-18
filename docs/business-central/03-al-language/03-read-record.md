
# Leggere e modificare i dati

## Cos'è un record
Un record è una struttura dati che rappresenta un'istanza di un'entità o di una tabella del database. Un record contiene un insieme di campi o attributi che rappresentano le diverse informazioni associate a quell'istanza specifica.
Ecco un esempio di come potrebbe apparire un record in linguaggio AL:

```al
table 50100 "Cliente"
{
    DataClassification = ToBeClassified;
    
    DataClassificationFields
    {
        // Campi della tabella Cliente
        field(1; "ID Cliente"; Code[20])
        {
            DataClassification = CustomerContent;
        }
        field(2; "Nome"; Text[100])
        {
            DataClassification = CustomerContent;
        }
        field(3; "Indirizzo"; Text[250])
        {
            DataClassification = CustomerContent;
        }
        // Altri campi della tabella...
        field(10; "Saldo"; Decimal)
        {
            DataClassification = CustomerContent;
        }
    }
}
```

In questo esempio, la tabella `Cliente` è definita con vari campi come "ID Cliente", "Nome", "Indirizzo", "Saldo", ecc. Ogni record all'interno di questa tabella rappresenta le informazioni associate a un cliente specifico. Ogni campo all'interno del record contiene un dato specifico, come l'ID del cliente, il nome, l'indirizzo e il saldo.
Quando si programmano applicazioni in linguaggio AL, è comune manipolare e interagire con i record per effettuare operazioni di lettura, scrittura e aggiornamento dei dati all'interno del sistema.
Per accedere ai dati in tabella bisogna dichiarare una variabile di tipo Record specificando il nome della tabella che si desidera leggere. La logica di accesso in AL è:
* Senza filtri ho accesso all'intero contenuto della tabella
* Se inserisco dei filtri posso individuare i record che desidero leggere
* La variabile espone sempre i campi contenenti i valori del record corrente
* Per leggere altri record devo 'spostarmi' per caricarne i valori

## Get: accesso diretto
L'accesso ai dati può avvenire per accesso diretto al record (quando ne conosco la chiave primaria) utilizzando il comando:
**GET(campo/i chiave)**
Altrimenti devo ricercare i dati in tabella inserendo i filtri ed eseguendo uno dei comandi di ricerca:
**FINDFIRST() o FINDLAST()**
**FINDSET()**

Per scorrere le righe utilizzare un ciclo in combinazione con il metodo **NEXT()**.

#### Record.GET()
Se la chiave non esiste si genera un errore di run-time.
Per gestire l'errore innestare il metodo in una condizione if.

```al
if CustomerRec.get('4711') then
.... // Do some processing
else
.... // Do some error processing
```

Il metodo `Record.GET` viene utilizzato per recuperare un record specifico all'interno di una tabella.
Esempio pratico:

```al
codeunit 50100 "Esempio Record.GET"
{
    var
        ClienteRec: Record "Customer";
    procedure AccessoDati()
    begin
        // Inizializzazione del record
        ClienteRec.reset;
        // Recupera il record con il nr. cliente specificato
        if ClienteRec.get('1001') then
        begin
            // Utilizzo dei dati del record
            message('ID Cliente: %1, Nome: %2', ClienteRec."No.", ClienteRec."Name");
        end
        else
        begin
            // Il record non è stato trovato
            message('Il record non è stato trovato.');
        end;
    end;
}
```

## Ricerca

#### Record.FIND()

:::note Nota
Il metodo Find è deprecato (ma ancora presente in base app).
Preferire i metodi FindFirst(), FindLast() e FindSet()
:::

```al
SalesOrderLine.SetCurrentKey(Type, "No.");
SalesOrderLine.SetRange(Type, SalesOrderLine.Type::Item);
SalesOrderLine.SetRange("No.", "No.");
if SalesOrderLine.Find('-') then
   Error(Text001, TableCaption, "No.", SalesOrderLine."Document Type");
```

Il metodo `Record.FIND` viene utilizzato per cercare un record all'interno di una tabella basandosi su una chiave specifica. Il metodo `Record.FIND` è spesso seguito dall'utilizzo di altri metodi per navigare attraverso i record trovati.
Esempio pratico:

```al
codeunit 50100 "Esempio Record.FIND"
{
    var
        ClienteRec: Record "Customer";
    procedure AccessoDati()
    begin
        // Inizializzazione del record
        ClienteRec.reset;
        ClienteRec.SetRange("No.",'1001')
        // Cerca il record con il nr. cliente specificato
        if ClienteRec.FIND('=') then
        begin
            // Utilizzo dei dati del record
            message('ID Cliente: %1, Nome: %2', ClienteRec."No.", ClienteRec."Name");
        end
        else
        begin
            // Il record non è stato trovato
            message('Il record non è stato trovato.');
        end;
    end;
}
```

### FindFirst(), FindLast(), FindSet() e FindNext()
Le differenze importanti tra Get e Find sono:
* Find utilizza i filtri attuali.
* Find può cercare i record in cui il valore della chiave è uguale, maggiore o minore della stringa di ricerca.
* Find può trovare il primo o l'ultimo record, a seconda dell'ordinamento definito dalla chiave corrente.

#### FindFirst() e FindLast()
Se si desidera trovare il primo record in una tabella o in un set, utilizza il metodo FindFirst (Record). Se si desidera trovare l'ultimo record in una tabella o in un set, utilizza il metodo FindLast (Record).
La chiamata di `FindFirst / FindLast` su una tabella vuota dal trigger OnNewRecord fa si che Business Central Server generi un'eccezione e l'esecuzione AL venga interrotta. Tuttavia, il client elimina questo errore e non mostra alcun messaggio di errore all'utente. Pertanto, quando si utilizza `FindFirst / FindLast` all'interno di questo trigger, è necessario aggiungere codice che verifica in modo condizionale se un record è stato trovato e, in caso negativo, avvisare l'utente con un messaggio.
Esempio:

```al
if not MyRecord.FindFirst then
    Error('error message');
```

```al
if not MyRecord.FindLast then
    Error('error message');
```

#### FindSet()

:::note Nota
Dovresti utilizzare questo metodo solo quando desideri esplicitamente eseguire il ciclo attraverso un recordset. Dovresti usare questo metodo solo in combinazione con `repeat..until`. 
:::

La differenza tra `Find()` e `FindSet` è che `Find` utilizza il paging e il metodo richiede solo N righe nella prima richiesta, quindi se sono necessarie più righe, invierà una nuova richiesta SQL. Il metodo `FindSet` richiederà tutte le righe contemporaneamente.
La differenza tra `FindSet(false)` e `FindSet(true)` è che con `FindSet(true)` verrà eseguita un'operazione `LockTable()` prima di trovare le righe, il che è un vantaggio se prevedi di aggiornare tutte le righe che stai trovando.
L'esempio, riportato sotto, mostra come utilizzare il metodo `FindSet` per scorrere un set e aggiornare un campo.

```al
procedure Example()
    var
        Customer: Record Customer;
        SalesHeader: Record "Sales Header";
    begin
        Customer.FindFirst();
        SalesHeader.SetRange("Sell-to Customer No.", Customer."No.");
        SalesHeader.SetFilter("Bill-to Customer No.", '<>%1', Customer."No.");
        if SalesHeader.FindSet(true) then
            repeat
                SalesHeader."Ship-to contact" := SalesHeader."Bill-to Contact";
                SalesHeader.Modify();
            until SalesHeader.Next() = 0;
    end;
```

#### FindNext()
La `FindNext` è una funzione utilizzata per recuperare il record successivo che soddisfa i criteri di ricerca specificati in una tabella.
Ecco un esempio:

```al
codeunit 50100 ExampleFindNext
{
    procedure FindNextExample()
    var
        MyRecord: Record "My Table";
    begin
        // Inizializza il record
        MyRecord.SetRange("Field1", 'Value1'); // Imposta il campo su cui eseguire la ricerca
        if MyRecord.FindSet() then
        begin
            // Record trovato
            repeat
                // Processa il record corrente
                Message('Record trovato. Altri dettagli: ' + MyRecord."Field2");
                // Cerca il record successivo
            until not MyRecord.FindNext();
        end
        else
        begin
            // Nessun record trovato
            Message('Nessun record trovato.');
        end;
    end;
}
```

In questo esempio, la funzione FindSet viene utilizzata per trovare il primo record che soddisfa i criteri di ricerca. Successivamente, il ciclo `'repeat'` viene utilizzato insieme a *FindNext* per attraversare tutti i record successivi che soddisfano i criteri. Il processo di elaborazione del record corrente viene ripetuto finché *FindNext* restituisce **'true'**. Se non viene trovato alcun record iniziale con FindSet, viene visualizzato un messaggio che indica che nessun record è stato trovato.

### Filtro
Se invece desideriamo unicamente sapere se esiste almeno un record che rispetta i filtri, per ragioni di performance, è consigliato utilizzare la funzione **`ISEMPTY()`**. La funzione non leggere tutto il contenuto della tabella, ma ritorna unicamente un booleano che ci dice se esiste oppure no ciò che abbiamo filtrato.
Riassumendo, quindi:
* è utilizzato per verificare la presenza di almeno un record
* restituisce `true` quando ci sono record che corrispondono ai filtri
* spesso è utilizzato in forma negata. Esempio:

   ```al
   if not Customer.IsEmpty then
      Message('Almeno un cliente codificato');
   ```

Vediamo ora le funzioni utilizzate per filtrare i dati in una tabella:
1. **SetRange** viene utilizzato per limitare l'intervallo dei record in una tabella in base ai valori di uno o più campi. Nell'esempio, riportato sotto, *SetRange* viene utilizato per limitare la ricerca ai record in cui il campo "Field1" è uguale a 'Value1'. 

    ```al
    codeunit 50100 ExampleSetRange
    {
        procedure SetRangeExample()
        var
            MyRecord: Record "My Table";
        begin
            // Inizializza il record
            MyRecord.SetRange("Field1", 'Value1'); // Imposta il campo su cui eseguire la ricerca
            if MyRecord.FindSet() then
            begin
                // Record trovato
                Message('Record trovato. Altri dettagli: ' + MyRecord."Field2");
            end
            else
            begin
                // Record non trovato
                Message('Record non trovato.');
            end;
        end;
    }
    ```

2. **SetFilter** consente di impostare un filtro per i record in una tabella basato su una formula. Nell'esempio, riportato sotto, *SetFilter* viene utilizzato per impostare un filtro diretto sui record in cui il campo "Field1" è uguale a 'Value1'.

    ```al
    codeunit 50101 ExampleSetFilter
    {
        procedure SetFilterExample()
        var
            MyRecord: Record "My Table";
        begin
            // Inizializza il record
            MyRecord.SetFilter("Field1 = 'Value1'"); // Imposta il filtro
            if MyRecord.FindSet() then
            begin
                // Record trovato
                Message('Record trovato. Altri dettagli: ' + MyRecord."Field2");
            end
            else
            begin
                // Record non trovato
                Message('Record non trovato.');
            end;
        end;
    }
    ```

3. **Reset** viene utilizzato per annullare tutti i filtri o intervalli precedentemente impostati su una tabella. Nell'esempio, riportato sotto, dopo aver utilizzato *SetRange* per cercare un record, *Reset* viene utilizzato per annullare il filtro o l'intervallo precedentemente impostato sulla tabella. 

    ```al
    codeunit 50102 ExampleReset
    {
        procedure ResetExample()
        var
            MyRecord: Record "My Table";
        begin
            // Inizializza il record
            MyRecord.SetRange("Field1", 'Value1'); // Imposta il campo su cui eseguire la ricerca
            if MyRecord.FindSet() then
            begin
                // Record trovato
                Message('Record trovato. Altri dettagli: ' + MyRecord."Field2");
            end
            else
            begin
                // Record non trovato
                Message('Record non trovato.');
            end;
            // Resetta i filtri e gli intervalli
            MyRecord.Reset();
        end;
    }
    ```

### Ordinamento
L'ordinamento dei record all'interno di una tabella può essere gestito mediante la funzione `SetCurrentKey` abbinata all'opzione `Ascending`. La funzione `SetCurrentKey` viene utilizzata per specificare il campo o i campi in base ai quali verranno ordinati i record. L'opzione `Ascending` indica l'ordine ascendente. Un esempio può essere:

```al
codeunit 50104 ExampleSetCurrentKey
{
    procedure SetCurrentKeyExample()
    var
        MyRecord: Record "My Table";
    begin
        // Imposta il campo o i campi e l'ordine di ordinamento
        MyRecord.SETCURRENTKEY("Field1", ASCENDING); // Ordinamento ascendente per Field1
        // Cerca e legge i record ordinati
        if MyRecord.FINDSET() then
        begin
            repeat
                // Processa il record corrente
                Message('Record: ' + MyRecord."Field1");
                // Cerca il record successivo
            until not MyRecord.NEXT();
        end
        else
        begin
            // Nessun record trovato
            Message('Nessun record trovato.');
        end;
    end;
}
```

In questi esempio, *SetCurrentKey* viene utilizzato per specificare che i record devono essere ordinati in base al campo "Field1" in ordine ascendete. Successivamente, la funzione *FindSet* viene utilizzata per trovare e leggere i record ordinati. Il ciclo *repeat* con *NEXT* viene utilizzato per attraverso tutti i record trovati.
Si possono specificare più campi di ordinamento separandoli con virgole all'interno della stringa passata *SetCurrentKey*. Ad esempio:

```al
MyRecord.SETCURRENTKEY("Field1", ASCENDING, "Field2", DESCENDING);
```

Facendo così, questo imposta un ordinamento ascendente per "Field1" e un ordinamento discendente per "Field2".

## Link utili
* [Record Data Type](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-data-type)
* [Get, Find, and Next Methods](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/devenv-get-find-and-next-methods)
* [Record Filter Functions](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/devenv-setcurrentkey-setrange-setfilter-getrangemin-and-getrangemax-methods)