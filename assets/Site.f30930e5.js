import{_ as j,bh as E,p as q,o as c,i as v,w as n,x as r,f as s,B as A,j as P,E as D,e as w,Q as p,T as g,u as h,l as k,d as S,F as y,r as V,cl as U,t as x,D as b,N as T,P as B,R as C,S as z,I as Q,H as F}from"./index.4361d107.js";var I="/assets/images/imagem-modelo-carrossel.jpg";const N={components:{Arquivo:E},computed:{estaoTodasEmpresasComSiteAtivo:{get(){for(const o in this.empresas)if(!this.empresas[o].principal&&!this.empresas[o].ativoSite)return!1;return!0},set(o){for(const e in this.empresas)this.empresas[e].principal||(this.empresas[e].ativoSite=o)}},estaoTodasFormasDePagamentoComSiteAtivo:{get(){for(const o in this.formasPagamento)if(!this.formasPagamento[o].ativoSite)return!1;return!0},set(o){for(const e in this.formasPagamento)this.formasPagamento[e].ativoSite=o}}},data(){return{tabsSite:"home",empresas:[],formasPagamentoParaSincronizar:[],formasPagamento:[],empresaPrincipal:"",json:{siteUrl:"",ativo:!0,empresas:{},carrossel:[],slogan:"",descricao:"",formasPagamento:{},marketingDigital:{codigoTagHead:"",codigoTagBody:""}},arquivo:[]}},methods:{async atualizar(){var o,e,d,m,t;try{let l=await this.$utils.geeksApi({site:{funcao:"84C328A7-CEA7-4762-A703-C59DE8D53BF5"}});if(l=l.data.site,((o=l==null?void 0:l.carrossel)==null?void 0:o.length)&&this.tabsSite!=="produtos"&&(this.arquivo=l.carrossel.map(i=>({id:i.id,dataCriacao:$utils.dataAtual(),nome:i.nome,arquivo:i.imagemB64}))),this.empresas=await $db.empresa.le(),this.empresas=this.empresas.reduce((i,f)=>(i[f.id]={id:f.id,idContato:f.idContato,nome:f.nome,ativoSite:!1,principal:!1},i),{}),!$lodash.isEmpty(l.empresas)){this.json=l;for(let i in this.empresas)this.empresas[i].principal=!!((e=this.json.empresas[i])!=null&&e.principal),this.empresas[i].ativoSite=!!((d=this.json.empresas[i])!=null&&d.ativoSite),(m=this.json.empresas[i])!=null&&m.principal&&(this.empresaPrincipal=this.json.empresas[i].id);await this.sincronizarFormasDePagamento(!0)}if($lodash.isEmpty(l.empresas)){const i=Object.keys(this.empresas);i.length===1&&(this.empresaPrincipal=i[0],this.empresas[i[0]].ativoSite=!0),await this.sincronizarFormasDePagamento(!1)}let u=localStorage.getItem("bancoDeDados"),_=await $db.vitrine.ler(),a=((t=(await $db.vitrine.ler()).find(i=>i.banco===u))==null?void 0:t.url)||u;this.json.siteUrl=a}catch(l){this.$q.notifyError("Erro ao consultar banco",l)}},async salvar(){if(!this.empresaPrincipal){this.$q.notifyError("Selecione ao menos uma empresa principal");return}this.json.empresas=this.empresas,this.json.formasPagamento=this.formasPagamento,this.json.empresas[this.empresaPrincipal].principal=!0;let o=$utils.clonarV2(this.json);await this.$utils.geeksApi({site:{funcao:"E981897C-A205-441E-99DE-BECD16CB261A",...o}}),this.$q.notifyPositive("Salvo com sucesso!")},carrosselAtualizar(){this.json.carrossel=[];for(const o of this.$refs.arquivo.arquivo)this.json.carrossel.push({imagemB64:o.arquivo,nome:o.nome,id:o.id})},async baixarImagemModeloCarrossel(){const o=document.createElement("a");o.href=I,o.download="imagem-modelo.jpg",o.click()},async mudarEmpresaPrincipal(o){for(const e in this.empresas)o===e?(this.empresas[e].principal=!0,this.empresas[e].ativoSite=!0):this.empresas[e].principal=!1;await this.sincronizarFormasDePagamento(!0)},async sincronizarFormasDePagamento(o){this.formasPagamento=[];const e=this.empresas[this.empresaPrincipal];for(const d of this.formasPagamentoParaSincronizar){if(!d.ativo||d.idContatoEmpresa&&e&&d.idContatoEmpresa!==e.idContato)continue;const m={id:d.id,descricao:d.descricao,ativoSite:!1},t=o?this.json.formasPagamento.find(l=>l.id===d.id):null;m.ativoSite=t?t.ativoSite:!1,this.formasPagamento.push(m)}this.formasPagamento.sort(function(d,m){return d.descricao<m.descricao?-1:d.descricao>m.descricao?1:0})}},async created(){this.formasPagamentoParaSincronizar=await $db.formaPagamento.le(),await this.atualizar()}},H={class:"bg-gradiente text-white q-mb-md"},L={class:"u-container"},M={name:"home",class:"u-container bg-transparent"},R={class:"q-card bg-white q-px-md no-shadow"},O={class:"row items-center"},G={class:"col"},J={class:"col-auto text-right"},K={class:"q-card bg-white q-my-md no-shadow"},W={class:"q-px-md"},X=r("div",{class:"col-6 col-md-1"},"Principal",-1),Y=r("div",{class:"col-6 col-md-1"},"Ativo",-1),Z=r("div",{class:"col-12 col-md"},"Empresa",-1),$={class:"col-6 col-md-1"},ee={class:"col-6 col-md-1"},ae={class:"col-12 col-md"},se={class:"q-card bg-white q-my-md no-shadow"},oe={class:"q-px-md q-pb-md"},te={class:"row justify-end"},ie={class:"q-card bg-white q-my-md no-shadow"},re={class:"q-px-md q-pb-md"},le={class:"q-card bg-white q-my-md no-shadow"},ne={class:"q-px-md q-pb-md"},de={class:"q-card bg-white no-shadow"},me={class:"q-px-md q-pb-md"},ce={class:"u-container relative-position"};function ue(o,e,d,m,t,l){const u=q("row"),_=q("Arquivo");return c(),v(F,{class:"Site"},{default:n(()=>[r("div",H,[r("div",L,[s(A,{class:"bg-transparent text-white"},{default:n(()=>[s(P,{name:"mdi-earth",size:"32px"}),s(D,null,{default:n(()=>[w(" Site ")]),_:1})]),_:1})])]),r("div",M,[r("div",R,[r("div",O,[r("div",G,[s(p,{readonly:"",type:"text",prefix:"b15.app/",label:"URL do Site",modelValue:t.json.siteUrl,"onUpdate:modelValue":e[0]||(e[0]=a=>t.json.siteUrl=a)},{prepend:n(()=>[s(P,{name:"mdi-earth",size:"32px"})]),_:1},8,["modelValue"])]),r("div",J,[s(g,{modelValue:t.json.ativo,"onUpdate:modelValue":e[1]||(e[1]=a=>t.json.ativo=a),label:"Ativo",class:"q-ma-md"},null,8,["modelValue"])])])]),r("div",K,[s(h,{group:"somegroup",icon:"business",label:"Empresas",class:"border-1","header-class":"bg-white text-tertiary","exact-active-class":"bg-white text-tertiary"},{default:n(()=>[Object.keys(t.empresas).length>1?(c(),v(g,{key:0,modelValue:l.estaoTodasEmpresasComSiteAtivo,"onUpdate:modelValue":e[2]||(e[2]=a=>l.estaoTodasEmpresasComSiteAtivo=a),label:"Selecionar todos"},null,8,["modelValue"])):k("",!0),r("div",W,[s(u,{class:"items-center borderBottom"},{default:n(()=>[X,Y,Z]),_:1}),(c(!0),S(y,null,V(t.empresas,a=>(c(),v(u,{class:"items-center borderBottom",key:a.id},{default:n(()=>[r("div",$,[s(U,{modelValue:t.empresaPrincipal,"onUpdate:modelValue":[e[3]||(e[3]=i=>t.empresaPrincipal=i),l.mudarEmpresaPrincipal],val:a.id},null,8,["modelValue","val","onUpdate:modelValue"])]),r("div",ee,[s(g,{modelValue:a.ativoSite,"onUpdate:modelValue":i=>a.ativoSite=i,class:"col",disable:t.empresaPrincipal==a.id},null,8,["modelValue","onUpdate:modelValue","disable"])]),r("div",ae,x(a.nome),1)]),_:2},1024))),128))])]),_:1})]),r("div",se,[s(h,{group:"somegroup",icon:"mdi-view-carousel",label:"Carrossel",class:"border-1","header-class":"bg-white text-tertiary"},{default:n(()=>[r("div",oe,[r("div",te,[s(b,{flat:"",color:"primary",label:"Baixar imagem modelo",onClick:l.baixarImagemModeloCarrossel},null,8,["onClick"])]),s(_,{ref:"arquivo",onAtualizar:l.carrosselAtualizar,arquivo:t.arquivo},null,8,["onAtualizar","arquivo"])])]),_:1})]),r("div",ie,[s(h,{group:"somegroup",icon:"mdi-format-title",label:"Textos",class:"border-1","header-class":"bg-white text-tertiary"},{default:n(()=>[r("div",re,[s(p,{label:"Slogan",class:"q-mb-sm",modelValue:t.json.slogan,"onUpdate:modelValue":e[4]||(e[4]=a=>t.json.slogan=a)},null,8,["modelValue"]),s(p,{class:"bg-light q-px-sm",label:"Descri\xE7\xE3o",rows:"3",type:"textarea",modelValue:t.json.descricao,"onUpdate:modelValue":e[5]||(e[5]=a=>t.json.descricao=a)},null,8,["modelValue"])])]),_:1})]),r("div",le,[s(h,{group:"somegroup",icon:"credit_card",label:"Formas de pagamento",class:"border-1","header-class":"bg-white text-tertiary"},{default:n(()=>[r("div",ne,[s(T,{highlight:"","no-border":"",separator:"",class:"q-pt-none"},{default:n(()=>[s(g,{modelValue:l.estaoTodasFormasDePagamentoComSiteAtivo,"onUpdate:modelValue":e[6]||(e[6]=a=>l.estaoTodasFormasDePagamentoComSiteAtivo=a),label:"Selecionar todos"},null,8,["modelValue"]),(c(!0),S(y,null,V(t.formasPagamento,a=>(c(),v(B,{key:a.id,class:"q-pa-xs itemlista"},{default:n(()=>[s(C,{avatar:""},{default:n(()=>[s(g,{modelValue:a.ativoSite,"onUpdate:modelValue":i=>a.ativoSite=i},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),s(C,null,{default:n(()=>[s(z,null,{default:n(()=>[w(x(a.descricao),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1})]),r("div",de,[s(h,{group:"somegroup",icon:"mdi-code-tags",label:"C\xF3digos marketing digital",class:"border-1","header-class":"bg-white text-tertiary"},{default:n(()=>[r("div",me,[s(p,{class:"bg-light q-px-md q-mb-md",label:"C\xF3digo na tag head",rows:"10",type:"textarea",modelValue:t.json.marketingDigital.codigoTagHead,"onUpdate:modelValue":e[7]||(e[7]=a=>t.json.marketingDigital.codigoTagHead=a)},null,8,["modelValue"]),s(p,{class:"bg-light q-px-md",label:"C\xF3digo ap\xF3s a tag de abertura body",rows:"10",type:"textarea",modelValue:t.json.marketingDigital.codigoTagBody,"onUpdate:modelValue":e[8]||(e[8]=a=>t.json.marketingDigital.codigoTagBody=a)},null,8,["modelValue"])])]),_:1})])]),s(Q,{class:"bg-light no-shadow q-pa-sm text-right u-bordaCima",reveal:""},{default:n(()=>[r("div",ce,[s(b,{color:"tertiary",flat:"",label:"Cancelar"}),s(b,{class:"q-ml-sm no-shadow",color:"primary",label:"Salvar",onClick:l.salvar},null,8,["onClick"])])]),_:1})]),_:1})}var ge=j(N,[["render",ue]]);export{ge as default};