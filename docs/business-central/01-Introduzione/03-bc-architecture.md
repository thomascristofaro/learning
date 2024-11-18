# Architettura BC

### Agenda
* Cos'è un'architettura software
* Evoluzioni architetture ERP
* Modello Client-Server
* Modello 3-Tier
* Cloud Environment

### Cos'è un'architettura software?
L'**architettura software è l'organizzazione fondamentale** di un sistema, definita dai suoi componenti, dalle relazioni reciproche tra i componenti e con l'ambiente, e i principi che ne governano la progettazione e l'evoluzione. 
L'architettura è la **struttura generale di un sistema**, che definisce la sua **organizzazione logica**, le sue componenti e le loro interazioni. L'architettura può essere vista come una **descrizione ad alto livello** di un sistema, che fornisce una **visione complessiva del sistema** stesso e delle sue funzionalità.
Definisce la suddivisione del sistema in **componenti funzionali**, la loro organizzazione gerarchica, le **modalità di interazione** tra le componenti e i **protocolli di comunicazione** tra i vari elementi del sistema. 
Descrivere l'architettura significa quindi elencarne le sottoparti costituenti ed illustrarne i rapporti interfunzionali. 
L'implementazione di architetture software complesse spesso dà vita a **piattaforme software**.
L'architettura del sistema deve essere progettata in modo da garantire le **prestazioni**, la **scalabilità**, la **sicurezza** e la **manutenibilità** del sistema stesso.

### Evoluzioni architetture ERP
* Architettura Mainframe
* Architettura Client-Server (2-Tier)
* Architettura a tre livelli (3-Tier)
* Architettura Cloud

### Architettura Mainframe
I **sistemi legacy** sono di solito costruiti sulla base dell'architettura mainframe, il che significa che tutta la potenza di elaborazione risiede in un computer centrale che elabora i dati (**mainframe**) e l'output viene visualizzato su stazioni di lavoro con poca o nessuna capacità di elaborazione (**terminal**). 

Questi sistemi monolitici sono stati utilizzati fin dagli anni '60 e fino agli anni '90 sono stati l'unico mezzo per gestire i vasti requisiti di elaborazione dati delle grandi organizzazioni. 

Al giorno d'oggi la maggior parte del software ERP è stato progettato con tecnologie più recenti. 

Tuttavia, i mainframe sono ancora in uso presso alcune aziende, principalmente per eseguire transazioni come trasferimenti bancari. 

Questo tipo di architettura presenta un **elevato grado di affidabilità e velocità**, ma ha grandi **limitazioni sulla flessibilità e scalabilità**.

   ![mainframe](/img/business-central/mainframe.png)

Un esempio è il software AS/400 di IBM: l'architettura si basa su una struttura monolitica, in cui il software e l'hardware sono strettamente integrati, utilizzando un processore e un sistema operativo proprietario.

### Architettura Client-Server (2-Tier)
L'architettura prevede due livelli logici distinti: **il client e il server**.
Funzionamento: un software client fa richiesta a un server più potente per utilizzare una risorsa condivisibile come applicazioni o dati. Il server accetta le richieste dai client e condivide le sue risorse. Le richieste/risposte sono effettuate attraverso una rete. 

Il **client (front-end)**, installato sull’utente, è responsabile della **presentazione dell'interfaccia utente** e della raccolta delle informazioni inserite dall'utente, ma non ha la responsabilità di gestire i dati. In genere è di limitata complessità. Esempio: nel web il software client è il web browser, e parla con un server web attraverso il protocollo HTTP

Il **server (back-end)**, gestisce l'elaborazione dei dati e il recupero delle informazioni richieste dal client. Il server è responsabile della logica di **business dell'applicazione e della gestione dei dati**.

Questo tipo di architettura ha permesso di ottimizzare il traffico di rete, migliorare la gestione della sicurezza e dell'accessibilità delle informazioni.

   ![c-s-2-tier](/img/business-central/c-s-2-tier.png)

L'architettura 2-tier è stata utilizzata per la prima volta negli anni '80 per sviluppare applicazioni basate su reti locali. 
Il server era solitamente un database o un'applicazione gestionale, mentre il client era costituito da un software applicativo installato su un singolo computer.

### Architettura a tre livelli (3-Tier)
L'architettura a tre livelli (3-tier) è uno dei **modelli distribuiti più diffusi**, in cui le funzionalità dell'applicazione sono suddivise in tre strati o livelli:

* **Presentation tier (Livello di presentazione)**: è responsabile dell'interazione con l'utente finale, fornendo un'interfaccia grafica e un'esperienza utente intuitiva. In questo livello vengono eseguite le attività di rendering delle pagine web e l'elaborazione delle richieste dell'utente.
* **Application tier (Livello di applicazione)**: il livello di applicazione gestisce le funzionalità dell'applicazione e la business logic, eseguendo le operazioni richieste dall'utente e fornendo i risultati al livello di presentazione. In questo livello vengono eseguiti anche i controlli di validazione dei dati e la gestione degli errori.
* **Data tier** (Livello di dati): il livello di dati è responsabile della gestione dei dati dell'applicazione, mantenendo i dati in un database. In questo livello vengono eseguite le operazioni di interrogazione e modifica dei dati.

   ![3-tier](/img/business-central/3-tier.png)

Il modello 3-tier è stato introdotto a metà degli anni '90, quando l'architettura client-server stava diventando sempre più diffusa, ed ha permesso di separare le funzionalità dell'applicazione in modo più chiaro, semplificando lo sviluppo, la manutenzione e l'evoluzione dell'applicazione stessa. 

Questo tipo di architettura permette una **maggiore scalabilità, flessibilità e affidabilità**, in quanto le funzionalità dell'ERP possono essere distribuite su più server e gestite in modo separato.

#### Tipologie di Presentation tier

   ![presentation-tier](/img/business-central/presentation-tier.png)

Al giorno d'oggi esistono due grandi macro-categorie:
* **Multi-page application** (Web dinamico o 2.0 o tradizionale): è un'applicazione web nella quale ogni pagina viene generata sul server e inviata al client quando richiesta.
   * Server-side scripting: il codice per gestire la pagina si trova sul server
   * Principali linguaggi: Perl, PHP, Java, ASP
* **Single-page application** (SPA): l'intera applicaione viene caricata come una sola pagina e, successivamente, le informaioni vengono aggiornate dinamicamente senza la necessità di caricare di nuovo l'intera pagina.
   * Client-side scripting: il codice per gestire e aggiornare la pagina si trova sul client
   * Principale linguaggio Javascript/Typescript con l’utilizzo di framework come React o Angular
   * Si utilizzano AJAX o tecnologie simili per caricare i dati in modo asincrono e renderizzarli all'interno della pagina esistente. 

#### Come BC si è evoluto con le tecnologie
* **Classic**: solo Windows, prime versioni di Navision, modello 2-Tier

   ![classic](/img/business-central/classic.png)

* **RTC (Role Tailored Client)**: solo Windows, introdotto Role Center e ricerca, modello 3-Tier

   ![rtc](/img/business-central/rtc.png)

* **Webclient**: cross-platform, cross-browser, orientato al cloud

   ![webclient](/img/business-central/webclient.png)

#### Architettura 3-Tier di BC on-premise

   ![3-tier-bc](/img/business-central/3-tier-bc.png)

   * **Presentation Tier**: è formato dall’applicazione Single-page di business central + il web server di Microsoft IIS (Internet Information Services) che gestisce le richieste del client
   
   * **Application Tier**: Business Central Server è dove si trova tutta la logica del prodotto, l’applicativo è sviluppato con il framework ASP.NET Core in C# e viene integrato con codice AL quando modifichiamo il prodotto
   
   * **Data Tier**: viene utilizzato Microsoft SQL Server come gestore del livello di database

### Architettura cloud
Il mondo Cloud si divide in modelli di servizio, i principali sono IaaS, PaaS e SaaS. Offrono diversi livelli di controllo, gestione e personalizzazione ai clienti in base alle loro esigenze.

* **IaaS (Infrastructure as a Service)** - Questo modello offre l'infrastruttura IT di base, come server virtuali, archiviazione, reti e sistemi operativi. I clienti hanno il controllo completo sul sistema operativo, sull'architettura di rete e sulle applicazioni che verranno eseguite sulla piattaforma cloud. Esempi: AWS (EC2), GCP (CE) e Microsoft Azure (VM).

* **PaaS (Platform as a Service)** - Questo modello offre un'infrastruttura di sviluppo e distribuzione di applicazioni completa. I clienti possono sviluppare e distribuire le loro applicazioni utilizzando le risorse messe a disposizione dal provider di servizi cloud, come database, middleware, librerie di sviluppo e strumenti di sviluppo. Esempi: AWS Elastic Beanstalk, Microsoft Azure App Service e Google App Engine.

* **SaaS (Software as a Service)** - Questo modello offre un'applicazione software completa come servizio. I clienti accedono all'applicazione attraverso un interfaccia web, senza dover installare o gestire l'applicazione sui propri server. I provider di servizi cloud che offrono SaaS includono Salesforce, Dropbox, Google Apps e Microsoft Office 365 e **Business Central**.

In generale, IaaS offre il massimo controllo e personalizzazione, ma richiede anche la maggior parte della responsabilità di gestione e manutenzione dell'infrastruttura. PaaS offre un livello di controllo intermedio e semplifica lo sviluppo e la distribuzione di applicazioni. SaaS offre la soluzione più semplice e immediata, ma riduce la personalizzazione e il controllo sull'applicazione.

   ![cloud-models](/img/business-central/cloud-models.png)
