import{_ as v,ca as h,o as e,i as p,w as r,d as n,F as l,s as b,f as d,M as q,x as m,t as s,j as z,l as B,B as y,E as D,r as g,e as f,H as S}from"./index.4361d107.js";let i=1;const $={components:{},data(){return{animacao:"",atualizou:!1,mensagemBancoBloqueado:"",statusBancos:{}}},methods:{animar(){i++,i===10&&(i=1),i<5?this.animacao="<".repeat(i)+""+">".repeat(i):this.animacao="<".repeat(10-i)+""+">".repeat(10-i)},async atualizar(){if(await this.verificarRedirecionamento())return!0;try{this.$q.loading.show();const a=await h.sincronismo.le();for(const t of a){const c=this.statusBancos[t.bancoDeDados]||{};this.statusBancos[t.bancoDeDados]={bancoDeDados:t.bancoDeDados,status:t.status,percentagem:0,quantidadeRestantePeriodico:0,...c}}this.atualizou=!0}catch(a){this.$q.notifyError("Erro ao atualizar",a)}finally{this.$q.loading.hide()}this.atualizarPeriodico()},async atualizarPeriodico(){this.cotadorInterval=(this.cotadorInterval||0)+1,this.animar();try{const a=this.cotadorInterval%5!==1?await h.sincronismo.le({bancoDeDados:$db.cache.get("bancoDeDados")}):await h.sincronismo.le();for(const t of a){if(t.bancoDeDados===$db.cache.get("bancoDeDados")&&await this.verificarRedirecionamento(t))return!0;const c=this.statusBancos[t.bancoDeDados];c||(this.statusBancos[t.bancoDeDados]={...t}),c.ultimo<t.ultimo&&(this.statusBancos[t.bancoDeDados]={...c,...t})}}catch(a){this.$q.notifyError("Erro ao atualizar",a)}},async atualizarStatusSincronismo(a,t){if(this.animar(),this.statusBancos[a]={...this.statusBancos[a]||{},...t},t.status==="normal"&&await this.verificarRedirecionamento())return!0},async atualizarStatusSincronismoPeriodico(a,t){this.animar(),this.statusBancos[a]&&t&&(this.statusBancos[a].quantidadeRestantePeriodico-=t)},async verificarRedirecionamento(){try{if(this.mensagemBancoBloqueado=await h.sincronismo.verificaBloqueio(),!this.mensagemBancoBloqueado){const a=await $db.permissao.telaInicial();return $utils.gconsole.log("Home","redirecionando para a tela inicial",JSON.stringify(a)),await this.$router.push(a),!0}}catch(a){this.$q.notifyError("Erro ao verificar banco selecionado",a)}return!1}},async created(){},async mounted(){if($db.cache.get("reload")==="1"){$utils.gconsole.log("Home","reload()"),$db.cache.set("reload","0"),window.location.reload();return}if(!$db.app.modoOnline.le()){if($utils.emitter.on("atualizarStatusSincronismo",this.atualizarStatusSincronismo),$utils.emitter.on("atualizarStatusSincronismoPeriodico",this.atualizarStatusSincronismoPeriodico),await this.atualizar())return;this.interval=setInterval(this.atualizarPeriodico,3e4);return}this.atualizou=!0},beforeUnmount(){this.interval&&clearInterval(this.interval),$utils.emitter.off("atualizarStatusSincronismo"),$utils.emitter.off("atualizarStatusSincronismoPeriodico")}},_={class:"text-body1 q-mr-sm"},w={class:"text-caption"},x=m("div",{class:"text-body1 q-mt-md text-white text-center q-px-md"}," Voc\xEA pode usar a parte online do sistema enquanto trazemos os dados para seu dispositivo! ",-1),P=m("div",{class:"text-caption"}," Atualizando ... ",-1);function k(a,t,c,E,u,I){return e(),p(S,{class:"u-container",id:"home"},{default:r(()=>[a.$db.app.modoOnline.le()?B("",!0):(e(),n(l,{key:0},[u.mensagemBancoBloqueado?(e(),p(b,{key:0,color:"negative",class:"q-mb-md"},{default:r(()=>[d(q,{class:"q-py-xs"},{default:r(()=>[m("span",_,s(u.mensagemBancoBloqueado),1),d(z,{name:"alarm",color:"white"})]),_:1})]),_:1})):B("",!0),u.atualizou?(e(),n(l,{key:1},[d(y,{class:"q-py-sm",color:"none"},{default:r(()=>[d(D,{class:"text-center text-white"},{default:r(()=>[(e(!0),n(l,null,g(u.statusBancos,o=>(e(),n("p",{key:o.bancoDeDados},[o.status?o.status==="sincronismoInicial"?(e(),n(l,{key:1},[f(s(o.bancoDeDados)+" - "+s(a.$filters.numero(o.percentagem,2))+" % ",1)],64)):(e(),n(l,{key:2},[f(s(o.bancoDeDados)+" "+s(a.$filters.dataHora(o.dataHoraServidor))+" - "+s(a.$filters.numero(o.quantidadeRestantePeriodico,0))+" quantidade restante ",1)],64)):(e(),n(l,{key:0},[f(s(o.bancoDeDados)+" - verificando ... ",1)],64))]))),128)),m("div",w,[m("div",null,s(u.animacao),1),f(" Sincronizando ")])]),_:1})]),_:1}),x],64)):(e(),p(y,{key:2,class:"q-py-sm",color:"none"},{default:r(()=>[d(D,{class:"text-center"},{default:r(()=>[P]),_:1})]),_:1}))],64))]),_:1})}var H=v($,[["render",k]]);export{H as default};