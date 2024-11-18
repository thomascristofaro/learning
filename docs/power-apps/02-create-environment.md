
# Creare un ambiente

Il **primo passo** per poter iniziare a sviluppare in Power Apps, è quello di **creare un ambiente**.

![Creare ambiente](/img/power-apps/new-environment.png)

Un **ambiente** è uno **spazio** in cui **archiviare**, **gestire** e **condividere dati aziendali**, **app** e **flussi dell'organizzazione**. Funge inoltre da contenitore per separare le app in base ai diversi ruoli, requisiti di sicurezza o destinatari. Power Apps crea automaticamente un singolo ambiente predefinito per ogni tenant, che è condiviso da tutti gli utenti nel tenant.

1. L'utente dispone di una **licenza** che consente la creazione dell'ambiente. Questo requisito non è previsto per gli amministratori globali e gli amministratori di Power Platform ad eccezione degli ambienti di prova (standard); per determinare quale licenza ha un utente, accedi all'**interfaccia di amministrazione di Microsoft 365** e segui i passaggi in Assegnare licenze a più utenti nella pagina Utenti attivi.
2. Il **tenant** (o l'utente nel caso di valutazioni e-mail) deve disporre di quanto segue:

     - Per gli ambienti di produzione e sandbox, il tenant deve avere almeno **1 GB di capacità** di archiviazione del database disponibile.
     - Per gli ambienti con **versione di valutazione** (basati su **abbonamento**), ogni abbonamento alla versione di valutazione basato su offerta dà diritto al tenant a tre ambienti con versione di valutazione basati su abbonamento. Solo gli amministratori a livello di tenant possono eseguire il provisioning degli ambienti con versione di valutazione.
     - Per gli ambienti con **versione di valutazione** (**standard**), l'utente necessita di una licenza che fornisce diritti per utente per gli ambienti con versione di valutazione (fai riferimento alla tabella precedente). Questo vale anche per gli amministratori a livello di tenant.

:::info Important
Un **ambiente sandbox** è un ambiente non di produzione di Microsoft Dataverse. Poiché è isolato dalla produzione, un ambiente sandbox è ideale per sviluppare in modo sicuro e testare le modifiche dell'applicazione con basso rischio.
:::

Gli utenti che desiderano creare una versione di valutazione standard possono **ottenere la licenza** necessaria **gratuitamente** iscrivendosi alla versione di valutazione di Power Apps tramite uno di questi percorsi:

Per una versione di valutazione con le app Dynamics 365

 - https://trials.dynamics.com e seleziona l'app richiesta per registrarti per una versione di valutazione di 30 giorni.

Per una versione di valutazione senza app

 - https://apps.powerapps.com/trial
 - https://powerapps.com e seleziona Prova gratuitamente nella parte superiore della pagina.


### Creare un ambiente con un database
Quando **crei un ambiente** di produzione o sandbox con un database Dataverse, hai la **possibilità** di **aggiungere** app Dynamics 365 come **Dynamics 365 Sales** e **Field Service** durante il processo di creazione (scegliendo Sì per Abilita app Dynamics 365). Attualmente, se non selezioni **Sì** per le app Abilita app Dynamics 365 al momento del provisioning del database, non sarai in grado di apportare questa modifica in un secondo momento né di installare le app Dynamics 365 in questo ambiente. Devi disporre di una licenza Dynamics 365 appropriata per selezionare Sì per Abilita app Dynamics 365.

#### Passaggi

1. Accedi all'interfaccia di amministrazione Power Platform all'indirizzo https://admin.powerplatform.microsoft.com come amministratore (amministratore Dynamics 365, amministratore globale o amministratore Microsoft Power Platform).

2. Nel riquadro di spostamento, selezionare **Ambienti**, quindi selezionare **Nuovo**.

3. Immetti i dettagli seguenti e quindi seleziona Avanti.

Impostazione         |	 Descrizione
------               |   ------
Name                 |   Nome dell'ambiente. |
Area geografica      |   Selezionare un'area per l'ambiente.|
Type	             |   Scegli produzione, versione di valutazione o sandbox.|
Ambito	             |   Descrizione dell'ambiente.|
Aggiungi un'origine dati Dataverse  |   Seleziona Sì.|
Pagamento a consumo con Azure  |    Seleziona Sì per collegare questo ambiente a un abbonamento di Azure e pagare per i servizi Power Platform selezionati quali Dataverse e Power Apps.|

4. Immetti i dettagli seguenti e quindi seleziona **Salva**.

Impostazione         |	 Descrizione
------               |   ------
Language	         |   La lingua predefinita per questo ambiente. Ulteriori informazioni: **Regole di confronto lingua di Dataverse**. |
URL                  |   Immetti il nome dell'organizzazione. Gli URL dell'organizzazione devono essere univoci. Se il nome dell'organizzazione è stato già prenotato nel data center di destinazione, non sarà disponibile.|
Valuta               |   La valuta di base usata per i report.|
Abilita app Dynamics 365             |   Selezionare **Sì** e fare una selezione per distribuire automaticamente le app, ad esempio Dynamics 365 Sales e Dynamics 365 Customer Service. Devi usare una licenza Dynamics 365 appropriata per selezionare **Sì**.|
Distribuisci le app e i dati di esempio  |   Selezionare Sìper includere le app e i dati di esempio. I dati di esempio consentono di sperimentare durante l'apprendimento. Per visualizzare questa impostazione, è necessario selezionare **No** per **Abilita app Dynamics 365**.|
Gruppo di sicurezza  |    Seleziona un gruppo di sicurezza per limitare l'accesso a questo ambiente. Per l'accesso aperto, seleziona **Nessuno**.  Questo campo è ora obbligatorio.|

:::info Important
Se non hai bisogno delle app Dynamics 365 o non devi utilizzare Dataverse e stai creando app canvas usando Power Apps o flussi usando Power Automate utilizzando altre origini dati, crea l'ambiente **senza il database Dataverse**.
:::

### Creare un ambiente senza un database

È possibile creare un ambiente senza un database e utilizzare il tuo archivio dati.

#### Passaggi

1. Accedi all'interfaccia di amministrazione Power Platform all'indirizzo https://admin.powerplatform.microsoft.com come amministratore (amministratore Dynamics 365, amministratore globale o amministratore Power Platform).

2. Nel riquadro di spostamento, selezionare **Ambienti**, quindi selezionare **Nuovo**.

3. mmetti i dettagli seguenti e quindi seleziona **Salva.**

Impostazione         |	 Descrizione
------               |   ------
Name                 |   Nome dell'ambiente. |
Area geografica      |   Selezionare un'area per l'ambiente.|
Type	             |   E' possibile scegliere Produzione o Valutazione.|
Ambito	             |   Descrizione dell'ambiente.|
Aggiungi un'origine dati Dataverse  |   Seleziona **No**.|
Pagamento a consumo con Azure  |    Seleziona **Sì** per collegare questo ambiente a un abbonamento di Azure e pagare per i servizi Power Platform selezionati quali Dataverse e Power Apps.|

### Lab 0: Validate lab environment

**Esercizio proposto** : [Esercitazione Lab 0 - Create environments](https://microsoftlearning.github.io/PL-400_Microsoft-Power-Platform-Developer/Instructions/Labs/LAB%5BPL-400%5D_Lab00_Validate_lab_environment.html#exercise-3---create-environments) 

**Obiettivo**: In questo esercizio verrà creato un ambiente di sviluppo in cui verrà eseguita la maggior parte del lavoro di laboratorio e un ambiente live da utilizzare per distribuire le soluzioni.

## Link

- [Creare un ambiente](https://learn.microsoft.com/it-it/power-platform/admin/create-environment)