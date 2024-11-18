# Power Pages
Microsoft **Power Pages** è una piattaforma SaaS **sicura** e di **livello aziendale**, caratterizzata da un utilizzo limitato di codice, dedicata alla creazione, all'hosting e alla gestione di moderni siti Web aziendali rivolti all'esterno. Power Pages offre la possibilità a creatori con *competenze limitate di codifica* e a sviluppatori professionisti di progettare, configurare e pubblicare con velocità siti Web che si adattano perfettamente a diversi browser Web e dispositivi.

Power Pages fornisce **modelli avanzati e personalizzabili**, garantendo un'esperienza visiva *fluida* attraverso lo studio di progettazione e un hub di apprendimento integrato per creare rapidamente siti Web che rispondono alle esigenze aziendali specifiche.

Power Pages rappresenta l'ultima aggiunta alla famiglia Microsoft Power Platform. Con Power Pages, hai la possibilità di creare siti utilizzando gli stessi dati aziendali condivisi archiviati in Microsoft Dataverse, già impiegati per sviluppare *app, flussi di lavoro, agenti virtuali intelligenti, report e analisi* con gli altri componenti della Microsoft Power Platform della tua organizzazione.

![Power Pages](/img/power-platform/complementary-solutions/pp-1.png)

### Funzionalità di sviluppo avanzate
Gli autori hanno la possibilità di collaborare con sviluppatori professionisti all'interno dei team di sviluppo, espandendo la funzionalità mediante l'uso di Visual Studio Code e l'interfaccia della riga di comando di Microsoft Power Platform. In questo modo, è possibile creare siti Web di applicazioni aziendali **potenti e personalizzati**.

#### Sicurezza e governance
La **sicurezza** integrata costituisce il fondamento di Power Pages, consentendo alle organizzazioni di abilitare in modo sicuro l'accesso ai dati aziendali per i propri utenti, sia interni che esterni, mediante le regole di autorizzazione di Power Pages.
- Le organizzazioni che sfruttano Power Pages hanno la flessibilità di scegliere tra vari provider di autenticazione o di consentire l'accesso al contenuto del sito in modo anonimo.
- Power Pages è ospitato come un servizio app di Azure, garantendo la conformità con gli standard internazionali di standardizzazione (ISO), i controlli dell'organizzazione e dei sistemi (SOC) e gli standard di sicurezza dei dati nel settore delle carte di pagamento (PCI DSS).
- Power Pages aderisce ai moderni standard di crittografia TLS (TLS 1.2) e integra la protezione DDoS di Azure. Supporta inoltre la restrizione IP dinamica per limitare il traffico malevolo e fornisce agli amministratori meccanismi sicuri basati su configurazione per mitigare le principali vulnerabilità di sicurezza Web, come gli attacchi di injection, l'usurpazione di richieste tra siti e i falsi di richieste lato server.
- È anche possibile configurare Power Pages per sfruttare le funzionalità di memorizzazione nella cache perimetrale e il firewall delle applicazioni Web (WAF).

### Creiamo insieme un sito con Power Pages

1. Vai a [Power Pages](https://make.powerpages.microsoft.com/).
2. Seleziona l'ambiente Microsoft Dataverse in cui vuoi creare un sito.

:::caution Nota
Non è consigliabile creare un sito nell'ambiente *predefinito*. Questo ambiente è condiviso tra tutti gli utenti nel tenant e la creazione del sito in tale ambiente presenta il rischio di condividere accidentalmente i dati con altri utenti.
:::

3. Nella home page, seleziona **+ Crea un sito**.
4. Analizza i modelli disponibili. 
   Per maggiori dettagli su ciascuno modello, puoi passare il mouse sul modello e scegli **Anteprima modello**.
   Se nessuno dei modelli aziendali soddisfa le tue esigenze, puoi optare per uno dei modelli di layout per principianti con soluzioni intersettoriali, oppure selezionare "Pagina vuota" per personalizzare il sito Web da zero.
5. Dopo aver trovato il modello migliore per le tue esigenze aziendali, seleziona **Scegli questo modello**.
6. Verifica il nome e l'indirizzo Web predefiniti del sito, quindi seleziona **Fatto**.

   ![Power Pages](/img/power-platform/complementary-solutions/pp-2.png)

7. Dopo aver creato il sito, puoi iniziare a modificare o visualizzare in anteprima il tuo sito.

   ![Power Pages](/img/power-platform/complementary-solutions/pp-3.png)

#### Informazioni aggiuntive
Quando si crea un sito con un nuovo ambiente di valutazione, vengono precaricati i metadati del sito per tutti i modelli. Questi appaiono come record del sito Web nell'app *Gestione del portale*.

![Power Pages](/img/power-platform/complementary-solutions/pp-4.png)


### Esempio: Aggiungere un elenco alla pagina
In questo esempio impareremo come visualizzare un elenco di informazioni aziendali per i nostri utenti da Microsoft Dataverse su una pagina del nostro sito.
Apprenderemo, quindi, come:
- creare una tabella
- creare una visualizzazione
- aggiungere un elenco alla pagina

Utilizziamo i passaggi seguenti per creare una tabella:
1. Vai a [Power Pages](https://make.powerpages.microsoft.com/)
2. Seleziona l'icona **Dati** nella barra di spostamento a sinistra e seleziona il pulsante **Nuova tabella**.

   ![Power Pages](/img/power-platform/complementary-solutions/pp-5.png)

3. Assegna un nome alla tabella e selezionare **Crea**.

   ![Power Pages](/img/power-platform/complementary-solutions/pp-6.png)

4. Selezionare **Nuova colonna**.

   ![Power Pages](/img/power-platform/complementary-solutions/pp-7.png)

5. Inserisci un nome e un tipo di dati, quindi scegli **Salva**.

   ![Power Pages](/img/power-platform/complementary-solutions/pp-8.png)

6. Seleziona lo spazio sotto il campo del nome e immetti i dati.

   ![Power Pages](/img/power-platform/complementary-solutions/pp-9.png)

#### Come creare una visualizzazione
1. Seleziona la tabella che hai appena creato. Seleziona Visualizzazioni, quindi, Nuova visualizzazione.

   ![Power Pages](/img/power-platform/complementary-solutions/pp-10.png)

   Immetti il nome della visualizzazione.

   ![Power Pages](/img/power-platform/complementary-solutions/pp-11.png)

2. Aggiungi i dati dell'applicazione e le colonne motivo stato alla visualizzazione.
3. Seleziona **Salva** e scegli **Pubblica**.
4. Seleziona **Visualizzazioni** per mostrare le visualizzazioni disponibili per la tabella.

#### Come aggiungere un elenco alla pagina
1. All'interno dello studio di progettazione, scegli l'opzione per **Creare una nuova pagina**.
2. Aggiungere un nome per la pagina.
3. Scegli il layout **Inizia da modello vuoto**. Seleziona **Aggiungi**, quindi, **Elenco**.
4. Immetti i dettagli; scegli la tabella e la visualizzazione che desideri dai menu a discesa.

   ![Power Pages](/img/power-platform/complementary-solutions/pp-12.png)

5. Seleziona **Anteprima**.

   ![Power Pages](/img/power-platform/complementary-solutions/pp-13.png)

:::note Nota
Quando visualizzi per la prima volta la pagina, vedrai un messaggio per cui non disponi delle autorizzazioni per visualizzare i dati. La sicurezza è molto importante quando si creano siti.
:::

   ![Power Pages](/img/power-platform/complementary-solutions/pp-14.png)

