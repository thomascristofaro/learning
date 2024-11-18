# Controlli e Schermate in Power Apps

### Controlli

Un controllo è un elemento dell'interfaccia utente che produce un'azione o visualizza informazioni. Molti controlli in Power Apps sono analoghi ai controlli usati in altre app, ovvero etichette, caselle di immissione del testo, elenchi a discesa, elementi di navigazione e così via. Grazie ai controlli è possibile fornire l'esperienza utente che riflette al meglio ciò che si desidera offrire.

È possibile accedere ai controlli di Power Apps nella scheda **Inserisci**.

![Controlli](/img/power-platform/controls-1.png)

Ecco alcuni dei controlli comuni che possono rendere le app più interessanti e di maggiore impatto:
* **Raccolte**: questi controlli sono contenitori di layout che includono un set di controlli che mostrano le righe di un'origine dati. Sono controlli comunemente usati quando si desidera visualizzare più record contemporaneamente.
* **Moduli**: questi controlli visualizzano i dettagli relativi ai dati e consentono di creare e modificare i record.
* **Elementi multimediali**: questi controlli consentono di aggiungere immagini di sfondo e includono un pulsante fotocamera per scattare foto dall'app, un lettore di codice a barre, per acquisire rapidamente le informazioni di identificazione, e altro ancora.
* **Grafici**: questi controlli consentono di aggiungere grafici così gli utenti possono eseguire un'analisi immediata mentre sono in viaggio.

### Schermata di esplorazione (BrowseScreen1)
La schermata di esplorazione comprende più controlli. Ecco alcuni dei controlli della schermata di esplorazione con cui si acquisirà familiarità:
* **BrowseGallery1**: questo controllo Gallery occupa la maggior parte della schermata e visualizza i dati dall'origine dati.
* **NextArrow1**: quando si seleziona questo controllo Icon, si apre la schermata dei dettagli.
* **IconNewItem1**: quando si seleziona un altro controllo Icon, si apre la schermata di modifica/creazione.

![Site Inspector 2](/img/power-platform/site-inspector-2.png)

### Esplorazione della schermata dei dettagli
La schermata dei dettagli è denominata DetailScreen1 per impostazione predefinita. Ecco alcuni dei controlli presenti:

![Site Inspector 3](/img/power-platform/site-inspector-3.png)

1. **DetailForm1**: questo controllo contiene altri controlli e una scheda dati per ogni colonna della riga visualizzata.
2. **Address_DataCard1**: è un controllo scheda. Ogni scheda rappresenta una singola colonna della riga. In questo caso, mostra l'Indirizzo dalla tabella SiteInspector, come illustrato nell'unità precedente.
3. **IconEdit1**: quando si seleziona questo controllo, viene aperta la schermata di modifica/creazione in modo che l'utente possa modificare l'elemento corrente.

### Schermata di creazione/modifica
La terza schermata nell'app è **EditScreen1**. Ecco alcuni dei controlli presenti:

![Site Inspector 4](/img/power-platform/site-inspector-4.png)

1. **EditForm1**: questo controllo contiene altri controlli e una scheda dati per ogni colonna della riga modificata.
2. **Address_DataCard2**: questo è un controllo della scheda che mostra l'indirizzo dalla tabella SiteInspector, come mostrato nell'unità precedente.
3. **IconAccept1**: quando si seleziona questo controllo, vengono salvate le modifiche dell'utente.

### Installazione dell'app sul dispositivo
Power Apps può essere usato su dispositivi mobili con l'applicazione per dispositivi mobili Power Apps. Se si desidera scoprire come appare su un dispositivo mobile, installare l'app Power Apps Mobile sul telefono.

1. Scaricare Power Apps Mobile dall'app store per la piattaforma che si desidera usare.
2. Accedere usando nome utente e password personali.
3. Sul telefono o tablet eseguire l'app Contoso Site Tracking in Power Apps Mobile. Se non si vuole installare l'app, è possibile eseguirla in un browser.

Se l'app Power Apps in fase di creazione viene usata su un dispositivo mobile, è consigliabile controllare come viene visualizzata e come viene eseguita sui dispositivi mobili per offrire agli utenti un'esperienza ottimale.