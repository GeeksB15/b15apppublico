import{_ as U,r as V,o as d,n as I,f as a,w as o,O as D,R as _,y as q,N as C,j as g,k as t,t as y,F as z,s as S,d as p,e as h,B as m,m as P,S as r,T as i,bw as L,Q as B,P as Q,q as N,G as O,M as T,C as $,L as R,E as M,h as H,i as j,H as G,I as W}from"./index.d682ddd7.js";import{L as X}from"./Lista.c53031ae.js";import"./QBtnDropdown.785e79fc.js";import"./QBtnGroup.63fe7f92.js";import"./QDate.1f80798a.js";import"./xlsx.2a09bf71.js";const J={components:{Lista:X},data(){return{autorizacaoVisivel:!1,codAutorizacao:"",idDocumentoAutorizar:"",lista:[],totalOperadora:0,totalSistema:0,pesquisa:{mostrar:!1,local:"",dados:[]},mostrar:{barraTopo:!0,toolbarTitulo:!0,icone:"repeat",titulo:"Concilia\xE7\xE3o",buscar:!0,filtroAvancado:!0,btnAjuda:!0,btnAtualizar:!0,btnNovo:!1,toolbarAcoes:!0,checkBox:!1,btnRemover:!1,btnRestaurar:!1,centralizaTabs:!0,btnDetalhes:!1,btnExportaXLS:!1,btnMenuMais:!1,toolbarAdicao:!1,bannerMsg:""},busca:"",filtros:{termoBusca:"",periodo:{ini:"",fim:""}},tabSelecionada:{valor:"Todos"},tabs:[{icone:"east",rotulo:"",valor:"Operadora",dica:"Operadora"},{icone:"west",rotulo:"",valor:"Sistema",dica:"Sistema"},{icone:"close",rotulo:"",valor:"Conciliar",dica:"Conciliar"},{icone:"check",rotulo:"",valor:"Conciliado",dica:"Conciliado"},{icone:"sync_alt",rotulo:"",valor:"Todos",dica:"Todos"}],paginacao:{atual:1,maximo:1,total:1,limite:25}}},methods:{async atualizar(e){try{$q.loading.show();const c=this.tabSelecionada.valor,f=void 0,s=(await $db.configuracoes.porNome("conciliacao.exato",f))[0].valor.split(";"),u={periodoIni:this.filtros.periodo.ini,periodoFim:this.filtros.periodo.fim,cnpj:"64.762.321/0001-06",urlws:s[0],usws:s[1],chws:s[2],clws:s[3]};let b=0;if(u.periodoIni||b++,u.periodoFim||b++,u.cnpj||b++,u.urlws||b++,u.usws||b++,u.chws||b++,u.clws||b++,b===0){const x=(await $utils.geeksApi({conciliar:{funcao:"D52CE568-CFC1-40A2-9897-D6C12B98E85E",...u}})).pagamento;await this.gravarPagamentos(x);const F=await this.buscarPagamentos(u),l=await this.buscarBanco();let n=await this.verificarConciliacao(l,F);this.totalOperadora=n.filter(A=>A.local==="API").length,this.totalSistema=n.filter(A=>A.local==="B15").length,c==="Operadora"&&(n=n.filter(A=>A.local==="API"),this.totalOperadora=n.length||0,this.totalSistema=0),c==="Sistema"&&(n=n.filter(A=>A.local==="B15"),this.totalOperadora=0,this.totalSistema=n.length||0),c==="Conciliar"&&(n=n.filter(A=>A.local==="B15/API"&&A.IdDocumentoConciliado===null),this.totalOperadora=n.length||0,this.totalSistema=n.length||0),c==="Conciliado"&&(n=n.filter(A=>A.local==="B15/API"&&A.IdDocumentoConciliado!=null),this.totalOperadora=n.length||0,this.totalSistema=n.length||0),this.lista=n,this.paginacao.total=n.length||0}}catch(c){console.log(c.message)}finally{$q.loading.hide()}},async gravarPagamentos(e){await $utils.geeksApi({conciliacaoGravarPagamento:{funcao:"B8EDB668-AE73-45AD-8A3D-3976ADAF07F5",pagamentos:e}})},async pesquisarPagamentos(e){const c=await $utils.geeksApi({conciliacaoPesquisarPagamento:{funcao:"374180B3-FEA9-4E75-A6E3-CB29BCD02CA7",data:e.dataVencimento,valor:e.valor,cnpj:e.cnpj}});this.pesquisa={mostrar:!0,local:"API",dados:c.data.conciliacaoPesquisarPagamento,pesquisado:e},console.log("PESQUISA PAGAMENTOS: ",this.pesquisa)},async IgnorarVenda(e){await $utils.geeksApi({conciliacaoIgnorarVenda:{funcao:"F9BFB585-762F-4585-B813-7644BA8BC761",idDocumento:e.idDocumento,dataVencimento:e.dataVencimento}}),e.conciliacaoIgnorar=1},async desmarcarIgnorarVenda(e){await $utils.geeksApi({conciliacaoDesmarcarIgnorarPagamento:{funcao:"E52BFB16-E002-47D6-A9CC-D7D31FDA38B2",idDocumento:e.idDocumento,dataVencimento:e.dataVencimento}}),e.conciliacaoIgnorar=0},async IgnorarPagamento(e){await $utils.geeksApi({conciliacaoIgnorarPagamento:{funcao:"5B9D896F-16AE-4696-B332-E93EF21BC3D7",id:e.id}}),e.ignorado=1},async desmarcarIgnorarPagamento(e){await $utils.geeksApi({conciliacaoDesmarcarIgnorarPagamento:{funcao:"78CE933D-CD60-46B5-904D-15AC31B39592",id:e.id}}),e.ignorado=0},async pesquisarVendas(e){const c=await $utils.geeksApi({conciliacaoPesquisarVendas:{funcao:"9486D20C-1AB0-4BE7-AE43-6C1E56DB078A",valor:e.valbruto,data:e.dataVencimento,cnpj:e.cnpj}});this.pesquisa={mostrar:!0,local:"B15",dados:c.data.conciliacaoPesquisarVendas,pesquisado:e},console.log("PESQUISA VENDAS: ",this.pesquisa)},async showDetails(e){e.showPreviewDetail===void 0&&(e.showPreviewDetail=!1),e.showPreviewDetail=!doc.showPreviewDetail},async buscarPagamentos(e){return(await $utils.geeksApi({conciliacaoBuscarPagamentos:{funcao:"3C281E1C-6FA8-4230-87CA-0828F8FAF6F3",periodoIni:`${e.periodoIni}`,periodoFim:`${e.periodoFim}`,cnpj:`${e.cnpj}`}})).data.conciliacaoBuscarPagamentos},async buscarBanco(){const e=[],c=await $utils.geeksApi({conciliacaoBuscarBanco:{funcao:"D372AF3F-E26E-4713-9BAC-A5D02CE15CB5",periodoIni:`${this.filtros.periodo.ini}`,periodoFim:`${this.filtros.periodo.fim}`}});for(const f of c.data.conciliacaoBuscarBanco)e.push({idDocumento:f==null?void 0:f.id,autorizacao:f==null?void 0:f.Autorizacao,dataVencimento:f==null?void 0:f.fRecDataVencimento,valor:f==null?void 0:f.fRecValor,contato:f==null?void 0:f.Contato,conciliacaoIgnorar:f==null?void 0:f.conciliacaoIgnorar});return e},async verificarConciliacao(e,c){const f=[];e||(e=[]),c||(c=[]),{...e};for(const k of e){const s={...k};s.local="",s.cor="";const u=c.find(b=>b.aut===k.autorizacao.toUpperCase());u&&(s.local="B15/API",u.valbruto===k.valor&&(s.cor="positive"),u.valbruto!==k.valor&&(s.cor="warning",s.maisOpcoes={},s.maisOpcoes.valorApi=u.valbruto,s.maisOpcoes.valorB15=k.valor)),u||(s.local="B15",s.cor="primary"),f.push(s)}for(const k of c){const s={...k,dataVencimento:k.dtprevpag},u=f.findIndex(b=>{var w;return((w=b==null?void 0:b.autorizacao)==null?void 0:w.toUpperCase())===k.aut});u>=0&&(f[u]={...f[u],...s}),u<0&&(s.local="API",s.cor="secondary",f.push(s))}return f.sort((k,s)=>{const u=new Date(k.dataVencimento),b=new Date(s.dataVencimento);return u<b?-1:1}),f},abrirModalAutorizacao(e){this.idDocumentoAutorizar="",this.codAutorizacao="",this.idDocumentoAutorizar=e,this.autorizacaoVisivel=!0},async atualizarAutorizacao(e){if((await $utils.geeksApi({ret:{funcao:"1BC5882D-845C-4149-A2DA-9781B6F9E4E7",idDocumento:this.idDocumentoAutorizar,autorizacao:e}})).status===200){const f=this.lista.findIndex(k=>(k==null?void 0:k.idDocumento)===this.idDocumentoAutorizar);this.lista[f].autorizacao=e}},conciliar(e){$q.dialog({title:"Conciliar",message:"",cancel:{label:"Ignorado",color:"negative",push:!0,flat:!0},ok:{label:"Conciliar",push:!0,class:"primary"}}).onOk(async()=>{console.log("Conciliar..."),console.log(e),console.log(this.pesquisa.pesquisado);let c={};if(this.pesquisa.pesquisado&&this.pesquisa.pesquisado.local==="B15"){const f={id:e.id,idDocumento:this.pesquisa.pesquisado.idDocumento,dataVencimento:this.pesquisa.pesquisado.dataVencimento};c=await $utils.geeksApi({conciliacaoConciliarVenda:{funcao:"42EA13DF-173B-4354-9E5C-26A8A551FF5A",pagamento:f}})}if(this.pesquisa.pesquisado&&this.pesquisa.pesquisado.local==="API"){const f={id:this.pesquisa.pesquisado.id,idDocumento:e.id,dataVencimento:e.dcpDataVencimento};c=await $utils.geeksApi({conciliacaoConciliarVenda:{funcao:"42EA13DF-173B-4354-9E5C-26A8A551FF5A",pagamento:f}})}this.pesquisa.pesquisado===void 0&&(c=await $utils.geeksApi({conciliacaoConciliarVenda:{funcao:"42EA13DF-173B-4354-9E5C-26A8A551FF5A",pagamento:e}})),console.log(c)})},pesquisaLimpar(){this.pesquisa={mostrar:!1,local:"",dados:[]}},limparFiltrosClick(){this.filtros={termoBusca:"",periodo:{ini:"",fim:""}}}},mounted(){this.atualizar()}},K={class:"text-weight-bold",style:{"font-size":"22px"}},Y={style:{float:"right"}},Z=m("div",{style:{"text-align":"right"}},null,-1),aa={class:"text-weight-bold",style:{"font-size":"22px"}},oa=m("span",{style:{float:"right"}},"-0,00",-1),la=m("div",{class:"text-h6"},"Atualizar C\xF3dgio de Autoriza\xE7\xE3o",-1),ea={class:"text-weight-bold",style:{"font-size":"22px"}},ta={style:{float:"right"}},ra={class:"text-weight-bold",style:{"font-size":"22px"}},na=m("span",{style:{float:"right"}},"-0,00",-1);function sa(e,c,f,k,s,u){const b=V("campo"),w=V("badge"),x=V("BadgeCopiarUid"),F=V("Lista",!0);return d(),I("div",null,[a(F,{busca:s.busca,"onUpdate:busca":c[2]||(c[2]=l=>s.busca=l),onFiltro_change:u.atualizar,onLimparFiltrosClick:u.limparFiltrosClick,lista:s.lista,tabSelecionada:s.tabSelecionada,tabs:s.tabs,paginacao:s.paginacao,mostrar:s.mostrar},{filtroCampos:o(()=>[a(b,{modelValue:s.filtros.periodo.ini,"onUpdate:modelValue":c[0]||(c[0]=l=>s.filtros.periodo.ini=l),rotulo:"Data Concilia\xE7\xE3o",dense:"",tipo:"data",class:"q-mb-xs"},null,8,["modelValue"]),a(b,{modelValue:s.filtros.periodo.fim,"onUpdate:modelValue":c[1]||(c[1]=l=>s.filtros.periodo.fim=l),rotulo:"at\xE9",dense:"",tipo:"data",class:"q-mb-xl"},null,8,["modelValue"])]),itemLista:o(()=>[a(D,{bordered:"",class:"bg-light q-mb-xs rounded-borders"},{default:o(()=>[a(_,{class:"justify-center no-margin q-py-sm text-center"},{default:o(()=>[a(q,{flat:"",bordered:"","rounded-borders":"",style:{"min-width":"320px",width:"auto","max-width":"320px"}},{default:o(()=>[a(C,{class:"text-subtitle1 text-weight-bold"},{default:o(()=>[a(g,{name:"credit_card",size:"sm",class:"q-mr-sm"}),t(" Operadora ("+y(s.totalOperadora)+") ",1)]),_:1})]),_:1}),a(q,{flat:"",class:"bg-transparent"},{default:o(()=>[a(C,{style:{width:"58px"}})]),_:1}),a(q,{flat:"",bordered:"","rounded-borders":"",style:{"min-width":"320px",width:"auto","max-width":"320px"}},{default:o(()=>[a(C,{class:"text-subtitle1 text-weight-bold"},{default:o(()=>[a(g,{name:"mdi-cloud-outline",size:"sm",class:"q-mr-sm"}),t(" Sistema ("+y(s.totalSistema)+") ",1)]),_:1})]),_:1})]),_:1}),(d(!0),I(z,null,S(s.lista,l=>(d(),I("div",{key:l.idDocumento},[a(_,{class:"justify-center"},{default:o(()=>[a(q,{flat:"",bordered:"","rounded-borders":"",class:"q-py-xs q-pa-sm",style:{"min-width":"320px",width:"auto","max-width":"320px"}},{default:o(()=>[(l==null?void 0:l.local)==="API"||(l==null?void 0:l.local)==="B15/API"?(d(),p(C,{key:0},{default:o(()=>[a(w,{cor:l.cor,escuro:"",class:"q-mr-sm"},{default:o(()=>[t("Status")]),_:2},1032,["cor"]),l.ignorado?(d(),p(w,{key:0,cor:"orange",escuro:"",class:"q-mr-sm"},{default:o(()=>[t("Ignorado")]),_:1})):h("",!0)]),_:2},1024)):h("",!0),a(C,{class:"q-pt-none"},{default:o(()=>[(l==null?void 0:l.local)==="API"||(l==null?void 0:l.local)==="B15/API"?(d(),I(z,{key:0},[m("div",K,[t(y(e.$filters.numero(l==null?void 0:l.valbruto,2))+" ",1),m("span",Y,y(e.$filters.numero(l==null?void 0:l.valtxadm,2)),1),a(P,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[t("Valor Liquido")]),_:1})]),Z,a(D,null,{default:o(()=>[a(_,{clickable:""},{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"mdi-calendar-today"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>{var n;return[t(y(e.$filters.data((n=l.dtvenda)!=null?n:"")),1)]}),_:2},1024),a(i,{caption:""},{default:o(()=>[t("Data de Venda")]),_:1})]),_:2},1024)]),_:2},1024),a(_,{clickable:""},{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"mdi-calendar-today"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>{var n;return[t(y(e.$filters.data((n=l==null?void 0:l.dtprevpag)!=null?n:l.dataVencimento)),1)]}),_:2},1024),a(i,{caption:""},{default:o(()=>[t("Previs\xE3o de Pagamento")]),_:1})]),_:2},1024)]),_:2},1024),a(_,{clickable:""},{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"credit_card"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>{var n;return[t(y((n=l.bandeira)!=null?n:""),1)]}),_:2},1024),a(i,{caption:""},{default:o(()=>{var n;return[t(y((n=l.operadora)!=null?n:""),1)]}),_:2},1024)]),_:2},1024),a(r,{class:"col-auto"},{default:o(()=>[l.nsu?(d(),p(L,{key:0,color:"tertiary",class:"q-mr-sm"},{default:o(()=>[t(y(e.$filters.numero(l==null?void 0:l.taxa,2))+"% ",1),a(P,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[t("Taxa")]),_:1})]),_:2},1024)):h("",!0)]),_:2},1024)]),_:2},1024),a(_,{clickable:""},{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"key"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>{var n;return[t(y((n=l==null?void 0:l.aut)!=null?n:""),1)]}),_:2},1024),a(i,{caption:""},{default:o(()=>[t("Autoriza\xE7\xE3o")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)],64)):(d(),p(D,{key:1},{default:o(()=>[a(_,{clickable:""},{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"remove"})]),_:1}),l.conciliacaoIgnorar?(d(),p(r,{key:1,clickable:"",onClick:n=>u.desmarcarIgnorarVenda(l)},{default:o(()=>[a(i,null,{default:o(()=>[t("Desmarcar Ignorarado")]),_:1})]),_:2},1032,["onClick"])):(d(),p(r,{key:0,clickable:"",onClick:n=>u.IgnorarVenda(l)},{default:o(()=>[a(i,null,{default:o(()=>[t("Ignorar")]),_:1})]),_:2},1032,["onClick"]))]),_:2},1024),l.conciliacaoIgnorar?h("",!0):(d(),p(_,{key:0,clickable:""},{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"add"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>[t("Criar registro")]),_:1})]),_:1})]),_:1})),l.conciliacaoIgnorar?h("",!0):(d(),p(_,{key:1,clickable:""},{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"search"})]),_:1}),a(r,{onClick:n=>u.pesquisarPagamentos(l)},{default:o(()=>[a(i,null,{default:o(()=>[t("Pesquisar registro Pagamentos")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)),l.conciliacaoIgnorar?h("",!0):(d(),p(_,{key:2,clickable:""},{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"question_mark"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>[t("Sugest\xE3o")]),_:1})]),_:1})]),_:1}))]),_:2},1024))]),_:2},1024)]),_:2},1024),a(q,{flat:"",class:"bg-transparent"},{default:o(()=>[a(C,{class:"full-height items-center justify-center q-pa-sm",style:{display:"flex"}},{default:o(()=>[(l==null?void 0:l.local)==="B15"?(d(),p(B,{key:0,onClick:n=>u.conciliar(l),flat:"",round:"",icon:"west"},null,8,["onClick"])):h("",!0),(l==null?void 0:l.local)==="API"?(d(),p(B,{key:1,onClick:n=>u.conciliar(l),flat:"",round:"",icon:"east"},null,8,["onClick"])):h("",!0),(l==null?void 0:l.local)==="B15/API"&&l.IdDocumentoConciliado===null?(d(),p(B,{key:2,onClick:n=>u.conciliar(l),flat:"",round:"",icon:"close"},null,8,["onClick"])):h("",!0),(l==null?void 0:l.ignorado)&&(l==null?void 0:l.IdDocumentoConciliado)!=null?(d(),p(B,{key:3,onClick:n=>u.conciliar(l),flat:"",round:"",icon:"equal","text-color":"green"},null,8,["onClick"])):h("",!0)]),_:2},1024)]),_:2},1024),a(q,{flat:"",bordered:"","rounded-borders":"",class:"q-py-xs q-pa-sm",style:{"min-width":"320px",width:"auto","max-width":"320px"}},{default:o(()=>[(l==null?void 0:l.local)==="B15"||(l==null?void 0:l.local)==="B15/API"?(d(),p(C,{key:0},{default:o(()=>[a(w,{cor:l.cor,escuro:"",class:"q-mr-sm"},{default:o(()=>[t("Status")]),_:2},1032,["cor"]),l.conciliacaoIgnorar?(d(),p(w,{key:0,cor:"orange",escuro:"",class:"q-mr-sm",onClick:n=>u.desmarcarIgnorarPagamento(l)},{default:o(()=>[t("Ignorado")]),_:2},1032,["onClick"])):h("",!0),a(x,{id:l==null?void 0:l.idDocumento,cor:"light",class:"text-tertiary"},null,8,["id"])]),_:2},1024)):h("",!0),a(C,{class:"q-pt-none"},{default:o(()=>[(l==null?void 0:l.local)==="B15"||(l==null?void 0:l.local)==="B15/API"?(d(),I(z,{key:0},[m("div",aa,[t(y(e.$filters.numero(l==null?void 0:l.valor,2))+" ",1),oa]),a(D,null,{default:o(()=>[a(_,{clickable:""},{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"mdi-calendar-today"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>[t("00/00/0000")]),_:1}),a(i,{caption:""},{default:o(()=>[t("Data de emiss\xE3o")]),_:1})]),_:1})]),_:1}),a(_,{clickable:""},{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"mdi-calendar-today"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>[t(y(e.$filters.data(l.dataVencimento)),1)]),_:2},1024),a(i,{caption:""},{default:o(()=>[t("Data de vencimento")]),_:1})]),_:2},1024)]),_:2},1024),a(_,{clickable:""},{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"credit_card"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>[t("FormaPagamento")]),_:1}),a(i,{caption:""},{default:o(()=>[t("PARCELA")]),_:1})]),_:1})]),_:1}),a(_,{clickable:""},{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"key"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>{var n;return[t(y((n=l.autorizacao)!=null?n:"\xA0"),1)]}),_:2},1024),a(i,{caption:""},{default:o(()=>[t("Autoriza\xE7\xE3o")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)],64)):(d(),p(D,{key:1},{default:o(()=>[a(_,{clickable:""},{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{name:"remove",color:"tertiary"})]),_:1}),l.ignorado?(d(),p(r,{key:1,clickable:"",onClick:n=>u.desmarcarIgnorarPagamento(l)},{default:o(()=>[a(i,null,{default:o(()=>[t("Desmarcar Ignorarado")]),_:1})]),_:2},1032,["onClick"])):(d(),p(r,{key:0,clickable:"",onClick:n=>u.IgnorarPagamento(l)},{default:o(()=>[a(i,null,{default:o(()=>[t("Ignorar")]),_:1})]),_:2},1032,["onClick"]))]),_:2},1024),l.ignorado?h("",!0):(d(),p(_,{key:0,clickable:""},{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{name:"add",color:"tertiary"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>[t("Criar registro")]),_:1})]),_:1})]),_:1})),l.ignorado?h("",!0):(d(),p(_,{key:1,clickable:""},{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{name:"search",color:"tertiary"})]),_:1}),l.ignorado?h("",!0):(d(),p(r,{key:0,onClick:n=>u.pesquisarVendas(l)},{default:o(()=>[a(i,null,{default:o(()=>[t("Pesquisar registro")]),_:1})]),_:2},1032,["onClick"]))]),_:2},1024)),l.ignorado?h("",!0):(d(),p(_,{key:2,clickable:""},{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{name:"question_mark",color:"tertiary"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>[t("Sugest\xE3o")]),_:1})]),_:1})]),_:1}))]),_:2},1024))]),_:2},1024),a(Q,{class:"self-end",align:"right"},{default:o(()=>[l.aut?h("",!0):(d(),p(B,{key:0,onClick:n=>u.abrirModalAutorizacao(l==null?void 0:l.idDocumento,""),icon:"edit",color:"tertiary",dense:"",round:"",flat:""},{default:o(()=>[a(P,null,{default:o(()=>[t("Adicionar C\xF3d. Autoriza\xE7\xE3o")]),_:1})]),_:2},1032,["onClick"]))]),_:2},1024)]),_:2},1024)]),_:2},1024),l!=null&&l.showPreviewDetail?(d(),p(_,{key:0,class:"q-pa-md"},{default:o(()=>[t(y(l),1)]),_:2},1024)):h("",!0)]))),128))]),_:1})]),_:1},8,["busca","onFiltro_change","onLimparFiltrosClick","lista","tabSelecionada","tabs","paginacao","mostrar"]),a($,{modelValue:s.autorizacaoVisivel,"onUpdate:modelValue":c[5]||(c[5]=l=>s.autorizacaoVisivel=l),persistent:""},{default:o(()=>[a(q,{style:{"min-width":"350px"}},{default:o(()=>[a(C,null,{default:o(()=>[la]),_:1}),a(C,{class:"q-pt-none"},{default:o(()=>[a(N,{dense:"",modelValue:s.codAutorizacao,"onUpdate:modelValue":c[3]||(c[3]=l=>s.codAutorizacao=l),autofocus:""},null,8,["modelValue"])]),_:1}),a(Q,{align:"right",class:"text-primary"},{default:o(()=>[O(a(B,{flat:"",label:"Cancelar"},null,512),[[T]]),O(a(B,{flat:"",label:"Atualizar",onClick:c[4]||(c[4]=l=>u.atualizarAutorizacao(s.codAutorizacao))},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a($,{modelValue:s.pesquisa.mostrar,"onUpdate:modelValue":c[7]||(c[7]=l=>s.pesquisa.mostrar=l),persistent:""},{default:o(()=>[a(R,{view:"hHh LpR fFf",container:"",class:"bg-white",style:{"max-width":"420px"}},{default:o(()=>[a(M,null,{default:o(()=>[a(H,{class:"bg-primary text-white"},{default:o(()=>[s.pesquisa.local==="API"?(d(),p(j,{key:0},{default:o(()=>[a(g,{name:"credit_card",size:"sm",class:"q-mr-sm"}),t(" Operadora ")]),_:1})):(d(),p(j,{key:1},{default:o(()=>[a(g,{name:"mdi-cloud-outline",size:"sm",class:"q-mr-sm"}),t(" Sistema ")]),_:1})),a(B,{onClick:c[6]||(c[6]=l=>u.pesquisaLimpar()),icon:"close",flat:"",round:"",dense:""})]),_:1})]),_:1}),a(G,null,{default:o(()=>[a(W,null,{default:o(()=>[a(D,null,{default:o(()=>[(d(!0),I(z,null,S(s.pesquisa.dados,(l,n)=>(d(),p(_,{key:n,onClick:A=>u.conciliar(l),"manual-focus":"",clickable:"",class:"justify-center items-center q-pa-sm itemHover"},{default:o(()=>{var A,E;return[((A=s.pesquisa)==null?void 0:A.local)==="API"?(d(),p(q,{key:0,flat:"",bordered:"","rounded-borders":"",class:"q-pa-sm bg-transparent full-width"},{default:o(()=>[a(C,{class:"q-pt-none"},{default:o(()=>[m("div",ea,[t(y(e.$filters.numero(l==null?void 0:l.valbruto,2))+" ",1),m("span",ta,y(e.$filters.numero(l==null?void 0:l.valtxadm,2)),1),a(P,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[t("Valor Liquido")]),_:1})]),a(D,null,{default:o(()=>[a(_,null,{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"mdi-calendar-today"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>{var v;return[t(y(e.$filters.data((v=l.dtvenda)!=null?v:"")),1)]}),_:2},1024),a(i,{caption:""},{default:o(()=>[t("Data de Venda")]),_:1})]),_:2},1024)]),_:2},1024),a(_,null,{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"mdi-calendar-today"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>{var v;return[t(y(e.$filters.data((v=l==null?void 0:l.dtprevpag)!=null?v:l.dataVencimento)),1)]}),_:2},1024),a(i,{caption:""},{default:o(()=>[t("Previs\xE3o de Pagamento")]),_:1})]),_:2},1024)]),_:2},1024),a(_,null,{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"credit_card"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>{var v;return[t(y((v=l.bandeira)!=null?v:""),1)]}),_:2},1024),a(i,{caption:""},{default:o(()=>{var v;return[t(y((v=l.operadora)!=null?v:""),1)]}),_:2},1024)]),_:2},1024),a(r,{class:"col-auto"},{default:o(()=>[l.nsu?(d(),p(L,{key:0,color:"tertiary",class:"q-mr-sm"},{default:o(()=>[t(y(e.$filters.numero(l==null?void 0:l.taxa,2))+"% ",1),a(P,{anchor:"bottom middle",self:"center middle"},{default:o(()=>[t("Taxa")]),_:1})]),_:2},1024)):h("",!0)]),_:2},1024)]),_:2},1024),a(_,null,{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"key"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>{var v;return[t(y((v=l==null?void 0:l.aut)!=null?v:""),1)]}),_:2},1024),a(i,{caption:""},{default:o(()=>[t("Autoriza\xE7\xE3o")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)):h("",!0),((E=s.pesquisa)==null?void 0:E.local)==="B15"?(d(),p(q,{key:1,flat:"",bordered:"","rounded-borders":"",class:"q-pa-sm bg-transparent full-width"},{default:o(()=>[a(C,{class:"q-pt-none"},{default:o(()=>[m("div",ra,[t(y(e.$filters.numero(l==null?void 0:l.dcpValor,2))+" ",1),na]),a(D,null,{default:o(()=>[a(_,null,{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"mdi-calendar-today"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>[t("00/00/0000")]),_:1}),a(i,{caption:""},{default:o(()=>[t("Data de emiss\xE3o")]),_:1})]),_:1})]),_:1}),a(_,null,{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"mdi-calendar-today"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>[t(y(e.$filters.data(l.fRecDataVencimento)),1)]),_:2},1024),a(i,{caption:""},{default:o(()=>[t("Data de vencimento")]),_:1})]),_:2},1024)]),_:2},1024),a(_,null,{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"credit_card"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>[t("FormaPagamento")]),_:1}),a(i,{caption:""},{default:o(()=>[t("PARCELA")]),_:1})]),_:1})]),_:1}),a(_,null,{default:o(()=>[a(r,{avatar:""},{default:o(()=>[a(g,{color:"tertiary",name:"key"})]),_:1}),a(r,null,{default:o(()=>[a(i,null,{default:o(()=>{var v;return[t(y((v=l.Autorizacao)!=null?v:"\xA0"),1)]}),_:2},1024),a(i,{caption:""},{default:o(()=>[t("Autoriza\xE7\xE3o")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)):h("",!0)]}),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var _a=U(J,[["render",sa]]);export{_a as default};