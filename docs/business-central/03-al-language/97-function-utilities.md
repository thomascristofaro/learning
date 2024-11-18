# Funzioni utili
AL supporta numerose funzioni di stringa.
Ad esempio, puoi utilizzare le funzioni di stringa se desideri rimuovere i caratteri da un valore di testo o se desideri sostituire i caratteri in quel testo. Le funzioni di stringa sono:
* **StrPos** and **IndexOf**
* **CopyStr** and **Substring**
* **SelectStr** and **Split**
* **InsStr**
* **StrLen** and **MaxStrLen**
* **LowerCase**, **UpperCase**, **ToLower**, and **ToUpper**
* **IncStr**

### StrPos
La funzione **StrPos** restituisce la posizione della prima occorrenza di una sottostringa all'interno di una stringa data. Se la sottostringa viene trovata, la funzione restituirà la posizione in cui inizia la sottostringa all'interno della stringa completa, indicata come un numero intero positivo. Altrimenti, se la sottostringa non viene trovata, la funzione restituirà un valore che indica l'assenza della sottostringa.

```al
trigger OnAction ()
var
    MyLongString: Text[50];
begin
    MyLongString := 'HelloWorldOfManyManyCharacters';
    Message('%1', StrPos(MyLongString, 'l'));   // Results in 3
end;
```

Nell'esempio sopra viene utilizzata la funzione StrPos per determinare la prima posizione del carattere l nella variabile MyLongString.

### IndexOf
La funzione **IndexOf** è un'altra opzione comune per ottenere la posizione di una sottostringa all'interno di una stringa in molti linguaggi di programmazione. Questa funzione restituisce l'indice della prima occorrenza della sottostringa nella stringa principale.
```al
var
    MyLongString: Text[50];
begin
    MyLongString := 'HelloWorldOfManyManyCharacters';
    Message('%1', MyLongString.IndexOf('l'));   // Results in 3
end;
```

### CopyStr
Con la funzione **CopyStr**, puoi copiare una sottostringa da testo o codice. La funzione ha tre parametri, di cui l'ultimo è facoltativo.
La funzione CopyStr *potrebbe avere* tre parametri, di cui l'ultimo è facoltativo:
* **'sourceText'** è la stringa dalla quale si vuole copiare la sottostringa.
* **'startIndex'** è l'indice da cui iniziare a copiare la sottostringa.
* **'optionalLenght'** è la lunghezza facoltativa della sottostringa da copiare. Se non viene fornito, la funzione copierà dalla posizione 'startIndex' fino alla fine della stringa.

```al
var
    MyLongString: Text[50];
    newString: Text[10];
begin
    MyLongString := 'HelloWorldOfManyManyCharacters';
    newString := CopsyStr(MyLongString, 5, 10);
    Message('%1', newString);   // Results in 'oWorldOfMa'
end;
```

Il codice nell'esempio sopra restituirà una sottostringa che inizia dal quinto carattere. Restituirà 10 caratteri. Se non specifichi una lunghezza, restituirà tutti i caratteri fino all fine del testo. 

### Substring
È altresì fattibile sfruttare una variante .NET denominata **Substring**. Tuttavia, è essenziale essere consapevoli di una distinzione significativa. Nel caso in cui il parametro di lunghezza superi il numero di caratteri disponibili nella stringa, con la funzione Substring, si verificherà un errore. Diversamente, la funzione CopyStr non genererà un errore, ma restituirà una stringa contenente i caratteri effettivamente disponibili.

```al
var
    MyLongString: Text[50];
    newString: Text[10];
begin
    MyLongString := 'HelloWorldOfManyManyCharacters';
    newString := MyLongString.Substring(5, 10);
    Message('%1, newString);   // Results in 'oWorldOfMa';
end;
```

### SelectStr
La funzione **SelectStr** ha il compito di restituire una stringa da un testo che è separato da virgole. Nell'esempio che segue, la funzione **SelectStr** viene utilizzata per ottenere la seconda stringa dal testo separato da virgole.

```al
var 
    MyLongString: Text[50];
    newString: Text;
begin
    MyLongString := 'This, is a comma, separated, string';
    newString := SelectStr(2, MyLongString);
    Message('%1', newString);   // Results in 'is a comma'
end;
```

### Split
È altresì possibile impiegare una funzione della versione .NET denominata **Split**. Benché simile alla funzione **SelectStr**, la funzione **Split** opera in modo leggermente diverso. Richiede un parametro mediante il quale puoi specificare i caratteri di delimitazione. La funzione **Split** restituisce una lista di testi [List of Text], permettendoti di specificare l'indice dell'elemento che desideri recuperare.

```al
var 
    MyLongString: Text[50];
    newString: Text;
begin
    MyLongString := 'This, is a comma, separated, string';
    newString := MyLongString.Split('.'). Get(2);
    Message('%1', newString);   // Results in 'is a comma'
end;
```

La funzione Split può dividere anche per più caratteri. Se modifichi l'esempio per dividerlo anche su uno spazio vuoto, otterrai il seguente risultato.

```al
var 
    MyLongString: Text[50];
    newString: Text;
begin
    MyLongString := 'This, is a comma, separated, string';
    newString := MyLongString.Split(',', ' '). Get(2);
    Message('%1', newString);   // Results in 'is'
end;
```

### InsStr
La funzione InsStr inserisce una stringa in una determinata posizione in una stringa esistente.
```al
var 
    MyLongString: Text[50];
    newString: Text;
begin
    MyLongString := 'Press ENTER to continue';
    newString := InsStr(MyLongString, 'or ESC', 13);
    Message('%1', newString);   // Results in 'Press ENTER or ESC to continue.'
end;
```

### StrLen e MaxStrLen
Le funzioni **StrLen** e **MaxStrLen** sono impiegate per calcolare la lunghezza effettiva dei campi di testo e la lunghezza massima consentita per un campo di testo. Se si dispone di una variabile di tipo Text[50], ad esempio, MaxStrLen sarà pari a 50, anche se il contenuto effettivo è costituito da soli 10 caratteri. D'altra parte, StrLen restituirà la lunghezza effettiva della stringa, in questo caso, 10.
Queste funzioni sono spesso utilizzate in combinazione con CopyStr per estrarre il massimo numero di caratteri da una stringa, tenendo conto delle limitazioni della lunghezza massima specificate per il campo di testo.

```al
var
    MyLongString: Text[50];
    newString: Text[10];
begin
    MyLongString := 'HelloWorldOfManyManyCharacters';
    Message('STRLEN: %1', StrLen(MyLongString));   // Results in 30
    Message('MAXSTRLEN: %1', MaxStrLen(MyLongString));   // Results in 50
    newString := CopyStr(MyLongString, 5, MaxStrLen(newString));
    Message('%1', newString);   //Results in 'oWorldOfMa';
end;
```

### LowerCase, UpperCase, ToLower and ToUpper
Nel linguaggio AL, le funzioni per manipolare il caso delle stringhe sono simili a quelle di molti altri linguaggi di programmazione.
* **LowerCase**, converte tutti i caratteri di una stringa in minuscolo.

```al
text := Lowercase('Hello World');
// Il valore di 'text' sarà 'hello world'
```
* **UpperCase**, converte tutti i caratteri di una stringa in maiuscolo.

```al
text := Uppercase('Hello World');
// Il valore di 'text' sarà 'HELLO WORLD'
```
* **ToLowerCase** e **ToUpperCase**, questi metodi possono essere utilizzati sulle variabili di tipo testo per convertire la stringa corrente in minuscolo o maiuscolo rispettivamente.

```al
text := 'Hello World';
text := text.ToLowerCase();
// Il valore di 'text' sarà 'hello world'
text := 'Hello World';
text := text.ToUpperCase();
// Il valore di 'text' sarà 'HELLO WORLD'
```
Ricorda che queste funzioni eseguono le operazioni di cambio di caso senza modificare la stringa originale, ma restituiscono una nuova stringa con il caso appropriato applicato. Se desideri modificare direttamente la stringa originale, assegnane il risultato della funzione corrispondente.

### IncStr
La funzione **IncStr** aumenta un numero positivo o diminuisce di uno (1) un numero negativo all'interno di una stringa.

```al
NewString :=   Text.IncStr(String: Text)
```

Se String contiene più di un numero, verrà modificato solo il numero più vicino alla fine della stringa. Ad esempio, "A10B20" viene modificato in "A10B21" e "a12b12c" in "a12b13c".
Se String non contiene alcun numero, la stringa di output è una stringa vuota. Ad esempio, 'aaa' viene modificato in ''.
IncStr incrementa solo i numeri interi all'interno delle stringhe, non i decimali. Ad esempio, se chiami IncStr sulla stringa a99.99b, il risultato sarà a99.100b.

### Altre funzioni
AL supporta alcune funzioni di stringa dalla classe di stringhe .NET:
* **Contains**: verifica se una stringa contiene un carattere o una sottostringa.
* **EndsWith**: controlla se una stringa termina con un valore specifico.
* **IndexOfAny**: ottiene il primo indice di qualsiasi carattere. Restituisce zero se non viene trovato nessuno.
* **LastIndexOf**: ottiene il primo indice di un carattere o di una stringa. Restituisce zero se non ne viene trovato nessuno.
* **PadLeft**: allinea a destra i caratteri nell'istanza riempiendoli a sinistra per una lunghezza totale specificata. È possibile specificare quale carattere viene utilizzato per il riempimento.
* **PadRight**: allinea a sinistra i caratteri nell'istanza riempiendoli a destra per una lunghezza totale specificata. È possibile specificare quale carattere viene utilizzato per il riempimento.
* **Remove**: rimuove una sottostringa da un testo.
* **Replace**: Sostituisce una sottostringa da un testo.
* **Split**: divide il testo su uno o più caratteri di separazione.
* **StartsWith**: controlla se una stringa inizia con un valore specifico.
* **Substring**: restituisce una parte della stringa, a partire da un indice specifico con una certa lunghezza.
* **ToLower**: questa funzione cambierà tutti i caratteri in minuscolo.
* **ToUpper**: questa funzione cambierà tutti i caratteri in maiuscolo.
* **Trim**: rimuove tutti gli spazi vuoti iniziali e finali.
* **TrimEnd**: rimuove tutte le occorrenze finali di un set di caratteri.
* **TrimStart**: rimuove tutte le occorrenze iniziali di un insieme di caratteri.

### Funzioni DATA
In Business Central, gran parte dei dati è collegata alle date. Gli ordini cliente, le fatture o le note di credito hanno la data documento, data di registrazione e una data di movimentazione.
Quando si elaborano queste date nel codice, è possibile utilizzare alcune funzioni di data per ottenere informazioni specifiche da una data o per modificare una data in un formato specifico.

Le funzioni di dara utilizzate di frequente sono:
* Date2DMY e Date2DWY
* CalcDate
Le funzioni TODAY e TIME restituiscono la data e l'ora correnti. La funzione WORKDATE restituisce in data di lavoro impostata nell'applicazione.

#### Date2DMY
La funzione **Date2DMY** (o Date to Day, Month, Year) ti aiuta a ottenere parti specifiche da una certa data.
Number := Date2DMY(Date, What);
Il parametro What specifica cosa deve restituire la funzione.
1 - Corrisponde al giorno (1-31)
2 - Corrisponde al mese (1-12)
3 - Corrisponde all'anno

```al
// Today is 04/17/2020
Message('%1', Today());
// Displays: 04/17/2020
MyDatePart := Date2DMY(Today(), 1);
Message('%1', MyDatePart);
// Displays: 17
MyDatePart := Date2DMY(Today(), 2);
Message('%1', MyDatePart);
// Displays: 4
```

#### Date2DWY
La funzione **Date2DWY** (o Date to Day, Week, Year) ti aiuta a ottenere parti specifiche da una certa data.
Il parametro What specifica cosa deve restituire la funzione.
1- Corrisponde al giorno della settimana (1-7, lunedì = 1)
2- Corrisponde al numero della settimana (1-53)
3- Corrisponde all'anno

```al
// Today is 04/17/2020
Message('%1', Today());
// Displays: 04/17/2020
MyDatePart := Date2DWY(Today(), 1);
Message('%1', MyDatePart);
// Displays: 5
MyDatePart := Date2DWY(Today(), 2);
Message('%1', MyDatePart);
// Displays: 16
```
#### CalcDate
La funzione **CalcDate** ti aiuta a calcolare una nuova data, a partire da una certa data.
Nel parametro DateExpression, puoi fornire quanti giorni (G), settimane (W), mesi (M), trimestri (Q) o anni (Y) vuoi aggiungere o sottrarre. Se non si fornisce un parametro Date, viene utilizzata la data di sistema corrente.

```al
// Today is 04/17/2020
Message('%1', Today());
// Displays: 04/17/2020
Message('%1', CalcDate('1W', Today()));
// Displays: 04/24/2020
```

### Funzioni numeriche
Quando si lavora con dati numerici, potrebbe essere utili utilizzare alcune funzioni di sistema. Immagina di 
lavorare con importi numerici e di voler eseguire un calcolo su un importo e quindi arrotondare il risultato. La 
funzione **Round** può essere utilizzata per completare questa attività. Sono inoltre disponibili funzioni 
aggiuntive da utilizzare:
* Round
* Abs
* Power
* Random
* Randomize

#### Round
La funzione Round consente di arrotondare un numero. Come parametro, puoi fornire la precisione e la 
direzione.
Il numero e la precisione sono tipi di dati decimali. Precision è un parametro facoltativo e utilizza la 
funzione ReadRounding della CodeUnit 1, Application Management per impostazione predefinita.
NewNumber := Round(Number [, Precision] [, Direction]);
Il parametro Direction è un tipo di dati di testo e può avere questi valori:
* **\=**, Arrotonda per eccesso o per difetto al valore più vicino (predefinito). I valori pari a cinque o più sono arrotondati per eccesso; i valori inferiori a cinque sono arrotondati per difetto.
* **\>**, arrotonda per eccesso.
* **\<**, arrotonda per difetto. 

```al
NewNumber := Round(1234.56789, 0.001, '>');
Message('%1', NewNumber);
// Displays: 1,234.568
```

#### ABS
La funzione **Abs** calcolerà il valore assoluto di un numero. Il valore assoluto di un numero restituisce un valore numerico positivo o zero.

```al
NewNumber := Abs(-10.235);
Message('%1', NewNumber);
// Displays: 10.235
```

### Funzioni di Sistema
Le funzioni di sistema sono il tipo di funzioni che puoi utilizzare immediatamente. Non sono correlati a un determinato tipo id dati o utilizzati per l'interazione. Puoi trovarli in tutto il sistema e puoi usarli in ogni trigger o procedura.
Le funzioni del sistema includono:
* UserID
* CompanyName
* Today
* Time
* WorkDate

È possibile utilizzare la funzione **UserId** per sapere quale utente sta eseguendo il codice. Immagina di registrare un ordine e di voler tenere traccia di chi ha registrato l'ordine. La funzioni UserId ti aiuta a portare a termine questa attività.
Nel database logico potresti avere una o più società. Se vuoi capire il nome della società in cui è in esecuzione il codice, puoi utilizzare la funzione **CompanyName**. Questa funzione recupera il nome dell'azienda corrente.
La funzione **Today** è una funzione di data che è possibile utilizzare per ottenere la data corrente dal sistema operativo.

```al
Data := Today();
Message('%1', Data);
```

La funzione **Time** funziona allo stesso modo e restituisce l'ora corrente dal sistema operativo.

```al
Ora := Time();
Message('%1', Ora);
```

Con la funzione **WorkDate** è possibile ottenere o impostare la data di lavoro per la sessione corrente.

```al
var
    Data: Date;
begin
    Data := WorkDate();   // Get the work date
    WorkDate(Data);   // Set the work date
end;
```

### Funzioni delle variabili
Quando si esegue codice in Business Central, le variabili vengono inizializzate la prima volta con il loro valore predefinito.
Potresti voler reinizializzarli in occasioni in cui lavori in un ciclo e hai bisogno che le variabili abbiano i loro valori predefiniti.

Le funzioni variabili includono:
* Clear
* Clear All

Quando si lavora con variabili, ciascuna con un tipo di dati diverso, e si desidera assegnare un valore da un tipo di dati a un altro, occorre utilizzare le conversioni di tipo automatiche. Se questa opzione non è possibile, utilizzare le seguenti funzioni:

* Evaluate
* Format

La funzione **Clear** consente di cancellare o ripristinare una variabile. Questa funzione reinizializzerà il valore predefinito nella variabile.
La funzione **ClearAll** reimposta tutte le variabili (tranne la variabile Rec) ai valori predefiniti. Cancella anche tutte le chiavi e i filtri che sono stati impostati.

```al
var
    myText: Text[20];
begin
    myText := UserId;
    Clear(myText);   // Sets the variable myText to an empty string.
```

È possibile utilizzare la funzione **Evaluate** per convertire una variabile di tipo testo (codice o testo) in un altro tipo di dati (che non è testo).

```al
var
    myText: Text[20];
    myInteger: Integer;
begin
    myText := '5';
    Evaluate(myInteger, myText);
```

La funzione **Format** converte un tipo di dati in un tipo di dati di testo.

```al
var
    myText: Text[20];
    myInteger: Integer;
begin
    myText := 3;
    myText := Format(myInteger);
```

## Link utili
* [I vari tipi di funzioni](https://learn.microsoft.com/it-it/training/modules/al-built-in-functions/) 
