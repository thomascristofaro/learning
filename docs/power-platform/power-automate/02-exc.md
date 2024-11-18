# Esercizio - Creazione di un flusso Power Automate di base

Nell'esercizio seguente si crea un flusso istantaneo usato per inviare un promemoria in 1 minuto.

#### Attività 1 - Creazione del flusso
1. In una finestra del browser andare a [https://make.powerautomate.com/](https://make.powerautomate.com/).
2. Nella barra di spostamento a sinistra selezionare **+ Crea**.
3. Nella schermata Inizia da un modello inserire il testo "pulsante" nel campo **cerca tutti i modelli**, quindi premere **INVIO**.
4. Individuare e selezionare il flusso **Invia un promemoria a me stesso tra 10 minuti**. Se richiesto, selezionare **Crea flusso**.
5. Nella schermata **Dettagli flusso** selezionare il pulsante **Modifica**.
6. Nel menu visualizzato selezionare **Modifica con finestra di progettazione**.
7. Nel campo del nome immettere il testo **ricordamelo tra 1 minuto**.
8. Selezionare il pulsante **Avanti**.
9. Nel passaggio **Ritardo** modificare il campo **Conteggio su 1 minuto**.
10. Nel passaggio **Invia una notifica push** immettere il testo seguente nel campo **Testo: Ecco il promemoria di 1 minuto "Proprio nome"**.
11. Selezionare il pulsante **Salva**.

#### Attività 2 - Test del flusso
In questa attività usiamo l'applicazione per dispositivi mobili Power Automate per attivare il promemoria.
1. Se l'applicazione **Power Automate** per dispositivi mobili non è già installata nel dispositivo, scaricare l'app dallo store delle app del dispositivo.
2. Dopo averla scaricata, accedere all'applicazione per dispositivi mobili con le proprie credenziali.
3. Selezionare l'icona **Account** nella parte inferiore dell'app.
4. Nella sezione **Ambiente** passare all'ambiente in cui è stato creato il pulsante di flusso.
5. Selezionare **OK**.
6. Dopo aver caricato tutto i componenti, selezionare l'icona **Pulsante** nella parte inferiore dell'app.
7. Selezionare il pulsante **Ricordamelo tra 1 minuto**.
8. Dopo 1 minuto, si riceve una notifica push sul dispositivo mobile.
