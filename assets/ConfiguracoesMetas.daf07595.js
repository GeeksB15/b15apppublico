import{_ as B,r as C,o as c,p as w,f as e,w as a,S as f,T as r,j as V,k as n,P as q,F as U,u as L,C as x,U as h,t as v,m as k,d as b,e as D,Q as g,bg as z,H as T,N,l as P,z as j,h as E,i as O,E as I,bs as A,D as F,M as H,G as J,I as K,J as X,K as Z}from"./index.f84355dd.js";import{l as G}from"./ListaAntiga.efc5f086.js";const R={components:{lista:G},data(){return{lista:[],listaLayout:{},vendedor:"",empresas:{selecionada:"",opcoes:[]},tabs:[],tabSelecionada:{valor:"Todos"},buscaCampo:"",filtros:{idContato:null,idEmpresa:null,dataCompetenciaDe:null,dataCompetenciaAte:null},mostrarMetaFicha:!1,metaOriginal:{},meta:{id:"",idEmpresa:"",empresa:"",idContato:"",vendedor:"",meta:"",dataCompetencia:""},mostrarDuplicarMes:!1,meses:[{valor:1,rotulo:"Janeiro"},{valor:2,rotulo:"Fevereiro"},{valor:3,rotulo:"Mar\xE7o"},{valor:4,rotulo:"Abril"},{valor:5,rotulo:"Maio"},{valor:6,rotulo:"Junho"},{valor:7,rotulo:"Julho"},{valor:8,rotulo:"Agosto"},{valor:9,rotulo:"Setembro"},{valor:10,rotulo:"Outubro"},{valor:11,rotulo:"Novembro"},{valor:12,rotulo:"Dezembro"}],anos:[],mesOrigem:null,anoOrigem:null,mesDestino:null,anoDestino:null,dataOrigem:"",dataDestino:"",paginacao:{atual:1,maximo:1,total:1,limite:25}}},methods:{async atualizar(){try{$q.loading.show(),await this.empresaOpcoesCarregar(),this.tabs=[{rotulo:"Todos",value:"Todos"}],this.tabs.push(...this.empresas.opcoes);const l=$utils.eliminarVazios(this.filtros);delete l.idEmpresa,this.tabSelecionada.valor!=="Todos"&&(l.idEmpresa=this.tabSelecionada.valor),l.dataCompetenciaDe&&(l.dataCompetenciaDe=this.$filters.data(this.filtros.dataCompetenciaDe)),l.dataCompetenciaAte&&(l.dataCompetenciaAte=this.$filters.data(this.filtros.dataCompetenciaAte)),this.buscaCampo&&(l.termoBusca=this.buscaCampo);const t=(await $utils.geeksApi({meta:{funcao:"E57254C4-B812-44C4-9976-7A6DC59022D9",filtros:l,page:this.paginacao.atual,limit:this.paginacao.limite}})).data.meta;this.listaLayout={};for(let u of t.data)this.listaLayout[u.id]={detalhes:!1};this.lista=t.data,this.paginacao.total=t.total,this.paginacao.maximo=t.totalPages}catch(l){$q.notifyError("Erro iniciar",l)}finally{$q.loading.hide()}},async empresaOpcoesCarregar(){const t=(await $db.empresa.le()).map(u=>{var y,i;return{rotulo:(i=(y=u.sigla)!=null?y:u.apelido)!=null?i:u.nome,valor:u.idContato,value:u.idContato}});t.sort((u,y)=>$utils.tratamentoCompletoString(u.rotulo)<$utils.tratamentoCompletoString(y.rotulo)?-1:1),this.empresas.opcoes=t},async filtroVendedor(){const l=await $g.promptContato.show({filtro:{ativo:!0,vendedores:!0},placeholder:"Selecione o vendedor"});this.filtros.idContato=l==null?void 0:l.id,this.vendedor=l==null?void 0:l.nome},limparFiltros_click(){this.vendedor="",this.filtros={idContato:null,idEmpresa:null,dataCompetenciaDe:null,dataCompetenciaAte:null},this.paginacao={atual:1,maximo:1,total:1,limite:25},this.atualizar()},async criarMeta(){if(this.metaOriginal={},this.meta={id:$utils.uuid(),idEmpresa:"",empresa:"",idContato:"",vendedor:"",meta:0,dataCompetencia:new Date().setDate(1)},await this.selecionarEmpresa(),!this.meta.idEmpresa){$q.notify({message:"Empresa n\xE3o selecionada",type:"negative"});return}if(await this.selecionarVendedor(),!this.meta.idContato){$q.notify({message:"Vendedor n\xE3o selecionado",type:"negative"});return}this.mostrarMetaFicha=!0},async abrirMeta(l){try{this.$q.loading.show(),this.mostrarMetaFicha=!0;const t=await $utils.geeksApi({ret:{funcao:"E57254C4-B812-44C4-9976-7A6DC59022D9",id:l}});this.meta=$utils.clonar(t.data.ret),this.metaOriginal=$utils.clonar(this.meta)}catch(t){this.mostrarMetaFicha=!1,$q.notifyError(t);return}finally{this.$q.loading.hide()}},async salvarMeta(){try{const l=this.verificarSeAlterouCampos();if(Object.keys(l).length===0)return $q.notifyPositive("N\xE3o h\xE1 dados alterados.");$q.loading.show(),await $utils.geeksApi({meta:{funcao:"A5744ED7-6F98-449E-A8B2-A947DFB1169F",dados:{id:this.meta.id,dataCompetencia:this.$filters.data(this.meta.dataCompetencia),meta:this.meta.meta,idEmpresa:this.meta.idEmpresa,codigoEmpresa:this.meta.codigoEmpresa,idContato:this.meta.idContato,codigoContato:this.meta.codigoContato}}}),this.fecharMeta()}catch(l){$q.notifyError("Ocorreu um erro ao salvar",l)}finally{$q.loading.hide()}},async excluirMeta(l){$q.dialog({title:"Remover",message:"Deseja remover esta meta?",cancel:{label:"N\xE3o",push:!0,color:"tertiary",flat:!0},ok:{label:"Sim",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(async()=>{try{await $utils.geeksApi({meta:{funcao:"DB4D831C-4823-4DAB-8E90-6E507FC67F9B",id:l}}),$q.notifyPositive("Meta removida com sucesso")}catch{$q.notifyError("Falha ao remover a meta")}this.atualizar()})},async selecionarVendedor(){const l=await $g.promptContato.show({filtro:{ativo:!0,vendedores:!0},placeholder:"Selecione o vendedor"});this.meta.idContato=l==null?void 0:l.id,this.meta.codigoContato=l==null?void 0:l.codigoContato,this.meta.vendedor=l==null?void 0:l.nome},async selecionarEmpresa(){const l=await $g.promptContato.show({filtro:{ativo:!0,empresas:!0},placeholder:"Selecione a empresa"});this.meta.idEmpresa=l==null?void 0:l.id,this.meta.codigoEmpresa=l==null?void 0:l.codigoContato,this.meta.empresa=l==null?void 0:l.nome},fecharMeta(){this.metaOriginal={},this.mostrarMetaFicha=!1,this.atualizar()},verificarSeAlterouCampos(){return $utils.diferencaObjetos(this.metaOriginal,this.meta)},duplicarMes(){this.dataOrigem="",this.dataDestino="",this.mostrarDuplicarMes=!0;const l=new Date().getFullYear();this.anoDestino=l,this.anoOrigem=l;for(let t=-10;t<=10;t++)this.anos.push({rotulo:l+t,valor:l+t});return this.mesOrigem=new Date().getMonth()+1,this.mesDestino=new Date().getMonth()+1,new Promise((t,u)=>{this.resolve=t})},async duplicarMetasMes(){try{this.$q.loading.show(),this.dataOrigem=new Date(`${this.anoOrigem}-${this.mesOrigem}-1`),this.dataDestino=new Date(`${this.anoDestino}-${this.mesDestino}-1`);try{const l=await $utils.geeksApi({meta:{funcao:"12093426-D389-4A4B-AB17-C7FCA25C01ED",dataOrigem:this.dataOrigem,dataDestino:this.dataDestino}});$q.notifyPositive("Metas duplicadas com sucesso")}catch(l){console.log(l.message),$q.notifyError("N\xE3o foi poss\xEDvel duplicar as metas")}this.mostrarDuplicarMes=!1}catch(l){$q.notifyError("Ocorreu um erro ao duplicar a meta",l)}finally{$q.loading.hide(),this.atualizar()}},fecharDuplicarMes(){this.resolve({}),this.mostrarDuplicarMes=!1}},mounted(){this.atualizar()}},Y={class:"mw80 text-center"},W={class:"text-weight-medium"};function $(l,t,u,y,i,s){const d=C("campo"),_=C("BadgeCopiarUid"),Q=C("avatar"),S=C("lista"),m=C("g-col"),M=C("g-row");return c(),w("div",null,[e(S,{titulo:"",icone:"",buscaCampo:i.buscaCampo,"onUpdate:buscaCampo":t[5]||(t[5]=o=>i.buscaCampo=o),onCriar_click:s.criarMeta,onFiltro_change:s.atualizar,onLimparFiltros_click:s.limparFiltros_click,lista:i.lista,listaLayout:i.listaLayout,paginacao:i.paginacao,filtros:i.filtros,showQuickAdd:!1,showToolbar:!0,"tab-selecionada":i.tabSelecionada,tabs:i.tabs,checkboxVisible:!1,removerTodosVisible:!1,abrirTodosVisible:!1,exportarXLSXVisible:!1,multiplosBtnNovo:!1,permissaoExtras:!0,style:{"margin-top":"-16px"}},{menuExtras:a(()=>[e(f,{clickable:"",onClick:t[0]||(t[0]=o=>s.duplicarMes())},{default:a(()=>[e(r,{avatar:""},{default:a(()=>[e(V,{name:"content_copy",size:"sm"})]),_:1}),e(r,null,{default:a(()=>[n("Duplicar")]),_:1})]),_:1})]),filtroCampos:a(()=>[e(d,{modelValue:i.vendedor,"onUpdate:modelValue":t[1]||(t[1]=o=>i.vendedor=o),onClick:s.filtroVendedor,after:[{icon:"search",handler(){s.filtroVendedor()}}],rotulo:"Vendedor",dense:"",class:"q-field--with-bottom",somenteLeitura:""},null,8,["modelValue","onClick","after"]),e(d,{modelValue:i.filtros.dataCompetenciaDe,"onUpdate:modelValue":t[2]||(t[2]=o=>i.filtros.dataCompetenciaDe=o),rotulo:"Compet\xEAncia de",tipo:"data",dense:"",class:"q-field--with-bottom"},null,8,["modelValue"]),e(d,{modelValue:i.filtros.dataCompetenciaAte,"onUpdate:modelValue":t[3]||(t[3]=o=>i.filtros.dataCompetenciaAte=o),rotulo:"Compet\xEAncia at\xE9",dense:"",tipo:"data",class:"q-field--with-bottom"},null,8,["modelValue"]),e(d,{modelValue:i.paginacao.limite,"onUpdate:modelValue":t[4]||(t[4]=o=>i.paginacao.limite=o),rotulo:"Quantidade por p\xE1gina",tipo:"quantidade",min:"1",dense:"",class:"q-field--with-bottom"},null,8,["modelValue"])]),itemLista:a(()=>[e(q,{bordered:"",class:"bg-white q-mb-xs rounded-borders"},{default:a(()=>[(c(!0),w(U,null,L(i.lista,o=>(c(),w("div",{key:o.id,class:"itemHover"},[e(f,{"manual-focus":"",class:"q-py-sm q-px-xs items-center"},{default:a(()=>[e(r,{class:"hideonmobile col-auto q-pr-sm no-margin cursor-pointer"},{default:a(()=>[x("div",Y,[e(_,{id:o.id,numero:o.id.slice(-8),cor:"positive",escuro:""},null,8,["id","numero"])])]),_:2},1024),e(r,{class:"col-xs col-sm no-margin"},{default:a(()=>[e(f,{class:"q-pa-none"},{default:a(()=>[e(r,{onClick:p=>s.abrirMeta(o.id),class:"col-auto items-center cursor-pointer"},{default:a(()=>[e(Q,{rotulo:o.empresa,tamanho:"40",style:{display:"flex","align-self":"center"}},null,8,["rotulo"])]),_:2},1032,["onClick"]),e(r,{class:"col"},{default:a(()=>[e(h,{onClick:p=>s.abrirMeta(o.id),lines:"2",class:"text-tertiary text-weight-bold ellipsis-2-lines cursor-pointer"},{default:a(()=>[n(v(o.empresa)+" ",1),e(k,{anchor:"bottom start",self:"center start"},{default:a(()=>[n("Empresa")]),_:1})]),_:2},1032,["onClick"]),o.vendedor?(c(),b(h,{key:0,onClick:p=>s.abrirMeta(o.id),caption:"",lines:"1",class:"text-tertiary ellipsis cursor-pointer"},{default:a(()=>[n(v(o.vendedor)+" ",1),e(k,{anchor:"bottom start",self:"center start"},{default:a(()=>[n("Vendedor")]),_:1})]),_:2},1032,["onClick"])):D("",!0),e(r,{class:"hideondesktop"},{default:a(()=>[o.dataCompetencia?(c(),b(h,{key:0,class:"text-tertiary q-mt-md"},{default:a(()=>[n(" Data compet\xEAncia: "),x("span",W,v(l.$filters.data(o.dataCompetencia)),1)]),_:2},1024)):D("",!0),e(f,{class:"q-pa-none",dense:""},{default:a(()=>[e(r,{class:"col-auto q-mr-sm"},{default:a(()=>[e(_,{id:o.id,numero:o.id.slice(-8),cor:"positive",escuro:""},null,8,["id","numero"])]),_:2},1024),e(r,null,{default:a(()=>[o.meta?(c(),b(h,{key:0,class:"text-tertiary text-weight-bold"},{default:a(()=>[n(v(l.$filters.numeroZerosDireita(o.meta,4,2)),1)]),_:2},1024)):D("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(r,{onClick:p=>s.abrirMeta(o.id),class:"hideonmobile maxw90 q-pl-sm no-margin cursor-pointer"},{default:a(()=>[o.dataCompetencia?(c(),b(h,{key:0,class:"text-tertiary text-center"},{default:a(()=>[n(v(l.$filters.data(o.dataCompetencia))+" ",1),e(k,{anchor:"bottom middle",self:"center middle"},{default:a(()=>[n("Compet\xEAncia")]),_:1})]),_:2},1024)):D("",!0)]),_:2},1032,["onClick"]),e(r,{onClick:p=>s.abrirMeta(o.id),class:"hideonmobile maxw120 q-pl-sm no-margin cursor-pointer"},{default:a(()=>[o.meta?(c(),b(h,{key:0,class:"text-tertiary text-right text-weight-bold"},{default:a(()=>[n(v(l.$filters.numeroZerosDireita(o.meta,4,2))+" ",1),e(k,{anchor:"bottom right",self:"center end"},{default:a(()=>[n("Meta")]),_:1})]),_:2},1024)):D("",!0)]),_:2},1032,["onClick"]),e(r,{class:"col-auto q-pl-sm no-margin"},{default:a(()=>[e(f,{class:"q-pa-none"},{default:a(()=>[e(r,{class:"hideonmobile q-pr-sm no-margin"},{default:a(()=>[e(g,{onClick:p=>s.abrirMeta(o.id),icon:"edit",size:"md",color:"primary",round:"",flat:"",dense:""},null,8,["onClick"])]),_:2},1024),e(r,{class:"no-margin"},{default:a(()=>[e(g,{icon:"more_vert",size:"md",round:"",flat:"",dense:""},{default:a(()=>[e(z,null,{default:a(()=>[T((c(),b(q,{link:"","no-border":"",separator:""},{default:a(()=>[e(f,{onClick:p=>s.abrirMeta(o.id),clickable:"",class:"hideondesktop"},{default:a(()=>[e(r,{avatar:""},{default:a(()=>[e(V,{name:"edit"})]),_:1}),e(r,null,{default:a(()=>[n(" Editar ")]),_:1})]),_:2},1032,["onClick"]),e(f,{onClick:p=>s.excluirMeta(o.id),clickable:""},{default:a(()=>[e(r,{avatar:""},{default:a(()=>[e(V,{name:"delete"})]),_:1}),e(r,null,{default:a(()=>[e(h,null,{default:a(()=>[n(" Apagar ")]),_:1})]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)),[[N]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(P)]))),128))]),_:1})]),_:1},8,["buscaCampo","onCriar_click","onFiltro_change","onLimparFiltros_click","lista","listaLayout","paginacao","filtros","tab-selecionada","tabs"]),e(F,{modelValue:i.mostrarDuplicarMes,"onUpdate:modelValue":t[13]||(t[13]=o=>i.mostrarDuplicarMes=o),onHide:t[14]||(t[14]=o=>s.fecharDuplicarMes()),onKeyup:t[15]||(t[15]=A(o=>s.fecharDuplicarMes(),["esc"]))},{default:a(()=>[e(j,null,{default:a(()=>[e(E,{class:"bg-primary text-white"},{default:a(()=>[e(O,null,{default:a(()=>[n("Duplicar metas")]),_:1}),e(g,{onClick:t[6]||(t[6]=o=>s.fecharDuplicarMes()),icon:"close",flat:"",round:"",dense:""})]),_:1}),e(I,{onSubmit:t[12]||(t[12]=o=>s.duplicarMetasMes())},{default:a(()=>[e(M,{gutter:"md-x lg-y"},{default:a(()=>[e(m,{col:"6"},{default:a(()=>[e(d,{modelValue:i.mesOrigem,"onUpdate:modelValue":t[7]||(t[7]=o=>i.mesOrigem=o),opcoes:i.meses,tipo:"seletor",rotulo:"Origem","popup-content-class":"metasOpcoes"},null,8,["modelValue","opcoes"])]),_:1}),e(m,{col:"6"},{default:a(()=>[e(d,{modelValue:i.anoOrigem,"onUpdate:modelValue":t[8]||(t[8]=o=>i.anoOrigem=o),opcoes:i.anos,tipo:"seletor",rotulo:"Ano","popup-content-class":"metasOpcoes"},null,8,["modelValue","opcoes"])]),_:1}),e(m,{col:"6"},{default:a(()=>[e(d,{modelValue:i.mesDestino,"onUpdate:modelValue":t[9]||(t[9]=o=>i.mesDestino=o),opcoes:i.meses,tipo:"seletor",rotulo:"Destino","popup-content-class":"metasOpcoes"},null,8,["modelValue","opcoes"])]),_:1}),e(m,{col:"6"},{default:a(()=>[e(d,{modelValue:i.anoDestino,"onUpdate:modelValue":t[10]||(t[10]=o=>i.anoDestino=o),opcoes:i.anos,tipo:"seletor",rotulo:"Ano","popup-content-class":"metasOpcoes"},null,8,["modelValue","opcoes"])]),_:1})]),_:1}),e(M,{gutter:"md-x sm-y",text:"right",bordered:"top"},{default:a(()=>[e(m,null,{default:a(()=>[e(g,{onClick:t[11]||(t[11]=o=>s.fecharDuplicarMes()),label:"Cancelar",color:"tertiary",flat:""}),e(g,{label:"Duplicar",type:"submit",color:"primary",dark:"",unelevated:"",class:"q-ml-sm"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(F,{modelValue:i.mostrarMetaFicha,"onUpdate:modelValue":t[22]||(t[22]=o=>i.mostrarMetaFicha=o),onKeyup:t[23]||(t[23]=A(o=>s.fecharMeta(),["esc"]))},{default:a(()=>[e(H,{container:"",class:"bg-white",style:{height:"460px"}},{default:a(()=>[e(J,null,{default:a(()=>[e(E,null,{default:a(()=>[e(V,{name:"edit_note",size:"md"}),e(O,null,{default:a(()=>[n("Detalhes")]),_:1}),e(_,{id:i.meta.id||"0000",numero:(i.meta.id||"0000").slice(-8),cor:"positive",class:"float-right"},null,8,["id","numero"])]),_:1})]),_:1}),e(K,{class:"u-container"},{default:a(()=>[e(X,null,{default:a(()=>[e(M,{gutter:"md",items:"center",justify:"center",height:"357px"},{default:a(()=>[e(m,{col:"12"},{default:a(()=>[e(d,{modelValue:i.meta.empresa,"onUpdate:modelValue":t[16]||(t[16]=o=>i.meta.empresa=o),onClick:s.selecionarEmpresa,after:[{icon:"search",handler(){s.selecionarEmpresa()}}],tipo:"texto",rotulo:"Empresa",filled:"",noDense:"",somenteLeitura:""},null,8,["modelValue","onClick","after"])]),_:1}),e(m,{col:"12"},{default:a(()=>[e(d,{modelValue:i.meta.vendedor,"onUpdate:modelValue":t[17]||(t[17]=o=>i.meta.vendedor=o),onClick:s.selecionarVendedor,after:[{icon:"search",handler(){s.selecionarVendedor()}}],rotulo:"Vendedor",filled:"",noDense:"",somenteLeitura:""},null,8,["modelValue","onClick","after"])]),_:1}),e(m,{col:"12"},{default:a(()=>[e(d,{modelValue:i.meta.dataCompetencia,"onUpdate:modelValue":t[18]||(t[18]=o=>i.meta.dataCompetencia=o),rotulo:"Data de Compet\xEAncia",filled:"",tipo:"data",noDense:""},null,8,["modelValue"])]),_:1}),e(m,{col:"12"},{default:a(()=>[e(d,{modelValue:i.meta.meta,"onUpdate:modelValue":t[19]||(t[19]=o=>i.meta.meta=o),rotulo:"Valor meta",filled:"",tipo:"decimal",decimals:"2",noDense:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(Z,{class:"bg-light border-top q-px-md q-py-sm text-right"},{default:a(()=>[e(g,{onClick:t[20]||(t[20]=o=>s.fecharMeta()),label:"Cancelar",color:"tertiary",flat:""}),e(g,{onClick:t[21]||(t[21]=o=>s.salvarMeta()),label:"Salvar",color:"primary",dark:"",class:"q-ml-sm",unelevated:""})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var te=B(R,[["render",$]]);export{te as default};