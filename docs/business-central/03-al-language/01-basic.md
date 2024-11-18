
# Basi del linguaggio AL

AL è il linguaggio di programmazione utilizzato per manipolare i dati, come recuperare, inserire e modificare record in un database di Dynamics 365 Business Central. Controlla l'esecuzione dei vari oggetti dell'applicazione, come pagine, report o codeunit.

Con AL, è possibile creare regole aziendali per garantire che i dati memorizzati nel database siano significativi e coerenti con il modo in cui i clienti gestiscono la loro attività. Attraverso la programmazione AL, è possibile:

Ogni oggetto in Dynamics 365 Business Central contiene trigger in cui è possibile aggiungere il proprio codice AL. È possibile avviare l'esecuzione del codice AL tramite le Azioni.

## Variabili
Una variabile, in informatica, è un contenitore di dati situato in una porzione di memoria destinata a contenere valori, suscettibili di modifica nel corso dell'esecuzione di un programma. Una variabile è caratterizzata da un nome alfanumerico.

Le variabili in AL vengono dichiarate utilizzando la parola chiave *var* e la sintassi è simile a questa:

```al
var
    myInt: Integer;
```

E’ possibile dichiarate in una riga più variabili dello stesso tipo:

```al
var
    myInt, nextInt, thirdInt : Integer;
    isValid, doCheck : Boolean;
```

Ogni variabile deve essere obbligatoriamente definita specificando il tipo di dato che conterrà. La variabile può essere dichiarata senza inizializzarla, in questo caso il compilatore assegnerà un valore di default in base al tipo di dato.

I tipi di dato primitivi sono:

```al
var
    MyText : Text;          // Hello World
    MyCode : Code[20];      // HELLO-WORLD
    MyInteger : Integer;    // 123
    MyDecimal : Decimal;    // 123.45
    MyBoolean : Boolean;    // true
    MyDate : Date;          // 31/12/2023
    MyTime : Time;          // 12:59:59
    MyDateTime : DateTime;  // 31/12/2023 12:59:59
```

[Qui](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/methods-auto/library) è possibile trovare la lista completa dei tipi di dato.

## Assegnazioni

Le assegnazioni assegnano un valore ad una variabile. Il valore che assegni è un'espressione AL. Può essere una costante, una variabile, o può consistere nel valore di ritorno di una funzione. L'operatore di assegnazione è il segno di due punti uguale **:=**.

```al
// una costante
Count := 1;

// una costante, un operatore e una variabile
Amount := 2 * Price;

// valore di ritorno di una funzione
Amount := CalcAmount(Price, Quantity);
```

E’ consentito eseguire operazioni aritmetiche su una variabile ed assegnarne il risultato alla variabile stessa, con la seguente sintassi:
    
```al
Counter := 0;

// you can use this syntax 

// for addition
Counter += 1;
// for subtraction
Counter -= 1;
// for multiplication
Counter *= 1:
// for division
Counter /= 1;

// instead of 
Counter := Counter + 1;
```

Anche con le stringhe è possibile utilizzare la stessa sintassi per concatenarle:

```al
String := "Hello ";
String += "World";
```

## Costrutti di controllo
Il codice AL è composto da una serie di istruzioni, eseguite sequenzialmente in un ordine dall'alto verso il basso. Tuttavia, spesso sarà necessario controllare il flusso dell'esecuzione: le istruzioni potrebbero dover essere ripetute più di una volta, oppure potrebbe essere necessario condizionare il codice. Per farlo, si utilizzano le strutture di controllo. In AL sono divise nei seguenti gruppi principali:
* Compound statements
* Conditional statements
* Repetitive statements

## Compound statements
In alcuni casi, la sintassi AL consente solo l'uso di una singola istruzione. Tuttavia, se è necessario eseguire più di una semplice istruzione, le istruzioni possono essere scritte come una dichiarazione composta (una dichiarazione di blocco) racchiudendole tra le parole chiave "begin" e "end".

```al
begin
    <Statement 1>;  
    <Statement 2>;  
    ..  
    <Statement n>;  
end;
```

Le singole istruzioni sono separate da un punto e virgola. In AL, il punto e virgola è utilizzato per separare le istruzioni e non per terminarle, come avviene in altri linguaggi di programmazione. Tuttavia, un punto e virgola aggiuntivo prima di una parola chiave "end" non causa un errore perché viene interpretato dal compilatore come un'istruzione vuota.

## Conditional statements
Si utilizzano le istruzioni condizionali per specificare una condizione e uno o più comandi da eseguire se la condizione viene valutata come vera o falsa. Esistono due tipi di istruzioni condizionali in AL:
* IF-THEN-ELSE, dove ci sono due scelte
* CASE, dove ci sono più di due scelte

### If-then-else statements
Se `<Condition>` è vera, allora viene eseguita `<Statement1>`. Se `<Condition>` è falsa, allora viene eseguita `<Statement2>`.

```al
if <Condition> then  
    <Statement1>  
[else  
    <Statement2>]
```

* Il ramo else è opzionale
* Le condizioni si possono annidare in modo strutturato
* Gruppi di istruzioni possono essere racchiusi tra BEGIN .. END

```al
if <Condition1> then   
    if <Condition2> then   
        <Statement1>   
    else  
        <Statement2>
```

La condizione può essere: 
* un’espressione semplice: `if x = y then`
* un'espressione negata: `if not (x = y) then`
* un’espressione composta da più condizioni AND e OR: `if (x = y) and (a = b) then` la gerarchia si esprime con l’utilizzo delle parentesi tonde.

Gli operatori di confronto sono:

| Simbolo | Significato          |
|---------|----------------------|
| `=`     | uguale               |
| `<>`    | diverso              |
| `>`     | maggiore             |
| `<`     | minore               |
| `>=`    | maggiore o uguale    |
| `<=`    | minore o uguale      |

Esempio:
    
```al
if (var1 = var2) and   
    (var3 > var4)  
then begin
    x := a;
    y := b;
end else begin
    a := x;
    b := y;
end;
```

![if statement](/img/business-central/AL1.png)

### Case statements
Il risultato di `<Expression>` viene confrontato con ciascun set di valori, e `<Value Set>` deve essere un'espressione o un intervallo.

```al
case <Expression> of  
    <Value set 1>:  
        <Statement 1>;  
    <Value set 2>:  
        <Statement 2>;  
    ..
    <Value set n>:  
        <Statement n>;  
[else  
    <Statement n+1>]  
end;
```

Viene utilizzato quando è necessario scegliere tra più di due azioni diverse. Il metodo dello statement case è il seguente:
* L'espressione `<Expression>` viene valutata e il primo set di valori corrispondente esegue l'istruzione associata, se presente.
* Se nessun set di valori corrisponde, viene eseguita l'istruzione associata alla clausola `else`, se presente.

```al
case Number of  
    1,2,9:  
        begin
            x := 1;
            message('1, 2, or 9.');
        end;  
    10..100:  
        message('In the range from 10 to 100.');  
else  
    message('Neither 1, 2, 9, nor in the range from 10 to 100.');  
end;

// ------------------------------------------------

MyCode := 'ABC';  
case MyCode of  
    'abc':  
        message('This message is not displayed.');   
    'def':  
        message('This message is not displayed.');  
else  
    message('The value set does not match the expression.');
end;
```

## Repetitive statements (Cicli iterativi)
Un'istruzione ripetitiva è anche nota come loop. Sono utilizzati per eseguire più volte parti di codice in funione di una condizione. Esistono quattro tipi di ciclo in AL:
* repeat-until
* while-do
* for
* for-each

Nel ciclo **repeat-until**: 

```al
repeat
    <Statements>
until <Condition>
```

* Le istruzioni sono eseguite fino al verificarsi della condizione.
* Il ciclo sarà eseguito come minimo una volta (1 to N).

Esempi:

```al
if x < y then begin
    repeat
        x := x + 1;
        a := a -1;
    until x = y;
        b := x;
end;
```

```al
Count := 0;
if Customer.find('-') then
repeat
    Count := Count + 1;
until Customer.next <= 0;
message('The Customer table contains %1 record.',Count);
```

Nel ciclo **while-do**:
```al
while <expr> do
    <Statement>;
```
```al
while <expr> and
    <expr> and
    <expr>
do begin
    <Statement>;
    <Statement>;
end;
```

Esempi:

```al
while I < 1000 do
    I := I + 1;
message(format(I));
```

```al
while Count < 1000 do
    begin
    Count := Count + 1;
    message(FORMAT(Count));
    if Count = 10 then
        break;
    end;
end;
```

Il ciclo **for-to** e **for-downto**:

```al
for <Control Variable> := <Start Number> to <End Number> do
    <Statement>
```

```al
for <Control Variable> := <Start Number> downto <End Number> do
    <Statement>
```

* le istruzioni sono eseguite un numero certo di volte (1 to N)
* l'iterazione è gestita da una variabile di controllo (Integer)

Il ciclo **FOREACH** è usato per scorrere tutti i valori presenti in una "lista".

```al
foreach <Element> in <List> do <Statement>
    <Statement>
```

```al
procedure PrintCustomerNames(customerNames : List of [Text]);
var
    customerName : Text;
begin
    foreach customerName in customerNames do
        message(customerName);
end;
```

![cicli iterativi](/img/business-central/al-language/cicli.png)

## Link utili
* [Panoramica](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/devenv-reference-overview)
* [Introduzione alla programmazione AL](https://learn.microsoft.com/it-it/training/modules/intro-basics-al-programming/)
