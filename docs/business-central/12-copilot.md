---
sidebar_label: 'Copilot'
---

# Intelligenza Artificiale, Copilot e Business Central

In un contesto aziendale in rapida evoluzione, è fondamentale comprendere i termini e lo stato attuale dell'Intelligenza Artificiale (AI) all'interno di Business Central. Il focus è sull'implementazione e l'integrazione dell'AI, in particolare con le tecnologie offerte da Microsoft.

## Intelligenza Artificiale

Nell'ecosistema Microsoft, il concetto di Intelligenza Artificiale (AI) si riferisce principalmente ai servizi offerti attraverso Azure AI. Questa suite comprende una varietà di soluzioni progettate per soddisfare esigenze specifiche in diversi scenari di business, operando su una base di pagamento per utilizzo ("pay-per-use"). 

Ogni servizio all'interno di Azure AI è specializzato in un'area operativa distinta, supportato da modelli di AI che sono stati pre-addestrati da Microsoft. Questo addestramento preventivo garantisce che i servizi siano pronti per l'uso immediato, eliminando la necessità di un lungo e costoso processo di addestramento da parte dell'utente finale.

![Azure AI](/img/business-central/ai-azureai.png)

Tra questi spicca Azure OpenAI, specificamente progettato per utilizzare i modelli avanzati di Open AI (utilizzati anche da ChatGPT) che si distinguono per la loro capacità di comprendere e generare linguaggio naturale.

Al centro di Azure AI vi è Azure Machine Learning, una piattaforma robusta e versatile per l'hosting e la gestione di modelli di AI. Questa piattaforma offre strumenti per costruire, allenare e distribuire modelli di AI in modo efficace e sicuro.

## Copilot
Il termine Copilot indica un insieme di plugin e funzionalità sviluppati da Microsoft per integrare i modelli AI, tipicamente quelli di OpenAI, nei prodotti Microsoft esistenti. Questa integrazione non segue un unico approccio tecnologico, ma è supportata da un stack tecnologico comune descritto dalla figura:

![Copilot](/img/business-central/ai-copilot.png)

* **Livello Front-end**: Questo strato è dedicato all'interfaccia utente dell'applicazione, variabile da una chat in un bot a un pannello integrato in un'app Microsoft 365, come Business Central. Qui gli utenti inseriscono i loro input, che vengono poi processati dal livello di orchestrazione AI.
* **Livello di Orchestrazione AI**: Responsabile della gestione degli input e delle risposte, questo livello si occupa del filtraggio dei messaggi, della creazione e del riutilizzo dei template per i prompt, e dell'implementazione di controlli per assicurare l'allineamento del prompt con il compito specifico. Prepara inoltre i dati necessari per risposte pertinenti alle richieste degli utenti, analizzando e formattando l'output correttamente.
* **Livello Back-end**: Gestisce l'infrastruttura che ospita il modello di AI. Solitamente, si tratta del servizio Azure Open AI che include modelli avanzati come GPT 3.5 Turbo e GPT 4, ma può anche supportare altri modelli open source come quelli di Hugging Face o i modelli Llama 2 di Meta.

## Copilot e Business Central

Esaminiamo le novità implementate in Business Central fino ad oggi, concentrandoci specificamente sulla versione 23.2 di Business Central Online. In questo contesto, "copilot" si riferisce all'integrazione di funzionalità di business con l'intelligenza artificiale di Open AI. Fino a questo momento, Microsoft ha integrato due di queste funzionalità nel prodotto e una terza è in fase di sviluppo:

* **Marketing text**: si utilizza il servizio Azure OpenAI per suggerire una descrizione di prodotto convincente basata sugli attributi, la categoria e la descrizione dell'articolo. 
    * [Learn](https://learn.microsoft.com/en-us/dynamics365/release-plan/2023wave2/smb/dynamics365-business-central/get-marketing-text-suggestions-copilot)
    * [Youtube (15 min)](https://www.youtube.com/watch?v=KpQS7c6YGRo&list=PL1FESh9FqyhT3WHs2IoXSd0GM4_NQY_bc&index=5&ab_channel=MicrosoftDynamics365BusinessCentral)
* **Riconciliazioni bancarie (preview)**: si utilizza il servizio Azure OpenAI per suggerire il corretto matching tra i movimenti, si utilizza prima l’algoritmo di base di Business Central e per i movimenti rimanenti per cui non è riuscito a collegare passa per l’AI. 
    * [Learn](https://learn.microsoft.com/en-us/dynamics365/release-plan/2023wave2/smb/dynamics365-business-central/complete-bank-account-reconciliation-faster-copilot)
    * [Youtube (20 min)](https://www.youtube.com/watch?v=jhfwx1K0I7Y&list=PL1FESh9FqyhT3WHs2IoXSd0GM4_NQY_bc&index=4&ab_channel=MicrosoftDynamics365BusinessCentral) - consigliato
* **Chat with Copilot**: si chatterà direttamente su BC come si fa con chatGPT, funzionalità ancora non rilasciata, uscirà in preview a febbraio 2024. [Per saperne di più](https://learn.microsoft.com/en-us/dynamics365/release-plan/2023wave2/smb/dynamics365-business-central/chat-copilot#try-it-out)

Queste funzionalità devono essere abilitate nella pagina Feature Management e nella nuova pagina **Copilot & AI Capabilities**. [Qui](https://yzhums.com/44565/) una guida.

### Copilot toolkit
La novità più significativa risiede nel modo in cui queste due funzionalità sono state sviluppate: Microsoft ha introdotto il **Copilot toolkit** per AL, che include una serie di oggetti preconfigurati per la connessione ai servizi Azure OpenAI e un nuovo tipo di pagina (denominata PromptDialog). Quest'ultima permette di integrare l'interazione con l'intelligenza artificiale all'interno dell'interfaccia grafica di Business Central. Grazie a questo innovativo toolkit, anche i partner hanno ora la possibilità di sviluppare e integrare nuove funzionalità AI nelle applicazioni e nei processi già esistenti.
* [Video youtube di 50 min](https://www.youtube.com/watch?v=lNASlydCidI&list=PL1FESh9FqyhT3WHs2IoXSd0GM4_NQY_bc&index=3&ab_channel=MicrosoftDynamics365BusinessCentral)
* [Learn integrazione BC con Copilot](https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/ai-integration-landing-page)

Per capire come utilizzare il toolkit è possibile vedere il codice sorgente della funzionalità già rilasciate:
* page 5836 Copilot Marketing Text nella base app
* per un esempio più completo vedere l’estensione [Bank Account Reconciliation With AI](https://github.com/microsoft/ALAppExtensions/tree/main/Apps/W1/BankAccRecWithAI/app/src)

In tutti i casi l’architettura è semplice, si manda un prompt strutturato in un certo modo ad OpenAI, se ne legge la risposta e la si ingloba nei dati di BC:
![AI BC](/img/business-central/ai-bc.png)

## Modello di costo
Il modello di costo NON è quello di Microsoft 365 Copilot. Le funzionalità standard di Microsoft Copilot in Business Central sono incluse nella licenza BC. Ovviamente, se si costruiscono delle funzionalità custom bisogna avere il proprio modello OpenAI rilasciato su Azure e quindi pagare il relativo servizio a consumo.

## Business Central OnPrem
La domanda è: Non posso usare le funzionalità standard, ma posso creare delle feature custom di copilot su BC on prem? Al momento ho provato a far partire la nuova tipologia di pagina e non ho riscontrato nessun problema, ma ancora non ho provato il collegamento ad Azure, perché non abbiamo il servizio OpenAI attivo sulla nostra sottoscrizione, stiamo aspettando da Microsoft il via libera.
