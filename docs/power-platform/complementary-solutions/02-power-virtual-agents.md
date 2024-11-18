# Power Virtual Agents
 
:::note Importante
   Le competenze e le caratteristiche di Power Virtual Agents sono ora integrate in Microsoft Copilot Studio grazie a notevoli investimenti nell'intelligenza artificiale generativa e a integrazioni potenziate in Microsoft Copilot.
:::

   ![Power Virtual Agents](/img/power-platform/virtual-agents-1.png)

Microsoft Copilot Studio ti permette di sviluppare assistenti avanzati basati sull'intelligenza artificiale per un'ampia varietà di richieste, dalla fornitura di risposte chiare a domande frequenti alla risoluzione di problematiche che implicano conversazioni complesse. Puoi interagire con clienti e collaboratori in diverse lingue su siti web, applicazioni per dispositivi mobili, Facebook, Microsoft Teams o su qualsiasi canale supportato da Azure Bot Framework.
Copilot Studio è accessibile sia come applicazione web autonoma che come applicazione separata all'interno di Teams. La maggior parte delle caratteristiche è condivisa tra le due versioni.

Microsoft Copilot Studio aderisce al Security Development Lifecycle (SDL). Il SDL è una serie di procedure rigorose che sostengono la garanzia della sicurezza e la conformità ai requisiti. La piattaforma Power Platform include un'ampia gamma di funzionalità di prevenzione della perdita di dati (DLP) per aiutarti a gestire la sicurezza dei dati. Per governare e rafforzare ulteriormente la sicurezza di Copilot Studio utilizzando le funzionalità di intelligenza artificiale generativa nella tua organizzazione, puoi seguire i passaggi seguenti:
1. Disabilita la pubblicazione del bot:
   - l'amministratore può disabilitare la possibilità di pubblicare bot con risposte e azioni generative per il tuo tenant nell'interfaccia di amministrazione di Power Platform.

      ![Complementary](/img/power-platform/complementary-solutions/disabilita.png)

   - L'amministratore può disabilitare copilota per la tua organizzazione creando una richiesta di supporto.

2. Disabilita lo spostamento dei dati tra località geografiche per funzionalità di intelligenza artificiale generativa di Copilot Studio al di fuori degli Stati Uniti.
3. Abilita i plugin conversazionali Copilot Studio.

Microsoft Copilot Studio **facilita** la comunicazione dei chatbot con le tue origini dati e servizi creando un'applicazione nel tuo tenant **Azure Active Directory** (AAD) insieme a un'entità servizio associata. Un'entità servizio rappresenta un'applicazione e le consente di accedere alle risorse nel tuo tenant. Le credenziali per l'entità servizio sono controllate da Microsoft Copilot Studio attraverso un certificato crittografato. Per garantire **sicurezza e conformità**, i certificati vengono ruotati regolarmente. Ciò significa che viene emesso un nuovo certificato mentre quello precedente viene revocato. Questo processo è automatico e non richiede azioni da parte tua. La rotazione dei certificati non influisce sulle funzionalità dei tuoi chatbot o sulla sicurezza dei dati, ma assicura che i certificati siano sempre validi e aggiornati secondo le migliori pratiche di sicurezza.

Se hai già creato uno o più bot utilizzando Microsoft Copilot Studio, il processo di aggiornamento all'ultima versione è semplificato grazie a una nuova funzionalità di clonazione disponibile al momento del lancio per i bot creati con Microsoft Copilot Studio (classico). Questa funzione ti consente di clonare il bot Microsoft Copilot Studio classico selezionato e di crearne uno nuovo che utilizza l'ultima versione della creazione unificata.

Migrando il tuo bot da Microsoft Copilot Studio classico alla creazione unificata, potrai beneficiare delle funzionalità più recenti presenti in Microsoft Copilot Studio. Questa opportunità consente alle aziende di aggiungere ulteriore valore ai propri bot, migliorando l'esperienza complessiva per i clienti.


## Come creare un chatbot
Microsoft Copilot Studio offre una homepage a livello di app che raccoglie tutti i tuoi copiloti. In questa pagina, hai la possibilità di creare un nuovo copilota, visualizzare quelli recenti e accedere a risorse di apprendimento come video, documentazione e percorsi di apprendimento. Per accedere a questa pagina, seleziona "Copiloti" nel menu di navigazione. Qui troverai tutti i copiloti creati in un ambiente specifico.

Nella tua lista di copiloti, sono visualizzati metadati come il proprietario, l'ultima volta che è stato pubblicato e l'ultima persona che ha apportato modifiche al copilota. Questo fornisce una panoramica dettagliata delle informazioni chiave associate a ciascun copilota nella tua esperienza con Microsoft Copilot Studio.

1. Vai al [sito web](https://aka.ms/TryPVA) di introduzione di Microsoft Copilot Studio. 
2. Sul sito Web seleziona **Prova gratuita** e accedi con l'indirizzo e-mail aziendale (Gli account Microsoft personali non sono attualmente supportati).

   ![Complementary Solutions](/img/power-platform/complementary-solutions/cs-1.png)

3. Dopo la registrazione, verrà creato un ambiente predefinito.
   
   ![Complementary Solutions](/img/power-platform/complementary-solutions/cs-2.png)

4. Una volta registrato, ritorna alla pagina Home. Seleziona **Crea un copilota**.
5. Viene avviata una procedura guidata. Assegna un nome al tuo copilota.
6. Nel campo Che lingua vuoi che parli il tuo copilota?, seleziona una lingua. Il menu a discesa della lingua è precompilato con le impostazioni locali del browser.

   ![Complementary Solutions](/img/power-platform/complementary-solutions/cs-3.png)

:::tip Facoltativo
   Per potenziare le conversazioni con le risposte generate dall'intelligenza artificiale, aggiungi un URL al campo Potenzia le tue conversazioni con risposte generative.
:::

:::tip Facoltativo
   Sono disponibili personalizzazioni e miglioramenti che puoi apportare prima di finalizzare il tuo copilota. Scegli Modifica opzioni avanzate nella parte inferiore della pagina.
:::

7. Seleziona **Crea**.

   La creazione del tuo primo copilota in un nuovo ambiente può richiedere fino a 15 minuti. 

   Verrai indirizzato alla pagina **Panoramica** del copilota. 

   :::note Nota
      Le operazioni del copilota come la pubblicazione e le configurazioni di autenticazione potrebbero richiedere qualche minuto in più per essere pronte per l'uso.
   :::

### Come creare un argomento
Un argomento è un albero di dialogo che descrive come il tuo copilota risponde alla domanda di un utente.
1. Nel menu di spostamento, seleziona **Argomenti**, quindi seleziona **Aggiungi** nella parte superiore della pagina. Da **Aggiungi**, seleziona **Argomento**, quindi **Da vuoto**.

   ![Complementary Solutions](/img/power-platform/complementary-solutions/cs-4.png)

2. In questa fase, stai creando un argomento assegnandogli un nome e configurando un trigger. Le frasi trigger sono esempi di domande o espressioni dell'utente che aiutano il copilota a rispondere quando rileva domande o espressioni simili.

   Ecco i passaggi dettagliati per creare l'argomento ***"Personal Hello World"***:

   **a.** Assegna un nome al tuo argomento, ad esempio "Personal Hello World" nella *parte superiore* della **finestra**.

   **b.** Nella finestra di dialogo "**Trigger**" nella sezione "**Frasi**", seleziona "**Modifica**". Si aprirà il riquadro "**Su intento riconosciuto**".

   **c.**  Aggiungi il testo "*Hello World*", noto anche come espressione, nella sezione "**Aggiungi frasi**".

   **d.**  Seleziona l'icona **+** accanto alla casella della frase per aggiungere questa espressione al trigger.

   **e.**  Infine, seleziona l'icona "**Salva**" nella *parte superiore dello schermo* per memorizzare il trigger.

   In questo modo, hai configurato un trigger per l'argomento "Personal Hello World", consentendo al copilota di riconoscere e rispondere quando viene identificata l'espressione "Hello World".

   ![Complementary Solutions](/img/power-platform/complementary-solutions/cs-5.png)

3. Seleziona l'icona (+) sotto il nodo di attivazione e seleziona **Invia un messaggio**.

   **a.**  Immetti "Salve. Creerò un messaggio di saluto personalizzato per te." nel nodo **Messaggio** aggiunto di recente.

      ![Complementary Solutions](/img/power-platform/complementary-solutions/cs-6.png)

   **b.**  Seleziona l'icona **Salva** nella parte superiore dello schermo per salvare il trigger.
4. Seleziona l'icona (+) sotto il nodo Nuovo messaggio e aggiungi un nodo **Fai una domanda**.
   Inserisci il testo della domanda "*Where do you live?*" nella casella **Chiedi un messaggio**. Seleziona **Opzioni a scelta multipla** in **Identifica** per dare al cliente una scelta nelle risposte.

   ![Complementary Solutions](/img/power-platform/complementary-solutions/cs-7.png)
   
   Con **Opzioni a scelta multipla** selezionata, è necessario aggiungere più opzioni.

5. Aggiungi due opzioni per l'utente selezionando **+ Nuova opzione** in **Opzioni per l'utente** nel nodo **Domanda**, quindi inserisci "Seattle" come testo. Aggiungi un'altra opzione e inserisci "Bellevue" come testo. 
   Ogni opzioni è presentata nella chat del copilota come un pulsante a scelta multipla all'utente.

6. Visualizza l'intera struttura della finestra di dialogo nell'area di creazione per comprendere il flusso della conversazione.
   L'albero di dialogo crea percorsi separati nella conversazione, a seconda della risposta del cliente. Questo percorso di conversazione porta il cliente alla soluzione migliore per ogni risposta dell'utente.

   ![Complementary Solutions](/img/power-platform/complementary-solutions/cs-8.png)

   Nel percorso di conversazione con biforcazione, i nodi controllano automaticamente "Seattle" in un percorso e "Bellevue" nell'altro percorso per intraprendere il passo successivo migliore.

7. Infine, seleziona l'icona (+) sotto ciascuno dei nodi **Condizione** per aggiungere un nodo **Messaggio** in ciascun ramo.
   Aggiungi un breve messaggio come "Hello Seattle!" nel ramo Seattle e "Hello Bellevue!" nel ramo Bellevue.

   ![Complementary Solutions](/img/power-platform/complementary-solutions/cs-9.png)

8. Seleziona l'icona **Salva** nella parte superiore dello schermo per salvare il trigger.

### Testiamo i contenuti in tempo reale

   ![Complementary Solutions](/img/power-platform/complementary-solutions/cs-10.png)

1. Se il riquadro di copilota di prova non viene visualizzato sullo schermo, seleziona Testare il copilota nella parte inferiore del menu di spostamento.

   ![Complementary Solutions](/img/power-platform/complementary-solutions/cs-11.png)

2. Attiva **Traccia tra gli argomenti** nella parte superiore, che consente di seguire con il copilota l'esecuzione del dialogo. Vedi parti dell'albero di dialogo evidenziate quando il copilota arriva a quella parte del dialogo.

   ![Complementary Solutions](/img/power-platform/complementary-solutions/cs-12.png)

3. Digita "Hello World" nella finestra della chat e invia il messaggio al copilota. Vedrai la parte superiore dell'albero di dialogo evidenziata in verde e vedrai Seattle e Bellevue presentati come opzioni dell'utente nel riquadro del copilota di prova.

   Il copilota ora sta aspettando che tu risponda e visualizza suggerimenti su come rispondere. Questi pulsanti di suggerimento riflettono ciò che hai creato nell'albero di dialogo nel nodo Poni una domanda.

   Nel bot di copilota, puoi selezionare questi pulsanti di suggerimento per continuare oppure puoi inserire la tua risposta nella finestra della chat. 

   ![Complementary Solutions](/img/power-platform/complementary-solutions/cs-13.png)

4. Seleziona la filiale di Seattle.
   Ora dovresti vedere la fine della chat.

### Pubblicare il copilota: app Web
Una volta creato il contenuto del copilota, puoi pubblicare il tuo copilota su un sito Web.
1. Nel menu di spostamento, seleziona **Pubblica**.
2. Seleziona **Pubblica** per attivare il tuo copilota. se la pubblicazione va a buon fine, vedrai un banner verde nella parte superiore della pagina.

   ![Complementary Solutions](/img/power-platform/complementary-solutions/cs-14.png)

