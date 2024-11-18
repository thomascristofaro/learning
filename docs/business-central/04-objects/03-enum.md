
# Enum e Enum Extensions

## Cosa è l'Enumerazione

Un'**enumerazione**, o **enum** nella programmazione, è una parola chiave che serve a definire un **tipo composto** da un **insieme di costanti** con un **nome**. Questo **insieme di costanti** si chiama **lista di enumerazione**. Le enumerazioni possono essere usate come campi di una tabella, come variabili locali o globali o come parametri.

Per **creare un enum in AL** bisogna **indicare un ID** e un **nome**. La **lista di enumerazione** è **formata** da valori e ogni valore ha un **ID e un valore**. L'ID valore è la posizione del valore nella lista di enumerazione e deve essere unico. 

Quando i valori di enumerazione appaiono nell'interfaccia utente, sono ordinati secondo l'ordine di definizione. Inoltre, se l'estensione B eredita dall'estensione A, i valori di enumerazione definiti nell'estensione A appaiono prima dei valori di enumerazione definiti nell'estensione B. 

Nell'esempio seguente si mostra come definire un'enumerazione, che può essere ereditata e che contiene i quattro valori **Nessuna**, **Bronzo**, **Argento** e **Oro**.

```al
enum 50121 Loyalty
{
    Extensible = true;
    
    value(0; None) { }
    value(1; Bronze) { }
    value(2; Silver) { }
    value(3; Gold)
    {
        Caption = 'Gold Customer';
    }
}

```
:::important Importante 
E' possibile estendere solo le enumerazioni con la **proprietà Extensibile** impostata su **true**
:::

## Oggetto Enumextension

Le **enumerazioni** possono **essere estese** per **aggiungere altri valori** all'elenco di enumerazione, nel qual caso la proprietà deve essere impostata su **true**. Di seguito viene illustrata la sintassi per un'estensione **enum**, che estende l'enumerazione Loyalty con il valore **Diamond**. 

```al
enumextension 50130 LoyaltyWithDiamonds extends Loyalty
{
    value(50130; Diamond)
    {
        Caption = 'Diamond Level';
    }
}
```
## Uso Enum

Quando si fa riferimento a un'enumerazione definita dal codice, si usa la sintassi come illustrato di seguito.

```al
enum Loyalty
```
Se si desidera definire un'enumerazione come tipo di campo tabella, utilizzare la sintassi illustrata di seguito:

```al
field(50100; Loyal; enum Loyalty) {}
```
Oppure, come variabile:
```al
var
    LoyaltyLevel: enum Loyalty;
```
Nel codice si indirizza un valore di enumerazione specifico, come nell'esempio seguente:

```al
codeunit 50140 EnumUsage
{
    procedure Foo(p: enum Loyalty)
    var
        LoyaltyLevel: enum Loyalty;
    begin
        if p = p::Gold then begin
            LoyaltyLevel := p;
        end;
    end;
}
```

## Business Central locale

Se desideri **etendere un'enumerazione locale** di Dynamics 365 esistente, è possibile **contrassegnare un campo di tabella** in C/SIDE come **estendibile**. 

Le opzioni dei campi tabella in C/SIDE hanno tre proprietà per abilitare il supporto enum:

**Nome della proprietà** | **Tipo di dati**
 ---- | ----
 Estensibile | Booleano, il valore predefinito è **No**.
 EnumTypeId | Numero intero
 EnumTypeName | Testo

 ## Conversioni

La **conversione** da e verso è più rigorosa rispetto a quella di C/SIDE.

- Un'enumerazione può essere assegnata/confrontata con un'enumerazione dello stesso tipo.
- Per essere compatibili con le versioni precedenti, per ora supportiamo la conversione da/verso qualsiasi versione.

## Link Utili:
* [Enum](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/devenv-extensible-enums)