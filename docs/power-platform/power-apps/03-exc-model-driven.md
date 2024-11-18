# Esercizio - Creazione di un'app basata su modello

In questo esercizio creeremo un'app basata su modello usando una delle entità standard disponibili nell'ambiente Microsoft Power Apps.

### Creazione di un'app basata su modello

1. Accedere a [**Power Apps**](https://make.powerapps.com/) usando l'account aziendale.
2. Selezionare l'ambiente da usare o crearne uno nuovo.
3. Nella barra di spostamento a sinistra selezionare **+ Crea**.
4. Nella pagina **Crea la tua app**, nella sezione **Inizia da** selezionare **App vuota**.
5. Nella schermata Crea selezionare **App vuota basata su Dataverse**, quindi fare clic su **Crea**.

![Crea](/img/power-platform/exc-apps/crea-1.png)

6. Nella pagina **Nuova app basata su modello** immettere un nome e una descrizione per l'app. Immettere ad esempio "La mia prima app" per il nome e "Questa è la mia prima applicazione" basata su modello per la descrizione.
7. Dopo alcuni minuti si apre la nuova app.

![app-1](/img/power-platform/exc-apps/app-1.png)

### Aggiunta della tabella Account all'app
Per aggiungere pagine all'app, usare Progettazione app.
1. Se necessario, nel riquadro di spostamento a sinistra selezionare il **pulsante per mostrare** o **nascondere i nomi dei menu** (è il pulsante con tre linee orizzontali) per visualizzare i nomi dei menu.
2. Selezionare il testo **Group1**. Sul lato destro della schermata modificare il titolo in **Clienti**.

![app-2](/img/power-platform/exc-apps/app-2.png)

3. Usando la barra dei comandi in alto fare clic sul pulsante **+ Aggiungi pagina**.
4. Nella schermata Aggiungi pagina selezionare **Visualizzazione e modulo basati su tabella**, quindi fare clic sul pulsante Avanti.
5. Nella schermata Aggiungi pagine di modulo e visualizzazione tabella selezionare **Account**, quindi fare clic sul pulsante **Aggiungi**.

:::info Nota
L'ambiente in uso potrebbe non contenere una tabella degli account. In tal caso, è necessario crearne uno. Usare la barra di spostamento a sinistra e selezionare **Dataverse**, espandere e selezionare **Tabelle**, quindi nella barra delle operazioni nella parte superiore dello schermo selezionare **Nuova tabella**. Nel modulo visualizzato aggiungere Account nel campo Nome visualizzato, quindi fare clic su **Salva**.
:::

![new table](/img/power-platform/exc-apps/new-table-1.png)

### Aggiunta di moduli e visualizzazioni all'app
Ora che abbiamo aggiunto una tabella all'app, specifichiamo i moduli e le viste dell'account da usare con l'applicazione.
1. Dalla barra di spostamento a sinistra selezionare **Pagine**.
2. Espandere **Account** e selezionare il modulo **Account**.
3. Sul lato destro della schermata selezionare **Aggiungi modulo**.
4. Dall'elenco di moduli visualizzato selezionare **Account**.

![add form](/img/power-platform/exc-apps/add-form-1.png)

5. In **Pagine** a sinistra selezionare la vista **Account**.
6. Sul lato destro della schermata selezionare **Aggiungi visualizzazione**.
7. Selezionare la visualizzazione **Account attivi personali**.
8. Selezionare nuovamente **Aggiungi visualizzazione**.
9. Selezionare **Account attivi**.
10. Selezionare **Aggiungi visualizzazione**.
11. Selezionare **Account inattivi**.
* Account attivi personali
* Account attivi
* Account inattivi

### Aggiunta della pagina Contatto all'app
Successivamente, aggiungeremo un'altra tabella all'applicazione. In questo caso aggiungere la tabella Contacts perché un cliente potrebbe essere un account o un contatto.
1. Nella barra dei comandi in alto fare clic sul pulsante **Aggiungi pagina**.
2. Nella schermata Aggiungi pagina scegliere **Visualizzazione** e modulo **basati su tabella**, quindi fare clic sul pulsante **Avanti**.
3. Nel campo **Cerca** immettere **Contatto**, quindi selezionare la tabella **Contact**.
4. Selezionare il pulsante **Aggiungi**.

### Salvataggio e pubblicazione dell'app
Ora che la prima applicazione basata su modello è stata creata, vediamo come usarla.
1. Nella barra dei comandi in alto fare clic sul pulsante **Salva**.
2. Dopo avere salvato l'applicazione, fare clic sul pulsante **Pubblica**.
3. Per testare l'applicazione, fare clic sul pulsante **Riproduci**.

![account attivi personali](/img/power-platform/exc-apps/account-1.png)

:::info Nota
È possibile che nel proprio ambiente non si disponga di dati. Selezionare Account o Contatto e aggiungere alcuni record di esempio per testare la funzionalità.
:::