import{_ as I,c4 as q,bW as U,p as x,o as t,d as p,f as d,w as u,x as b,j as E,i as g,D as A,az as N,C as O,P as Q,R as P,e as j,L as H,l as m,s as R,u as w,b5 as C,F as z,r as y,N as T,cs as B}from"./index.4361d107.js";import{G as S}from"./GChipsV2.3bfff067.js";import{n as J}from"./nfePrincipal.2169f7d2.js";import{V as G}from"./VendaCard.196f2be3.js";import{E as L}from"./EnvelopeCard.200dccc2.js";import{J as M}from"./JsonViewer.6a106e48.js";import"./compactarValidarNFe.f7e524cd.js";import"./obterItens.22eb9b6a.js";import"./codigosANP.a6c1a264.js";import"./DocumentosFiscais.b48cf66e.js";import"./Campo.67e12606.js";import"./ModalHistoricoStatus.3ffa1aee.js";import"./emitirNFe.35117289.js";const W={components:{GChipsV2:S,nfePrincipal:J,VendaCard:G,VendaModal:q,EnvelopeCard:L,JsonViewer:M},computed:{temVendasAbertas(){return!!this.vendasAbertas.length},temVendasCanceladas(){return!!this.vendasCanceladas.length},temVendasFinalizadas(){return!!this.vendasFinalizadas.length},temRegistros(){return this.temVendasAbertas||this.temVendasCanceladas||this.temVendasFinalizadas}},data(){return{grupos:[],vendasAbertas:[],vendasCanceladas:[],vendasFinalizadas:[],dataIni:null,dataFim:null,carregando:!1,paginacao:{page:1,rowsPerPage:25},modalDevolucaoGarantia:{visivel:!1},pagination:{maxPages:7,perPage:5,vendasAbertas:{page:1,min:1,max:1},vendasFinalizadas:{page:1,min:1,max:1},vendasCanceladas:{page:1,min:1,max:1}}}},methods:{adicionarOrcamento(){this.$refs.modalVenda.mostrar()},fechouNFe(i){i&&$utils.emitter.emit("atualizarDocumentosFiscais")},async atualizar(){this.paginacao={page:1,rowsPerPage:25},this.carregando=!0,await this.filtrar(),this.carregando=!1},executar(i){this.atualizar()},async filtrar(){let i=[],n={};this.$route.params.id&&(n=await $db.contato.le({id:this.$route.params.id})),n.id||this.$router.go(-1);let r;r=await $db.hibrido.lista({table:"documento",where:{tipo:"Venda",idContatoVendedor:n.id}}),i=i.concat(r),r=await $db.hibrido.lista({table:"documento",where:{tipo:"Venda",idContatoDigitador:n.id}}),r=r.filter(o=>!i.map(({id:s})=>s).includes(o.id)),i=i.concat(r),r=await $db.hibrido.lista({table:"documento",where:{tipo:"Venda",idEmpresa:n.id}}),r=r.filter(o=>!i.map(({id:s})=>s).includes(o.id)),i=i.concat(r),r=await $db.hibrido.lista({table:"documento",where:{tipo:"Envelope",idContatoVendedor:n.id}}),i=i.concat(r),r=await $db.hibrido.lista({table:"documento",where:{tipo:"Envelope",idContatoDigitador:n.id}}),r=r.filter(o=>!i.map(({id:s})=>s).includes(o.id)),i=i.concat(r),r=await $db.hibrido.lista({table:"documento",where:{tipo:"Envelope",idEmpresa:n.id}}),r=r.filter(o=>!i.map(({id:s})=>s).includes(o.id)),i=i.concat(r);const k=await $db.permissao.objeto("Diretiva_Venda/Fatura_OutrasLojas_VerTodos"),a=(await $db.contato.ler({filtros:{ativo:!0,empresas:!0}})).data;if(k||(i=i.filter(o=>a.find(s=>s.id===o.idEmpresa))),this.dataIni&&this.dataFim){const o=new Date(this.dataIni).setHours(0,0,0,0),s=new Date(this.dataFim).setHours(0,0,0,0);i=i.filter(v=>{let f=v.dataHoraFinalizado||v.dataHoraEmissao;if(f)return f=new Date(f).setHours(0,0,0,0),f>=o&&f<=s})}if(this.grupos.length){const o=[];for(const s of i){const v=[];let f=!0,h="";const _=await $db.hibrido.lista({table:"documentoItem",where:{idDocumento:s.id}});for(const e of _){if(!e.idItem)continue;const c=await $erp().item.get(e.idItem);v.find(D=>D===c.id)||(h+=`${c.codigoItem} ${c.referencia||""} ${c.codigoBarras||""} ${c.marca||""} ${c.descricao||""} `,v.push(c.id))}h+=`#${s.numero} ${s.descricaoEmpresa||""} ${s.descricaoContato||""} `,h+=`${s.numeroDocumentoContato||""} ${(s.numeroDocumentoContato||"").replace(/\D/g,"")}`,h=$utils.tratamentoCompletoString(h),o.push(s.id);for(const e of this.grupos)if(f=h.search($utils.tratamentoCompletoString(e))>-1,!f){o.pop();break}}i=i.filter(s=>o.find(v=>v===s.id))}i=$lodash.orderBy(i,["dataHoraFinalizado","dataHoraEmissao"],["desc","desc"]);const l=i.filter(o=>o.status==="Or\xE7amento"),F=i.filter(o=>!["N\xE3o Aprovado","Cancelado","Or\xE7amento"].includes(o.status)),V=i.filter(o=>["N\xE3o Aprovado","Cancelado"].includes(o.status));this.pagination.vendasAbertas.max=(l.length/5|0)+(l.length%5>0?1:0),this.pagination.vendasFinalizadas.max=(F.length/5|0)+(F.length%5>0?1:0),this.pagination.vendasCanceladas.max=(V.length/5|0)+(V.length%5>0?1:0),this.vendasAbertas=l,this.vendasFinalizadas=F,this.vendasCanceladas=V},limparFiltro(){this.grupos=[],this.dataFim=new Date,this.dataIni=new Date(U().add(-7,"days"))},async mostrarJsonViewer(){await this.$refs.jsonViewer.show(this)}},props:{periodo:Object},watch:{"$route.params.id"(i){!~this.$route.name.indexOf("CockpitVendas")||(this.limparFiltro(),this.atualizar())}},mounted(){if(this.$route.params.id){if(this.limparFiltro(),this.periodo&&this.periodo.ini&&this.periodo.fim){const i=new Date(new Date().setHours(0,0,0,0)).toISOString().replace(/\d{4}-\d{2}-\d{2}/g,"");this.dataIni=this.periodo.ini.replace(/T.+$/g,i),this.dataFim=this.periodo.fim.replace(/T.+$/g,i)}this.atualizar()}}},K={class:"AtendimentoVenda q-pb-md"},X={class:"col-12 col-md-6"},Y={class:"col"},Z=b("div",{class:"col-auto",style:{"align-items":"center",display:"flex"}},[b("label",null,"at\xE9")],-1),$={class:"col"},aa={key:0,class:"col-12",style:{"margin-bottom":"50px"}},ea={key:1,class:"col-12",style:{"margin-bottom":"50px"}},ia={key:0,class:"col-12",style:{"margin-bottom":"50px"}},na={key:1,class:"col-12",style:{"margin-bottom":"50px"}},ta={key:0,class:"col-12",style:{"margin-bottom":"50px"}},sa={key:1,class:"col-12",style:{"margin-bottom":"50px"}},oa={key:1,class:"q-pa-lg text-center"},la=b("p",null,[b("small",null,"Registros n\xE3o encontrados")],-1),ra=[la],da={key:2,class:"q-mt-lg text-center"};function ma(i,n,r,k,a,l){const F=x("GChipsV2"),V=x("campo"),o=x("row"),s=x("VendaCard"),v=x("EnvelopeCard"),f=x("VendaModal"),h=x("nfePrincipal"),_=x("JsonViewer");return t(),p("div",K,[d(R,{class:"q-pa-sm no-shadow"},{default:u(()=>[d(o,{class:"items-center q-col-gutter-md"},{default:u(()=>[b("div",X,[d(F,{modelValue:a.grupos,"onUpdate:modelValue":[n[0]||(n[0]=e=>a.grupos=e),l.atualizar],placeholder:"Filtre por C\xF3digo, Produto, Marca, N\xFAmero..."},{prepend:u(()=>[d(E,{name:"mdi-filter"})]),_:1},8,["modelValue","onUpdate:modelValue"])]),b("div",Y,[d(V,{modelValue:a.dataIni,"onUpdate:modelValue":[n[1]||(n[1]=e=>a.dataIni=e),l.atualizar],tipo:"data",dense:"",outlined:""},null,8,["modelValue","onUpdate:modelValue"])]),Z,b("div",$,[d(V,{modelValue:a.dataFim,"onUpdate:modelValue":[n[2]||(n[2]=e=>a.dataFim=e),l.atualizar],tipo:"data",dense:"",outlined:""},null,8,["modelValue","onUpdate:modelValue"])]),i.$db.usuario.desenvolvedor()?(t(),g(A,{key:0,icon:"more_vert",round:"",flat:""},{default:u(()=>[d(N,null,{default:u(()=>[O((t(),g(Q,{clickable:"",onClick:n[3]||(n[3]=e=>l.mostrarJsonViewer())},{default:u(()=>[d(P,{avatar:""},{default:u(()=>[d(E,{name:"mdi-file-replace",size:"sm"})]),_:1}),d(P,null,{default:u(()=>[j("Ver Objeto")]),_:1})]),_:1})),[[H]])]),_:1})]),_:1})):m("",!0)]),_:1})]),_:1}),!a.carregando&&l.temRegistros?(t(),g(T,{key:0,class:"no-border row"},{default:u(()=>[l.temVendasAbertas?(t(),g(w,{key:0,class:"col-12 q-mb-xl","default-opened":"",label:"Abertas (Total R$ "+i.$filters.numero(a.vendasAbertas.reduce((e,c)=>e+c.totalDocumento,0),2)+")",group:"vendasAbertas"},{default:u(()=>[a.pagination.vendasAbertas.max>1?(t(),p("div",aa,[d(C,{modelValue:a.pagination.vendasAbertas.page,"onUpdate:modelValue":n[4]||(n[4]=e=>a.pagination.vendasAbertas.page=e),min:a.pagination.vendasAbertas.min,max:a.pagination.vendasAbertas.max,ellipses:"","max-pages":a.pagination.maxPages,class:"float-right"},null,8,["modelValue","min","max","max-pages"])])):m("",!0),(t(!0),p(z,null,y(a.vendasAbertas.slice((a.pagination.vendasAbertas.page-1)*a.pagination.perPage,a.pagination.vendasAbertas.page*a.pagination.perPage),e=>(t(),p("div",{key:e.id},[e.tipo==="Venda"?(t(),g(s,{key:0,id:e.id,onExecutar:l.executar,class:"q-mb-md"},null,8,["id","onExecutar"])):m("",!0),e.tipo==="Envelope"?(t(),g(v,{key:1,id:e.id,onExecutar:l.executar,class:"q-mb-md"},null,8,["id","onExecutar"])):m("",!0)]))),128)),a.pagination.vendasAbertas.max>1?(t(),p("div",ea,[d(C,{modelValue:a.pagination.vendasAbertas.page,"onUpdate:modelValue":n[5]||(n[5]=e=>a.pagination.vendasAbertas.page=e),min:a.pagination.vendasAbertas.min,max:a.pagination.vendasAbertas.max,ellipses:"","max-pages":a.pagination.maxPages,class:"float-right"},null,8,["modelValue","min","max","max-pages"])])):m("",!0)]),_:1},8,["label"])):m("",!0),l.temVendasFinalizadas?(t(),g(w,{key:1,class:"col-12 q-mb-xl","default-opened":"",label:"Finalizadas (Total R$ "+i.$filters.numero(a.vendasFinalizadas.reduce((e,c)=>e+c.totalDocumento,0),2)+")",group:"vendasFinalizadas"},{default:u(()=>[a.pagination.vendasFinalizadas.max>1?(t(),p("div",ia,[d(C,{modelValue:a.pagination.vendasFinalizadas.page,"onUpdate:modelValue":n[6]||(n[6]=e=>a.pagination.vendasFinalizadas.page=e),min:a.pagination.vendasFinalizadas.min,max:a.pagination.vendasFinalizadas.max,ellipses:"","max-pages":a.pagination.maxPages,class:"float-right"},null,8,["modelValue","min","max","max-pages"])])):m("",!0),(t(!0),p(z,null,y(a.vendasFinalizadas.slice((a.pagination.vendasFinalizadas.page-1)*a.pagination.perPage,a.pagination.vendasFinalizadas.page*a.pagination.perPage),e=>(t(),p("div",{key:e.id},[e.tipo==="Venda"?(t(),g(s,{key:0,id:e.id,onExecutar:l.executar,class:"q-mb-md"},null,8,["id","onExecutar"])):m("",!0),e.tipo==="Envelope"?(t(),g(v,{key:1,id:e.id,onExecutar:l.executar,class:"q-mb-md"},null,8,["id","onExecutar"])):m("",!0)]))),128)),a.pagination.vendasFinalizadas.max>1?(t(),p("div",na,[d(C,{modelValue:a.pagination.vendasFinalizadas.page,"onUpdate:modelValue":n[7]||(n[7]=e=>a.pagination.vendasFinalizadas.page=e),min:a.pagination.vendasFinalizadas.min,max:a.pagination.vendasFinalizadas.max,ellipses:"","max-pages":a.pagination.maxPages,class:"float-right"},null,8,["modelValue","min","max","max-pages"])])):m("",!0)]),_:1},8,["label"])):m("",!0),l.temVendasCanceladas?(t(),g(w,{key:2,class:"col-12 q-mb-xl","default-opened":"",label:"Canceladas (Total R$ "+i.$filters.numero(a.vendasCanceladas.reduce((e,c)=>e+c.totalDocumento,0),2)+")",group:"vendasCanceladas"},{default:u(()=>[a.pagination.vendasCanceladas.max>1?(t(),p("div",ta,[d(C,{modelValue:a.pagination.vendasCanceladas.page,"onUpdate:modelValue":n[8]||(n[8]=e=>a.pagination.vendasCanceladas.page=e),min:a.pagination.vendasCanceladas.min,max:a.pagination.vendasCanceladas.max,ellipses:"","max-pages":a.pagination.maxPages,class:"float-right"},null,8,["modelValue","min","max","max-pages"])])):m("",!0),(t(!0),p(z,null,y(a.vendasCanceladas.slice((a.pagination.vendasCanceladas.page-1)*a.pagination.perPage,a.pagination.vendasCanceladas.page*a.pagination.perPage),e=>(t(),p("div",{key:e.id},[e.tipo==="Venda"?(t(),g(s,{key:0,id:e.id,onExecutar:l.executar,class:"q-mb-md"},null,8,["id","onExecutar"])):m("",!0),e.tipo==="Envelope"?(t(),g(v,{key:1,id:e.id,onExecutar:l.executar,class:"q-mb-md"},null,8,["id","onExecutar"])):m("",!0)]))),128)),a.pagination.vendasCanceladas.max>1?(t(),p("div",sa,[d(C,{modelValue:a.pagination.vendasCanceladas.page,"onUpdate:modelValue":n[9]||(n[9]=e=>a.pagination.vendasCanceladas.page=e),min:a.pagination.vendasCanceladas.min,max:a.pagination.vendasCanceladas.max,ellipses:"","max-pages":a.pagination.maxPages,class:"float-right"},null,8,["modelValue","min","max","max-pages"])])):m("",!0)]),_:1},8,["label"])):m("",!0)]),_:1})):m("",!0),!a.carregando&&!l.temRegistros?(t(),p("div",oa,ra)):m("",!0),a.carregando?(t(),p("div",da,[d(B,{color:"tertiary",size:50})])):m("",!0),d(A,{round:"",color:"primary",class:"fixed",icon:"add",size:"lg",style:{right:"18px",bottom:"18px"},onClick:l.adicionarOrcamento},null,8,["onClick"]),d(f,{ref:"modalVenda",onExecutar:l.executar},null,8,["onExecutar"]),d(h,{onFechar:l.fechouNFe},null,8,["onFechar"]),d(_,{ref:"jsonViewer"},null,512)])}var wa=I(W,[["render",ma]]);export{wa as default};