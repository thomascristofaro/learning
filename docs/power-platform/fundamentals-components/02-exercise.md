# Esercizio - Creazione di tabelle e colonne

:::info Importante

Questo lab pratico presuppone che sia disponibile un'istanza di Dataverse che è possibile usare. Se non si ha un'istanza con cui è possibile usare, è possibile ottenere un piano di valutazione di Power Apps di 30 giorni nel link qui sotto.

* [Esplorare Power Apps gratuitamente per 30 giorni](https://learn.microsoft.com/it-it/power-apps/maker/signup-for-powerapps)

:::

### Analisi
**Contoso Real Estate**

Contoso Real Estate vuole essere in grado di tenere traccia delle proprietà che vendono in Dataverse in modo che i dati possano essere facilmente usati nelle applicazioni canvas e basate su modello. Per presentare come creare una tabella in Microsoft Dataverse, si sta creando una tabella di base in un'istanza di Dataverse esistente per archiviare le proprietà immobiliari.

* Nome proprietà
* Richiesta di prezzo
* Bedrooms
* Bathrooms
* Client (questo campo è un campo di ricerca in grado di cercare un account o un contatto)

***

Dopo aver chiarito le necessità dell'azienda procediamo:

1. Aprire un Web browser e passare a [https://make.powerapps.com](https://make.powerapps.com).
2. Usando lo spostamento a sinistra, selezionare **Tabelle**.
3. Nella schermata **Tabelle** selezionare **Nuova tabella**. Nel menu visualizzato selezionare **Nuova tabella**.
4. Completare la tabella come indicato di seguito:
   * **Nome visualizzato**: Proprietà immobiliare
   * **Nome plurale**: Proprietà immobiliari

   ![New Table 1](/img/power-platform/exc-fundamentals/new-table-1.png)

5. Selezionare la scheda **Colonne primarie**.

   ![New Table 2](/img/power-platform/exc-fundamentals/new-table-2.png)

6. Modificare il nome visualizzato in **Nome proprietà**.
7. Selezionare il pulsante **Salva** per creare la tabella. La creazione della tabella può richiedere alcuni minuti.
8. Dopo aver creato la tabella, nella sezione **Schema** selezionare **Colonne**.
9. Selezionare il pulsante **+ Nuova colonna** .
10. Configurare la nuova colonna come segue:
* **Nome visualizzato**: Richiesta di prezzo
* **Tipo di dati**: Valuta

   ![New column 1](/img/power-platform/exc-fundamentals/new-column-1.png)

11. Fare clic sul pulsante **Salva**.
12. Selezionare di nuovo il pulsante **+ Nuova colonna**.
13. Configurare la nuova colonna come segue:
* **Nome visualizzato**: Camere
* **Tipo di dati**: Numero intero (numero > intero)

   ![New column 2](/img/power-platform/exc-fundamentals/new-column-2.png)

14. Fare clic sul pulsante **Salva**.
15. Selezionare di nuovo il pulsante **+ Nuova colonna** .
16. Configurare la nuova colonna come segue:
* **Nome visualizzato**: Bagni
* **Tipo di dati**: Numero intero (numero > intero)

   ![New column 3](/img/power-platform/exc-fundamentals/new-column-3.png)

17. Fare clic sul pulsante **Salva**.
18. Selezionare di nuovo il pulsante **+ Nuova colonna**.
19. Configurare la nuova colonna come segue:
* **Nome visualizzare**: Client
* **Tipo di dati**: Customer (Lookup > Customer)

   ![New column 4](/img/power-platform/exc-fundamentals/new-column-4.png)

20. Fare clic sul pulsante **Salva**.

È stata creata correttamente una tabella in Dataverse. Da questa tabella è possibile creare moduli e viste basati su che possono essere usati nelle applicazioni basate su modello oppure connettersi alla tabella in un'applicazione canvas.