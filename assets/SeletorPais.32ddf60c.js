import{_ as C,o as m,i as b,w as t,f as n,P as u,a9 as g,bj as _,R as h,S as f,e as l,t as c,d as y,F as S,l as x,a6 as P,x as p}from"./index.6c26b0ec.js";const w={computed:{rules(){return this.required?[e=>e!==""||"Selecione um munic\xEDpio"]:[]}},data(){return{cidade:"",cidades:[],hint:"",opcoes:[]}},emits:["selecionar"],methods:{buscarCidade(e,d){setTimeout(()=>{d(async()=>{if(!this.cidades.length&&await this.obterCidades(),e||(this.opcoes=this.cidades),e){const s=$utils.removerAcentos(e).toLowerCase().replace(/\s+/," ").trim().split(" ");this.opcoes=this.cidades.filter(a=>{let i=$utils.removerAcentos(a.municipio+" "+a.distrito+" "+a.uf).toLowerCase().replace(/\s+/," ").trim();for(const o of s)if(!~i.indexOf(o))return!1;return!0})}})},500)},async obterCidades(){return this.obtendoCidades?this.obtendoCidades:(this.obtendoCidades=new Promise(async(e,d)=>{try{const s=await $erp()._cidade.toArray(),a=[];s.sort((i,o)=>(i.nomeMunic||"").toLowerCase()<(o.nomeMunic||"").toLowerCase()?-1:1);for(const i of s)a.push({value:i.id,municipio:i.nomeMunic||"",distrito:i.nomeDistr||"",ibgeCod:i.cidadeCodIbge||"",uf:i.siglaUf||"",ufCod:i.uf||"",cidadeCodChave:i.cod});a.push({value:"Exterior",municipio:"Exterior",distrito:"",ibgeCod:"9999999",uf:"EX",ufCod:"",cidadeCodChave:null}),this.cidades=a,e()}catch(s){d(s)}}),this.obtendoCidades)},async obterCidadePorIbgeCod(){await this.obterCidades();const e=this.cidades.find(d=>String(d.ibgeCod)===String(this.ibgeCod));e||(this.cidade="",this.hint=""),e&&(this.cidade=e.municipio,this.hint="",e.ibgeCod&&(this.hint="C\xF3digo IBGE: "+e.ibgeCod))},selecionarCidade(e){this.cidade=e.municipio,this.hint="",e.ibgeCod&&(this.hint="C\xF3digo IBGE: "+e.ibgeCod),this.$emit("selecionar",e)}},props:{ibgeCod:[Number,String],required:Boolean,somenteLeitura:{type:Boolean,default:!1}},watch:{ibgeCod(){this.obterCidadePorIbgeCod()}},created(){this.obterCidades(),this.ibgeCod&&this.obterCidadePorIbgeCod()}},B=p("b",null,"Distrito:",-1),I=p("br",null,null,-1),v=p("b",null,"C\xF3digo IBGE:",-1);function L(e,d,s,a,i,o){return m(),b(P,{"model-value":i.cidade,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",dense:"",label:"Cidade",options:i.opcoes,onFilter:o.buscarCidade,"onUpdate:modelValue":o.selecionarCidade,hint:i.hint,rules:o.rules,readonly:s.somenteLeitura},{option:t(r=>[n(u,g(_(r.itemProps)),{default:t(()=>[n(h,null,{default:t(()=>[n(f,null,{default:t(()=>[l(c(r.opt.municipio)+" - "+c(r.opt.uf),1)]),_:2},1024),n(f,{caption:""},{default:t(()=>[r.opt.municipio!==r.opt.distrito?(m(),y(S,{key:0},[B,l(" "+c(r.opt.distrito)+" ",1),I],64)):x("",!0),v,l(" "+c(r.opt.ibgeCod),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),"no-option":t(()=>[n(u,null,{default:t(()=>[n(h,{class:"text-grey"},{default:t(()=>[l(" Resultado n\xE3o encontrado ")]),_:1})]),_:1})]),_:1},8,["model-value","options","onFilter","onUpdate:modelValue","hint","rules","readonly"])}var N=C(w,[["render",L]]);const V={computed:{rules(){return this.required?[e=>e!==""||"Selecione um pa\xEDs"]:[]}},data(){return{pais:"",hint:"",opcoes:[]}},emits:["selecionar"],methods:{buscarPais(e,d){setTimeout(()=>{d(async()=>{if(e||(this.opcoes=$db.pais.lista),e){const s=$utils.tratamentoCompletoString(e).split(" ");this.opcoes=$db.pais.lista.filter(a=>{let i=$utils.tratamentoCompletoString(a.codigo+a.nome);for(const o of s)if(!~i.indexOf(o))return!1;return!0})}})},500)},async obterPaisPorCodigo(){const e=$db.pais.lista.find(d=>d.codigo===+this.codigoPais);e||(this.pais="",this.hint=""),e&&(this.pais=e.nome,this.hint="",e.codigo&&(this.hint="C\xF3digo do Pa\xEDs: "+e.codigo))},selecionarPais(e){this.pais=e.nome,this.hint="",e.codigo&&(this.hint="C\xF3digo do Pa\xEDs: "+e.codigo),this.$emit("selecionar",e)}},props:{codigoPais:[Number,String],required:Boolean,somenteLeitura:{type:Boolean,default:!1}},watch:{codigoPais(){this.obterPaisPorCodigo()}},created(){this.codigoPais&&this.obterPaisPorCodigo()}};function E(e,d,s,a,i,o){return m(),b(P,{"model-value":i.pais,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",dense:"",label:"Pa\xEDs",options:i.opcoes,onFilter:o.buscarPais,"onUpdate:modelValue":o.selecionarPais,hint:i.hint,rules:o.rules,readonly:s.somenteLeitura},{option:t(r=>[n(u,g(_(r.itemProps)),{default:t(()=>[n(h,null,{default:t(()=>[n(f,null,{default:t(()=>[l(c(r.opt.codigo)+" - "+c(r.opt.nome),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),"no-option":t(()=>[n(u,null,{default:t(()=>[n(h,{class:"text-grey"},{default:t(()=>[l(" Resultado n\xE3o encontrado ")]),_:1})]),_:1})]),_:1},8,["model-value","options","onFilter","onUpdate:modelValue","hint","rules","readonly"])}var $=C(V,[["render",E]]);export{N as S,$ as a};