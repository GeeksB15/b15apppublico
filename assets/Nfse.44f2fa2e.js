import{_ as L,bu as k,r as U,o as g,d as q,w as a,f as l,M as D,G as T,h as d,Q as S,i as R,k as b,e as y,bg as z,H as Q,S as M,T as F,j as A,N as H,I as P,J as j,C as i,z as f,O as p,aN as J,t as w,E as B,s as V,au as v,K as X,aW as K,bs as G,D as W}from"./index.8ba5bd75.js";import{o as N}from"./optionsNfse.12d4a18d.js";import{J as O}from"./JsonViewer.eb78f7ca.js";const Y={components:{JsonViewer:O},data(){return{showModal:!1,opcoesNatureza:[],opcoesTipoRps:[],opcoesRegimeEspecialTributacao:[],opcoesStatusRps:[],opcoesSimNao:[],opcoesUF:[],opcoesInformacoesServicos:[],telefoneTipos:[],situacaoNfse:"Rascunho",nfse:{},opcoesCidadeIbge:[],JsonViewer:O}},emits:["atualizar"],methods:{onHide(){this.$router.replace({params:{id:""}})},trocouServico(r){const e=this.opcoesInformacoesServicos.find(u=>u.codigo===r);this.nfse.servico.itemListaServico=e.codigo,this.nfse.servico.codigoCnae=e.codigoCNAE,this.nfse.servico.codigoTributacaoMunicipio=e.codigoTributacao},async abrirModalTomador(){var o;const r={ativo:!0},e=await $g.promptContato.show({filtro:r,placeholder:"Selecione"});if(!e)return;if(!e.nome){$q.notifyError("\xC9 preciso informar a Raz\xE3o Social do Intermedi\xE1rio");return}if(!e.numeroDocumentoNacional||e.numeroDocumentoNacional.length<14){$q.notifyError("\xC9 preciso informar o CPF/CNPJ do Intermedi\xE1rio");return}const n=await $db.contatoEndereco.leEnderecoPrincipal(e.id);this.nfse.tomador.razaoSocial=e.nome,this.nfse.tomador.documento=e.numeroDocumentoNacional.match(/\d+/g).join(""),this.nfse.tomador.endereco.numero=n.numero,this.nfse.tomador.endereco.rua=n.logradouro,this.nfse.tomador.endereco.bairro=n.bairro,this.nfse.tomador.endereco.cidade=n.ibgeCod,this.nfse.tomador.endereco.estado=n.uf,this.nfse.tomador.endereco.complemento=(o=n==null?void 0:n.complemento)!=null?o:"",this.nfse.tomador.endereco.cep=n.cep,this.opcoesCidadeIbge.push({valor:n.ibgeCod,rotulo:n.municipio+"-"+n.uf}),console.log(this.nfse),console.log(this.opcoesCidadeIbge)},async show(r,e,u){var C,_,x,E;let n=null,o=null,c=null,t=null;if(r&&(c=await $db.hibrido.le({table:"documentoFiscalEletronico",id:r}),t=JSON.parse(c.json),n=(await $erp().empresa.toArray()).find(h=>h.numeroDocumentoNacional.replace(/\D/g,"")===c.cpfCnpjEmitente)),n!=null&&n.idContato&&(o=(await $db.empresa.le({idContato:n.idContato}))[0]),o&&(e={nfseItensListaDeServico:JSON.parse((C=o.nfseItensListaDeServico)!=null?C:null)}),t!=null&&t.rps)this.nfse=t.rps,this.situacaoNfse=c.situacao;else{if(this.situacaoNfse="Rascunho",this.nfse=$utils.clonarV2($db.nfse.modelo),this.nfse.dataHoraCriacao=$utils.dataAtual(),u){const h=u==null?void 0:u.rps,I=(Number((_=h==null?void 0:h.identificacaoRps)==null?void 0:_.numero)||0)+1;this.nfse.identificacaoRps.numero=I.toString(),this.nfse.identificacaoRps.serie=(x=h==null?void 0:h.identificacaoRps)==null?void 0:x.serie,this.nfse.numeroLote=this.nfse.numeroLote||I.toString()}this.nfse.prestador.documento=e.documento,this.nfse.prestador.razaoSocial=e.nome,this.nfse.prestador.inscricaoMunicipal=e.inscricaoMunicipal,this.nfse.inscricaoMunicipal=e.inscricaoMunicipal,this.nfse.optanteSimplesNacional=e.nfseOptanteSimples,this.nfse.incentivadorCultural=e.nfseIncentivadorCultural,this.nfse.naturezaOperacao=e.nfseNaturezaOperacao,this.nfse.regimeEspecialTributacao=e.nfseRegimeTributario,this.nfse.servico.discriminacao=e.nfseDescricaoServico,this.nfse.servico.valores.aliquota=e.nfseAliquotaIss,this.nfse.servico.municipioPrestacaoServico=e.ibgeCod,this.opcoesCidadeIbge.push({valor:e.ibgeCod,rotulo:e.cidadeUf})}this.opcoesInformacoesServicos=e==null?void 0:e.nfseItensListaDeServico;const m=(E=$utils.clonarV2(c))!=null?E:{};let s={};delete m.rps,this.documentoFiscalEletronico=$utils.clonarV2(m),m.id&&(s=(await $db.hibrido.lista({table:"documentoFiscalEletronicoXml",where:{idDocumentoFiscalEletronico:m.id}}))[0]),this.documentoFiscalEletronico.id||(this.documentoFiscalEletronico.id=$utils.uuid()),this.documentoFiscalEletronicoOriginal=$utils.clonarV2(m),this.documentoFiscalEletronicoXmlOriginal=$utils.clonarV2(s),this.nfseOriginal=$utils.clonarV2(this.nfse),this.showModal=!0},async emitir(){var u;if(!await this.$refs.nfseForm.validate())return;let e;this.situacaoNfse==="Rascunho"&&(e="Enviando..."),this.situacaoNfse==="Protocolada"&&(e="Checando...");try{$q.loading.show({message:`${e}`,html:!0,boxClass:"bg-grey-2 text-grey-9",spinnerColor:"primary"}),this.nfse.dataEmissao=$utils.dataAtual();let n={...this.nfse,id:(u=this.documentoFiscalEletronico)==null?void 0:u.id};const{nfse:o,situacao:c}=await $db.nfse.emitir({nfse:n,aguardarRetorno:!0});this.nfse=o,this.situacaoNfse=c,c==="Enviada"&&(await this.salvar(async t=>{$q.loading.show({message:"Solicitando URL...",html:!0,boxClass:"bg-grey-2 text-grey-9",spinnerColor:"primary"}),await $db.nfse.solicitarURLImpressao(t)}),$q.notifyPositive("NFS-e emitida!")),c!=="Enviada"&&(typeof o.mensagemDeRetorno=="string"&&$q.notifyError(o.mensagemDeRetorno),typeof o.mensagemDeRetorno!="string"&&$q.notifyError("Erro de valida\xE7\xE3o"),await this.salvar())}catch(n){let o=n.message.replace("db.nfse.sincronizarLote: ","");o.length!==n.message&&$q.notifyError(o),o.length===n.message&&($q.notifyError("Falha ao emitir NFS-e"),console.error(n.message)),console.log(this.nfse)}finally{$q.loading.hide()}},async salvar(r){if(!await this.$refs.nfseForm.validate())return;const u=this.documentoFiscalEletronico.id||$utils.uuid(),n=this.documentoFiscalEletronicoOriginal.dataHoraCriacao||$utils.dataAtual(),o={id:u,tipo:"NFSe",tpAmb:"2",situacao:this.situacaoNfse,mod:"",serie:"",nNF:"",chNFe:"",vNF:0,dhEmi:k.formatarDataNFe(new Date(this.nfse.dataEmissao)),cpfCnpjEmitente:this.nfse.prestador.documento,xNomeEmitente:this.nfse.prestador.razaoSocial,cpfCnpjDestinatario:this.nfse.tomador.documento,xNomeDestinatario:this.nfse.tomador.razaoSocial,dataHoraEmissao:this.nfse.dataEmissao,dataHoraCriacao:n,protocoloRetorno:this.nfse.protocoloRetorno,xml:this.nfse.xml,pdf:this.nfse.pdf,json:JSON.stringify({rps:this.nfse})},c={id:this.documentoFiscalEletronicoXmlOriginal.id||$utils.uuid(),tipo:o.tipo,situacao:o.situacao,tpAmb:o.tpAmb,dataHoraEnvio:this.nfse.dataEmissao,cpfCnpjEmitente:this.nfse.prestador.documento,xmlEnvio:this.nfse.xml,idDocumentoFiscalEletronico:o.id};try{await $db.documentoFiscalEletronico.grava({atual:o,original:this.documentoFiscalEletronicoOriginal}),await $db.documentoFiscalEletronicoXml.grava({atual:c,original:this.documentoFiscalEletronicoXmlOriginal}),r&&await r(o.id),this.hide(),this.$emit("atualizar",{id:u,situacaoNfse:this.situacaoNfse})}catch(t){$q.notifyError(t.message)}},voltar(r){r.stopPropagation();let e=$utils.diferencaObjetos(this.nfseOriginal,this.nfse);if(!Object.keys(e).length){this.hide();return}$q.dialog({message:"Deseja descartar as modifica\xE7\xF5es?",title:"Descartar",cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Descartar",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(()=>{this.hide()})},hide(){this.showModal=!1},setarValorLiquidoNfse(){const{valorServicos:r,valorPis:e,valorCofins:u,valorInss:n,valorIr:o,valorCsll:c,descontoIncondicionado:t,descontoCondicionado:m}=this.nfse.servico.valores,s=r-e-u-n-o-c-t-m;this.nfse.servico.valores.valorLiquidoNfse=s},async mostrarJsonViewer(){await this.$refs.jsonViewer.show(this)}},beforeMount(){this.opcoesNatureza=N.opcoesNatureza,this.opcoesTipoRps=N.opcoesTipoRps,this.opcoesRegimeEspecialTributacao=N.opcoesRegimeEspecialTributacao,this.opcoesStatusRps=N.opcoesStatusRps,this.opcoesSimNao=N.opcoesSimNao,this.telefoneTipos=N.telefoneTipos,this.opcoesUF=N.opcoesUF},watch:{"nfse.servico.valores.valorServicos":function(){const{valorServicos:r,descontoIncondicionado:e}=this.nfse.servico.valores;this.nfse.servico.valores.baseCalculo=r-e,this.setarValorLiquidoNfse()},"nfse.servico.valores.descontoIncondicionado":function(){const{valorServicos:r,descontoIncondicionado:e}=this.nfse.servico.valores;this.nfse.servico.valores.baseCalculo=r-e,this.setarValorLiquidoNfse()},"nfse.servico.valores.descontoCondicionado":function(){this.setarValorLiquidoNfse()},"nfse.servico.valores.valorPis":function(){this.setarValorLiquidoNfse()},"nfse.servico.valores.valorCofins":function(){this.setarValorLiquidoNfse()},"nfse.servico.valores.valorInss":function(){this.setarValorLiquidoNfse()},"nfse.servico.valores.valorIr":function(){this.setarValorLiquidoNfse()},"nfse.servico.valores.valorCsll":function(){this.setarValorLiquidoNfse()},"nfse.servico.valores.baseCalculo":async function(){const{baseCalculo:r,aliquota:e}=this.nfse.servico.valores,u=$utils.arredondar(r*(e/100),3);let n=String(this.nfse.servico.municipioPrestacaoServico)!=="3543402";if(!n){const o=await $db.configuracoes.leValorComFiltroEmpresa("nfse.motor");n=(o==null?void 0:o.toLowerCase())==="plugnotas"}n||(this.nfse.servico.valores.valorIss=$utils.arredondaAbnt5891(u)),n&&(this.nfse.servico.valores.valorIss=parseFloat(u.toFixed(2)))},"nfse.servico.valores.aliquota":async function(){const{baseCalculo:r,aliquota:e}=this.nfse.servico.valores,u=$utils.arredondar(r*(e/100),3);let n=String(this.nfse.servico.municipioPrestacaoServico)!=="3543402";if(!n){const o=await $db.configuracoes.leValorComFiltroEmpresa("nfse.motor");n=(o==null?void 0:o.toLowerCase())==="plugnotas"}n||(this.nfse.servico.valores.valorIss=$utils.arredondaAbnt5891(u)),n&&(this.nfse.servico.valores.valorIss=parseFloat(u.toFixed(2)))}}},Z={class:"layout-padding q-my-lg"},$=i("p",{class:"q-item-label q-mb-none",style:{color:"#0c0c0c"}}," Informa\xE7\xF5es da Nota Fiscal Eletr\xF4nica ",-1),oo={class:"row q-col-gutter-x-sm q-px-none q-mb-md"},eo={class:"col-12 col-md-2"},so={class:"col-12 col-md-2"},lo={class:"col-12 col-md-1"},io={class:"col-12 col-md-1"},ao={class:"col-12 col-md-3"},no={class:"col-12 col-md-3"},to={class:"row q-col-gutter-x-sm q-px-none q-mb-md"},ro={class:"col-12 col-md-6"},co={class:"col-12 col-md-6"},uo={class:"row q-col-gutter-x-sm q-px-none"},mo={class:"col-12 col-md-4"},fo={class:"col-12 col-md-4"},po={class:"col-12 col-md-4"},vo={class:"col-12 col-md-6"},ho={class:"row"},bo={class:"col-12"},Vo=i("p",{class:"q-item-label q-mb-none",style:{color:"#0c0c0c"}}," RPS Substitu\xEDdo ",-1),go={class:"row q-col-gutter-x-sm q-px-none"},qo={class:"col-6"},No={class:"col-6"},Co={class:"row q-col-gutter-x-sm q-px-none"},_o={class:"col-12"},So={class:"row"},Ro={class:"col-12"},yo=i("p",{class:"q-item-label q-mb-none",style:{color:"#0c0c0c"}}," Prestador ",-1),wo={class:"row q-col-gutter-x-sm q-px-none"},xo={class:"col-12 col-md-6"},Eo={class:"col-12 col-md-6"},Io={class:"row q-col-gutter-x-sm q-px-none"},Uo={class:"col-12"},Fo=i("p",{class:"q-item-label q-mb-none",style:{color:"#0c0c0c"}}," Tomador ",-1),Oo={class:"row q-col-gutter-x-sm q-px-none mb-2"},Lo={class:"col-12"},ko={class:"row q-col-gutter-x-sm q-px-none"},Do={class:"col-12 col-md-6"},To={class:"col-12 col-md-6"},zo={class:"row q-col-gutter-x-sm q-px-none q-mb-md"},Qo={class:"col-12 col-md-6"},Mo={class:"col-12 col-md-6"},Ao={class:"col-12 col-md-6"},Ho={class:"col-12 col-md-6"},Po={class:"col-12 col-md-6"},jo={class:"col-12 col-md-6"},Jo=i("p",{class:"q-item-label q-mb-none",style:{color:"#0c0c0c"}}," Constru\xE7\xE3o Civil ",-1),Bo={class:"row q-px-none q-col-gutter-x-sm"},Xo={class:"col-12 col-md-6"},Ko={class:"col-12 col-md-6"},Go=i("p",{class:"q-item-label q-mb-none",style:{color:"#0c0c0c"}}," Discrimina\xE7\xE3o dos Servi\xE7os ",-1),Wo={class:"row q-px-none"},Yo={class:"col"},Zo=i("p",{class:"q-item-label q-mb-none",style:{color:"#0c0c0c"}}," Informa\xE7\xF5es de servi\xE7os ",-1),$o={class:"row q-col-gutter-x-sm q-px-none"},oe={class:"col-12 col-md-4"},ee={class:"col-12 col-sm-6 col-md-3"},se={class:"col-12 col-md-2"},le={class:"col-12 col-md-2"},ie={class:"col-12 col-md-2"},ae={class:"col-12 col-md-2"},ne=i("p",{class:"q-item-label q-mb-none",style:{color:"#0c0c0c"}}," Valores ",-1),te={class:"row q-col-gutter-x-sm q-px-none"},re={class:"col-12 col-sm-6 col-md-3"},ce={class:"col-12 col-sm-6 col-md-3"},ue={class:"col-12 col-sm-6 col-md-3"},de={class:"col-12 col-sm-6 col-md-3"},me={class:"col-12 col-sm-6 col-md-3"},fe={class:"col-12 col-sm-6 col-md-3"},pe={class:"col-12 col-sm-6 col-md-3"},ve={class:"col-12 col-sm-6 col-md-3"},he={class:"col-12 col-sm-6 col-md-3"},be={class:"col-12 col-sm-6 col-md-3"},Ve={class:"col-12 col-sm-6 col-md-3"},ge={class:"col-12 col-sm-6 col-md-3"},qe={class:"col-12 col-sm-6 col-md-3"};function Ne(r,e,u,n,o,c){const t=U("campo"),m=U("JsonViewer");return g(),q(W,{modelValue:o.showModal,"onUpdate:modelValue":e[48]||(e[48]=s=>o.showModal=s),onKeyup:G(c.voltar,["esc"]),onHide:c.onHide,maximized:"",persistent:""},{default:a(()=>[l(D,{view:"hHh LpR fFf",container:"",class:"bg-light"},{default:a(()=>[l(T,null,{default:a(()=>[l(d,null,{default:a(()=>[l(S,{dense:"",flat:"",icon:"arrow_back",round:"",onClick:c.voltar},null,8,["onClick"]),l(R,null,{default:a(()=>[b("NFS-e")]),_:1}),o.situacaoNfse==="Rascunho"?(g(),q(S,{key:0,onClick:e[0]||(e[0]=s=>c.salvar()),label:"Salvar",color:"white","text-color":"primary",unelevated:""})):y("",!0),r.$db.usuario.desenvolvedor()?(g(),q(S,{key:1,icon:"more_vert",round:"",flat:"",class:"q-ml-sm"},{default:a(()=>[l(z,null,{default:a(()=>[Q((g(),q(M,{onClick:e[1]||(e[1]=s=>c.mostrarJsonViewer()),clickable:""},{default:a(()=>[l(F,{avatar:""},{default:a(()=>[l(A,{name:"mdi-file-replace",size:"sm"})]),_:1}),l(F,null,{default:a(()=>[b("Ver Objeto")]),_:1})]),_:1})),[[H]])]),_:1})]),_:1})):y("",!0)]),_:1})]),_:1}),l(P,null,{default:a(()=>[l(j,{class:"u-container"},{default:a(()=>[i("div",Z,[o.nfse.mensagemDeRetorno?(g(),q(f,{key:0,class:"q-py-lg bg-white q-pa-md no-border no-shadow"},{default:a(()=>[l(p,{class:"q-px-none q-pb-none"},{default:a(()=>[l(J,{class:"q-col-12 text-white bg-red"},{default:a(()=>[b(w(o.nfse.mensagemDeRetorno),1)]),_:1})]),_:1})]),_:1})):y("",!0),l(B,{ref:"nfseForm",class:"q-py-lg"},{default:a(()=>[l(f,{class:"bg-white q-pa-md no-border no-shadow"},{default:a(()=>[l(d,{class:"q-pa-none q-ma-none",color:"none","text-color":"black",style:{"min-height":"auto"}},{default:a(()=>[$]),_:1}),l(p,{class:"q-px-none q-pb-none"},{default:a(()=>[i("div",oo,[i("div",eo,[l(V,{label:"N\xFAmero do Lote",modelValue:o.nfse.numeroLote,"onUpdate:modelValue":e[2]||(e[2]=s=>o.nfse.numeroLote=s),readonly:"",dense:""},null,8,["modelValue"])]),i("div",so,[l(V,{label:"N\xFAmero do RPS",modelValue:o.nfse.identificacaoRps.numero,"onUpdate:modelValue":[e[3]||(e[3]=s=>o.nfse.identificacaoRps.numero=s),e[4]||(e[4]=()=>{o.nfse.numeroLote=o.nfse.identificacaoRps.numero})],readonly:o.situacaoNfse!=="Rascunho",rules:[s=>!!s||"Campo Obrigat\xF3rio"],mask:"#","reverse-fill-mask":"",dense:""},null,8,["modelValue","readonly","rules"])]),i("div",lo,[l(V,{label:"Serie do RPS",modelValue:o.nfse.identificacaoRps.serie,"onUpdate:modelValue":e[5]||(e[5]=s=>o.nfse.identificacaoRps.serie=s),readonly:o.situacaoNfse!=="Rascunho",rules:[s=>!!s||"Campo Obrigat\xF3rio"],mask:"#","reverse-fill-mask":"",dense:""},null,8,["modelValue","readonly","rules"])]),i("div",io,[l(v,{modelValue:o.nfse.identificacaoRps.tipo,"onUpdate:modelValue":e[6]||(e[6]=s=>o.nfse.identificacaoRps.tipo=s),options:o.opcoesTipoRps,label:"Tipo RPS",readonly:o.situacaoNfse!=="Rascunho",rules:[s=>!!s||"Campo Obrigat\xF3rio"],"emit-value":"","map-options":"",dense:""},null,8,["modelValue","options","readonly","rules"])]),i("div",ao,[l(t,{rotulo:"Data de emiss\xE3o NFS-e",tipo:"dataHora",modelValue:o.nfse.dataEmissao,"onUpdate:modelValue":e[7]||(e[7]=s=>o.nfse.dataEmissao=s),"somente-leitura":""},null,8,["modelValue"])]),i("div",no,[l(t,{rotulo:"Data de cria\xE7\xE3o RPS",tipo:"dataHora",modelValue:o.nfse.dataHoraCriacao,"onUpdate:modelValue":e[8]||(e[8]=s=>o.nfse.dataHoraCriacao=s),"somente-leitura":""},null,8,["modelValue"])])]),i("div",to,[i("div",ro,[l(v,{modelValue:o.nfse.naturezaOperacao,"onUpdate:modelValue":e[9]||(e[9]=s=>o.nfse.naturezaOperacao=s),options:o.opcoesNatureza,label:"Natureza da Opera\xE7\xE3o",readonly:o.situacaoNfse!=="Rascunho",rules:[s=>!!s||"Campo Obrigat\xF3rio"],"emit-value":"","map-options":"",dense:""},null,8,["modelValue","options","readonly","rules"])]),i("div",co,[l(v,{modelValue:o.nfse.regimeEspecialTributacao,"onUpdate:modelValue":e[10]||(e[10]=s=>o.nfse.regimeEspecialTributacao=s),options:o.opcoesRegimeEspecialTributacao,label:"Regime Especial Tributa\xE7\xE3o",readonly:o.situacaoNfse!=="Rascunho",rules:[s=>!!s||"Campo Obrigat\xF3rio"],"emit-value":"","map-options":"",dense:""},null,8,["modelValue","options","readonly","rules"])])]),i("div",uo,[i("div",mo,[l(v,{modelValue:o.nfse.status,"onUpdate:modelValue":e[11]||(e[11]=s=>o.nfse.status=s),options:o.opcoesStatusRps,label:"Status",rules:[s=>!!s||"Campo Obrigat\xF3rio"],readonly:"","emit-value":"","map-options":"",dense:""},null,8,["modelValue","options","rules"])]),i("div",fo,[l(v,{modelValue:o.nfse.optanteSimplesNacional,"onUpdate:modelValue":e[12]||(e[12]=s=>o.nfse.optanteSimplesNacional=s),options:o.opcoesSimNao,label:"Optante Simples Nacional",readonly:o.situacaoNfse!=="Rascunho",rules:[s=>!!s||"Campo Obrigat\xF3rio"],"emit-value":"","map-options":"",dense:""},null,8,["modelValue","options","readonly","rules"])]),i("div",po,[l(v,{modelValue:o.nfse.incentivadorCultural,"onUpdate:modelValue":e[13]||(e[13]=s=>o.nfse.incentivadorCultural=s),options:o.opcoesSimNao,label:"Incentivador Cultural",readonly:o.situacaoNfse!=="Rascunho",rules:[s=>!!s||"Campo Obrigat\xF3rio"],"emit-value":"","map-options":"",dense:""},null,8,["modelValue","options","readonly","rules"])])])]),_:1})]),_:1}),i("div",vo,[l(f,{class:"bg-white q-pa-md no-border q-mt-md no-shadow"},{default:a(()=>[i("div",ho,[i("div",bo,[l(d,{class:"q-pa-none q-ma-none",color:"none","text-color":"black",style:{"min-height":"auto"}},{default:a(()=>[Vo,l(R,null,{default:a(()=>[b("\xA0")]),_:1})]),_:1}),l(p,{class:"q-px-none q-pb-none"},{default:a(()=>[i("div",go,[i("div",qo,[l(t,{rotulo:"N\xFAmero do RPS",modelValue:o.nfse.numeroRPSSubstituido,"onUpdate:modelValue":e[14]||(e[14]=s=>o.nfse.numeroRPSSubstituido=s),"somente-leitura":o.situacaoNfse!=="Rascunho"},null,8,["modelValue","somente-leitura"])]),i("div",No,[l(t,{rotulo:"Protocolo de retorno",modelValue:o.nfse.protocoloRetorno,"onUpdate:modelValue":e[15]||(e[15]=s=>o.nfse.protocoloRetorno=s),"somente-leitura":o.situacaoNfse!=="Rascunho"},null,8,["modelValue","somente-leitura"])])])]),_:1})])])]),_:1})]),i("div",Co,[i("div",_o,[l(f,{class:"bg-white q-pa-md no-border q-mt-md no-shadow"},{default:a(()=>[i("div",So,[i("div",Ro,[l(d,{class:"q-pa-none q-ma-none",color:"none","text-color":"black",style:{"min-height":"auto"}},{default:a(()=>[yo,l(R,null,{default:a(()=>[b("\xA0")]),_:1})]),_:1}),l(p,{class:"q-px-none q-pb-none"},{default:a(()=>[i("div",wo,[i("div",xo,[l(t,{rotulo:"CNPJ",modelValue:o.nfse.prestador.documento,"onUpdate:modelValue":e[16]||(e[16]=s=>o.nfse.prestador.documento=s),"somente-leitura":"",rules:[s=>!!s||"Campo Obrigat\xF3rio"]},null,8,["modelValue","rules"])]),i("div",Eo,[l(t,{rotulo:"Inscri\xE7\xE3o Municipal",modelValue:o.nfse.prestador.inscricaoMunicipal,"onUpdate:modelValue":e[17]||(e[17]=s=>o.nfse.prestador.inscricaoMunicipal=s),rules:[s=>!!s||"Campo Obrigat\xF3rio"],"somente-leitura":""},null,8,["modelValue","rules"])])])]),_:1})])])]),_:1})])]),i("div",Io,[i("div",Uo,[l(f,{class:"bg-white q-pa-md no-border q-mt-md no-shadow"},{default:a(()=>[l(d,{class:"q-pa-none q-ma-none",color:"none","text-color":"black",style:{"min-height":"auto"}},{default:a(()=>[Fo,l(R,null,{default:a(()=>[b("\xA0")]),_:1})]),_:1}),l(p,{class:"q-px-none q-pb-none"},{default:a(()=>[i("div",Oo,[i("div",Lo,[l(t,{modelValue:o.nfse.tomador.razaoSocial,"onUpdate:modelValue":e[18]||(e[18]=s=>o.nfse.tomador.razaoSocial=s),rotulo:"Selecione o Tomador",before:[{icon:"search",handler:c.abrirModalTomador}],"somente-leitura":""},null,8,["modelValue","before"])])]),i("div",ko,[i("div",Do,[l(t,{rotulo:"Nome/Raz\xE3o Social",modelValue:o.nfse.tomador.razaoSocial,"onUpdate:modelValue":e[19]||(e[19]=s=>o.nfse.tomador.razaoSocial=s),"somente-leitura":o.situacaoNfse!=="Rascunho"},null,8,["modelValue","somente-leitura"])]),i("div",To,[l(t,{rotulo:"CNPJ/CPF",modelValue:o.nfse.tomador.documento,"onUpdate:modelValue":e[20]||(e[20]=s=>o.nfse.tomador.documento=s),"somente-leitura":""},null,8,["modelValue"])])]),i("div",zo,[i("div",Qo,[l(V,{label:"CEP",modelValue:o.nfse.tomador.endereco.cep,"onUpdate:modelValue":e[21]||(e[21]=s=>o.nfse.tomador.endereco.cep=s),readonly:o.situacaoNfse!=="Rascunho",mask:"#####-###",dense:""},null,8,["modelValue","readonly"])]),i("div",Mo,[l(t,{rotulo:"Rua",modelValue:o.nfse.tomador.endereco.rua,"onUpdate:modelValue":e[22]||(e[22]=s=>o.nfse.tomador.endereco.rua=s),"somente-leitura":o.situacaoNfse!=="Rascunho"},null,8,["modelValue","somente-leitura"])]),i("div",Ao,[l(t,{rotulo:"Numero",modelValue:o.nfse.tomador.endereco.numero,"onUpdate:modelValue":e[23]||(e[23]=s=>o.nfse.tomador.endereco.numero=s),"somente-leitura":o.situacaoNfse!=="Rascunho"},null,8,["modelValue","somente-leitura"])]),i("div",Ho,[l(t,{rotulo:"Bairro",modelValue:o.nfse.tomador.endereco.bairro,"onUpdate:modelValue":e[24]||(e[24]=s=>o.nfse.tomador.endereco.bairro=s),"somente-leitura":o.situacaoNfse!=="Rascunho"},null,8,["modelValue","somente-leitura"])]),i("div",Po,[l(V,{label:"Cidade (C\xF3digo Municipal)",modelValue:o.nfse.tomador.endereco.cidade,"onUpdate:modelValue":e[25]||(e[25]=s=>o.nfse.tomador.endereco.cidade=s),readonly:o.situacaoNfse!=="Rascunho",mask:"#","reverse-fill-mask":"",dense:""},null,8,["modelValue","readonly"])]),i("div",jo,[l(v,{label:"UF",modelValue:o.nfse.tomador.endereco.estado,"onUpdate:modelValue":e[26]||(e[26]=s=>o.nfse.tomador.endereco.estado=s),options:o.opcoesUF,readonly:o.situacaoNfse!=="Rascunho",dense:""},null,8,["modelValue","options","readonly"])])])]),_:1})]),_:1})])]),l(f,{class:"bg-white q-pa-md no-border q-mt-md no-shadow"},{default:a(()=>[l(d,{class:"q-pa-none q-ma-none",color:"none","text-color":"black",style:{"min-height":"auto"}},{default:a(()=>[Jo]),_:1}),l(p,{class:"q-px-none q-pb-none"},{default:a(()=>[i("div",Bo,[i("div",Xo,[l(t,{rotulo:"C\xF3digo de Obra",modelValue:o.nfse.codigoObra,"onUpdate:modelValue":e[27]||(e[27]=s=>o.nfse.codigoObra=s),"somente-leitura":o.situacaoNfse!=="Rascunho"},null,8,["modelValue","somente-leitura"])]),i("div",Ko,[l(t,{rotulo:"C\xF3digo ART",modelValue:o.nfse.codigoART,"onUpdate:modelValue":e[28]||(e[28]=s=>o.nfse.codigoART=s),"somente-leitura":o.situacaoNfse!=="Rascunho"},null,8,["modelValue","somente-leitura"])])])]),_:1})]),_:1}),l(f,{class:"bg-white q-pa-md no-border q-mt-md no-shadow"},{default:a(()=>[l(d,{class:"q-pa-none q-ma-none",color:"none","text-color":"black",style:{"min-height":"auto"}},{default:a(()=>[Go]),_:1}),l(p,{class:"q-px-none q-pb-none"},{default:a(()=>[i("div",Wo,[i("div",Yo,[l(t,{rotulo:"Discrimina\xE7\xE3o dos Servi\xE7os",modelValue:o.nfse.servico.discriminacao,"onUpdate:modelValue":e[29]||(e[29]=s=>o.nfse.servico.discriminacao=s),tipo:"textoArea",rows:"2","somente-leitura":o.situacaoNfse!=="Rascunho",rules:[s=>!!s||"Campo Obrigat\xF3rio"]},null,8,["modelValue","somente-leitura","rules"])])])]),_:1})]),_:1}),l(f,{class:"bg-white q-pa-md no-border q-mt-md no-shadow"},{default:a(()=>[l(d,{class:"q-pa-none q-ma-none",color:"none","text-color":"black",style:{"min-height":"auto"}},{default:a(()=>[Zo]),_:1}),l(p,{class:"q-px-none q-pb-none"},{default:a(()=>[i("div",$o,[i("div",oe,[i("div",ee,[l(v,{modelValue:o.nfse.servico.itemListaServico,options:o.opcoesInformacoesServicos,"option-value":s=>s.codigo,"option-label":s=>s?s.descricao:"",readonly:o.situacaoNfse!=="Rascunho",label:"Servi\xE7os","emit-value":"","map-options":"",dense:"","onUpdate:modelValue":c.trocouServico},null,8,["modelValue","options","option-value","option-label","readonly","onUpdate:modelValue"])])]),i("div",se,[l(V,{label:"C\xF3digo de Item da Lista de Servi\xE7o",modelValue:o.nfse.servico.itemListaServico,"onUpdate:modelValue":e[30]||(e[30]=s=>o.nfse.servico.itemListaServico=s),readonly:"",rules:[s=>!!s||"Campo Obrigat\xF3rio"],dense:""},null,8,["modelValue","rules"])]),i("div",le,[l(V,{label:"C\xF3digo CNAE",modelValue:o.nfse.servico.codigoCnae,"onUpdate:modelValue":e[31]||(e[31]=s=>o.nfse.servico.codigoCnae=s),readonly:"",rules:[s=>!!s||"Campo Obrigat\xF3rio"],dense:""},null,8,["modelValue","rules"])]),i("div",ie,[l(V,{label:"C\xF3digo de Tributa\xE7\xE3o",modelValue:o.nfse.servico.codigoTributacaoMunicipio,"onUpdate:modelValue":e[32]||(e[32]=s=>o.nfse.servico.codigoTributacaoMunicipio=s),readonly:"",rules:[s=>!!s||"Campo Obrigat\xF3rio"],dense:""},null,8,["modelValue","rules"])]),i("div",ae,[i("div",{class:"col",onClick:e[34]||(e[34]=(...s)=>r.carregarEquipamentos&&r.carregarEquipamentos(...s))},[l(t,{modelValue:o.nfse.servico.municipioPrestacaoServico,"onUpdate:modelValue":e[33]||(e[33]=s=>o.nfse.servico.municipioPrestacaoServico=s),opcoes:o.opcoesCidadeIbge,tipo:"seletor",rotulo:"C\xF3digo Munic\xEDpio IBGE"},null,8,["modelValue","opcoes"])])])])]),_:1})]),_:1}),l(f,{class:"bg-white q-pa-md no-border q-mt-md no-shadow"},{default:a(()=>[l(d,{class:"q-pa-none q-ma-none",color:"none","text-color":"black",style:{"min-height":"auto"}},{default:a(()=>[ne]),_:1}),l(p,{class:"q-px-none q-pb-none"},{default:a(()=>[i("div",te,[i("div",re,[l(v,{modelValue:o.nfse.servico.valores.issRetido,"onUpdate:modelValue":e[35]||(e[35]=s=>o.nfse.servico.valores.issRetido=s),options:o.opcoesSimNao,label:"ISS Retido",readonly:o.situacaoNfse!=="Rascunho",rules:[s=>!!s||"Campo Obrigat\xF3rio"],"emit-value":"","map-options":"",dense:""},null,8,["modelValue","options","readonly","rules"])]),i("div",ce,[l(t,{rotulo:"Valor dos Servi\xE7os",modelValue:o.nfse.servico.valores.valorServicos,"onUpdate:modelValue":e[36]||(e[36]=s=>o.nfse.servico.valores.valorServicos=s),decimals:"4",value:"0",prefix:"R$",tipo:"decimal","somente-leitura":o.situacaoNfse!=="Rascunho"},null,8,["modelValue","somente-leitura"])]),i("div",ue,[l(t,{rotulo:"Valor PIS",modelValue:o.nfse.servico.valores.valorPis,"onUpdate:modelValue":e[37]||(e[37]=s=>o.nfse.servico.valores.valorPis=s),value:"0",prefix:"R$",decimals:"2",tipo:"decimal","somente-leitura":o.situacaoNfse!=="Rascunho"},null,8,["modelValue","somente-leitura"])]),i("div",de,[l(t,{rotulo:"Valor COFINS",modelValue:o.nfse.servico.valores.valorCofins,"onUpdate:modelValue":e[38]||(e[38]=s=>o.nfse.servico.valores.valorCofins=s),value:"0",prefix:"R$",decimals:"2",tipo:"decimal","somente-leitura":o.situacaoNfse!=="Rascunho"},null,8,["modelValue","somente-leitura"])]),i("div",me,[l(t,{rotulo:"Valor INSS",modelValue:o.nfse.servico.valores.valorInss,"onUpdate:modelValue":e[39]||(e[39]=s=>o.nfse.servico.valores.valorInss=s),value:"0",prefix:"R$",decimals:"2",tipo:"decimal","somente-leitura":o.situacaoNfse!=="Rascunho"},null,8,["modelValue","somente-leitura"])]),i("div",fe,[l(t,{rotulo:"Valor IR",modelValue:o.nfse.servico.valores.valorIr,"onUpdate:modelValue":e[40]||(e[40]=s=>o.nfse.servico.valores.valorIr=s),value:"0",prefix:"R$",decimals:"2",tipo:"decimal","somente-leitura":o.situacaoNfse!=="Rascunho"},null,8,["modelValue","somente-leitura"])]),i("div",pe,[l(t,{rotulo:"Valor CSLL",modelValue:o.nfse.servico.valores.valorCsll,"onUpdate:modelValue":e[41]||(e[41]=s=>o.nfse.servico.valores.valorCsll=s),value:"0",prefix:"R$",decimals:"2",tipo:"decimal","somente-leitura":o.situacaoNfse!=="Rascunho"},null,8,["modelValue","somente-leitura"])]),i("div",ve,[l(t,{rotulo:"Valor ISS",modelValue:o.nfse.servico.valores.valorIss,"onUpdate:modelValue":e[42]||(e[42]=s=>o.nfse.servico.valores.valorIss=s),value:"0",prefix:"R$",decimals:"2",tipo:"decimal","somente-leitura":""},null,8,["modelValue"])]),i("div",he,[l(t,{rotulo:"Base Calculo",modelValue:o.nfse.servico.valores.baseCalculo,"onUpdate:modelValue":e[43]||(e[43]=s=>o.nfse.servico.valores.baseCalculo=s),value:"0",prefix:"R$",decimals:"2",tipo:"decimal","somente-leitura":""},null,8,["modelValue"])]),i("div",be,[l(t,{rotulo:"Aliquota",value:"2",suffix:"%",decimals:"2",tipo:"decimal",modelValue:o.nfse.servico.valores.aliquota,"onUpdate:modelValue":e[44]||(e[44]=s=>o.nfse.servico.valores.aliquota=s),"somente-leitura":o.situacaoNfse!=="Rascunho"},null,8,["modelValue","somente-leitura"])]),i("div",Ve,[l(t,{rotulo:"Valor Liquido Nfse",modelValue:o.nfse.servico.valores.valorLiquidoNfse,"onUpdate:modelValue":e[45]||(e[45]=s=>o.nfse.servico.valores.valorLiquidoNfse=s),value:"0",prefix:"R$",decimals:"2",tipo:"decimal","somente-leitura":""},null,8,["modelValue"])]),i("div",ge,[l(t,{rotulo:"Desconto Condicionado",modelValue:o.nfse.servico.valores.descontoCondicionado,"onUpdate:modelValue":e[46]||(e[46]=s=>o.nfse.servico.valores.descontoCondicionado=s),value:"0",prefix:"R$",decimals:"2",tipo:"decimal","somente-leitura":o.situacaoNfse!=="Rascunho"},null,8,["modelValue","somente-leitura"])]),i("div",qe,[l(t,{rotulo:"Desconto Incondicionado",modelValue:o.nfse.servico.valores.descontoIncondicionado,"onUpdate:modelValue":e[47]||(e[47]=s=>o.nfse.servico.valores.descontoIncondicionado=s),value:"0",prefix:"R$",decimals:"2",tipo:"decimal","somente-leitura":o.situacaoNfse!=="Rascunho"},null,8,["modelValue","somente-leitura"])])])]),_:1})]),_:1})]),_:1},512)])]),_:1})]),_:1}),l(X,{class:"bg-light",bordered:""},{default:a(()=>[l(d,{class:"bg-light text-tertiary q-pa-sm u-container"},{default:a(()=>[l(R,null,{default:a(()=>{var s,C,_;return[b(" Total "),i("strong",null,"R$ "+w(r.$filters.numero((_=(C=(s=o.nfse.servico)==null?void 0:s.valores)==null?void 0:C.valorServicos)!=null?_:0,2)),1),b(" --- "+w(o.situacaoNfse)+" --- ",1)]}),_:1}),l(K),~["Rascunho"].indexOf(o.situacaoNfse)?(g(),q(S,{key:0,onClick:c.emitir,label:"Emitir",color:"primary",unelevated:"",class:"q-ml-sm float-right"},null,8,["onClick"])):y("",!0),~["Protocolada"].indexOf(o.situacaoNfse)?(g(),q(S,{key:1,onClick:c.emitir,label:"Checar envio",color:"primary",unelevated:"",class:"q-ml-sm float-right"},null,8,["onClick"])):y("",!0)]),_:1})]),_:1}),l(m,{ref:"jsonViewer"},null,512)]),_:1})]),_:1},8,["modelValue","onKeyup","onHide"])}var Re=L(Y,[["render",Ne]]);export{Re as N};