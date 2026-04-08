import { c as W } from './dataState.svelte-BaFjXyUB.js';
import { t } from './defineDataAdapter-DSxNvP_L.js';
import './error.svelte-ibmHg725.js';

function e(e){if(!e)return null;const n=t(),r=W(e),i=(a,e)=>{const n=W(a.SASDatasetName||""),r=W(a.Name||"");return n===e||r===e};if(n.adamData?.defineData?.ItemGroups){const t=n.adamData.defineData.ItemGroups.find(t=>i(t,r));if(t?.OID)return t.OID}if(n.sdtmData?.defineData?.ItemGroups){const t=n.sdtmData.defineData.ItemGroups.find(t=>i(t,r));if(t?.OID)return t.OID}return null}function n(t$1){if(!t$1)return null;const e=t();if(e.adamData?.defineData?.ItemGroups){const a=e.adamData.defineData.ItemGroups.find(a=>a.OID===t$1);if(a)return a.SASDatasetName||a.Name||null}if(e.sdtmData?.defineData?.ItemGroups){const a=e.sdtmData.defineData.ItemGroups.find(a=>a.OID===t$1);if(a)return a.SASDatasetName||a.Name||null}return null}function r(e){if(!e)return null;const n=t(),r=W(e),i=(a,e)=>{const n=W(a.SASDatasetName||""),r=W(a.Name||"");return n===e||r===e};if(n.adamData?.defineData?.ItemGroups){const t=n.adamData.defineData.ItemGroups.find(t=>i(t,r));if(t?.OID)return {oid:t.OID,defineType:"adam"}}if(n.sdtmData?.defineData?.ItemGroups){const t=n.sdtmData.defineData.ItemGroups.find(t=>i(t,r));if(t?.OID)return {oid:t.OID,defineType:"sdtm"}}return null}

export { e, n, r };
//# sourceMappingURL=datasetOIDLookup-B7N3aLSX.js.map
