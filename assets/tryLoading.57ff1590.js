<<<<<<<< HEAD:assets/tryLoading.b1099b68.js
import{b as o}from"./index.e4a389e3.js";var f=o(({app:g,router:y})=>{const a=async function(i,r={},e){var n,t;try{$q.loading.show({message:r.mensagem||"Carregando informa\xE7\xF5es...",boxClass:"bg-grey-2 text-grey-9",spinnerColor:"primary"}),(n=r.carregando)==null||n.call(r,!0),await i(e)}catch(l){const d=r.erro||"Ops! Ocorreu um erro";$q.notifyError(d,l)}finally{(t=r.carregando)==null||t.call(r,!1),$q.loading.hide()}};g.config.globalProperties.$tryLoading=a,globalThis.$tryLoading=a});export{f as default};
========
import{b as o}from"./index.a266b7f5.js";var f=o(({app:g,router:y})=>{const a=async function(i,r={},e){var n,t;try{$q.loading.show({message:r.mensagem||"Carregando informa\xE7\xF5es...",boxClass:"bg-grey-2 text-grey-9",spinnerColor:"primary"}),(n=r.carregando)==null||n.call(r,!0),await i(e)}catch(l){const d=r.erro||"Ops! Ocorreu um erro";$q.notifyError(d,l)}finally{(t=r.carregando)==null||t.call(r,!1),$q.loading.hide()}};g.config.globalProperties.$tryLoading=a,globalThis.$tryLoading=a});export{f as default};
>>>>>>>> 6475101fbf084f44b50ef1bbe816415bc002d4e7:assets/tryLoading.57ff1590.js