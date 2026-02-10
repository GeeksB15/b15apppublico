import{_ as xt,be as M,r as A,o as u,d as w,w as m,f as e,M as Rt,G as ft,h as ct,H as bt,Q as v,N as ut,i as ht,v as Dt,j as _t,I as wt,J as yt,p as L,P as at,F as Tt,x as Pt,S as Nt,T as B,U as H,k as p,t as _,D as mt,C as t,e as I,cS as Ot,m as R,l as ot,B as q,W as Xt,cL as Zt,aP as $t}from"./index.397dce9c.js";import{V as tn}from"./Visualizador.5303c456.js";import{M as nn}from"./MonacoEditor.4648ec14.js";var j=typeof window!="undefined"?window:null,vt=j===null,W=vt?void 0:j.document,E="addEventListener",C="removeEventListener",st="getBoundingClientRect",K="_a",O="_b",D="_c",it="horizontal",V=function(){return!1},rn=vt?"calc":["","-webkit-","-moz-","-o-"].filter(function(r){var n=W.createElement("div");return n.style.cssText="width:"+r+"calc(9px)",!!n.style.length}).shift()+"calc",qt=function(r){return typeof r=="string"||r instanceof String},Vt=function(r){if(qt(r)){var n=W.querySelector(r);if(!n)throw new Error("Selector "+r+" did not match a DOM element");return n}return r},k=function(r,n,g){var f=r[n];return f!==void 0?f:g},et=function(r,n,g,f){if(n){if(f==="end")return 0;if(f==="center")return r/2}else if(g){if(f==="start")return 0;if(f==="center")return r/2}return r},on=function(r,n){var g=W.createElement("div");return g.className="gutter gutter-"+n,g},en=function(r,n,g){var f={};return qt(n)?f[r]=n:f[r]=rn+"("+n+"% - "+g+"px)",f},an=function(r,n){var g;return g={},g[r]=n+"px",g},mn=function(r,n){if(n===void 0&&(n={}),vt)return{};var g=r,f,o,d,z,x,c;Array.from&&(g=Array.from(g));var F=Vt(g[0]),T=F.parentNode,X=getComputedStyle?getComputedStyle(T):null,Z=X?X.flexDirection:null,G=k(n,"sizes")||g.map(function(){return 100/g.length}),Q=k(n,"minSize",100),b=Array.isArray(Q)?Q:g.map(function(){return Q}),lt=k(n,"maxSize",1/0),Lt=Array.isArray(lt)?lt:g.map(function(){return lt}),Ft=k(n,"expandToMin",!1),J=k(n,"gutterSize",10),$=k(n,"gutterAlign","center"),pt=k(n,"snapOffset",30),Ut=Array.isArray(pt)?pt:g.map(function(){return pt}),dt=k(n,"dragInterval",1),U=k(n,"direction",it),gt=k(n,"cursor",U===it?"col-resize":"row-resize"),Mt=k(n,"gutter",on),kt=k(n,"elementStyle",en),Bt=k(n,"gutterStyle",an);U===it?(f="width",o="clientX",d="left",z="right",x="clientWidth"):U==="vertical"&&(f="height",o="clientY",d="top",z="bottom",x="clientHeight");function Y(l,i,a,s){var y=kt(f,i,a,s);Object.keys(y).forEach(function(h){l.style[h]=y[h]})}function Ht(l,i,a){var s=Bt(f,i,a);Object.keys(s).forEach(function(y){l.style[y]=s[y]})}function tt(){return c.map(function(l){return l.size})}function zt(l){return"touches"in l?l.touches[0][o]:l[o]}function St(l){var i=c[this.a],a=c[this.b],s=i.size+a.size;i.size=l/this.size*s,a.size=s-l/this.size*s,Y(i.element,i.size,this[O],i.i),Y(a.element,a.size,this[D],a.i)}function Gt(l){var i,a=c[this.a],s=c[this.b];!this.dragging||(i=zt(l)-this.start+(this[O]-this.dragOffset),dt>1&&(i=Math.round(i/dt)*dt),i<=a.minSize+a.snapOffset+this[O]?i=a.minSize+this[O]:i>=this.size-(s.minSize+s.snapOffset+this[D])&&(i=this.size-(s.minSize+this[D])),i>=a.maxSize-a.snapOffset+this[O]?i=a.maxSize+this[O]:i<=this.size-(s.maxSize-s.snapOffset+this[D])&&(i=this.size-(s.maxSize+this[D])),St.call(this,i),k(n,"onDrag",V)(tt()))}function jt(){var l=c[this.a].element,i=c[this.b].element,a=l[st](),s=i[st]();this.size=a[f]+s[f]+this[O]+this[D],this.start=a[d],this.end=a[z]}function Qt(l){if(!getComputedStyle)return null;var i=getComputedStyle(l);if(!i)return null;var a=l[x];return a===0?null:(U===it?a-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight):a-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),a)}function Et(l){var i=Qt(T);if(i===null||b.reduce(function(h,S){return h+S},0)>i)return l;var a=0,s=[],y=l.map(function(h,S){var N=i*h/100,nt=et(J,S===0,S===l.length-1,$),rt=b[S]+nt;return N<rt?(a+=rt-N,s.push(0),rt):(s.push(N-rt),N)});return a===0?l:y.map(function(h,S){var N=h;if(a>0&&s[S]-a>0){var nt=Math.min(a,s[S]-a);a-=nt,N=h-nt}return N/i*100})}function Jt(){var l=this,i=c[l.a].element,a=c[l.b].element;l.dragging&&k(n,"onDragEnd",V)(tt()),l.dragging=!1,j[C]("mouseup",l.stop),j[C]("touchend",l.stop),j[C]("touchcancel",l.stop),j[C]("mousemove",l.move),j[C]("touchmove",l.move),l.stop=null,l.move=null,i[C]("selectstart",V),i[C]("dragstart",V),a[C]("selectstart",V),a[C]("dragstart",V),i.style.userSelect="",i.style.webkitUserSelect="",i.style.MozUserSelect="",i.style.pointerEvents="",a.style.userSelect="",a.style.webkitUserSelect="",a.style.MozUserSelect="",a.style.pointerEvents="",l.gutter.style.cursor="",l.parent.style.cursor="",W.body.style.cursor=""}function Yt(l){if(!("button"in l&&l.button!==0)){var i=this,a=c[i.a].element,s=c[i.b].element;i.dragging||k(n,"onDragStart",V)(tt()),l.preventDefault(),i.dragging=!0,i.move=Gt.bind(i),i.stop=Jt.bind(i),j[E]("mouseup",i.stop),j[E]("touchend",i.stop),j[E]("touchcancel",i.stop),j[E]("mousemove",i.move),j[E]("touchmove",i.move),a[E]("selectstart",V),a[E]("dragstart",V),s[E]("selectstart",V),s[E]("dragstart",V),a.style.userSelect="none",a.style.webkitUserSelect="none",a.style.MozUserSelect="none",a.style.pointerEvents="none",s.style.userSelect="none",s.style.webkitUserSelect="none",s.style.MozUserSelect="none",s.style.pointerEvents="none",i.gutter.style.cursor=gt,i.parent.style.cursor=gt,W.body.style.cursor=gt,jt.call(i),i.dragOffset=zt(l)-i.end}}G=Et(G);var P=[];c=g.map(function(l,i){var a={element:Vt(l),size:G[i],minSize:b[i],maxSize:Lt[i],snapOffset:Ut[i],i},s;if(i>0&&(s={a:i-1,b:i,dragging:!1,direction:U,parent:T},s[O]=et(J,i-1===0,!1,$),s[D]=et(J,!1,i===g.length-1,$),Z==="row-reverse"||Z==="column-reverse")){var y=s.a;s.a=s.b,s.b=y}if(i>0){var h=Mt(i,U,a.element);Ht(h,J,i),s[K]=Yt.bind(s),h[E]("mousedown",s[K]),h[E]("touchstart",s[K]),T.insertBefore(h,a.element),s.gutter=h}return Y(a.element,a.size,et(J,i===0,i===g.length-1,$),i),i>0&&P.push(s),a});function Ct(l){var i=l.i===P.length,a=i?P[l.i-1]:P[l.i];jt.call(a);var s=i?a.size-l.minSize-a[D]:l.minSize+a[O];St.call(a,s)}c.forEach(function(l){var i=l.element[st]()[f];i<l.minSize&&(Ft?Ct(l):l.minSize=i)});function Kt(l){var i=Et(l);i.forEach(function(a,s){if(s>0){var y=P[s-1],h=c[y.a],S=c[y.b];h.size=i[s-1],S.size=a,Y(h.element,h.size,y[O],h.i),Y(S.element,S.size,y[D],S.i)}})}function Wt(l,i){P.forEach(function(a){if(i!==!0?a.parent.removeChild(a.gutter):(a.gutter[C]("mousedown",a[K]),a.gutter[C]("touchstart",a[K])),l!==!0){var s=kt(f,a.a.size,a[O]);Object.keys(s).forEach(function(y){c[a.a].element.style[y]="",c[a.b].element.style[y]=""})}})}return{setSizes:Kt,getSizes:tt,collapse:function(i){Ct(c[i])},destroy:Wt,parent:T,pairs:P}};const At="Buscar relat\xF3rio",ln={data(){return{carregando:!0,listaFiltrada:[],placeholder:At,termo:"",visivel:!1}},methods:{filtrar(){let r;if(this.termo){const n=$utils.removerAcentos(this.termo.toUpperCase()).split(" ").filter(g=>g!=="");r=this.listaCompleta.filter(g=>{const f=$utils.removerAcentos(" "+$utils.stringOrEmpty(g.codigoObjeto).toUpperCase()+"  "+$utils.stringOrEmpty(g.nomeObjeto).toUpperCase()+" "+$utils.stringOrEmpty(g.descricao).toUpperCase());let o=!0;for(const d of n)isNaN(Number(d))?o=o&&f.includes(d):o=o&&f.includes(" "+d+" ");return o})}else r=this.listaCompleta;this.listaFiltrada=r.slice(0,100),this.carregando=!1},limpar(){this.listaFiltrada=[],this.placeholder=At,this.termo=""},onHide(){this.resolve({}),this.limpar()},onShow(){this.$refs.search.focus()},item_click(r={}){this.resolve(r),this.visivel=!1},async show(r){return this.carregando=!0,this.visivel=!0,this.listaCompleta=(await M.objeto.leOnline({colunas:"id codigoObjeto descricao documentacao nomeObjeto tipo",filtros:{tipo:"vue"}})).sort((n,g)=>$utils.stringOrEmpty(n.nomeObjeto).localeCompare($utils.stringOrEmpty(g.nomeObjeto))),this.filtrar(),new Promise((n,g)=>{this.resolve=n})}},mounted(){$g.promptEditorRelatorio={show:this.show}}},pn={key:0,class:"bg-light q-pa-lg q-mt-lg round-borders text-black text-center"},dn={key:1,class:"bg-light q-pa-lg q-mt-lg round-borders text-black text-center"};function gn(r,n,g,f,o,d){const z=A("badge");return u(),w(mt,{modelValue:o.visivel,"onUpdate:modelValue":n[1]||(n[1]=x=>o.visivel=x),maximized:"",onHide:n[2]||(n[2]=x=>d.onHide()),onShow:n[3]||(n[3]=x=>d.onShow())},{default:m(()=>[e(Rt,{class:"bg-light",container:""},{default:m(()=>[e(ft,null,{default:m(()=>[e(ct,null,{default:m(()=>[bt(e(v,{icon:"arrow_back",flat:"",round:"",dense:""},null,512),[[ut]]),e(ht,null,{default:m(()=>[e(Dt,{modelValue:o.termo,"onUpdate:modelValue":[n[0]||(n[0]=x=>o.termo=x),d.filtrar],placeholder:o.placeholder,clearable:"",filled:"",standout:"",dark:"",dense:"","clear-icon":"close",debounce:"700",ref:"search",style:{"max-width":"600px",background:"rgba(255,255,255,.13)"},class:"q-mx-auto"},{prepend:m(()=>[e(_t,{name:"mdi-filter",color:"white",class:"showScreenIcon"})]),_:1},8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1})]),_:1})]),_:1}),e(wt,null,{default:m(()=>[e(yt,{class:"u-container q-pa-md bg-white"},{default:m(()=>[o.carregando?(u(),L("div",pn," Carregando... ")):o.listaFiltrada.length?(u(),w(at,{key:2,link:"",separator:""},{default:m(()=>[(u(!0),L(Tt,null,Pt(o.listaFiltrada,x=>(u(),w(Nt,{key:x.id,clickable:"",onClick:c=>d.item_click(x),class:"row"},{default:m(()=>[e(B,{class:"col"},{default:m(()=>[e(H,null,{default:m(()=>[p(_(x.nomeObjeto),1)]),_:2},1024),e(H,{caption:""},{default:m(()=>[p(_(x.descricao),1)]),_:2},1024)]),_:2},1024),e(B,{class:"col-auto"},{default:m(()=>[e(z,{cor:"primary",escuro:""},{default:m(()=>[p("#"+_(x.codigoObjeto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})):(u(),L("div",dn," Nenhum resultado encontrado "))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}var sn=xt(ln,[["render",gn]]);const It="Buscar usuario, obs, publicado...",xn={computed:{usuario(){try{return JSON.parse(localStorage.usuario)}catch{return{}}}},data(){return{carregando:!0,listaFiltrada:[],placeholder:It,termo:"",visivel:!1}},props:{idObjeto:{type:String}},methods:{filtrar(){let r;if(this.termo){const n=$utils.removerAcentos(this.termo.toUpperCase()).split(" ").filter(g=>g!=="");r=this.listaCompleta.filter(g=>{const f=$utils.removerAcentos(" "+$utils.stringOrEmpty(g.obs).toUpperCase()+"  "+(g.publicado?"Publicado":"Salvo").toUpperCase()+"  "+$utils.stringOrEmpty(g.usuario).toUpperCase());let o=!0;for(const d of n)isNaN(Number(d))?o=o&&f.includes(d):o=o&&f.includes(" "+d+" ");return o})}else r=this.listaCompleta;this.listaFiltrada=r.slice(0,100),this.carregando=!1},limpar(){this.listaFiltrada=[],this.placeholder=It,this.termo=""},onHide(){this.resolve({acao:"fechar",dados:{}}),this.limpar()},onShow(){this.$refs.search.focus()},item_click(r={}){this.resolve({acao:"selecionar",dados:r}),this.visivel=!1},comparar_click(r={}){this.resolve({acao:"comparar",dados:r}),this.visivel=!1},async show(r){return this.carregando=!0,this.visivel=!0,this.listaCompleta=(await M.objetoVersao.leOnline({colunas:"id idObjeto idUsuario dataHora obs publicado usuario",filtros:{idObjeto:this.idObjeto}})).sort((n,g)=>-$utils.stringOrEmpty(n.dataHora).localeCompare($utils.stringOrEmpty(g.dataHora))),this.filtrar(),new Promise((n,g)=>{this.resolve=n})}},mounted(){$g.promptEditorRelatorioVersao={show:this.show}}},fn={key:0,class:"bg-light q-pa-lg q-mt-lg round-borders text-black text-center"},cn={key:1,class:"bg-light q-pa-lg q-mt-lg round-borders text-black text-center"},bn={class:"text-weight-medium"};function un(r,n,g,f,o,d){const z=A("badge");return u(),w(mt,{modelValue:o.visivel,"onUpdate:modelValue":n[1]||(n[1]=x=>o.visivel=x),maximized:"",onHide:n[2]||(n[2]=x=>d.onHide()),onShow:n[3]||(n[3]=x=>d.onShow())},{default:m(()=>[e(Rt,{container:"",class:"bg-light"},{default:m(()=>[e(ft,null,{default:m(()=>[e(ct,null,{default:m(()=>[bt(e(v,{icon:"arrow_back",flat:"",round:"",dense:""},null,512),[[ut]]),e(ht,null,{default:m(()=>[e(Dt,{modelValue:o.termo,"onUpdate:modelValue":[n[0]||(n[0]=x=>o.termo=x),d.filtrar],placeholder:o.placeholder,clearable:"",filled:"",standout:"",dark:"",dense:"","clear-icon":"close",debounce:"1500",ref:"search",style:{"max-width":"600px",background:"rgba(255,255,255,.13)"},class:"q-mx-auto"},{prepend:m(()=>[e(_t,{name:"mdi-filter",color:"white",class:"showScreenIcon"})]),_:1},8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1})]),_:1})]),_:1}),e(wt,null,{default:m(()=>[e(yt,{class:"u-container q-pa-md bg-white"},{default:m(()=>[o.carregando?(u(),L("div",fn," Carregando... ")):o.listaFiltrada.length?(u(),w(at,{key:2,link:"",separator:""},{default:m(()=>[(u(!0),L(Tt,null,Pt(o.listaFiltrada,x=>(u(),w(Nt,{key:x.id,clickable:"",onClick:c=>d.item_click(x),class:"row"},{default:m(()=>[e(B,{class:"col"},{default:m(()=>[e(H,null,{default:m(()=>[p(_(x.obs||"Sem observa\xE7\xF5es..."),1)]),_:2},1024),x.dataHora?(u(),w(H,{key:0,caption:""},{default:m(()=>[p(_(x.publicado?"Publicado":"Salvo")+" em: ",1),t("span",bn,_(r.$filters.dataHora(x.dataHora)),1)]),_:2},1024)):I("",!0)]),_:2},1024),e(B,{class:"maxw240 q-pl-sm no-margin"},{default:m(()=>[e(H,null,{default:m(()=>[x.usuario?(u(),w(z,{key:0,rotulo:x.usuario,denso:"",escuro:"",cor:x.idUsuario===d.usuario.id?"primary":"grey"},null,8,["rotulo","cor"])):I("",!0)]),_:2},1024),e(H,null,{default:m(()=>[e(z,{rotulo:x.id,denso:"",escuro:"",cor:x.publicado?"positive":"grey"},null,8,["rotulo","cor"])]),_:2},1024)]),_:2},1024),e(B,{class:"maxw100 q-pl-sm no-margin"},{default:m(()=>[e(v,{onClick:c=>d.comparar_click(x),unelevated:"",label:"Comparar",color:"secondary",class:"q-px-sm"},null,8,["onClick"])]),_:2},1024),e(B,{class:"maxw100 q-pl-sm no-margin"},{default:m(()=>[e(v,{onClick:c=>d.item_click(x),unelevated:"",label:"Abrir",color:"primary",class:"q-px-sm"},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})):(u(),L("div",cn," Nenhum resultado encontrado "))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}var hn=xt(xn,[["render",un]]),wn=`<!--N\xC3O RETIRE A DIV CLASS/REF CONTAINER-->
<div class="container" ref="container">

  <!--SEU C\xD3DIGO DEVE COME\xC7AR APARTIR DAQUI...-->
  {{ dados?.label }}
  <!--SEU C\xD3DIGO DEVE TERMINAR AQUI...-->

</div>
`,yn=`{
  data() {
    return {
      dados: {}
    }
  },

  methods: {
    async atualizar(id) {
      try {
        this.dados = { label: 'Geeks Solu\xE7\xF5es' }
      } catch(erro) {
        console.error('N\xE3o foi poss\xEDvel carregar os dados', erro)
      }
    }
  },

  async mounted() {
    // N\xC3O RETIRE ESSE TRECHO.
    // ELE PEGA O ID DE IMPRESSOS QUE RECEBEM JSON
    // OU DE IMPRESSOS COM IDS DIRETOS OU POR OBJETO
    let id = this.json?.id
    if (!id) {
      id = parametro
      if (/^\\{.+\\}$/gi.test(id)) {
        id = JSON.parse(id).id
      }
    }


    // SEU C\xD3DIGO DEVE COME\xC7AR APARTIR DAQUI...
    await this.atualizar(id)
    // SEU C\xD3DIGO DEVE TERMINAR AQUI...


    // N\xC3O RETIRE ESSE TRECHO.
    // ELE \xC9 RESPONS\xC1VEL POR AGUARDA A RENDERIZA\xC7\xC3O DO IMPRESSO
    // E PERMITIR IMPRESS\xC3O REMOTA OU ENVIO VIA WHATSAPP E EMAIL
    await this.$nextTick()
    const domEl = document.createElement('span')
    domEl.setAttribute('id', 'impresso-carregado')
    this.$refs.container.appendChild(domEl)
  }
}
`,vn=`/*
  * Geeks Framework | Vers\xE3o 1.4.1

  * Familhas de fonte, testadas e usadas:
  * "Consolas", monospace [ Esta em uso atualmente ]
  * "Roboto Mono", monospace [ Propriedades parecidas com a fonte acima "Consolas" ]
  * "Courier New", monospace [ "font-size" muito pequeno ]
  * "Lucida Console", monospace [ "font-weight" n\xE3o funciona ]
  * "Arial", sans-serif [ "letter-spacing" muito pequeno ]

  * Observa\xE7\xE3o: H\xE1 fontes que se comport\xE3o de uma maneira no @container, porem seu
  * comportamento em @media print ou @page ficam erraticos. Como exemplo: peso da
  * fonte (weigth), na "Consolas" mono espa\xE7ada s\xF3 funciona normal (400) ou bold (700).
  * j\xE1 a fonte "Lucida Console" n\xE3o funciona bold em modo de print.
*/

/*
* FIXOS
*/
  html {
    color: rgb(0,0,0);
    background: none;
    padding: 0;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  body {
    /* Est\xE1 fonte e peso deve ser utilizada para impress\xF5es do tipo fiscal *
      font-family: "Consolas", monospace;
      font-weight: 900;
    */

    /* Est\xE1 fonte e peso deve ser utilizada para impress\xF5es padr\xF5es */
    font-family: "Arial", sans-serif;
    font-weight: normal;

    line-height: 1.4;
    color: rgb(0,0,0);
    background: none;
    position: relative;
    padding: 0;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .logo { display: block; overflow: hidden; width: 100px; height: 100px; margin: 0 auto; }
  .img-responsive { display: block; width: 100%; height: auto; margin: 0 auto; }

  .btn-del { padding: 4px; text-align: center; cursor: pointer; border-radius: 5px; background-color: #E64949; color: #FFF; }
  .btn-del:hover { background-color: #5BBDBC; }
  .btn-largage { margin-top: 15px; margin-bottom: 5px; width: 100%; font-size: 12pt; }
  .btn-meddium { margin-top: 5px; margin-bottom: 15px; width: 200px; float: right; font-size: 10pt; }
  .btn-small { margin-top: 5px; margin-bottom: 15px; width: 130px; float: right; font-size: 10pt; }

  table, tr, td { width: 100%; height: auto; padding: 0; margin: 0; left: 0; top: 0; right: 0; bottom: 0; }

  ul.list-row { list-style: none; float: left; width: auto; padding: 0; margin: 0; top: 0; right: 0; bottom: 0; left: 0; }
  ul.list-col { list-style: none; float: left; width: 100%; padding: 0; margin: 0; top: 0; right: 0; bottom: 0; left: 0; }
  ul.list-col li { display: inline-block; padding: 0; margin: 0; top: 0; right: 0; bottom: 0; left: 0; }

  ol.list-row { list-style: none; float: left; width: auto; padding: 0; margin: 0; top: 0; right: 0; bottom: 0; left: 0; }
  ol.list-col { list-style: none; float: left; width: 100%; padding: 0; margin: 0; top: 0; right: 0; bottom: 0; left: 0; }
  ol.list-col li { display: inline-block; padding: 0; margin: 0; top: 0; right: 0; bottom: 0; left: 0; }

  .form-control {
    cursor: pointer;
    display: block;
    padding: 7px 8.5px 7px 8.5px;
    font-family: "Arial", sans-serif;
    font-size: 12px;
    line-height: 1.2;
    font-weight: normal;
    color: rgb(0,0,0);
    background-color: white;
    background-clip: padding-box;
    overflow: hidden;
  }

  .form-control > div {
    position: relative;
    display: flex;
    align-items: center;
    padding: 6px 8px;
    margin: 0 -8.5px;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: inherit;
    background-color: inherit;
    background-clip: inherit;
    overflow: hidden;
    border: 1.4px solid rgba(0,0,0,.4);
    border-radius: 3.5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -moz-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -o-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .form-control > div:hover,
  .form-control > div:focus { border: 1.4px solid rgba(0,63,255,.8); }

  .form-control > div > input,
  .form-control > div > select {
    width: 100%;
    margin: 0 2px;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: inherit;
    background-color: inherit;
    background-clip: inherit;
    overflow: hidden;
    border: none;
    outline: 0;
    box-shadow: 0 0 0 0;
  }

  .form-control > div > select {
    width: calc(100% + 17px);
    padding: 6px 8.5px;
    margin: -6px -8.5px;
  }

  .form-control > div > input[type="checkbox"] {
    min-width: 13px;
    width: 13px;
    max-width: 13px;
    min-height: 13px;
    height: 13px;
    max-height: 13px;
    margin: 4px;
  }

  .form-control > .hint,
  .form-control > .hint-hover {
    display: block;
    position: relative;
    padding: 4px;
    margin: 1px 0 0 0;
    border: none;
    outline: 0;
    border-radius: 3px;
    font-size: 10.5px;
    line-height: 11.5px;
    font-weight: normal;
    color: rgb(0,0,0);
    background-color: none;
  }

  .form-control > .hint-hover { display: none; }
  .form-control:hover > .hint-hover,
  .form-control:focus > .hint-hover,
  .form-control:active > .hint-hover { display: block; }

  .input-in-text {
    cursor: pointer;
    display: inline-block;
    width: 120px;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color:  inherit;
    background-color: inherit;
    border: none;
    border-bottom: 1.4px solid rgba(0,0,0,.4);
    border-radius: 0;
    outline: 0;
    box-shadow: 0 0 0 0;
    -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -moz-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -o-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    overflow: hidden;
  }
  .input-in-text:hover,
  .input-in-text:focus { border-bottom: 1.4px solid rgba(255,63,0,.8); }




/*
* SIDEBAR OPTICONS
*/
  .sidebar .show {
    position: fixed;
    top: 7px;
    right: 7px;
    z-index: 1000;
    border: 0;
    border-radius: 100%;
    padding: 7px 7px;
    background: rgb(252,252,252);
    color: rgb(60,60,60);
    cursor: pointer;
    -webkit-transition: all 300ms ease-in-out;
    -moz-transition: all 300ms ease-in-out;
    -o-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
  }
  .sidebar .show:hover { background: rgb(234,234,234); }

  .sidebar .box {
    position: fixed;
    z-index: 999;
    width: 250px;
    padding: 50px 0;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: auto;
    overflow-y: scroll;
    scrollbar-width: none;
    background: rgb(252,252,252);
    box-shadow: 0 8px 7px 3px rgba(0,0,0,.15);
  }

  .sidebar .block {
    border-bottom: 1.4px solid rgba(0,0,0,.4);
    padding: 0 15px;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .sidebar .block .title {
    display: flex;
    align-items: center;
    font-size: 13px;
    line-height: 1;
    font-weight: bold;
    padding: 12px 18px 10px 18px;
    margin: 0 -15px 3px -15px;
    background: rgb(225,225,225);
    border: 0;
    cursor: pointer;
    -webkit-transition: all 300ms ease-in-out;
    -moz-transition: all 300ms ease-in-out;
    -o-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
  }
  .sidebar .block .title:hover { background: rgb(205,205,205); }

  .sidebar .block .title svg {
    width: 10px;
    height: 10px;
    margin: -1px 0 0 auto;
  }




/*
* BASE | CONTAINER
*/
  .center {
    overflow: hidden;
    padding: 0;
    margin: 10px auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgb(252,252,252);
    border: none;
    border-radius: 3px;
    outline: 3px solid rgba(0,0,0,.15);
    box-shadow: 0 8px 7px 3px rgba(0,0,0,.15);
  }

  .container {
    container-type: inline-size;
    background: none;
    position: relative;
    padding: 0;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .sm  { /*  72mm */ max-width: 272.126px; }
  .md  { /*  80mm */ max-width: 302.362px; }
  .lg  { /*  90mm */ max-width: 340.157px; }
  .xl  { /* 210mm */ max-width: 793.701px; }
  .xxl { /* 216mm */ max-width: 816.473px; }




/*
* BASE | TYPOGRAPHYS, BORDERS, OUTLINERS
*/
  h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6, p, .p, .caption {
    font-family: "Arial", sans-serif;
    line-height: 1.4;
    font-weight: normal;
    color: rgb(0,0,0);
    background: none;
    position: relative;
    overflow: hidden;
    padding: 0;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  h1, .h1 { font-size: 17px; }
  h2, .h2 { font-size: 16px; }
  h3, .h3 { font-size: 15px; }
  h4, .h4 { font-size: 14px; }
  h5, .h5 { font-size: 13px; }
  h6, .h6 { font-size: 12px; }
  p, .p { font-size: 11px; }
  .caption { font-size: 8px; }

  .bg-primary { background-color: #003fff !important; color: #ffffff !important; }
  .bg-secondary { background-color: #26a69a !important; color: #ffffff !important; }
  .bg-tertiary { background-color: #555555 !important; color: #ffffff !important; }
  .bg-accent { background-color: #9C27B0 !important; color: #ffffff !important; }
  .bg-positive { background-color: #21BA45 !important; color: #ffffff !important; }
  .bg-negative { background-color: #C10015 !important; color: #ffffff !important; }
  .bg-info { background-color: #31CCEC !important; color: #1d1d1d !important; }
  .bg-warning { background-color: #F2C037 !important; color: #1d1d1d !important; }
  .bg-light { background-color: #eeeeee !important; color: #1d1d1d !important; }
  .bg-dark { background-color: #1d1d1d !important; color: #ffffff !important; }

  .bg-black-0 { background: rgb(0,0,0); }
  .bg-black-1 { background: rgb(10,10,10); }
  .bg-black-2 { background: rgb(20,20,20); }
  .bg-black-3 { background: rgb(30,30,30); }
  .bg-black-4 { background: rgb(40,40,40); }
  .bg-black-5 { background: rgb(50,50,50); }
  .bg-black-6 { background: rgb(60,60,60); }
  .bg-black-7 { background: rgb(70,70,70); }
  .bg-black-8 { background: rgb(80,80,80); }
  .bg-black-9 { background: rgb(90,90,90); }

  .bg-grey-0 { background: rgb(150,150,150); }
  .bg-grey-1 { background: rgb(160,160,160); }
  .bg-grey-2 { background: rgb(170,170,170); }
  .bg-grey-3 { background: rgb(180,180,180); }
  .bg-grey-4 { background: rgb(190,190,190); }
  .bg-grey-5 { background: rgb(200,200,200); }
  .bg-grey-6 { background: rgb(210,210,210); }
  .bg-grey-7 { background: rgb(220,220,220); }
  .bg-grey-8 { background: rgb(230,230,230); }
  .bg-grey-9 { background: rgb(240,240,240); }

  .bg-white-0 { background: rgb(255,255,255); }
  .bg-white-1 { background: rgb(250,250,250); }
  .bg-white-2 { background: rgb(245,245,245); }

  .text-primary { color: #003fff !important; }
  .text-secondary { color: #26a69a !important; }
  .text-tertiary { color: #555555 !important; }
  .text-accent { color: #9C27B0 !important; }
  .text-positive { color: #21BA45 !important; }
  .text-negative { color: #C10015 !important; }
  .text-info { color: #31CCEC !important; }
  .text-warning { color: #F2C037 !important; }
  .text-light { color: #eeeeee !important; }
  .text-dark { color: #1d1d1d !important; }

  .text-left { text-align: left; }
  .text-center { text-align: center; }
  .text-right { text-align: right; }

  .normal { font-weight: normal; }
  .thin { font-weight: 300; }
  .light { font-weight: 400; }
  .regular { font-weight: 500; }
  .medium { font-weight: 600; }
  .bold { font-weight: 700; }
  .bolder { font-weight: 900; }

  .italic { font-style: italic; }

  .capitalize { text-transform: capitalize; }
  .uppercase { text-transform: uppercase; }
  .lowercase { text-transform: lowercase; }

  .text-hidden { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  .hidden { overflow: hidden; }
  .opacity { opacity: 0; }

  .float-left { float: left; }
  .float-right { float: right; }
  .float-none { float: none; }

  .outline { outline: 1px solid rgb(160,160,160); }

  .border {
    border-width: 1px;
    border-color: rgb(160,160,160);
    border-style: solid;
    padding: 1px;
  }

  .border-top {
    border-top-width: 1px;
    border-right-width: 0;
    border-bottom-width: 0;
    border-left-width: 0;
    border-color: rgb(160,160,160);
    border-style: solid;
    padding: 1px;
  }

  .border-right {
    border-top-width: 0;
    border-right-width: 1px;
    border-bottom-width: 0;
    border-left-width: 0;
    border-color: rgb(160,160,160);
    border-style: solid;
    padding: 1px;
  }

  .border-bottom {
    border-top-width: 0;
    border-right-width: 0;
    border-bottom-width: 1px;
    border-left-width: 0;
    border-color: rgb(160,160,160);
    border-style: solid;
    padding: 1px;
  }

  .border-left {
    border-top-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;
    border-left-width: 1px;
    border-color: rgb(160,160,160);
    border-style: solid;
  }

  .solid { border-style: solid; }
  .dotted { border-style: dotted; }
  .dashed { border-style: dashed; }

  .round, .rounded, .radius {
    border-radius: 2px;
  }

/*
* CONTAINERS | TYPOGRAPHYS, BORDERS, OUTLINERS
*/
  @container (min-width: 222.993px) { /* 59mm */
    .h1-sm { font-size: 17px !important; }
    .h2-sm { font-size: 16px !important; }
    .h3-sm { font-size: 15px !important; }
    .h4-sm { font-size: 14px !important; }
    .h5-sm { font-size: 13px !important; }
    .h6-sm { font-size: 12px !important; }
    .p-sm { font-size: 11px !important; }

    .text-sm-left { text-align: left !important; }
    .text-sm-center { text-align: center !important; }
    .text-sm-right { text-align: right !important; }

    .normal-sm { font-weight: normal; }
    .thin-sm { font-weight: 300; }
    .light-sm { font-weight: 400; }
    .regular-sm { font-weight: 500; }
    .medium-sm { font-weight: 600; }
    .bold-sm { font-weight: 700; }
    .bolder-sm { font-weight: 900; }

    .italic-sm { font-style: italic !important; }

    .capitalize-sm { text-transform: capitalize !important; }
    .uppercase-sm { text-transform: uppercase !important; }
    .lowercase-sm { text-transform: lowercase !important; }

    .text-sm-hidden { white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; }

    .hidden-sm { overflow: hidden !important; }
    .opacity-sm { opacity: 0 !important; }

    .float-sm-left { float: left !important; }
    .float-sm-right { float: right !important; }
    .float-sm-none { float: none !important; }

    .outline-sm { outline: 1px solid rgb(160,160,160) !important; }

    .border-sm { border: 1px solid rgb(160,160,160) !important; }
    .border-sm-top { border-top: 1px solid rgb(160,160,160) !important; }
    .border-sm-right { border-right: 1px solid rgb(160,160,160) !important; }
    .border-sm-bottom { border-bottom: 1px solid rgb(160,160,160) !important; }
    .border-sm-left { border-left: 1px solid rgb(160,160,160) !important; }

    .border-sm-dashed { border: 1px dashed rgb(160,160,160) !important; }
    .border-sm-top-dashed { border-top: 1px dashed rgb(160,160,160) !important; }
    .border-sm-right-dashed { border-right: 1px dashed rgb(160,160,160) !important; }
    .border-sm-bottom-dashed { border-bottom: 1px dashed rgb(160,160,160) !important; }
    .border-sm-left-dashed { border-left: 1px dashed rgb(160,160,160) !important; }

    .border-sm-dotted { border: 1px dotted rgb(160,160,160) !important; }
    .border-sm-top-dotted { border-top: 1px dotted rgb(160,160,160) !important; }
    .border-sm-right-dotted { border-right: 1px dotted rgb(160,160,160) !important; }
    .border-sm-bottom-dotted { border-bottom: 1px dotted rgb(160,160,160) !important; }
    .border-sm-left-dotted { border-left: 1px dotted rgb(160,160,160) !important; }
  }

  @container (min-width: 298.584px) { /* 79mm */
    .h1-md { font-size: 17px !important; }
    .h2-md { font-size: 16px !important; }
    .h3-md { font-size: 15px !important; }
    .h4-md { font-size: 14px !important; }
    .h5-md { font-size: 13px !important; }
    .h6-md { font-size: 12px !important; }
    .p-md { font-size: 11px !important; }

    .text-md-left { text-align: left !important; }
    .text-md-center { text-align: center !important; }
    .text-md-right { text-align: right !important; }

    .normal-md { font-weight: normal; }
    .thin-md { font-weight: 300; }
    .light-md { font-weight: 400; }
    .regular-md { font-weight: 500; }
    .medium-md { font-weight: 600; }
    .bold-md { font-weight: 700; }
    .bolder-md { font-weight: 900; }

    .italic-md { font-style: italic !important; }

    .capitalize-md { text-transform: capitalize !important; }
    .uppercase-md { text-transform: uppercase !important; }
    .lowercase-md { text-transform: lowercase !important; }

    .text-md-hidden { white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; }

    .hidden-md { overflow: hidden !important; }
    .opacity-md { opacity: 0 !important; }

    .float-md-left { float: left !important; }
    .float-md-right { float: right !important; }
    .float-md-none { float: none !important; }

    .outline-md { outline: 1px solid rgb(160,160,160) !important; }

    .border-md { border: 1px solid rgb(160,160,160) !important; }
    .border-md-top { border-top: 1px solid rgb(160,160,160) !important; }
    .border-md-right { border-right: 1px solid rgb(160,160,160) !important; }
    .border-md-bottom { border-bottom: 1px solid rgb(160,160,160) !important; }
    .border-md-left { border-left: 1px solid rgb(160,160,160) !important; }

    .border-md-dashed { border: 1px dashed rgb(160,160,160) !important; }
    .border-md-top-dashed { border-top: 1px dashed rgb(160,160,160) !important; }
    .border-md-right-dashed { border-right: 1px dashed rgb(160,160,160) !important; }
    .border-md-bottom-dashed { border-bottom: 1px dashed rgb(160,160,160) !important; }
    .border-md-left-dashed { border-left: 1px dashed rgb(160,160,160) !important; }

    .border-md-dotted { border: 1px dotted rgb(160,160,160) !important; }
    .border-md-top-dotted { border-top: 1px dotted rgb(160,160,160) !important; }
    .border-md-right-dotted { border-right: 1px dotted rgb(160,160,160) !important; }
    .border-md-bottom-dotted { border-bottom: 1px dotted rgb(160,160,160) !important; }
    .border-md-left-dotted { border-left: 1px dotted rgb(160,160,160) !important; }
  }

  @container (min-width: 336.376px) { /* 89mm */
    .h1-lg { font-size: 17px !important; }
    .h2-lg { font-size: 16px !important; }
    .h3-lg { font-size: 15px !important; }
    .h4-lg { font-size: 14px !important; }
    .h5-lg { font-size: 13px !important; }
    .h6-lg { font-size: 12px !important; }
    .p-lg { font-size: 11px !important; }

    .text-lg-left { text-align: left !important; }
    .text-lg-center { text-align: center !important; }
    .text-lg-right { text-align: right !important; }

    .normal-lg { font-weight: normal; }
    .thin-lg { font-weight: 300; }
    .light-lg { font-weight: 400; }
    .regular-lg { font-weight: 500; }
    .medium-lg { font-weight: 600; }
    .bold-lg { font-weight: 700; }
    .bolder-lg { font-weight: 900; }

    .italic-lg { font-style: italic !important; }

    .capitalize-lg { text-transform: capitalize !important; }
    .uppercase-lg { text-transform: uppercase !important; }
    .lowercase-lg { text-transform: lowercase !important; }

    .text-lg-hidden { white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; }

    .hidden-lg { overflow: hidden !important; }
    .opacity-lg { opacity: 0 !important; }

    .float-lg-left { float: left !important; }
    .float-lg-right { float: right !important; }
    .float-lg-none { float: none !important; }

    .outline-lg { outline: 1px solid rgb(160,160,160) !important; }

    .border-lg { border: 1px solid rgb(160,160,160) !important; }
    .border-lg-top { border-top: 1px solid rgb(160,160,160) !important; }
    .border-lg-right { border-right: 1px solid rgb(160,160,160) !important; }
    .border-lg-bottom { border-bottom: 1px solid rgb(160,160,160) !important; }
    .border-lg-left { border-left: 1px solid rgb(160,160,160) !important; }

    .border-lg-dashed { border: 1px dashed rgb(160,160,160) !important; }
    .border-lg-top-dashed { border-top: 1px dashed rgb(160,160,160) !important; }
    .border-lg-right-dashed { border-right: 1px dashed rgb(160,160,160) !important; }
    .border-lg-bottom-dashed { border-bottom: 1px dashed rgb(160,160,160) !important; }
    .border-lg-left-dashed { border-left: 1px dashed rgb(160,160,160) !important; }

    .border-lg-dotted { border: 1px dotted rgb(160,160,160) !important; }
    .border-lg-top-dotted { border-top: 1px dotted rgb(160,160,160) !important; }
    .border-lg-right-dotted { border-right: 1px dotted rgb(160,160,160) !important; }
    .border-lg-bottom-dotted { border-bottom: 1px dotted rgb(160,160,160) !important; }
    .border-lg-left-dotted { border-left: 1px dotted rgb(160,160,160) !important; }
  }

  @container (min-width: 525.334px) { /* 139mm */
    .h1-xl { font-size: 17px !important; }
    .h2-xl { font-size: 16px !important; }
    .h3-xl { font-size: 15px !important; }
    .h4-xl { font-size: 14px !important; }
    .h5-xl { font-size: 13px !important; }
    .h6-xl { font-size: 12px !important; }
    .p-xl { font-size: 11px !important; }

    .text-xl-left { text-align: left !important; }
    .text-xl-center { text-align: center !important; }
    .text-xl-right { text-align: right !important; }

    .normal-xl { font-weight: normal; }
    .thin-xl { font-weight: 300; }
    .light-xl { font-weight: 400; }
    .regular-xl { font-weight: 500; }
    .medium-xl { font-weight: 600; }
    .bold-xl { font-weight: 700; }
    .bolder-xl { font-weight: 900; }

    .italic-xl { font-style: italic !important; }

    .capitalize-xl { text-transform: capitalize !important; }
    .uppercase-xl { text-transform: uppercase !important; }
    .lowercase-xl { text-transform: lowercase !important; }

    .text-xl-hidden { white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; }

    .hidden-xl { overflow: hidden !important; }
    .opacity-xl { opacity: 0 !important; }

    .float-xl-left { float: left !important; }
    .float-xl-right { float: right !important; }
    .float-xl-none { float: none !important; }

    .outline-xl { outline: 1px solid rgb(160,160,160) !important; }

    .border-xl { border: 1px solid rgb(160,160,160) !important; }
    .border-xl-top { border-top: 1px solid rgb(160,160,160) !important; }
    .border-xl-right { border-right: 1px solid rgb(160,160,160) !important; }
    .border-xl-bottom { border-bottom: 1px solid rgb(160,160,160) !important; }
    .border-xl-left { border-left: 1px solid rgb(160,160,160) !important; }

    .border-xl-dashed { border: 1px dashed rgb(160,160,160) !important; }
    .border-xl-top-dashed { border-top: 1px dashed rgb(160,160,160) !important; }
    .border-xl-right-dashed { border-right: 1px dashed rgb(160,160,160) !important; }
    .border-xl-bottom-dashed { border-bottom: 1px dashed rgb(160,160,160) !important; }
    .border-xl-left-dashed { border-left: 1px dashed rgb(160,160,160) !important; }

    .border-xl-dotted { border: 1px dotted rgb(160,160,160) !important; }
    .border-xl-top-dotted { border-top: 1px dotted rgb(160,160,160) !important; }
    .border-xl-right-dotted { border-right: 1px dotted rgb(160,160,160) !important; }
    .border-xl-bottom-dotted { border-bottom: 1px dotted rgb(160,160,160) !important; }
    .border-xl-left-dotted { border-left: 1px dotted rgb(160,160,160) !important; }
  }

  @container (min-width: 793.701px) { /* 210mm */
    .h1-xxl { font-size: 17px !important; }
    .h2-xxl { font-size: 16px !important; }
    .h3-xxl { font-size: 15px !important; }
    .h4-xxl { font-size: 14px !important; }
    .h5-xxl { font-size: 13px !important; }
    .h6-xxl { font-size: 12px !important; }
    .p-xxl { font-size: 11px !important; }

    .text-xxl-left { text-align: left !important; }
    .text-xxl-center { text-align: center !important; }
    .text-xxl-right { text-align: right !important; }

    .normal-xxl { font-weight: normal; }
    .thin-xxl { font-weight: 300; }
    .light-xxl { font-weight: 400; }
    .regular-xxl { font-weight: 500; }
    .medium-xxl { font-weight: 600; }
    .bold-xxl { font-weight: 700; }
    .bolder-xxl { font-weight: 900; }

    .italic-xxl { font-style: italic !important; }

    .capitalize-xxl { text-transform: capitalize !important; }
    .uppercase-xxl { text-transform: uppercase !important; }
    .lowercase-xxl { text-transform: lowercase !important; }

    .text-xxl-hidden { white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; }

    .hidden-xxl { overflow: hidden !important; }
    .opacity-xxl { opacity: 0 !important; }

    .float-xxl-left { float: left !important; }
    .float-xxl-right { float: right !important; }
    .float-xxl-none { float: none !important; }

    .outline-xxl { outline: 1px solid rgb(160,160,160) !important; }

    .border-xxl { border: 1px solid rgb(160,160,160) !important; }
    .border-xxl-top { border-top: 1px solid rgb(160,160,160) !important; }
    .border-xxl-right { border-right: 1px solid rgb(160,160,160) !important; }
    .border-xxl-bottom { border-bottom: 1px solid rgb(160,160,160) !important; }
    .border-xxl-left { border-left: 1px solid rgb(160,160,160) !important; }

    .border-xxl-dashed { border: 1px dashed rgb(160,160,160) !important; }
    .border-xxl-top-dashed { border-top: 1px dashed rgb(160,160,160) !important; }
    .border-xxl-right-dashed { border-right: 1px dashed rgb(160,160,160) !important; }
    .border-xxl-bottom-dashed { border-bottom: 1px dashed rgb(160,160,160) !important; }
    .border-xxl-left-dashed { border-left: 1px dashed rgb(160,160,160) !important; }

    .border-xxl-dotted { border: 1px dotted rgb(160,160,160) !important; }
    .border-xxl-top-dotted { border-top: 1px dotted rgb(160,160,160) !important; }
    .border-xxl-right-dotted { border-right: 1px dotted rgb(160,160,160) !important; }
    .border-xxl-bottom-dotted { border-bottom: 1px dotted rgb(160,160,160) !important; }
    .border-xxl-left-dotted { border-left: 1px dotted rgb(160,160,160) !important; }
  }

/*
* PRINTS | TYPOGRAPHYS, BORDERS, OUTLINERS
*/
  @media print { @container (min-width: 222.993px) { /* 59mm */
    .h1-sm { font-size: 17px !important; }
    .h2-sm { font-size: 16px !important; }
    .h3-sm { font-size: 15px !important; }
    .h4-sm { font-size: 14px !important; }
    .h5-sm { font-size: 13px !important; }
    .h6-sm { font-size: 12px !important; }
    .p-sm { font-size: 11px !important; }

    .text-sm-left { text-align: left !important; }
    .text-sm-center { text-align: center !important; }
    .text-sm-right { text-align: right !important; }

    .normal-sm { font-weight: normal; }
    .thin-sm { font-weight: 300; }
    .light-sm { font-weight: 400; }
    .regular-sm { font-weight: 500; }
    .medium-sm { font-weight: 600; }
    .bold-sm { font-weight: 700; }
    .bolder-sm { font-weight: 900; }

    .italic-sm { font-style: italic !important; }

    .capitalize-sm { text-transform: capitalize !important; }
    .uppercase-sm { text-transform: uppercase !important; }
    .lowercase-sm { text-transform: lowercase !important; }

    .text-sm-hidden { white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; }

    .hidden-sm { overflow: hidden !important; }
    .opacity-sm { opacity: 0 !important; }

    .float-sm-left { float: left !important; }
    .float-sm-right { float: right !important; }
    .float-sm-none { float: none !important; }

    .outline-sm { outline: 1px solid rgb(160,160,160) !important; }

    .border-sm { border: 1px solid rgb(160,160,160) !important; }
    .border-sm-top { border-top: 1px solid rgb(160,160,160) !important; }
    .border-sm-right { border-right: 1px solid rgb(160,160,160) !important; }
    .border-sm-bottom { border-bottom: 1px solid rgb(160,160,160) !important; }
    .border-sm-left { border-left: 1px solid rgb(160,160,160) !important; }

    .border-sm-dashed { border: 1px dashed rgb(160,160,160) !important; }
    .border-sm-top-dashed { border-top: 1px dashed rgb(160,160,160) !important; }
    .border-sm-right-dashed { border-right: 1px dashed rgb(160,160,160) !important; }
    .border-sm-bottom-dashed { border-bottom: 1px dashed rgb(160,160,160) !important; }
    .border-sm-left-dashed { border-left: 1px dashed rgb(160,160,160) !important; }

    .border-sm-dotted { border: 1px dotted rgb(160,160,160) !important; }
    .border-sm-top-dotted { border-top: 1px dotted rgb(160,160,160) !important; }
    .border-sm-right-dotted { border-right: 1px dotted rgb(160,160,160) !important; }
    .border-sm-bottom-dotted { border-bottom: 1px dotted rgb(160,160,160) !important; }
    .border-sm-left-dotted { border-left: 1px dotted rgb(160,160,160) !important; }
  }}

  @media print { @container (min-width: 298.584px) { /* 79mm */
    .h1-md { font-size: 17px !important; }
    .h2-md { font-size: 16px !important; }
    .h3-md { font-size: 15px !important; }
    .h4-md { font-size: 14px !important; }
    .h5-md { font-size: 13px !important; }
    .h6-md { font-size: 12px !important; }
    .p-md { font-size: 11px !important; }

    .text-md-left { text-align: left !important; }
    .text-md-center { text-align: center !important; }
    .text-md-right { text-align: right !important; }

    .normal-md { font-weight: normal; }
    .thin-md { font-weight: 300; }
    .light-md { font-weight: 400; }
    .regular-md { font-weight: 500; }
    .medium-md { font-weight: 600; }
    .bold-md { font-weight: 700; }
    .bolder-md { font-weight: 900; }

    .italic-md { font-style: italic !important; }

    .capitalize-md { text-transform: capitalize !important; }
    .uppercase-md { text-transform: uppercase !important; }
    .lowercase-md { text-transform: lowercase !important; }

    .text-md-hidden { white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; }

    .hidden-md { overflow: hidden !important; }
    .opacity-md { opacity: 0 !important; }

    .float-md-left { float: left !important; }
    .float-md-right { float: right !important; }
    .float-md-none { float: none !important; }

    .outline-md { outline: 1px solid rgb(160,160,160) !important; }

    .border-md { border: 1px solid rgb(160,160,160) !important; }
    .border-md-top { border-top: 1px solid rgb(160,160,160) !important; }
    .border-md-right { border-right: 1px solid rgb(160,160,160) !important; }
    .border-md-bottom { border-bottom: 1px solid rgb(160,160,160) !important; }
    .border-md-left { border-left: 1px solid rgb(160,160,160) !important; }

    .border-md-dashed { border: 1px dashed rgb(160,160,160) !important; }
    .border-md-top-dashed { border-top: 1px dashed rgb(160,160,160) !important; }
    .border-md-right-dashed { border-right: 1px dashed rgb(160,160,160) !important; }
    .border-md-bottom-dashed { border-bottom: 1px dashed rgb(160,160,160) !important; }
    .border-md-left-dashed { border-left: 1px dashed rgb(160,160,160) !important; }

    .border-md-dotted { border: 1px dotted rgb(160,160,160) !important; }
    .border-md-top-dotted { border-top: 1px dotted rgb(160,160,160) !important; }
    .border-md-right-dotted { border-right: 1px dotted rgb(160,160,160) !important; }
    .border-md-bottom-dotted { border-bottom: 1px dotted rgb(160,160,160) !important; }
    .border-md-left-dotted { border-left: 1px dotted rgb(160,160,160) !important; }
  }}

  @media print { @container (min-width: 336.376px) { /* 89mm */
    .h1-lg { font-size: 17px !important; }
    .h2-lg { font-size: 16px !important; }
    .h3-lg { font-size: 15px !important; }
    .h4-lg { font-size: 14px !important; }
    .h5-lg { font-size: 13px !important; }
    .h6-lg { font-size: 12px !important; }
    .p-lg { font-size: 11px !important; }

    .text-lg-left { text-align: left !important; }
    .text-lg-center { text-align: center !important; }
    .text-lg-right { text-align: right !important; }

    .normal-lg { font-weight: normal; }
    .thin-lg { font-weight: 300; }
    .light-lg { font-weight: 400; }
    .regular-lg { font-weight: 500; }
    .medium-lg { font-weight: 600; }
    .bold-lg { font-weight: 700; }
    .bolder-lg { font-weight: 900; }

    .italic-lg { font-style: italic !important; }

    .capitalize-lg { text-transform: capitalize !important; }
    .uppercase-lg { text-transform: uppercase !important; }
    .lowercase-lg { text-transform: lowercase !important; }

    .text-lg-hidden { white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; }

    .hidden-lg { overflow: hidden !important; }
    .opacity-lg { opacity: 0 !important; }

    .float-lg-left { float: left !important; }
    .float-lg-right { float: right !important; }
    .float-lg-none { float: none !important; }

    .outline-lg { outline: 1px solid rgb(160,160,160) !important; }

    .border-lg { border: 1px solid rgb(160,160,160) !important; }
    .border-lg-top { border-top: 1px solid rgb(160,160,160) !important; }
    .border-lg-right { border-right: 1px solid rgb(160,160,160) !important; }
    .border-lg-bottom { border-bottom: 1px solid rgb(160,160,160) !important; }
    .border-lg-left { border-left: 1px solid rgb(160,160,160) !important; }

    .border-lg-dashed { border: 1px dashed rgb(160,160,160) !important; }
    .border-lg-top-dashed { border-top: 1px dashed rgb(160,160,160) !important; }
    .border-lg-right-dashed { border-right: 1px dashed rgb(160,160,160) !important; }
    .border-lg-bottom-dashed { border-bottom: 1px dashed rgb(160,160,160) !important; }
    .border-lg-left-dashed { border-left: 1px dashed rgb(160,160,160) !important; }

    .border-lg-dotted { border: 1px dotted rgb(160,160,160) !important; }
    .border-lg-top-dotted { border-top: 1px dotted rgb(160,160,160) !important; }
    .border-lg-right-dotted { border-right: 1px dotted rgb(160,160,160) !important; }
    .border-lg-bottom-dotted { border-bottom: 1px dotted rgb(160,160,160) !important; }
    .border-lg-left-dotted { border-left: 1px dotted rgb(160,160,160) !important; }
  }}

  @media print { @container (min-width: 525.334px) { /* 139mm */
    .h1-xl { font-size: 17px !important; }
    .h2-xl { font-size: 16px !important; }
    .h3-xl { font-size: 15px !important; }
    .h4-xl { font-size: 14px !important; }
    .h5-xl { font-size: 13px !important; }
    .h6-xl { font-size: 12px !important; }
    .p-xl { font-size: 11px !important; }

    .text-xl-left { text-align: left !important; }
    .text-xl-center { text-align: center !important; }
    .text-xl-right { text-align: right !important; }

    .normal-xl { font-weight: normal; }
    .thin-xl { font-weight: 300; }
    .light-xl { font-weight: 400; }
    .regular-xl { font-weight: 500; }
    .medium-xl { font-weight: 600; }
    .bold-xl { font-weight: 700; }
    .bolder-xl { font-weight: 900; }

    .italic-xl { font-style: italic !important; }

    .capitalize-xl { text-transform: capitalize !important; }
    .uppercase-xl { text-transform: uppercase !important; }
    .lowercase-xl { text-transform: lowercase !important; }

    .text-xl-hidden { white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; }

    .hidden-xl { overflow: hidden !important; }
    .opacity-xl { opacity: 0 !important; }

    .float-xl-left { float: left !important; }
    .float-xl-right { float: right !important; }
    .float-xl-none { float: none !important; }

    .outline-xl { outline: 1px solid rgb(160,160,160) !important; }

    .border-xl { border: 1px solid rgb(160,160,160) !important; }
    .border-xl-top { border-top: 1px solid rgb(160,160,160) !important; }
    .border-xl-right { border-right: 1px solid rgb(160,160,160) !important; }
    .border-xl-bottom { border-bottom: 1px solid rgb(160,160,160) !important; }
    .border-xl-left { border-left: 1px solid rgb(160,160,160) !important; }

    .border-xl-dashed { border: 1px dashed rgb(160,160,160) !important; }
    .border-xl-top-dashed { border-top: 1px dashed rgb(160,160,160) !important; }
    .border-xl-right-dashed { border-right: 1px dashed rgb(160,160,160) !important; }
    .border-xl-bottom-dashed { border-bottom: 1px dashed rgb(160,160,160) !important; }
    .border-xl-left-dashed { border-left: 1px dashed rgb(160,160,160) !important; }

    .border-xl-dotted { border: 1px dotted rgb(160,160,160) !important; }
    .border-xl-top-dotted { border-top: 1px dotted rgb(160,160,160) !important; }
    .border-xl-right-dotted { border-right: 1px dotted rgb(160,160,160) !important; }
    .border-xl-bottom-dotted { border-bottom: 1px dotted rgb(160,160,160) !important; }
    .border-xl-left-dotted { border-left: 1px dotted rgb(160,160,160) !important; }
  }}

  @media print { @container (min-width: 793.701px) { /* 210mm */
    .h1-xxl { font-size: 17px !important; }
    .h2-xxl { font-size: 16px !important; }
    .h3-xxl { font-size: 15px !important; }
    .h4-xxl { font-size: 14px !important; }
    .h5-xxl { font-size: 13px !important; }
    .h6-xxl { font-size: 12px !important; }
    .p-xxl { font-size: 11px !important; }

    .text-xxl-left { text-align: left !important; }
    .text-xxl-center { text-align: center !important; }
    .text-xxl-right { text-align: right !important; }

    .normal-xxl { font-weight: normal; }
    .thin-xxl { font-weight: 300; }
    .light-xxl { font-weight: 400; }
    .regular-xxl { font-weight: 500; }
    .medium-xxl { font-weight: 600; }
    .bold-xxl { font-weight: 700; }
    .bolder-xxl { font-weight: 900; }

    .italic-xxl { font-style: italic !important; }

    .capitalize-xxl { text-transform: capitalize !important; }
    .uppercase-xxl { text-transform: uppercase !important; }
    .lowercase-xxl { text-transform: lowercase !important; }

    .text-xxl-hidden { white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; }

    .hidden-xxl { overflow: hidden !important; }
    .opacity-xxl { opacity: 0 !important; }

    .float-xxl-left { float: left !important; }
    .float-xxl-right { float: right !important; }
    .float-xxl-none { float: none !important; }

    .outline-xxl { outline: 1px solid rgb(160,160,160) !important; }

    .border-xxl { border: 1px solid rgb(160,160,160) !important; }
    .border-xxl-top { border-top: 1px solid rgb(160,160,160) !important; }
    .border-xxl-right { border-right: 1px solid rgb(160,160,160) !important; }
    .border-xxl-bottom { border-bottom: 1px solid rgb(160,160,160) !important; }
    .border-xxl-left { border-left: 1px solid rgb(160,160,160) !important; }

    .border-xxl-dashed { border: 1px dashed rgb(160,160,160) !important; }
    .border-xxl-top-dashed { border-top: 1px dashed rgb(160,160,160) !important; }
    .border-xxl-right-dashed { border-right: 1px dashed rgb(160,160,160) !important; }
    .border-xxl-bottom-dashed { border-bottom: 1px dashed rgb(160,160,160) !important; }
    .border-xxl-left-dashed { border-left: 1px dashed rgb(160,160,160) !important; }

    .border-xxl-dotted { border: 1px dotted rgb(160,160,160) !important; }
    .border-xxl-top-dotted { border-top: 1px dotted rgb(160,160,160) !important; }
    .border-xxl-right-dotted { border-right: 1px dotted rgb(160,160,160) !important; }
    .border-xxl-bottom-dotted { border-bottom: 1px dotted rgb(160,160,160) !important; }
    .border-xxl-left-dotted { border-left: 1px dotted rgb(160,160,160) !important; }
  }}




/*
* BASE | ROWS, COLS, OFFSETS
*/
  .row { display: flex; flex-wrap: wrap; margin-top: calc(-1 * var(--bs-gutter-y)); margin-right: calc(-0.5 * var(--bs-gutter-x)); margin-left: calc(-0.5 * var(--bs-gutter-x)); }
  .row > * { box-sizing: border-box; flex-shrink: 0; width: 100%; max-width: 100%; padding-right: calc(var(--bs-gutter-x) * 0.5); padding-left: calc(var(--bs-gutter-x) * 0.5); margin-top: var(--bs-gutter-y); }

  .col { flex: 1 0 0%; }
  .col-auto { flex: 0 0 auto; width: auto; }
  .col-1 { flex: 0 0 auto; width: 8.33333333%; }
  .col-2 { flex: 0 0 auto; width: 16.66666667%; }
  .col-3 { flex: 0 0 auto; width: 25%; }
  .col-4 { flex: 0 0 auto; width: 33.33333333%; }
  .col-5 { flex: 0 0 auto; width: 41.66666667%; }
  .col-6 { flex: 0 0 auto; width: 50%; }
  .col-7 { flex: 0 0 auto; width: 58.33333333%; }
  .col-8 { flex: 0 0 auto; width: 66.66666667%; }
  .col-9 { flex: 0 0 auto; width: 75%; }
  .col-10 { flex: 0 0 auto; width: 83.33333333%; }
  .col-11 { flex: 0 0 auto; width: 91.66666667%; }
  .col-12 { flex: 0 0 auto; width: 100%; }

  .offset-1 { margin-left: 8.33333333%; }
  .offset-2 { margin-left: 16.66666667%; }
  .offset-3 { margin-left: 25%; }
  .offset-4 { margin-left: 33.33333333%; }
  .offset-5 { margin-left: 41.66666667%; }
  .offset-6 { margin-left: 50%; }
  .offset-7 { margin-left: 58.33333333%; }
  .offset-8 { margin-left: 66.66666667%; }
  .offset-9 { margin-left: 75%; }
  .offset-10 { margin-left: 83.33333333%; }
  .offset-11 { margin-left: 91.66666667%; }

/*
* CONTAINERS | ROWS, COLS, OFFSETS
*/
  @container (min-width: 222.993px) { /* 59mm */
    .col-sm { flex: 1 0 0%; }
    .col-sm-auto { flex: 0 0 auto; width: auto; }
    .col-sm-1 { flex: 0 0 auto; width: 8.33333333%; }
    .col-sm-2 { flex: 0 0 auto; width: 16.66666667%; }
    .col-sm-3 { flex: 0 0 auto; width: 25%; }
    .col-sm-4 { flex: 0 0 auto; width: 33.33333333%; }
    .col-sm-5 { flex: 0 0 auto; width: 41.66666667%; }
    .col-sm-6 { flex: 0 0 auto; width: 50%; }
    .col-sm-7 { flex: 0 0 auto; width: 58.33333333%; }
    .col-sm-8 { flex: 0 0 auto; width: 66.66666667%; }
    .col-sm-9 { flex: 0 0 auto; width: 75%; }
    .col-sm-10 { flex: 0 0 auto; width: 83.33333333%; }
    .col-sm-11 { flex: 0 0 auto; width: 91.66666667%; }
    .col-sm-12 { flex: 0 0 auto; width: 100%; }

    .offset-sm-0 { margin-left: 0; }
    .offset-sm-1 { margin-left: 8.33333333%; }
    .offset-sm-2 { margin-left: 16.66666667%; }
    .offset-sm-3 { margin-left: 25%; }
    .offset-sm-4 { margin-left: 33.33333333%; }
    .offset-sm-5 { margin-left: 41.66666667%; }
    .offset-sm-6 { margin-left: 50%; }
    .offset-sm-7 { margin-left: 58.33333333%; }
    .offset-sm-8 { margin-left: 66.66666667%; }
    .offset-sm-9 { margin-left: 75%; }
    .offset-sm-10 { margin-left: 83.33333333%; }
    .offset-sm-11 { margin-left: 91.66666667%; }
  }

  @container (min-width: 298.584px) { /* 79mm */
    .col-md { flex: 1 0 0%; }
    .col-md-auto { flex: 0 0 auto; width: auto; }
    .col-md-1 { flex: 0 0 auto; width: 8.33333333%; }
    .col-md-2 { flex: 0 0 auto; width: 16.66666667%; }
    .col-md-3 { flex: 0 0 auto; width: 25%; }
    .col-md-4 { flex: 0 0 auto; width: 33.33333333%; }
    .col-md-5 { flex: 0 0 auto; width: 41.66666667%; }
    .col-md-6 { flex: 0 0 auto; width: 50%; }
    .col-md-7 { flex: 0 0 auto; width: 58.33333333%; }
    .col-md-8 { flex: 0 0 auto; width: 66.66666667%; }
    .col-md-9 { flex: 0 0 auto; width: 75%; }
    .col-md-10 { flex: 0 0 auto; width: 83.33333333%; }
    .col-md-11 { flex: 0 0 auto; width: 91.66666667%; }
    .col-md-12 { flex: 0 0 auto; width: 100%; }

    .offset-md-0 { margin-left: 0; }
    .offset-md-1 { margin-left: 8.33333333%; }
    .offset-md-2 { margin-left: 16.66666667%; }
    .offset-md-3 { margin-left: 25%; }
    .offset-md-4 { margin-left: 33.33333333%; }
    .offset-md-5 { margin-left: 41.66666667%; }
    .offset-md-6 { margin-left: 50%; }
    .offset-md-7 { margin-left: 58.33333333%; }
    .offset-md-8 { margin-left: 66.66666667%; }
    .offset-md-9 { margin-left: 75%; }
    .offset-md-10 { margin-left: 83.33333333%; }
    .offset-md-11 { margin-left: 91.66666667%; }
  }

  @container (min-width: 336.376px) { /* 89mm */
    .col-lg { flex: 1 0 0%; }
    .col-lg-auto { flex: 0 0 auto; width: auto; }
    .col-lg-1 { flex: 0 0 auto; width: 8.33333333%; }
    .col-lg-2 { flex: 0 0 auto; width: 16.66666667%; }
    .col-lg-3 { flex: 0 0 auto; width: 25%; }
    .col-lg-4 { flex: 0 0 auto; width: 33.33333333%; }
    .col-lg-5 { flex: 0 0 auto; width: 41.66666667%; }
    .col-lg-6 { flex: 0 0 auto; width: 50%; }
    .col-lg-7 { flex: 0 0 auto; width: 58.33333333%; }
    .col-lg-8 { flex: 0 0 auto; width: 66.66666667%; }
    .col-lg-9 { flex: 0 0 auto; width: 75%; }
    .col-lg-10 { flex: 0 0 auto; width: 83.33333333%; }
    .col-lg-11 { flex: 0 0 auto; width: 91.66666667%; }
    .col-lg-12 { flex: 0 0 auto; width: 100%; }

    .offset-lg-0 { margin-left: 0; }
    .offset-lg-1 { margin-left: 8.33333333%; }
    .offset-lg-2 { margin-left: 16.66666667%; }
    .offset-lg-3 { margin-left: 25%; }
    .offset-lg-4 { margin-left: 33.33333333%; }
    .offset-lg-5 { margin-left: 41.66666667%; }
    .offset-lg-6 { margin-left: 50%; }
    .offset-lg-7 { margin-left: 58.33333333%; }
    .offset-lg-8 { margin-left: 66.66666667%; }
    .offset-lg-9 { margin-left: 75%; }
    .offset-lg-10 { margin-left: 83.33333333%; }
    .offset-lg-11 { margin-left: 91.66666667%; }
  }

  @container (min-width: 525.334px) { /* 139mm */
    .col-xl { flex: 1 0 0%; }
    .col-xl-auto { flex: 0 0 auto; width: auto; }
    .col-xl-1 { flex: 0 0 auto; width: 8.33333333%; }
    .col-xl-2 { flex: 0 0 auto; width: 16.66666667%; }
    .col-xl-3 { flex: 0 0 auto; width: 25%; }
    .col-xl-4 { flex: 0 0 auto; width: 33.33333333%; }
    .col-xl-5 { flex: 0 0 auto; width: 41.66666667%; }
    .col-xl-6 { flex: 0 0 auto; width: 50%; }
    .col-xl-7 { flex: 0 0 auto; width: 58.33333333%; }
    .col-xl-8 { flex: 0 0 auto; width: 66.66666667%; }
    .col-xl-9 { flex: 0 0 auto; width: 75%; }
    .col-xl-10 { flex: 0 0 auto; width: 83.33333333%; }
    .col-xl-11 { flex: 0 0 auto; width: 91.66666667%; }
    .col-xl-12 { flex: 0 0 auto; width: 100%; }

    .offset-xl-0 { margin-left: 0; }
    .offset-xl-1 { margin-left: 8.33333333%; }
    .offset-xl-2 { margin-left: 16.66666667%; }
    .offset-xl-3 { margin-left: 25%; }
    .offset-xl-4 { margin-left: 33.33333333%; }
    .offset-xl-5 { margin-left: 41.66666667%; }
    .offset-xl-6 { margin-left: 50%; }
    .offset-xl-7 { margin-left: 58.33333333%; }
    .offset-xl-8 { margin-left: 66.66666667%; }
    .offset-xl-9 { margin-left: 75%; }
    .offset-xl-10 { margin-left: 83.33333333%; }
    .offset-xl-11 { margin-left: 91.66666667%; }
  }

  @container (min-width: 793.701px) { /* 210mm */
    .col-xxl { flex: 1 0 0%; }
    .col-xxl-auto { flex: 0 0 auto; width: auto; }
    .col-xxl-1 { flex: 0 0 auto; width: 8.33333333%; }
    .col-xxl-2 { flex: 0 0 auto; width: 16.66666667%; }
    .col-xxl-3 { flex: 0 0 auto; width: 25%; }
    .col-xxl-4 { flex: 0 0 auto; width: 33.33333333%; }
    .col-xxl-5 { flex: 0 0 auto; width: 41.66666667%; }
    .col-xxl-6 { flex: 0 0 auto; width: 50%; }
    .col-xxl-7 { flex: 0 0 auto; width: 58.33333333%; }
    .col-xxl-8 { flex: 0 0 auto; width: 66.66666667%; }
    .col-xxl-9 { flex: 0 0 auto; width: 75%; }
    .col-xxl-10 { flex: 0 0 auto; width: 83.33333333%; }
    .col-xxl-11 { flex: 0 0 auto; width: 91.66666667%; }
    .col-xxl-12 { flex: 0 0 auto; width: 100%; }

    .offset-xxl-0 { margin-left: 0; }
    .offset-xxl-1 { margin-left: 8.33333333%; }
    .offset-xxl-2 { margin-left: 16.66666667%; }
    .offset-xxl-3 { margin-left: 25%; }
    .offset-xxl-4 { margin-left: 33.33333333%; }
    .offset-xxl-5 { margin-left: 41.66666667%; }
    .offset-xxl-6 { margin-left: 50%; }
    .offset-xxl-7 { margin-left: 58.33333333%; }
    .offset-xxl-8 { margin-left: 66.66666667%; }
    .offset-xxl-9 { margin-left: 75%; }
    .offset-xxl-10 { margin-left: 83.33333333%; }
    .offset-xxl-11 { margin-left: 91.66666667%; }
  }

/*
* PRINTS | ROWS, COLS, OFFSETS
*/
  @media print { @container (min-width: 222.993px) { /* 59mm */
    .col-sm { flex: 1 0 0%; }
    .col-sm-auto { flex: 0 0 auto; width: auto; }
    .col-sm-1 { flex: 0 0 auto; width: 8.33333333%; }
    .col-sm-2 { flex: 0 0 auto; width: 16.66666667%; }
    .col-sm-3 { flex: 0 0 auto; width: 25%; }
    .col-sm-4 { flex: 0 0 auto; width: 33.33333333%; }
    .col-sm-5 { flex: 0 0 auto; width: 41.66666667%; }
    .col-sm-6 { flex: 0 0 auto; width: 50%; }
    .col-sm-7 { flex: 0 0 auto; width: 58.33333333%; }
    .col-sm-8 { flex: 0 0 auto; width: 66.66666667%; }
    .col-sm-9 { flex: 0 0 auto; width: 75%; }
    .col-sm-10 { flex: 0 0 auto; width: 83.33333333%; }
    .col-sm-11 { flex: 0 0 auto; width: 91.66666667%; }
    .col-sm-12 { flex: 0 0 auto; width: 100%; }

    .offset-sm-0 { margin-left: 0; }
    .offset-sm-1 { margin-left: 8.33333333%; }
    .offset-sm-2 { margin-left: 16.66666667%; }
    .offset-sm-3 { margin-left: 25%; }
    .offset-sm-4 { margin-left: 33.33333333%; }
    .offset-sm-5 { margin-left: 41.66666667%; }
    .offset-sm-6 { margin-left: 50%; }
    .offset-sm-7 { margin-left: 58.33333333%; }
    .offset-sm-8 { margin-left: 66.66666667%; }
    .offset-sm-9 { margin-left: 75%; }
    .offset-sm-10 { margin-left: 83.33333333%; }
    .offset-sm-11 { margin-left: 91.66666667%; }
  }}

  @media print { @container (min-width: 298.584px) { /* 79mm */
    .col-md { flex: 1 0 0%; }
    .col-md-auto { flex: 0 0 auto; width: auto; }
    .col-md-1 { flex: 0 0 auto; width: 8.33333333%; }
    .col-md-2 { flex: 0 0 auto; width: 16.66666667%; }
    .col-md-3 { flex: 0 0 auto; width: 25%; }
    .col-md-4 { flex: 0 0 auto; width: 33.33333333%; }
    .col-md-5 { flex: 0 0 auto; width: 41.66666667%; }
    .col-md-6 { flex: 0 0 auto; width: 50%; }
    .col-md-7 { flex: 0 0 auto; width: 58.33333333%; }
    .col-md-8 { flex: 0 0 auto; width: 66.66666667%; }
    .col-md-9 { flex: 0 0 auto; width: 75%; }
    .col-md-10 { flex: 0 0 auto; width: 83.33333333%; }
    .col-md-11 { flex: 0 0 auto; width: 91.66666667%; }
    .col-md-12 { flex: 0 0 auto; width: 100%; }

    .offset-md-0 { margin-left: 0; }
    .offset-md-1 { margin-left: 8.33333333%; }
    .offset-md-2 { margin-left: 16.66666667%; }
    .offset-md-3 { margin-left: 25%; }
    .offset-md-4 { margin-left: 33.33333333%; }
    .offset-md-5 { margin-left: 41.66666667%; }
    .offset-md-6 { margin-left: 50%; }
    .offset-md-7 { margin-left: 58.33333333%; }
    .offset-md-8 { margin-left: 66.66666667%; }
    .offset-md-9 { margin-left: 75%; }
    .offset-md-10 { margin-left: 83.33333333%; }
    .offset-md-11 { margin-left: 91.66666667%; }
  }}

  @media print { @container (min-width: 336.376px) { /* 89mm */
    .col-lg { flex: 1 0 0%; }
    .col-lg-auto { flex: 0 0 auto; width: auto; }
    .col-lg-1 { flex: 0 0 auto; width: 8.33333333%; }
    .col-lg-2 { flex: 0 0 auto; width: 16.66666667%; }
    .col-lg-3 { flex: 0 0 auto; width: 25%; }
    .col-lg-4 { flex: 0 0 auto; width: 33.33333333%; }
    .col-lg-5 { flex: 0 0 auto; width: 41.66666667%; }
    .col-lg-6 { flex: 0 0 auto; width: 50%; }
    .col-lg-7 { flex: 0 0 auto; width: 58.33333333%; }
    .col-lg-8 { flex: 0 0 auto; width: 66.66666667%; }
    .col-lg-9 { flex: 0 0 auto; width: 75%; }
    .col-lg-10 { flex: 0 0 auto; width: 83.33333333%; }
    .col-lg-11 { flex: 0 0 auto; width: 91.66666667%; }
    .col-lg-12 { flex: 0 0 auto; width: 100%; }

    .offset-lg-0 { margin-left: 0; }
    .offset-lg-1 { margin-left: 8.33333333%; }
    .offset-lg-2 { margin-left: 16.66666667%; }
    .offset-lg-3 { margin-left: 25%; }
    .offset-lg-4 { margin-left: 33.33333333%; }
    .offset-lg-5 { margin-left: 41.66666667%; }
    .offset-lg-6 { margin-left: 50%; }
    .offset-lg-7 { margin-left: 58.33333333%; }
    .offset-lg-8 { margin-left: 66.66666667%; }
    .offset-lg-9 { margin-left: 75%; }
    .offset-lg-10 { margin-left: 83.33333333%; }
    .offset-lg-11 { margin-left: 91.66666667%; }
  }}

  @media print { @container (min-width: 525.334px) { /* 139mm */
    .col-xl { flex: 1 0 0%; }
    .col-xl-auto { flex: 0 0 auto; width: auto; }
    .col-xl-1 { flex: 0 0 auto; width: 8.33333333%; }
    .col-xl-2 { flex: 0 0 auto; width: 16.66666667%; }
    .col-xl-3 { flex: 0 0 auto; width: 25%; }
    .col-xl-4 { flex: 0 0 auto; width: 33.33333333%; }
    .col-xl-5 { flex: 0 0 auto; width: 41.66666667%; }
    .col-xl-6 { flex: 0 0 auto; width: 50%; }
    .col-xl-7 { flex: 0 0 auto; width: 58.33333333%; }
    .col-xl-8 { flex: 0 0 auto; width: 66.66666667%; }
    .col-xl-9 { flex: 0 0 auto; width: 75%; }
    .col-xl-10 { flex: 0 0 auto; width: 83.33333333%; }
    .col-xl-11 { flex: 0 0 auto; width: 91.66666667%; }
    .col-xl-12 { flex: 0 0 auto; width: 100%; }

    .offset-xl-0 { margin-left: 0; }
    .offset-xl-1 { margin-left: 8.33333333%; }
    .offset-xl-2 { margin-left: 16.66666667%; }
    .offset-xl-3 { margin-left: 25%; }
    .offset-xl-4 { margin-left: 33.33333333%; }
    .offset-xl-5 { margin-left: 41.66666667%; }
    .offset-xl-6 { margin-left: 50%; }
    .offset-xl-7 { margin-left: 58.33333333%; }
    .offset-xl-8 { margin-left: 66.66666667%; }
    .offset-xl-9 { margin-left: 75%; }
    .offset-xl-10 { margin-left: 83.33333333%; }
    .offset-xl-11 { margin-left: 91.66666667%; }
  }}

  @media print { @container (min-width: 793.701px) { /* 210mm */
    .col-xxl { flex: 1 0 0%; }
    .col-xxl-auto { flex: 0 0 auto; width: auto; }
    .col-xxl-1 { flex: 0 0 auto; width: 8.33333333%; }
    .col-xxl-2 { flex: 0 0 auto; width: 16.66666667%; }
    .col-xxl-3 { flex: 0 0 auto; width: 25%; }
    .col-xxl-4 { flex: 0 0 auto; width: 33.33333333%; }
    .col-xxl-5 { flex: 0 0 auto; width: 41.66666667%; }
    .col-xxl-6 { flex: 0 0 auto; width: 50%; }
    .col-xxl-7 { flex: 0 0 auto; width: 58.33333333%; }
    .col-xxl-8 { flex: 0 0 auto; width: 66.66666667%; }
    .col-xxl-9 { flex: 0 0 auto; width: 75%; }
    .col-xxl-10 { flex: 0 0 auto; width: 83.33333333%; }
    .col-xxl-11 { flex: 0 0 auto; width: 91.66666667%; }
    .col-xxl-12 { flex: 0 0 auto; width: 100%; }

    .offset-xxl-0 { margin-left: 0; }
    .offset-xxl-1 { margin-left: 8.33333333%; }
    .offset-xxl-2 { margin-left: 16.66666667%; }
    .offset-xxl-3 { margin-left: 25%; }
    .offset-xxl-4 { margin-left: 33.33333333%; }
    .offset-xxl-5 { margin-left: 41.66666667%; }
    .offset-xxl-6 { margin-left: 50%; }
    .offset-xxl-7 { margin-left: 58.33333333%; }
    .offset-xxl-8 { margin-left: 66.66666667%; }
    .offset-xxl-9 { margin-left: 75%; }
    .offset-xxl-10 { margin-left: 83.33333333%; }
    .offset-xxl-11 { margin-left: 91.66666667%; }
  }}




/*
* BASE | DISPLAYS, FLEX, ALIGNS, JUSTIFYS, MARGINS, PADDINGS
*/
  .d-inline { display: inline !important; }
  .d-inline-block { display: inline-block !important; }
  .d-block { display: block !important; }
  .d-grid { display: grid !important; }
  .d-table { display: table !important; }
  .d-table-row { display: table-row !important; }
  .d-table-cell { display: table-cell !important; }
  .d-flex { display: flex !important; }
  .d-inline-flex { display: inline-flex !important; }
  .d-none { display: none !important; }

  .flex-fill { flex: 1 1 auto !important; }
  .flex-row { flex-direction: row !important; }
  .flex-column { flex-direction: column !important; }
  .flex-row-reverse { flex-direction: row-reverse !important; }
  .flex-column-reverse { flex-direction: column-reverse !important; }
  .flex-grow-0 { flex-grow: 0 !important; }
  .flex-grow-1 { flex-grow: 1 !important; }
  .flex-shrink-0 { flex-shrink: 0 !important; }
  .flex-shrink-1 { flex-shrink: 1 !important; }
  .flex-wrap { flex-wrap: wrap !important; }
  .flex-nowrap { flex-wrap: nowrap !important; }
  .flex-wrap-reverse { flex-wrap: wrap-reverse !important; }

  .justify-content-start { justify-content: flex-start !important; }
  .justify-content-end { justify-content: flex-end !important; }
  .justify-content-center { justify-content: center !important; }
  .justify-content-between { justify-content: space-between !important; }
  .justify-content-around { justify-content: space-around !important; }
  .justify-content-evenly { justify-content: space-evenly !important; }

  .align-items-start { align-items: flex-start !important; }
  .align-items-end { align-items: flex-end !important; }
  .align-items-center { align-items: center !important; }
  .align-items-baseline { align-items: baseline !important; }
  .align-items-stretch { align-items: stretch !important; }

  .align-content-start { align-content: flex-start !important; }
  .align-content-end { align-content: flex-end !important; }
  .align-content-center { align-content: center !important; }
  .align-content-between { align-content: space-between !important; }
  .align-content-around { align-content: space-around !important; }
  .align-content-stretch { align-content: stretch !important; }

  .align-self-auto { align-self: auto !important; }
  .align-self-start { align-self: flex-start !important; }
  .align-self-end { align-self: flex-end !important; }
  .align-self-center { align-self: center !important; }
  .align-self-baseline { align-self: baseline !important; }
  .align-self-stretch { align-self: stretch !important; }

  .order-first { order: -1 !important; }
  .order-0 { order: 0 !important; }
  .order-1 { order: 1 !important; }
  .order-2 { order: 2 !important; }
  .order-3 { order: 3 !important; }
  .order-4 { order: 4 !important; }
  .order-5 { order: 5 !important; }
  .order-last { order: 6 !important; }

  .m-0 { margin: 0 !important; }
  .m-1 { margin: 0.25rem !important; }
  .m-2 { margin: 0.5rem !important; }
  .m-3 { margin: 1rem !important; }
  .m-4 { margin: 1.5rem !important; }
  .m-5 { margin: 3rem !important; }
  .m-auto { margin: auto !important; }

  .mx-0 { margin-right: 0 !important; margin-left: 0 !important; }
  .mx-1 { margin-right: 0.25rem !important; margin-left: 0.25rem !important; }
  .mx-2 { margin-right: 0.5rem !important; margin-left: 0.5rem !important; }
  .mx-3 { margin-right: 1rem !important; margin-left: 1rem !important; }
  .mx-4 { margin-right: 1.5rem !important; margin-left: 1.5rem !important; }
  .mx-5 { margin-right: 3rem !important; margin-left: 3rem !important; }
  .mx-auto { margin-right: auto !important; margin-left: auto !important; }

  .my-0 { margin-top: 0 !important; margin-bottom: 0 !important; }
  .my-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
  .my-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
  .my-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
  .my-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
  .my-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
  .my-auto { margin-top: auto !important; margin-bottom: auto !important; }

  .mt-0 { margin-top: 0 !important; }
  .mt-1 { margin-top: 0.25rem !important; }
  .mt-2 { margin-top: 0.5rem !important; }
  .mt-3 { margin-top: 1rem !important; }
  .mt-4 { margin-top: 1.5rem !important; }
  .mt-5 { margin-top: 3rem !important; }
  .mt-auto { margin-top: auto !important; }

  .me-0 { margin-right: 0 !important; }
  .me-1 { margin-right: 0.25rem !important; }
  .me-2 { margin-right: 0.5rem !important; }
  .me-3 { margin-right: 1rem !important; }
  .me-4 { margin-right: 1.5rem !important; }
  .me-5 { margin-right: 3rem !important; }
  .me-auto { margin-right: auto !important; }

  .mb-0 { margin-bottom: 0 !important; }
  .mb-1 { margin-bottom: 0.25rem !important; }
  .mb-2 { margin-bottom: 0.5rem !important; }
  .mb-3 { margin-bottom: 1rem !important; }
  .mb-4 { margin-bottom: 1.5rem !important; }
  .mb-5 { margin-bottom: 3rem !important; }
  .mb-auto { margin-bottom: auto !important; }

  .ms-0 { margin-left: 0 !important; }
  .ms-1 { margin-left: 0.25rem !important; }
  .ms-2 { margin-left: 0.5rem !important; }
  .ms-3 { margin-left: 1rem !important; }
  .ms-4 { margin-left: 1.5rem !important; }
  .ms-5 { margin-left: 3rem !important; }
  .ms-auto { margin-left: auto !important; }

  .p-0 { padding: 0 !important; }
  .p-1 { padding: 0.25rem !important; }
  .p-2 { padding: 0.5rem !important; }
  .p-3 { padding: 1rem !important; }
  .p-4 { padding: 1.5rem !important; }
  .p-5 { padding: 3rem !important; }

  .px-0 { padding-right: 0 !important; padding-left: 0 !important; }
  .px-1 { padding-right: 0.25rem !important; padding-left: 0.25rem !important; }
  .px-2 { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }
  .px-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
  .px-4 { padding-right: 1.5rem !important; padding-left: 1.5rem !important; }
  .px-5 { padding-right: 3rem !important; padding-left: 3rem !important; }

  .py-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
  .py-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
  .py-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
  .py-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
  .py-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
  .py-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }

  .pt-0 { padding-top: 0 !important; }
  .pt-1 { padding-top: 0.25rem !important; }
  .pt-2 { padding-top: 0.5rem !important; }
  .pt-3 { padding-top: 1rem !important; }
  .pt-4 { padding-top: 1.5rem !important; }
  .pt-5 { padding-top: 3rem !important; }

  .pe-0 { padding-right: 0 !important; }
  .pe-1 { padding-right: 0.25rem !important; }
  .pe-2 { padding-right: 0.5rem !important; }
  .pe-3 { padding-right: 1rem !important; }
  .pe-4 { padding-right: 1.5rem !important; }
  .pe-5 { padding-right: 3rem !important; }

  .pb-0 { padding-bottom: 0 !important; }
  .pb-1 { padding-bottom: 0.25rem !important; }
  .pb-2 { padding-bottom: 0.5rem !important; }
  .pb-3 { padding-bottom: 1rem !important; }
  .pb-4 { padding-bottom: 1.5rem !important; }
  .pb-5 { padding-bottom: 3rem !important; }

  .ps-0 { padding-left: 0 !important; }
  .ps-1 { padding-left: 0.25rem !important; }
  .ps-2 { padding-left: 0.5rem !important; }
  .ps-3 { padding-left: 1rem !important; }
  .ps-4 { padding-left: 1.5rem !important; }
  .ps-5 { padding-left: 3rem !important; }

/*
* CONTAINERS | DISPLAYS, FLEX, ALIGNS, JUSTIFYS, MARGINS, PADDINGS
*/
  @container (min-width: 222.993px) { /* 59mm */
    .d-sm-inline { display: inline !important; }
    .d-sm-inline-block { display: inline-block !important; }
    .d-sm-block { display: block !important; }
    .d-sm-grid { display: grid !important; }
    .d-sm-table { display: table !important; }
    .d-sm-table-row { display: table-row !important; }
    .d-sm-table-cell { display: table-cell !important; }
    .d-sm-flex { display: flex !important; }
    .d-sm-inline-flex { display: inline-flex !important; }
    .d-sm-none { display: none !important; }

    .flex-sm-fill { flex: 1 1 auto !important; }
    .flex-sm-row { flex-direction: row !important; }
    .flex-sm-column { flex-direction: column !important; }
    .flex-sm-row-reverse { flex-direction: row-reverse !important; }
    .flex-sm-column-reverse { flex-direction: column-reverse !important; }
    .flex-sm-grow-0 { flex-grow: 0 !important; }
    .flex-sm-grow-1 { flex-grow: 1 !important; }
    .flex-sm-shrink-0 { flex-shrink: 0 !important; }
    .flex-sm-shrink-1 { flex-shrink: 1 !important; }
    .flex-sm-wrap { flex-wrap: wrap !important; }
    .flex-sm-nowrap { flex-wrap: nowrap !important; }
    .flex-sm-wrap-reverse { flex-wrap: wrap-reverse !important; }

    .justify-content-sm-start { justify-content: flex-start !important; }
    .justify-content-sm-end { justify-content: flex-end !important; }
    .justify-content-sm-center { justify-content: center !important; }
    .justify-content-sm-between { justify-content: space-between !important; }
    .justify-content-sm-around { justify-content: space-around !important; }
    .justify-content-sm-evenly { justify-content: space-evenly !important; }

    .align-items-sm-start { align-items: flex-start !important; }
    .align-items-sm-end { align-items: flex-end !important; }
    .align-items-sm-center { align-items: center !important; }
    .align-items-sm-baseline { align-items: baseline !important; }
    .align-items-sm-stretch { align-items: stretch !important; }

    .align-content-sm-start { align-content: flex-start !important; }
    .align-content-sm-end { align-content: flex-end !important; }
    .align-content-sm-center { align-content: center !important; }
    .align-content-sm-between { align-content: space-between !important; }
    .align-content-sm-around { align-content: space-around !important; }
    .align-content-sm-stretch { align-content: stretch !important; }

    .align-self-sm-auto { align-self: auto !important; }
    .align-self-sm-start { align-self: flex-start !important; }
    .align-self-sm-end { align-self: flex-end !important; }
    .align-self-sm-center { align-self: center !important; }
    .align-self-sm-baseline { align-self: baseline !important; }
    .align-self-sm-stretch { align-self: stretch !important; }

    .order-sm-first { order: -1 !important; }
    .order-sm-0 { order: 0 !important; }
    .order-sm-1 { order: 1 !important; }
    .order-sm-2 { order: 2 !important; }
    .order-sm-3 { order: 3 !important; }
    .order-sm-4 { order: 4 !important; }
    .order-sm-5 { order: 5 !important; }
    .order-sm-last { order: 6 !important; }

    .m-sm-0 { margin: 0 !important; }
    .m-sm-1 { margin: 0.25rem !important; }
    .m-sm-2 { margin: 0.5rem !important; }
    .m-sm-3 { margin: 1rem !important; }
    .m-sm-4 { margin: 1.5rem !important; }
    .m-sm-5 { margin: 3rem !important; }
    .m-sm-auto { margin: auto !important; }

    .mx-sm-0 { margin-right: 0 !important; margin-left: 0 !important; }
    .mx-sm-1 { margin-right: 0.25rem !important; margin-left: 0.25rem !important; }
    .mx-sm-2 { margin-right: 0.5rem !important; margin-left: 0.5rem !important; }
    .mx-sm-3 { margin-right: 1rem !important; margin-left: 1rem !important; }
    .mx-sm-4 { margin-right: 1.5rem !important; margin-left: 1.5rem !important; }
    .mx-sm-5 { margin-right: 3rem !important; margin-left: 3rem !important; }
    .mx-sm-auto { margin-right: auto !important; margin-left: auto !important; }

    .my-sm-0 { margin-top: 0 !important; margin-bottom: 0 !important; }
    .my-sm-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
    .my-sm-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
    .my-sm-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
    .my-sm-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
    .my-sm-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
    .my-sm-auto { margin-top: auto !important; margin-bottom: auto !important; }

    .mt-sm-0 { margin-top: 0 !important; }
    .mt-sm-1 { margin-top: 0.25rem !important; }
    .mt-sm-2 { margin-top: 0.5rem !important; }
    .mt-sm-3 { margin-top: 1rem !important; }
    .mt-sm-4 { margin-top: 1.5rem !important; }
    .mt-sm-5 { margin-top: 3rem !important; }
    .mt-sm-auto { margin-top: auto !important; }

    .me-sm-0 { margin-right: 0 !important; }
    .me-sm-1 { margin-right: 0.25rem !important; }
    .me-sm-2 { margin-right: 0.5rem !important; }
    .me-sm-3 { margin-right: 1rem !important; }
    .me-sm-4 { margin-right: 1.5rem !important; }
    .me-sm-5 { margin-right: 3rem !important; }
    .me-sm-auto { margin-right: auto !important; }

    .mb-sm-0 { margin-bottom: 0 !important; }
    .mb-sm-1 { margin-bottom: 0.25rem !important; }
    .mb-sm-2 { margin-bottom: 0.5rem !important; }
    .mb-sm-3 { margin-bottom: 1rem !important; }
    .mb-sm-4 { margin-bottom: 1.5rem !important; }
    .mb-sm-5 { margin-bottom: 3rem !important; }
    .mb-sm-auto { margin-bottom: auto !important; }

    .ms-sm-0 { margin-left: 0 !important; }
    .ms-sm-1 { margin-left: 0.25rem !important; }
    .ms-sm-2 { margin-left: 0.5rem !important; }
    .ms-sm-3 { margin-left: 1rem !important; }
    .ms-sm-4 { margin-left: 1.5rem !important; }
    .ms-sm-5 { margin-left: 3rem !important; }
    .ms-sm-auto { margin-left: auto !important; }

    .p-sm-0 { padding: 0 !important; }
    .p-sm-1 { padding: 0.25rem !important; }
    .p-sm-2 { padding: 0.5rem !important; }
    .p-sm-3 { padding: 1rem !important; }
    .p-sm-4 { padding: 1.5rem !important; }
    .p-sm-5 { padding: 3rem !important; }

    .px-sm-0 { padding-right: 0 !important; padding-left: 0 !important; }
    .px-sm-1 { padding-right: 0.25rem !important; padding-left: 0.25rem !important; }
    .px-sm-2 { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }
    .px-sm-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
    .px-sm-4 { padding-right: 1.5rem !important; padding-left: 1.5rem !important; }
    .px-sm-5 { padding-right: 3rem !important; padding-left: 3rem !important; }

    .py-sm-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
    .py-sm-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
    .py-sm-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
    .py-sm-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
    .py-sm-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
    .py-sm-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }

    .pt-sm-0 { padding-top: 0 !important; }
    .pt-sm-1 { padding-top: 0.25rem !important; }
    .pt-sm-2 { padding-top: 0.5rem !important; }
    .pt-sm-3 { padding-top: 1rem !important; }
    .pt-sm-4 { padding-top: 1.5rem !important; }
    .pt-sm-5 { padding-top: 3rem !important; }

    .pe-sm-0 { padding-right: 0 !important; }
    .pe-sm-1 { padding-right: 0.25rem !important; }
    .pe-sm-2 { padding-right: 0.5rem !important; }
    .pe-sm-3 { padding-right: 1rem !important; }
    .pe-sm-4 { padding-right: 1.5rem !important; }
    .pe-sm-5 { padding-right: 3rem !important; }

    .pb-sm-0 { padding-bottom: 0 !important; }
    .pb-sm-1 { padding-bottom: 0.25rem !important; }
    .pb-sm-2 { padding-bottom: 0.5rem !important; }
    .pb-sm-3 { padding-bottom: 1rem !important; }
    .pb-sm-4 { padding-bottom: 1.5rem !important; }
    .pb-sm-5 { padding-bottom: 3rem !important; }

    .ps-sm-0 { padding-left: 0 !important; }
    .ps-sm-1 { padding-left: 0.25rem !important; }
    .ps-sm-2 { padding-left: 0.5rem !important; }
    .ps-sm-3 { padding-left: 1rem !important; }
    .ps-sm-4 { padding-left: 1.5rem !important; }
    .ps-sm-5 { padding-left: 3rem !important; }
  }

  @container (min-width: 298.584px) { /* 79mm */
    .d-md-inline { display: inline !important; }
    .d-md-inline-block { display: inline-block !important; }
    .d-md-block { display: block !important; }
    .d-md-grid { display: grid !important; }
    .d-md-table { display: table !important; }
    .d-md-table-row { display: table-row !important; }
    .d-md-table-cell { display: table-cell !important; }
    .d-md-flex { display: flex !important; }
    .d-md-inline-flex { display: inline-flex !important; }
    .d-md-none { display: none !important; }

    .flex-md-fill { flex: 1 1 auto !important; }
    .flex-md-row { flex-direction: row !important; }
    .flex-md-column { flex-direction: column !important; }
    .flex-md-row-reverse { flex-direction: row-reverse !important; }
    .flex-md-column-reverse { flex-direction: column-reverse !important; }
    .flex-md-grow-0 { flex-grow: 0 !important; }
    .flex-md-grow-1 { flex-grow: 1 !important; }
    .flex-md-shrink-0 { flex-shrink: 0 !important; }
    .flex-md-shrink-1 { flex-shrink: 1 !important; }
    .flex-md-wrap { flex-wrap: wrap !important; }
    .flex-md-nowrap { flex-wrap: nowrap !important; }
    .flex-md-wrap-reverse { flex-wrap: wrap-reverse !important; }

    .justify-content-md-start { justify-content: flex-start !important; }
    .justify-content-md-end { justify-content: flex-end !important; }
    .justify-content-md-center { justify-content: center !important; }
    .justify-content-md-between { justify-content: space-between !important; }
    .justify-content-md-around { justify-content: space-around !important; }
    .justify-content-md-evenly { justify-content: space-evenly !important; }

    .align-items-md-start { align-items: flex-start !important; }
    .align-items-md-end { align-items: flex-end !important; }
    .align-items-md-center { align-items: center !important; }
    .align-items-md-baseline { align-items: baseline !important; }
    .align-items-md-stretch { align-items: stretch !important; }

    .align-content-md-start { align-content: flex-start !important; }
    .align-content-md-end { align-content: flex-end !important; }
    .align-content-md-center { align-content: center !important; }
    .align-content-md-between { align-content: space-between !important; }
    .align-content-md-around { align-content: space-around !important; }
    .align-content-md-stretch { align-content: stretch !important; }

    .align-self-md-auto { align-self: auto !important; }
    .align-self-md-start { align-self: flex-start !important; }
    .align-self-md-end { align-self: flex-end !important; }
    .align-self-md-center { align-self: center !important; }
    .align-self-md-baseline { align-self: baseline !important; }
    .align-self-md-stretch { align-self: stretch !important; }

    .order-md-first { order: -1 !important; }
    .order-md-0 { order: 0 !important; }
    .order-md-1 { order: 1 !important; }
    .order-md-2 { order: 2 !important; }
    .order-md-3 { order: 3 !important; }
    .order-md-4 { order: 4 !important; }
    .order-md-5 { order: 5 !important; }
    .order-md-last { order: 6 !important; }

    .m-md-0 { margin: 0 !important; }
    .m-md-1 { margin: 0.25rem !important; }
    .m-md-2 { margin: 0.5rem !important; }
    .m-md-3 { margin: 1rem !important; }
    .m-md-4 { margin: 1.5rem !important; }
    .m-md-5 { margin: 3rem !important; }
    .m-md-auto { margin: auto !important; }

    .mx-md-0 { margin-right: 0 !important; margin-left: 0 !important; }
    .mx-md-1 { margin-right: 0.25rem !important; margin-left: 0.25rem !important; }
    .mx-md-2 { margin-right: 0.5rem !important; margin-left: 0.5rem !important; }
    .mx-md-3 { margin-right: 1rem !important; margin-left: 1rem !important; }
    .mx-md-4 { margin-right: 1.5rem !important; margin-left: 1.5rem !important; }
    .mx-md-5 { margin-right: 3rem !important; margin-left: 3rem !important; }
    .mx-md-auto { margin-right: auto !important; margin-left: auto !important; }

    .my-md-0 { margin-top: 0 !important; margin-bottom: 0 !important; }
    .my-md-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
    .my-md-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
    .my-md-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
    .my-md-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
    .my-md-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
    .my-md-auto { margin-top: auto !important; margin-bottom: auto !important; }

    .mt-md-0 { margin-top: 0 !important; }
    .mt-md-1 { margin-top: 0.25rem !important; }
    .mt-md-2 { margin-top: 0.5rem !important; }
    .mt-md-3 { margin-top: 1rem !important; }
    .mt-md-4 { margin-top: 1.5rem !important; }
    .mt-md-5 { margin-top: 3rem !important; }
    .mt-md-auto { margin-top: auto !important; }

    .me-md-0 { margin-right: 0 !important; }
    .me-md-1 { margin-right: 0.25rem !important; }
    .me-md-2 { margin-right: 0.5rem !important; }
    .me-md-3 { margin-right: 1rem !important; }
    .me-md-4 { margin-right: 1.5rem !important; }
    .me-md-5 { margin-right: 3rem !important; }
    .me-md-auto { margin-right: auto !important; }

    .mb-md-0 { margin-bottom: 0 !important; }
    .mb-md-1 { margin-bottom: 0.25rem !important; }
    .mb-md-2 { margin-bottom: 0.5rem !important; }
    .mb-md-3 { margin-bottom: 1rem !important; }
    .mb-md-4 { margin-bottom: 1.5rem !important; }
    .mb-md-5 { margin-bottom: 3rem !important; }
    .mb-md-auto { margin-bottom: auto !important; }

    .ms-md-0 { margin-left: 0 !important; }
    .ms-md-1 { margin-left: 0.25rem !important; }
    .ms-md-2 { margin-left: 0.5rem !important; }
    .ms-md-3 { margin-left: 1rem !important; }
    .ms-md-4 { margin-left: 1.5rem !important; }
    .ms-md-5 { margin-left: 3rem !important; }
    .ms-md-auto { margin-left: auto !important; }

    .p-md-0 { padding: 0 !important; }
    .p-md-1 { padding: 0.25rem !important; }
    .p-md-2 { padding: 0.5rem !important; }
    .p-md-3 { padding: 1rem !important; }
    .p-md-4 { padding: 1.5rem !important; }
    .p-md-5 { padding: 3rem !important; }

    .px-md-0 { padding-right: 0 !important; padding-left: 0 !important; }
    .px-md-1 { padding-right: 0.25rem !important; padding-left: 0.25rem !important; }
    .px-md-2 { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }
    .px-md-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
    .px-md-4 { padding-right: 1.5rem !important; padding-left: 1.5rem !important; }
    .px-md-5 { padding-right: 3rem !important; padding-left: 3rem !important; }

    .py-md-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
    .py-md-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
    .py-md-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
    .py-md-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
    .py-md-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
    .py-md-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }

    .pt-md-0 { padding-top: 0 !important; }
    .pt-md-1 { padding-top: 0.25rem !important; }
    .pt-md-2 { padding-top: 0.5rem !important; }
    .pt-md-3 { padding-top: 1rem !important; }
    .pt-md-4 { padding-top: 1.5rem !important; }
    .pt-md-5 { padding-top: 3rem !important; }

    .pe-md-0 { padding-right: 0 !important; }
    .pe-md-1 { padding-right: 0.25rem !important; }
    .pe-md-2 { padding-right: 0.5rem !important; }
    .pe-md-3 { padding-right: 1rem !important; }
    .pe-md-4 { padding-right: 1.5rem !important; }
    .pe-md-5 { padding-right: 3rem !important; }

    .pb-md-0 { padding-bottom: 0 !important; }
    .pb-md-1 { padding-bottom: 0.25rem !important; }
    .pb-md-2 { padding-bottom: 0.5rem !important; }
    .pb-md-3 { padding-bottom: 1rem !important; }
    .pb-md-4 { padding-bottom: 1.5rem !important; }
    .pb-md-5 { padding-bottom: 3rem !important; }

    .ps-md-0 { padding-left: 0 !important; }
    .ps-md-1 { padding-left: 0.25rem !important; }
    .ps-md-2 { padding-left: 0.5rem !important; }
    .ps-md-3 { padding-left: 1rem !important; }
    .ps-md-4 { padding-left: 1.5rem !important; }
    .ps-md-5 { padding-left: 3rem !important; }
  }

  @container (min-width: 336.376px) { /* 89mm */
    .d-lg-inline { display: inline !important; }
    .d-lg-inline-block { display: inline-block !important; }
    .d-lg-block { display: block !important; }
    .d-lg-grid { display: grid !important; }
    .d-lg-table { display: table !important; }
    .d-lg-table-row { display: table-row !important; }
    .d-lg-table-cell { display: table-cell !important; }
    .d-lg-flex { display: flex !important; }
    .d-lg-inline-flex { display: inline-flex !important; }
    .d-lg-none { display: none !important; }

    .flex-lg-fill { flex: 1 1 auto !important; }
    .flex-lg-row { flex-direction: row !important; }
    .flex-lg-column { flex-direction: column !important; }
    .flex-lg-row-reverse { flex-direction: row-reverse !important; }
    .flex-lg-column-reverse { flex-direction: column-reverse !important; }
    .flex-lg-grow-0 { flex-grow: 0 !important; }
    .flex-lg-grow-1 { flex-grow: 1 !important; }
    .flex-lg-shrink-0 { flex-shrink: 0 !important; }
    .flex-lg-shrink-1 { flex-shrink: 1 !important; }
    .flex-lg-wrap { flex-wrap: wrap !important; }
    .flex-lg-nowrap { flex-wrap: nowrap !important; }
    .flex-lg-wrap-reverse { flex-wrap: wrap-reverse !important; }

    .justify-content-lg-start { justify-content: flex-start !important; }
    .justify-content-lg-end { justify-content: flex-end !important; }
    .justify-content-lg-center { justify-content: center !important; }
    .justify-content-lg-between { justify-content: space-between !important; }
    .justify-content-lg-around { justify-content: space-around !important; }
    .justify-content-lg-evenly { justify-content: space-evenly !important; }

    .align-items-lg-start { align-items: flex-start !important; }
    .align-items-lg-end { align-items: flex-end !important; }
    .align-items-lg-center { align-items: center !important; }
    .align-items-lg-baseline { align-items: baseline !important; }
    .align-items-lg-stretch { align-items: stretch !important; }

    .align-content-lg-start { align-content: flex-start !important; }
    .align-content-lg-end { align-content: flex-end !important; }
    .align-content-lg-center { align-content: center !important; }
    .align-content-lg-between { align-content: space-between !important; }
    .align-content-lg-around { align-content: space-around !important; }
    .align-content-lg-stretch { align-content: stretch !important; }

    .align-self-lg-auto { align-self: auto !important; }
    .align-self-lg-start { align-self: flex-start !important; }
    .align-self-lg-end { align-self: flex-end !important; }
    .align-self-lg-center { align-self: center !important; }
    .align-self-lg-baseline { align-self: baseline !important; }
    .align-self-lg-stretch { align-self: stretch !important; }

    .order-lg-first { order: -1 !important; }
    .order-lg-0 { order: 0 !important; }
    .order-lg-1 { order: 1 !important; }
    .order-lg-2 { order: 2 !important; }
    .order-lg-3 { order: 3 !important; }
    .order-lg-4 { order: 4 !important; }
    .order-lg-5 { order: 5 !important; }
    .order-lg-last { order: 6 !important; }

    .m-lg-0 { margin: 0 !important; }
    .m-lg-1 { margin: 0.25rem !important; }
    .m-lg-2 { margin: 0.5rem !important; }
    .m-lg-3 { margin: 1rem !important; }
    .m-lg-4 { margin: 1.5rem !important; }
    .m-lg-5 { margin: 3rem !important; }
    .m-lg-auto { margin: auto !important; }

    .mx-lg-0 { margin-right: 0 !important; margin-left: 0 !important; }
    .mx-lg-1 { margin-right: 0.25rem !important; margin-left: 0.25rem !important; }
    .mx-lg-2 { margin-right: 0.5rem !important; margin-left: 0.5rem !important; }
    .mx-lg-3 { margin-right: 1rem !important; margin-left: 1rem !important; }
    .mx-lg-4 { margin-right: 1.5rem !important; margin-left: 1.5rem !important; }
    .mx-lg-5 { margin-right: 3rem !important; margin-left: 3rem !important; }
    .mx-lg-auto { margin-right: auto !important; margin-left: auto !important; }

    .my-lg-0 { margin-top: 0 !important; margin-bottom: 0 !important; }
    .my-lg-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
    .my-lg-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
    .my-lg-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
    .my-lg-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
    .my-lg-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
    .my-lg-auto { margin-top: auto !important; margin-bottom: auto !important; }

    .mt-lg-0 { margin-top: 0 !important; }
    .mt-lg-1 { margin-top: 0.25rem !important; }
    .mt-lg-2 { margin-top: 0.5rem !important; }
    .mt-lg-3 { margin-top: 1rem !important; }
    .mt-lg-4 { margin-top: 1.5rem !important; }
    .mt-lg-5 { margin-top: 3rem !important; }
    .mt-lg-auto { margin-top: auto !important; }

    .me-lg-0 { margin-right: 0 !important; }
    .me-lg-1 { margin-right: 0.25rem !important; }
    .me-lg-2 { margin-right: 0.5rem !important; }
    .me-lg-3 { margin-right: 1rem !important; }
    .me-lg-4 { margin-right: 1.5rem !important; }
    .me-lg-5 { margin-right: 3rem !important; }
    .me-lg-auto { margin-right: auto !important; }

    .mb-lg-0 { margin-bottom: 0 !important; }
    .mb-lg-1 { margin-bottom: 0.25rem !important; }
    .mb-lg-2 { margin-bottom: 0.5rem !important; }
    .mb-lg-3 { margin-bottom: 1rem !important; }
    .mb-lg-4 { margin-bottom: 1.5rem !important; }
    .mb-lg-5 { margin-bottom: 3rem !important; }
    .mb-lg-auto { margin-bottom: auto !important; }

    .ms-lg-0 { margin-left: 0 !important; }
    .ms-lg-1 { margin-left: 0.25rem !important; }
    .ms-lg-2 { margin-left: 0.5rem !important; }
    .ms-lg-3 { margin-left: 1rem !important; }
    .ms-lg-4 { margin-left: 1.5rem !important; }
    .ms-lg-5 { margin-left: 3rem !important; }
    .ms-lg-auto { margin-left: auto !important; }

    .p-lg-0 { padding: 0 !important; }
    .p-lg-1 { padding: 0.25rem !important; }
    .p-lg-2 { padding: 0.5rem !important; }
    .p-lg-3 { padding: 1rem !important; }
    .p-lg-4 { padding: 1.5rem !important; }
    .p-lg-5 { padding: 3rem !important; }

    .px-lg-0 { padding-right: 0 !important; padding-left: 0 !important; }
    .px-lg-1 { padding-right: 0.25rem !important; padding-left: 0.25rem !important; }
    .px-lg-2 { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }
    .px-lg-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
    .px-lg-4 { padding-right: 1.5rem !important; padding-left: 1.5rem !important; }
    .px-lg-5 { padding-right: 3rem !important; padding-left: 3rem !important; }

    .py-lg-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
    .py-lg-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
    .py-lg-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
    .py-lg-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
    .py-lg-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
    .py-lg-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }

    .pt-lg-0 { padding-top: 0 !important; }
    .pt-lg-1 { padding-top: 0.25rem !important; }
    .pt-lg-2 { padding-top: 0.5rem !important; }
    .pt-lg-3 { padding-top: 1rem !important; }
    .pt-lg-4 { padding-top: 1.5rem !important; }
    .pt-lg-5 { padding-top: 3rem !important; }

    .pe-lg-0 { padding-right: 0 !important; }
    .pe-lg-1 { padding-right: 0.25rem !important; }
    .pe-lg-2 { padding-right: 0.5rem !important; }
    .pe-lg-3 { padding-right: 1rem !important; }
    .pe-lg-4 { padding-right: 1.5rem !important; }
    .pe-lg-5 { padding-right: 3rem !important; }

    .pb-lg-0 { padding-bottom: 0 !important; }
    .pb-lg-1 { padding-bottom: 0.25rem !important; }
    .pb-lg-2 { padding-bottom: 0.5rem !important; }
    .pb-lg-3 { padding-bottom: 1rem !important; }
    .pb-lg-4 { padding-bottom: 1.5rem !important; }
    .pb-lg-5 { padding-bottom: 3rem !important; }

    .ps-lg-0 { padding-left: 0 !important; }
    .ps-lg-1 { padding-left: 0.25rem !important; }
    .ps-lg-2 { padding-left: 0.5rem !important; }
    .ps-lg-3 { padding-left: 1rem !important; }
    .ps-lg-4 { padding-left: 1.5rem !important; }
    .ps-lg-5 { padding-left: 3rem !important; }
  }

  @container (min-width: 525.334px) { /* 139mm */
    .d-xl-inline { display: inline !important; }
    .d-xl-inline-block { display: inline-block !important; }
    .d-xl-block { display: block !important; }
    .d-xl-grid { display: grid !important; }
    .d-xl-table { display: table !important; }
    .d-xl-table-row { display: table-row !important; }
    .d-xl-table-cell { display: table-cell !important; }
    .d-xl-flex { display: flex !important; }
    .d-xl-inline-flex { display: inline-flex !important; }
    .d-xl-none { display: none !important; }

    .flex-xl-fill { flex: 1 1 auto !important; }
    .flex-xl-row { flex-direction: row !important; }
    .flex-xl-column { flex-direction: column !important; }
    .flex-xl-row-reverse { flex-direction: row-reverse !important; }
    .flex-xl-column-reverse { flex-direction: column-reverse !important; }
    .flex-xl-grow-0 { flex-grow: 0 !important; }
    .flex-xl-grow-1 { flex-grow: 1 !important; }
    .flex-xl-shrink-0 { flex-shrink: 0 !important; }
    .flex-xl-shrink-1 { flex-shrink: 1 !important; }
    .flex-xl-wrap { flex-wrap: wrap !important; }
    .flex-xl-nowrap { flex-wrap: nowrap !important; }
    .flex-xl-wrap-reverse { flex-wrap: wrap-reverse !important; }

    .justify-content-xl-start { justify-content: flex-start !important; }
    .justify-content-xl-end { justify-content: flex-end !important; }
    .justify-content-xl-center { justify-content: center !important; }
    .justify-content-xl-between { justify-content: space-between !important; }
    .justify-content-xl-around { justify-content: space-around !important; }
    .justify-content-xl-evenly { justify-content: space-evenly !important; }

    .align-items-xl-start { align-items: flex-start !important; }
    .align-items-xl-end { align-items: flex-end !important; }
    .align-items-xl-center { align-items: center !important; }
    .align-items-xl-baseline { align-items: baseline !important; }
    .align-items-xl-stretch { align-items: stretch !important; }

    .align-content-xl-start { align-content: flex-start !important; }
    .align-content-xl-end { align-content: flex-end !important; }
    .align-content-xl-center { align-content: center !important; }
    .align-content-xl-between { align-content: space-between !important; }
    .align-content-xl-around { align-content: space-around !important; }
    .align-content-xl-stretch { align-content: stretch !important; }

    .align-self-xl-auto { align-self: auto !important; }
    .align-self-xl-start { align-self: flex-start !important; }
    .align-self-xl-end { align-self: flex-end !important; }
    .align-self-xl-center { align-self: center !important; }
    .align-self-xl-baseline { align-self: baseline !important; }
    .align-self-xl-stretch { align-self: stretch !important; }

    .order-xl-first { order: -1 !important; }
    .order-xl-0 { order: 0 !important; }
    .order-xl-1 { order: 1 !important; }
    .order-xl-2 { order: 2 !important; }
    .order-xl-3 { order: 3 !important; }
    .order-xl-4 { order: 4 !important; }
    .order-xl-5 { order: 5 !important; }
    .order-xl-last { order: 6 !important; }

    .m-xl-0 { margin: 0 !important; }
    .m-xl-1 { margin: 0.25rem !important; }
    .m-xl-2 { margin: 0.5rem !important; }
    .m-xl-3 { margin: 1rem !important; }
    .m-xl-4 { margin: 1.5rem !important; }
    .m-xl-5 { margin: 3rem !important; }
    .m-xl-auto { margin: auto !important; }

    .mx-xl-0 { margin-right: 0 !important; margin-left: 0 !important; }
    .mx-xl-1 { margin-right: 0.25rem !important; margin-left: 0.25rem !important; }
    .mx-xl-2 { margin-right: 0.5rem !important; margin-left: 0.5rem !important; }
    .mx-xl-3 { margin-right: 1rem !important; margin-left: 1rem !important; }
    .mx-xl-4 { margin-right: 1.5rem !important; margin-left: 1.5rem !important; }
    .mx-xl-5 { margin-right: 3rem !important; margin-left: 3rem !important; }
    .mx-xl-auto { margin-right: auto !important; margin-left: auto !important; }

    .my-xl-0 { margin-top: 0 !important; margin-bottom: 0 !important; }
    .my-xl-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
    .my-xl-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
    .my-xl-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
    .my-xl-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
    .my-xl-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
    .my-xl-auto { margin-top: auto !important; margin-bottom: auto !important; }

    .mt-xl-0 { margin-top: 0 !important; }
    .mt-xl-1 { margin-top: 0.25rem !important; }
    .mt-xl-2 { margin-top: 0.5rem !important; }
    .mt-xl-3 { margin-top: 1rem !important; }
    .mt-xl-4 { margin-top: 1.5rem !important; }
    .mt-xl-5 { margin-top: 3rem !important; }
    .mt-xl-auto { margin-top: auto !important; }

    .me-xl-0 { margin-right: 0 !important; }
    .me-xl-1 { margin-right: 0.25rem !important; }
    .me-xl-2 { margin-right: 0.5rem !important; }
    .me-xl-3 { margin-right: 1rem !important; }
    .me-xl-4 { margin-right: 1.5rem !important; }
    .me-xl-5 { margin-right: 3rem !important; }
    .me-xl-auto { margin-right: auto !important; }

    .mb-xl-0 { margin-bottom: 0 !important; }
    .mb-xl-1 { margin-bottom: 0.25rem !important; }
    .mb-xl-2 { margin-bottom: 0.5rem !important; }
    .mb-xl-3 { margin-bottom: 1rem !important; }
    .mb-xl-4 { margin-bottom: 1.5rem !important; }
    .mb-xl-5 { margin-bottom: 3rem !important; }
    .mb-xl-auto { margin-bottom: auto !important; }

    .ms-xl-0 { margin-left: 0 !important; }
    .ms-xl-1 { margin-left: 0.25rem !important; }
    .ms-xl-2 { margin-left: 0.5rem !important; }
    .ms-xl-3 { margin-left: 1rem !important; }
    .ms-xl-4 { margin-left: 1.5rem !important; }
    .ms-xl-5 { margin-left: 3rem !important; }
    .ms-xl-auto { margin-left: auto !important; }

    .p-xl-0 { padding: 0 !important; }
    .p-xl-1 { padding: 0.25rem !important; }
    .p-xl-2 { padding: 0.5rem !important; }
    .p-xl-3 { padding: 1rem !important; }
    .p-xl-4 { padding: 1.5rem !important; }
    .p-xl-5 { padding: 3rem !important; }

    .px-xl-0 { padding-right: 0 !important; padding-left: 0 !important; }
    .px-xl-1 { padding-right: 0.25rem !important; padding-left: 0.25rem !important; }
    .px-xl-2 { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }
    .px-xl-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
    .px-xl-4 { padding-right: 1.5rem !important; padding-left: 1.5rem !important; }
    .px-xl-5 { padding-right: 3rem !important; padding-left: 3rem !important; }

    .py-xl-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
    .py-xl-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
    .py-xl-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
    .py-xl-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
    .py-xl-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
    .py-xl-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }

    .pt-xl-0 { padding-top: 0 !important; }
    .pt-xl-1 { padding-top: 0.25rem !important; }
    .pt-xl-2 { padding-top: 0.5rem !important; }
    .pt-xl-3 { padding-top: 1rem !important; }
    .pt-xl-4 { padding-top: 1.5rem !important; }
    .pt-xl-5 { padding-top: 3rem !important; }

    .pe-xl-0 { padding-right: 0 !important; }
    .pe-xl-1 { padding-right: 0.25rem !important; }
    .pe-xl-2 { padding-right: 0.5rem !important; }
    .pe-xl-3 { padding-right: 1rem !important; }
    .pe-xl-4 { padding-right: 1.5rem !important; }
    .pe-xl-5 { padding-right: 3rem !important; }

    .pb-xl-0 { padding-bottom: 0 !important; }
    .pb-xl-1 { padding-bottom: 0.25rem !important; }
    .pb-xl-2 { padding-bottom: 0.5rem !important; }
    .pb-xl-3 { padding-bottom: 1rem !important; }
    .pb-xl-4 { padding-bottom: 1.5rem !important; }
    .pb-xl-5 { padding-bottom: 3rem !important; }

    .ps-xl-0 { padding-left: 0 !important; }
    .ps-xl-1 { padding-left: 0.25rem !important; }
    .ps-xl-2 { padding-left: 0.5rem !important; }
    .ps-xl-3 { padding-left: 1rem !important; }
    .ps-xl-4 { padding-left: 1.5rem !important; }
    .ps-xl-5 { padding-left: 3rem !important; }
  }

  @container (min-width: 793.701px) { /* 210mm */
    .d-xxl-inline { display: inline !important; }
    .d-xxl-inline-block { display: inline-block !important; }
    .d-xxl-block { display: block !important; }
    .d-xxl-grid { display: grid !important; }
    .d-xxl-table { display: table !important; }
    .d-xxl-table-row { display: table-row !important; }
    .d-xxl-table-cell { display: table-cell !important; }
    .d-xxl-flex { display: flex !important; }
    .d-xxl-inline-flex { display: inline-flex !important; }
    .d-xxl-none { display: none !important; }

    .flex-xxl-fill { flex: 1 1 auto !important; }
    .flex-xxl-row { flex-direction: row !important; }
    .flex-xxl-column { flex-direction: column !important; }
    .flex-xxl-row-reverse { flex-direction: row-reverse !important; }
    .flex-xxl-column-reverse { flex-direction: column-reverse !important; }
    .flex-xxl-grow-0 { flex-grow: 0 !important; }
    .flex-xxl-grow-1 { flex-grow: 1 !important; }
    .flex-xxl-shrink-0 { flex-shrink: 0 !important; }
    .flex-xxl-shrink-1 { flex-shrink: 1 !important; }
    .flex-xxl-wrap { flex-wrap: wrap !important; }
    .flex-xxl-nowrap { flex-wrap: nowrap !important; }
    .flex-xxl-wrap-reverse { flex-wrap: wrap-reverse !important; }

    .justify-content-xxl-start { justify-content: flex-start !important; }
    .justify-content-xxl-end { justify-content: flex-end !important; }
    .justify-content-xxl-center { justify-content: center !important; }
    .justify-content-xxl-between { justify-content: space-between !important; }
    .justify-content-xxl-around { justify-content: space-around !important; }
    .justify-content-xxl-evenly { justify-content: space-evenly !important; }

    .align-items-xxl-start { align-items: flex-start !important; }
    .align-items-xxl-end { align-items: flex-end !important; }
    .align-items-xxl-center { align-items: center !important; }
    .align-items-xxl-baseline { align-items: baseline !important; }
    .align-items-xxl-stretch { align-items: stretch !important; }

    .align-content-xxl-start { align-content: flex-start !important; }
    .align-content-xxl-end { align-content: flex-end !important; }
    .align-content-xxl-center { align-content: center !important; }
    .align-content-xxl-between { align-content: space-between !important; }
    .align-content-xxl-around { align-content: space-around !important; }
    .align-content-xxl-stretch { align-content: stretch !important; }

    .align-self-xxl-auto { align-self: auto !important; }
    .align-self-xxl-start { align-self: flex-start !important; }
    .align-self-xxl-end { align-self: flex-end !important; }
    .align-self-xxl-center { align-self: center !important; }
    .align-self-xxl-baseline { align-self: baseline !important; }
    .align-self-xxl-stretch { align-self: stretch !important; }

    .order-xxl-first { order: -1 !important; }
    .order-xxl-0 { order: 0 !important; }
    .order-xxl-1 { order: 1 !important; }
    .order-xxl-2 { order: 2 !important; }
    .order-xxl-3 { order: 3 !important; }
    .order-xxl-4 { order: 4 !important; }
    .order-xxl-5 { order: 5 !important; }
    .order-xxl-last { order: 6 !important; }

    .m-xxl-0 { margin: 0 !important; }
    .m-xxl-1 { margin: 0.25rem !important; }
    .m-xxl-2 { margin: 0.5rem !important; }
    .m-xxl-3 { margin: 1rem !important; }
    .m-xxl-4 { margin: 1.5rem !important; }
    .m-xxl-5 { margin: 3rem !important; }
    .m-xxl-auto { margin: auto !important; }

    .mx-xxl-0 { margin-right: 0 !important; margin-left: 0 !important; }
    .mx-xxl-1 { margin-right: 0.25rem !important; margin-left: 0.25rem !important; }
    .mx-xxl-2 { margin-right: 0.5rem !important; margin-left: 0.5rem !important; }
    .mx-xxl-3 { margin-right: 1rem !important; margin-left: 1rem !important; }
    .mx-xxl-4 { margin-right: 1.5rem !important; margin-left: 1.5rem !important; }
    .mx-xxl-5 { margin-right: 3rem !important; margin-left: 3rem !important; }
    .mx-xxl-auto { margin-right: auto !important; margin-left: auto !important; }

    .my-xxl-0 { margin-top: 0 !important; margin-bottom: 0 !important; }
    .my-xxl-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
    .my-xxl-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
    .my-xxl-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
    .my-xxl-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
    .my-xxl-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
    .my-xxl-auto { margin-top: auto !important; margin-bottom: auto !important; }

    .mt-xxl-0 { margin-top: 0 !important; }
    .mt-xxl-1 { margin-top: 0.25rem !important; }
    .mt-xxl-2 { margin-top: 0.5rem !important; }
    .mt-xxl-3 { margin-top: 1rem !important; }
    .mt-xxl-4 { margin-top: 1.5rem !important; }
    .mt-xxl-5 { margin-top: 3rem !important; }
    .mt-xxl-auto { margin-top: auto !important; }

    .me-xxl-0 { margin-right: 0 !important; }
    .me-xxl-1 { margin-right: 0.25rem !important; }
    .me-xxl-2 { margin-right: 0.5rem !important; }
    .me-xxl-3 { margin-right: 1rem !important; }
    .me-xxl-4 { margin-right: 1.5rem !important; }
    .me-xxl-5 { margin-right: 3rem !important; }
    .me-xxl-auto { margin-right: auto !important; }

    .mb-xxl-0 { margin-bottom: 0 !important; }
    .mb-xxl-1 { margin-bottom: 0.25rem !important; }
    .mb-xxl-2 { margin-bottom: 0.5rem !important; }
    .mb-xxl-3 { margin-bottom: 1rem !important; }
    .mb-xxl-4 { margin-bottom: 1.5rem !important; }
    .mb-xxl-5 { margin-bottom: 3rem !important; }
    .mb-xxl-auto { margin-bottom: auto !important; }

    .ms-xxl-0 { margin-left: 0 !important; }
    .ms-xxl-1 { margin-left: 0.25rem !important; }
    .ms-xxl-2 { margin-left: 0.5rem !important; }
    .ms-xxl-3 { margin-left: 1rem !important; }
    .ms-xxl-4 { margin-left: 1.5rem !important; }
    .ms-xxl-5 { margin-left: 3rem !important; }
    .ms-xxl-auto { margin-left: auto !important; }

    .p-xxl-0 { padding: 0 !important; }
    .p-xxl-1 { padding: 0.25rem !important; }
    .p-xxl-2 { padding: 0.5rem !important; }
    .p-xxl-3 { padding: 1rem !important; }
    .p-xxl-4 { padding: 1.5rem !important; }
    .p-xxl-5 { padding: 3rem !important; }

    .px-xxl-0 { padding-right: 0 !important; padding-left: 0 !important; }
    .px-xxl-1 { padding-right: 0.25rem !important; padding-left: 0.25rem !important; }
    .px-xxl-2 { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }
    .px-xxl-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
    .px-xxl-4 { padding-right: 1.5rem !important; padding-left: 1.5rem !important; }
    .px-xxl-5 { padding-right: 3rem !important; padding-left: 3rem !important; }

    .py-xxl-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
    .py-xxl-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
    .py-xxl-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
    .py-xxl-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
    .py-xxl-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
    .py-xxl-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }

    .pt-xxl-0 { padding-top: 0 !important; }
    .pt-xxl-1 { padding-top: 0.25rem !important; }
    .pt-xxl-2 { padding-top: 0.5rem !important; }
    .pt-xxl-3 { padding-top: 1rem !important; }
    .pt-xxl-4 { padding-top: 1.5rem !important; }
    .pt-xxl-5 { padding-top: 3rem !important; }

    .pe-xxl-0 { padding-right: 0 !important; }
    .pe-xxl-1 { padding-right: 0.25rem !important; }
    .pe-xxl-2 { padding-right: 0.5rem !important; }
    .pe-xxl-3 { padding-right: 1rem !important; }
    .pe-xxl-4 { padding-right: 1.5rem !important; }
    .pe-xxl-5 { padding-right: 3rem !important; }

    .pb-xxl-0 { padding-bottom: 0 !important; }
    .pb-xxl-1 { padding-bottom: 0.25rem !important; }
    .pb-xxl-2 { padding-bottom: 0.5rem !important; }
    .pb-xxl-3 { padding-bottom: 1rem !important; }
    .pb-xxl-4 { padding-bottom: 1.5rem !important; }
    .pb-xxl-5 { padding-bottom: 3rem !important; }

    .ps-xxl-0 { padding-left: 0 !important; }
    .ps-xxl-1 { padding-left: 0.25rem !important; }
    .ps-xxl-2 { padding-left: 0.5rem !important; }
    .ps-xxl-3 { padding-left: 1rem !important; }
    .ps-xxl-4 { padding-left: 1.5rem !important; }
    .ps-xxl-5 { padding-left: 3rem !important; }
  }

/*
* PRINTS | DISPLAYS, FLEX, ALIGNS, JUSTIFYS, MARGINS, PADDINGS
*/
  @media print { @container (min-width: 222.993px) { /* 59mm */
    .d-sm-inline { display: inline !important; }
    .d-sm-inline-block { display: inline-block !important; }
    .d-sm-block { display: block !important; }
    .d-sm-grid { display: grid !important; }
    .d-sm-table { display: table !important; }
    .d-sm-table-row { display: table-row !important; }
    .d-sm-table-cell { display: table-cell !important; }
    .d-sm-flex { display: flex !important; }
    .d-sm-inline-flex { display: inline-flex !important; }
    .d-sm-none { display: none !important; }

    .flex-sm-fill { flex: 1 1 auto !important; }
    .flex-sm-row { flex-direction: row !important; }
    .flex-sm-column { flex-direction: column !important; }
    .flex-sm-row-reverse { flex-direction: row-reverse !important; }
    .flex-sm-column-reverse { flex-direction: column-reverse !important; }
    .flex-sm-grow-0 { flex-grow: 0 !important; }
    .flex-sm-grow-1 { flex-grow: 1 !important; }
    .flex-sm-shrink-0 { flex-shrink: 0 !important; }
    .flex-sm-shrink-1 { flex-shrink: 1 !important; }
    .flex-sm-wrap { flex-wrap: wrap !important; }
    .flex-sm-nowrap { flex-wrap: nowrap !important; }
    .flex-sm-wrap-reverse { flex-wrap: wrap-reverse !important; }

    .justify-content-sm-start { justify-content: flex-start !important; }
    .justify-content-sm-end { justify-content: flex-end !important; }
    .justify-content-sm-center { justify-content: center !important; }
    .justify-content-sm-between { justify-content: space-between !important; }
    .justify-content-sm-around { justify-content: space-around !important; }
    .justify-content-sm-evenly { justify-content: space-evenly !important; }

    .align-items-sm-start { align-items: flex-start !important; }
    .align-items-sm-end { align-items: flex-end !important; }
    .align-items-sm-center { align-items: center !important; }
    .align-items-sm-baseline { align-items: baseline !important; }
    .align-items-sm-stretch { align-items: stretch !important; }

    .align-content-sm-start { align-content: flex-start !important; }
    .align-content-sm-end { align-content: flex-end !important; }
    .align-content-sm-center { align-content: center !important; }
    .align-content-sm-between { align-content: space-between !important; }
    .align-content-sm-around { align-content: space-around !important; }
    .align-content-sm-stretch { align-content: stretch !important; }

    .align-self-sm-auto { align-self: auto !important; }
    .align-self-sm-start { align-self: flex-start !important; }
    .align-self-sm-end { align-self: flex-end !important; }
    .align-self-sm-center { align-self: center !important; }
    .align-self-sm-baseline { align-self: baseline !important; }
    .align-self-sm-stretch { align-self: stretch !important; }

    .order-sm-first { order: -1 !important; }
    .order-sm-0 { order: 0 !important; }
    .order-sm-1 { order: 1 !important; }
    .order-sm-2 { order: 2 !important; }
    .order-sm-3 { order: 3 !important; }
    .order-sm-4 { order: 4 !important; }
    .order-sm-5 { order: 5 !important; }
    .order-sm-last { order: 6 !important; }

    .m-sm-0 { margin: 0 !important; }
    .m-sm-1 { margin: 0.25rem !important; }
    .m-sm-2 { margin: 0.5rem !important; }
    .m-sm-3 { margin: 1rem !important; }
    .m-sm-4 { margin: 1.5rem !important; }
    .m-sm-5 { margin: 3rem !important; }
    .m-sm-auto { margin: auto !important; }

    .mx-sm-0 { margin-right: 0 !important; margin-left: 0 !important; }
    .mx-sm-1 { margin-right: 0.25rem !important; margin-left: 0.25rem !important; }
    .mx-sm-2 { margin-right: 0.5rem !important; margin-left: 0.5rem !important; }
    .mx-sm-3 { margin-right: 1rem !important; margin-left: 1rem !important; }
    .mx-sm-4 { margin-right: 1.5rem !important; margin-left: 1.5rem !important; }
    .mx-sm-5 { margin-right: 3rem !important; margin-left: 3rem !important; }
    .mx-sm-auto { margin-right: auto !important; margin-left: auto !important; }

    .my-sm-0 { margin-top: 0 !important; margin-bottom: 0 !important; }
    .my-sm-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
    .my-sm-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
    .my-sm-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
    .my-sm-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
    .my-sm-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
    .my-sm-auto { margin-top: auto !important; margin-bottom: auto !important; }

    .mt-sm-0 { margin-top: 0 !important; }
    .mt-sm-1 { margin-top: 0.25rem !important; }
    .mt-sm-2 { margin-top: 0.5rem !important; }
    .mt-sm-3 { margin-top: 1rem !important; }
    .mt-sm-4 { margin-top: 1.5rem !important; }
    .mt-sm-5 { margin-top: 3rem !important; }
    .mt-sm-auto { margin-top: auto !important; }

    .me-sm-0 { margin-right: 0 !important; }
    .me-sm-1 { margin-right: 0.25rem !important; }
    .me-sm-2 { margin-right: 0.5rem !important; }
    .me-sm-3 { margin-right: 1rem !important; }
    .me-sm-4 { margin-right: 1.5rem !important; }
    .me-sm-5 { margin-right: 3rem !important; }
    .me-sm-auto { margin-right: auto !important; }

    .mb-sm-0 { margin-bottom: 0 !important; }
    .mb-sm-1 { margin-bottom: 0.25rem !important; }
    .mb-sm-2 { margin-bottom: 0.5rem !important; }
    .mb-sm-3 { margin-bottom: 1rem !important; }
    .mb-sm-4 { margin-bottom: 1.5rem !important; }
    .mb-sm-5 { margin-bottom: 3rem !important; }
    .mb-sm-auto { margin-bottom: auto !important; }

    .ms-sm-0 { margin-left: 0 !important; }
    .ms-sm-1 { margin-left: 0.25rem !important; }
    .ms-sm-2 { margin-left: 0.5rem !important; }
    .ms-sm-3 { margin-left: 1rem !important; }
    .ms-sm-4 { margin-left: 1.5rem !important; }
    .ms-sm-5 { margin-left: 3rem !important; }
    .ms-sm-auto { margin-left: auto !important; }

    .p-sm-0 { padding: 0 !important; }
    .p-sm-1 { padding: 0.25rem !important; }
    .p-sm-2 { padding: 0.5rem !important; }
    .p-sm-3 { padding: 1rem !important; }
    .p-sm-4 { padding: 1.5rem !important; }
    .p-sm-5 { padding: 3rem !important; }

    .px-sm-0 { padding-right: 0 !important; padding-left: 0 !important; }
    .px-sm-1 { padding-right: 0.25rem !important; padding-left: 0.25rem !important; }
    .px-sm-2 { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }
    .px-sm-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
    .px-sm-4 { padding-right: 1.5rem !important; padding-left: 1.5rem !important; }
    .px-sm-5 { padding-right: 3rem !important; padding-left: 3rem !important; }

    .py-sm-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
    .py-sm-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
    .py-sm-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
    .py-sm-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
    .py-sm-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
    .py-sm-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }

    .pt-sm-0 { padding-top: 0 !important; }
    .pt-sm-1 { padding-top: 0.25rem !important; }
    .pt-sm-2 { padding-top: 0.5rem !important; }
    .pt-sm-3 { padding-top: 1rem !important; }
    .pt-sm-4 { padding-top: 1.5rem !important; }
    .pt-sm-5 { padding-top: 3rem !important; }

    .pe-sm-0 { padding-right: 0 !important; }
    .pe-sm-1 { padding-right: 0.25rem !important; }
    .pe-sm-2 { padding-right: 0.5rem !important; }
    .pe-sm-3 { padding-right: 1rem !important; }
    .pe-sm-4 { padding-right: 1.5rem !important; }
    .pe-sm-5 { padding-right: 3rem !important; }

    .pb-sm-0 { padding-bottom: 0 !important; }
    .pb-sm-1 { padding-bottom: 0.25rem !important; }
    .pb-sm-2 { padding-bottom: 0.5rem !important; }
    .pb-sm-3 { padding-bottom: 1rem !important; }
    .pb-sm-4 { padding-bottom: 1.5rem !important; }
    .pb-sm-5 { padding-bottom: 3rem !important; }

    .ps-sm-0 { padding-left: 0 !important; }
    .ps-sm-1 { padding-left: 0.25rem !important; }
    .ps-sm-2 { padding-left: 0.5rem !important; }
    .ps-sm-3 { padding-left: 1rem !important; }
    .ps-sm-4 { padding-left: 1.5rem !important; }
    .ps-sm-5 { padding-left: 3rem !important; }
  }}

  @media print { @container (min-width: 298.584px) { /* 79mm */
    .d-md-inline { display: inline !important; }
    .d-md-inline-block { display: inline-block !important; }
    .d-md-block { display: block !important; }
    .d-md-grid { display: grid !important; }
    .d-md-table { display: table !important; }
    .d-md-table-row { display: table-row !important; }
    .d-md-table-cell { display: table-cell !important; }
    .d-md-flex { display: flex !important; }
    .d-md-inline-flex { display: inline-flex !important; }
    .d-md-none { display: none !important; }

    .flex-md-fill { flex: 1 1 auto !important; }
    .flex-md-row { flex-direction: row !important; }
    .flex-md-column { flex-direction: column !important; }
    .flex-md-row-reverse { flex-direction: row-reverse !important; }
    .flex-md-column-reverse { flex-direction: column-reverse !important; }
    .flex-md-grow-0 { flex-grow: 0 !important; }
    .flex-md-grow-1 { flex-grow: 1 !important; }
    .flex-md-shrink-0 { flex-shrink: 0 !important; }
    .flex-md-shrink-1 { flex-shrink: 1 !important; }
    .flex-md-wrap { flex-wrap: wrap !important; }
    .flex-md-nowrap { flex-wrap: nowrap !important; }
    .flex-md-wrap-reverse { flex-wrap: wrap-reverse !important; }

    .justify-content-md-start { justify-content: flex-start !important; }
    .justify-content-md-end { justify-content: flex-end !important; }
    .justify-content-md-center { justify-content: center !important; }
    .justify-content-md-between { justify-content: space-between !important; }
    .justify-content-md-around { justify-content: space-around !important; }
    .justify-content-md-evenly { justify-content: space-evenly !important; }

    .align-items-md-start { align-items: flex-start !important; }
    .align-items-md-end { align-items: flex-end !important; }
    .align-items-md-center { align-items: center !important; }
    .align-items-md-baseline { align-items: baseline !important; }
    .align-items-md-stretch { align-items: stretch !important; }

    .align-content-md-start { align-content: flex-start !important; }
    .align-content-md-end { align-content: flex-end !important; }
    .align-content-md-center { align-content: center !important; }
    .align-content-md-between { align-content: space-between !important; }
    .align-content-md-around { align-content: space-around !important; }
    .align-content-md-stretch { align-content: stretch !important; }

    .align-self-md-auto { align-self: auto !important; }
    .align-self-md-start { align-self: flex-start !important; }
    .align-self-md-end { align-self: flex-end !important; }
    .align-self-md-center { align-self: center !important; }
    .align-self-md-baseline { align-self: baseline !important; }
    .align-self-md-stretch { align-self: stretch !important; }

    .order-md-first { order: -1 !important; }
    .order-md-0 { order: 0 !important; }
    .order-md-1 { order: 1 !important; }
    .order-md-2 { order: 2 !important; }
    .order-md-3 { order: 3 !important; }
    .order-md-4 { order: 4 !important; }
    .order-md-5 { order: 5 !important; }
    .order-md-last { order: 6 !important; }

    .m-md-0 { margin: 0 !important; }
    .m-md-1 { margin: 0.25rem !important; }
    .m-md-2 { margin: 0.5rem !important; }
    .m-md-3 { margin: 1rem !important; }
    .m-md-4 { margin: 1.5rem !important; }
    .m-md-5 { margin: 3rem !important; }
    .m-md-auto { margin: auto !important; }

    .mx-md-0 { margin-right: 0 !important; margin-left: 0 !important; }
    .mx-md-1 { margin-right: 0.25rem !important; margin-left: 0.25rem !important; }
    .mx-md-2 { margin-right: 0.5rem !important; margin-left: 0.5rem !important; }
    .mx-md-3 { margin-right: 1rem !important; margin-left: 1rem !important; }
    .mx-md-4 { margin-right: 1.5rem !important; margin-left: 1.5rem !important; }
    .mx-md-5 { margin-right: 3rem !important; margin-left: 3rem !important; }
    .mx-md-auto { margin-right: auto !important; margin-left: auto !important; }

    .my-md-0 { margin-top: 0 !important; margin-bottom: 0 !important; }
    .my-md-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
    .my-md-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
    .my-md-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
    .my-md-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
    .my-md-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
    .my-md-auto { margin-top: auto !important; margin-bottom: auto !important; }

    .mt-md-0 { margin-top: 0 !important; }
    .mt-md-1 { margin-top: 0.25rem !important; }
    .mt-md-2 { margin-top: 0.5rem !important; }
    .mt-md-3 { margin-top: 1rem !important; }
    .mt-md-4 { margin-top: 1.5rem !important; }
    .mt-md-5 { margin-top: 3rem !important; }
    .mt-md-auto { margin-top: auto !important; }

    .me-md-0 { margin-right: 0 !important; }
    .me-md-1 { margin-right: 0.25rem !important; }
    .me-md-2 { margin-right: 0.5rem !important; }
    .me-md-3 { margin-right: 1rem !important; }
    .me-md-4 { margin-right: 1.5rem !important; }
    .me-md-5 { margin-right: 3rem !important; }
    .me-md-auto { margin-right: auto !important; }

    .mb-md-0 { margin-bottom: 0 !important; }
    .mb-md-1 { margin-bottom: 0.25rem !important; }
    .mb-md-2 { margin-bottom: 0.5rem !important; }
    .mb-md-3 { margin-bottom: 1rem !important; }
    .mb-md-4 { margin-bottom: 1.5rem !important; }
    .mb-md-5 { margin-bottom: 3rem !important; }
    .mb-md-auto { margin-bottom: auto !important; }

    .ms-md-0 { margin-left: 0 !important; }
    .ms-md-1 { margin-left: 0.25rem !important; }
    .ms-md-2 { margin-left: 0.5rem !important; }
    .ms-md-3 { margin-left: 1rem !important; }
    .ms-md-4 { margin-left: 1.5rem !important; }
    .ms-md-5 { margin-left: 3rem !important; }
    .ms-md-auto { margin-left: auto !important; }

    .p-md-0 { padding: 0 !important; }
    .p-md-1 { padding: 0.25rem !important; }
    .p-md-2 { padding: 0.5rem !important; }
    .p-md-3 { padding: 1rem !important; }
    .p-md-4 { padding: 1.5rem !important; }
    .p-md-5 { padding: 3rem !important; }

    .px-md-0 { padding-right: 0 !important; padding-left: 0 !important; }
    .px-md-1 { padding-right: 0.25rem !important; padding-left: 0.25rem !important; }
    .px-md-2 { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }
    .px-md-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
    .px-md-4 { padding-right: 1.5rem !important; padding-left: 1.5rem !important; }
    .px-md-5 { padding-right: 3rem !important; padding-left: 3rem !important; }

    .py-md-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
    .py-md-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
    .py-md-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
    .py-md-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
    .py-md-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
    .py-md-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }

    .pt-md-0 { padding-top: 0 !important; }
    .pt-md-1 { padding-top: 0.25rem !important; }
    .pt-md-2 { padding-top: 0.5rem !important; }
    .pt-md-3 { padding-top: 1rem !important; }
    .pt-md-4 { padding-top: 1.5rem !important; }
    .pt-md-5 { padding-top: 3rem !important; }

    .pe-md-0 { padding-right: 0 !important; }
    .pe-md-1 { padding-right: 0.25rem !important; }
    .pe-md-2 { padding-right: 0.5rem !important; }
    .pe-md-3 { padding-right: 1rem !important; }
    .pe-md-4 { padding-right: 1.5rem !important; }
    .pe-md-5 { padding-right: 3rem !important; }

    .pb-md-0 { padding-bottom: 0 !important; }
    .pb-md-1 { padding-bottom: 0.25rem !important; }
    .pb-md-2 { padding-bottom: 0.5rem !important; }
    .pb-md-3 { padding-bottom: 1rem !important; }
    .pb-md-4 { padding-bottom: 1.5rem !important; }
    .pb-md-5 { padding-bottom: 3rem !important; }

    .ps-md-0 { padding-left: 0 !important; }
    .ps-md-1 { padding-left: 0.25rem !important; }
    .ps-md-2 { padding-left: 0.5rem !important; }
    .ps-md-3 { padding-left: 1rem !important; }
    .ps-md-4 { padding-left: 1.5rem !important; }
    .ps-md-5 { padding-left: 3rem !important; }
  }}

  @media print { @container (min-width: 336.376px) { /* 89mm */
    .d-lg-inline { display: inline !important; }
    .d-lg-inline-block { display: inline-block !important; }
    .d-lg-block { display: block !important; }
    .d-lg-grid { display: grid !important; }
    .d-lg-table { display: table !important; }
    .d-lg-table-row { display: table-row !important; }
    .d-lg-table-cell { display: table-cell !important; }
    .d-lg-flex { display: flex !important; }
    .d-lg-inline-flex { display: inline-flex !important; }
    .d-lg-none { display: none !important; }

    .flex-lg-fill { flex: 1 1 auto !important; }
    .flex-lg-row { flex-direction: row !important; }
    .flex-lg-column { flex-direction: column !important; }
    .flex-lg-row-reverse { flex-direction: row-reverse !important; }
    .flex-lg-column-reverse { flex-direction: column-reverse !important; }
    .flex-lg-grow-0 { flex-grow: 0 !important; }
    .flex-lg-grow-1 { flex-grow: 1 !important; }
    .flex-lg-shrink-0 { flex-shrink: 0 !important; }
    .flex-lg-shrink-1 { flex-shrink: 1 !important; }
    .flex-lg-wrap { flex-wrap: wrap !important; }
    .flex-lg-nowrap { flex-wrap: nowrap !important; }
    .flex-lg-wrap-reverse { flex-wrap: wrap-reverse !important; }

    .justify-content-lg-start { justify-content: flex-start !important; }
    .justify-content-lg-end { justify-content: flex-end !important; }
    .justify-content-lg-center { justify-content: center !important; }
    .justify-content-lg-between { justify-content: space-between !important; }
    .justify-content-lg-around { justify-content: space-around !important; }
    .justify-content-lg-evenly { justify-content: space-evenly !important; }

    .align-items-lg-start { align-items: flex-start !important; }
    .align-items-lg-end { align-items: flex-end !important; }
    .align-items-lg-center { align-items: center !important; }
    .align-items-lg-baseline { align-items: baseline !important; }
    .align-items-lg-stretch { align-items: stretch !important; }

    .align-content-lg-start { align-content: flex-start !important; }
    .align-content-lg-end { align-content: flex-end !important; }
    .align-content-lg-center { align-content: center !important; }
    .align-content-lg-between { align-content: space-between !important; }
    .align-content-lg-around { align-content: space-around !important; }
    .align-content-lg-stretch { align-content: stretch !important; }

    .align-self-lg-auto { align-self: auto !important; }
    .align-self-lg-start { align-self: flex-start !important; }
    .align-self-lg-end { align-self: flex-end !important; }
    .align-self-lg-center { align-self: center !important; }
    .align-self-lg-baseline { align-self: baseline !important; }
    .align-self-lg-stretch { align-self: stretch !important; }

    .order-lg-first { order: -1 !important; }
    .order-lg-0 { order: 0 !important; }
    .order-lg-1 { order: 1 !important; }
    .order-lg-2 { order: 2 !important; }
    .order-lg-3 { order: 3 !important; }
    .order-lg-4 { order: 4 !important; }
    .order-lg-5 { order: 5 !important; }
    .order-lg-last { order: 6 !important; }

    .m-lg-0 { margin: 0 !important; }
    .m-lg-1 { margin: 0.25rem !important; }
    .m-lg-2 { margin: 0.5rem !important; }
    .m-lg-3 { margin: 1rem !important; }
    .m-lg-4 { margin: 1.5rem !important; }
    .m-lg-5 { margin: 3rem !important; }
    .m-lg-auto { margin: auto !important; }

    .mx-lg-0 { margin-right: 0 !important; margin-left: 0 !important; }
    .mx-lg-1 { margin-right: 0.25rem !important; margin-left: 0.25rem !important; }
    .mx-lg-2 { margin-right: 0.5rem !important; margin-left: 0.5rem !important; }
    .mx-lg-3 { margin-right: 1rem !important; margin-left: 1rem !important; }
    .mx-lg-4 { margin-right: 1.5rem !important; margin-left: 1.5rem !important; }
    .mx-lg-5 { margin-right: 3rem !important; margin-left: 3rem !important; }
    .mx-lg-auto { margin-right: auto !important; margin-left: auto !important; }

    .my-lg-0 { margin-top: 0 !important; margin-bottom: 0 !important; }
    .my-lg-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
    .my-lg-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
    .my-lg-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
    .my-lg-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
    .my-lg-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
    .my-lg-auto { margin-top: auto !important; margin-bottom: auto !important; }

    .mt-lg-0 { margin-top: 0 !important; }
    .mt-lg-1 { margin-top: 0.25rem !important; }
    .mt-lg-2 { margin-top: 0.5rem !important; }
    .mt-lg-3 { margin-top: 1rem !important; }
    .mt-lg-4 { margin-top: 1.5rem !important; }
    .mt-lg-5 { margin-top: 3rem !important; }
    .mt-lg-auto { margin-top: auto !important; }

    .me-lg-0 { margin-right: 0 !important; }
    .me-lg-1 { margin-right: 0.25rem !important; }
    .me-lg-2 { margin-right: 0.5rem !important; }
    .me-lg-3 { margin-right: 1rem !important; }
    .me-lg-4 { margin-right: 1.5rem !important; }
    .me-lg-5 { margin-right: 3rem !important; }
    .me-lg-auto { margin-right: auto !important; }

    .mb-lg-0 { margin-bottom: 0 !important; }
    .mb-lg-1 { margin-bottom: 0.25rem !important; }
    .mb-lg-2 { margin-bottom: 0.5rem !important; }
    .mb-lg-3 { margin-bottom: 1rem !important; }
    .mb-lg-4 { margin-bottom: 1.5rem !important; }
    .mb-lg-5 { margin-bottom: 3rem !important; }
    .mb-lg-auto { margin-bottom: auto !important; }

    .ms-lg-0 { margin-left: 0 !important; }
    .ms-lg-1 { margin-left: 0.25rem !important; }
    .ms-lg-2 { margin-left: 0.5rem !important; }
    .ms-lg-3 { margin-left: 1rem !important; }
    .ms-lg-4 { margin-left: 1.5rem !important; }
    .ms-lg-5 { margin-left: 3rem !important; }
    .ms-lg-auto { margin-left: auto !important; }

    .p-lg-0 { padding: 0 !important; }
    .p-lg-1 { padding: 0.25rem !important; }
    .p-lg-2 { padding: 0.5rem !important; }
    .p-lg-3 { padding: 1rem !important; }
    .p-lg-4 { padding: 1.5rem !important; }
    .p-lg-5 { padding: 3rem !important; }

    .px-lg-0 { padding-right: 0 !important; padding-left: 0 !important; }
    .px-lg-1 { padding-right: 0.25rem !important; padding-left: 0.25rem !important; }
    .px-lg-2 { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }
    .px-lg-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
    .px-lg-4 { padding-right: 1.5rem !important; padding-left: 1.5rem !important; }
    .px-lg-5 { padding-right: 3rem !important; padding-left: 3rem !important; }

    .py-lg-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
    .py-lg-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
    .py-lg-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
    .py-lg-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
    .py-lg-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
    .py-lg-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }

    .pt-lg-0 { padding-top: 0 !important; }
    .pt-lg-1 { padding-top: 0.25rem !important; }
    .pt-lg-2 { padding-top: 0.5rem !important; }
    .pt-lg-3 { padding-top: 1rem !important; }
    .pt-lg-4 { padding-top: 1.5rem !important; }
    .pt-lg-5 { padding-top: 3rem !important; }

    .pe-lg-0 { padding-right: 0 !important; }
    .pe-lg-1 { padding-right: 0.25rem !important; }
    .pe-lg-2 { padding-right: 0.5rem !important; }
    .pe-lg-3 { padding-right: 1rem !important; }
    .pe-lg-4 { padding-right: 1.5rem !important; }
    .pe-lg-5 { padding-right: 3rem !important; }

    .pb-lg-0 { padding-bottom: 0 !important; }
    .pb-lg-1 { padding-bottom: 0.25rem !important; }
    .pb-lg-2 { padding-bottom: 0.5rem !important; }
    .pb-lg-3 { padding-bottom: 1rem !important; }
    .pb-lg-4 { padding-bottom: 1.5rem !important; }
    .pb-lg-5 { padding-bottom: 3rem !important; }

    .ps-lg-0 { padding-left: 0 !important; }
    .ps-lg-1 { padding-left: 0.25rem !important; }
    .ps-lg-2 { padding-left: 0.5rem !important; }
    .ps-lg-3 { padding-left: 1rem !important; }
    .ps-lg-4 { padding-left: 1.5rem !important; }
    .ps-lg-5 { padding-left: 3rem !important; }
  }}

  @media print { @container (min-width: 525.334px) { /* 139mm */
    .d-xl-inline { display: inline !important; }
    .d-xl-inline-block { display: inline-block !important; }
    .d-xl-block { display: block !important; }
    .d-xl-grid { display: grid !important; }
    .d-xl-table { display: table !important; }
    .d-xl-table-row { display: table-row !important; }
    .d-xl-table-cell { display: table-cell !important; }
    .d-xl-flex { display: flex !important; }
    .d-xl-inline-flex { display: inline-flex !important; }
    .d-xl-none { display: none !important; }

    .flex-xl-fill { flex: 1 1 auto !important; }
    .flex-xl-row { flex-direction: row !important; }
    .flex-xl-column { flex-direction: column !important; }
    .flex-xl-row-reverse { flex-direction: row-reverse !important; }
    .flex-xl-column-reverse { flex-direction: column-reverse !important; }
    .flex-xl-grow-0 { flex-grow: 0 !important; }
    .flex-xl-grow-1 { flex-grow: 1 !important; }
    .flex-xl-shrink-0 { flex-shrink: 0 !important; }
    .flex-xl-shrink-1 { flex-shrink: 1 !important; }
    .flex-xl-wrap { flex-wrap: wrap !important; }
    .flex-xl-nowrap { flex-wrap: nowrap !important; }
    .flex-xl-wrap-reverse { flex-wrap: wrap-reverse !important; }

    .justify-content-xl-start { justify-content: flex-start !important; }
    .justify-content-xl-end { justify-content: flex-end !important; }
    .justify-content-xl-center { justify-content: center !important; }
    .justify-content-xl-between { justify-content: space-between !important; }
    .justify-content-xl-around { justify-content: space-around !important; }
    .justify-content-xl-evenly { justify-content: space-evenly !important; }

    .align-items-xl-start { align-items: flex-start !important; }
    .align-items-xl-end { align-items: flex-end !important; }
    .align-items-xl-center { align-items: center !important; }
    .align-items-xl-baseline { align-items: baseline !important; }
    .align-items-xl-stretch { align-items: stretch !important; }

    .align-content-xl-start { align-content: flex-start !important; }
    .align-content-xl-end { align-content: flex-end !important; }
    .align-content-xl-center { align-content: center !important; }
    .align-content-xl-between { align-content: space-between !important; }
    .align-content-xl-around { align-content: space-around !important; }
    .align-content-xl-stretch { align-content: stretch !important; }

    .align-self-xl-auto { align-self: auto !important; }
    .align-self-xl-start { align-self: flex-start !important; }
    .align-self-xl-end { align-self: flex-end !important; }
    .align-self-xl-center { align-self: center !important; }
    .align-self-xl-baseline { align-self: baseline !important; }
    .align-self-xl-stretch { align-self: stretch !important; }

    .order-xl-first { order: -1 !important; }
    .order-xl-0 { order: 0 !important; }
    .order-xl-1 { order: 1 !important; }
    .order-xl-2 { order: 2 !important; }
    .order-xl-3 { order: 3 !important; }
    .order-xl-4 { order: 4 !important; }
    .order-xl-5 { order: 5 !important; }
    .order-xl-last { order: 6 !important; }

    .m-xl-0 { margin: 0 !important; }
    .m-xl-1 { margin: 0.25rem !important; }
    .m-xl-2 { margin: 0.5rem !important; }
    .m-xl-3 { margin: 1rem !important; }
    .m-xl-4 { margin: 1.5rem !important; }
    .m-xl-5 { margin: 3rem !important; }
    .m-xl-auto { margin: auto !important; }

    .mx-xl-0 { margin-right: 0 !important; margin-left: 0 !important; }
    .mx-xl-1 { margin-right: 0.25rem !important; margin-left: 0.25rem !important; }
    .mx-xl-2 { margin-right: 0.5rem !important; margin-left: 0.5rem !important; }
    .mx-xl-3 { margin-right: 1rem !important; margin-left: 1rem !important; }
    .mx-xl-4 { margin-right: 1.5rem !important; margin-left: 1.5rem !important; }
    .mx-xl-5 { margin-right: 3rem !important; margin-left: 3rem !important; }
    .mx-xl-auto { margin-right: auto !important; margin-left: auto !important; }

    .my-xl-0 { margin-top: 0 !important; margin-bottom: 0 !important; }
    .my-xl-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
    .my-xl-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
    .my-xl-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
    .my-xl-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
    .my-xl-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
    .my-xl-auto { margin-top: auto !important; margin-bottom: auto !important; }

    .mt-xl-0 { margin-top: 0 !important; }
    .mt-xl-1 { margin-top: 0.25rem !important; }
    .mt-xl-2 { margin-top: 0.5rem !important; }
    .mt-xl-3 { margin-top: 1rem !important; }
    .mt-xl-4 { margin-top: 1.5rem !important; }
    .mt-xl-5 { margin-top: 3rem !important; }
    .mt-xl-auto { margin-top: auto !important; }

    .me-xl-0 { margin-right: 0 !important; }
    .me-xl-1 { margin-right: 0.25rem !important; }
    .me-xl-2 { margin-right: 0.5rem !important; }
    .me-xl-3 { margin-right: 1rem !important; }
    .me-xl-4 { margin-right: 1.5rem !important; }
    .me-xl-5 { margin-right: 3rem !important; }
    .me-xl-auto { margin-right: auto !important; }

    .mb-xl-0 { margin-bottom: 0 !important; }
    .mb-xl-1 { margin-bottom: 0.25rem !important; }
    .mb-xl-2 { margin-bottom: 0.5rem !important; }
    .mb-xl-3 { margin-bottom: 1rem !important; }
    .mb-xl-4 { margin-bottom: 1.5rem !important; }
    .mb-xl-5 { margin-bottom: 3rem !important; }
    .mb-xl-auto { margin-bottom: auto !important; }

    .ms-xl-0 { margin-left: 0 !important; }
    .ms-xl-1 { margin-left: 0.25rem !important; }
    .ms-xl-2 { margin-left: 0.5rem !important; }
    .ms-xl-3 { margin-left: 1rem !important; }
    .ms-xl-4 { margin-left: 1.5rem !important; }
    .ms-xl-5 { margin-left: 3rem !important; }
    .ms-xl-auto { margin-left: auto !important; }

    .p-xl-0 { padding: 0 !important; }
    .p-xl-1 { padding: 0.25rem !important; }
    .p-xl-2 { padding: 0.5rem !important; }
    .p-xl-3 { padding: 1rem !important; }
    .p-xl-4 { padding: 1.5rem !important; }
    .p-xl-5 { padding: 3rem !important; }

    .px-xl-0 { padding-right: 0 !important; padding-left: 0 !important; }
    .px-xl-1 { padding-right: 0.25rem !important; padding-left: 0.25rem !important; }
    .px-xl-2 { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }
    .px-xl-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
    .px-xl-4 { padding-right: 1.5rem !important; padding-left: 1.5rem !important; }
    .px-xl-5 { padding-right: 3rem !important; padding-left: 3rem !important; }

    .py-xl-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
    .py-xl-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
    .py-xl-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
    .py-xl-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
    .py-xl-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
    .py-xl-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }

    .pt-xl-0 { padding-top: 0 !important; }
    .pt-xl-1 { padding-top: 0.25rem !important; }
    .pt-xl-2 { padding-top: 0.5rem !important; }
    .pt-xl-3 { padding-top: 1rem !important; }
    .pt-xl-4 { padding-top: 1.5rem !important; }
    .pt-xl-5 { padding-top: 3rem !important; }

    .pe-xl-0 { padding-right: 0 !important; }
    .pe-xl-1 { padding-right: 0.25rem !important; }
    .pe-xl-2 { padding-right: 0.5rem !important; }
    .pe-xl-3 { padding-right: 1rem !important; }
    .pe-xl-4 { padding-right: 1.5rem !important; }
    .pe-xl-5 { padding-right: 3rem !important; }

    .pb-xl-0 { padding-bottom: 0 !important; }
    .pb-xl-1 { padding-bottom: 0.25rem !important; }
    .pb-xl-2 { padding-bottom: 0.5rem !important; }
    .pb-xl-3 { padding-bottom: 1rem !important; }
    .pb-xl-4 { padding-bottom: 1.5rem !important; }
    .pb-xl-5 { padding-bottom: 3rem !important; }

    .ps-xl-0 { padding-left: 0 !important; }
    .ps-xl-1 { padding-left: 0.25rem !important; }
    .ps-xl-2 { padding-left: 0.5rem !important; }
    .ps-xl-3 { padding-left: 1rem !important; }
    .ps-xl-4 { padding-left: 1.5rem !important; }
    .ps-xl-5 { padding-left: 3rem !important; }
  }}

  @media print { @container (min-width: 793.701px) { /* 210mm */
    .d-xxl-inline { display: inline !important; }
    .d-xxl-inline-block { display: inline-block !important; }
    .d-xxl-block { display: block !important; }
    .d-xxl-grid { display: grid !important; }
    .d-xxl-table { display: table !important; }
    .d-xxl-table-row { display: table-row !important; }
    .d-xxl-table-cell { display: table-cell !important; }
    .d-xxl-flex { display: flex !important; }
    .d-xxl-inline-flex { display: inline-flex !important; }
    .d-xxl-none { display: none !important; }

    .flex-xxl-fill { flex: 1 1 auto !important; }
    .flex-xxl-row { flex-direction: row !important; }
    .flex-xxl-column { flex-direction: column !important; }
    .flex-xxl-row-reverse { flex-direction: row-reverse !important; }
    .flex-xxl-column-reverse { flex-direction: column-reverse !important; }
    .flex-xxl-grow-0 { flex-grow: 0 !important; }
    .flex-xxl-grow-1 { flex-grow: 1 !important; }
    .flex-xxl-shrink-0 { flex-shrink: 0 !important; }
    .flex-xxl-shrink-1 { flex-shrink: 1 !important; }
    .flex-xxl-wrap { flex-wrap: wrap !important; }
    .flex-xxl-nowrap { flex-wrap: nowrap !important; }
    .flex-xxl-wrap-reverse { flex-wrap: wrap-reverse !important; }

    .justify-content-xxl-start { justify-content: flex-start !important; }
    .justify-content-xxl-end { justify-content: flex-end !important; }
    .justify-content-xxl-center { justify-content: center !important; }
    .justify-content-xxl-between { justify-content: space-between !important; }
    .justify-content-xxl-around { justify-content: space-around !important; }
    .justify-content-xxl-evenly { justify-content: space-evenly !important; }

    .align-items-xxl-start { align-items: flex-start !important; }
    .align-items-xxl-end { align-items: flex-end !important; }
    .align-items-xxl-center { align-items: center !important; }
    .align-items-xxl-baseline { align-items: baseline !important; }
    .align-items-xxl-stretch { align-items: stretch !important; }

    .align-content-xxl-start { align-content: flex-start !important; }
    .align-content-xxl-end { align-content: flex-end !important; }
    .align-content-xxl-center { align-content: center !important; }
    .align-content-xxl-between { align-content: space-between !important; }
    .align-content-xxl-around { align-content: space-around !important; }
    .align-content-xxl-stretch { align-content: stretch !important; }

    .align-self-xxl-auto { align-self: auto !important; }
    .align-self-xxl-start { align-self: flex-start !important; }
    .align-self-xxl-end { align-self: flex-end !important; }
    .align-self-xxl-center { align-self: center !important; }
    .align-self-xxl-baseline { align-self: baseline !important; }
    .align-self-xxl-stretch { align-self: stretch !important; }

    .order-xxl-first { order: -1 !important; }
    .order-xxl-0 { order: 0 !important; }
    .order-xxl-1 { order: 1 !important; }
    .order-xxl-2 { order: 2 !important; }
    .order-xxl-3 { order: 3 !important; }
    .order-xxl-4 { order: 4 !important; }
    .order-xxl-5 { order: 5 !important; }
    .order-xxl-last { order: 6 !important; }

    .m-xxl-0 { margin: 0 !important; }
    .m-xxl-1 { margin: 0.25rem !important; }
    .m-xxl-2 { margin: 0.5rem !important; }
    .m-xxl-3 { margin: 1rem !important; }
    .m-xxl-4 { margin: 1.5rem !important; }
    .m-xxl-5 { margin: 3rem !important; }
    .m-xxl-auto { margin: auto !important; }

    .mx-xxl-0 { margin-right: 0 !important; margin-left: 0 !important; }
    .mx-xxl-1 { margin-right: 0.25rem !important; margin-left: 0.25rem !important; }
    .mx-xxl-2 { margin-right: 0.5rem !important; margin-left: 0.5rem !important; }
    .mx-xxl-3 { margin-right: 1rem !important; margin-left: 1rem !important; }
    .mx-xxl-4 { margin-right: 1.5rem !important; margin-left: 1.5rem !important; }
    .mx-xxl-5 { margin-right: 3rem !important; margin-left: 3rem !important; }
    .mx-xxl-auto { margin-right: auto !important; margin-left: auto !important; }

    .my-xxl-0 { margin-top: 0 !important; margin-bottom: 0 !important; }
    .my-xxl-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
    .my-xxl-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
    .my-xxl-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
    .my-xxl-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
    .my-xxl-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
    .my-xxl-auto { margin-top: auto !important; margin-bottom: auto !important; }

    .mt-xxl-0 { margin-top: 0 !important; }
    .mt-xxl-1 { margin-top: 0.25rem !important; }
    .mt-xxl-2 { margin-top: 0.5rem !important; }
    .mt-xxl-3 { margin-top: 1rem !important; }
    .mt-xxl-4 { margin-top: 1.5rem !important; }
    .mt-xxl-5 { margin-top: 3rem !important; }
    .mt-xxl-auto { margin-top: auto !important; }

    .me-xxl-0 { margin-right: 0 !important; }
    .me-xxl-1 { margin-right: 0.25rem !important; }
    .me-xxl-2 { margin-right: 0.5rem !important; }
    .me-xxl-3 { margin-right: 1rem !important; }
    .me-xxl-4 { margin-right: 1.5rem !important; }
    .me-xxl-5 { margin-right: 3rem !important; }
    .me-xxl-auto { margin-right: auto !important; }

    .mb-xxl-0 { margin-bottom: 0 !important; }
    .mb-xxl-1 { margin-bottom: 0.25rem !important; }
    .mb-xxl-2 { margin-bottom: 0.5rem !important; }
    .mb-xxl-3 { margin-bottom: 1rem !important; }
    .mb-xxl-4 { margin-bottom: 1.5rem !important; }
    .mb-xxl-5 { margin-bottom: 3rem !important; }
    .mb-xxl-auto { margin-bottom: auto !important; }

    .ms-xxl-0 { margin-left: 0 !important; }
    .ms-xxl-1 { margin-left: 0.25rem !important; }
    .ms-xxl-2 { margin-left: 0.5rem !important; }
    .ms-xxl-3 { margin-left: 1rem !important; }
    .ms-xxl-4 { margin-left: 1.5rem !important; }
    .ms-xxl-5 { margin-left: 3rem !important; }
    .ms-xxl-auto { margin-left: auto !important; }

    .p-xxl-0 { padding: 0 !important; }
    .p-xxl-1 { padding: 0.25rem !important; }
    .p-xxl-2 { padding: 0.5rem !important; }
    .p-xxl-3 { padding: 1rem !important; }
    .p-xxl-4 { padding: 1.5rem !important; }
    .p-xxl-5 { padding: 3rem !important; }

    .px-xxl-0 { padding-right: 0 !important; padding-left: 0 !important; }
    .px-xxl-1 { padding-right: 0.25rem !important; padding-left: 0.25rem !important; }
    .px-xxl-2 { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }
    .px-xxl-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
    .px-xxl-4 { padding-right: 1.5rem !important; padding-left: 1.5rem !important; }
    .px-xxl-5 { padding-right: 3rem !important; padding-left: 3rem !important; }

    .py-xxl-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
    .py-xxl-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
    .py-xxl-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
    .py-xxl-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
    .py-xxl-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
    .py-xxl-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }

    .pt-xxl-0 { padding-top: 0 !important; }
    .pt-xxl-1 { padding-top: 0.25rem !important; }
    .pt-xxl-2 { padding-top: 0.5rem !important; }
    .pt-xxl-3 { padding-top: 1rem !important; }
    .pt-xxl-4 { padding-top: 1.5rem !important; }
    .pt-xxl-5 { padding-top: 3rem !important; }

    .pe-xxl-0 { padding-right: 0 !important; }
    .pe-xxl-1 { padding-right: 0.25rem !important; }
    .pe-xxl-2 { padding-right: 0.5rem !important; }
    .pe-xxl-3 { padding-right: 1rem !important; }
    .pe-xxl-4 { padding-right: 1.5rem !important; }
    .pe-xxl-5 { padding-right: 3rem !important; }

    .pb-xxl-0 { padding-bottom: 0 !important; }
    .pb-xxl-1 { padding-bottom: 0.25rem !important; }
    .pb-xxl-2 { padding-bottom: 0.5rem !important; }
    .pb-xxl-3 { padding-bottom: 1rem !important; }
    .pb-xxl-4 { padding-bottom: 1.5rem !important; }
    .pb-xxl-5 { padding-bottom: 3rem !important; }

    .ps-xxl-0 { padding-left: 0 !important; }
    .ps-xxl-1 { padding-left: 0.25rem !important; }
    .ps-xxl-2 { padding-left: 0.5rem !important; }
    .ps-xxl-3 { padding-left: 1rem !important; }
    .ps-xxl-4 { padding-left: 1.5rem !important; }
    .ps-xxl-5 { padding-left: 3rem !important; }
  }}




/*
* PRINT
*/
  @media print {
    body {
      /* Est\xE1 fonte e peso deve ser utilizada para impress\xF5es do tipo fiscal *
        font-family: "Consolas", monospace !important;
        font-weight: 900 !important;
      */

      /* Est\xE1 fonte e peso deve ser utilizada para impress\xF5es padr\xF5es */
      font-family: "Arial", sans-serif !important;
      font-weight: normal !important;

      line-height: 1.4 !important;
      color: rgb(0,0,0) !important;
      background: none !important;
      position: relative !important;
      padding: 0 !important;
      margin: 0 !important;
      top: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      left: 0 !important;
    }

    .page-break-after-always {
      page-break-after: always !important;
    }

    .page-break-inside-avoid {
      page-break-inside: avoid !important;
    }

    .center {
      overflow: hidden !important;
      max-width: 100% !important;
      padding: 0 !important;
      margin: 0 !important;
      top: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      left: 0 !important;
      background: none !important;
      border: none !important;
      border-radius: 0 !important;
      outline: 0 !important;
      box-shadow: 0 0 0 0 !important;
    }

    .d-print-inline { display: inline !important; }
    .d-print-inline-block { display: inline-block !important; }
    .d-print-block { display: block !important; }
    .d-print-grid { display: grid !important; }
    .d-print-table { display: table !important; }
    .d-print-table-row { display: table-row !important; }
    .d-print-table-cell { display: table-cell !important; }
    .d-print-flex { display: flex !important; }
    .d-print-inline-flex { display: inline-flex !important; }
    .d-print-none { display: none !important; }
    .noprint { display: none !important; }
  }

  @page {
    /* Est\xE1 fonte e peso deve ser utilizada para impress\xF5es do tipo fiscal *
      font-family: "Consolas", monospace !important;
      font-weight: 900 !important;
    */

    /* Est\xE1 fonte e peso deve ser utilizada para impress\xF5es padr\xF5es */
    font-family: "Arial", sans-serif !important;
    font-weight: normal !important;

    line-height: 1.4 !important;
    color: rgb(0,0,0) !important;
    background: none !important;
    position: relative !important;
    padding: 0 !important;
    margin: 0 !important;
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
  }
`;const kn={components:{MonacoEditor:nn,Visualizador:tn,promptEditorRelatorio:sn,promptEditorRelatorioVersao:hn},data(){return{coluna:!0,alterarConteudo:null,alterouConteudo:!1,areaConfiguracoes:!0,atualizarAutomaticamente:!!parseInt(localStorage.editorAtualizar),campoObservacao:"",campos:{codigoObjeto:"",descricao:"",documentacao:"",nomeObjeto:""},componenteEditor:{parametro:"",estilo:"",script:"",template:""},componenteVisualizador:{},componenteDiff:{},chaveDiff:0,modalBoasVindas:!1,modalPublicar:!1,modoDiff:!1,publicando:!1,salvando:!1}},computed:{editorOptions(){return{automaticLayout:!0,lineNumbersMinChars:2}},idObjetoValido(){return String(this.id).length===36},id(){return this.$route.params.id},temId(){return this.id!==void 0&&this.id!==""},parametroBase64(){return $utils.base64.encodeToUrl(this.componenteEditor.parametro||"")},rotaImprimir(){return{name:"Imprimir",params:{nome:this.campos.nomeObjeto||"x",parametro:this.parametroBase64||void 0}}},usuario(){try{return JSON.parse(localStorage.usuario)}catch{return{}}},versao(){return this.$route.params.versao}},methods:{abrirConfiguracoes(){this.areaConfiguracoes=!0},async abrirPromptBuscar(){try{const r=await $g.promptEditorRelatorio.show({});r&&String(r.id).length===36&&this.confirmarSaida().onOk(()=>{this.$router.push({params:{id:r.id,versao:""}})})}catch(r){$q.notifyError("Erro ao abrir tela de buscar relat\xF3rio",r)}},async abrirPromptHistorico(){try{const r=await $g.promptEditorRelatorioVersao.show({});r&&r.dados&&String(r.dados.id).length===36&&this.confirmarSaida().onOk(()=>{r.acao==="selecionar"?this.$router.push({params:{id:this.id,versao:r.dados.id}}):r.acao==="comparar"&&(this.componenteDiff=JSON.parse(atob(r.dados.codigoPersonalizado)),this.modoDiff=!0,this.chaveDiff++)})}catch(r){$q.notifyError("Erro ao buscar vers\xE3o relat\xF3rio",r)}},aoIniciarEditor(r){r.onKeyDown(n=>{const g=n.browserEvent||{};(g.ctrlKey||g.metaKey)&&g.which===13&&(n.stopPropagation(),this.atualizarVisualizador())})},atualizarVisualizador(){if(this.atualizarAutomaticamente)return null;$utils.gconsole.log("editor","atualizarVisualizador"),this.componenteVisualizador=$utils.clonar(this.componenteEditor)},atualizarComponente(r){typeof r=="string"&&(r=JSON.parse(atob(r))),this.componenteEditor={parametro:r.parametro||"",estilo:r.estilo||"",script:r.script||"",template:r.template||""},$utils.gconsole.log("editor","atualizarComponente"),this.componenteVisualizador=$utils.clonar(this.componenteEditor),this.alterouConteudo=!1},async carregarObjeto(r){try{const n=String(r).length!==36?null:(await M.objeto.leOnline({colunas:"id codigoObjeto codigoPersonalizado descricao documentacao nomeObjeto tipo",filtros:{id:r}}))[0];if(!n)return $q.notify("Objeto inexistente.");this.campos.codigoObjeto=n.codigoObjeto,this.campos.nomeObjeto=n.nomeObjeto,this.campos.descricao=n.descricao,this.campos.documentacao=n.documentacao||"",this.atualizarComponente(n.codigoPersonalizado),this.abrirConfiguracoes(),this.fecharDiff()}catch(n){throw $q.notify("N\xE3o foi poss\xEDvel carregar o objeto."),n}},async carregarVersao(r){try{const n=String(r).length!==36?null:(await M.objetoVersao.leOnline({colunas:"id idObjeto idUsuario codigoPersonalizado dataHora obs publicado usuario",filtros:{id:r}}))[0];if(!n)return $q.notify("Vers\xE3o inexistente.");this.campos.documentacao=n.documentacao||"",this.atualizarComponente(n.codigoPersonalizado),this.fecharDiff()}catch(n){throw $q.notify("N\xE3o foi poss\xEDvel carregar vers\xE3o."),n}},compararVersao(r){this.componenteDiff=JSON.parse(atob(r.codigoPersonalizado)),this.modoDiff=!0,this.chaveDiff++,this.fecharModalHistorico()},confirmarSaida(){return this.alterouConteudo?$q.dialog({title:"Sair sem salvar?",message:"Parece que existem modifica\xE7\xF5es que n\xE3o foram salvas. Deseja continuar?",cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Continuar",push:!0,class:"bg-negative",textColor:"white",flat:!0}}):{onOk(r){r()}}},fecharDiff(){!this.modoDiff||(this.modoDiff=!1,this.chaveDiff++)},async publicar(){this.publicando=!0;try{const r=await this.gravar(this.id,!0,this.campoObservacao);$q.notifyPositive("Publicado!"),this.campoObservacao="",this.modalPublicar=!1,this.$router.push({params:{versao:r}})}catch{$q.notifyError("Erro ao publicar.")}finally{this.publicando=!1}},redefinirCampos(){this.campos.codigoObjeto="",this.campos.descricao="",this.campos.nomeObjeto=""},redefinirComponente(){this.componenteEditor={parametro:"{}",template:wn,script:yn,estilo:vn},$utils.gconsole.log("editor","redefinirComponente"),this.componenteVisualizador=$utils.clonar(this.componenteEditor),this.alterouConteudo=!1},async incluir(){this.confirmarSaida().onOk(()=>{(this.id===0||this.id==="0")&&(this.redefinirCampos(),this.redefinirComponente()),this.$router.push({params:{id:"0",versao:""}})})},async gravar(r,n,g){const f=$utils.uuid(),o=btoa(JSON.stringify(this.componenteEditor));(n||!this.idObjetoValido)&&await M.objeto.grava({...this.campos,id:r,tipo:"vue",codigoPersonalizado:o});try{const z=await fetch("http://localhost:8002/gravar",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({codigoPersonalizado:"aa"})})}catch{}const d={id:f,idObjeto:r,idUsuario:this.usuario.id,codigoPersonalizado:o,dataHora:$utils.sqlData(new Date).replace(/'/g,""),documentacao:this.campos.documentacao||"",publicado:n?1:0,usuario:this.usuario.nome};return g&&(d.obs=g),await M.objetoVersao.grava(d),f},async salvar(){if(this.campos.nomeObjeto==="")return $q.notify("O identificador \xE9 obrigat\xF3rio."),this.abrirConfiguracoes(),setTimeout(()=>this.$refs.campoNomeObjeto.focus(),1),!1;this.salvando=!0;try{$q.loading.show();const r=this.idObjetoValido?this.id:$utils.uuid(),n=await this.gravar(r);this.alterouConteudo=!1,this.$router.push({params:{id:r,versao:n}}),$q.notifyPositive("Salvo com sucesso!")}catch(r){throw $q.notify("Erro ao salvar."),r}finally{this.salvando=!1,$q.loading.hide()}},teclas(r){if(!!r&&(r.ctrlKey||r.metaKey))switch(r.which){case 13:r.preventDefault(),r.stopImmediatePropagation(),r.stopPropagation(),this.atualizarVisualizador();break;case 79:r.preventDefault(),this.abrirPromptBuscar();break;case 83:r.preventDefault(),this.salvar();break}},async lerArquivo(){try{const n=await(await fetch("http://localhost:8002/ler",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({codigoPersonalizado:"aa"})})).text();let g="";const f={ignoreAttributes:!1,allowBooleanAttributes:!0,preserveOrder:!0,unpairedTags:["hr","br","link","meta"],stopNodes:["*.pre","*.script"],processEntities:!0,htmlEntities:!0},d=new Ot.XMLParser(f).parse(n);console.log("json",d);const z={ignoreAttributes:!1,format:!0,preserveOrder:!0,unpairedTags:["hr","br","link","meta"],stopNodes:["*.pre","*.script"]},c=new Ot.XMLBuilder(z).build(d);await fetch("http://localhost:8002/gravar",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({conteudo:c,arquivoNome:""})})}catch{}}},async created(){if(this.redefinirComponente(),this.idObjetoValido)try{$q.loading.show(),await this.carregarObjeto(this.id),this.versao&&await this.carregarVersao(this.versao)}finally{$q.loading.hide()}else this.temId||(this.modalBoasVindas=!0);document.addEventListener("keydown",this.teclas),this.alterarConteudo=$lodash.debounce(()=>{this.alterouConteudo=!0,this.atualizarAutomaticamente&&($utils.gconsole.log("editor","created"),this.componenteVisualizador=$utils.clonar(this.componenteEditor))},500)},mounted(){globalThis.tela=this,this.divisor=new mn(["#editor","#visualizador"],{minSize:[300,20]})},beforeUnmount(){document.removeEventListener("keydown",this.teclas),this.divisor&&this.divisor.destroy()},watch:{async id(r){r&&r!=="0"?this.carregarObjeto(r):(this.redefinirCampos(),this.redefinirComponente())},atualizarAutomaticamente(r){r||($utils.gconsole.log("editor","atualizarAutomaticamente"),this.componenteVisualizador=$utils.clonar(this.componenteEditor)),localStorage.setItem("editorAtualizar",r?1:0)}}},zn={id:"Editor"},Sn={class:"q-px-sm"},jn={class:"bg-grey-10 q-pb-md q-pt-sm q-px-md"},En={class:"layout-padding bg-white q-pa-xl"},Cn={class:"q-mt-lg"},On={class:"layout-padding bg-white q-pa-xl"},Vn={class:"q-mt-lg"};function An(r,n,g,f,o,d){const z=A("barra-topo"),x=A("badge"),c=A("campo"),F=A("MonacoEditor"),T=A("g-col"),X=A("visualizador"),Z=A("g-row"),G=A("promptEditorRelatorio"),Q=A("promptEditorRelatorioVersao");return u(),L("div",zn,[e(ft,null,{default:m(()=>[e(z),e(ct,null,{default:m(()=>[e(ht,{onClick:d.abrirConfiguracoes,class:"flex items-center"},{default:m(()=>[d.idObjetoValido?(u(),w(x,{key:0,rotulo:o.campos.codigoObjeto,cor:"positive"},null,8,["rotulo"])):I("",!0),t("span",Sn,_(o.campos.nomeObjeto||"Editor"),1),d.idObjetoValido?I("",!0):(u(),w(x,{key:1,rotulo:"Rascunho",cor:"negative"}))]),_:1},8,["onClick"]),o.modoDiff?(u(),w(v,{key:0,onClick:d.fecharDiff,icon:"close",color:"negative"},{default:m(()=>[e(R,{anchor:"bottom middle",self:"center middle"},{default:m(()=>n[14]||(n[14]=[p(" Fechar Diff ")])),_:1})]),_:1},8,["onClick"])):I("",!0),o.modoDiff?(u(),w(ot,{key:1,vertical:"",color:"grey-5",class:"q-ma-sm"})):I("",!0),o.atualizarAutomaticamente?I("",!0):(u(),w(v,{key:2,onClick:d.atualizarVisualizador,flat:"",round:"",icon:"refresh",color:"white"},{default:m(()=>[e(R,{anchor:"bottom middle",self:"center middle"},{default:m(()=>n[15]||(n[15]=[p(" Atualizar ")])),_:1})]),_:1},8,["onClick"])),d.idObjetoValido&&d.id?(u(),w(v,{key:3,to:d.rotaImprimir,flat:"",round:"",icon:"remove_red_eye",color:"white",target:"_blank"},{default:m(()=>[e(R,{anchor:"bottom middle",self:"center middle"},{default:m(()=>n[16]||(n[16]=[p(" Visualizar ")])),_:1})]),_:1},8,["to"])):I("",!0),e(ot,{vertical:"",color:"grey-5",class:"q-ma-sm"}),e(v,{onClick:d.incluir,icon:"add",color:"white",flat:"",round:""},{default:m(()=>[e(R,{anchor:"bottom middle",self:"center middle"},{default:m(()=>n[17]||(n[17]=[p(" Novo ")])),_:1})]),_:1},8,["onClick"]),e(v,{onClick:d.abrirPromptBuscar,icon:"search",color:"white",flat:"",round:""},{default:m(()=>[e(R,{anchor:"bottom middle",self:"center middle"},{default:m(()=>n[18]||(n[18]=[p(" Buscar ")])),_:1})]),_:1},8,["onClick"]),e(v,{onClick:n[0]||(n[0]=b=>o.coluna=!o.coluna),icon:"multiple_stop",color:"white",flat:"",round:""},{default:m(()=>[e(R,null,{default:m(()=>[p(_(o.coluna?"Esquerda / Direita":"Direita / Esquerda"),1)]),_:1})]),_:1}),e(ot,{vertical:"",color:"grey-5",class:"q-ma-sm"}),e(v,{onClick:d.salvar,disabled:o.salvando,flat:"",round:"",icon:"save",color:"white"},{default:m(()=>[e(R,{anchor:"bottom middle",self:"center middle"},{default:m(()=>[p(_(o.salvando?"Salvando...":"Salvar"),1)]),_:1})]),_:1},8,["onClick","disabled"]),d.idObjetoValido?(u(),w(v,{key:4,onClick:n[1]||(n[1]=b=>o.modalPublicar=!0),flat:"",round:"",color:"white",icon:"publish"},{default:m(()=>[e(R,{anchor:"bottom middle",self:"center middle"},{default:m(()=>n[19]||(n[19]=[p(" Publicar ")])),_:1})]),_:1})):I("",!0),e(ot,{vertical:"",color:"grey-5",class:"q-ma-sm"}),d.idObjetoValido?(u(),w(v,{key:5,onClick:d.abrirPromptHistorico,icon:"history",color:"white",flat:"",round:""},{default:m(()=>[e(R,{anchor:"bottom middle",self:"center middle"},{default:m(()=>n[20]||(n[20]=[p(" Hist\xF3rico ")])),_:1})]),_:1},8,["onClick"])):I("",!0)]),_:1})]),_:1}),e(wt,null,{default:m(()=>[e(yt,null,{default:m(()=>[e(Z,{width:"100%",height:"100%",class:"Codigos",style:{position:"absolute"}},{default:m(()=>[e(T,{order:o.coluna?"first":"last",col:"xs12 sm6",bg:"bg-dark",color:"text-white",id:"editor"},{default:m(()=>[e(at,{class:"q-pb-none"},{default:m(()=>[e(q,{modelValue:o.areaConfiguracoes,"onUpdate:modelValue":n[6]||(n[6]=b=>o.areaConfiguracoes=b),label:"Configura\xE7\xF5es",group:"editor",icon:"settings",class:"EditorItem"},{default:m(()=>[t("div",jn,[e(c,{modelValue:o.campos.nomeObjeto,"onUpdate:modelValue":n[2]||(n[2]=b=>o.campos.nomeObjeto=b),dark:"",ref:"campoNomeObjeto",rotulo:"Identificador"},null,8,["modelValue"]),e(c,{modelValue:o.campos.descricao,"onUpdate:modelValue":n[3]||(n[3]=b=>o.campos.descricao=b),dark:"",rotulo:"Descri\xE7\xE3o"},null,8,["modelValue"]),e(c,{modelValue:o.componenteEditor.parametro,"onUpdate:modelValue":n[4]||(n[4]=b=>o.componenteEditor.parametro=b),ajuda:d.parametroBase64,dark:"",rotulo:"Par\xE2metro",tipo:"textoArea"},null,8,["modelValue","ajuda"]),e(Xt,{modelValue:o.atualizarAutomaticamente,"onUpdate:modelValue":n[5]||(n[5]=b=>o.atualizarAutomaticamente=b),class:"q-mt-lg",label:"Atualizar pr\xE9-visualiza\xE7\xE3o ao digitar?"},null,8,["modelValue"]),e(at,{class:"q-mt-lg q-pa-none",dark:"",separator:""},{default:m(()=>[e(q,{group:"configuracoes",label:"Atalhos da ferramenta"},{default:m(()=>n[21]||(n[21]=[t("table",{class:"TabelaEscura text-caption q-mb-md q-mx-md"},[t("thead",null,[t("tr",null,[t("th",null,"Atalho"),t("th",null,"Windows"),t("th",null,"Linux"),t("th",null,"macOS")])]),t("tbody",null,[t("tr",null,[t("td",null,"Abrir documento"),t("td",{class:"text-center",colspan:"2"},[t("kbd",null,"CTRL"),p(" + "),t("kbd",null,"O")]),t("td",{class:"text-center"},[t("kbd",null,"\u2318"),p(" + "),t("kbd",null,"O")])]),t("tr",null,[t("td",null,"Salvar documento"),t("td",{class:"text-center",colspan:"2"},[t("kbd",null,"CTRL"),p(" + "),t("kbd",null,"S")]),t("td",{class:"text-center"},[t("kbd",null,"\u2318"),p(" + "),t("kbd",null,"S")])]),t("tr",null,[t("td",null,"Atualizar componente"),t("td",{class:"text-center",colspan:"2"},[t("kbd",null,"CTRL"),p(" + "),t("kbd",null,"ENTER")]),t("td",{class:"text-center"},[t("kbd",null,"\u2318"),p(" + "),t("kbd",null,"ENTER")])])])],-1)])),_:1}),e(q,{group:"configuracoes",label:"Atalhos do editor"},{default:m(()=>n[22]||(n[22]=[t("table",{class:"TabelaEscura text-caption q-mb-md q-mx-md"},[t("thead",null,[t("tr",null,[t("th",null,"Atalho"),t("th",null,"Windows"),t("th",null,"Linux"),t("th",null,"macOS")])]),t("tbody",null,[t("tr",null,[t("td",null,"Paleta de comandos"),t("td",{class:"text-center",colspan:"3"},[t("kbd",null,"F1")])]),t("tr",null,[t("td",null,"Colapsar tudo"),t("td",{class:"text-center",colspan:"2"},[t("kbd",null,"CTRL"),p(" + "),t("kbd",null,"K"),p(" | "),t("kbd",null,"CTRL"),p(" + "),t("kbd",null,"0")]),t("td",{class:"text-center"},[t("kbd",null,"\u2318"),p(" + "),t("kbd",null,"K"),p(" | "),t("kbd",null,"\u2318"),p(" + "),t("kbd",null,"0")])]),t("tr",null,[t("td",null,"Comentar"),t("td",{class:"text-center",colspan:"2"},[t("kbd",null,"CTRL"),p(" + "),t("kbd",null,"/")]),t("td",{class:"text-center"},[t("kbd",null,"\u2318"),p(" + "),t("kbd",null,"/")])]),t("tr",null,[t("td",null,"Expandir tudo"),t("td",{class:"text-center",colspan:"2"},[t("kbd",null,"CTRL"),p(" + "),t("kbd",null,"K"),p(" | "),t("kbd",null,"CTRL"),p(" + "),t("kbd",null,"J")]),t("td",{class:"text-center"},[t("kbd",null,"\u2318"),p(" + "),t("kbd",null,"K"),p(" | "),t("kbd",null,"\u2318"),p(" + "),t("kbd",null,"J")])]),t("tr",null,[t("td",null,"Formatar sele\xE7\xE3o"),t("td",{class:"text-center",colspan:"2"},[t("kbd",null,"CTRL"),p(" + "),t("kbd",null,"K"),p(" | "),t("kbd",null,"CTRL"),p(" + "),t("kbd",null,"F")]),t("td",{class:"text-center"},[t("kbd",null,"\u2318"),p(" + "),t("kbd",null,"K"),p(" | "),t("kbd",null,"\u2318"),p(" + "),t("kbd",null,"F")])]),t("tr",null,[t("td",null,"Formatar tudo"),t("td",{class:"text-center"},[t("kbd",null,"CTRL"),p(" + "),t("kbd",null,"SHIFT"),p(" + "),t("kbd",null,"F")]),t("td",{class:"text-center"},[t("kbd",null,"CTRL"),p(" + "),t("kbd",null,"SHIFT"),p(" + "),t("kbd",null,"F")]),t("td",{class:"text-center"},[t("kbd",null,"\u2318"),p(" + "),t("kbd",null,"SHIFT"),p(" + "),t("kbd",null,"F")])]),t("tr",null,[t("td",null,"Localizar"),t("td",{class:"text-center",colspan:"2"},[t("kbd",null,"CTRL"),p(" + "),t("kbd",null,"F")]),t("td",{class:"text-center"},[t("kbd",null,"\u2318"),p(" + "),t("kbd",null,"F")])]),t("tr",null,[t("td",null,"M\xFAltiplos cursores"),t("td",{class:"text-center"},[t("kbd",null,"CTRL"),p(" + "),t("kbd",null,"ALT"),p(" + "),t("kbd",null,"SHIFT"),p(" + "),t("kbd",null,"\u2191\u2193")]),t("td",{class:"text-center"},[t("kbd",null,"CTRL"),p(" + "),t("kbd",null,"SHIFT"),p(" + "),t("kbd",null,"\u2191\u2193")]),t("td",{class:"text-center"},[t("kbd",null,"\u2318"),p(" + "),t("kbd",null,"SHIFT"),p(" + "),t("kbd",null,"\u2191\u2193")])]),t("tr",null,[t("td",null,"Selecionar tudo"),t("td",{class:"text-center",colspan:"2"},[t("kbd",null,"CTRL"),p(" + "),t("kbd",null,"A")]),t("td",{class:"text-center"},[t("kbd",null,"\u2318"),p(" + "),t("kbd",null,"A")])]),t("tr",null,[t("td",null,"Substituir"),t("td",{class:"text-center",colspan:"2"},[t("kbd",null,"CTRL"),p(" + "),t("kbd",null,"H")]),t("td",{class:"text-center"},[t("kbd",null,"\u2318"),p(" + "),t("kbd",null,"H")])])])],-1)])),_:1})]),_:1})])]),_:1},8,["modelValue"]),e(q,{label:"Template (HTML)",group:"editor",icon:"dashboard",class:"EditorItem"},{default:m(()=>[(u(),w(F,{modelValue:o.componenteEditor.template,"onUpdate:modelValue":n[7]||(n[7]=b=>o.componenteEditor.template=b),onChange:o.alterarConteudo,onEditorDidMount:d.aoIniciarEditor,key:o.chaveDiff,diffEditor:o.modoDiff,original:o.componenteDiff.template,options:d.editorOptions,language:"html",theme:"vs-dark",class:"MonacoEditor"},null,8,["modelValue","onChange","onEditorDidMount","diffEditor","original","options"]))]),_:1}),e(q,{label:"JavaScript (Vue)","default-opened":"",group:"editor",icon:"code",class:"EditorItem"},{default:m(()=>[(u(),w(F,{modelValue:o.componenteEditor.script,"onUpdate:modelValue":n[8]||(n[8]=b=>o.componenteEditor.script=b),onEditorDidMount:d.aoIniciarEditor,onChange:o.alterarConteudo,key:o.chaveDiff+1,diffEditor:o.modoDiff,original:o.componenteDiff.script,options:d.editorOptions,language:"javascript",theme:"vs-dark",class:"MonacoEditor"},null,8,["modelValue","onEditorDidMount","onChange","diffEditor","original","options"]))]),_:1}),e(q,{label:"Estilos (CSS)",group:"editor",icon:"format_paint",class:"EditorItem"},{default:m(()=>[(u(),w(F,{modelValue:o.componenteEditor.estilo,"onUpdate:modelValue":n[9]||(n[9]=b=>o.componenteEditor.estilo=b),onEditorDidMount:d.aoIniciarEditor,onChange:o.alterarConteudo,key:o.chaveDiff+2,diffEditor:o.modoDiff,original:o.componenteDiff.estilo,options:d.editorOptions,language:"css",theme:"vs-dark",class:"MonacoEditor"},null,8,["modelValue","onEditorDidMount","onChange","diffEditor","original","options"]))]),_:1}),e(q,{class:"EditorItem",group:"editor",icon:"speaker_notes",label:"Documenta\xE7\xE3o (Markdown)"},{default:m(()=>[e(F,{modelValue:o.campos.documentacao,"onUpdate:modelValue":n[10]||(n[10]=b=>o.campos.documentacao=b),onEditorDidMount:d.aoIniciarEditor,onChange:o.alterarConteudo,options:d.editorOptions,theme:"vs-dark",language:"markdown",class:"MonacoEditor"},null,8,["modelValue","onEditorDidMount","onChange","options"])]),_:1})]),_:1})]),_:1},8,["order"]),e(T,{order:o.coluna?"last":"first",col:"xs12 sm6",bg:"bg-white",id:"visualizador"},{default:m(()=>[e(X,{componente:o.componenteVisualizador},null,8,["componente"])]),_:1},8,["order"])]),_:1})]),_:1})]),_:1}),e(mt,{modelValue:o.modalBoasVindas,"onUpdate:modelValue":n[11]||(n[11]=b=>o.modalBoasVindas=b),"no-backdrop-dismiss":"","no-esc-dismiss":""},{default:m(()=>[t("div",En,[n[23]||(n[23]=t("h4",{class:"q-mb-sm q-mt-none"},"Bem-vindo ao Editor.",-1)),n[24]||(n[24]=t("p",null,"Atrav\xE9s desta interface \xE9 poss\xEDvel criar ou editar objetos do sistema.",-1)),t("div",Cn,[e(v,{color:"primary",label:"Novo",icon:"add",onClick:d.incluir},null,8,["onClick"]),e(v,{color:"primary",class:"q-ml-sm",label:"Abrir",icon:"search",onClick:d.abrirPromptBuscar},null,8,["onClick"])])])]),_:1},8,["modelValue"]),e(mt,{modelValue:o.modalPublicar,"onUpdate:modelValue":n[13]||(n[13]=b=>o.modalPublicar=b),"no-backdrop-dismiss":"","no-esc-dismiss":""},{default:m(()=>[t("div",On,[n[25]||(n[25]=t("h4",{class:"q-mb-sm q-mt-none"},"Publicar",-1)),n[26]||(n[26]=t("p",null,"Deixe uma mensagem para recordar o que h\xE1 de novo nesta vers\xE3o.",-1)),e(c,{modelValue:o.campoObservacao,"onUpdate:modelValue":n[12]||(n[12]=b=>o.campoObservacao=b),rotulo:"Mensagem",placeholder:"Escreva a sua mensagem...",tipo:"textoArea"},null,8,["modelValue"]),t("div",Vn,[bt(e(v,{label:"Cancelar",color:"tertiary",flat:""},null,512),[[ut]]),e(v,{color:"primary",unelevated:"",class:"q-ml-sm",label:"Publicar",icon:"publish",onClick:d.publicar},null,8,["onClick"])])]),e(Zt,{visible:o.modalPublicar&&o.publicando},{default:m(()=>[e($t,{size:"50px",color:"primary"})]),_:1},8,["visible"])]),_:1},8,["modelValue"]),e(G),e(Q,{idObjeto:d.id},null,8,["idObjeto"])])}var _n=xt(kn,[["render",An]]);export{_n as default};
