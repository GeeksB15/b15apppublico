import{_ as E,p as A,o as _,i as M,w as l,f as s,A as v,x as t,B as r,E as u,aO as F,d as p,l as V,D as i,G as z,H as D,aZ as N,j as T,Q as m,e as g,s as c,M as a,O as f,a4 as h,a$ as j,k as P,F as b,r as q,t as x,y as L,K as w,C as S,L as Q}from"./index.6c26b0ec.js";import{Q as R,a as k}from"./QCarousel.05f6951f.js";import{C as U}from"./Campo.07619181.js";const H={components:{Campo:U},computed:{},data(){return{opened:!1,openedM:!1,openedC:!1,qtd:0,grupos:[],mostrarLogo:!1,select:"",selectOptions:[{label:"Cidade",value:"goog"},{label:"Produto",value:"goog"},{label:"Empresa",value:"fb"}]}},methods:{abrirClub(){this.opened=!0},userHasScrolled(y){this.mostrarLogo=y.position>=102},goTo(y){this.$router.push(y)}}},J={class:"u-container q-px-none"},O=t("img",{src:"/assets/b15.svg",alt:"",height:"36",class:"q-mx-sm q-mt-xs imgavatar"},null,-1),$={class:"row"},I={href:"",class:"botaoTopo q-btn q-btn-flat text-tertiary q-ma-xs text-caption"},G=t("div",{class:"q-mt-sm"},"Restaurantes",-1),K={href:"",class:"botaoTopo q-btn q-btn-flat text-tertiary q-ma-xs text-caption"},Z=t("div",{class:"q-mt-sm"},"Bares e Boates",-1),W={href:"",class:"botaoTopo q-btn q-btn-flat text-tertiary q-ma-xs text-caption"},X=t("div",{class:"q-mt-sm"},"Eventos",-1),Y={class:"filters row q-pa-xs q-ma-xs q-ml-none q-col-gutter-x-sm arredondado",style:{"min-height":"50px"}},ss={class:"col"},ts={class:"col"},ls={class:"col"},es={class:"filters q-px-xs q-ma-xs q-ml-none q-col-gutter-x-sm arredondado",style:{"min-height":"50px"}},os={class:"row"},as={class:"col"},is={class:"col-auto"},ns={class:"q-display-1 text-primary q-mt-xl q-mb-md q-mx-md"},ds={class:"row q-col-gutter-x-sm items-stretch q-pb-lg"},rs={class:"col-12 col-md-6 q-py-md"},cs=t("img",{src:"/assets/produto.jpg"},null,-1),us=t("div",{class:"text-h5 text-dark"},[t("strong",null,"Cafe Basilico")],-1),ms=t("p",{class:"text-tertiary text-body1",style:{"line-height":"1.5"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur arcu vitae ex rutrum varius. Suspendisse viverra faucibus placerat.",-1),_s=t("p",{class:"text-tertiary q-mb-none q-body",style:{"text-decoration":"line-through"}},"De R$55,00",-1),ps=t("p",{class:"q-display-1 q-mb-none text-dark"},[t("strong",null,"R$50,00")],-1),fs=t("p",{class:"text-tertiary q-body"},"+ 10% de cashback",-1),hs={class:"col-12 col-md-6 q-py-sm"},gs={class:"row q-col-gutter-x-sm"},bs=t("img",{src:"/assets/produto2.jpg"},null,-1),qs=t("p",{class:"text-h5 q-mb-none text-dark"},[t("strong",null,"R$50,00")],-1),xs={class:"row q-col-gutter-x-sm items-stretch q-pb-lg"},ys={class:"col-12 col-md-6 q-py-md"},vs=t("img",{src:"/assets/produto.jpg"},null,-1),ws=t("div",{class:"text-h5 text-dark"},[t("strong",null,"Cafe Basilico")],-1),ks=t("p",{class:"text-tertiary text-body1",style:{"line-height":"1.5"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur arcu vitae ex rutrum varius. Suspendisse viverra faucibus placerat.",-1),Cs=t("p",{class:"text-tertiary q-mb-none q-body",style:{"text-decoration":"line-through"}},"De R$55,00",-1),Ts=t("p",{class:"q-display-1 q-mb-none text-dark"},[t("strong",null,"R$50,00")],-1),Ls=t("p",{class:"text-tertiary q-body"},"+ 10% de cashback",-1),Ss={class:"col-12 col-md-6 q-py-sm"},Qs={class:"row q-col-gutter-x-sm"},Bs=t("img",{src:"/assets/produto2.jpg"},null,-1),Vs=t("p",{class:"text-h5 q-mb-none text-dark"},[t("strong",null,"R$50,00")],-1),js={class:"q-pa-sm hideondesktop"},Ps={class:"row"},Rs={class:"col-5"},Es=t("img",{src:"/assets/produto5.jpg",class:"arredondadoLT",style:{"margin-top":"0"}},null,-1),As={class:"col"},Ms=t("div",{class:"text-subtitle1 text-dark"},[t("strong",null,"Cafe Basilico")],-1),Fs=t("p",{class:"text-h5 q-mb-none text-dark"},[t("strong",null,"R$50,00")],-1),zs={class:"row"},Ds={class:"col-5"},Ns=t("img",{src:"/assets/produto5.jpg",class:"arredondadoLT",style:{"margin-top":"0"}},null,-1),Us={class:"col"},Hs=t("div",{class:"text-subtitle1 text-dark"},[t("strong",null,"Cafe Basilico")],-1),Js=t("p",{class:"text-h5 q-mb-none text-dark"},[t("strong",null,"R$50,00")],-1),Os={class:"row"},$s={class:"col-5"},Is=t("img",{src:"/assets/produto5.jpg",class:"arredondadoLT",style:{"margin-top":"0"}},null,-1),Gs={class:"col"},Ks=t("div",{class:"text-subtitle1 text-dark"},[t("strong",null,"Cafe Basilico")],-1),Zs=t("p",{class:"text-h5 q-mb-none text-dark"},[t("strong",null,"R$50,00")],-1),Ws={class:"row"},Xs={class:"col-5"},Ys=t("img",{src:"/assets/produto5.jpg",class:"arredondadoLT",style:{"margin-top":"0"}},null,-1),st={class:"col"},tt=t("div",{class:"text-subtitle1 text-dark"},[t("strong",null,"Cafe Basilico")],-1),lt=t("p",{class:"text-h5 q-mb-none text-dark"},[t("strong",null,"R$50,00")],-1),et={class:"q-display-1 text-dark q-mt-xl q-mb-md q-mx-md"},ot={class:"row q-col-gutter-x-sm q-pb-lg"},at=t("img",{src:"/assets/produto5.jpg"},null,-1),it={class:"text-h5 text-white"},nt=t("p",{class:"text-white q-mb-none"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur arcu vitae ex rutrum varius. ",-1),dt={class:"row q-col-gutter-x-sm q-pb-lg"},rt=t("img",{src:"/assets/produto5.jpg"},null,-1),ct={class:"text-h5 text-white"},ut=t("p",{class:"text-white q-mb-none"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur arcu vitae ex rutrum varius. ",-1),mt={class:"q-pt-md q-pb-lg q-px-sm hideondesktop"},_t={class:"row"},pt={class:"col-5"},ft=t("img",{src:"/assets/produto5.jpg",class:"arredondadoL",style:{"margin-top":"0"}},null,-1),ht={class:"col"},gt=t("div",{class:"text-subtitle1 text-white"},[t("strong",null,"Cafe Basilico")],-1),bt=t("p",{class:"text-white q-mb-none text-caption q-mb-none"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",-1),qt={class:"row"},xt={class:"col-5"},yt=t("img",{src:"/assets/produto5.jpg",class:"arredondadoL",style:{"margin-top":"0"}},null,-1),vt={class:"col"},wt=t("div",{class:"text-subtitle1 text-white"},[t("strong",null,"Cafe Basilico")],-1),kt=t("p",{class:"text-white q-mb-none text-caption q-mb-none"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",-1),Ct={class:"row"},Tt={class:"col-5"},Lt=t("img",{src:"/assets/produto5.jpg",class:"arredondadoL",style:{"margin-top":"0"}},null,-1),St={class:"col"},Qt=t("div",{class:"text-subtitle1 text-white"},[t("strong",null,"Cafe Basilico")],-1),Bt=t("p",{class:"text-white q-mb-none text-caption q-mb-none"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",-1),Vt={class:"text-white q-py-md hideonmobile"},jt={class:"u-container"},Pt={class:"row"},Rt=t("div",{class:"col-4"},[t("div",{class:"text-h5 q-mx-md"}," Explore por segmentos")],-1),Et=t("div",{class:"col-8"},[t("div",{class:"text-h5 q-mx-md"}," Explore por cidades")],-1),At={class:"col-12 col-md-4"},Mt={class:"col-12 col-md-4"},Ft={class:"col-12 col-md-4"},zt={class:"copy text-white text-caption q-py-sm"},Dt={class:"u-container"},Nt={class:"row q-py-md"},Ut=t("div",{class:"col-12 col-lg-8"},[t("p",{class:"q-mb-none q-mx-md q-pt-sm"},"CNPJ 07.660.198/0001-89 / Av. Presidente Vargas, 2001, CJ 45, Jardim Am\xE9rica, Ribeir\xE3o Preto / SP - CEP 14020-525")],-1),Ht={class:"col-12 col-lg-4 q-pr-sm",style:{"text-align":"right"}},Jt={class:"q-py-none"},Ot={key:0,class:"q-ml-xs",style:{"margin-bottom":"-7px"},src:"/assets/b15-white.svg",alt:"",height:"25"},$t=t("div",{class:"text-subtitle1 text-white"},"Login",-1),It={class:"layout-padding q-pa-md"},Gt=t("div",{class:"text-subtitle1 text-white"},"Minha empresa",-1),Kt={class:"layout-padding q-pa-md"},Zt=t("div",{class:"text-subtitle1 text-white"},"Cadastre-se",-1),Wt={class:"layout-padding q-pa-md"};function Xt(y,e,Yt,sl,d,n){const B=A("campo");return _(),M(w,{class:"Club",id:"Club"},{default:l(()=>[s(v,{reveal:"",class:"topbar"},{default:l(()=>[t("div",J,[s(r,{color:"none",class:"q-px-none"},{default:l(()=>[s(u,{class:"q-px-none hideonmobile"},{default:l(()=>[s(F,{name:"fade"},{default:l(()=>[d.mostrarLogo?(_(),p("img",{key:0,src:"/assets/b15-white.svg",alt:"",height:"28",onClick:e[0]||(e[0]=o=>n.goTo("/club"))})):V("",!0)]),_:1})]),_:1}),s(i,{flat:"",color:"white",label:"Minha empresa",class:"q-mx-sm",onClick:e[1]||(e[1]=o=>d.openedM=!0)}),s(i,{color:"white",flat:"",label:"Cadastre-se",class:"q-mx-sm hideonmobile",onClick:e[2]||(e[2]=o=>d.openedC=!0)}),s(i,{color:"white","text-color":"primary",label:"Entrar",class:"q-mx-sm",onClick:e[3]||(e[3]=o=>y.openURL("https://app.b15.com.br"))})]),_:1})])]),_:1}),s(z,null,{default:l(()=>[s(D,{class:"u-container"},{default:l(()=>[s(N,{onScroll:n.userHasScrolled},null,8,["onScroll"]),s(r,{color:"transparent",class:"q-px-none q-my-md cliente"},{default:l(()=>[s(u,null,{default:l(()=>[O]),_:1}),t("div",$,[t("a",I,[s(T,{name:"mdi-food",size:"28px"}),G]),t("a",K,[s(T,{name:"mdi-beer",size:"28px"}),Z]),t("a",W,[s(T,{name:"mdi-microphone-variant",size:"28px"}),X])])]),_:1}),s(u,{class:"q-pa-none bg-white arredondado hideonmobile",style:{"margin-top":"-4px",border:"1px solid #bdbdbd"}},{default:l(()=>[t("div",Y,[s(i,{color:"white","text-color":"tertiary",icon:"search",class:"q-ml-sm arredondadobt no-shadow q-title",style:{"pointer-events":"none"}}),t("div",ss,[s(m,{color:"dark",label:"Produto ou Servi\xE7o"})]),t("div",ts,[s(m,{color:"dark",label:"Lugar"})]),t("div",ls,[s(m,{color:"dark",label:"Cidade"})]),s(i,{color:"primary",label:"BUSCAR",class:"q-ml-sm q-px-xl arredondadobt"})])]),_:1}),s(u,{class:"q-pa-none bg-white arredondado hideondesktop",style:{"margin-top":"-4px",border:"1px solid #bdbdbd"}},{default:l(()=>[t("div",es,[t("div",os,[t("div",as,[s(m,{color:"dark",label:"Produto / Servi\xE7o / Lugar / Cidade"})]),t("div",is,[s(i,{color:"primary",icon:"search",round:"",style:{"margin-top":"6px"}})])])])]),_:1}),t("div",ns,[s(i,{color:"primary",dense:"",flat:"",icon:"mdi-shopping",round:"",size:"xl",disabled:""}),g(" Dicas para voc\xEA ")]),s(R,{class:"hideonmobile",color:"white",arrows:""},{default:l(()=>[s(k,{class:"q-py-none"},{default:l(()=>[t("div",ds,[t("div",rs,[s(c,{class:"bg-white shadow-10 full-height row"},{default:l(()=>[s(a,{style:{height:"360px"},class:"full-width self-start"},{default:l(()=>[cs]),_:1}),s(a,{class:"full-width self-start"},{default:l(()=>[us,ms]),_:1}),s(a,{class:"full-width self-start text-right"},{default:l(()=>[_s,ps,fs]),_:1}),s(f,{class:"self-end full-width q-py-none"},{default:l(()=>[s(h,{class:"full-width q-py-none"}),s(r,{color:"none",class:"q-px-none"},{default:l(()=>[s(u,{class:"q-px-none text-left"},{default:l(()=>[s(j,{class:"col-3 q-px-sm q-pt-xs",style:{"margin-top":"-18px","max-width":"60%"}},{default:l(()=>[s(B,{min:"0",tipo:"quantidade",borderless:"",modelValue:d.qtd,"onUpdate:modelValue":e[4]||(e[4]=o=>d.qtd=o)},null,8,["modelValue"]),s(P,null,{default:l(()=>[g("Quantidade")]),_:1})]),_:1})]),_:1}),s(i,{flat:"",color:"primary",label:"Saiba mais",style:{float:"right"},onClick:e[5]||(e[5]=o=>n.goTo("/clubprodutosingle"))})]),_:1})]),_:1})]),_:1})]),t("div",hs,[t("div",gs,[(_(),p(b,null,q(4,o=>t("div",{class:"col-12 col-md-6 q-my-sm",key:o},[s(c,{class:"bg-white shadow-10 full-height row"},{default:l(()=>[s(a,{class:"full-width self-start"},{default:l(()=>[bs]),_:1}),s(a,{class:"q-mb-none full-width self-start q-pb-none text-dark"},{default:l(()=>[g(" Cafe Basilico "+x(o),1)]),_:2},1024),s(a,{class:"full-width self-start text-right"},{default:l(()=>[qs]),_:1}),s(f,{class:"self-end full-width q-py-none"},{default:l(()=>[s(h,{class:"full-width"}),s(r,{color:"none",class:"q-px-none"},{default:l(()=>[s(u,{class:"q-px-none text-left"},{default:l(()=>[s(i,{flat:"",color:"negative",label:"Adicionar"})]),_:1}),s(i,{flat:"",color:"primary",label:"Saiba mais",style:{float:"right"},onClick:e[6]||(e[6]=C=>n.goTo("/clubprodutosingle"))})]),_:1})]),_:1})]),_:2},1024)])),64))])])])]),_:1}),s(k,{class:"q-py-none"},{default:l(()=>[t("div",xs,[t("div",ys,[s(c,{class:"bg-white shadow-10 full-height row"},{default:l(()=>[s(a,{style:{height:"360px"},class:"full-width self-start"},{default:l(()=>[vs]),_:1}),s(a,{class:"full-width self-start"},{default:l(()=>[ws,ks]),_:1}),s(a,{class:"full-width self-start text-right"},{default:l(()=>[Cs,Ts,Ls]),_:1}),s(f,{class:"self-end full-width q-py-none"},{default:l(()=>[s(h,{class:"full-width q-py-none"}),s(r,{color:"none",class:"q-px-none"},{default:l(()=>[s(u,{class:"q-px-none text-left"},{default:l(()=>[s(j,{class:"col-3 q-px-sm q-pt-xs",style:{"margin-top":"-18px","max-width":"60%"}},{default:l(()=>[s(B,{min:"0",tipo:"quantidade",borderless:"",modelValue:d.qtd,"onUpdate:modelValue":e[7]||(e[7]=o=>d.qtd=o)},null,8,["modelValue"]),s(P,null,{default:l(()=>[g("Quantidade")]),_:1})]),_:1})]),_:1}),s(i,{flat:"",color:"primary",label:"Saiba mais",style:{float:"right"},onClick:e[8]||(e[8]=o=>n.goTo("/clubprodutosingle"))})]),_:1})]),_:1})]),_:1})]),t("div",Ss,[t("div",Qs,[(_(),p(b,null,q(4,o=>t("div",{class:"col-12 col-md-6 q-my-sm",key:o},[s(c,{class:"bg-white shadow-10 full-height row"},{default:l(()=>[s(a,{class:"full-width self-start"},{default:l(()=>[Bs]),_:1}),s(a,{class:"q-mb-none full-width self-start q-pb-none text-dark"},{default:l(()=>[g(" Cafe Basilico "+x(o),1)]),_:2},1024),s(a,{class:"full-width self-start text-right"},{default:l(()=>[Vs]),_:1}),s(f,{class:"self-end full-width q-py-none"},{default:l(()=>[s(h,{class:"full-width"}),s(r,{color:"none",class:"q-px-none"},{default:l(()=>[s(u,{class:"q-px-none text-left"},{default:l(()=>[s(i,{flat:"",color:"negative",label:"Adicionar"})]),_:1}),s(i,{flat:"",color:"primary",label:"Saiba mais",style:{float:"right"},onClick:e[9]||(e[9]=C=>n.goTo("/clubprodutosingle"))})]),_:1})]),_:1})]),_:2},1024)])),64))])])])]),_:1})]),_:1}),t("div",js,[s(c,{class:"q-my-sm shadow-5 bg-white",inline:"",onClick:e[11]||(e[11]=o=>n.goTo("/clubsingle"))},{default:l(()=>[t("div",Ps,[t("div",Rs,[s(a,{style:{height:"100% !important"}},{default:l(()=>[Es]),_:1})]),t("div",As,[s(a,{class:"q-mb-none q-py-sm"},{default:l(()=>[Ms]),_:1}),s(a,{class:"full-width self-end text-right"},{default:l(()=>[Fs]),_:1})])]),s(f,{class:"self-end full-width q-py-none"},{default:l(()=>[s(h,{class:"full-width"}),s(r,{color:"none",class:"q-px-none"},{default:l(()=>[s(u,{class:"q-px-none text-left"},{default:l(()=>[s(i,{flat:"",color:"negative",label:"Adicionar"})]),_:1}),s(i,{flat:"",color:"primary",label:"Saiba mais",style:{float:"right"},onClick:e[10]||(e[10]=o=>n.goTo("/clubprodutosingle"))})]),_:1})]),_:1})]),_:1}),s(c,{class:"q-my-sm shadow-5 bg-white",inline:"",onClick:e[13]||(e[13]=o=>n.goTo("/clubsingle"))},{default:l(()=>[t("div",zs,[t("div",Ds,[s(a,{style:{height:"100% !important"}},{default:l(()=>[Ns]),_:1})]),t("div",Us,[s(a,{class:"q-mb-none q-py-sm"},{default:l(()=>[Hs]),_:1}),s(a,{class:"full-width self-end text-right"},{default:l(()=>[Js]),_:1})])]),s(f,{class:"self-end full-width q-py-none"},{default:l(()=>[s(h,{class:"full-width"}),s(r,{color:"none",class:"q-px-none"},{default:l(()=>[s(u,{class:"q-px-none text-left"},{default:l(()=>[s(i,{flat:"",color:"negative",label:"Adicionar"})]),_:1}),s(i,{flat:"",color:"primary",label:"Saiba mais",style:{float:"right"},onClick:e[12]||(e[12]=o=>n.goTo("/clubprodutosingle"))})]),_:1})]),_:1})]),_:1}),s(c,{class:"q-my-sm shadow-5 bg-white",inline:"",onClick:e[15]||(e[15]=o=>n.goTo("/clubsingle"))},{default:l(()=>[t("div",Os,[t("div",$s,[s(a,{style:{height:"100% !important"}},{default:l(()=>[Is]),_:1})]),t("div",Gs,[s(a,{class:"q-mb-none q-py-sm"},{default:l(()=>[Ks]),_:1}),s(a,{class:"full-width self-end text-right"},{default:l(()=>[Zs]),_:1})])]),s(f,{class:"self-end full-width q-py-none"},{default:l(()=>[s(h,{class:"full-width"}),s(r,{color:"none",class:"q-px-none"},{default:l(()=>[s(u,{class:"q-px-none text-left"},{default:l(()=>[s(i,{flat:"",color:"negative",label:"Adicionar"})]),_:1}),s(i,{flat:"",color:"primary",label:"Saiba mais",style:{float:"right"},onClick:e[14]||(e[14]=o=>n.goTo("/clubprodutosingle"))})]),_:1})]),_:1})]),_:1}),s(c,{class:"q-my-sm shadow-5 bg-white",inline:"",onClick:e[17]||(e[17]=o=>n.goTo("/clubsingle"))},{default:l(()=>[t("div",Ws,[t("div",Xs,[s(a,{style:{height:"100% !important"}},{default:l(()=>[Ys]),_:1})]),t("div",st,[s(a,{class:"q-mb-none q-py-sm"},{default:l(()=>[tt]),_:1}),s(a,{class:"full-width self-end text-right"},{default:l(()=>[lt]),_:1})])]),s(f,{class:"self-end full-width q-py-none"},{default:l(()=>[s(h,{class:"full-width"}),s(r,{color:"none",class:"q-px-none"},{default:l(()=>[s(u,{class:"q-px-none text-left"},{default:l(()=>[s(i,{flat:"",color:"negative",label:"Adicionar"})]),_:1}),s(i,{flat:"",color:"primary",label:"Saiba mais",style:{float:"right"},onClick:e[16]||(e[16]=o=>n.goTo("/clubprodutosingle"))})]),_:1})]),_:1})]),_:1}),s(i,{color:"primary",size:"md",label:"Ver mais",class:"q-my-md q-mx-sm full-width arredondadoMinibt"})]),t("div",et,[s(i,{color:"dark",dense:"",flat:"",icon:"mdi-map-marker-circle",round:"",size:"xl",disabled:""}),g(" Lugares pra conhecer ")]),s(R,{color:"white",arrows:"",class:"q-mb-xl hideonmobile",style:{"margin-top":"-6px"}},{default:l(()=>[s(k,{class:"q-py-none"},{default:l(()=>[t("div",ot,[(_(),p(b,null,q(4,o=>t("div",{class:"col-12 col-md-3 q-py-sm",key:o},[s(c,{class:"q-ma-sm shadow-10 bg-dark",inline:"",onClick:e[18]||(e[18]=C=>n.goTo("/clubsingle"))},{default:l(()=>[s(a,null,{default:l(()=>[at]),_:1}),s(a,{class:"q-mb-none q-py-sm"},{default:l(()=>[t("div",it,[t("strong",null,"Cafe Basilico "+x(o),1)])]),_:2},1024),s(a,null,{default:l(()=>[nt]),_:1})]),_:2},1024)])),64))])]),_:1}),s(k,{class:"q-py-none"},{default:l(()=>[t("div",dt,[(_(),p(b,null,q(4,o=>t("div",{class:"col-12 col-md-3 q-py-sm",key:o},[s(c,{class:"q-ma-sm shadow-10 bg-dark",inline:"",onClick:e[19]||(e[19]=C=>n.goTo("/clubsingle"))},{default:l(()=>[s(a,null,{default:l(()=>[rt]),_:1}),s(a,{class:"q-mb-none q-py-sm"},{default:l(()=>[t("div",ct,[t("strong",null,"Cafe Basilico "+x(o),1)])]),_:2},1024),s(a,null,{default:l(()=>[ut]),_:1})]),_:2},1024)])),64))])]),_:1})]),_:1}),t("div",mt,[s(c,{class:"q-my-sm shadow-5 bg-dark",inline:"",onClick:e[20]||(e[20]=o=>n.goTo("/clubsingle"))},{default:l(()=>[t("div",_t,[t("div",pt,[s(a,{style:{height:"100% !important"}},{default:l(()=>[ft]),_:1})]),t("div",ht,[s(a,{class:"q-mb-none q-py-sm"},{default:l(()=>[gt]),_:1}),s(a,{class:"q-pb-none"},{default:l(()=>[bt]),_:1})])])]),_:1}),s(c,{class:"q-my-sm shadow-5 bg-dark",inline:"",onClick:e[21]||(e[21]=o=>n.goTo("/clubsingle"))},{default:l(()=>[t("div",qt,[t("div",xt,[s(a,{style:{height:"100% !important"}},{default:l(()=>[yt]),_:1})]),t("div",vt,[s(a,{class:"q-mb-none q-py-sm"},{default:l(()=>[wt]),_:1}),s(a,{class:"q-pb-none"},{default:l(()=>[kt]),_:1})])])]),_:1}),s(c,{class:"q-my-sm shadow-5 bg-dark",inline:"",onClick:e[22]||(e[22]=o=>n.goTo("/clubsingle"))},{default:l(()=>[t("div",Ct,[t("div",Tt,[s(a,{style:{height:"100% !important"}},{default:l(()=>[Lt]),_:1})]),t("div",St,[s(a,{class:"q-mb-none q-py-sm"},{default:l(()=>[Qt]),_:1}),s(a,{class:"q-pb-none"},{default:l(()=>[Bt]),_:1})])])]),_:1}),s(i,{color:"primary",size:"md",label:"Ver mais",class:"q-my-md q-mx-sm full-width arredondadoMinibt"})])]),_:1})]),_:1}),t("footer",Vt,[t("div",jt,[t("div",Pt,[Rt,Et,t("div",At,[t("ul",null,[(_(),p(b,null,q(4,o=>t("li",{class:"text-body1 q-mb-sm",key:o},"Segmento "+x(o),1)),64))])]),t("div",Mt,[t("ul",null,[(_(),p(b,null,q(4,o=>t("li",{class:"text-body1 q-mb-sm",key:o},"Cidade "+x(o),1)),64))])]),t("div",Ft,[t("ul",null,[(_(),p(b,null,q(4,o=>t("li",{class:"text-body1 q-mb-sm",key:o},"Cidade "+x(o+4),1)),64))])])])])]),t("div",zt,[t("div",Dt,[t("div",Nt,[Ut,t("div",Ht,[t("p",Jt,[g("Ecosistema "),d.mostrarLogo?(_(),p("img",Ot)):V("",!0)])])])])]),s(L,{modelValue:d.opened,"onUpdate:modelValue":e[23]||(e[23]=o=>d.opened=o)},{default:l(()=>[s(w,{container:""},{default:l(()=>[s(v,null,{default:l(()=>[s(r,{color:"primary"},{default:l(()=>[S(s(i,{dense:"",flat:"",color:"white",icon:"arrow_back",round:""},null,512),[[Q]]),$t]),_:1})]),_:1}),t("div",It,[s(m,{color:"tertiary",label:"Login"}),s(m,{color:"tertiary",label:"Senha"}),s(i,{color:"primary",label:"Enviar",class:"q-mt-sm"})])]),_:1})]),_:1},8,["modelValue"]),s(L,{modelValue:d.openedM,"onUpdate:modelValue":e[24]||(e[24]=o=>d.openedM=o)},{default:l(()=>[s(w,{container:""},{default:l(()=>[s(v,null,{default:l(()=>[s(r,{color:"primary"},{default:l(()=>[S(s(i,{dense:"",flat:"",color:"white",icon:"arrow_back",round:""},null,512),[[Q]]),Gt]),_:1})]),_:1}),t("div",Kt,[s(m,{color:"tertiary",label:"Login"}),s(m,{color:"tertiary",label:"Senha"}),s(i,{color:"primary",label:"Enviar",class:"q-mt-sm"})])]),_:1})]),_:1},8,["modelValue"]),s(L,{modelValue:d.openedC,"onUpdate:modelValue":e[25]||(e[25]=o=>d.openedC=o)},{default:l(()=>[s(w,{container:""},{default:l(()=>[s(v,null,{default:l(()=>[s(r,{color:"primary"},{default:l(()=>[S(s(i,{dense:"",flat:"",color:"white",icon:"arrow_back",round:""},null,512),[[Q]]),Zt]),_:1})]),_:1}),t("div",Wt,[s(m,{color:"tertiary",label:"Nome"}),s(m,{color:"tertiary",label:"E-mail"}),s(m,{color:"tertiary",label:"Telefone"}),s(m,{color:"tertiary",label:"CPF/CNPJP"}),s(i,{color:"primary",label:"Enviar",class:"q-mt-sm"})])]),_:1})]),_:1},8,["modelValue"])]),_:1})}var ol=E(H,[["render",Xt]]);export{ol as default};