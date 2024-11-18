# Docker Container

## Cosa sono i Container
**Docker**: è un *software container environment* multipiattaforma. Consente di creare pacchetti software leggeri, autonomi ed eseguibili che include tutto il necessario per eseguire un'applicazione: codice, runtime, strumenti di sistema, librerie di sistema e impostazioni. I pacchetti possono essere distribuiti in modo che altre macchine *(host)* possano eseguirli in un ambiente completamente isolato e virtualizzato. Un pacchetto è denominato *image*.

**Docker Image**: è un modello con all'interno tutto ciò che è necessario per eseguire l'applicazione. Le immagini Docker sono archiviate in registri, il più noto è [Docker Hub](https://hub.docker.com/). Un'immagine Docker viene spesso confusa con una macchina virtuale, ma è diversa. Non necessita di un sistema operativo completo per essere eseguita. Inoltre, nessuna GUI è presente in un'immagine e non è possibile connettersi usando il protocollo Remote Desktop Protocol (RDP).

**Docker Container**: è un'istanza di un'immagine che viene creata al momento della sua esecuzione. Quindi tutte le modifiche non vengono memorizzate all'interno dell'immagine, ma nel container istanziato. È possibile creare più contenitori della stessa immagine e tutti memorizzeranno le relative modifiche in file diversi e non interferiranno tra loro.
 
Differenza tra container e macchina virtuale:
   
   ![docker-1](/img/business-central/docker-1.png)

## Perché si utilizzano
Spesso nei progetti software si hanno situazioni in cui, dopo l'installazione in un ambiente di produzione, si verificano errori che non erano presenti nell'ambiente di sviluppo. Con Docker, è possibile avere gli ambienti allineati tra produzione e sviluppo.

Per Business Central, è possibile utilizzare immagini equivalenti a un'installazione locale o a una sandbox cloud. Quando si esegue un contenitore di un'immagine sandbox cloud, il contenitore rileva che è in esecuzione come nel cloud (ci sono delle differenze).

Un container Docker può essere usato solo in un ambiente di sviluppo, non in produzione. È possibile eliminare e ricreare rapidamente un contenitore Docker; è questo il motivo per cui tutti i contenitori di Business Central vengono creati con il database Cronus. È possibile avviare un contenitore, sviluppare e testare la funzionalità sul database Cronus e arrestare il contenitore. Un approccio è quello di creare uno script in PowerShell per creare rapidamente un contenitore e salvare lo script anziché provare a salvare il contenitore.

## Installazione di Docker
Aprire **Windows PowerShell** come amministratore, ed installare Hyper-V eseguendo il seguente comando:

```
Enable-WindowsOptionalFeature -Online -FeatureName Hyper-V
```

Nel caso in cui il comando non funzionasse, attivare la funzionalità cercando su start **Funzionalità Windows** e abilitandola da lì:

   ![docker-2](/img/business-central/docker-2.png)

Scaricare e installare [Docker Desktop per Windows](https://docs.docker.com/desktop/install/windows-install/).
 
Dopo l'installazione, fare clic con il pulsante destro del mouse sull'elemento Docker nella barra delle applicazioni di Windows e selezionare P**assa a contenitori Windows**. Riavviare il pc dopo averlo fatto.

   ![docker-3](/img/business-central/docker-3.png)

È possibile testare l'installazione eseguendo il seguente comando per recuperare la versione installata:

```
1 docker version
```

## BcContainerHelper
Una volta installato Docker, è possibile utilizzarlo tramite i suoi comandi shell indipendenti da Business Central. Una panoramica dell'utilizzo tramite comandi o tramite estensione Visual Studio Code viene data da questa pagina: Comandi Docker di base

In questa guida però ci concentreremo sull'utilizzo di docker con Business Central.

**BcContainerHelper** è una raccolta di script di PowerShell creati da Microsoft per aiutare gli sviluppatori a creare e gestire container per Business Central, è un wrapper di comandi docker. Questi script offrono un modo intuitivo per gestire molte delle azioni comunemente usante in un container di Business Central. È utile anche in ambienti DevOps per configurare le pipeline di compilazione tramite i contenitori. 

Prima di iniziare, è necessario installare il modulo in PowerShell. Aprire un comando PowerShell come amministratore e digitare: 

```
1 install-module bccontainerhelper -Force
```

### Creazione e rimozione di un contenitore
Per creare un nuovo contenitore Business Central, è possibile usare il cmdlet [New-BcContainer](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-set-up-an-environment), esempio:

```
1 New-BcContainer -accept_eula `
2    -containerName 'mydemo' `
3    -credential $credential `
4    -auth 'UserPassword' `
5    -artifactUrl Get-BcArtifactUrl -type 'OnPrem' -country 'w1' -select 'Latest' `
6    -licenseFile '<Path to license file>'
```

Il comando **Remove-BcContainer** consente di rimuovere un contenitore in modo semplice:

```
Remove-BCContainer -containerName MyDevContainer
```

### Creazione guidata
In alternativa, come soluzione ancora più semplice, è possibile usare il cmdlet **New-BcContainerWizard**. Questa procedura guidata semplifica la creazione di un nuovo contenitore di Business Central completando i diversi passaggi (lasciare l'impostazione di default se non diversamente specificato):

1. Accettare le condizioni di licenza.
2. Selezionare il contenitore locale o la macchina virtuale di Azure.
3. Configurare l'autenticazione desiderata.
4. Impostare un nome per il contenitore.
5. Selezionare una versione.
6. Selezionare un paese/area geografica. -> it
7. Scegliere se installare il toolkit di test.
8. Assegnare gli utenti del piano Premium. -> yes
9. Creare gli utenti per il test.
10. Sviluppo sulla base app.
11. AL Language Extension.
12. Caricare una licenza. -> percorso licenza
13. Usare il database demo Cronus o connettersi a un database esistente.
14. Multitenant.
15. Configurare il DNS.
16. SSL.
17. Selezionare l'isolamento del processo o l'isolamento Hyper-V.
18. Selezionare il limite di memoria.
19. Se si vuole salvare l'immagine.
 
Il risultato della procedura guidata è la creazione di uno script PowerShell che usa il cmdlet **New-BcContainer** per l'esecuzione del contenitore. È possibile salvare lo script per usarlo successivamente. Esempio di script creato:

```
1  $containerName = 'mysandbox'
2  $password = 'P@ssw0rd'
3  $securePassword = ConvertTo-SecureString -String $password -AsPlainText -Force
4  $credential = New-Object pscredential 'admin', $securePassword
5  $auth = 'UserPassword'
6  $artifactUrl = Get-BcArtifactUrl -type 'Sandbox' -country 'it' -select 'Latest'
7  $licenseFile = '<Path to license file>'
8  New-BcContainer `
9    -accept_eula `
10    -containerName $containerName `
11    -credential $credential `
12    -auth $auth `
13    -artifactUrl $artifactUrl `
14    -assignPremiumPlan `
15    -licenseFile $licenseFile
16    -updateHosts
```

Una volta che lo script è andato a buon fine, possiamo andare su Docker Desktop per vedere il risultato:

   ![docker-4](/img/business-central/docker-4.png)

In questa pagina abbiamo una panoramica di tutti i container che abbiamo creato. Troveremo anche quello creato con il nostro script, attendere che il suo stato diventi "Running" e quindi provare a raggiungere Business Central tramite Url:

* Se container multitenant: http://'nome_container'/BC/?tenant=default
* Senza multitenant: http://'nome_container'/BC/

Per accedere utilizzare le credenziali impostate quando abbiamo creato lo script.

### Compilazione e pubblicazione di un'estensione
Un contenitore offre un modo efficace per compilare un'estensione in uno scenario DevOps. **BcContainerHelper** include diversi cmdlet che agevolando la compilazione e la pubblicazione di estensioni AL.

Usare il cmdlet **Compile-AppInBcContainer** per compilare l'estensione, il risultato finale è la generazione di un file **.app**.

```
Compile-AppInBCContainer -containerName MyDevContainer
                           -appProjectFolder c:\AL\Demo\
```

 Dopo aver compilato un'app, è possibile pubblicarla in un contenitore tramite **Publish-BcContainerApp**:

```
Publish-BcContainerApp -containerName MyTestContainer
                        -appFile "c:\AL\Demo\Cronus_Demo_1.0.0.0.app"
                        -skipVerification # serve se l'app non è firmata
                        -sync
                        -install # installa anche l'estensione
```

### Utilizzo su Visual Studio Code
L'utilizzo sull'ambiente di sviluppo è uguale a qualsiasi altro ambiente di BC, dobbiamo solo fare attenzione al launch.json:

 ```
{
   "version": "0.2.0",
   "configurations": [
       {
           "name": "Container Launch",
           "request": "launch",
           "type": "al",
           "environmentType": "Sandbox",
           "server": "http://<nome_container>/",
           "serverInstance": "BC",
           "tenant": "default",
           "authentication": "UserPassword"
       }
   ]
}
```

Quando chiede le credenziali, utilizzare quelle impostate alla generazione del container.

## Comandi utili
È possibile ottenere la lista di comandi del modulo tramite:

```
Get-Command -Module BcContainerHelper
```

[Qui](https://ricardopaiva.github.io/cheatsheet/business-central-bccontainerhelper-cheat-sheet/ è possibile trovare una lista documentata.

## Differenza tra container Sandbox e OnPrem
Il container sandbox accetta la pubblicazione di app con target diverso dal "Cloud" (quindi anche app che contengono codice .NET). Per fare in modo che il container sandbox accetti solo app con target "Cloud", utilizzare il seguente comando:

```
Set-BcContainerServerConfiguration -ContainerName $containerName -keyName ExtensionAllowedTargetLevel -keyValue Cloud
```

Abbiamo quindi la possibilità di scegliere che tipo di container utilizzare se SandBox o OnPrem, di seguito le differenze:

   ![docker-5](/img/business-central/docker-5.png)

Anche i dati di demo sono differenti tra i due container. C'è la possibilità di utilizzare la proprietà **runSandboxAsOnPrem**, quando si utilizza il cmdlet **New-BcContainer**, che permette di eseguire un container sandbox come un onprem.

Differenze tra una vera sandbox online e un container sandbox:

   ![docker-6](/img/business-central/docker-6.png)

Importante il fatto che, come indicato nella tabella, **non è possibile installare estensioni dal marketplace su un container sandbox**.

## Cambiare Esperienza Utente
Se durante la navigazione in una sandbox business central appena creata ci accorgiamo che non troviamo tutte le aree (ad esempio manufacturing e service), cioè non riusciamo a trovare delle pagine all'interno del sistema, è perchè sicuramente è da cambiare l'esperienza utente da essentials a premium all'interno di informazioni società:

   ![docker-7](/img/business-central/docker-7.png)

### Link utili/fonti
Questa guida è stata redatta con l'utilizzo di diverse guide e materiali:
* [Learn Microsoft sui Container Business Central](https://learn.microsoft.com/it-it/training/modules/use-docker-business-central/)
* [BcContainerHelper Cheatsheet (e altre cose utili)](https://ricardopaiva.github.io/cheatsheet/business-central-bccontainerhelper-cheat-sheet/)
* [Differenze tra online sandbox e container sandbox](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-sandbox-overview#development-sandbox-overview)
* [Differenze tra container sandbox e onprem](https://demiliani.com/2021/08/12/dynamics-365-business-central-sandbox-vs-onprem-docker-containers/)
* [Waldo: cannot download a runtime package from AppSource](https://www.waldo.be/2021/03/03/setting-up-docker-containers-with-apps-from-appsource/)
   * è stata aperta una richiesta a Microsoft: [Ability to downloaded a runtime package for a given version from AppSource](https://experience.dynamics.com/ideas/idea/?ideaid=42616aad-587b-eb11-8fed-0003ff4582f9)
* Link bonus: [Publishing apps to online environment with BcContainerHelper](https://freddysblog.com/2021/01/27/publishing-apps-to-a-business-central-online-environment/)