import { I as Ii } from './error.svelte-ibmHg725.js';
import './index-f6fwSYh4.js';
import { c as c$1, a, r } from './index4-BpX7v3qB.js';
import { c as W, W as We, F as Fe } from './dataState.svelte-BaFjXyUB.js';
import { e } from './datasetOIDLookup-B7N3aLSX.js';

function c(c,l){c.component(c=>{let{datasetName:i,currentView:u}=l;const x=(()=>{const t=W(i),e$1=e(i),a=!!e$1,s=We(),c=!!Object.keys(s).find(e=>W(e)===t);let l=false;if(a){const t=Fe(i);l="BASIC DATA STRUCTURE"===t?.Class,console.log("[DatasetNavigationTabs] VLM Check:",{datasetName:i,oid:e$1,metadata:{Class:t?.Class,Name:t?.Name,OID:t?.OID},hasVLM:l});}return {metadata:a,vlm:l,dataset:c,oid:e$1}})();function p(){x.oid&&Ii();}function m(){x.oid&&Ii();}function f(){const e=We(),a=W(i);Object.keys(e).find(t=>W(t)===a)&&Ii();}const h="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none hover:text-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none";c$1(c,{value:u,class:"flex-none",children:t=>{a(t,{class:"from-background to-muted/30 w-full justify-start border-b bg-gradient-to-r px-4",children:t=>{x.metadata?(t.push("\x3c!--[--\x3e"),r(t,{value:"metadata",class:h,onclick:p,children:t=>{t.push("\x3c!----\x3eMetadata");},$$slots:{default:true}})):t.push("\x3c!--[!--\x3e"),t.push("\x3c!--]--\x3e "),x.vlm?(t.push("\x3c!--[--\x3e"),r(t,{value:"vlm",class:h,onclick:m,children:t=>{t.push("\x3c!----\x3eVLM");},$$slots:{default:true}})):t.push("\x3c!--[!--\x3e"),t.push("\x3c!--]--\x3e "),x.dataset?(t.push("\x3c!--[--\x3e"),r(t,{value:"dataset",class:h,onclick:f,children:t=>{t.push("\x3c!----\x3eDataset");},$$slots:{default:true}})):t.push("\x3c!--[!--\x3e"),t.push("\x3c!--]--\x3e");},$$slots:{default:true}});},$$slots:{default:true}});});}

export { c };
//# sourceMappingURL=DatasetNavigationTabs-CrxxthA5.js.map
