
# Page e Page Extensions

## Cosa sono le Pagine

Le **pagine** svolgono un ruolo centrale in Dynamcis 365 Business Central come principale **mezzo di visualizzazione e organizzazione** dei **dati**. Questi oggetti interattivi hanno comportamenti distinti in base al loro tipo e sono progettati per essere utilizzati su diversi dispositivi, come telefoni, tablet e client Web. 

Definite nel codice come oggetti composti da **controlli**, **proprietà**, **azioni** e **trigger**, le pagine possono essere create direttamente nel codice tramite il Designer in Dynamics 365 Business Central. Indipendentemente dal metodo di creazione, l'obiettivo è definire la struttura della pagina, che può essere una **nuova creazione** o un'**estensione di una pagina** esistente. 

![List Page example](/img/business-central/page8.png)

La **struttura** di una pagina è **gerarchica** e composta da tre sezioni:

- La **prima sezione** fornisce **metadati** per l'intera pagina, indicando il tipo di pagina e la tabella di origine dei dati.

- La **seconda sezione**, il **layout**, dettaglia gli apsetti visivi della pagina. 

- L'**ultima sezione** descrive le **azioni** pubblicate nella pagina, fornendo funzionalità aggiuntive o modificando quelle preesistenti. 

Inoltre, le pagine sono **dotate di proprietà**, che operano in modo simile a quelle di altri oggetti in Dynamics 365 Business Central, offrendo ulteriore personalizzazione. La flessibilità nella definizione e organizzazione delle pagine le rende un elemento chiave nell'esperienza utente all'interno del sistema.

![Page](/img/business-central/page1.png)

Le pagine servono allo scopo di input, output e controllo. Sono **visualizzazioni di dati** e **mezzi per l'inserimento dei dati** da parte dell'utente. Una pagina può essere **collegata** a una **tabella** di origine, ma non è necessario.

Una **pagina su BC** è composta da:

- **Proprietà**: sono caratteristiche di un oggetto che ne definiscono il suo stato, visualizzazione o valore. 
- **Trigger**: sono funzioni predefinite che sono eseguire in risposta a determinati eventi. 
- **Controls**: forniscono agli utenti modi per visualizzare, inserire e modificare dati, scegliere opzioni o comandi, avviare azioni e visualizzare lo stato. Hanno anche loro proprietà e trigger.
- **Actions**: sono elementi del menu. Hanno anche loro proprietà e trigger. 

## Tipi di Pagine

La **scelta** del **tipo di pagina** corretto è il primo passo quando si crea o si modifica una pagina. Il passaggio successivo consiste nell'**organizzare il contenuto** della pagina **in base allo scopo** della soluzione. E' consigliabile progettare le pagine in base alle attività utente che di desidera supportare. 


**Tipo di pagina** | **Esempi di utilizzo**| **Visualizzazione dei dati principali**| **Caratteristiche** |
 ----- | ----- | ----- | -----
 _RoleCenter_ | Panoramica delle prestazioni aziendali e della pagina iniziale per un profilo utente specifico| Definito dalle parti incorporare | Una raccolta di parti e il contenuto del riquadro di spostamento
 _Card_| Gestione dei dati di masterizzazione, riferimento e configurazione | Entità singola | Entità denominata con schede dettaglio. Può incorporare parti. 
 _Document_|Gestione delle transazioni e di altri documenti. | Entità singola | Entità denominato con schede dettaglio. Le righe del documento ListPart devono seguire immediatamente le sezioni dell'intestazione. 
 _ListPlus_ | Gestione delle statistiche, dei dettagli e dei relativi dati. | Entità singola| Entità titolata con almeno un file. Può contenere campi sopra o sotto le parti. _ListPart_
 _List_ | Panormaiche e navigazione delle entità e modifica in linea di entità semplici. | Raccolta di entità/voci| Un unico elenco con una didascalia. Può contenere gruppi di campi e sottopagine sopra e sotto l'elenco. _Repeater_
 _Worksheet_ | Attività di immissione dati basate su riga (ad esempio giornali di registrazione) e richieste di informazioni. | Raccolta di entità | Un singolo elenco o tabella con una didascalia. Può contenere gruppi di campi e sottopagine sopra e sotto il file. _Repeater_
 _StandardDialog_ | Finestra di dialogo di routine che avvia o fa progredire un'attività. | Singolo o da collezione| Una finestra di dialogo annullabile con un'istruzione per l'utente. Può avere uno o più gruppi di campi e parti. 
 _ConfirmationDialog_ | Finestra di dialogo di conferma o eccezionale, ad esempio avvisi. | Singolo o da collezione| Una finestra di dialogo Sì/No con un'istruzione per l'utente. Può avere uno o più gruppi di campi e parti. 
 _NavigatePage_ | Finestra di dialogo in più passaggi | Singolo o da collezione | Può avere uno o più gruppi di campi e parti. 
 _CardPart_ | Una pagina incorporata in un'altra pagina, ad esempio in un riquadro informazioni.| Entità singola| Singolo gruppo di campi che rappresentano i campi in una Scheda dettaglio. 
 _ListPart_| Una pagina incorporata in un'altra pagina, ad esempio in un riquadro informazioni. | Raccolta di entità/voci | Singola colonna che rappresenta in un elenco o in una tabella. Può avere campi sopra o sotto il ripetitore. 
 _HeadlinePart_| Una pagina incorporata in una pagina per visualizzare informazioni pertinenti provenienti da tutta l'azienda. | Entità singola | Singolo gruppo di campi che rappresentano i titoli. 
 _PromptDialo_| Una pagina che consente di creare esperienze di intelligenza artificiale generativa con l'aspetto del copilot| Singolo o da collezione.

 Vi sono **due categorie** principali di **tipi di pagina**:

 - **Orientato alle _entità_** 
 - **Orientato alla _raccolta_**

![Orientato alle entità](/img/business-central/page9.png)

I tipi di pagina **orientati alle entità** dispongono di azioni (nella parte superiore e nella barra delle azioni) che influiscono sull'entità o sul contesto fornito dal titolo della pagina.

![Orientato alla raccolta](/img/business-central/page10.png)

I tipi di pagina **orientati alla raccolta** forniscono azioni nella barra delle azioni (e nel menu delle azioni delle righe) che hanno effetto sulle righe selezionata nella raccolta.

## Page Properties

![Page Properties](/img/business-central/page6.png)

- **ID**: è un numero che deve essere compreso nell'intervallo di numeri che ricevi da Microsoft. 
- **Name**: deve avere un nome inglese e devi utilizzare un prefisso/suffisso nel nome del tuo progetto in modo che sia univoco. 
- **Caption**: la capiton è l'intestazione mostrata all'utente.
- **PageType**: come la pagina verrà mostrata. 
- **CardPageID**: l'id della pagina card da lanciare al doppio click della lista.
- **SourceTable**: è il nome della tabella a cui la pagine è collegata.
- **SourceTableView**: puoi definire i filtri o l'ordinamento della pagina.
- **SourceTableTemporary**: ci permette di usare una tabella temporanea come source table della pagina. 
- **DelayedInsert**: attende ad inserire il record finché l'utente non sposta il foucs sulla nuova riga da inserire. 

## Page Triggers

![Page Trigger](/img/business-central/page5.png)

L'immagine mostra la **lista dei trigger** in pagina. In generale, secondo le best practices, dovremmo **ridurre al minimo il codice AL** all'interno dei **trigger di pagina**, mettendo invece il codice in un trigger di tabella o campo o chiamando una funzione di libreria di codeunit. 

A volte, requisiti speciali di visualizzazione richiedono l'utilizzo di codice complesso all'interno di una pagina. E' importante che il codice in una pagina venga utilizzato solo per gestire la visualizzazione dei dati, non per la modifica dei dati. 

## Page Controls

![Controls](/img/business-central/page7.png)

Ci sono **cinque tipi di controlli** di pagina: **container**, **group**, **repeater**, **field** e **part**. I controlli container, group, repeater e field vengono utilizzati per definire l'area di contenuto delle pagine. I part controls vengono utilizzati per definire le FactBox e le sottopagine incorporate. 

- **Container**: definisce il livello root di una struttura di pagina.
- **Group/Repeater**: è la struttura di secondo livello. Sono le strutture con cui si organizzano i campi. Proprietà: Visible, Enabled, Editable.
- **Field**: dove si inseriscono i campi che mostreremo in pagina. Proprietà importanti: Visible, Enabled, Editable, HideValue, MultiLine, DecimalPlaces. 
- **Part**: sono usate per le factboxes e le sottopagine. 

## Page Actions

In Dynamics 365 Business Central, le azioni vengono visualizzate nella parte superiore di ogni pagina, denominate barra delle azioni. Le azioni possono essere visualizzate in diversi menu sulla barra delle azioni. 

![Actions](/img/business-central/page11.png)

E' possibile scegliere tra i seguenti menu di azione per posizionare le azioni nell'area specificata.

**Area**| **Sintassi** | **Utilizzato su** | **Descrizione** | **Esempio** 
 ---- |  ---- | ---- | ---- | ---- |
 Menu Azioni | _area(processing)_ | Gestione ruolo utente, elenco, scheda e pagine delle attività | Attività dell'utente | Registrare un ordine cliente
 Nuovo gruppo di documenti nel menu Azioni | _area(creation)_ | Pagine di elenco, scheda, Gestione ruolo utente e pagine delle attività| Azioni visualizzate nel gruppo Nuovo. Apre un documento di Dynamics 365 | Nuova fattura di vendita
 Menu di navigazione | _area(navigation)_ | Pagine di elenchi, schede e attività | Collegamenti ad altre pagine in Dynamcis 365 Business Central. | Prezzi
 Menu Segnala | _area(reporting)_ | Gestione ruolo utente, elenco, scheda e pagine delle attività | Un elenco dei report disponibili. | Elenco dei primi 10 clienti

 Le azioni seguenti sono correlate alla pagina Gestione ruolo utente.

 **Area** | **Sintassi** | **Utilizzato su** | **Descrizione** | **Esempio**
 ---- | ---- | ---- | ---- | ----
 Menu di navigazione | _area(sections)_ | Pagine di Gestione ruolo utente | La navigazione di primo livello è costituita da un o più elementi principali che si espandono per visualizzare un sottomenu di collegamenti ad altre pagine. | Fatture di vendita registrate
 Barra di navigazione | _area(embedding)_ | Pagine di Gestione ruolo utente | La navigazione di secondo livello visualizza un elenco semplice di collegamenti ad altre pagine. | Clientela

### Tipi di azioni

La **configurazione delle azioni** in una pagina **varia** in base al **tipo** di pagina e ai **processi** **supportati**. La creazione del set appropriato di azioni richede una profonda comprensione dei processi aziendali del cliente. Ogni processo organizzativo è associato a diverse azioni, e si consiglia di sviluppare un set completo che rifletta tutte le attività e i processi eseguiti.

Ad esempio, consideriamo la pagina dell'elenco "Ordini cliente" di CRONUS International, che comprende azioni legate al processo di elaborazione degli ordini cliente. Durante la configurazione e la personalizzazione dell'interfaccia utente, alcune di queste azioni possono essere nascoste.

### Menu Azioni

Il **menu Azioni** viene **visualizzato nella barra delle azioni** in tutti i tipi di pagina e **contiene le attività rilevanti** per la pagina corrente. In genere, le attività di elaborazione e le attività di creazione vengono aggiunte nel menu Azioni. 

È possibile aggiungere azioni al menu Azioni, raggrupparle nei sottomenu delle azioni o alzarle di livello sulla barra multifunzione.

### Menu Nuovo documento

Il **menu Nuovo documento** viene spesso **visualizzato sia** come **menu di primo livello** nella barra delle azioni che come **sottomenu** nel menu Azioni. Puoi utilizzare questo menu per aprire nuovi documenti all'interno di Dynamics 365. E'possibile aggiungere un'azione per creare un nuovo documento, ad esempio la creazione di una nuova fattura di vendita. Questa azione viene visualizzata in un menu separato denominato **Nuovo documento** nel menu Azioni.

Ad esempio, nella pagina Clienti, se l'elaboratore degli ordini desidera creare una nuova fattura, può aprire la nuova pagina direttamente dal menu Azioni, utile quando si creano nuove fatture di vendita ogni giorno.

### Menu di navigazione

Il **menu Naviga** viene visualizzato **dopo il menu Azioni** nella barra delle azioni. Anzichè fornire attività per l'utente, questo menu fornisce **informazioni aggiuntive** indirizzando l'utente a una pagina specifica. Per aggiungere un collegamento a una pagina nel menu Naviga, è necessario utilizzare l'area di azione. Queste azioni agiscono come un segnalibro per consentire l'accesso rapido alla visualizzazione di una pagina. 

:::note Nota
Non è consigliabile aggiungere un'azione di spostamento a una pagina Gestione ruolo utente.
:::

### Menu Segnala

Il **menu Report** viene visualizzato **dopo il menu Naviga** nella barra delle azioni. Il menu Report **elenca i report più rilevanti** per una pagina. Se un utente non richiede un menu Report, il menu è nascosto. A volte è importante promuovere i report più importanti a livello superiore nella barra delle azioni per evitare all'utente d fare troppi click. Per creare un'azione nel menu Report, è necessario utilizzare l'area delle azioni.


### Eseguire i flussi di Power Automare delle azioni della pagina

Con l'ondata di rilascio 2 di Business Central 2022, è possibile **definire azioni di pagina** che **attivano un flusso istantaneo di Power Automate** utilizzando azioni personalizzate. Le aizoni personalizzate vengono definite accanto ad altre azioni, ma utilizzano invece la parola chiave. La sintassi è la seguente:

```al
customaction(MyFlowAction)
{
    CustomActionType = Flow;
    FlowId = '<the-GUID-identifying-the-Power-Automate-Flow>';
    FlowEnvironmentId = '<the-GUID-identifying-the-Power-Automate-environment>';
    
}

```
Le proprietà **FlowId** e **FlowEnvironmentId** devono specificare gli **ID** del flusso e **l'ambiente** del flusso. Queste proprietà costituiscono l'identità del flusso di destinazione, consentendo al client di attivare il flusso quando viene richiamata l'azione personalizzata.

:::tip Suggerimento
E' possibiile ottenere gli ID del flusso e dell'ambiente in Power Automate. Accedi a **Power Automate** e apri il flusso per la modifica. Quindi, ottieni l'ID dell'ambiente e l'ID del flusso dall'URL nell'indirizzo del browser.
::: 

## Page Extension

L'oggetto estensione pagina **estende un oggetto pagina** Dynamics 365 Business Central e **aggiunge** o **sostituisce la funzionalità**.

La struttura di una pagina è gerarchica e si suddivide in tre sezioni. Il primo blocco contiene i metadati per l'intera pagina; Il tipo dipagina e la tabella di origine da cui vengono visualizzati i dati. La sezione successiva; il layout, descrive le parti visive della pagina. La sezione finale descrive in dettaglio le azioni pubblicate nella pagina.

:::note Nota
Gli oggetti estensione possono avere un nome con una lunghezza massima di 30 caratteri.
:::

:::important Importante
Una pagina di tipo _API page_ non può essere estesa creando un oggetto estensione di pagina. Crea invece una nuova pagina API aggiungendo un nuovo **oggetto pagina**.
:::

Digitando il collegamento verrà creato il layout di base per un oggetto estensione di pagina quando si utilizza l'estensione del linguaggio AL per Microsoft Dynamics 365 Business Central in Visual Studio Code.

:::tip Suggerimento
Usare **CTRL+BARRA SPAZIATRICE** per attivare IntelliSense e ottenere assistenza per il completamento del codice, le informaizoni sui parametri, le informazini rapide e gli elenchi di membri.
:::

### Utilizzo di parole chiave per inserire azioni e controlli

E' possibile utilizzare le seguenti parole chiave nella sezione per inserire e spostare campi e gruppi nell'estensione di pagina. 

**Parole chiavi** | **Sintassi** | **Si applica a**
 ---- | ---- | ---- 
 _addfirst_ | _addfirst(Anchor)_ | **Ancoraggio**: aree e gruppi
 _addlast_ | _addlast(Anchor)_ | **Ancoraggio**: aree e gruppi
 _addafter_ | _addafter(Anchor)_ | **Ancoraggio**: controlli, azioni e gruppi
 _addbefore_ | _addbefore(Anchor)_ | **Ancoraggio**: controlli, azioni e gruppi 
 _movefirst_ | _movefirst(Anchor; Target1, Target2)_ | **Ancoraggio**: area, gruppo. **Destinazione**: elenco di azioni o elenco di controlli
 _movelast_ | _movelast(Anchor; Targer1, Target2)_ | **Ancoraggio**: area, gruppo. **Destinazione**: elenco di azioni o elenco di controlli
 _moveafter_ | _moveafter(Anchor; Target1, Target2)_ | **Ancoraggio**: controlli, azioni e gruppi. **Destinazione**: elenco di aizoni o elenco di controlli
 _movebefore_ | _movebefore(Anchor; Target1, Target2)_ | **Ancoraggio**: controlli, azioni e gruppi. **Destinazione**: elenco di azioni o elenco di controlli.
 _modify_ | _modify(Target)_ | **Destinazione**: controlli, azioni e gruppi

### Esempio - Page Extension
Nell'esempio seguente viene utilizzata un'estensione di tabella per estendere la tabella Customer con un nuovo campo denominato del tipo di dati Integer. Viene quindi creato un oggetto estensione di pagina che estende l'oggetto pagina Scheda cliente aggiungendo un controllo campo al gruppo nella pagina. Il controllo campo viene aggiunto come ultimo controllo del gruppo utilizzando il metodo. 

Nell'esempio viene inoltre illustrato come aggiungere un controllo di sola visualizzazione alla pagina. Nell'area delle azioni è possibile visualizzare l'aspetto della sintassi per le azioni che eseguono trigger e le azioni che eseguono oggetti.

```al
tableextension 50115 RetailWinterSportsStore extends Customer
{
    fields
    {
        field(50116;ShoeSize;Integer)
        {
            Caption = 'ShoeSize';
            
            trigger OnValidate();
            begin
                if (rec.ShoeSize < 0) then
                begin
                   message('Shoe size not valid: %1', rec.ShoeSize);
                end;
            end;
        }
    }

    procedure HasShoeSize() : Boolean;
    begin
        exit(ShoeSize <> 0);
    end;

    trigger OnBeforeInsert();
    begin
        if not HasShoeSize then
            ShoeSize := Random(42);
    end;
}

pageextension 50110 CustomerCardExtension extends "Customer Card"
{
    layout
    {
        addlast(General)
        {
            // control with underlying datasource
            field("Shoe Size"; ShoeSize)
            {
                ApplicationArea = All;

                trigger OnValidate();
                begin
                    if (ShoeSize < 10) then
                        Error('Feet too small');
                end;
            }
            // display-only control (without underlying datasource)
            field(ShoesInStock; 10)
            {
                ApplicationArea = All;
                Caption = 'Shoes in stock';

            }
        }

        modify("Address 2")
        {
            Caption = 'New Address 2';
        }
    }

    actions
    {
        addlast(Creation)
        {
            group(MyActionGroup)
            {
                Action(MyAction1)
                {
                    ApplicationArea = All;
                    Caption = 'Hello!';

                    trigger OnAction();
                    begin
                        Message('My message');
                    end;
                }

                Action(MyAction2)
                {
                    ApplicationArea = All;
                    
                    // Run page to test how actions work
                    RunObject = page "Absence Registration";                    
                }
            }
        }
    }
}
```





## Link Utili:
* [Pages overview](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/devenv-pages-overview)
* [Page Object](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/devenv-page-object)
* [Page Extension](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/devenv-page-ext-object)
* [Page Types](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/devenv-page-types-and-layouts)
* [Page Actions](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/devenv-actions-overview)