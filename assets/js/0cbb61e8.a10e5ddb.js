"use strict";(self.webpackChunkthomascristofaro_learning=self.webpackChunkthomascristofaro_learning||[]).push([[5836],{28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var o=i(96540);const r={},t=o.createContext(r);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(t.Provider,{value:n},e.children)}},92803:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"business-central/objects/codeunit","title":"Codeunit","description":"Cosa \xe8 la Codeunit","source":"@site/docs/business-central/04-objects/04-codeunit.md","sourceDirName":"business-central/04-objects","slug":"/business-central/objects/codeunit","permalink":"/learning/docs/business-central/objects/codeunit","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"businessCentralSidebar","previous":{"title":"Enum e Enum Extensions","permalink":"/learning/docs/business-central/objects/enum"},"next":{"title":"Report","permalink":"/learning/docs/business-central/objects/report"}}');var r=i(74848),t=i(28453);const s={},a="Codeunit",l={},c=[{value:"Cosa \xe8 la Codeunit",id:"cosa-\xe8-la-codeunit",level:2},{value:"Propriet\xe0 Subtype",id:"propriet\xe0-subtype",level:3},{value:"Creare una codeunit",id:"creare-una-codeunit",level:2},{value:"Propriet\xe0 RunObject",id:"propriet\xe0-runobject",level:3},{value:"I parametri",id:"i-parametri",level:3},{value:"Istruzione Exit",id:"istruzione-exit",level:3},{value:"Link Utili:",id:"link-utili",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"codeunit",children:"Codeunit"})}),"\n",(0,r.jsx)(n.h2,{id:"cosa-\xe8-la-codeunit",children:"Cosa \xe8 la Codeunit"}),"\n",(0,r.jsxs)(n.p,{children:["La ",(0,r.jsx)(n.strong,{children:"codeunit"})," \xe8 uno degli oggetti principali dell'applicazione Microsoft Dynamics 365 Business Central.\nLe codeunit raggruppano ",(0,r.jsx)(n.strong,{children:"diverse procedure"})," in un ",(0,r.jsx)(n.strong,{children:"unico oggetto"}),". E' possibile accedere a queste procedure da altre procedure contenute all'interno di pagine, tabelle e codeunit."]}),"\n",(0,r.jsxs)(n.p,{children:["Una codeunit ",(0,r.jsx)(n.strong,{children:"contiene"})," i seguenti elementi:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Trigger"}),"\n",(0,r.jsx)(n.li,{children:"Funzioni"}),"\n",(0,r.jsx)(n.li,{children:"Variabili"}),"\n",(0,r.jsx)(n.li,{children:"Propriet\xe0"}),"\n",(0,r.jsx)(n.li,{children:"Dichiarazioni"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Una codeunit contiene solo un ",(0,r.jsx)(n.strong,{children:"trigger: OnRun"}),". Questo trigger \xe8 sempre disponibile e viene implementato quando si esegue una codeunit."]}),"\n",(0,r.jsx)(n.admonition,{title:"Informazione",type:"info",children:(0,r.jsxs)(n.p,{children:["Usando la snippet ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"tcodeunit"})})," per la creazione di una codeunit con Visual Studio Code, il trigger OnRun viene generato automaticamente."]})}),"\n",(0,r.jsx)(n.h3,{id:"propriet\xe0-subtype",children:"Propriet\xe0 Subtype"}),"\n",(0,r.jsxs)(n.p,{children:["Puoi utilizzare la propriet\xe0 ",(0,r.jsx)(n.strong,{children:"Access"})," per verificare se la tua codeunit \xe8 di tipo ",(0,r.jsx)(n.em,{children:"Public"})," o ",(0,r.jsx)(n.em,{children:"Internal"}),".\nUna codeunit di tipo ",(0,r.jsx)(n.em,{children:"Public"})," pu\xf2 essere richiamata sia dalla stessa estensione che da un'altra estensione. Invece, una codeunit di tipo ",(0,r.jsx)(n.em,{children:"Internal"})," pu\xf2 essere richiamata solamente dalla stessa estensione."]}),"\n",(0,r.jsxs)(n.p,{children:["La propriet\xe0 ",(0,r.jsx)(n.strong,{children:"Subtype"})," offre cinque valori disponibili:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Normal"}),": questo \xe8 il valore predefinito per ogni nuova codeunit e ha un solo trigger: OnRun."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Install"}),": questo tipo di codeunit viene eseguito solo durante l'installazione del pacchetto di estensione. Fornisce l'accesso a due trigger aggiuntivi."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Upgrade"}),": questo tipo di codeunit viene eseguito solo durante il processo di aggiornamento di un'estensione. Offre l'accesso a cinque trigger extra."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Test"}),": questo sottotipo consente di scrivere funzioni di test dell'unit\xe0. Non \xe8 consigliato creare funzioni normali in questa codeunit poich\xe9 pu\xf2 essere eseguita solo durante il test."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"TestRunner"}),": questo sottotipo eseguir\xe0 una o pi\xf9 codeunit di test."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"creare-una-codeunit",children:"Creare una codeunit"}),"\n",(0,r.jsxs)(n.p,{children:["Per creare una nuova codeunit, puoi utilizzare lo snippet tcodeunit. Assicurati di fornire un ",(0,r.jsx)(n.strong,{children:"numero"})," e un ",(0,r.jsx)(n.strong,{children:"nome"})," per la tua codeunit."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-al",children:"codeunit 50100 MyCodeunit\n{\n    Access = Public;\n    Subtype = Normal;\n\n    trigger OnRun()\n    begin\n\n    end;\n\n    procedure MyFunction(Param1: Integer; Param2: Text[50]): Boolean\n    begin\n\n    end;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Per ",(0,r.jsx)(n.strong,{children:"accedere alle funzioni"})," all'interno di una codeunit, occorre ",(0,r.jsx)(n.strong,{children:"creare"})," prima una ",(0,r.jsx)(n.strong,{children:"variabile di tipo Codeunit"}),". Successivamente, puoi accedere a tutte le funzioni della codeunit (a seconda della loro propriet\xe0 di accesso)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-al",children:"codeunit 50101 MyCodeunit2\n{\n    trigger OnRun()\n    var\n        MyCodeUnit1: Codeunit MyCodeunit;\n        Result: Boolean;\n    being\n        Result := MyCodeUnit1.MyFunction(5, 'Test');\n    end;\n}\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"propriet\xe0-runobject",children:"Propriet\xe0 RunObject"}),"\n",(0,r.jsxs)(n.p,{children:["Si pu\xf2 accedere a una codeunit dall'interno di una pagina usando la propriet\xe0 ",(0,r.jsx)(n.strong,{children:"RunObject"})," di una action.\nSe si utilizza la propriet\xe0 RunObject, \xe8 possibile eseguire solo il trigger OnRun, non le altre funzioni all'interno della codeunit."]}),"\n",(0,r.jsxs)(n.p,{children:["Per accedere alle altre funzioni \xe8 possibile utilizzare il trigger ",(0,r.jsx)(n.strong,{children:"OnAction"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"i-parametri",children:"I parametri"}),"\n",(0,r.jsxs)(n.p,{children:["Nel contesto della creazione e utilizzo di funzioni, l'",(0,r.jsx)(n.strong,{children:"attenzione ai parametri"})," riveste un ruolo cruciale. I parametri costituiscono il ",(0,r.jsx)(n.strong,{children:"mezzo"})," attraverso il quale \xe8 possibile ",(0,r.jsx)(n.strong,{children:"trasmettere informazioni"})," a una funzione."]}),"\n",(0,r.jsx)(n.p,{children:"Quando si richiamano funzioni all'interno del codice in Visual Studio Code, l'ambiente di sviluppo offre supporto mediante l'esposizione di dettagli sui parametri necessari per ciascuna funzione. Nel momento in cui inizi a digitare, l'ItelliSense di Visual Studio Code presenta i parametri associati alla funzione, fornendo informazioni aggiuntive sulla loro corretta utilizzazione. Se un parametro \xe8 delimitato tra parentesi quadre, ci\xf2 indica che esso \xe8 facoltativo."}),"\n",(0,r.jsx)(n.p,{children:"Per definire una funzione con parametri \xe8 essenziale separare ciasun parametro mediante un punto e virgola all'interno della dichiarazione della funzione."}),"\n",(0,r.jsx)(n.h3,{id:"istruzione-exit",children:"Istruzione Exit"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-al",children:"local procedure MyFunction(): Integer\nvar\n    myResult: Integer\nbegin\n    myResult := Power(2,3);\n    exit(myResult);\nend;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Quando definisci una funzione e il suo blocco di codice ha completato l'esecuzione, se intendi che la funzione ",(0,r.jsx)(n.strong,{children:"restituisca un valore"}),", puoi utilizzare l'istruzione \"",(0,r.jsx)(n.strong,{children:"exit"}),'". Questa istruzione \xe8 particolarmente utile quando desideri interrompere la funzione in seguito al verificarsi di una condizione specifica.']}),"\n",(0,r.jsx)(n.p,{children:"Nel processo di creazione di una funzione, \xe8 comune che essa operi su diverse variabili, che possono essere sia globali che locali. Le variabili locali sono accessibili esclusivamente all'interno della funzione in cui vengono dichiarate, pertanto il loro ambito \xe8 circoscritto alla funzione corrente in fase di sviluppo."}),"\n",(0,r.jsx)(n.p,{children:"D'altra parte, le variabili globali possono essere richiamate da qualsiasi parte dell'oggetto in cui sono definite, ma non sono accessibili al di fuori di quest'ultimo. \xc8 importante notare che soltanto le funzioni globali possono essere raggiunte da altri oggetti."}),"\n",(0,r.jsx)(n.h2,{id:"link-utili",children:"Link Utili:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/it-it/dynamics365/business-central/dev-itpro/developer/devenv-codeunit-object",children:"Codeunit"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);