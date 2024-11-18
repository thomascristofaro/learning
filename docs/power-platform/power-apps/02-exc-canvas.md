# Esercizio - Creazione di un'app canvas

In questo esercizio genereremo un'app canvas la cui origine dati è una cartella di lavoro di Microsoft  Excel archiviata in Microsoft OneDrive for Business. Questa cartella di lavoro di Excel contiene una tabella di diversi edifici di proprietà di Contoso Manufacturing. Oggi è necessario inviare tramite e-mail una cartella di lavoro condivisa per aggiornare varie persone che sono in viaggio verso diverse località. Grazie a un'app canvas di Power Apps tutti potranno visualizzare gli edifici direttamente dai propri telefoni. Inoltre, potranno modificare le informazioni e aggiungere nuovi edifici.

### Connessione a un'origine dati
Per stabilire una connessione a un'origine dati, attenersi alla procedura indicata di seguito:
1. Scaricare il file [Contoso-Site-Tracking.zip](https://github.com/MicrosoftDocs/mslearn-build-app-solution/raw/master/downloads/Contoso-Site-Tracking.zip), estrarre tutti i file e salvarli in OneDrive for Business.
2. Visitare la pagina [https://make.powerapps.com](https://make.powerapps.com) e accedere con il proprio account aziendale.
3. Nel riquadro a sinistra selezionare **Crea**.
4. Nella sezione **Inizia dai dati** selezionare **Excel**.
5. In Connessioni scegliere **OneDrive for Business**. Se non è disponibile alcuna connessione, fare clic su **Nuova connessione** per crearne una.
6. Per **Scegliere un file di Excel** sulla destra, selezionare il file **Contoso Site Tracking.xlsx**.
7. Per **Scegliere una tabella**, fare clic su **SiteInspector**, quindi su **Connetti**.

Power Apps genera l'app ispezionando i dati e abbinandoli alle funzionalità Power Apps in modo da ottenere un'app funzionante come punto di partenza. Le app generate sono sempre basate su un singolo elenco o una singola tabella, ma è possibile aggiungere altri dati all'app in un secondo momento.

![SiteInspector](/img/power-platform/exc-apps/site-inspector-1.png)

### Esplorazione dell'app generata
Ora la nuova app a tre schermate si apre in Power Apps Studio. Tutte le app generate a partire dai dati presentano lo stesso set di schermate visualizzabili dal riquadro Schermi:
* **Schermata di esplorazione**: visualizzata per impostazione predefinita. In questa schermata è possibile esplorare, ordinare, ricercare e aggiornare i dati dall'origine dati. Per aggiungere elementi all'origine dati nella schermata di esplorazione, selezionare il segno più (+).

:::info Nota
Viene elencato come BrowseScreen1 nell'interfaccia utente.
:::

* **Schermata dei dettagli**: mostra tutti i dettagli relativi a un singolo elemento. Qui è possibile aprire un elemento per modificarlo o eliminarlo.

:::info Nota
Viene elencato come DetailScreen1 nell'interfaccia utente.
:::

* **Schermata di modifica/creazione**: in questa schermata è possibile modificare un elemento esistente oppure crearne uno nuovo.

L'immagine mostra come apparirà l'app a tre schermate in App Studio.

![App Studio](/img/power-platform/exc-apps/app-studio.png)

Selezionare **Riproduci** Screenshot della freccia per avvio anteprima app. nell'angolo in alto a destra per esercitarsi a usare l'app. Tenere presente che l'app include tutti i dati della tabella e offre un'esperienza predefinita ottimale.
Una volta completata la creazione dell'app Contoso Site Tracking, è necessario provare a usarla e verificarne il design. 
Dopo avere esplorato l'app, chiudere la modalità di anteprima selezionando la "X" nell'angolo in alto a destra. Per rendere visibile l'app sul telefono, è necessario salvarla.

***

### Salvataggio dell'app
Per salvare l'app, selezionare il pulsante Salva accanto al pulsato Riproduci. Sostituire il titolo corrente "App" con **App Contoso Site Tracking**, quindi selezionare Salva. Una volta che si sono salvate tutte le modifiche, è visibile un segno di spunta verde.