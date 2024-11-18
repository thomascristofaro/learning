
# Scrivere un record

## Assegnazione dei campi
L'assegnazione dei valori ai campi di un record avviene attraverso l'operatore di assegnazione `:=`. Puoi assegnare valori a singoli campi o utilizzare la funzione **`Init`** per inizializzare tutti i campi del record. Questo metofo assegna valori predefiniti a ciscun campo del record, incluso il campo SystemId quando viene creata una tabella. Per ogni nuovo ampo aggiunto successivamente al record, i valori vengono inizializzati per impostazione predefinita o utilizzando InitValue Property(). Se al momento della creazione della tabella non è stato assegnato alcun valore, i valori vengono assegnati in base al tipo di dati, come mostrato qui sotto:

| Tipo di dati   | Valore di default                    |
|:--------------:|:------------------------------------:|
| BigInteger     | 0                                    |
| BigText        | 'Vuoto'                              |
| BLOB           | 'Vuoto'                              |
| Booleano       | NO                                   |
| Codice         | " (stringa vuota)                    |
| Data           | 0d (data non definita)               |
| Data Formula   | " (stringa vuota)                    |
| Appuntamento   | 0DT (data/ora non definita)          |
| Decimale       | 0,0                                  |
| Durata         | 0                                    |
| GUIDA          | 00000000-0000-0000-0000-000000000000 |
| Numero intero  | 0                                    |
| Opzione        | 0                                    |
| ID record      | 'Vuoto'                              |
| Filtro tabella | 'Vuoto'                              |
| Testo          | " (stringa vuota)                    |
| Tempo          | 0T (orario non definito)             |

## Inserimento - Insert()
Se si voglio inserire dei dati in una tabella, il comando da utilizzare è `insert`. Ecco un esempio di come eseguire l'operazione di inserimento di dati in una tabella:

```al
codeunit 50112 ExampleInsertData
{
    procedure InsertDataExample()
    var
        MyRecord: Record "My Table";
    begin
        // Inizializza il record
        MyRecord.INIT;

        // Assegna valori ai campi
        MyRecord."Field1" := 'Value1';
        MyRecord."Field2" := 42;

        // Inserisci il nuovo record nel database
        MyRecord.INSERT;

        // Conferma le modifiche al database
        COMMIT;
    end;
}
```

Nel dettaglio:
* `MyRecord.INIT` inizializza il record.
* `MyRecord."Field1" := 'Value1';` assegna il valore 'Value1' al campo "Field1".
* `MyRecord."Field2" := 42;` assegna il valore 42 al campo "Field2".
* `MyRecord.INSERT;` inserisce il record nel database.
* `COMMIT;` conferma le modifiche al database.

Naturalmente, nel tuo caso, andrai a personalizzare il codice sostituendo "My Table", "Field1" e "Field2" con i nomi effettivi della tua tabella e dei campi. Inoltre, l'operazione *COMMIT* è importante per rendere effettive le modifiche nel database.

## Modifica - Modify() e ModifyAll()
Per aggiornare i record in tabelle possiamo usare:
1. La funzione `Modify` viene utilizzata per aggiornare un singolo record. Può essere usata all'interno di un blocco `with` per identificare il record che deve essere modificato. Nell'esempio, riportato sotto, `RecordVariable` rappresenta la variabile del record che si desidera modificare:

```al
RecordVariable.Modify:
```

2. La funzione `ModifyAll` viene utilizzata per aggiornare più record che soddisfano determinati criteri. Può essere utilizzata all'interno di un blocco `with` e prevedere una condizione che definisce quali record devono essere modificati. Nell'esempio, riportato sotto, `SetRange` imposta una condizione sulla variabile del record, indicando che solo i record con un determinato valore nel campo specificato saranno modificati.

```al
RecordVariable.SETRANGE(Field, 'Value');
RecordVariable.MODIFYALL;
```

È importante notare che le funzioni `modify()` e `modifyall` devono essere utilizzate con cautela, in quanto possono comportare le operazioni di aggiornamento sul database. È sempre consigliabile testare attentamente il codice e gestire eventuali transazioni in modo appropriato per garantire l'integrità dei dati. 

## Eliminazione - Delete() e DeleteAll()
Le funzioni `Delete()` e `DeleteAll()` vengono utilizzate per rimuovere record da una tabella:
1. La funzione `Delete` viene utilizzata per rimuovere un singolo record da una tabella. Di solito, viene utilizzata insieme a un blocco `with` e prevede una condizione che definisce quali record devono essere eliminati. 
Nell'esempio, sotto riportato, `RecordVariable` rappresenta la variabile del record che si desidera eliminare.

```al
RecordVariable.DELETE;

```

2. La funzione `DeleteAll` viene utilizzata per rimuovere più record che soddisfano determinati criteri. Può essere utilizzata all'interno di un blocco `with` e prevede una condizione che definisce quali record devono essere eliminati. Nell'esempio, sotto riportato, `SetRange` imposta una condizione sulla variabile del record, indicando che solo i record con un determinato valore nel campo specificato saranno eliminati.

```al
RecordVariable.SETRANGE(Field, 'Value');
RecordVariable.DELETEALL;
```

Come per le funzioni `modify()` e `modifyall()`, è importante utilizzare con cautela le funzioni `delete` e `deleteall`, poiché comportano la rimozione fisica dei record dal database. Assicurati di testa attentamente il codice e di gestire le transazioni in modo appropriato per garantire l'integrità dei dati.

## Link utili
* [Record Data Type](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-data-type)
* [Record Write Methods](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/devenv-insert-modify-modifyall-delete-and-deleteall-methods)

