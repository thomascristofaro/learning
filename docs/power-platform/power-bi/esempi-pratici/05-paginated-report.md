# Creare un report impaginato e caricare
Questa esercitazione spiega come connettersi a un database SQL di Azure di esempio, utilizzare una procedura guidata in Power BI Generatore report per creare un report impaginato con una tabella che esegue il wrapping in più pagine e successivamente caricare il report impaginato in qualsiasi area di lavoro nel servizio Power BI.

![Power BI Desktop](/img/power-platform/exc-bi/bi-104.png)

Questa esercitazione illustra come:
- Creare un database di esempio di Azure.
- Creare una matrice in Power BI Generatore report con l'aiuto di una procedura guidata.
- Formattare il report con titolo, numeri di pagina e intestazioni di colonna in ogni pagina.
- Formattare la valuta.
- Caricare il report nel servizio Power BI.

### Prerequisiti
Ecco i prerequisiti per la creazione del report impaginato:
- Installare gratuitamente Power BI Generatore report dall'Area download Microsoft.
- Se non hai una sottoscrizione di Azure, crea un [account gratuito](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- Seguire la guida introduttiva Creare un database SQL di Azure nell'portale di Azure. Copiare e salvare il valore nella casella Nome server della scheda Panoramica . Ricordare il nome utente e la password creati in Azure.

I requisiti di licenza per la pubblicazione di report impaginati di Power BI (file con estensione rdl) sono gli stessi dei report di Power BI (file con estensione pbix).
- Con una licenza gratuita, è possibile pubblicare report impaginati nell'area di lavoro personale nel servizio Power BI. 
- Con una licenza di Power BI Pro o una licenza PPU, è possibile pubblicare report impaginati in altre aree di lavoro. È anche necessario almeno un ruolo di collaboratore nell'area di lavoro.

### Creare la matrice con una procedura guidata
1. Avviare Power BI Report Generator dal computer.
   Verrà visualizzata la finestra di dialogo **Attività iniziali**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-105.png)

2. Nel riquadro sinistro verificare che l'opzione **Nuovo report** sia selezionata e nel riquadro destro selezionare **Creazione guidata** tabella o matrice.
3. Nella pagina **Scegliere un set di dati** selezionare **Crea un set di dati>Avanti**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-106.png)

4. Nella pagina Scegliere una **connessione a un'origine dati** selezionare **Nuovo**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-107.png)

   Verrà visualizzata la finestra di dialogo **Proprietà origine dati**.

5. È possibile assegnare un nome a un'origine dati qualsiasi elemento desiderato, usando caratteri e caratteri di sottolineatura. Per questa esercitazione, nella casella **Nome** digitare **MyAzureDataSource**.
6. Nella casella seleziona **tipo di connessione**, selezionare **database SQL di Microsoft Azure**.
7. Selezionare **Compila** accanto alla casella **stringa di Connessione ion**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-108.png)

   Verrà visualizzata la finestra di dialogo Proprietà Connessione ion.

8. Tornare al portale di Azure e selezionare **Database SQL**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-109.png)

9. Selezionare il database SQL di Azure creato nell'argomento di avvio rapido "Creare un esempio di database SQL di Azure nella portale di Azure" nella sezione **Prerequisiti** di questo articolo.
10. Nella scheda **Panoramica** copiare il valore nella casella **Nome server**.
11. Tornare a **Generatore report**. Nella finestra di dialogo **Proprietà Connessione ion** in **Nome server** incollare il nome del server copiato.
12. Per Accedere al server, assicurarsi che l'opzione **Usa autenticazione di SQL Server** sia selezionata, quindi digitare il nome utente e la password creati in Azure per il database di esempio.
13. In **Connessione a un database** selezionare la freccia a discesa e selezionare il nome del database creato in Azure.

      ![Power BI Desktop](/img/power-platform/exc-bi/bi-110.png)

14. Selezionare **Test connessione**. Viene visualizzato il messaggio Test results that Test connection succeeded .You see the Test results message that ***Test connection succeeded***.
15. Seleziona **OK>OK**.   
   Nella casella stringa di Connessione ion Generatore report viene visualizzata la stringa di connessione appena creata.

      ![Power BI Desktop](/img/power-platform/exc-bi/bi-111.png)

16. Seleziona **OK**.
17. Nella pagina **Scegliere una connessione a un'origine dati** viene visualizzato "(in questo report)" nella connessione all'origine dati appena creata. Selezionare l'origine **>dati Avanti**.

      ![Power BI Desktop](/img/power-platform/exc-bi/bi-112.png)

18. Immettere lo stesso nome utente e la stessa password nella casella **>Avanti**.
19. Nella pagina **Progettare una query** espandere **SalesLT**, espandere **Tabelle** e selezionare queste tabelle:
   - Indirizzo
   - Cliente
   - Prodotto
   - ProductCategory
   - SalesOrderDetail
   - SalesOrderHeader
   Poiché l'opzione Rileva automaticamente relazioni>è selezionata, Generatore report rileva le relazioni tra queste tabelle.  

      ![Power BI Desktop](/img/power-platform/exc-bi/bi-113.png)

20. Selezionare **Esegui query**. Generaore report visualizza **Risultati** della query.

      ![Power BI Desktop](/img/power-platform/exc-bi/bi-114.png)

21. Selezionare Avanti.
22. Nella pagina **Disponi campi** trascinare questi campi dalla casella **Campi disponibili** nella casella **Gruppi di righe**:
- CompanyName
- SalesOrderNumber
- Product_Name
23. Trascinare questi campi dalla casella Campi disponibili nella casella Valori:
- OrderQty
- UnitPrice
- LineTotal
   Generatore report fatto automaticamente i campi nel Somme di caselle di valori.
   ![Power BI Desktop](/img/power-platform/exc-bi/bi-115.png)

24. Nella pagina **Scegli il layout** mantenere tutte le impostazioni predefinite, ma deselezionare la casella di controllo accanto a **Espandi/comprimi gruppi**. In generale, la funzionalità gruppi di espansione/compressione è ideale, ma questa volta si vuole che la tabella venga disposta a capo in più pagine.
25. Selezionare **Next>Finish** (Avanti > Fine). La tabella viene visualizzata nell'area di progettazione. 

### Elementi creati
Sospendiamo nde per un momento per esaminare i risultati della procedura guidata.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-116.png)

1. Nel riquadro **Dati report** vengono visualizzati l'origine dati incorporata di Azure e il set di dati incorporato in base a esso, entrambi creati.
2. L'area di progettazione è larga circa 6 pollici. Nell'area di progettazione viene visualizzata la matrice, visualizzando intestazioni di colonna e valori segnaposto. La matrice ha sei colonne e sembra essere alta solo cinque righe.
3. **Order Qty, Unit Price e Line Total** sono tutti somme e ogni gruppo di righe ha un subtotale.
   Non vengono ancora visualizzati valori di dati effettivi. È necessario eseguire il report per visualizzarli.
4. Nel riquadro **Proprietà** la matrice selezionata è denominata Tablix1. Una *Tablix* in Generatore report è un'area dati che visualizza i dati in righe e colonne. Può essere una tabella o una matrice.
5. Nel riquadro **Raggruppamento** vengono visualizzati i tre gruppi di righe creati nella procedura guidata:
- CompanyName
- Ordine cliente
- Nome prodotto

   Questa matrice non include gruppi di colonne.

### Eseguire il report
Per visualizzare i valori effettivi, è necessario eseguire il report.
1. Selezionare "Esegui" nella barra degli strumenti **Home**.
   Ora i valori vengono visualizzati. La matrice contiene molte più righe rispetto a quelle visualizzate nella visualizzazione Struttura. Si noti che il Generatore di report indica che è la pagina 1 di 2? Il Generatore di report carica il report il più velocemente possibile, quindi recupera solo dati sufficienti per alcune pagine alla volta. Il punto interrogativo indica che il Generatore di report non ha ancora caricato tutti i dati.
   
   ![Power BI Desktop](/img/power-platform/exc-bi/bi-117.png)

2. Selezionare **Layout di stampa**. Il report sarà in questo formato quando viene stampato. Generatore report ora sa che il report ha 33 pagine e ha aggiunto automaticamente un indicatore di data e ora nel piè di pagina.

### Formattare il report
È ora disponibile un report con una matrice che esegue il wrapping in 33 pagine. Aggiungere altre funzionalità e migliorare l'aspetto. È possibile eseguire il report dopo ogni passaggio, se si vuole vedere come si procede.
- Nella scheda **Esegui** della barra multifunzione selezionare **Progettazione**, quindi è possibile continuare a modificarla.

### Imposta larghezza pagina
In genere un report impaginato viene formattato per la stampa e una pagina tipica è 8 1/2 X 11 pollici.
1. Trascinare il righello per fare in modo che l'area di progettazione sia larga 7 pollici. I margini predefiniti sono di 1 pollice su ogni lato, quindi i margini laterali devono essere più stretti.
2. Fare clic nell'area grigia intorno all'area di progettazione per visualizzare le proprietà del report .
Se il riquadro Proprietà non viene visualizzato, selezionare la scheda **>Visualizza Proprietà**.
3. Espandere **Margini** e modificare Sinistra e Destra da 1 pollice a 0,75 pollici.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-118.png)

### Aggiungere un titolo al report
1. Selezionare le parole *Fare clic per aggiungere il titolo nella parte superiore della pagina*, quindi digitare *Sales by Company*.
2. Selezionare il testo del titolo e nel riquadro **Proprietà** in **Carattere** impostare **Colore su Blu**.

### Aggiungere un numero di pagina
Si è notato che il report ha un indicatore di data e ora nel piè di pagina. È anche possibile aggiungere un numero di pagina al piè di pagina.
1. Nella parte inferiore dell'area di progettazione viene visualizzato **[&ExecutionTime]** a destra nel piè di pagina.
2. Nel riquadro **Dati** report espandere la cartella **Campi predefiniti**. Trascinare **Numero pagina** sul lato sinistro del piè di pagina, con la stessa altezza di **[&ExecutionTime]**.
3. Trascinare il lato destro della casella **[&PageNumber]** per renderlo quadrato.
4. Nella scheda **Inserisci** selezionare **Casella di testo**.
5. Fare clic a destra di **[&PageNumber]**, digitare "of", quindi impostare il quadrato della casella di testo.
6. Trascinare **Overall Total Pages** sul piè di pagina, a destra di "of", quindi trascinarne il lato destro per renderlo quadrato.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-119.png)

### Ingrandire la tabella
Ora è possibile rendere la matrice sufficientemente ampia da riempire la larghezza della pagina e rendere più ampie le colonne di testo in modo che i nomi non scorrono così tanto.
1. Selezionare la matrice e quindi selezionare la colonna **Nome società**.
2. Passare il puntatore del mouse sulla barra grigia nella parte superiore della matrice al bordo destro della colonna **Nome società**. Trascinare a destra, fino a quando la colonna termina a 1 3/8 pollici.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-120.png)

3. Trascinare il bordo destro di **Product Name** fino a quando la colonna termina a 3 3/4 pollici.

Ora la matrice è quasi larga dell'area di stampa.

### Formattare la valuta
Se si è notato quando è stato eseguito il report, gli import in dollari non vengono ancora formattati come valuta.
1. Selezionare la cella [Sum(OrderQty)] *in alto a sinistra*, tenere premuto MAIUSC e selezionare la cella [Sum(LineTotal)] *in basso a destra*.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-121.png)

2. Nella scheda **Home** selezionare il simbolo di valuta del segno di dollaro ($) e quindi selezionare la freccia accanto a **Stili>segnaposto Valori** di esempio.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-122.png)

   Ora è possibile visualizzare i valori formattati come valuta.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-123.png)

### Aggungere intestazioni di colonna in ogni pagina
Un ulteriore miglioramento della formattazione prima di pubblicare il report nella servizio Power BI: rendere le intestazioni di colonna visualizzate in ogni pagina del report.
1. Nell'estremità destra della barra superiore del riquadro **Raggruppamento** selezionare la freccia> a discesa **Modalità avanzata**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-124.png)

2. Selezionare la **barra statica superiore** in **Gruppi di righe**. Si noterà che la cella Nome società nella matrice è selezionata.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-125.png)

3. Nel riquadro **Proprietà** si esaminano le proprietà del membro **Tablix**. Impostare **KeepWithGroup** su **After** e **RepeatOnNewPage** su **True**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-126.png)

   È il momento di eseguire il report e vedere come appare ora.

4. Selezionare **Esegui** nella **scheda Home**.
5. Selezionare **Layout di stampa**, se non è già selezionato. Il report include ora 29 pagine. Scorrere alcune pagine. Si noterà che la valuta è formattata, le colonne hanno intestazioni in ogni pagina e il report ha un piè di pagina con numeri di pagina e data e timestamp in ogni pagina.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-127.png)

6. Salvare il report nel computer.

### Caricare il report nel servizio
Dopo aver creato questo report impaginato, è possibile caricarlo nel servizio Power BI.
1. Nel riquadro di spostamento servizio Power BI selezionare **Aree di>lavoro Crea area di lavoro**.
2. Denominare l'area di lavoro **Azure AW** o un altro nome univoco. Per il momento sei l'unico membro.
3. Nella nuova area di lavoro selezionare **Carica>sfoglia**. Passare al percorso in cui è stato salvato il file **>Apri**.
   Power BI importa il file e viene visualizzato in **Report** nella pagina Elenco app.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-128.png)

4. Selezionare il report per visualizzarlo.
5. Se viene visualizzato un errore, potrebbe essere necessario immettere nuovamente le credenziali. Selezionare i puntini di sospensione a destra del report, quindi scegliere **Gestisci**.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-129.png)

6. Selezionare **Modificare credenziali** e immettere le credenziali usate in Azure al momento della creazione del database di Azure.

   ![Power BI Desktop](/img/power-platform/exc-bi/bi-130.png)

7. È ora possibile visualizzare il report impaginato nel servizio Power BI.


