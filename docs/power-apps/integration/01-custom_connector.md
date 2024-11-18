# Connettori personalizzati

I **connettori** semplificano la **connessione di app** e **flow maker** ad altre app, dati e dispositivi nel cloud nei seguenti modi:

- La connessione viene eseguita in un modo coerente e ripetibile che può essere rilevato dai produttori.

- I connettori hanno azioni che consentono ai produttori di controllare quando viene eseguita un'operazione.

- I connettori possono avere trigger che consentono l'avvio dell'automazione quando si verifica l'evento di attivazione.

![Connector](/img/power-apps/target.png)

Un connettore è un **proxy**, o **wrapper**, **attorno a un'API** che consente a Power Automate, Power Apps e App per la logica di **comunicare con il servizio sottostante**. Molti connettori sono predefiniti e disponibili per l'uso senza che tu debba definire nulla. Queste definizioni di connettore integrate includono servizi di Microsoft e altri. Quando il servizio o l'API che desideri utilizzare non dispone di un connettore predefinito, puoi creare il tuo connettore personalizzato. 

## Identificare o creare l'API
La prima attività è verificare il **riferimento al connettore** per determinare se esiste già un connettore adatto per l'API/servizio. Se non esiste già un connettore adatto, puoi creare il tuo connettore personalizzato. Puoi definire il connettore personalizzato per descrivere qualsiasi API REST pubblica (disponibile su Internet) o privata (solo sulla rete interna). Le API private richiedono il **gateway dati locale** per accedere alle risorse interne.

Se non esiste già un'API compatibile, gli sviluppatori possono crearne una utilizzando qualsiasi tecnologia preferita in grado di ospitare un'API REST, incluse **Funzioni di Microsoft Azure** e **Servizi app di Azure**. È anche possibile usare **Gestione API di Azure** per aumentare la gestibilità e la governance delle API.

## Descrivere l'API
Affinché Power Apps e Power Automate possano scoprire quali **trigger** e **azioni** sono **disponibili** dall'API, devi **identificarli** quando **crei il connettore personalizzato**. Puoi eseguire questa attività modificando manualmente la definizione del connettore nel portale del produttore o importando una definizione in un formato supportato. Questo processo include l'identificazione dei requisiti di autenticazione per l'API.

### Connettori personalizzati

**Esercizio proposto** : [Esercizio: Creare un nuovo connettore in una soluzione](https://learn.microsoft.com/en-us/training/modules/get-started-custom-connector/4-build) 

**Obiettivo**: In questo esercizio creerai il tuo primo connettore personalizzato per un'API esistente denominata Contoso Invoicing.

## Utilizza un connettore personalzzato

I connettori personalizzati possono essere usati da Power Apps, Power Automate e App per la logica di Azure. Dopo aver selezionato un connettore personalizzato, utilizzarlo non è diverso dall'utilizzare un connettore integrato. Per utilizzare il connettore personalizzato con Power Apps e Power Automate, devi **configurarlo** o **distribuirlo** nello **stesso ambiente** in cui stai creando le **tue app** e i tuoi flussi. Se sai che si tratta di un connettore personalizzato, il modo più rapido per aggiungere trigger o azioni da esso è selezionare la scheda Personalizzato perché mostrerà solo i connettori personalizzati nell'ambiente. Dall'ambiente puoi selezionare trigger e azioni come faresti con un connettore integrato.

![Custom Action](/img/power-apps/custom-action.png)
 
Assicurati che le azioni e i trigger del connettore personalizzato dispongano di un riepilogo descrittivo in modo che gli utenti possano trovarlo più facilmente con la funzione di ricerca.

La **prima volta** che utilizzi il connettore personalizzato nell'app o nel flusso, ti verrà richiesto di **fornire la chiave o le credenziali dell'app**, a seconda del tipo di autenticazione del connettore. Questa azione stabilirà una connessione con il connettore che potrà essere riutilizzata se si utilizza nuovamente il connettore nello stesso ambiente.

Se desideri utilizzare il connettore personalizzato in altri ambienti, assicurati di distribuire o configurare il connettore personalizzato in ciascuno di tali ambienti. Un esempio comune di questo scenario sarebbe avere un set di ambienti di sviluppo, test e produzione per il tuo progetto.

Puoi scegliere tra le seguenti opzioni per distribuire il connettore personalizzato in ciascuno degli ambienti:

- **Download e importazione**: dall'elenco dei connettori personalizzati è possibile selezionare l'icona di download e quindi scaricare la definizione API aperta.

- **Soluzioni**: i connettori personalizzati creati nel contesto di una soluzione, come il connettore creato nell'esercizio precedente, possono essere esportati e importati in un altro ambiente per il riutilizzo. Dopo l'importazione della soluzione non è necessaria alcuna configurazione aggiuntiva del connettore. 

- **Riga di comando**: utilizzando l'interfaccia della riga di comando (CLI) dei connettori Microsoft Power Platform, puoi anche scaricare e importare le definizioni dei connettori personalizzati. Per ulteriori informazioni, consulta CLI dei connettori Microsoft Power Platform.

Per usare lo stesso connettore personalizzato per un'app in App per la logica di Azure, assicurarsi di ricreare il connettore nella sottoscrizione di Azure. Questa attività può essere eseguita utilizzando il download o l'approccio dell'interfaccia della riga di comando menzionato in precedenza. Durante il processo di creazione della connessione personalizzata di App per la logica di Azure, ti verrà richiesto di importare il file OpenAPI scaricato. Dopo aver configurato il connettore personalizzato, è possibile usarlo in App per la logica di Azure nello stesso modo in cui lo utilizzeresti in Power Apps o Power Automate.

E' possibile **creare connettori personalizzati** per **integrare app Canvas** o **Model-Driven Apps** con altre applicazioni non Microsoft. In **Microsoft Power Platform**, puoi **utilizzare Power Automate** per **creare flussi** di lavoro che **connettono diverse applicazioni** e **servizi**. Puoi anche creare connettori personalizzati utilizzando Azure Logic Apps.

Ecco una breve panoramica di come puoi procedere:

- Vai su **Power Automate** (https://flow.microsoft.com/) e crea un nuovo flusso.
Puoi utilizzare i connettori esistenti per molte applicazioni popolari.
Se non trovi un connettore per l'app specifica che desideri integrare, puoi comunque usare azioni personalizzate come l'invio di richieste HTTP per comunicare con API di terze parti.
Azure Logic Apps:

- Vai su **Azure Portal** (https://portal.azure.com/) e crea una nuova Azure Logic App.
In Azure Logic Apps, puoi utilizzare diversi connettori predefiniti, ma puoi anche creare i tuoi connettori personalizzati utilizzando Azure Functions o API Web App.
Puoi scrivere codice personalizzato per gestire l'integrazione con le API delle applicazioni non Microsoft.
Connessione con API:

- Se l'applicazione esterna fornisce un'API, puoi creare connettori personalizzati che utilizzano l'azione "**Richiesta HTTP**" nei flussi di Power Automate o mediante il codice personalizzato in Azure Logic Apps.
Power Apps:


## Link

- [Inizia con i connettori personalizzati](https://learn.microsoft.com/en-us/training/modules/get-started-custom-connector/1-introduction)

- [Utilizzare connettore](https://learn.microsoft.com/en-us/training/modules/get-started-custom-connector/5-use)


