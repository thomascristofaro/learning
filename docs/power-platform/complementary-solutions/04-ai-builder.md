# AI Builder
Con **AI Builder**, una funzionalità di Microsoft Power Platform, hai la possibilità di creare e utilizzare modelli di intelligenza artificiale per **ottimizzare** i processi aziendali. Puoi scegliere tra modelli predefiniti già pronti per l'uso in molti scenari aziendali comuni o creare modelli personalizzati per adattarli alle specifiche esigenze della tua azienda. AI Builder è progettato per consentire all'azienda di **automatizzare i processi** e ottenere informazioni dettagliate dai dati presenti in Power Apps e Power Automate.

L'integrazione con Power Apps e Power Automate **semplifica** l'uso dell'intelligenza artificiale. Come puoi aggiungere intelligenza all'azienda?
1. **Scegli un tipo di modello di intelligenza artificiale**: seleziona il tipo di modello adatto per le tue esigenze aziendali.
2. **Connetti i dati**: seleziona i dati specifici dell'azienda dalle opzioni disponibili.
3. **Personalizza il tuo modello di intelligenza artificiale**: puoi modificare modelli personalizzati per migliorare le prestazioni della tua IA.
4. **Addestra il tuo modello di intelligenza artificiale**: l'addestramento è un processo automatico. Insegna al modello di intelligenza artificiale come risolvere i problemi aziendali grazie ai dati aziendali e alla personalizzazione.
5. **Utilizza le informazioni dettagliate del modello di intelligenza artificiale**: utilizza i risultati del modello di intelligenza artificiale su Power Platform per creare soluzioni in grado di soddisfare le esigenze aziendali, anche senza avere competenze di creazione di codice.

## Come creare un modello in AI Builder
### Prerequisiti
AI Builder richiede l'utilizzo di Microsoft Dataverse, la piattaforma dati integrata di Microsoft Power Platform che consente di *archiviare e gestire i dati aziendali*. Dataverse è anche la piattaforma su cui vengono create le app Dynamics 365. Se sei un cliente Dynamics 365, i tuoi dati sono già presenti in Dataverse.

È importante notare che AI Builder deve essere abilitato nel tuo ambiente Power Platform per poter accedere e utilizzare questa funzionalità. Senza l'abilitazione, non sarà possibile sfruttare le potenzialità offerte da AI Builder.

Per esplorare AI Builder usando i dati di esempio forniti da Microsoft  bisogna abilitare l'impostazione **Distribuisci le app e i dati di esempio** quando crei l'ambiente per aggiungere automaticamente i dati di esempio all'ambiente.

![Ai Builder](/img/power-platform/complementary-solutions/ai-1.png)

#### Informazioni di base
AI Builder offre la possibilità di creare modelli basati su diversi tipi di dati, come documenti, testo, dati strutturati o immagini. Esistono anche due tipi principali di creazione di modelli: la creazione personalizzata e quella predefinita.
1. Accedere a [Power Apps](https://make.powerapps.com/)
2. Nel riquadro a sinistra seleziona **AI Builder>Esplora**.
3. Seleziona un modello personalizzato, quindi seleziona **Attività iniziali**.

## Creare una richiesta
In questo esercizio guidato vedremo:
- Cos'è una richiesta personalizzata
- Creare una richiesta GPT

### Cos'è una richiesta personalizzata
Le **richieste personalizzate** concedono agli autori la libertà di istruire il modello GPT affinché si comporti in un modo specifico o esegua un'attività particolare. Creando attentamente una richiesta, è possibile ottenere *risposte adatte alle specifiche esigenze aziendali*. Questo rende il modello GPT un utensile flessibile per svolgere diverse attività.

L'obiettivo della **prompt engineering** è formulare un'istruzione il più specifica possibile, al fine di ottenere una risposta più pertinente dal modello GPT. I prompt devono essere mirati a un argomento specifico e trasmettere chiaramente l'intento dell'utente.
Un prompt efficace potrebbe comprendere le seguenti informazioni:
1. **L'argomento**: la tematica centrale della richiesta.
2. **Parole chiave o frasi associate all'argomento**: termini o espressioni che sono strettamente collegati all'argomento desiderato.
3. **Il tono della risposta**: specificare se si desidera una risposta formale, informale, tecnica, o di altro tipo.
4. **Il gruppo di destinatari**: indicare se la risposta è destinata a un pubblico specifico o se deve essere adattata a un certo contesto.

Creare prompt dettagliati con queste informazioni migliora la probabilità di ottenere risposte precise e coerenti da parte del modello GPT.

Se il testo prodotto risulta eccessivamente lungo o contiene informazioni poco rilevanti, si consiglia di apportare modifiche al prompt. Un prompt efficace presenta le seguenti caratteristiche:

1. **Chiaro e conciso**: utilizza un linguaggio chiaro e diretto per massimizzare la comprensibilità.
2. **Specifico**: sii sufficientemente dettagliato nel prompt per guidare il modello GPT nella direzione desiderata.
3. **Contestuale**: fornisci un contesto adeguato nel prompt, in modo che il modello abbia le informazioni necessarie per generare un output significativo.
4. **Pertinente**: assicurati che il prompt sia strettamente pertinente all'attività richiesta, fornendo al modello informazioni rilevanti per una risposta significativa.

Adottando queste caratteristiche, è più probabile ottenere risultati da parte del modello GPT che siano chiari, centrati sull'argomento e privi di informazioni superflue.

Solitamente, una richiesta per un modello GPT si compone di due parti principali: l'istruzione e il contesto.
- **Istruzione**:
La prima parte della richiesta, l'istruzione, deve offrire indicazioni chiare su ciò che si richiede al modello GPT di fare. Ad esempio, potrebbe essere formulata in modo simile a: "Riassumi questa e-mail in tre punti" o "Genera una risposta affermativa o negativa sulla base delle informazioni fornite".
- **Contesto**:
La seconda parte della richiesta è il contesto, che fornisce al modello GPT le informazioni necessarie per generare una risposta appropriata. Ad esempio, potrebbe includere dettagli come: "L'e-mail contiene il feedback dei clienti della scorsa settimana" o "Considera le seguenti informazioni come base per la tua risposta".

Assicurandoti che l'istruzione sia chiara e che il contesto fornisca le informazioni rilevanti, puoi migliorare la capacità del modello GPT di generare risposte accurate e adeguate al contesto specifico della tua richiesta.

### Creare una richiesta GPT
Il generatore di richieste fornisce la flessibilità necessaria per creare richieste personalizzate, consentendo di definire variabili di input. Queste variabili permettono di incorporare contenuto di runtime dinamico all'interno di una richiesta, offrendo la possibilità di adattare la richiesta alle esigenze specifiche durante l'esecuzione.

L'utilizzo di variabili di input consente un maggiore dinamismo e personalizzazione nella creazione delle richieste. Inoltre, la funzionalità "Prova la tua richiesta" consente di convalidare la richiesta in fase di sviluppo, garantendo prestazioni ottimali e la correttezza della risposta prima di integrare la soluzione nelle tue applicazioni aziendali.

Questa metodologia consente di affinare e ottimizzare le richieste in base alle esigenze specifiche, garantendo una maggiore adattabilità e affidabilità nel processo di interazione con il modello GPT.

1. Accedi a [Power Apps](https://make.powerapps.com/), [Power Automate](https://make.powerautomate.com/), o [Copilot Studio](https://copilotstudio.microsoft.com/).
2. Nel riquadro di sinistra, seleziona **Richieste di intelligenza artificiale** o **Richieste>Crea testo utilizzando una richiesta**.
   Nel caso di Power Apps e Power Automate, potrebbe essere necessario prima selezionare **Hub IA** nel riquadro a sinistra.
3. Nell'angolo in basso a destra, seleziona **Crea richiesta personalizzata**.

   ![Ai Builder](/img/power-platform/complementary-solutions/ai-2.png)

#### Configura e prova la tua richiesta
Puoi utilizzare lo screenshot sotto riportato come guida per creare e testare la tua richiesta.

   ![Ai Builder](/img/power-platform/complementary-solutions/ai-3.png)

1. Immetti un nome per la richiesta.
2. Scrivi o incolla la richiesta.
3. Aggiungi un valore dinamico, quindi seleziona **Invio**.
   Nel processo di creazione di suggerimenti, è comune che i creatori forniscono dati di contesto per assicurarsi che il modello GPT generi risposte pertinenti. Per semplificare questo processo, vengono utilizzati valori dinamici nella richiesta, agendo come segnaposto che verranno completati con i dati effettivi durante l'esecuzione.

   L'utilizzo di valori dinamici come segnaposto consente una maggiore flessibilità e personalizzazione nelle richieste. Questi segnaposto vengono successivamente sostituiti con informazioni specifiche durante l'esecuzione, consentendo al modello di adattarsi dinamicamente al contesto fornito.

   Questa pratica è particolarmente utile per garantire che il modello GPT generi risposte pertinenti e coerenti, incorporando dati di contesto rilevanti all'interno delle richieste.
4. Metti alla prova la tua richiesta.
   Il test delle richieste è una capacità essenziale ma spesso sottovalutata. I test manuali sono utili le esperienze di creazione iterative.
5. Salva la richiesta personalizzata selezionando **Salva richiesta personalizzata**.