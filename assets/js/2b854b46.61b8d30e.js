"use strict";(self.webpackChunkthomascristofaro_learning=self.webpackChunkthomascristofaro_learning||[]).push([[2078],{2949:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/select-a-team-for-this-app-2d84c9a8c84a073e834bf6ac1e8a614e.png"},12300:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/teams-68945f184ecacdf32d3c9daffae2e582.png"},23616:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/create-app-1-3b230a80f30446b35435b5912907438d.png"},28453:(e,a,i)=>{i.d(a,{R:()=>t,x:()=>o});var n=i(96540);const r={},s=n.createContext(r);function t(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(s.Provider,{value:a},e.children)}},61951:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"power-apps/integration/integrate-teams","title":"Integrazione di Teams","description":"Microsoft Dataverse for Teams (precedentemente denominato Project Oakdale) \xe8 una piattaforma dati integrata a basso codice per Teams che ti consente di creare app, bot e flussi di lavoro personalizzati in Teams usando Power Apps e Power Automate. Dataverse for Teams, basato su Microsoft Dataverse (precedentemente denominato Common Data Service), fornisce spazio di archiviazione relazionale, tipi di dati avanzati, governance a livello aziendale e distribuzione della soluzione con un clic all\'app store di Teams.","source":"@site/docs/power-apps/integration/00-integrate-teams.md","sourceDirName":"power-apps/integration","slug":"/power-apps/integration/integrate-teams","permalink":"/learning/docs/power-apps/integration/integrate-teams","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{},"sidebar":"powerAppsSidebar","previous":{"title":"Integrazioni con altre app","permalink":"/learning/docs/category/integrazioni-con-altre-app"},"next":{"title":"Connettori personalizzati","permalink":"/learning/docs/power-apps/integration/custom_connector"}}');var r=i(74848),s=i(28453);const t={},o="Integrazione di Teams",l={},p=[{value:"Attivit\xe0 iniziali per la creazione di app in Teams",id:"attivit\xe0-iniziali-per-la-creazione-di-app-in-teams",level:2},{value:"Attivit\xe0 iniziali per la creazione di flussi e chatbot in Teams",id:"attivit\xe0-iniziali-per-la-creazione-di-flussi-e-chatbot-in-teams",level:2},{value:"Creare la prima app in Microsoft Teams",id:"creare-la-prima-app-in-microsoft-teams",level:2},{value:"Creare l&#39;app",id:"creare-lapp",level:2},{value:"Link",id:"link",level:2}];function c(e){const a={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"integrazione-di-teams",children:"Integrazione di Teams"})}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Microsoft Dataverse for Teams"})," (precedentemente denominato Project Oakdale) \xe8 una piattaforma dati integrata a basso codice per Teams che ti consente di creare app, bot e flussi di lavoro personalizzati in Teams usando Power Apps e Power Automate. Dataverse for Teams, basato su ",(0,r.jsx)(a.strong,{children:"Microsoft Dataverse"})," (precedentemente denominato Common Data Service), fornisce ",(0,r.jsx)(a.strong,{children:"spazio di archiviazione relazionale"}),", tipi di ",(0,r.jsx)(a.strong,{children:"dati avanzati"}),", ",(0,r.jsx)(a.strong,{children:"governance"})," a livello aziendale e ",(0,r.jsx)(a.strong,{children:"distribuzione della soluzione"})," con un clic all'app store di Teams."]}),"\n",(0,r.jsxs)(a.p,{children:["La nuova app Power Apps in Teams offre un'esperienza integrata per gli autori di app per creare e ",(0,r.jsx)(a.strong,{children:"modificare app"})," e ",(0,r.jsx)(a.strong,{children:"flussi di lavoro"})," all'interno di Teams e ",(0,r.jsx)(a.strong,{children:"pubblicarli"})," e ",(0,r.jsx)(a.strong,{children:"condividerli rapidamente per tutti i membri del team"})," che possono utilizzarli senza dover passare tra pi\xf9 app e servizi. Con Power Apps Studio incorporato nell'app Power Apps in Teams e la nuova piattaforma dati integrata che fornisce una tabella dati modificabile e di facile utilizzo, \xe8 possibile creare rapidamente app basate su tabelle di dati personalizzate che sono specifiche di Teams e dello scenario."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Teams",src:i(12300).A+"",width:"1894",height:"1058"})}),"\n",(0,r.jsx)(a.h2,{id:"attivit\xe0-iniziali-per-la-creazione-di-app-in-teams",children:"Attivit\xe0 iniziali per la creazione di app in Teams"}),"\n",(0,r.jsxs)(a.p,{children:["Esistono ",(0,r.jsx)(a.strong,{children:"due modi per utilizzare le app"})," create utilizzando Power Apps in Teams:"]}),"\n",(0,r.jsxs)(a.p,{children:["Puoi utilizzare l'app Power Apps dal ",(0,r.jsx)(a.strong,{children:"catalogo Teams predefinito"})," come app personale e creare app da condividere con i team in Teams."]}),"\n",(0,r.jsxs)(a.p,{children:["Un ",(0,r.jsx)(a.strong,{children:"nuovo ambiente Dataverse"})," for Teams viene creato per il team selezionato quando crei un'app in Teams con l'app Power Apps per la prima volta o installi un'app creata con Power Apps dal catalogo delle app per la prima volta. L'ambiente Dataverse for Teams \xe8 ",(0,r.jsx)(a.strong,{children:"utilizzato per archiviare"}),", ",(0,r.jsx)(a.strong,{children:"gestire"})," e ",(0,r.jsx)(a.strong,{children:"condividere app"}),", ",(0,r.jsx)(a.strong,{children:"flussi"})," e ",(0,r.jsx)(a.strong,{children:"chatbot specifici"})," del team.\nOgni team pu\xf2 avere un ambiente Dataverse for Teams e tutti i dati, le app e i flussi creati con l'app Power Apps in un team sono disponibili da tale ambiente."]}),"\n",(0,r.jsx)(a.p,{children:"Quando crei un'app in Teams con l'app Power Apps per la prima volta o installi un'app creata con Power Apps dal catalogo delle app per la prima volta, devi scegliere quale team \xe8 responsabile della personalizzazione, manutenzione e condivisione dell'app."}),"\n",(0,r.jsx)(a.p,{children:"Dopo aver selezionato un team, verr\xe0 creato un nuovo ambiente Dataverse for Teams se non ne esiste gi\xe0 uno. Ci\xf2 fornir\xe0 l'area di lavoro necessaria al tuo team per collaborare su tutti i tuoi dati, app, flussi e bot. Altre informazioni: Informazioni sull'ambiente Dataverse for Teams"}),"\n",(0,r.jsx)(a.h2,{id:"attivit\xe0-iniziali-per-la-creazione-di-flussi-e-chatbot-in-teams",children:"Attivit\xe0 iniziali per la creazione di flussi e chatbot in Teams"}),"\n",(0,r.jsx)(a.p,{children:"\xc8 possibile creare:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Flussi Power Automate"})," tramite la nuova app Power Apps in Teams."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Chatbot"})," tramite la nuova app Power Virtual Agents in Teams."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"creare-la-prima-app-in-microsoft-teams",children:"Creare la prima app in Microsoft Teams"}),"\n",(0,r.jsx)(a.p,{children:"Puoi creare, modificare ed eliminare app canvas in Teams. Se stai creando un'app utilizzando Power Apps in un team di Teams per la prima volta, verr\xe0 creato un nuovo ambiente Dataverse for Teams. Altre informazioni: Informazioni sull'ambiente Dataverse for Teams"}),"\n",(0,r.jsx)(a.p,{children:"La creazione di un'app in Microsoft Teams \xe8 un processo rapido e semplice in 3 passaggi."}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Creare l'app"}),"\n",(0,r.jsx)(a.li,{children:"Creare la prima tabella"}),"\n",(0,r.jsx)(a.li,{children:"Personalizzare e pubblicare l'app"}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"creare-lapp",children:"Creare l'app"}),"\n",(0,r.jsx)(a.p,{children:"Dopo l'installazione del modello di app Power Apps:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Avvia Teams e accedi."}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Nel riquadro di sinistra, seleziona Power Apps e quindi Inizia ora."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Creare l&#39;app",src:i(23616).A+"",width:"780",height:"481"})}),"\n",(0,r.jsxs)(a.ol,{start:"3",children:["\n",(0,r.jsxs)(a.li,{children:["Ti verr\xe0 chiesto di selezionare un team in cui desideri creare l'app. \xc8 l\xe0 che l'app sar\xe0 attiva. I membri del team non possono vedere l'app finch\xe9 non la pubblichi. Avrai anche l'opportunit\xe0 di condividere l'app con i colleghi della tua azienda che non fanno parte del team. Ulteriori informazioni: ",(0,r.jsx)(a.strong,{children:"Impostare l'autorizzazione e condividere le app con i colleghi"}),"."]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Selezionare un team",src:i(2949).A+"",width:"486",height:"502"})}),"\n",(0,r.jsxs)(a.ol,{start:"4",children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Seleziona ",(0,r.jsx)(a.strong,{children:"Crea"}),". Verr\xe0 visualizzata una conferma relativa alla creazione dell'ambiente Dataverse for Teams, operazione che potrebbe richiedere del tempo. Riceverai una notifica quando l'ambiente sar\xe0 disponibile per creare la tua prima app con un messaggio e-mail e una notifica di Teams."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Immetti un nome per l'app, quindi seleziona ",(0,r.jsx)(a.strong,{children:"Salva"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Dai un nome all&#39;app",src:i(90131).A+"",width:"709",height:"411"})}),"\n",(0,r.jsxs)(a.p,{children:["Power Apps pu\xf2 essere utilizzato in ",(0,r.jsx)(a.strong,{children:"quattro scenari"})," con Teams."]}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Scenario"}),(0,r.jsx)(a.th,{children:"Descrizione"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.strong,{children:"Incorporare un'app canvas come app scheda"})}),(0,r.jsx)(a.td,{children:"Usa la scheda Power Apps per Teams per incorporare un'app canvas come app scheda in Teams. L'app canvas integra dati aziendali da un'ampia variet\xe0 di origini dati Microsoft e di terze parti, tra cui Dataverse."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.strong,{children:"Incorporare un'app canvas come app personale"})}),(0,r.jsx)(a.td,{children:"Incorpora un'app canvas come app personale Teams principale. L'app canvas integra dati aziendali da un'ampia variet\xe0 di origini dati Microsoft e di terze parti, tra cui Dataverse."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.strong,{children:"Incorporare un'app basata su modello come app scheda"})}),(0,r.jsx)(a.td,{children:"Incorporare un'app basata su modello come app scheda (anteprima)"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.strong,{children:"Incorporare un'app basata su modello come app personale"})}),(0,r.jsx)(a.td,{children:"Incorporare un'app basata su modello come app personale in Teams di prima categoria"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.strong,{children:"Creare app in Teams supportate da Microsoft Dataverse for Teams"})}),(0,r.jsx)(a.td,{children:"Usa la nuova app Power Apps in Teams per creare app canvas in Teams con il supporto di Dataverse for Teams, la nuova piattaforma dati integrata con uso limitato di codice per Teams. Dataverse for Teams consente agli utenti di creare app, bot e flussi di lavoro personalizzati, utilizzando rispettivamente Power Apps, Power Virtual Agents e Power Automate senza mai uscire dall'interfaccia di Teams."})]})]})]}),"\n",(0,r.jsx)(a.h2,{id:"link",children:"Link"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://learn.microsoft.com/it-it/power-apps/teams/create-apps-overview",children:"Integrazione Teams"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://learn.microsoft.com/it-it/power-apps/maker/data-platform/work-with-any-type-app",children:"Utilizzare qualsiasi tipo di app"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://learn.microsoft.com/it-it/power-apps/maker/data-platform/work-with-any-type-app#integrazione-con-le-app-utilizzando-eventi",children:"Integrazione app usando eventi"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://kumavision.com/it/blog/was-sind-microsoft-power-apps",children:"Integrazioni Power Apps"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://learn.microsoft.com/it-it/power-apps/teams/overview",children:"Integrazione tra Power Apps e Microsoft Teams"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},90131:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/name-your-app-179e7a0411f8db2d13233c4ce1f172ad.png"}}]);