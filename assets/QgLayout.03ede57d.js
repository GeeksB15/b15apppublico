import{_ as E,Y as y,aE as p,ci as w,aF as k,p as m,o as f,i as h,w as n,f as i,B as C,x as d,j as S,E as b,t as v,D as u,k as F,e as D,b6 as j,K as A,A as U,G as B,a6 as I,I as V,H as O}from"./index.fec41db1.js";import{M as Q}from"./MenuAbas.dd006e29.js";const P={components:{Avatar:y,MenuAbas:Q},computed:{textoEmpresasSelecionadas(){return this.empresasSelecionadas.length===1?this.empresasSelecionadas[0]:this.empresasSelecionadas.length+" empresas"}},data(){return{carregando:!1,contatosEmpresa:[],dados:{},empresas:this.renovarEmpresas(),empresasSelecionadas:[],erroEmpresas:!1,erroPeriodo:!1,filtro:this.renovarFiltro(),showingHelp:!1,showFilters:!1}},methods:{checarEmpresasSelecionadas(){if(this.empresas.selected.length){this.erroEmpresas=!1;return}this.erroEmpresas=!0},checarPeriodo(){if(new Date(this.filtro.periodo.ini)<=new Date(this.filtro.periodo.fim)){this.erroPeriodo=!1;return}this.erroPeriodo=!0},async atualizar(){let s,e;s=new Date(new Date(new Date().setDate(1)).setHours(0,0,0,0)),e=new Date(new Date(new Date(s).setMonth(s.getMonth()+1)).setDate(0)),await this.obterCodigoContatoUsuario(),await this.obterCodigoClienteSistema(),await this.obterEmpresas(),this.filtro={codigoClienteSistema:this.codigoClienteSistema,codigoContatoUsuario:this.codigoContatoUsuario,dataConsulta:new Date,empresas:this.empresas.selected,periodo:{ini:s,fim:e}},!(await this.obterConsultaRecente()&&(this.carregando=!1,!(new Date-new Date(this.filtro.dataConsulta)>5*6e4)))&&this.filtrar()},async criarObjStoreIDB(){if(!("indexedDB"in window)){console.log("Navegador sem suporte ao IndexedDB");return}let s=indexedDB.open("qg",1);return s.onupgradeneeded=function(e){var t=e.target.result;t.createObjectStore("consultasRecentes",{keyPath:"id"}).createIndex("id","id",{unique:!0})},new Promise((e,t)=>{s.onsuccess=function(a){e()},s.onerror=function(a){e()}})},async filtrar(){if(!this.empresas.selected.length){this.erroEmpresas=!0;return}if(new Date(this.filtro.periodo.ini)>new Date(this.filtro.periodo.fim)){this.erroPeriodo=!0;return}this.showFilters=!1,this.carregando=!0,this.filtro.periodo.ini=new Date(this.filtro.periodo.ini).toISOString(),this.filtro.periodo.fim=new Date(this.filtro.periodo.fim).toISOString(),this.filtro.dataConsulta=new Date,this.filtro.empresas=this.empresas.selected.map(t=>t.value),this.empresasSelecionadas=this.empresas.options.filter(t=>this.empresas.selected.find(a=>t.valor===a)).map(t=>t.rotulo);let s=await this.$utils.geeksApi({"qg-empresa":{funcao:"9E4CD702-00E3-4200-8642-AC1CE9F0EF77",codigoContatoUsuario:this.filtro.codigoContatoUsuario,empresas:this.filtro.empresas,periodo:this.filtro.periodo}});this.dados.empresa=s.data["qg-empresa"];let e=(await p.contato.ler({filtros:{ativo:!0,usuario:!0}})).data;e=e.concat((await p.contato.ler({filtros:{ativo:!0,vendedores:!0}})).data),s=await this.$utils.geeksApi({"qg-equipe":{funcao:"5EA3C6F8-CF77-4692-A2E2-B8DC2592E2B7",codigoContatoUsuario:Array.from(new Set(e.map(t=>t.codigoContato))),codigoClienteSistema:this.filtro.codigoClienteSistema,empresas:this.filtro.empresas,periodo:this.filtro.periodo}}),this.dados.equipe=s.data["qg-equipe"],s=await this.$utils.geeksApi({"qg-estoque":{funcao:"C2166CBA-1FE6-4A52-9098-6EC9E386A53A",codigoContatoUsuario:e.map(t=>t.codigoContato),codigoClienteSistema:this.filtro.codigoClienteSistema,empresas:this.filtro.empresas,periodo:this.filtro.periodo}}),this.dados.estoque=s.data["qg-estoque"],console.log(JSON.stringify(this.dados)),this.salvarConsultaRecente(),this.carregando=!1},async obterConsultaRecente(){await this.criarObjStoreIDB();const s=String(this.codigoClienteSistema)+"_"+String(this.codigoContatoUsuario)+"/usuario";let e=await this.obterObjIDb(s);return e?(this.filtro={codigoClienteSistema:this.codigoClienteSistema,codigoContatoUsuario:this.codigoContatoUsuario,empresas:e.empresas,dataConsulta:new Date(e.dataConsulta),periodo:e.periodo},this.empresasSelecionadas=this.empresas.options.filter(t=>this.filtro.empresas.find(a=>t.valor===a)).map(t=>t.rotulo),this.empresas.selected=this.filtro.empresas,this.dados=e.dados,!0):!1},async obterCodigoClienteSistema(){let s,e;s=JSON.parse(localStorage.getItem("clienteSistema"))||{},e=s.codigoClienteSistema,w(!e,"Cliente Sistema n\xE3o encontrado"),this.codigoClienteSistema=e},async obterCodigoContatoUsuario(){const e=(JSON.parse(localStorage.getItem("usuario"))||{}).numeroDocumentoNacional;let t={};if(e){let a;a=await k().contato.where({numeroDocumentoNacional:e}).toArray(),t=a.find(o=>o.ativo&&!o.excluido&&o.codigoUsuario)||{}}try{w(!t.id,"Contato n\xE3o encontrado")}catch{}this.codigoContatoUsuario=t.codigoContato},async obterEmpresas(){this.contatosEmpresa=(await p.contato.ler({filtros:{ativo:!0,empresas:!0}})).data,this.empresas.options=this.contatosEmpresa.map(s=>({label:s.apelido,value:s.codigoContato})),this.empresas.selected=this.empresas.options.map(s=>s)},obterObjIDb(s){if(!("indexedDB"in window))return;let e,t,a;return e=new Promise((o,l)=>{a=o}),t=indexedDB.open("qg",1),t.onsuccess=function(){t=t.result.transaction(["consultasRecentes"],"readwrite").objectStore("consultasRecentes").get(s),t.onsuccess=function(c){a(c.target.result)},t.onerror=function(c){a()}},e},renovarEmpresas(){return{selected:[],options:[]}},renovarFiltro(){return{codigoClienteSistema:"",codigoContatoUsuario:"",dataConsulta:"",empresas:[],periodo:{ini:"",fim:""}}},async salvarConsultaRecente(){await this.criarObjStoreIDB(),this.salvarObjIDb({id:String(this.filtro.codigoClienteSistema)+"_"+String(this.filtro.codigoContatoUsuario)+"/usuario",periodo:this.filtro.periodo,dataConsulta:this.filtro.dataConsulta.toISOString(),empresas:this.empresas.selected,dados:this.dados})},salvarObjIDb(s){if(!("indexedDB"in window))return;let e,t,a;return e=new Promise((o,l)=>{a=o}),t=indexedDB.open("qg",1),t.onsuccess=function(){t=t.result.transaction(["consultasRecentes"],"readwrite").objectStore("consultasRecentes").put(s),t.onsuccess=function(c){a()},t.onerror=function(c){a()}},e},limparFiltros_click(){},debug(){}},created(){this.atualizar()}},R={class:"u-container"},N={class:"row text-subtitle1"},H={class:"bg-tertiary text-white round-borders q-pa-sm q-mx-xs"},z={class:"q-pa-md"},M={class:"q-pa-md"},T=d("span",{class:"col-12 text-body1 text-dark"},"Periodo",-1),J={class:"row q-col-gutter-x-sm q-pa-md"},L={class:"u-container"};function G(s,e,t,a,o,l){const c=m("avatar"),_=m("row"),g=m("campo"),q=m("router-view"),x=m("MenuAbas");return f(),h(O,{class:"Qg",onClick:e[7]||(e[7]=r=>l.debug())},{default:n(()=>[i(C,{class:"bg-gradiente text-white"},{default:n(()=>[d("div",R,[i(_,{class:"items-center q-mx-none q-px-none q-py-xs"},{default:n(()=>[o.filtro.empresas.length>1?(f(),h(S,{key:0,size:"1.7rem",name:"business",rounded:""})):(f(),h(c,{key:1,imagem:(o.contatosEmpresa.find(r=>r.codigoContato===o.filtro.empresas[0])||{}).imagem,rotulo:(o.contatosEmpresa.find(r=>r.codigoContato===o.filtro.empresas[0])||{}).apelido,tamanho:"40"},null,8,["imagem","rotulo"])),i(b,null,{default:n(()=>[d("div",N,[d("div",H,v(o.filtro.empresas.length)+" Empresas ",1)])]),_:1}),i(u,{icon:"help_outline",size:"md",flat:"",dense:"",round:"",onClick:e[0]||(e[0]=r=>o.showingHelp=!o.showingHelp)}),i(u,{icon:"mdi-refresh",size:"md",flat:"",dense:"",class:"no-shadow q-mr-xs",onClick:l.filtrar},{default:n(()=>[i(F,null,{default:n(()=>[D(" Atualizado em: "+v(s.$filters.dataHora(this.filtro.dataConsulta)),1)]),_:1})]),_:1},8,["onClick"]),i(u,{icon:"mdi-filter",size:"md",flat:"",dense:"",class:"no-shadow",onClick:e[1]||(e[1]=r=>o.showFilters=!o.showFilters)})]),_:1})])]),_:1}),i(j,{side:"right",id:"mydrawer",bordered:"",modelValue:o.showFilters,"onUpdate:modelValue":e[6]||(e[6]=r=>o.showFilters=r)},{default:n(()=>[i(A,{view:"hHh lpR lFr"},{default:n(()=>[i(U,{class:"bg-white","height-hint":"98"},{default:n(()=>[i(C,{color:"white",class:"text-tertiary"},{default:n(()=>[i(S,{class:"text-h5",name:"mdi-filter"}),i(b,null,{default:n(()=>[D("Filtro Avan\xE7ado")]),_:1}),i(u,{dense:"",flat:"",icon:"close",round:"",onClick:e[2]||(e[2]=r=>o.showFilters=!o.showFilters)})]),_:1})]),_:1}),i(B,null,{default:n(()=>[d("div",z,[i(I,{filled:"",multiple:"",modelValue:o.empresas.selected,"onUpdate:modelValue":e[3]||(e[3]=r=>o.empresas.selected=r),options:o.empresas.options,label:"Empresas",style:{width:"250px"}},null,8,["modelValue","options"])]),d("div",M,[T,i(g,{modelValue:o.filtro.periodo.ini,"onUpdate:modelValue":e[4]||(e[4]=r=>o.filtro.periodo.ini=r),tipo:"data",class:"no-shadow full-width",rotulo:"De",col:"12",after:[{icon:"mdi-close-circle",handler(){o.filtro.periodo.ini=""}}],dense:""},null,8,["modelValue","after"]),i(g,{modelValue:o.filtro.periodo.fim,"onUpdate:modelValue":e[5]||(e[5]=r=>o.filtro.periodo.fim=r),tipo:"data",class:"no-shadow full-width",rotulo:"at\xE9",col:"12",after:[{icon:"mdi-close-circle",handler(){o.filtro.periodo.fim=""}}],dense:""},null,8,["modelValue","after"])])]),_:1}),i(V,{class:"bg-white"},{default:n(()=>[d("div",J,[i(u,{class:"col-6",color:"tertiary",flat:"",label:"Limpar",unelevated:"",onClick:l.limparFiltros_click},null,8,["onClick"]),i(u,{class:"col-6 no-shadow",color:"primary",label:"Aplicar",unelevated:"",onClick:l.filtrar},null,8,["onClick"])])]),_:1})]),_:1})]),_:1},8,["modelValue"]),i(x,{objetoPai:"qg"},{default:n(()=>[d("div",L,[i(q,{dados:o.dados,carregando:o.carregando},null,8,["dados","carregando"])])]),_:1})]),_:1})}var W=E(P,[["render",G]]);export{W as default};