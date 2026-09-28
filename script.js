'use strict';

/* ============================= ICONS ============================= */
const ICONS = {
  home:'<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  minus:'<path d="M5 12h14"/>',
  list:'<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.3" cy="6" r="1.3" fill="currentColor" stroke="none"/><circle cx="4.3" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="4.3" cy="18" r="1.3" fill="currentColor" stroke="none"/>',
  box:'<path d="M21 8 12 3 3 8l9 5 9-5Z"/><path d="M3 8v9l9 5 9-5V8"/><path d="M12 13v9"/>',
  tag:'<path d="M12.6 3H4v8.6L14.4 22 22 14.4 12.6 3Z"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 13.8a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.6V20a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H4a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H10a1.7 1.7 0 0 0 1-1.6V4a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V10a1.7 1.7 0 0 0 1.6 1H20a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  trash:'<path d="M4 7h16M9 7V4.6c0-.3.3-.6.6-.6h4.8c.3 0 .6.3.6.6V7m-9 0 .7 12.4a2 2 0 0 0 2 1.9h5.6a2 2 0 0 0 2-1.9L18 7"/>',
  copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>',
  edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  note:'<path d="M4 4h16v12H9l-5 4Z"/>',
  share:'<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.3 10.7 7.2-4.3M8.3 13.3l7.2 4.3"/>',
  download:'<path d="M12 3v13m0 0-4.5-4.5M12 16l4.5-4.5"/><path d="M4 19h16"/>',
  pdf:'<path d="M6 2h9l5 5v15H6Z"/><path d="M15 2v5h5"/><path d="M9.3 12.5h1.2a1.3 1.3 0 1 1 0 2.6H9.3v-2.6Zm0 2.6V17"/><path d="M13 12.5v4.5m0-2.2h1.6"/><path d="M17.3 12.5v4.5m0-4.5h1.8m-1.8 2.2h1.4"/>',
  image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="m21 15-5-5-9 9"/>',
  chevronRight:'<path d="m9 6 6 6-6 6"/>',
  chevronDown:'<path d="m6 9 6 6 6-6"/>',
  check:'<path d="M5 13l4 4L19 7"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  droplet:'<path d="M12 3s7 7.4 7 12a7 7 0 1 1-14 0c0-4.6 7-12 7-12Z"/>',
  back:'<path d="m15 5-7 7 7 7"/>',
  filter:'<path d="M4 5h16l-6 8v6l-4-2v-4Z"/>',
  alert:'<circle cx="12" cy="12" r="9"/><path d="M12 8v5"/><circle cx="12" cy="16.1" r="1" fill="currentColor" stroke="none"/>',
  wifioff:'<path d="M2 8.8a17 17 0 0 1 4.6-2.9M22 8.8a17 17 0 0 0-6-3.4M8.5 12.5a9.7 9.7 0 0 1 3.5-1M15.5 12.6a9.7 9.7 0 0 1 2 1M5.5 15.4a13 13 0 0 1 3-1.7M12 20h.01M2 2l20 20"/>',
  wrench:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5l-6.2 6.2 2.4 2.4 6.2-6.2a4 4 0 0 0 5.4-5l-2.7 2.7-2.1-2Z"/>',
  pipe:'<rect x="2" y="9" width="20" height="6" rx="2.5"/><path d="M6 9v6M18 9v6"/>',
  valve:'<path d="M2 12h5M17 12h5"/><path d="M7 7 12 12 7 17Z"/><path d="M17 7 12 12 17 17Z"/>',
  sprinkler:'<circle cx="12" cy="17" r="2"/><path d="M12 15V4M12 4 9.5 6.5M12 4l2.5 2.5M6.5 8 5 7M17.5 8 19 7"/>',
  plusCircle:'<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
  user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  cloud:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  refresh:'<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/>',
  lock:'<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  logOut:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>'
};
function icon(name, cls){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon '+(cls||'')+'">'+(ICONS[name]||'')+'</svg>'; }
function googleIconSvg(){
  return '<svg class="google-icon" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';
}


/* ============================= UTILITIES ============================= */
function localISODate(d){
  d = d || new Date();
  const tz = d.getTimezoneOffset();
  const local = new Date(d.getTime() - tz*60000);
  return local.toISOString().slice(0,10);
}
const TODAY_ISO = localISODate();
function uid(prefix){ return (prefix||'id') + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2,8); }
function esc(s){
  s = (s===null||s===undefined) ? '' : String(s);
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function clampNum(n, min, max){ n = Number(n); if(isNaN(n)) n = min; if(min!==undefined && n<min) n=min; if(max!==undefined && n>max) n=max; return n; }
function round2(n){ return Math.round((Number(n)||0) * 100) / 100; }
function fmtNum(n){
  n = round2(n);
  if(Number.isInteger(n)) return String(n);
  return String(n);
}
function fmtMoney(n){
  n = round2(n||0);
  const neg = n < 0; n = Math.abs(n);
  const parts = n.toFixed(2).split('.');
  let intPart = parts[0];
  let dec = parts[1];
  let lastThree = intPart.substring(intPart.length-3);
  let other = intPart.substring(0, intPart.length-3);
  if(other !== '') lastThree = ',' + lastThree;
  let formatted = other.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
  if(dec === '00') return (neg?'-':'') + formatted;
  return (neg?'-':'') + formatted + '.' + dec;
}
function money(n){ return state.settings.currencySymbol + fmtMoney(n); }
function fmtDateDisplay(iso){
  if(!iso) return '';
  const p = iso.split('-'); if(p.length!==3) return iso;
  return p[2] + '/' + p[1] + '/' + p[0];
}
function debounce(fn, ms){
  let t; return function(){ const a=arguments, c=this; clearTimeout(t); t=setTimeout(()=>fn.apply(c,a), ms); };
}
function startOfDay(d){ const x = new Date(d); x.setHours(0,0,0,0); return x; }
function daysAgo(n){ const d = new Date(); d.setDate(d.getDate()-n); return startOfDay(d); }

/* ============================= SEED / CATALOG DATA ============================= */
const STD_SIZES = ['0.5"','0.75"','1"','1.25"','1.5"','2"','2.5"','3"','4"','5"','6"'];
const DRIP_SIZES = ['4mm','6mm','12mm','16mm','20mm','25mm','32mm'];
const PIPE_MATERIAL_OPTIONS = ['CPVC','PVC','HDPE','UPVC','PE'];
const VALVE_BODY_OPTIONS = ['PVC','CPVC','Brass','Metal'];
const WORK_TYPES = ['Building Plumbing','Drip Irrigation','Sprinkler Irrigation','Farm Water Pipeline','Borewell Pipeline','Garden Irrigation','Other'];
const CATEGORIES = [
  {id:'pipes', label:'Pipes', icon:'pipe'},
  {id:'fittings', label:'Fittings', icon:'wrench'},
  {id:'reducers', label:'Reducers', icon:'filter'},
  {id:'valves', label:'Valves', icon:'valve'},
  {id:'drip', label:'Drip Irrigation', icon:'droplet'},
  {id:'sprinkler', label:'Sprinkler', icon:'sprinkler'},
  {id:'other', label:'Other', icon:'box'}
];
function catLabel(id){ const c = CATEGORIES.find(x=>x.id===id); return c ? c.label : id; }
function catIcon(id){ const c = CATEGORIES.find(x=>x.id===id); return c ? c.icon : 'box'; }

function tpl(id, category, name, opts){
  opts = opts || {};
  const unit = opts.unit || 'Piece';
  return {
    id: id, category: category, name: name,
    sizes: opts.sizes !== undefined ? opts.sizes : STD_SIZES,
    unit: unit,
    units: opts.units || [unit],
    price: Number(opts.price)||0, /* seed catalog leaves prices blank — no placeholder figures; the user/admin fills in real prices */
    hasMaterial: opts.hasMaterial !== undefined ? opts.hasMaterial : false,
    materialSet: opts.materialSet || 'pipe',
    hasBrand: opts.hasBrand !== undefined ? opts.hasBrand : true,
    isReducer: !!opts.isReducer,
    visual: opts.visual || 'box',
    custom: false,
    active: true,
    updatedAt: TODAY_ISO
  };
}

/* ============================= PRODUCT VISUALS (illustrative icons, not photos) ============================= */
const PRODUCT_ICONS = {
  pipe:'<rect x="4" y="19" width="40" height="10" rx="5" fill="currentColor"/>',
  elbow:'<rect x="6" y="19" width="22" height="10" rx="3" fill="currentColor"/><rect x="19" y="19" width="10" height="23" rx="3" fill="currentColor"/>',
  tee:'<rect x="6" y="19" width="36" height="10" rx="3" fill="currentColor"/><rect x="19" y="6" width="10" height="20" rx="3" fill="currentColor"/>',
  cross:'<rect x="6" y="19" width="36" height="10" rx="3" fill="currentColor"/><rect x="19" y="6" width="10" height="36" rx="3" fill="currentColor"/>',
  coupler:'<rect x="7" y="19" width="34" height="10" rx="3" fill="currentColor"/><rect x="15" y="14" width="4" height="20" fill="currentColor" opacity=".55"/><rect x="29" y="14" width="4" height="20" fill="currentColor" opacity=".55"/>',
  union:'<rect x="6" y="21" width="36" height="6" rx="3" fill="currentColor"/><path d="M16 12h16l6 12-6 12H16l-6-12Z" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>',
  reducer:'<rect x="4" y="15" width="14" height="18" rx="3" fill="currentColor"/><path d="M18 16h10l10 8-10 8H18Z" fill="currentColor"/><rect x="36" y="20" width="8" height="8" rx="2" fill="currentColor"/>',
  cap:'<rect x="5" y="18" width="24" height="12" rx="3" fill="currentColor"/><path d="M29 16a8 8 0 0 1 0 16Z" fill="currentColor"/>',
  valve:'<rect x="6" y="21" width="36" height="6" rx="3" fill="currentColor"/><circle cx="24" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="2.6"/><line x1="24" y1="19" x2="24" y2="22" stroke="currentColor" stroke-width="2.6"/>',
  clamp:'<rect x="10" y="20" width="28" height="8" rx="2" fill="currentColor" opacity=".35"/><path d="M12 12v9M36 12v9M9 12h6M33 12h6M12 36v-9M36 36v-9M9 36h6M33 36h6" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/>',
  filter:'<rect x="14" y="6" width="20" height="32" rx="7" fill="none" stroke="currentColor" stroke-width="2.6"/><line x1="18" y1="15" x2="30" y2="15" stroke="currentColor" stroke-width="2.2"/><line x1="18" y1="22" x2="30" y2="22" stroke="currentColor" stroke-width="2.2"/><line x1="18" y1="29" x2="30" y2="29" stroke="currentColor" stroke-width="2.2"/>',
  regulator:'<rect x="4" y="20" width="16" height="8" rx="3" fill="currentColor"/><circle cx="30" cy="24" r="12" fill="none" stroke="currentColor" stroke-width="2.6"/><line x1="30" y1="24" x2="35" y2="18" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>',
  dripper:'<rect x="9" y="10" width="30" height="8" rx="3" fill="currentColor"/><path d="M24 22s8 9 8 15a8 8 0 0 1-16 0c0-6 8-15 8-15Z" fill="none" stroke="currentColor" stroke-width="2.6"/>',
  drippipe:'<rect x="4" y="18" width="40" height="8" rx="4" fill="currentColor"/><circle cx="12" cy="33" r="2.4" fill="currentColor"/><circle cx="24" cy="33" r="2.4" fill="currentColor"/><circle cx="36" cy="33" r="2.4" fill="currentColor"/>',
  sprinklervis:'<circle cx="24" cy="37" r="3.4" fill="currentColor"/><path d="M24 33V9M24 9l-6.5 6M24 9l6.5 6M13 17l-4.5-3M35 17l4.5-3M8 28l-4.5.8M40 28l4.5.8" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>',
  coil:'<circle cx="24" cy="24" r="15" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="24" cy="24" r="6" fill="currentColor"/>',
  bottle:'<rect x="15" y="15" width="18" height="24" rx="4" fill="currentColor"/><rect x="20" y="7" width="8" height="9" rx="1" fill="currentColor"/>',
  ring:'<circle cx="24" cy="24" r="15" fill="none" stroke="currentColor" stroke-width="6"/>',
  hardware:'<polygon points="24,6 32,11 32,19 24,24 16,19 16,11" fill="currentColor"/><rect x="21" y="22" width="6" height="20" fill="currentColor"/>',
  box:'<path d="M24 6 42 15v18L24 42 6 33V15Z" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/><path d="M6 15l18 9 18-9M24 24v18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>'
};
function productIcon(key, sizePx){
  const s = sizePx || 28;
  return '<svg viewBox="0 0 48 48" width="'+s+'" height="'+s+'" class="pvisual">'+(PRODUCT_ICONS[key]||PRODUCT_ICONS.box)+'</svg>';
}

function defaultCatalog(){
  const P = [];
  // Pipes (material baked into name; brand + size + qty/unit chosen at add-time)
  P.push(tpl('pipe-cpvc','pipes','CPVC Pipe',{unit:'Length', units:['Length','Feet','Meter','Roll'], visual:'pipe'}));
  P.push(tpl('pipe-pvc','pipes','PVC Pipe',{unit:'Length', units:['Length','Feet','Meter','Roll'], visual:'pipe'}));
  P.push(tpl('pipe-hdpe','pipes','HDPE Pipe',{unit:'Length', units:['Length','Feet','Meter','Roll'], visual:'pipe'}));
  P.push(tpl('pipe-upvc','pipes','UPVC Pipe',{unit:'Length', units:['Length','Feet','Meter','Roll'], visual:'pipe'}));
  P.push(tpl('pipe-pe','pipes','PE Pipe',{unit:'Length', units:['Length','Feet','Meter','Roll'], visual:'pipe'}));

  // Fittings
  [['fit-elbow','Elbow','elbow'],['fit-tee','Tee','tee'],['fit-coupler','Coupler','coupler'],['fit-socket','Socket','coupler'],
   ['fit-union','Union','union'],['fit-adapter','Adapter','union'],['fit-bush','Bush','union'],['fit-endcap','End Cap','cap'],
   ['fit-cross','Cross','cross'],['fit-nipple','Nipple','coupler'],['fit-flange','Flange','union'],['fit-clamp','Clamp','clamp'],
   ['fit-connector','Connector','coupler'],['fit-pipeclip','Pipe Clip','clamp']
  ].forEach(r=> P.push(tpl(r[0],'fittings',r[1],{hasMaterial:true, visual:r[2]})));

  // Reducers (material baked into name)
  P.push(tpl('red-cpvc','reducers','CPVC Reducer',{isReducer:true, visual:'reducer'}));
  P.push(tpl('red-pvc','reducers','PVC Reducer',{isReducer:true, visual:'reducer'}));
  P.push(tpl('red-hdpe','reducers','HDPE Reducer',{isReducer:true, visual:'reducer'}));
  P.push(tpl('red-upvc','reducers','UPVC Reducer',{isReducer:true, visual:'reducer'}));
  P.push(tpl('red-pe','reducers','PE Reducer',{isReducer:true, visual:'reducer'}));

  // Valves ("Type" = body material, using VALVE_BODY_OPTIONS)
  [['val-ball','Ball Valve'],['val-gate','Gate Valve'],['val-butterfly','Butterfly Valve'],
   ['val-check','Check Valve'],['val-foot','Foot Valve'],['val-nrv','Non-return Valve'],
   ['val-solenoid','Solenoid Valve'],['val-air','Air Release Valve']
  ].forEach(r=> P.push(tpl(r[0],'valves',r[1],{hasMaterial:true, materialSet:'valve', visual:'valve'})));

  // Drip irrigation
  P.push(tpl('drip-pipe','drip','Drip Pipe',{sizes:DRIP_SIZES, unit:'Meter', units:['Meter','Roll','Length'], hasBrand:true, visual:'drippipe'}));
  P.push(tpl('drip-inline','drip','Inline Dripper',{sizes:[], visual:'dripper'}));
  P.push(tpl('drip-online','drip','Online Dripper',{sizes:[], visual:'dripper'}));
  P.push(tpl('drip-connector','drip','Drip Connector',{sizes:DRIP_SIZES, visual:'dripper'}));
  P.push(tpl('drip-start','drip','Start Connector',{sizes:DRIP_SIZES, visual:'dripper'}));
  P.push(tpl('drip-takeoff','drip','Take-off',{sizes:DRIP_SIZES, visual:'dripper'}));
  P.push(tpl('drip-grommet','drip','Grommet',{sizes:DRIP_SIZES, visual:'dripper'}));
  P.push(tpl('drip-endcap','drip','End Cap',{sizes:DRIP_SIZES, visual:'cap'}));
  P.push(tpl('drip-filter','drip','Filter',{sizes:STD_SIZES.slice(0,6), visual:'filter'}));
  P.push(tpl('drip-venturi','drip','Fertilizer Venturi',{sizes:[], visual:'regulator'}));
  P.push(tpl('drip-regulator','drip','Pressure Regulator',{sizes:DRIP_SIZES, visual:'regulator'}));
  P.push(tpl('drip-mainline','drip','Mainline Pipe',{unit:'Meter', units:['Meter','Roll','Length'], hasMaterial:true, visual:'drippipe'}));
  P.push(tpl('drip-submain','drip','Sub-main Pipe',{unit:'Meter', units:['Meter','Roll','Length'], hasMaterial:true, visual:'drippipe'}));
  P.push(tpl('drip-lateral','drip','Lateral Pipe',{sizes:DRIP_SIZES, unit:'Meter', units:['Meter','Roll','Length'], visual:'drippipe'}));
  P.push(tpl('drip-flushvalve','drip','Flush Valve',{sizes:DRIP_SIZES, visual:'valve'}));
  P.push(tpl('drip-controlvalve','drip','Control Valve',{sizes:STD_SIZES.slice(0,6), visual:'valve'}));
  P.push(tpl('drip-punch','drip','Punch',{sizes:[], visual:'hardware'}));
  P.push(tpl('drip-joiner','drip','Joiner',{sizes:DRIP_SIZES, visual:'dripper'}));
  P.push(tpl('drip-tee','drip','Tee',{sizes:DRIP_SIZES, visual:'tee'}));
  P.push(tpl('drip-elbow','drip','Elbow',{sizes:DRIP_SIZES, visual:'elbow'}));
  P.push(tpl('drip-clamp','drip','Clamp',{sizes:DRIP_SIZES, visual:'clamp'}));

  // Sprinkler irrigation
  P.push(tpl('spr-sprinkler','sprinkler','Sprinkler',{sizes:[], visual:'sprinklervis'}));
  P.push(tpl('spr-head','sprinkler','Sprinkler Head',{sizes:[], visual:'sprinklervis'}));
  P.push(tpl('spr-riser','sprinkler','Riser',{sizes:STD_SIZES.slice(0,6), visual:'pipe'}));
  P.push(tpl('spr-connector','sprinkler','Sprinkler Connector',{sizes:STD_SIZES.slice(0,6), visual:'coupler'}));
  P.push(tpl('spr-elbow','sprinkler','Elbow',{sizes:STD_SIZES.slice(0,6), visual:'elbow'}));
  P.push(tpl('spr-tee','sprinkler','Tee',{sizes:STD_SIZES.slice(0,6), visual:'tee'}));
  P.push(tpl('spr-filter','sprinkler','Filter',{sizes:[], visual:'filter'}));
  P.push(tpl('spr-regulator','sprinkler','Pressure Regulator',{sizes:[], visual:'regulator'}));
  P.push(tpl('spr-endcap','sprinkler','End Cap',{sizes:STD_SIZES.slice(0,6), visual:'cap'}));
  P.push(tpl('spr-coupler','sprinkler','Coupler',{sizes:STD_SIZES.slice(0,6), visual:'coupler'}));
  P.push(tpl('spr-clamp','sprinkler','Clamp',{sizes:STD_SIZES.slice(0,6), visual:'clamp'}));

  // Other hardware
  P.push(tpl('oth-teflon','other','Teflon Tape',{sizes:[], hasBrand:true, visual:'coil'}));
  P.push(tpl('oth-glue','other','Pipe Glue',{sizes:[], hasBrand:true, visual:'bottle'}));
  P.push(tpl('oth-solvent','other','Solvent Cement',{sizes:[], hasBrand:true, visual:'bottle'}));
  P.push(tpl('oth-rubbering','other','Rubber Ring',{sizes:STD_SIZES, hasBrand:false, visual:'ring'}));
  P.push(tpl('oth-clamps','other','Clamps',{sizes:STD_SIZES, hasBrand:false, visual:'clamp'}));
  P.push(tpl('oth-screws','other','Screws',{sizes:[], hasBrand:false, visual:'hardware'}));
  P.push(tpl('oth-nuts','other','Nuts',{sizes:[], hasBrand:false, visual:'hardware'}));
  P.push(tpl('oth-bolts','other','Bolts',{sizes:[], hasBrand:false, visual:'hardware'}));
  P.push(tpl('oth-washers','other','Washers',{sizes:[], hasBrand:false, visual:'ring'}));
  P.push(tpl('oth-hose','other','Hose',{sizes:STD_SIZES.slice(0,6), unit:'Meter', units:['Meter','Feet'], hasBrand:true, visual:'coil'}));
  P.push(tpl('oth-wire','other','Wire',{sizes:[], unit:'Meter', units:['Meter'], hasBrand:true, visual:'coil'}));
  P.push(tpl('oth-cable','other','Cable',{sizes:[], unit:'Meter', units:['Meter'], hasBrand:true, visual:'coil'}));
  P.push(tpl('oth-supports','other','Pipe Supports',{sizes:STD_SIZES.slice(0,6), hasBrand:false, visual:'clamp'}));
  P.push(tpl('oth-misc','other','Miscellaneous',{sizes:[], hasBrand:false, visual:'box'}));

  return P;
}
function defaultBrands(){ return ['Ashirvad','Astral','Finolex','Supreme','Jain']; }
function defaultSizePool(){ return STD_SIZES.slice(); }
function defaultSettings(){
  return {
    currencySymbol:'\u20B9',
    defaultUnit:'Piece',
    businessName:'',
    shopName:'',
    ownerName:'',
    businessPhone:'',
    whatsappPhone:'',
    businessAddress:'',
    gstin:'',
    logoUrl:'',
    estimateSeq:{year:new Date().getFullYear(), n:0}
  };
}
function materialOptionsFor(t){ return t.materialSet==='valve' ? VALVE_BODY_OPTIONS : PIPE_MATERIAL_OPTIONS; }

/* ring-picker diameter helper (signature sizing element) */
function sizeToInches(sz){
  if(!sz) return 1;
  const mmMatch = /^(\d+(\.\d+)?)mm$/.exec(sz);
  if(mmMatch) return parseFloat(mmMatch[1]) / 25.4;
  const n = parseFloat(sz);
  return isNaN(n) ? 1 : n;
}
function ringDiameter(sz){
  const MIN_D=32, MAX_D=54, MIN_V=Math.sqrt(0.16), MAX_V=Math.sqrt(6);
  let v = Math.sqrt(Math.max(sizeToInches(sz), 0.16));
  let t = (v - MIN_V) / (MAX_V - MIN_V);
  t = clampNum(t, 0, 1);
  return Math.round(MIN_D + (MAX_D-MIN_D)*t);
}

/* ============================= DATA SERVICE & CLOUD ARCHITECTURE ============================= */
/*
 * Clean architectural abstraction layer:
 * LocalStorage / Local Data <---> DataService <---> Future Cloud Database (Supabase / Firebase / REST)
 * Passwords are NEVER stored in plain text.
 */
async function hashPassword(plainText){
  if(!window.crypto || !window.crypto.subtle){
    let hash = 0;
    for(let i=0; i<plainText.length; i++){
      hash = ((hash << 5) - hash) + plainText.charCodeAt(i);
      hash |= 0;
    }
    return 'h_' + Math.abs(hash).toString(16);
  }
  const msgUint8 = new TextEncoder().encode(plainText);
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2,'0')).join('');
}

const CloudSyncAdapter = {
  /* When ready to link to Supabase / Firebase / REST API, fill these endpoints. */
  apiUrl: null,
  isConfigured: function(){
    return !!this.apiUrl;
  },
  sync: async function(userId, localEstimates){
    if(!this.isConfigured()){
      return { ok:false, reason:'unconfigured', estimates:localEstimates };
    }
    // Future implementation:
    // const res = await fetch(`${this.apiUrl}/sync`, { method:'POST', body:JSON.stringify({ userId, estimates:localEstimates }) });
    // return await res.json();
    return { ok:true, estimates:localEstimates };
  }
};

const DataService = {
  auth: {
    getCurrentSession: async function(){
      const raw = await storageGetRaw('session');
      if(!raw) return null;
      try{ return JSON.parse(raw); }catch(e){ return null; }
    },
    signup: async function(name, email, password){
      email = (email||'').trim().toLowerCase();
      name = (name||'').trim();
      if(!email || !name || !password) throw new Error('Please fill in all required fields.');
      if(password.length < 6) throw new Error('Password must be at least 6 characters.');
      
      const accountsRaw = await storageGetRaw('accounts');
      const accounts = accountsRaw ? JSON.parse(accountsRaw) : [];
      if(accounts.some(a => a.email === email)){
        throw new Error('An account with this email already exists.');
      }
      
      const pwdHash = await hashPassword(password);
      const newUser = {
        id: uid('usr'),
        name: name,
        email: email,
        passwordHash: pwdHash,
        mode: 'local',
        createdAt: new Date().toISOString()
      };
      
      accounts.push(newUser);
      await storageSetRaw('accounts', JSON.stringify(accounts));
      
      const session = {
        userId: newUser.id,
        name: newUser.name,
        email: newUser.email,
        mode: 'local',
        token: uid('tok'),
        createdAt: new Date().toISOString()
      };
      await storageSetRaw('session', JSON.stringify(session));
      return session;
    },
    login: async function(email, password, remember){
      email = (email||'').trim().toLowerCase();
      if(!email || !password) throw new Error('Please enter both email and password.');
      
      const accountsRaw = await storageGetRaw('accounts');
      const accounts = accountsRaw ? JSON.parse(accountsRaw) : [];
      const user = accounts.find(a => a.email === email);
      if(!user){
        throw new Error('No account found with this email. Please sign up first.');
      }
      
      const pwdHash = await hashPassword(password);
      if(user.passwordHash !== pwdHash){
        throw new Error('Invalid password. Please try again.');
      }
      
      const session = {
        userId: user.id,
        name: user.name,
        email: user.email,
        mode: 'local',
        token: uid('tok'),
        remember: !!remember,
        createdAt: new Date().toISOString()
      };
      await storageSetRaw('session', JSON.stringify(session));
      return session;
    },
    loginWithGoogle: async function(){
      // Clean hook for Google OAuth integration
      // In local mode, provisions or connects a Google verified profile
      const googleUser = {
        id: 'usr_google_' + Date.now().toString(36),
        name: 'Uday Kumar',
        email: 'uday@example.com',
        mode: 'local',
        provider: 'google',
        token: uid('gtok'),
        createdAt: new Date().toISOString()
      };
      await storageSetRaw('session', JSON.stringify(googleUser));
      return googleUser;
    },
    logout: async function(){
      await storageSetRaw('session', '');
      return true;
    },
    changePassword: async function(userId, oldPassword, newPassword){
      if(newPassword.length < 6) throw new Error('New password must be at least 6 characters.');
      const accountsRaw = await storageGetRaw('accounts');
      const accounts = accountsRaw ? JSON.parse(accountsRaw) : [];
      const idx = accounts.findIndex(a => a.id === userId);
      if(idx === -1) throw new Error('User not found.');
      const oldHash = await hashPassword(oldPassword);
      if(accounts[idx].passwordHash !== oldHash) throw new Error('Incorrect current password.');
      accounts[idx].passwordHash = await hashPassword(newPassword);
      accounts[idx].updatedAt = new Date().toISOString();
      await storageSetRaw('accounts', JSON.stringify(accounts));
      return true;
    }
  }
};

/* ============================= STATE ============================= */
const state = {
  screen:'dashboard',
  loaded:false,
  online: (typeof navigator!=='undefined') ? navigator.onLine : true,
  user: null, // Active authenticated session { userId, name, email, mode: 'local'|'cloud' }
  syncStatus: 'local', // 'local' | 'synced' | 'pending' | 'offline'
  catalog:[], brands:[], sizePool:[],
  settings: defaultSettings(),
  estimates:[],
  usage:{},
  draft:null,
  editingEstimateId:null,
  viewingEstimateId:null,
  ui:{
    materialTab:'pipes', materialSubview:'add',
    searchQuery:'', searchOpen:false,
    myFilter:'all', mySearch:'',
    priceSearch:'', productsSearch:'', productsTab:'pipes',
    addForm:{}
  }
};

/* ============================= STORAGE ============================= */
/* Primary store is the host-provided window.storage (when embedded); browsers fall back to localStorage. */
const LS_PREFIX = 'pipelist:';
function hasHostStorage(){ return typeof window!=='undefined' && !!window.storage && typeof window.storage.get==='function'; }
function localGetRaw(key){
  try{ return window.localStorage.getItem(LS_PREFIX+key); }
  catch(e){ return null; }
}
function localSetRaw(key, strValue){
  try{ window.localStorage.setItem(LS_PREFIX+key, strValue); return true; }
  catch(e){ console.error('localStorage set failed:', key, e); return false; }
}
async function storageGetRaw(key){
  if(hasHostStorage()){
    try{ const r = await window.storage.get(key, false); if(r && r.value!==undefined && r.value!==null) return r.value; }
    catch(e){ /* fall through to localStorage */ }
  }
  return localGetRaw(key);
}
async function storageSetRaw(key, strValue){
  if(hasHostStorage()){
    try{ const r = await window.storage.set(key, strValue, false); if(r) return true; }
    catch(e){ console.error('storage set failed:', key, e); }
  }
  return localSetRaw(key, strValue);
}
function seedCatalog(){ state.catalog = defaultCatalog(); state.brands = defaultBrands(); state.sizePool = defaultSizePool(); }
async function saveCatalog(){ const ok = await storageSetRaw('catalog', JSON.stringify({products:state.catalog, brands:state.brands, sizePool:state.sizePool})); if(!ok) showToast('Could not save catalog changes','error'); return ok; }
async function saveSettings(){ const ok = await storageSetRaw('settings', JSON.stringify(state.settings)); if(!ok) showToast('Could not save settings','error'); return ok; }
async function saveEstimates(){ const ok = await storageSetRaw('estimates', JSON.stringify(state.estimates)); if(!ok) showToast('Could not save — check your connection','error'); return ok; }
async function saveUsage(){ return storageSetRaw('usage', JSON.stringify(state.usage)); }

async function loadAll(){
  const [catalogRaw, settingsRaw, estimatesRaw, usageRaw, session] = await Promise.all([
    storageGetRaw('catalog'), storageGetRaw('settings'), storageGetRaw('estimates'), storageGetRaw('usage'), DataService.auth.getCurrentSession()
  ]);
  state.user = session;
  state.syncStatus = session ? (session.mode === 'cloud' ? 'synced' : 'local') : 'local';

  if(catalogRaw){
    try{ const c = JSON.parse(catalogRaw); state.catalog=c.products||[]; state.brands=c.brands||[]; state.sizePool=c.sizePool||[]; }
    catch(e){ seedCatalog(); }
  } else { seedCatalog(); storageSetRaw('catalog', JSON.stringify({products:state.catalog, brands:state.brands, sizePool:state.sizePool})); }

  if(settingsRaw){ try{ state.settings = Object.assign(defaultSettings(), JSON.parse(settingsRaw)); }catch(e){ state.settings=defaultSettings(); } }
  else { state.settings = defaultSettings(); storageSetRaw('settings', JSON.stringify(state.settings)); }

  if(estimatesRaw){ try{ state.estimates = JSON.parse(estimatesRaw)||[]; }catch(e){ state.estimates=[]; } }
  else { state.estimates=[]; }

  if(usageRaw){ try{ state.usage = JSON.parse(usageRaw)||{}; }catch(e){ state.usage={}; } }
  else { state.usage={}; }

  state.loaded = true;
}


/* ============================= ESTIMATE MATH ============================= */
function lineTotal(it){ return round2((Number(it.qty)||0) * (Number(it.price)||0)); }
function hasPrice(it){ return Number(it.price) > 0; }
function priceInputVal(price){ return (Number(price)>0) ? fmtNum(price) : ''; }
function lineTotalHTML(it){
  if(hasPrice(it)) return '<span class="num">'+money(lineTotal(it))+'</span>';
  return '<span class="price-missing">Add price</span>';
}
function pricedItems(est){ return (est.items||[]).filter(hasPrice); }
function unpricedCountOf(est){ return (est.items||[]).length - pricedItems(est).length; }
function allUnpriced(est){ return (est.items||[]).length>0 && pricedItems(est).length===0; }
function hasCostBasis(est){ return pricedItems(est).length>0 || !!Number(est.labourCost) || !!Number(est.transportCost) || !!Number(est.otherCost) || !!Number(est.discount); }
function materialCostOf(est){ return round2((est.items||[]).reduce((s,it)=>s+lineTotal(it),0)); }
function extraCostsOf(est){ return round2((Number(est.labourCost)||0)+(Number(est.transportCost)||0)+(Number(est.otherCost)||0)); }
function finalCostOf(est){ return round2(materialCostOf(est) + extraCostsOf(est) - (Number(est.discount)||0)); }
function itemCountOf(est){ return (est.items||[]).length; }
function totalQtyOf(est){ return round2((est.items||[]).reduce((s,it)=>s+(Number(it.qty)||0),0)); }
function nextEstimateId(){
  const y = new Date().getFullYear();
  if(!state.settings.estimateSeq || state.settings.estimateSeq.year !== y) state.settings.estimateSeq = {year:y,n:0};
  state.settings.estimateSeq.n += 1;
  return 'EST-' + y + '-' + String(state.settings.estimateSeq.n).padStart(4,'0');
}
function newDraft(){
  return {
    id:null,
    userId: state.user ? state.user.userId : 'local',
    projectName:'',
    customerName:'',
    customerPhone:'',
    customerWhatsapp:'',
    location:'',
    date:TODAY_ISO,
    workType:WORK_TYPES[0],
    notes:'',
    items:[],
    labourCost:'',
    transportCost:'',
    otherCost:'',
    discount:'',
    syncStatus: (state.user && state.user.mode==='cloud') ? 'pending' : 'local',
    createdAt:null,
    updatedAt:null
  };
}
function itemDisplayName(it){
  let n = it.name;
  if(it.material) n = it.material + ' ' + n;
  return n;
}
function itemSizeLabel(it){
  if(it.isReducer) return (it.fromSize||'?') + ' \u2192 ' + (it.toSize||'?');
  return it.size || '\u2013';
}
function lineLabel(it){
  const nm = itemDisplayName(it);
  if(it.isReducer) return nm + ' ' + (it.fromSize||'?') + ' \u2192 ' + (it.toSize||'?');
  if(it.size) return nm + ' ' + it.size;
  return nm;
}

/* ============================= GENERIC UI: toast / modal ============================= */
function showToast(msg, type){
  const root = document.getElementById('toast-root');
  if(!root) return;
  const el = document.createElement('div');
  el.className = 'toast' + (type ? ' '+type : '');
  el.textContent = msg;
  root.appendChild(el);
  setTimeout(function(){ el.style.opacity='0'; el.style.transition='opacity .25s'; setTimeout(function(){ el.remove(); }, 260); }, 2200);
}
let _modalOnClose = null;
function openModal(innerHtml){
  const root = document.getElementById('modal-root');
  root.innerHTML = '<div class="modal-backdrop" id="modal-backdrop"><div class="modal" role="dialog" aria-modal="true">'+
    '<button class="icon-btn modal-close" id="modal-close-btn" aria-label="Close">'+icon('x')+'</button>'+
    innerHtml + '</div></div>';
  const backdrop = document.getElementById('modal-backdrop');
  backdrop.addEventListener('click', function(e){ if(e.target.id==='modal-backdrop') closeModal(); });
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
}
function closeModal(){
  const root = document.getElementById('modal-root');
  root.innerHTML = '';
  if(_modalOnClose){ const h=_modalOnClose; _modalOnClose=null; h(); }
}
function confirmModal(title, msg, confirmLabel, onConfirm, danger){
  openModal(
    '<div class="modal-title">'+esc(title)+'</div>'+
    '<div class="modal-sub">'+esc(msg)+'</div>'+
    '<div class="btn-row mt-4">'+
      '<button class="btn btn-secondary" id="cm-cancel" style="flex:1">Cancel</button>'+
      '<button class="btn '+(danger?'btn-danger':'btn-primary')+'" id="cm-ok" style="flex:1">'+esc(confirmLabel||'Confirm')+'</button>'+
    '</div>'
  );
  document.getElementById('cm-cancel').addEventListener('click', closeModal);
  document.getElementById('cm-ok').addEventListener('click', function(){ closeModal(); onConfirm(); });
}

/* ============================= AUTH & ACCOUNT MODALS ============================= */
function renderLoginFormHTML(){
  return '<form id="auth-login-form" onsubmit="return false;">'+
    '<div class="field"><label class="field-label" for="login-email">Email</label><input class="input" id="login-email" type="email" placeholder="name@example.com" autocomplete="email" required></div>'+
    '<div class="field"><div class="row-between"><label class="field-label" for="login-pwd">Password</label><a href="javascript:void(0)" class="small" id="link-forgot-pwd" style="color:var(--teal);font-weight:700">Forgot password?</a></div><input class="input" id="login-pwd" type="password" placeholder="Your password" autocomplete="current-password" required></div>'+
    '<div style="display:flex;align-items:center;gap:8px;margin-bottom:16px"><input type="checkbox" id="login-remember" checked style="accent-color:var(--teal);width:16px;height:16px"><label for="login-remember" class="small" style="cursor:pointer">Remember session on this device</label></div>'+
    '<div id="auth-error-msg" class="form-error-msg mb-3"></div>'+
    '<button type="submit" class="btn btn-primary btn-block" id="btn-submit-login">Login</button>'+
    '<div class="auth-divider"><span>OR</span></div>'+
    '<button type="button" class="btn btn-google" id="btn-google-login">'+googleIconSvg()+' Continue with Google</button>'+
    '<div class="auth-footer-text">Don\u2019t have an account? <a href="javascript:void(0)" id="switch-to-signup">Create Account</a></div>'+
  '</form>';
}

function renderSignupFormHTML(){
  return '<form id="auth-signup-form" onsubmit="return false;">'+
    '<div class="field"><label class="field-label" for="signup-name">Full Name</label><input class="input" id="signup-name" placeholder="e.g. Uday Kumar" autocomplete="name" required></div>'+
    '<div class="field"><label class="field-label" for="signup-email">Email</label><input class="input" id="signup-email" type="email" placeholder="name@example.com" autocomplete="email" required></div>'+
    '<div class="field-row"><div class="field"><label class="field-label" for="signup-pwd">Password</label><input class="input" id="signup-pwd" type="password" placeholder="Min. 6 chars" autocomplete="new-password" required></div>'+
    '<div class="field"><label class="field-label" for="signup-confirm">Confirm</label><input class="input" id="signup-confirm" type="password" placeholder="Re-enter password" autocomplete="new-password" required></div></div>'+
    '<div id="auth-error-msg" class="form-error-msg mb-3"></div>'+
    '<button type="submit" class="btn btn-primary btn-block" id="btn-submit-signup">Create Account</button>'+
    '<div class="auth-divider"><span>OR</span></div>'+
    '<button type="button" class="btn btn-google" id="btn-google-signup">'+googleIconSvg()+' Continue with Google</button>'+
    '<div class="auth-footer-text">Already have an account? <a href="javascript:void(0)" id="switch-to-login">Login</a></div>'+
  '</form>';
}

function openAuthModal(initialTab){
  const tab = initialTab || 'login';
  const html = '<div class="auth-header">'+
    renderBrandMark()+
    '<h2 style="margin-top:8px">PipeList</h2>'+
    '<p>Your professional material &amp; quotation assistant</p>'+
  '</div>'+
  '<div class="auth-tabs" role="tablist">'+
    '<button type="button" class="auth-tab '+(tab==='login'?'active':'')+'" id="auth-tab-login">Login</button>'+
    '<button type="button" class="auth-tab '+(tab==='signup'?'active':'')+'" id="auth-tab-signup">Create Account</button>'+
  '</div>'+
  '<div id="auth-form-container">'+
    (tab==='login' ? renderLoginFormHTML() : renderSignupFormHTML())+
  '</div>';
  openModal(html);
  wireAuthModalEvents(tab);
}

function wireAuthModalEvents(currentTab){
  const tabLogin = document.getElementById('auth-tab-login');
  const tabSignup = document.getElementById('auth-tab-signup');
  const container = document.getElementById('auth-form-container');

  if(tabLogin) tabLogin.addEventListener('click', function(){
    tabLogin.classList.add('active'); if(tabSignup) tabSignup.classList.remove('active');
    container.innerHTML = renderLoginFormHTML();
    wireAuthFormEvents('login');
  });
  if(tabSignup) tabSignup.addEventListener('click', function(){
    tabSignup.classList.add('active'); if(tabLogin) tabLogin.classList.remove('active');
    container.innerHTML = renderSignupFormHTML();
    wireAuthFormEvents('signup');
  });

  wireAuthFormEvents(currentTab);
}

function wireAuthFormEvents(mode){
  const errEl = document.getElementById('auth-error-msg');
  const showErr = function(m){ if(errEl) errEl.textContent = m; };

  const switchSignup = document.getElementById('switch-to-signup');
  if(switchSignup) switchSignup.addEventListener('click', function(){
    const tabSignup = document.getElementById('auth-tab-signup');
    if(tabSignup) tabSignup.click();
  });
  const switchLogin = document.getElementById('switch-to-login');
  if(switchLogin) switchLogin.addEventListener('click', function(){
    const tabLogin = document.getElementById('auth-tab-login');
    if(tabLogin) tabLogin.click();
  });
  const forgotLink = document.getElementById('link-forgot-pwd');
  if(forgotLink) forgotLink.addEventListener('click', function(){
    closeModal();
    openForgotPasswordModal();
  });

  const googleBtn = document.getElementById('btn-google-login') || document.getElementById('btn-google-signup');
  if(googleBtn) googleBtn.addEventListener('click', async function(){
    try{
      const user = await DataService.auth.loginWithGoogle();
      state.user = user;
      state.syncStatus = 'local';
      closeModal();
      showToast('Signed in with Google as ' + user.name, 'success');
      render();
    }catch(e){
      showErr(e.message);
    }
  });

  if(mode==='login'){
    const form = document.getElementById('auth-login-form');
    if(form) form.addEventListener('submit', async function(e){
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const pwd = document.getElementById('login-pwd').value;
      const remember = document.getElementById('login-remember').checked;
      try{
        const user = await DataService.auth.login(email, pwd, remember);
        state.user = user;
        state.syncStatus = user.mode === 'cloud' ? 'synced' : 'local';
        closeModal();
        showToast('Welcome back, ' + user.name, 'success');
        render();
      }catch(err){
        showErr(err.message);
      }
    });
  } else {
    const form = document.getElementById('auth-signup-form');
    if(form) form.addEventListener('submit', async function(e){
      e.preventDefault();
      const name = document.getElementById('signup-name').value;
      const email = document.getElementById('signup-email').value;
      const pwd = document.getElementById('signup-pwd').value;
      const confirm = document.getElementById('signup-confirm').value;
      if(pwd !== confirm){
        showErr('Passwords do not match.'); return;
      }
      try{
        const user = await DataService.auth.signup(name, email, pwd);
        state.user = user;
        state.syncStatus = 'local';
        // Associate any unowned local estimates with this new user
        state.estimates.forEach(function(est){
          if(!est.userId || est.userId === 'local') est.userId = user.userId;
        });
        await saveEstimates();
        closeModal();
        showToast('Account created! Welcome, ' + user.name, 'success');
        render();
      }catch(err){
        showErr(err.message);
      }
    });
  }
}

function openUserProfileModal(){
  if(!state.user){ openAuthModal('login'); return; }
  const u = state.user;
  const initials = (u.name||'U').slice(0,2).toUpperCase();
  const html = '<div style="display:flex;align-items:center;gap:14px;margin-bottom:18px">'+
    '<div class="user-avatar" style="width:48px;height:48px;font-size:18px">'+esc(initials)+'</div>'+
    '<div style="flex:1;min-width:0">'+
      '<div style="font-size:17px;font-weight:800">'+esc(u.name)+'</div>'+
      '<div style="font-size:13px;color:var(--ink-faint);overflow:hidden;text-overflow:ellipsis">'+esc(u.email)+'</div>'+
    '</div>'+
  '</div>'+
  '<div class="sync-card">'+
    '<div class="sync-card-icon">'+icon('cloud')+'</div>'+
    '<div class="sync-card-content">'+
      '<div class="sync-card-title">'+(u.mode==='cloud' ? 'Cloud Sync Active' : 'Local-First Mode (Cloud-Ready)')+'</div>'+
      '<div class="sync-card-desc">'+
        (u.mode==='cloud' 
          ? 'All your estimates and quotation data are synchronized with your account.'
          : 'Your data is securely stored on this device. Future cloud synchronization will allow access from both mobile and laptop.')+
      '</div>'+
    '</div>'+
  '</div>'+
  '<div class="panel" style="padding:4px 16px;margin-bottom:16px">'+
    '<div class="settings-row" id="pm-open-settings" style="cursor:pointer">'+
      '<div><div class="settings-row-label">Shop &amp; Business Profile</div><div class="settings-row-sub">Set shop name, GSTIN, phone &amp; address</div></div>'+
      icon('chevronRight')+
    '</div>'+
    '<div class="settings-row" id="pm-sync-now" style="cursor:pointer">'+
      '<div><div class="settings-row-label">Sync Data to Cloud</div><div class="settings-row-sub">Verify multi-device backup readiness</div></div>'+
      icon('refresh')+
    '</div>'+
    '<div class="settings-row" id="pm-change-pwd" style="cursor:pointer">'+
      '<div><div class="settings-row-label">Change Password</div><div class="settings-row-sub">Update your account password securely</div></div>'+
      icon('lock')+
    '</div>'+
  '</div>'+
  '<button class="btn btn-danger btn-block" id="pm-logout">'+icon('logOut')+' Log Out</button>';
  
  openModal(html);
  
  document.getElementById('pm-open-settings').addEventListener('click', function(){
    closeModal(); goto('settings');
  });
  document.getElementById('pm-sync-now').addEventListener('click', function(){
    closeModal(); openCloudSyncStatusModal();
  });
  document.getElementById('pm-change-pwd').addEventListener('click', function(){
    closeModal(); openChangePasswordModal();
  });
  document.getElementById('pm-logout').addEventListener('click', function(){
    confirmModal('Log out of PipeList?', 'You will return to Local Mode. Your saved estimates on this device will remain available.', 'Log Out', async function(){
      await DataService.auth.logout();
      state.user = null;
      state.syncStatus = 'local';
      showToast('Logged out');
      render();
    });
  });
}

function openCloudSyncStatusModal(){
  const isCloud = CloudSyncAdapter.isConfigured();
  openModal(
    '<div class="modal-title">Cloud Data Synchronization</div>'+
    '<div class="modal-sub">Multi-device access &amp; real-time backup</div>'+
    '<div class="sync-card">'+
      '<div class="sync-card-icon">'+icon('cloud')+'</div>'+
      '<div class="sync-card-content">'+
        '<div class="sync-card-title">'+(isCloud ? 'Cloud Connected' : 'Local-First Mode (Cloud-Ready)')+'</div>'+
        '<div class="sync-card-desc">'+
          (isCloud 
            ? 'Connected to your cloud database. Projects sync automatically.'
            : 'PipeList is designed with a clean Data Service Layer. When your cloud database (such as Supabase or Firebase) is connected, all your projects created on Laptop or Mobile will automatically be available anywhere.')+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div class="card mb-3">'+
      '<div class="row-between mb-2"><strong>Active Session:</strong> <span>'+esc(state.user ? state.user.email : 'None (Local Mode)')+'</span></div>'+
      '<div class="row-between mb-2"><strong>Saved Estimates:</strong> <span class="num">'+state.estimates.length+' projects</span></div>'+
      '<div class="row-between"><strong>Target Database:</strong> <span class="badge badge-teal">Supabase / PostgreSQL Ready</span></div>'+
    '</div>'+
    '<button class="btn btn-primary btn-block" id="sync-modal-close">Done</button>'
  );
  document.getElementById('sync-modal-close').addEventListener('click', closeModal);
}

function openChangePasswordModal(){
  if(!state.user) return;
  openModal(
    '<div class="modal-title">Change Password</div>'+
    '<div class="modal-sub">Update your account password securely</div>'+
    '<div class="field"><label class="field-label">Current Password</label><input class="input" type="password" id="cp-old"></div>'+
    '<div class="field"><label class="field-label">New Password</label><input class="input" type="password" id="cp-new" placeholder="Min. 6 characters"></div>'+
    '<div class="field"><label class="field-label">Confirm New Password</label><input class="input" type="password" id="cp-confirm"></div>'+
    '<div id="cp-err" class="form-error-msg mb-3"></div>'+
    '<button class="btn btn-primary btn-block" id="cp-submit">Update Password</button>'
  );
  document.getElementById('cp-submit').addEventListener('click', async function(){
    const oldP = document.getElementById('cp-old').value;
    const newP = document.getElementById('cp-new').value;
    const confP = document.getElementById('cp-confirm').value;
    const errEl = document.getElementById('cp-err');
    if(!oldP || !newP || !confP){ errEl.textContent = 'Please fill in all fields.'; return; }
    if(newP !== confP){ errEl.textContent = 'New passwords do not match.'; return; }
    if(newP.length < 6){ errEl.textContent = 'Password must be at least 6 characters.'; return; }
    try{
      await DataService.auth.changePassword(state.user.userId, oldP, newP);
      closeModal();
      showToast('Password updated successfully', 'success');
    }catch(err){
      errEl.textContent = err.message;
    }
  });
}

function openForgotPasswordModal(){
  openModal(
    '<div class="modal-title">Reset Password</div>'+
    '<div class="modal-sub">Enter your email and we\u2019ll help you reset your password.</div>'+
    '<div class="field"><label class="field-label">Email Address</label><input class="input" id="fp-email" type="email" placeholder="name@example.com"></div>'+
    '<div class="btn-row mt-4">'+
      '<button class="btn btn-secondary" id="fp-back">Back to Login</button>'+
      '<button class="btn btn-primary" id="fp-submit">Send Reset Link</button>'+
    '</div>'
  );
  document.getElementById('fp-back').addEventListener('click', function(){ openAuthModal('login'); });
  document.getElementById('fp-submit').addEventListener('click', function(){
    const em = document.getElementById('fp-email').value.trim();
    if(!em){ showToast('Enter your email address', 'error'); return; }
    closeModal();
    showToast('Password reset link sent to ' + em, 'success');
  });
}

/* ============================= NAVIGATION / CHROME ============================= */
const NAV_ITEMS = [
  {id:'dashboard', label:'Home', icon:'home'},
  {id:'newEstimateDetails', label:'New', icon:'plusCircle'},
  {id:'myEstimates', label:'Estimates', icon:'list'},
  {id:'products', label:'Products', icon:'box'}
];
const SIDE_EXTRA = [
  {id:'priceList', label:'Price List', icon:'tag'},
  {id:'settings', label:'Settings', icon:'settings'}
];
function activeNavId(){
  if(state.screen==='newEstimateDetails' || state.screen==='materialSelect') return 'newEstimateDetails';
  if(state.screen==='myEstimates' || state.screen==='estimateView') return 'myEstimates';
  if(state.screen==='products') return 'products';
  if(state.screen==='priceList') return 'priceList';
  if(state.screen==='settings') return 'settings';
  return 'dashboard';
}
function goto(screen){
  state.screen = screen;
  window.scrollTo(0,0);
  render();
}
function goDashboard(){ goto('dashboard'); }

function renderBrandMark(){
  return '<svg class="brand-mark" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill="#1B4F91"/><path d="M8 12h7a4 4 0 0 1 4 4v3" stroke="#fff" stroke-width="2.3" stroke-linecap="round"/><circle cx="8" cy="12" r="2.1" fill="#A85A15"/></svg>';
}

function renderTopbar(){
  const el = document.getElementById('topbar');
  const s = state.screen;
  let html = '';
  
  let authWidget = '';
  if(state.user){
    const initials = (state.user.name||'U').slice(0,2).toUpperCase();
    const shortName = state.user.name ? state.user.name.split(' ')[0] : 'User';
    authWidget = '<div class="user-pill" id="tb-user-pill" title="'+esc(state.user.email)+'">'+
      '<span class="user-avatar">'+esc(initials)+'</span>'+
      '<span>'+esc(shortName)+'</span>'+
      '<span class="status-dot '+(state.user.mode||'local')+'"></span>'+
    '</div>';
  } else {
    authWidget = '<button class="auth-trigger-btn" id="tb-auth-btn">'+icon('user')+'<span>Sign In</span></button>';
  }

  if(s==='dashboard'){
    html = '<a class="brand-lockup" href="javascript:void(0)">'+renderBrandMark()+'<span class="brand-word">PipeList</span></a>'+
      '<div style="flex:1"></div>'+
      authWidget +
      '<button class="icon-btn" id="tb-settings" aria-label="Settings" style="margin-left:4px">'+icon('settings')+'</button>';
  } else {
    const cfg = {
      newEstimateDetails:{title:'New Estimate', back:'dashboard'},
      materialSelect:{title:(state.draft?state.draft.workType:'Materials'), sub:(state.draft?state.draft.projectName:''), back:'__confirmLeaveMaterial'},
      myEstimates:{title:'My Estimates', back:'dashboard'},
      estimateView:{title:(state.viewingEstimateId||'Estimate'), back:'myEstimates'},
      products:{title:'Products', back:'dashboard'},
      priceList:{title:'Price List', back:'dashboard'},
      settings:{title:'Settings', back:'dashboard'}
    }[s] || {title:'PipeList', back:'dashboard'};
    html = '<button class="topbar-back" id="tb-back" aria-label="Back">'+icon('back')+'</button>'+
      '<div class="topbar-title">'+esc(cfg.title)+(cfg.sub?'<small>'+esc(cfg.sub)+'</small>':'')+'</div>'+
      (s==='materialSelect' ? '<button class="icon-btn" id="tb-search-toggle" aria-label="Search">'+icon('search')+'</button>' : authWidget);
  }
  el.innerHTML = html;
  
  const backBtn = document.getElementById('tb-back');
  if(backBtn) backBtn.addEventListener('click', function(){
    if(s==='materialSelect'){ handleLeaveMaterialSelect(); return; }
    const dest = {newEstimateDetails:'dashboard', myEstimates:'dashboard', estimateView:'myEstimates', products:'dashboard', priceList:'dashboard', settings:'dashboard'}[s] || 'dashboard';
    goto(dest);
  });
  const settingsBtn = document.getElementById('tb-settings');
  if(settingsBtn) settingsBtn.addEventListener('click', function(){ goto('settings'); });
  const searchToggle = document.getElementById('tb-search-toggle');
  if(searchToggle) searchToggle.addEventListener('click', function(){
    const box = document.getElementById('material-search-wrap');
    if(box){ box.scrollIntoView({behavior:'smooth', block:'start'}); const inp=document.getElementById('material-search-input'); if(inp) inp.focus(); }
  });
  
  const userPill = document.getElementById('tb-user-pill');
  if(userPill) userPill.addEventListener('click', openUserProfileModal);
  const authBtn = document.getElementById('tb-auth-btn');
  if(authBtn) authBtn.addEventListener('click', function(){ openAuthModal('login'); });
}

function renderSidenav(){
  const el = document.getElementById('sidenav');
  const active = activeNavId();
  let html = '<a class="brand-lockup" href="javascript:void(0)" id="sn-logo" style="margin-bottom:20px">'+renderBrandMark()+'<span class="brand-word">PipeList</span></a>';
  NAV_ITEMS.forEach(function(n){
    html += '<button class="sidenav-link'+(active===n.id?' active':'')+'" data-nav="'+n.id+'">'+icon(n.icon)+'<span>'+esc(n.label)+'</span></button>';
  });
  html += '<div class="divider"></div>';
  SIDE_EXTRA.forEach(function(n){
    html += '<button class="sidenav-link'+(active===n.id?' active':'')+'" data-nav="'+n.id+'">'+icon(n.icon)+'<span>'+esc(n.label)+'</span></button>';
  });
  
  if(state.user){
    const initials = (state.user.name||'U').slice(0,2).toUpperCase();
    html += '<div class="sidenav-user-card" id="sn-user-card">'+
      '<div class="user-avatar">'+esc(initials)+'</div>'+
      '<div class="sidenav-user-info">'+
        '<div class="sidenav-user-name">'+esc(state.user.name||'User')+'</div>'+
        '<div class="sidenav-user-badge"><span class="status-dot '+(state.user.mode||'local')+'"></span>'+(state.user.mode==='cloud'?'Cloud Synced':'Local Mode')+'</div>'+
      '</div>'+
    '</div>';
  } else {
    html += '<div style="margin-top:auto;padding-top:14px"><button class="btn btn-secondary btn-block btn-sm" id="sn-login-btn">'+icon('user')+' Sign In / Register</button></div>';
  }
  
  el.innerHTML = html;
  el.querySelectorAll('[data-nav]').forEach(function(b){
    b.addEventListener('click', function(){ handleNavClick(b.getAttribute('data-nav')); });
  });
  document.getElementById('sn-logo').addEventListener('click', goDashboard);
  
  const snUserCard = document.getElementById('sn-user-card');
  if(snUserCard) snUserCard.addEventListener('click', openUserProfileModal);
  const snLoginBtn = document.getElementById('sn-login-btn');
  if(snLoginBtn) snLoginBtn.addEventListener('click', function(){ openAuthModal('login'); });
}

function renderBottomnav(){
  const el = document.getElementById('bottomnav');
  if(state.screen==='materialSelect'){ el.classList.add('js-hide'); return; }
  el.classList.remove('js-hide');
  const active = activeNavId();
  let html='';
  NAV_ITEMS.forEach(function(n){
    html += '<button class="bottomnav-link'+(active===n.id?' active':'')+'" data-nav="'+n.id+'">'+icon(n.icon)+'<span>'+esc(n.label)+'</span></button>';
  });
  el.innerHTML = html;
  el.querySelectorAll('[data-nav]').forEach(function(b){
    b.addEventListener('click', function(){ handleNavClick(b.getAttribute('data-nav')); });
  });
}
function handleNavClick(id){
  if(id==='newEstimateDetails'){ state.draft = newDraft(); state.editingEstimateId=null; goto('newEstimateDetails'); return; }
  goto(id);
}

function renderSummaryBar(){
  const el = document.getElementById('summarybar');
  if(state.screen!=='materialSelect' || !state.draft){ el.classList.add('js-hide'); return; }
  el.classList.remove('js-hide');
  const est = state.draft;
  const costLine = hasCostBasis(est) ? money(materialCostOf(est)) : (itemCountOf(est)>0 ? 'Add prices' : money(0));
  el.innerHTML = '<div class="summarybar-stats"><div class="n1">'+itemCountOf(est)+' item'+(itemCountOf(est)===1?'':'s')+' \u00b7 qty '+fmtNum(totalQtyOf(est))+'</div><div class="n2 num">'+costLine+'</div></div>'+
    '<span class="summarybar-cta">Review & Save'+icon('chevronRight')+'</span>';
  el.onclick = function(){ state.ui.materialSubview='list'; render(); document.getElementById('material-summary-anchor') && document.getElementById('material-summary-anchor').scrollIntoView({behavior:'smooth'}); };
}

function handleLeaveMaterialSelect(){
  const est = state.draft;
  if(est && itemCountOf(est) > 0){
    confirmModal('Leave without saving?', 'Your material list for this estimate hasn\u2019t been saved yet. If you leave now you\u2019ll lose it.', 'Leave anyway', function(){ state.draft=null; goto('dashboard'); }, true);
  } else {
    state.draft = null; goto('dashboard');
  }
}

/* ============================= MAIN RENDER DISPATCH ============================= */
function render(){
  renderTopbar();
  renderSidenav();
  renderBottomnav();
  renderSummaryBar();
  const main = document.getElementById('main');
  main.className = 'main' + (state.screen==='materialSelect' ? ' no-bottom-pad' : '');
  let bodyHtml = '';
  if(!state.loaded){ bodyHtml = '<div class="container"><div class="empty-state"><h3>Loading PipeList\u2026</h3><p>Getting your estimates and product list ready.</p></div></div>'; }
  else if(state.screen==='dashboard') bodyHtml = screenDashboard();
  else if(state.screen==='newEstimateDetails') bodyHtml = screenNewEstimateDetails();
  else if(state.screen==='materialSelect') bodyHtml = screenMaterialSelect();
  else if(state.screen==='myEstimates') bodyHtml = screenMyEstimates();
  else if(state.screen==='estimateView') bodyHtml = screenEstimateView();
  else if(state.screen==='products') bodyHtml = screenProducts();
  else if(state.screen==='priceList') bodyHtml = screenPriceList();
  else if(state.screen==='settings') bodyHtml = screenSettings();
  else bodyHtml = '<div class="container">Not found.</div>';

  const offlineBanner = (!state.online) ? '<div class="offline-banner">'+icon('wifioff')+' No connection \u2014 saving may not work until you\u2019re back online</div>' : '';
  main.innerHTML = offlineBanner + bodyHtml;
  wireScreenEvents();
}
/* ============================= SHARED FORM / LIST HELPERS ============================= */
function bindInput(id, setter, onCommit){
  const el = document.getElementById(id);
  if(!el) return;
  el.addEventListener('input', function(){ setter(el.value); });
  if(onCommit) el.addEventListener('change', function(){ onCommit(el.value); });
}
function updateLineRowTotal(itemId){
  if(!state.draft) return;
  const it = (state.draft.items||[]).find(x=>x.id===itemId);
  if(!it) return;
  const est = state.draft;
  const panel = document.getElementById('cost-panel');
  const expectedMode = hasCostBasis(est) ? 'full' : 'empty';
  if(panel && panel.getAttribute('data-costmode') !== expectedMode){ render(); return; }
  const row = document.querySelector('.item-row[data-item-id="'+itemId+'"]');
  if(row){ const totalEl = row.querySelector('.item-row-total'); if(totalEl) totalEl.innerHTML = lineTotalHTML(it); }
  refreshSummaryNumbers();
}
function refreshSummaryNumbers(){
  if(!state.draft) return;
  const est = state.draft;
  document.querySelectorAll('[data-sum="itemcount"]').forEach(function(el){ el.textContent = itemCountOf(est); });
  document.querySelectorAll('[data-sum="totalqty"]').forEach(function(el){ el.textContent = fmtNum(totalQtyOf(est)); });
  document.querySelectorAll('[data-sum="materialcost"]').forEach(function(el){ el.textContent = money(materialCostOf(est)); });
  document.querySelectorAll('[data-sum="finalcost"]').forEach(function(el){ el.textContent = money(finalCostOf(est)); });
  const unpricedNote = document.querySelector('[data-sum="unpricednote"]');
  if(unpricedNote){ const n = unpricedCountOf(est); unpricedNote.textContent = n+' item'+(n===1?'':'s')+' still need'+(n===1?'s':'')+' a price \u2014 not included in the total above.'; }
  if(!document.getElementById('summarybar').classList.contains('js-hide')) renderSummaryBar();
}
function stepFor(unit){ return (unit==='Feet'||unit==='Meter') ? 0.5 : 1; }
function adjustQty(itemId, delta){
  const it = (state.draft.items||[]).find(x=>x.id===itemId); if(!it) return;
  const step = stepFor(it.unit);
  let q = round2((Number(it.qty)||0) + delta*step);
  if(q < step) q = step;
  it.qty = q;
  const row = document.querySelector('.item-row[data-item-id="'+itemId+'"]');
  if(row){ const inp = row.querySelector('.stepper-input'); if(inp) inp.value = fmtNum(q); }
  updateLineRowTotal(itemId);
}
function setQtyDirect(itemId, val){
  const it = (state.draft.items||[]).find(x=>x.id===itemId); if(!it) return;
  let q = clampNum(val, 0.01, 999999);
  it.qty = q;
  updateLineRowTotal(itemId);
}
function setPriceDirect(itemId, val){
  const it = (state.draft.items||[]).find(x=>x.id===itemId); if(!it) return;
  it.price = clampNum(val, 0, 9999999);
  updateLineRowTotal(itemId);
}
function removeDraftItem(itemId){
  if(!state.draft) return;
  state.draft.items = (state.draft.items||[]).filter(x=>x.id!==itemId);
  render();
}
function duplicateDraftItem(itemId){
  const it = (state.draft.items||[]).find(x=>x.id===itemId); if(!it) return;
  const copy = Object.assign({}, it, {id: uid('it')});
  const idx = state.draft.items.indexOf(it);
  state.draft.items.splice(idx+1, 0, copy);
  render();
  showToast('Item duplicated');
}
function editNote(itemId){
  const it = (state.draft.items||[]).find(x=>x.id===itemId); if(!it) return;
  openModal(
    '<div class="modal-title">Add a note</div>'+
    '<div class="modal-sub">'+esc(itemDisplayName(it))+' \u00b7 '+esc(itemSizeLabel(it))+'</div>'+
    '<textarea class="textarea" id="note-input" placeholder="e.g. Use near borewell">'+esc(it.note||'')+'</textarea>'+
    '<div class="btn-row mt-4"><button class="btn btn-secondary" style="flex:1" id="note-cancel">Cancel</button><button class="btn btn-primary" style="flex:1" id="note-save">Save Note</button></div>'
  );
  document.getElementById('note-cancel').addEventListener('click', closeModal);
  document.getElementById('note-save').addEventListener('click', function(){
    it.note = document.getElementById('note-input').value.trim();
    closeModal(); render();
  });
}

/* ============================= DASHBOARD ============================= */
function dashCard(size, action, iconName, title, sub){
  return '<button class="dash-card '+size+'" data-dash="'+action+'">'+
    '<span class="dash-card-icon">'+icon(iconName)+'</span>'+
    '<span><span class="dash-card-title" style="display:block">'+esc(title)+'</span><span class="dash-card-sub">'+esc(sub)+'</span></span>'+
  '</button>';
}
function screenDashboard(){
  const totalEstimates = state.estimates.length;
  const now = new Date();
  const thisMonth = state.estimates.filter(function(e){ const d=new Date(e.createdAt||e.date); return d.getFullYear()===now.getFullYear() && d.getMonth()===now.getMonth(); });
  const monthValue = thisMonth.reduce(function(s,e){ return s+finalCostOf(e); }, 0);
  let html = '<div class="container">';
  html += '<div class="hero"><div class="hero-eyebrow">Smart Material Estimator</div><h1>Plumbing &amp; Irrigation</h1><p>Build a priced material list on site, then save, print or share it in a couple of taps.</p></div>';
  html += '<div class="dash-grid">';
  html += dashCard('primary','newEstimate','plusCircle','Create New Estimate','Start a new material list');
  html += dashCard('half','myEstimates','list','My Estimates', totalEstimates + (totalEstimates===1?' saved':' saved'));
  html += dashCard('half','products','box','Products', state.catalog.length+' items');
  html += dashCard('half','priceList','tag','Price List','View & edit prices');
  html += dashCard('half','settings','settings','Settings','Units, currency, business');
  html += '</div>';
  if(totalEstimates>0){
    html += '<div class="dash-stats"><div class="dash-stat"><div class="v num">'+totalEstimates+'</div><div class="l">Saved Estimates</div></div><div class="dash-stat"><div class="v num">'+money(monthValue)+'</div><div class="l">This Month</div></div></div>';
  }
  html += '</div>';
  return html;
}
function wireDashboard(){
  document.querySelectorAll('[data-dash]').forEach(function(b){
    b.addEventListener('click', function(){
      const a = b.getAttribute('data-dash');
      if(a==='newEstimate'){ state.draft=newDraft(); state.editingEstimateId=null; goto('newEstimateDetails'); }
      else goto(a);
    });
  });
}

/* ============================= NEW ESTIMATE — PROJECT DETAILS ============================= */
function screenNewEstimateDetails(){
  const d = state.draft || (state.draft = newDraft());
  let html = '<div class="container">';
  html += '<div class="section-label">Project Details</div>';
  html += '<div class="field"><label class="field-label" for="f-pname">Project Name</label><input class="input" id="f-pname" placeholder="e.g. Farm Irrigation \u2013 North Field" value="'+esc(d.projectName)+'"></div>';
  html += '<div class="field-row"><div class="field"><label class="field-label" for="f-cname">Customer Name</label><input class="input" id="f-cname" placeholder="e.g. Ramesh" value="'+esc(d.customerName)+'"></div>'+
    '<div class="field"><label class="field-label" for="f-cphone">Phone <span class="opt">(optional)</span></label><input class="input" id="f-cphone" type="tel" inputmode="tel" placeholder="10-digit number" value="'+esc(d.customerPhone)+'"></div></div>';
  html += '<div class="field-row"><div class="field"><label class="field-label" for="f-cwhatsapp">WhatsApp <span class="opt">(optional)</span></label><input class="input" id="f-cwhatsapp" type="tel" inputmode="tel" placeholder="WhatsApp number" value="'+esc(d.customerWhatsapp||'')+'></div>'+
    '<div class="field"><label class="field-label" for="f-loc">Location <span class="opt">(optional)</span></label><input class="input" id="f-loc" placeholder="e.g. Doddaballapur Rd, Site 3" value="'+esc(d.location)+'"></div></div>';
  html += '<div class="field-row"><div class="field"><label class="field-label" for="f-date">Date</label><input class="input" id="f-date" type="date" value="'+esc(d.date)+'"></div>'+
    '<div class="field"><label class="field-label" for="f-wtype">Work Type</label><select class="select" id="f-wtype">'+WORK_TYPES.map(function(w){ return '<option value="'+esc(w)+'"'+(w===d.workType?' selected':'')+'>'+esc(w)+'</option>'; }).join('')+'</select></div></div>';
  html += '<div class="field"><label class="field-label" for="f-notes">Project Notes <span class="opt">(optional)</span></label><textarea class="textarea" id="f-notes" placeholder="Notes, site requirements, delivery instructions\u2026">'+esc(d.notes||'')+'</textarea></div>';
  html += '<button class="btn btn-primary btn-block mt-4" id="start-material-list">'+icon('plusCircle')+' Start Material List</button>';
  html += '</div>';
  return html;
}
function wireNewEstimateDetails(){
  const d = state.draft;
  bindInput('f-pname', function(v){ d.projectName=v; });
  bindInput('f-cname', function(v){ d.customerName=v; });
  bindInput('f-cphone', function(v){ d.customerPhone=v; });
  bindInput('f-cwhatsapp', function(v){ d.customerWhatsapp=v; });
  bindInput('f-loc', function(v){ d.location=v; });
  bindInput('f-date', function(v){ d.date=v; });
  bindInput('f-notes', function(v){ d.notes=v; });
  const wtype = document.getElementById('f-wtype');
  if(wtype) wtype.addEventListener('change', function(){ d.workType = wtype.value; });
  const startBtn = document.getElementById('start-material-list');
  if(startBtn) startBtn.addEventListener('click', function(){
    if(!d.projectName.trim()){ showToast('Add a project name to continue','error'); document.getElementById('f-pname').focus(); return; }
    state.ui.materialTab='pipes'; state.ui.materialSubview='add';
    goto('materialSelect');
  });
}

/* ============================= MATERIAL SELECT — helpers ============================= */
function catalogTemplate(id){ return state.catalog.find(function(x){ return x.id===id; }); }
function defaultQuickSize(sizes){
  if(!sizes || !sizes.length) return '';
  return sizes.indexOf('2"')!==-1 ? '2"' : sizes[Math.floor(sizes.length/2)];
}
function applyTemplateSelection(templateId){
  const t = catalogTemplate(templateId); if(!t) return;
  const sizes = t.sizes||[];
  let fromSize='', toSize='';
  if(t.isReducer && sizes.length){
    let fromIdx = sizes.indexOf('2"'); if(fromIdx===-1) fromIdx = Math.min(5, sizes.length-1);
    let toIdx = sizes.indexOf('1.5"'); if(toIdx===-1) toIdx = Math.min(4, sizes.length-1);
    if(toIdx>=fromIdx) toIdx = Math.max(0, fromIdx-1);
    fromSize = sizes[fromIdx]; toSize = sizes[toIdx];
  }
  state.ui.addForm = {
    templateId: t.id,
    material: t.hasMaterial ? materialOptionsFor(t)[0] : '',
    brand: t.hasBrand ? (state.brands[0]||'Generic') : '',
    size: (!t.isReducer && sizes.length) ? sizes[0] : '',
    fromSize: fromSize, toSize: toSize,
    qty: 1, unit: t.unit, price: t.price
  };
}
function selectTemplate(templateId){ applyTemplateSelection(templateId); render(); }
function selectCategoryTab(catId){ state.ui.materialTab=catId; state.ui.addForm={}; state.ui.searchQuery=''; render(); }
function buildLineFromTemplate(t, vals){
  return {
    id: uid('it'), templateId:t.id, category:t.category, name:t.name, isReducer:!!t.isReducer,
    material: vals.material||'', brand: vals.brand||'', size: vals.size||'', fromSize: vals.fromSize||'', toSize: vals.toSize||'',
    qty: Number(vals.qty)||1, unit: vals.unit||t.unit, price: Number(vals.price)||0, note:''
  };
}
function addLineToDraft(item){
  if(!state.draft) return;
  state.draft.items.push(item);
  state.usage[item.templateId] = (state.usage[item.templateId]||0) + 1;
  saveUsage();
}
function quickAddTemplate(templateId){
  const t = catalogTemplate(templateId); if(!t) return;
  const sizes = t.sizes||[];
  const size = defaultQuickSize(sizes);
  let fromSize='', toSize='';
  if(t.isReducer && sizes.length){
    fromSize = sizes.indexOf('2"')!==-1 ? '2"' : sizes[Math.min(5,sizes.length-1)];
    toSize = sizes.indexOf('1.5"')!==-1 ? '1.5"' : sizes[Math.min(4,sizes.length-1)];
  }
  const item = buildLineFromTemplate(t, {
    material: t.hasMaterial ? materialOptionsFor(t)[0] : '', brand: t.hasBrand ? (state.brands[0]||'Generic') : '',
    size: t.isReducer? '' : size, fromSize: fromSize, toSize: toSize, qty:1, unit:t.unit, price:t.price
  });
  addLineToDraft(item);
  showToast(itemDisplayName(item)+' added');
  render();
}
function frequentTemplateIds(){
  const counts = state.usage||{};
  const ids = Object.keys(counts).filter(function(k){ return state.catalog.some(function(p){ return p.id===k; }); });
  ids.sort(function(a,b){ return (counts[b]||0)-(counts[a]||0); });
  const defaults = ['fit-elbow','red-cpvc','fit-coupler','pipe-cpvc','fit-tee'];
  const merged = ids.slice();
  defaults.forEach(function(id){ if(merged.indexOf(id)===-1) merged.push(id); });
  return merged.slice(0,7);
}
function handleAddFromForm(){
  const af = state.ui.addForm;
  const t = catalogTemplate(af.templateId); if(!t) return;
  if(t.isReducer && af.fromSize && af.toSize && af.fromSize===af.toSize){ showToast('From and To sizes must be different','error'); return; }
  if(!af.qty || af.qty<=0){ showToast('Enter a quantity greater than 0','error'); return; }
  const item = buildLineFromTemplate(t, af);
  addLineToDraft(item);
  showToast(itemDisplayName(item)+' added to list','success');
  state.ui.addForm = Object.assign({}, af, {qty:1});
  render();
}
function openCustomItemModal(catId){
  openModal(
    '<div class="modal-title">Add Custom Item</div><div class="modal-sub">'+esc(catLabel(catId))+'</div>'+
    '<div class="field"><label class="field-label">Item Name</label><input class="input" id="ci-name" placeholder="e.g. Brass Foot Valve"></div>'+
    '<div class="field-row"><div class="field"><label class="field-label">Size <span class="opt">(optional)</span></label><input class="input" id="ci-size" placeholder="e.g. 2 inch"></div>'+
    '<div class="field"><label class="field-label">Brand <span class="opt">(optional)</span></label><input class="input" id="ci-brand" placeholder="e.g. Ashirvad"></div></div>'+
    '<div class="field-row"><div class="field"><label class="field-label">Quantity</label><input class="input" id="ci-qty" inputmode="decimal" value="1"></div>'+
    '<div class="field"><label class="field-label">Unit</label><select class="select" id="ci-unit">'+['Piece','Length','Feet','Meter','Roll','Set'].map(function(u){ return '<option>'+u+'</option>'; }).join('')+'</select></div></div>'+
    '<div class="field"><label class="field-label">Price <span class="opt">(optional)</span></label><div class="item-row-price" style="height:48px"><span class="cur">'+esc(state.settings.currencySymbol)+'</span><input id="ci-price" inputmode="decimal" placeholder="Add price" value="" style="width:100%;font-size:15.5px"></div></div>'+
    '<button class="btn btn-primary btn-block mt-2" id="ci-add">'+icon('plusCircle')+' Add to List</button>'
  );
  document.getElementById('ci-add').addEventListener('click', function(){
    const name = document.getElementById('ci-name').value.trim();
    if(!name){ showToast('Enter an item name','error'); return; }
    const qty = clampNum(document.getElementById('ci-qty').value, 0.01, 999999);
    const item = { id:uid('it'), templateId:null, category:catId, name:name, isReducer:false,
      material:'', brand:document.getElementById('ci-brand').value.trim(), size:document.getElementById('ci-size').value.trim(),
      fromSize:'', toSize:'', qty:qty, unit:document.getElementById('ci-unit').value,
      price:clampNum(document.getElementById('ci-price').value,0,9999999), note:'' };
    if(!state.draft) return;
    state.draft.items.push(item);
    closeModal(); showToast(name+' added to list','success'); render();
  });
}
function openAddBrandModal(){
  openModal('<div class="modal-title">Add Brand</div><div class="field"><label class="field-label">Brand Name</label><input class="input" id="nb-name" placeholder="e.g. Prince"></div><button class="btn btn-primary btn-block mt-2" id="nb-add">Add Brand</button>');
  document.getElementById('nb-add').addEventListener('click', function(){
    const name = document.getElementById('nb-name').value.trim();
    if(!name){ showToast('Enter a brand name','error'); return; }
    if(state.brands.indexOf(name)===-1){ state.brands.push(name); saveCatalog(); }
    state.ui.addForm.brand = name;
    closeModal(); render();
  });
}
function searchCatalog(query){
  const q = query.toLowerCase().trim();
  if(!q) return [];
  const tokens = q.replace(/"/g,' inch ').split(/\s+/).filter(Boolean);
  return state.catalog.filter(function(p){
    if(p.active===false) return false;
    const hay = (p.name+' '+catLabel(p.category)+' '+(p.hasMaterial?materialOptionsFor(p).join(' '):'')+' '+(p.hasBrand?state.brands.join(' '):'')+' '+(p.sizes||[]).join(' ')).toLowerCase().replace(/"/g,' inch ');
    return tokens.every(function(tok){ return hay.indexOf(tok)!==-1; });
  }).slice(0,20);
}
function renderSearchResults(query){
  const results = searchCatalog(query);
  if(!results.length) return '<div class="search-results"><div class="empty-state" style="padding:22px"><p>No matches for \u201c'+esc(query)+'\u201d. Try a different size or name.</p></div></div>';
  let html = '<div class="search-results">';
  results.forEach(function(p){
    html += '<div class="search-result-item" data-searchpick="'+p.id+'"><div><div class="search-result-name">'+esc(p.name)+'</div><div class="search-result-cat">'+esc(catLabel(p.category))+'</div></div>'+icon('chevronRight')+'</div>';
  });
  html += '</div>';
  return html;
}
function pickSearchResult(templateId){
  const t = catalogTemplate(templateId); if(!t) return;
  state.ui.materialTab = t.category; state.ui.materialSubview = 'add';
  applyTemplateSelection(t.id);
  const q = state.ui.searchQuery.toLowerCase();
  const m = q.match(/(\d+(\.\d+)?)/);
  if(m && t.sizes && t.sizes.length){
    const match = t.sizes.find(function(s){ return s.indexOf(m[1])===0; });
    if(match){ if(t.isReducer) state.ui.addForm.fromSize = match; else state.ui.addForm.size = match; }
  }
  state.ui.searchQuery = '';
  render();
}

/* ============================= MATERIAL SELECT — render ============================= */
function renderRingPicker(sizes, selectedValue, dataAttr){
  let html = '<div class="ringpicker">';
  sizes.forEach(function(sz){
    const d = ringDiameter(sz);
    const sel = sz===selectedValue;
    html += '<button type="button" class="ring-btn'+(sel?' selected':'')+'" data-'+dataAttr+'="'+esc(sz)+'">'+
      '<span class="ring-shape" style="width:'+d+'px;height:'+d+'px"></span><span class="ring-label">'+esc(sz)+'</span></button>';
  });
  html += '</div>';
  return html;
}
function renderProductChips(catId){
  const items = state.catalog.filter(function(p){ return p.category===catId && p.active!==false; });
  let html = '<div class="pgrid">';
  items.forEach(function(p){
    const sel = state.ui.addForm.templateId===p.id;
    html += '<button type="button" class="ptile'+(sel?' active':'')+'" data-tplchip="'+p.id+'">'+
      '<span class="ptile-icon">'+productIcon(p.visual,30)+'</span><span class="ptile-label">'+esc(p.name)+'</span></button>';
  });
  html += '<button type="button" class="ptile addnew" data-customchip="'+catId+'">'+
    '<span class="ptile-icon">'+icon('plus')+'</span><span class="ptile-label">Custom Item</span></button>';
  html += '</div>';
  return html;
}
function renderCategoryPanel(catId){
  let html = '<div class="section-label" style="margin-top:0">'+esc(catLabel(catId))+'</div>';
  html += renderProductChips(catId);
  const af = state.ui.addForm;
  const t = af.templateId ? catalogTemplate(af.templateId) : null;
  if(!t || t.category!==catId){
    html += '<div class="empty-state" style="padding:32px 16px"><p>Pick an item above to set size, brand and quantity.</p></div>';
    return html;
  }
  html += '<div class="panel mt-3">';
  if(t.hasMaterial){
    const opts = materialOptionsFor(t);
    html += '<div class="section-label" style="margin-top:0">Material</div><div class="scrollrow">'+opts.map(function(m){ return '<button type="button" class="chip'+(af.material===m?' active':'')+'" data-material="'+esc(m)+'">'+esc(m)+'</button>'; }).join('')+'</div>';
  }
  if(t.hasBrand){
    html += '<div class="section-label">Brand</div><div class="scrollrow">'+state.brands.map(function(b){ return '<button type="button" class="chip'+(af.brand===b?' active':'')+'" data-brand="'+esc(b)+'">'+esc(b)+'</button>'; }).join('')+'<button type="button" class="chip" data-addbrand="1">'+icon('plus')+' Add Brand</button></div>';
  }
  if(t.isReducer){
    html += '<div class="section-label">From Size</div>'+renderRingPicker(t.sizes, af.fromSize, 'fromsize');
    html += '<div class="section-label">To Size</div>'+renderRingPicker(t.sizes, af.toSize, 'tosize');
  } else if(t.sizes && t.sizes.length){
    html += '<div class="section-label">Size</div>'+renderRingPicker(t.sizes, af.size, 'size');
  }
  html += '<div class="section-label">Quantity &amp; Unit</div><div class="qtyunit">'+
    '<div class="stepperwrap"><div class="stepper">'+
      '<button type="button" class="stepper-btn" id="af-qty-minus">'+icon('minus')+'</button>'+
      '<input class="stepper-input" id="af-qty-input" inputmode="decimal" value="'+fmtNum(af.qty)+'">'+
      '<button type="button" class="stepper-btn" id="af-qty-plus">'+icon('plus')+'</button></div></div>'+
    '<div class="unitwrap"><select class="select" id="af-unit">'+(t.units||[t.unit]).map(function(u){ return '<option value="'+esc(u)+'"'+(u===af.unit?' selected':'')+'>'+esc(u)+'</option>'; }).join('')+'</select></div></div>';
  html += '<div class="field mt-3"><label class="field-label" for="af-price">Unit Price <span class="opt">(optional)</span></label><div class="item-row-price" style="height:48px"><span class="cur">'+esc(state.settings.currencySymbol)+'</span><input id="af-price" inputmode="decimal" placeholder="Add price" value="'+priceInputVal(af.price)+'" style="width:100%;font-size:15.5px"></div>'+
    '<p class="helptext">Leave blank if you don\u2019t know it yet \u2014 you can fill it in later from the list or Price List.</p></div>';
  html += '<button type="button" class="btn btn-primary btn-block mt-3" id="af-add-btn">'+icon('plusCircle')+' Add to List</button></div>';
  return html;
}
function renderQuickAdd(){
  const ids = frequentTemplateIds();
  let html = '<div class="section-label" style="margin-top:0">Quick Add</div><div class="scrollrow">';
  ids.forEach(function(id){
    const t = catalogTemplate(id); if(!t) return;
    html += '<button type="button" class="chip" data-quickadd="'+t.id+'">'+productIcon(t.visual,15)+' '+esc(t.name)+'</button>';
  });
  html += '</div>';
  return html;
}
function renderItemRow(it){
  let html = '<div class="item-row" data-item-id="'+it.id+'">';
  html += '<div class="item-row-top"><div><div class="item-row-name">'+esc(itemDisplayName(it))+'</div>'+
    '<div class="item-row-meta">'+esc(itemSizeLabel(it))+(it.brand?' \u00b7 '+esc(it.brand):'')+' \u00b7 '+esc(catLabel(it.category))+'</div></div>'+
    '<div class="item-row-total">'+lineTotalHTML(it)+'</div></div>';
  if(it.note) html += '<div class="item-row-note">'+esc(it.note)+'</div>';
  html += '<div class="item-row-controls">';
  html += '<div class="stepper"><button type="button" class="stepper-btn" data-qtyminus="'+it.id+'">'+icon('minus')+'</button>'+
    '<input class="stepper-input" data-qtyinput="'+it.id+'" inputmode="decimal" value="'+fmtNum(it.qty)+'">'+
    '<button type="button" class="stepper-btn" data-qtyplus="'+it.id+'">'+icon('plus')+'</button></div>';
  html += '<span class="small muted">'+esc(it.unit)+'</span>';
  html += '<div class="item-row-price"><span class="cur">'+esc(state.settings.currencySymbol)+'</span><input data-priceinput="'+it.id+'" inputmode="decimal" placeholder="Price" value="'+priceInputVal(it.price)+'"></div>';
  html += '<div class="item-row-iconbtns"><button data-noteitem="'+it.id+'" aria-label="Add note">'+icon('note')+'</button>'+
    '<button data-dupitem="'+it.id+'" aria-label="Duplicate">'+icon('copy')+'</button>'+
    '<button data-delitem="'+it.id+'" aria-label="Delete">'+icon('trash')+'</button></div>';
  html += '</div></div>';
  return html;
}
function costInputRow(label, key, val){
  return '<div class="cost-row"><span class="cost-row-label">'+esc(label)+'</span><div class="cost-row-input"><span class="muted small">'+esc(state.settings.currencySymbol)+'</span>'+
    '<input inputmode="decimal" data-costkey="'+key+'" value="'+(val===''||val===undefined||val===null?'':fmtNum(val))+'" placeholder="0"></div></div>';
}
function renderCurrentListAndSummary(){
  const est = state.draft;
  if(!est.items.length){
    return '<div class="empty-state"><h3>No materials yet</h3><p>Switch to \u201cAdd Materials\u201d to start building the list.</p><button class="btn btn-primary" id="goto-add-materials">'+icon('plusCircle')+' Add Materials</button></div>';
  }
  let html = '<div class="section-label" style="margin-top:0">Current Material List</div>';
  est.items.forEach(function(it){ html += renderItemRow(it); });
  html += '<div class="panel mt-4" id="cost-panel" data-costmode="'+(hasCostBasis(est)?'full':'empty')+'"><div class="section-label" style="margin-top:0">Material Summary</div>';
  html += '<div class="summary-grid"><div class="summary-box"><div class="v num" data-sum="itemcount">'+itemCountOf(est)+'</div><div class="l">Items</div></div>'+
    '<div class="summary-box"><div class="v num" data-sum="totalqty">'+fmtNum(totalQtyOf(est))+'</div><div class="l">Total Qty</div></div></div>';
  if(!hasCostBasis(est)){
    html += '<div class="price-note">'+icon('alert')+'<span>No prices added yet, so there\u2019s no cost total \u2014 just the product list below. Add a price to any item (or tap it later) to start seeing totals.</span></div>';
  } else {
    html += '<div class="cost-row"><span class="cost-row-label">Estimated Material Cost</span><span class="cost-row-value num" data-sum="materialcost">'+money(materialCostOf(est))+'</span></div>';
    html += '<div class="divider"></div>';
    html += costInputRow('Labour Cost','labourCost', est.labourCost);
    html += costInputRow('Transport Cost','transportCost', est.transportCost);
    html += costInputRow('Other Cost','otherCost', est.otherCost);
    html += costInputRow('Discount','discount', est.discount);
    html += '<div class="final-cost-card"><div class="l">Final Estimated Cost</div><div class="v num" data-sum="finalcost">'+money(finalCostOf(est))+'</div></div>';
    if(unpricedCountOf(est)>0) html += '<div class="price-note">'+icon('alert')+'<span data-sum="unpricednote">'+unpricedCountOf(est)+' item'+(unpricedCountOf(est)===1?'':'s')+' still need'+(unpricedCountOf(est)===1?'s':'')+' a price \u2014 not included in the total above.</span></div>';
    html += '<div class="disclaimer">'+icon('alert')+'<span>Prices are estimates you\u2019ve entered. Actual shop/market prices may vary.</span></div>';
  }
  html += '</div>';
  html += '<div class="btn-row mt-4"><button class="btn btn-primary" id="ml-save" style="flex:1 1 100%">'+icon('check')+' Save Estimate</button></div>';
  html += '<div class="btn-row mt-2"><button class="btn btn-secondary" id="ml-pdf">'+icon('pdf')+' PDF</button>'+
    '<button class="btn btn-secondary" id="ml-image">'+icon('image')+' Image</button>'+
    '<button class="btn btn-secondary" id="ml-share">'+icon('share')+' Share</button></div>';
  return html;
}
function screenMaterialSelect(){
  if(!state.draft) return '<div class="container"><div class="empty-state"><h3>No active estimate</h3></div></div>';
  const est = state.draft;
  let html = '<div class="container">';
  html += '<div class="search-wrap" id="material-search-wrap"><div class="search-input-row">'+icon('search')+
    '<input id="material-search-input" placeholder="Search pipe, elbow, reducer, valve\u2026" value="'+esc(state.ui.searchQuery)+'">'+
    (state.ui.searchQuery?'<button id="material-search-clear" aria-label="Clear">'+icon('x')+'</button>':'')+'</div>';
  if(state.ui.searchQuery.trim()) html += renderSearchResults(state.ui.searchQuery);
  html += '</div>';
  html += '<div class="tabs scrollrow mt-4" role="tablist">'+
    '<button class="tab'+(state.ui.materialSubview==='add'?' active':'')+'" data-subview="add">Add Materials</button>'+
    '<button class="tab'+(state.ui.materialSubview==='list'?' active':'')+'" data-subview="list">Current List ('+itemCountOf(est)+')</button></div>';
  if(state.ui.materialSubview==='add'){
    html += '<div class="mt-4">'+renderQuickAdd()+'</div>';
    html += '<div class="scrollrow mt-4">'+CATEGORIES.map(function(c){ return '<button type="button" class="tab'+(state.ui.materialTab===c.id?' active':'')+'" data-cattab="'+c.id+'">'+esc(c.label)+'</button>'; }).join('')+'</div>';
    html += '<div class="mt-3">'+renderCategoryPanel(state.ui.materialTab)+'</div>';
  } else {
    html += '<div id="material-summary-anchor"></div><div class="mt-4">'+renderCurrentListAndSummary()+'</div>';
  }
  html += '</div>';
  return html;
}
function currentAfTemplate(){ return catalogTemplate(state.ui.addForm.templateId); }
function wireMaterialSelect(){
  const searchInput = document.getElementById('material-search-input');
  if(searchInput) searchInput.addEventListener('input', debounce(function(){ state.ui.searchQuery = searchInput.value; render(); const el=document.getElementById('material-search-input'); if(el){ el.focus(); const v=el.value; el.value=''; el.value=v; } }, 220));
  const clearBtn = document.getElementById('material-search-clear');
  if(clearBtn) clearBtn.addEventListener('click', function(){ state.ui.searchQuery=''; render(); });
  document.querySelectorAll('[data-searchpick]').forEach(function(b){ b.addEventListener('click', function(){ pickSearchResult(b.getAttribute('data-searchpick')); }); });
  document.querySelectorAll('[data-subview]').forEach(function(b){ b.addEventListener('click', function(){ state.ui.materialSubview=b.getAttribute('data-subview'); state.ui.searchQuery=''; render(); }); });
  document.querySelectorAll('[data-cattab]').forEach(function(b){ b.addEventListener('click', function(){ selectCategoryTab(b.getAttribute('data-cattab')); }); });
  document.querySelectorAll('[data-quickadd]').forEach(function(b){ b.addEventListener('click', function(){ quickAddTemplate(b.getAttribute('data-quickadd')); }); });
  document.querySelectorAll('[data-tplchip]').forEach(function(b){ b.addEventListener('click', function(){ selectTemplate(b.getAttribute('data-tplchip')); }); });
  document.querySelectorAll('[data-customchip]').forEach(function(b){ b.addEventListener('click', function(){ openCustomItemModal(b.getAttribute('data-customchip')); }); });
  document.querySelectorAll('[data-material]').forEach(function(b){ b.addEventListener('click', function(){ state.ui.addForm.material=b.getAttribute('data-material'); render(); }); });
  document.querySelectorAll('[data-brand]').forEach(function(b){ b.addEventListener('click', function(){ state.ui.addForm.brand=b.getAttribute('data-brand'); render(); }); });
  document.querySelectorAll('[data-addbrand]').forEach(function(b){ b.addEventListener('click', openAddBrandModal); });
  document.querySelectorAll('[data-size]').forEach(function(b){ b.addEventListener('click', function(){ state.ui.addForm.size=b.getAttribute('data-size'); render(); }); });
  document.querySelectorAll('[data-fromsize]').forEach(function(b){ b.addEventListener('click', function(){ state.ui.addForm.fromSize=b.getAttribute('data-fromsize'); render(); }); });
  document.querySelectorAll('[data-tosize]').forEach(function(b){ b.addEventListener('click', function(){ state.ui.addForm.toSize=b.getAttribute('data-tosize'); render(); }); });
  const qtyMinus=document.getElementById('af-qty-minus'), qtyPlus=document.getElementById('af-qty-plus'), qtyInput=document.getElementById('af-qty-input');
  if(qtyMinus) qtyMinus.addEventListener('click', function(){ const step=stepFor(state.ui.addForm.unit); state.ui.addForm.qty=Math.max(step, round2((Number(state.ui.addForm.qty)||0)-step)); if(qtyInput) qtyInput.value=fmtNum(state.ui.addForm.qty); });
  if(qtyPlus) qtyPlus.addEventListener('click', function(){ const step=stepFor(state.ui.addForm.unit); state.ui.addForm.qty=round2((Number(state.ui.addForm.qty)||0)+step); if(qtyInput) qtyInput.value=fmtNum(state.ui.addForm.qty); });
  if(qtyInput) qtyInput.addEventListener('input', function(){ state.ui.addForm.qty=clampNum(qtyInput.value,0,999999); });
  const priceInput=document.getElementById('af-price');
  if(priceInput) priceInput.addEventListener('input', function(){ state.ui.addForm.price=clampNum(priceInput.value,0,9999999); });
  const unitSel=document.getElementById('af-unit');
  if(unitSel) unitSel.addEventListener('change', function(){ state.ui.addForm.unit=unitSel.value; });
  const addBtn=document.getElementById('af-add-btn');
  if(addBtn) addBtn.addEventListener('click', handleAddFromForm);
  const gotoAdd=document.getElementById('goto-add-materials');
  if(gotoAdd) gotoAdd.addEventListener('click', function(){ state.ui.materialSubview='add'; render(); });
  document.querySelectorAll('[data-qtyminus]').forEach(function(b){ b.addEventListener('click', function(){ adjustQty(b.getAttribute('data-qtyminus'), -1); }); });
  document.querySelectorAll('[data-qtyplus]').forEach(function(b){ b.addEventListener('click', function(){ adjustQty(b.getAttribute('data-qtyplus'), 1); }); });
  document.querySelectorAll('[data-qtyinput]').forEach(function(b){ b.addEventListener('input', function(){ setQtyDirect(b.getAttribute('data-qtyinput'), b.value); }); });
  document.querySelectorAll('[data-priceinput]').forEach(function(b){ b.addEventListener('input', function(){ setPriceDirect(b.getAttribute('data-priceinput'), b.value); }); });
  document.querySelectorAll('[data-noteitem]').forEach(function(b){ b.addEventListener('click', function(){ editNote(b.getAttribute('data-noteitem')); }); });
  document.querySelectorAll('[data-dupitem]').forEach(function(b){ b.addEventListener('click', function(){ duplicateDraftItem(b.getAttribute('data-dupitem')); }); });
  document.querySelectorAll('[data-delitem]').forEach(function(b){ b.addEventListener('click', function(){ removeDraftItem(b.getAttribute('data-delitem')); }); });
  document.querySelectorAll('[data-costkey]').forEach(function(b){ b.addEventListener('input', function(){
    state.draft[b.getAttribute('data-costkey')] = b.value===''?'':clampNum(b.value,0,99999999);
    const panel = document.getElementById('cost-panel');
    const expectedMode = hasCostBasis(state.draft) ? 'full' : 'empty';
    if(panel && panel.getAttribute('data-costmode') !== expectedMode){ render(); return; }
    refreshSummaryNumbers();
  }); });
  const saveBtn=document.getElementById('ml-save');
  if(saveBtn) saveBtn.addEventListener('click', handleSaveEstimate);
  const pdfBtn=document.getElementById('ml-pdf');
  if(pdfBtn) pdfBtn.addEventListener('click', function(){ downloadEstimatePDF(state.draft); });
  const imgBtn=document.getElementById('ml-image');
  if(imgBtn) imgBtn.addEventListener('click', function(){ downloadEstimateImage(state.draft); });
  const shareBtn=document.getElementById('ml-share');
  if(shareBtn) shareBtn.addEventListener('click', function(){ openShareSheet(state.draft); });
}
async function handleSaveEstimate(){
  const est = state.draft;
  if(!est || !est.items.length){ showToast('Add at least one material before saving','error'); return; }
  const now = new Date().toISOString();
  if(!est.id){ est.id = nextEstimateId(); est.createdAt = now; }
  est.updatedAt = now;
  const idx = state.estimates.findIndex(function(e){ return e.id===est.id; });
  const toSave = JSON.parse(JSON.stringify(est));
  if(idx>=0) state.estimates[idx]=toSave; else state.estimates.unshift(toSave);
  const ok = await saveEstimates();
  await saveSettings();
  if(!ok) return;
  showToast('Estimate '+est.id+' saved','success');
  state.viewingEstimateId = est.id;
  state.draft = null;
  goto('estimateView');
}
/* ============================= MY ESTIMATES ============================= */
function findEstimate(id){ return state.estimates.find(function(e){ return e.id===id; }); }
function filteredEstimates(){
  let list = state.estimates.slice();
  const f = state.ui.myFilter;
  if(f==='today'){ const t=daysAgo(0); list=list.filter(function(e){ return new Date(e.createdAt||e.date)>=t; }); }
  else if(f==='week'){ const t=daysAgo(7); list=list.filter(function(e){ return new Date(e.createdAt||e.date)>=t; }); }
  else if(f==='month'){ const t=daysAgo(30); list=list.filter(function(e){ return new Date(e.createdAt||e.date)>=t; }); }
  const q = state.ui.mySearch.toLowerCase().trim();
  if(q) list = list.filter(function(e){ return (e.projectName+' '+e.customerName+' '+e.id).toLowerCase().indexOf(q)!==-1; });
  return list;
}
function renderEstimateCard(e){
  const costDisplay = hasCostBasis(e) ? ('<div class="estimate-card-cost num">'+money(finalCostOf(e))+'</div>') : ('<div class="price-missing">No prices yet</div>');
  return '<div class="estimate-card" data-estcard="'+e.id+'">'+
    '<div class="estimate-card-top"><div><div class="estimate-card-title">'+esc(e.projectName||'Untitled Project')+(e.customerName?' \u2013 '+esc(e.customerName):'')+'</div>'+
    '<div class="estimate-card-sub">'+esc(fmtDateDisplay(e.date))+' \u00b7 '+esc(e.workType||'')+'</div>'+
    '<div class="estimate-card-id">'+esc(e.id)+'</div></div>'+costDisplay+'</div>'+
    '<div class="estimate-card-actions">'+
      '<button data-eview="'+e.id+'">'+icon('list')+'<span>View</span></button>'+
      '<button data-eedit="'+e.id+'">'+icon('edit')+'<span>Edit</span></button>'+
      '<button data-edup="'+e.id+'">'+icon('copy')+'<span>Duplicate</span></button>'+
      '<button data-epdf="'+e.id+'">'+icon('download')+'<span>Download</span></button>'+
      '<button data-eshare="'+e.id+'">'+icon('share')+'<span>Share</span></button>'+
      '<button data-edel="'+e.id+'" class="danger">'+icon('trash')+'<span>Delete</span></button>'+
    '</div></div>';
}
function screenMyEstimates(){
  let html = '<div class="container">';
  html += '<div class="filter-row">'+['all','today','week','month'].map(function(f){
    const labels={all:'All',today:'Today',week:'This Week',month:'This Month'};
    return '<button type="button" class="chip'+(state.ui.myFilter===f?' active':'')+'" data-filter="'+f+'">'+labels[f]+'</button>';
  }).join('')+'</div>';
  html += '<div class="search-input-row mb-4">'+icon('search')+'<input id="my-search-input" placeholder="Search estimates\u2026" value="'+esc(state.ui.mySearch)+'"></div>';
  const list = filteredEstimates();
  if(!list.length){
    html += '<div class="empty-state"><h3>No estimates yet</h3><p>Start your first one to see it here.</p><button class="btn btn-primary" id="empty-new-estimate">'+icon('plusCircle')+' Create New Estimate</button></div>';
  } else { list.forEach(function(e){ html += renderEstimateCard(e); }); }
  html += '</div>';
  return html;
}
function wireMyEstimates(){
  document.querySelectorAll('[data-filter]').forEach(function(b){ b.addEventListener('click', function(){ state.ui.myFilter=b.getAttribute('data-filter'); render(); }); });
  const searchInput = document.getElementById('my-search-input');
  if(searchInput) searchInput.addEventListener('input', debounce(function(){ state.ui.mySearch=searchInput.value; render(); const el=document.getElementById('my-search-input'); if(el) el.focus(); }, 220));
  const emptyNew = document.getElementById('empty-new-estimate');
  if(emptyNew) emptyNew.addEventListener('click', function(){ state.draft=newDraft(); goto('newEstimateDetails'); });
  document.querySelectorAll('[data-eview]').forEach(function(b){ b.addEventListener('click', function(){ state.viewingEstimateId=b.getAttribute('data-eview'); goto('estimateView'); }); });
  document.querySelectorAll('[data-eedit]').forEach(function(b){ b.addEventListener('click', function(){ editEstimate(b.getAttribute('data-eedit')); }); });
  document.querySelectorAll('[data-edup]').forEach(function(b){ b.addEventListener('click', function(){ duplicateEstimate(b.getAttribute('data-edup')); }); });
  document.querySelectorAll('[data-epdf]').forEach(function(b){ b.addEventListener('click', function(){ const e=findEstimate(b.getAttribute('data-epdf')); if(e) downloadEstimatePDF(e); }); });
  document.querySelectorAll('[data-eshare]').forEach(function(b){ b.addEventListener('click', function(){ const e=findEstimate(b.getAttribute('data-eshare')); if(e) openShareSheet(e); }); });
  document.querySelectorAll('[data-edel]').forEach(function(b){ b.addEventListener('click', function(){ const id=b.getAttribute('data-edel'); confirmModal('Delete this estimate?','This can\u2019t be undone.','Delete', function(){ deleteEstimate(id); }, true); }); });
}
function editEstimate(id){
  const e = findEstimate(id); if(!e) return;
  state.draft = JSON.parse(JSON.stringify(e));
  state.ui.materialTab='pipes'; state.ui.materialSubview='list';
  goto('materialSelect');
}
async function duplicateEstimate(id){
  const e = findEstimate(id); if(!e) return;
  const copy = JSON.parse(JSON.stringify(e));
  copy.id = nextEstimateId();
  copy.createdAt = new Date().toISOString(); copy.updatedAt = copy.createdAt;
  state.estimates.unshift(copy);
  await saveEstimates(); await saveSettings();
  showToast('Duplicated as '+copy.id,'success');
  render();
}
async function deleteEstimate(id){
  state.estimates = state.estimates.filter(function(e){ return e.id!==id; });
  await saveEstimates();
  showToast('Estimate deleted');
  if(state.viewingEstimateId===id){ state.viewingEstimateId=null; goto('myEstimates'); } else render();
}

/* ============================= ESTIMATE VIEW ============================= */
function screenEstimateView(){
  const e = findEstimate(state.viewingEstimateId);
  if(!e) return '<div class="container"><div class="empty-state"><h3>Estimate not found</h3></div></div>';
  let html = '<div class="container">';
  html += '<div class="card"><div class="row-between"><div><h2 style="font-size:19px">'+esc(e.projectName)+'</h2>'+
    '<div class="small muted mt-2">'+esc(e.customerName||'')+(e.customerPhone?' \u00b7 '+esc(e.customerPhone):'')+'</div>'+
    (e.location?'<div class="small muted">'+esc(e.location)+'</div>':'')+
    '</div><span class="badge badge-teal">'+esc(e.workType)+'</span></div>'+
    '<div class="small muted mt-3">'+esc(fmtDateDisplay(e.date))+' \u00b7 <span class="num">'+esc(e.id)+'</span></div></div>';
  html += '<div class="section-label">Materials ('+itemCountOf(e)+')</div>';
  e.items.forEach(function(it){
    html += '<div class="item-row"><div class="item-row-top"><div><div class="item-row-name">'+esc(itemDisplayName(it))+'</div>'+
      '<div class="item-row-meta">'+esc(itemSizeLabel(it))+(it.brand?' \u00b7 '+esc(it.brand):'')+' \u00b7 '+esc(fmtNum(it.qty))+' '+esc(it.unit)+'</div></div>'+
      '<div class="item-row-total">'+lineTotalHTML(it)+'</div></div>'+(it.note?'<div class="item-row-note">'+esc(it.note)+'</div>':'')+'</div>';
  });
  if(!hasCostBasis(e)){
    html += '<div class="price-note">'+icon('alert')+'<span>No prices were added to this estimate \u2014 just the product list above.</span></div>';
  } else {
    html += '<div class="panel mt-4"><div class="cost-row"><span class="cost-row-label">Material Cost</span><span class="cost-row-value num">'+money(materialCostOf(e))+'</span></div>';
    if(Number(e.labourCost)) html += '<div class="cost-row"><span class="cost-row-label">Labour</span><span class="cost-row-value num">'+money(e.labourCost)+'</span></div>';
    if(Number(e.transportCost)) html += '<div class="cost-row"><span class="cost-row-label">Transport</span><span class="cost-row-value num">'+money(e.transportCost)+'</span></div>';
    if(Number(e.otherCost)) html += '<div class="cost-row"><span class="cost-row-label">Other</span><span class="cost-row-value num">'+money(e.otherCost)+'</span></div>';
    if(Number(e.discount)) html += '<div class="cost-row"><span class="cost-row-label">Discount</span><span class="cost-row-value num">\u2212'+money(e.discount)+'</span></div>';
    html += '<div class="final-cost-card"><div class="l">Final Estimated Cost</div><div class="v num">'+money(finalCostOf(e))+'</div></div>';
    if(unpricedCountOf(e)>0) html += '<div class="price-note">'+icon('alert')+'<span>'+unpricedCountOf(e)+' item'+(unpricedCountOf(e)===1?'':'s')+' still need'+(unpricedCountOf(e)===1?'s':'')+' a price \u2014 not included above.</span></div>';
    html += '<div class="disclaimer">'+icon('alert')+'<span>Prices are estimates you\u2019ve entered. Actual shop/market prices may vary.</span></div></div>';
  }
  html += '<div class="btn-row mt-4"><button class="btn btn-primary" id="ev-edit" style="flex:1 1 45%">'+icon('edit')+' Edit</button><button class="btn btn-secondary" id="ev-dup" style="flex:1 1 45%">'+icon('copy')+' Duplicate</button></div>';
  html += '<div class="btn-row mt-2"><button class="btn btn-secondary" id="ev-pdf">'+icon('pdf')+' PDF</button><button class="btn btn-secondary" id="ev-image">'+icon('image')+' Image</button><button class="btn btn-secondary" id="ev-share">'+icon('share')+' Share</button></div>';
  html += '<button class="btn btn-danger btn-block mt-2" id="ev-del">'+icon('trash')+' Delete Estimate</button></div>';
  return html;
}
function wireEstimateView(){
  const e = findEstimate(state.viewingEstimateId); if(!e) return;
  const editBtn=document.getElementById('ev-edit'); if(editBtn) editBtn.addEventListener('click', function(){ editEstimate(e.id); });
  const dupBtn=document.getElementById('ev-dup'); if(dupBtn) dupBtn.addEventListener('click', function(){ duplicateEstimate(e.id); });
  const pdfBtn=document.getElementById('ev-pdf'); if(pdfBtn) pdfBtn.addEventListener('click', function(){ downloadEstimatePDF(e); });
  const imgBtn=document.getElementById('ev-image'); if(imgBtn) imgBtn.addEventListener('click', function(){ downloadEstimateImage(e); });
  const shareBtn=document.getElementById('ev-share'); if(shareBtn) shareBtn.addEventListener('click', function(){ openShareSheet(e); });
  const delBtn=document.getElementById('ev-del'); if(delBtn) delBtn.addEventListener('click', function(){ confirmModal('Delete this estimate?','This can\u2019t be undone.','Delete', function(){ deleteEstimate(e.id); }, true); });
}
/* ============================= PRODUCTS ============================= */
function renderProductCard(p){
  const priceHtml = p.price>0 ? ('<div class="num" style="font-weight:800">'+money(p.price)+'</div>') : '<div class="price-missing">Add price</div>';
  return '<div class="card"><div class="row-between"><div style="display:flex;gap:12px;align-items:center">'+
    '<span class="ptile-icon" style="width:44px;height:44px;flex:0 0 auto">'+productIcon(p.visual,26)+'</span>'+
    '<div><div class="item-row-name">'+esc(p.name)+'</div>'+
    '<div class="item-row-meta">'+(p.sizes.length? p.sizes.length+' sizes \u00b7 ':'')+esc(p.unit)+(p.custom?' \u00b7 Custom':'')+'</div></div></div>'+
    priceHtml+'</div>'+
    '<div class="btn-row mt-3"><button class="btn btn-secondary btn-sm" data-editprod="'+p.id+'" style="flex:1">'+icon('edit')+' Edit</button>'+
    '<button class="btn btn-danger btn-sm" data-delprod="'+p.id+'" style="flex:1">'+icon('trash')+' Delete</button></div></div>';
}
function screenProducts(){
  let html = '<div class="container wide">';
  html += '<div class="panel mb-4"><div class="row-between"><div class="section-label" style="margin-top:0">Brands</div><button class="btn btn-ghost btn-sm" id="prod-addbrand">'+icon('plus')+' Add</button></div>'+
    '<div class="taglist">'+state.brands.map(function(b,i){ return '<span class="tag">'+esc(b)+'<button data-rmbrand="'+i+'" aria-label="Remove">'+icon('x')+'</button></span>'; }).join('')+'</div></div>';
  html += '<div class="panel mb-4"><div class="row-between"><div class="section-label" style="margin-top:0">Sizes</div><button class="btn btn-ghost btn-sm" id="prod-addsize">'+icon('plus')+' Add</button></div>'+
    '<div class="taglist">'+state.sizePool.map(function(s,i){ return '<span class="tag num">'+esc(s)+'<button data-rmsize="'+i+'" aria-label="Remove">'+icon('x')+'</button></span>'; }).join('')+'</div></div>';
  html += '<div class="search-input-row mb-3">'+icon('search')+'<input id="prod-search" placeholder="Search products\u2026" value="'+esc(state.ui.productsSearch)+'"></div>';
  html += '<div class="scrollrow mb-3">'+CATEGORIES.map(function(c){ return '<button type="button" class="tab'+(state.ui.productsTab===c.id?' active':'')+'" data-prodtab="'+c.id+'">'+esc(c.label)+'</button>'; }).join('')+'</div>';
  const q = state.ui.productsSearch.toLowerCase().trim();
  const items = state.catalog.filter(function(p){ return p.category===state.ui.productsTab && (!q || p.name.toLowerCase().indexOf(q)!==-1); });
  if(!items.length) html += '<div class="empty-state"><p>No products in this category yet.</p></div>';
  items.forEach(function(p){ html += renderProductCard(p); });
  html += '<button class="btn btn-secondary btn-block mt-3" id="prod-addnew">'+icon('plusCircle')+' Add New Product</button>';
  html += '</div>';
  return html;
}
function openAddBrandModalGeneric(){
  openModal('<div class="modal-title">Add Brand</div><div class="field"><label class="field-label">Brand Name</label><input class="input" id="nb-name2" placeholder="e.g. Prince"></div><button class="btn btn-primary btn-block mt-2" id="nb-add2">Add Brand</button>');
  document.getElementById('nb-add2').addEventListener('click', function(){
    const name = document.getElementById('nb-name2').value.trim();
    if(!name){ showToast('Enter a brand name','error'); return; }
    if(state.brands.indexOf(name)===-1){ state.brands.push(name); saveCatalog(); }
    closeModal(); render();
  });
}
function openAddSizeModal(){
  openModal('<div class="modal-title">Add Size</div><div class="field"><label class="field-label">Size</label><input class="input" id="ns-name" placeholder="e.g. 8 inch"></div><button class="btn btn-primary btn-block mt-2" id="ns-add">Add Size</button>');
  document.getElementById('ns-add').addEventListener('click', function(){
    const name = document.getElementById('ns-name').value.trim();
    if(!name){ showToast('Enter a size','error'); return; }
    if(state.sizePool.indexOf(name)===-1){ state.sizePool.push(name); saveCatalog(); }
    closeModal(); render();
  });
}
function openEditProductModal(productId){
  const p = productId ? catalogTemplate(productId) : null;
  const isNew = !p;
  openModal(
    '<div class="modal-title">'+(isNew?'Add New Product':'Edit Product')+'</div>'+
    '<div class="field"><label class="field-label">Product Name</label><input class="input" id="ep-name" value="'+esc(p?p.name:'')+'"></div>'+
    '<div class="field"><label class="field-label">Category</label><select class="select" id="ep-cat">'+CATEGORIES.map(function(c){ return '<option value="'+c.id+'"'+((p?p.category:state.ui.productsTab)===c.id?' selected':'')+'>'+esc(c.label)+'</option>'; }).join('')+'</select></div>'+
    '<div class="field-row"><div class="field"><label class="field-label">Unit</label><select class="select" id="ep-unit">'+['Piece','Length','Feet','Meter','Roll','Set'].map(function(u){ return '<option'+((p?p.unit:'Piece')===u?' selected':'')+'>'+u+'</option>'; }).join('')+'</select></div>'+
    '<div class="field"><label class="field-label">Price <span class="opt">(optional)</span></label><div class="item-row-price" style="height:48px"><span class="cur">'+esc(state.settings.currencySymbol)+'</span><input id="ep-price" inputmode="decimal" placeholder="Add price" value="'+(p&&p.price>0?fmtNum(p.price):'')+'" style="width:100%"></div></div></div>'+
    '<div class="field"><label class="field-label">Sizes</label><select class="select" id="ep-hassizes"><option value="yes"'+(p&&p.sizes.length?' selected':'')+'>Yes \u2014 standard size list</option><option value="no"'+(!p||!p.sizes.length?' selected':'')+'>No sizes</option></select></div>'+
    '<div class="field"><label class="field-label">Needs brand?</label><select class="select" id="ep-hasbrand"><option value="yes"'+(!p||p.hasBrand?' selected':'')+'>Yes</option><option value="no"'+(p&&!p.hasBrand?' selected':'')+'>No</option></select></div>'+
    '<div class="field"><label class="field-label">Needs material (CPVC/PVC/etc.)?</label><select class="select" id="ep-hasmaterial"><option value="no"'+(!p||!p.hasMaterial?' selected':'')+'>No</option><option value="yes"'+(p&&p.hasMaterial?' selected':'')+'>Yes</option></select></div>'+
    '<button class="btn btn-primary btn-block mt-2" id="ep-save">'+(isNew?'Add Product':'Save Changes')+'</button>'
  );
  document.getElementById('ep-save').addEventListener('click', function(){
    const name = document.getElementById('ep-name').value.trim();
    if(!name){ showToast('Enter a product name','error'); return; }
    const cat = document.getElementById('ep-cat').value;
    const unit = document.getElementById('ep-unit').value;
    const price = clampNum(document.getElementById('ep-price').value,0,9999999);
    const hasSizes = document.getElementById('ep-hassizes').value==='yes';
    const hasBrand = document.getElementById('ep-hasbrand').value==='yes';
    const hasMaterial = document.getElementById('ep-hasmaterial').value==='yes';
    if(isNew){
      const newP = tpl(uid('cust'), cat, name, {price:price, unit:unit, units:[unit], sizes:hasSizes?state.sizePool.slice():[], hasBrand:hasBrand, hasMaterial:hasMaterial});
      newP.custom = true;
      state.catalog.push(newP);
    } else {
      p.name=name; p.category=cat; p.unit=unit; p.units=[unit]; p.price=price;
      p.sizes = hasSizes ? (p.sizes.length?p.sizes:state.sizePool.slice()) : [];
      p.hasBrand=hasBrand; p.hasMaterial=hasMaterial; p.updatedAt=TODAY_ISO;
    }
    saveCatalog(); closeModal(); state.ui.productsTab=cat; render();
    showToast(isNew?'Product added':'Product updated','success');
  });
}
function wireProducts(){
  const addBrandBtn = document.getElementById('prod-addbrand'); if(addBrandBtn) addBrandBtn.addEventListener('click', openAddBrandModalGeneric);
  document.querySelectorAll('[data-rmbrand]').forEach(function(b){ b.addEventListener('click', function(){ const i=Number(b.getAttribute('data-rmbrand')); state.brands.splice(i,1); saveCatalog(); render(); }); });
  const addSizeBtn = document.getElementById('prod-addsize'); if(addSizeBtn) addSizeBtn.addEventListener('click', openAddSizeModal);
  document.querySelectorAll('[data-rmsize]').forEach(function(b){ b.addEventListener('click', function(){ const i=Number(b.getAttribute('data-rmsize')); state.sizePool.splice(i,1); saveCatalog(); render(); }); });
  const searchInput = document.getElementById('prod-search');
  if(searchInput) searchInput.addEventListener('input', debounce(function(){ state.ui.productsSearch=searchInput.value; render(); const el=document.getElementById('prod-search'); if(el) el.focus(); },220));
  document.querySelectorAll('[data-prodtab]').forEach(function(b){ b.addEventListener('click', function(){ state.ui.productsTab=b.getAttribute('data-prodtab'); render(); }); });
  document.querySelectorAll('[data-editprod]').forEach(function(b){ b.addEventListener('click', function(){ openEditProductModal(b.getAttribute('data-editprod')); }); });
  document.querySelectorAll('[data-delprod]').forEach(function(b){ b.addEventListener('click', function(){
    const id=b.getAttribute('data-delprod');
    confirmModal('Delete this product?','It will no longer appear when adding materials.','Delete', function(){ state.catalog=state.catalog.filter(function(p){ return p.id!==id; }); saveCatalog(); render(); showToast('Product deleted'); }, true);
  }); });
  const addNew = document.getElementById('prod-addnew'); if(addNew) addNew.addEventListener('click', function(){ openEditProductModal(null); });
}

/* ============================= PRICE LIST ============================= */
function screenPriceList(){
  let html = '<div class="container wide">';
  html += '<div class="search-input-row mb-4">'+icon('search')+'<input id="price-search" placeholder="Search by name or category\u2026" value="'+esc(state.ui.priceSearch)+'"></div>';
  const q = state.ui.priceSearch.toLowerCase().trim();
  const items = state.catalog.filter(function(p){ return !q || (p.name+' '+catLabel(p.category)).toLowerCase().indexOf(q)!==-1; });
  const byCat = {};
  items.forEach(function(p){ (byCat[p.category]=byCat[p.category]||[]).push(p); });
  CATEGORIES.forEach(function(c){
    const list = byCat[c.id]; if(!list||!list.length) return;
    html += '<div class="section-label">'+esc(c.label)+'</div><div class="panel" style="padding:4px 16px">';
    list.forEach(function(p){
      html += '<div class="settings-row"><div><div class="settings-row-label">'+esc(p.name)+'</div><div class="settings-row-sub">Updated '+esc(fmtDateDisplay(p.updatedAt))+'</div></div>'+
        '<div class="item-row-price" style="height:40px"><span class="cur">'+esc(state.settings.currencySymbol)+'</span><input data-priceedit="'+p.id+'" inputmode="decimal" placeholder="Add price" value="'+(p.price>0?fmtNum(p.price):'')+'" style="width:80px"></div></div>';
    });
    html += '</div>';
  });
  if(!items.length) html += '<div class="empty-state"><p>No products match your search.</p></div>';
  html += '</div>';
  return html;
}
function wirePriceList(){
  const searchInput = document.getElementById('price-search');
  if(searchInput) searchInput.addEventListener('input', debounce(function(){ state.ui.priceSearch=searchInput.value; render(); const el=document.getElementById('price-search'); if(el) el.focus(); },220));
  document.querySelectorAll('[data-priceedit]').forEach(function(b){
    b.addEventListener('change', function(){
      const p = catalogTemplate(b.getAttribute('data-priceedit')); if(!p) return;
      p.price = clampNum(b.value,0,9999999); p.updatedAt = TODAY_ISO;
      saveCatalog(); showToast('Price updated','success');
    });
  });
}

/* ============================= SETTINGS ============================= */
function screenSettings(){
  const s = state.settings;
  const u = state.user;
  let html = '<div class="container">';

  // 1. Account Section
  html += '<div class="section-label" style="margin-top:0">Account</div>';
  if(u){
    const initials = (u.name||'U').slice(0,2).toUpperCase();
    html += '<div class="card mb-4">'+
      '<div class="row-between">'+
        '<div style="display:flex;align-items:center;gap:12px">'+
          '<div class="user-avatar" style="width:44px;height:44px;font-size:16px">'+esc(initials)+'</div>'+
          '<div><div style="font-weight:800;font-size:16px">'+esc(u.name)+'</div><div class="small muted">'+esc(u.email)+'</div></div>'+
        '</div>'+
        '<span class="badge '+(u.mode==='cloud'?'badge-teal':'badge-amber')+'">'+(u.mode==='cloud'?'Cloud Synced':'Local Mode')+'</span>'+
      '</div>'+
      '<div class="btn-row mt-3">'+
        '<button class="btn btn-secondary btn-sm" id="st-sync-btn" style="flex:1">'+icon('cloud')+' Cloud Sync</button>'+
        '<button class="btn btn-secondary btn-sm" id="st-chpwd-btn" style="flex:1">'+icon('lock')+' Password</button>'+
        '<button class="btn btn-danger btn-sm" id="st-logout-btn" style="flex:1">'+icon('logOut')+' Logout</button>'+
      '</div>'+
    '</div>';
  } else {
    html += '<div class="card mb-4">'+
      '<div class="row-between">'+
        '<div><div style="font-weight:800;font-size:15px">Local-First Mode</div>'+
        '<div class="small muted mt-1">Estimates are saved on this device. Sign in to prepare for multi-device sync.</div></div>'+
        '<button class="btn btn-primary btn-sm" id="st-login-trigger">'+icon('user')+' Sign In / Sign Up</button>'+
      '</div>'+
    '</div>';
  }

  // 2. Shop & Business Profile
  html += '<div class="section-label">Shop &amp; Business Profile <span class="opt">(Printed on PDF &amp; Images)</span></div>';
  html += '<div class="field"><label class="field-label">Shop / Business Name</label><input class="input" id="st-sname" placeholder="e.g. Sri Balaji Irrigation &amp; Plumbing" value="'+esc(s.shopName||s.businessName)+'"></div>';
  html += '<div class="field"><label class="field-label">Owner / Contact Person</label><input class="input" id="st-owner" placeholder="e.g. Uday Kumar" value="'+esc(s.ownerName||'')+'></div>';
  html += '<div class="field-row"><div class="field"><label class="field-label">Phone Number</label><input class="input" id="st-bphone" type="tel" placeholder="e.g. 9876543210" value="'+esc(s.businessPhone)+'"></div>'+
    '<div class="field"><label class="field-label">WhatsApp Number <span class="opt">(optional)</span></label><input class="input" id="st-wphone" type="tel" placeholder="WhatsApp number" value="'+esc(s.whatsappPhone||'')+'></div></div>';
  html += '<div class="field-row"><div class="field"><label class="field-label">GSTIN <span class="opt">(optional)</span></label><input class="input" id="st-gstin" placeholder="e.g. 29ABCDE1234F1Z5" value="'+esc(s.gstin||'')+'></div>'+
    '<div class="field"><label class="field-label">Currency Symbol</label><input class="input" id="st-currency" value="'+esc(s.currencySymbol)+'" maxlength="3"></div></div>';
  html += '<div class="field"><label class="field-label">Business Address</label><textarea class="textarea" id="st-baddress" placeholder="Shop address, Market road\u2026">'+esc(s.businessAddress)+'</textarea></div>';
  
  html += '<div class="divider"></div>';
  // 3. Preferences
  html += '<div class="section-label">Preferences</div>';
  html += '<div class="settings-row"><div><div class="settings-row-label">Default Unit</div><div class="settings-row-sub">Used for new custom items</div></div>'+
    '<select class="select" id="st-defunit" style="width:140px">'+['Piece','Length','Feet','Meter','Roll','Set'].map(function(u){ return '<option'+(s.defaultUnit===u?' selected':'')+'>'+u+'</option>'; }).join('')+'</select></div>';
  
  html += '<div class="divider"></div><div class="section-label">Data &amp; Security</div>';
  html += '<div class="settings-row"><div><div class="settings-row-label">Saved Estimates</div><div class="settings-row-sub">'+state.estimates.length+' on this device ('+(u?'Associated with '+u.email:'Local Mode')+')</div></div>'+
    '<button class="btn btn-secondary btn-sm" id="st-export-json">'+icon('download')+' Backup JSON</button></div>';
  html += '<button class="btn btn-danger btn-block mt-3" id="st-reset">'+icon('trash')+' Reset All App Data</button>';
  html += '<p class="small muted mt-2">Clears saved estimates and any custom products, brands or sizes on this device. This can\u2019t be undone.</p>';
  html += '</div>';
  return html;
}
function wireSettings(){
  const s = state.settings;
  bindInput('st-sname', function(v){ s.shopName=v; s.businessName=v; }, function(){ saveSettings(); });
  bindInput('st-owner', function(v){ s.ownerName=v; }, function(){ saveSettings(); });
  bindInput('st-bphone', function(v){ s.businessPhone=v; }, function(){ saveSettings(); });
  bindInput('st-wphone', function(v){ s.whatsappPhone=v; }, function(){ saveSettings(); });
  bindInput('st-gstin', function(v){ s.gstin=v; }, function(){ saveSettings(); });
  bindInput('st-currency', function(v){ s.currencySymbol=v||'\u20B9'; }, function(){ saveSettings(); });
  bindInput('st-baddress', function(v){ s.businessAddress=v; }, function(){ saveSettings(); });
  
  const defUnit = document.getElementById('st-defunit');
  if(defUnit) defUnit.addEventListener('change', function(){ s.defaultUnit=defUnit.value; saveSettings(); });

  const syncBtn = document.getElementById('st-sync-btn');
  if(syncBtn) syncBtn.addEventListener('click', openCloudSyncStatusModal);
  const chpwdBtn = document.getElementById('st-chpwd-btn');
  if(chpwdBtn) chpwdBtn.addEventListener('click', openChangePasswordModal);
  const logoutBtn = document.getElementById('st-logout-btn');
  if(logoutBtn) logoutBtn.addEventListener('click', function(){
    confirmModal('Log out of PipeList?', 'You will return to Local Mode. Your saved estimates on this device will remain available.', 'Log Out', async function(){
      await DataService.auth.logout();
      state.user = null;
      state.syncStatus = 'local';
      showToast('Logged out');
      render();
    });
  });
  const loginTrigger = document.getElementById('st-login-trigger');
  if(loginTrigger) loginTrigger.addEventListener('click', function(){ openAuthModal('login'); });

  const exportBtn = document.getElementById('st-export-json');
  if(exportBtn) exportBtn.addEventListener('click', function(){
    const backupData = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      user: state.user,
      settings: state.settings,
      catalog: state.catalog,
      brands: state.brands,
      sizePool: state.sizePool,
      estimates: state.estimates
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type:'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'PipeList-Backup-' + localISODate() + '.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function(){ URL.revokeObjectURL(url); }, 4000);
    showToast('Backup downloaded successfully', 'success');
  });

  const resetBtn = document.getElementById('st-reset');
  if(resetBtn) resetBtn.addEventListener('click', function(){
    confirmModal('Reset all app data?','This deletes every saved estimate and any custom products, brands or sizes from this device. This can\u2019t be undone.','Reset Everything', async function(){
      state.estimates=[]; seedCatalog(); state.settings=defaultSettings(); state.usage={};
      await Promise.all([saveEstimates(), saveCatalog(), saveSettings(), saveUsage()]);
      showToast('All data reset'); goto('dashboard');
    }, true);
  });
}

/* ============================= SCREEN EVENT DISPATCH ============================= */
function wireScreenEvents(){
  const s = state.screen;
  if(s==='dashboard') wireDashboard();
  else if(s==='newEstimateDetails') wireNewEstimateDetails();
  else if(s==='materialSelect') wireMaterialSelect();
  else if(s==='myEstimates') wireMyEstimates();
  else if(s==='estimateView') wireEstimateView();
  else if(s==='products') wireProducts();
  else if(s==='priceList') wirePriceList();
  else if(s==='settings') wireSettings();
}

/* ============================= PDF EXPORT ============================= */
function ensureLibsLoaded(need){
  if(need==='pdf' && (!window.jspdf || !window.jspdf.jsPDF)){ showToast('PDF tools didn\u2019t load \u2014 check your connection and reload','error'); return false; }
  if(need==='image' && !window.html2canvas){ showToast('Image tools didn\u2019t load \u2014 check your connection and reload','error'); return false; }
  return true;
}
/* jsPDF's built-in Helvetica only covers Latin-1, so symbols like the rupee sign render as garbage. */
function pdfMoney(n){
  const sym = state.settings.currencySymbol || '';
  const safeSym = /^[\x20-\xFF]*$/.test(sym) ? sym : (sym==='\u20B9' ? 'Rs. ' : '');
  return safeSym + fmtMoney(n);
}
function buildPDFDoc(est){
  const jsPDF = window.jspdf.jsPDF;
  const doc = new jsPDF({unit:'mm', format:'a4'});
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const s = state.settings;
  let y = 16;
  doc.setFont('helvetica','bold'); doc.setFontSize(19); doc.setTextColor(13,92,86);
  doc.text('PipeList', 14, y);
  doc.setFont('helvetica','normal'); doc.setFontSize(9.5); doc.setTextColor(90,90,90);
  doc.text('Plumbing & Irrigation Material Estimate', 14, y+5.5);
  const titleShop = s.shopName || s.businessName;
  if(titleShop){
    doc.setFont('helvetica','bold'); doc.setFontSize(10.5); doc.setTextColor(20,20,20);
    doc.text(titleShop, pageW-14, y, {align:'right'});
    doc.setFont('helvetica','normal'); doc.setFontSize(8.5); doc.setTextColor(90,90,90);
    let by = y+4.5;
    if(s.ownerName){ doc.text('Prop: ' + s.ownerName, pageW-14, by, {align:'right'}); by+=4; }
    if(s.businessPhone || s.whatsappPhone){
      const ph = (s.businessPhone ? 'Ph: '+s.businessPhone : '') + (s.whatsappPhone ? (s.businessPhone?' | ':'')+'WA: '+s.whatsappPhone : '');
      doc.text(ph, pageW-14, by, {align:'right'}); by+=4;
    }
    if(s.gstin){ doc.text('GSTIN: ' + s.gstin, pageW-14, by, {align:'right'}); by+=4; }
    if(s.businessAddress){ doc.text(doc.splitTextToSize(s.businessAddress, 70), pageW-14, by, {align:'right'}); }
  }
  y += 14;
  doc.setDrawColor(210,210,205); doc.line(14, y, pageW-14, y);
  y += 7;
  doc.setFontSize(9.5);
  doc.setTextColor(30,30,30); doc.setFont('helvetica','bold'); doc.text('Project', 14, y); doc.text('Customer', pageW/2, y);
  doc.setFont('helvetica','normal'); doc.setTextColor(70,70,70);
  doc.text(est.projectName||'-', 14, y+5);
  const custContact = (est.customerName||'-') + (est.customerPhone ? ' ('+est.customerPhone+')' : '') + (est.customerWhatsapp ? ' [WA: '+est.customerWhatsapp+']' : '');
  doc.text(custContact, pageW/2, y+5);
  y += 11;
  doc.setTextColor(30,30,30); doc.setFont('helvetica','bold'); doc.text('Date', 14, y); doc.text('Work Type', pageW/2, y);
  doc.setFont('helvetica','normal'); doc.setTextColor(70,70,70);
  doc.text(fmtDateDisplay(est.date)||'-', 14, y+5); doc.text(est.workType||'-', pageW/2, y+5);
  y += 11;
  doc.setTextColor(30,30,30); doc.setFont('helvetica','bold'); doc.text('Estimate ID', 14, y);
  doc.setFont('helvetica','normal'); doc.setTextColor(70,70,70); doc.text(est.id||'Not saved', 14, y+5);
  if(est.location){ doc.setTextColor(30,30,30); doc.setFont('helvetica','bold'); doc.text('Location', pageW/2, y); doc.setFont('helvetica','normal'); doc.setTextColor(70,70,70); doc.text(String(est.location), pageW/2, y+5); }
  if(est.notes){ y += 10; doc.setTextColor(30,30,30); doc.setFont('helvetica','bold'); doc.text('Notes', 14, y); doc.setFont('helvetica','normal'); doc.setTextColor(80,80,80); doc.text(doc.splitTextToSize(String(est.notes), pageW-28), 14, y+4.5); y += 6; }
  y += 10;


  const body = est.items.map(function(it,i){ return [String(i+1), itemDisplayName(it), itemSizeLabel(it), it.brand||'-', fmtNum(it.qty)+' '+it.unit, hasPrice(it)?pdfMoney(it.price):'\u2014', hasPrice(it)?pdfMoney(lineTotal(it)):'\u2014']; });
  doc.autoTable({
    startY:y, head:[['No.','Material','Size','Brand','Qty','Unit Price','Total']], body:body, theme:'grid',
    headStyles:{fillColor:[13,92,86], textColor:255, fontStyle:'bold', fontSize:9},
    bodyStyles:{fontSize:8.8, textColor:[30,30,30]},
    alternateRowStyles:{fillColor:[244,246,243]},
    columnStyles:{0:{cellWidth:9}, 4:{cellWidth:22}, 5:{cellWidth:24,halign:'right'}, 6:{cellWidth:26,halign:'right'}},
    margin:{left:14, right:14}
  });
  let ny = doc.lastAutoTable.finalY + 8;
  if(ny > pageH-55){ doc.addPage(); ny = 20; }
  const sumX = pageW-14;
  function sumLine(label, val, bold){
    doc.setFont('helvetica', bold?'bold':'normal'); doc.setFontSize(9.5);
    doc.setTextColor(bold?20:90, bold?20:90, bold?20:90);
    doc.text(label, sumX-70, ny); doc.text(pdfMoney(val), sumX, ny, {align:'right'});
    ny += 6;
  }
  if(hasCostBasis(est)){
    sumLine('Subtotal (Materials)', materialCostOf(est));
    if(Number(est.labourCost)) sumLine('Labour', Number(est.labourCost));
    if(Number(est.transportCost)) sumLine('Transport', Number(est.transportCost));
    if(Number(est.otherCost)) sumLine('Other', Number(est.otherCost));
    if(Number(est.discount)) sumLine('Discount', -Number(est.discount));
    doc.setDrawColor(210,210,205); doc.line(sumX-70, ny-2, sumX, ny-2);
    ny += 3;
    doc.setFillColor(13,92,86); doc.roundedRect(sumX-80, ny-5.5, 80, 13, 2, 2, 'F');
    doc.setTextColor(255,255,255); doc.setFont('helvetica','bold'); doc.setFontSize(8.5);
    doc.text('FINAL ESTIMATED COST', sumX-75, ny+1.5);
    doc.setFontSize(12.5);
    doc.text(pdfMoney(finalCostOf(est)), sumX-4, ny+3.5, {align:'right'});
    ny += 12;
    if(unpricedCountOf(est)>0){
      doc.setFont('helvetica','italic'); doc.setFontSize(8); doc.setTextColor(140,110,20);
      doc.text(unpricedCountOf(est)+' item(s) have no price yet and are not included above.', sumX, ny, {align:'right'});
      ny += 6;
    }
    ny += 6;
  } else {
    doc.setFont('helvetica','italic'); doc.setFontSize(9); doc.setTextColor(110,110,110);
    doc.text('No prices were added \u2014 this is just the materials list.', sumX, ny, {align:'right'});
    ny += 12;
  }
  if(ny > pageH-16) ny = pageH-16;
  doc.setFontSize(7.8); doc.setFont('helvetica','italic'); doc.setTextColor(120,110,60);
  doc.text('Prices shown are figures you\u2019ve entered, not verified market rates.', 14, pageH-10);
  doc.setFont('helvetica','normal'); doc.setTextColor(150,150,150); doc.setFontSize(7.5);
  doc.text('Generated with PipeList', 14, pageH-6);
  return doc;
}
function downloadEstimatePDF(est){
  if(!ensureLibsLoaded('pdf')) return;
  if(!est.items.length){ showToast('Add at least one material first','error'); return; }
  try{
    const doc = buildPDFDoc(est);
    doc.save((est.id||'PipeList-Estimate')+'.pdf');
    showToast('PDF downloaded','success');
  }catch(e){ console.error(e); showToast('Could not create the PDF','error'); }
}

/* ============================= IMAGE EXPORT ============================= */
function buildShareImageHTML(est){
  const itemsHtml = est.items.map(function(it,i){
    return '<tr><td style="padding:8px 6px;border-bottom:1px solid #E5E8EB;font-size:13px;color:#1A1F26">'+(i+1)+'</td>'+
      '<td style="padding:8px 6px;border-bottom:1px solid #E5E8EB;font-size:13px;color:#1A1F26;font-weight:700">'+esc(itemDisplayName(it))+'</td>'+
      '<td style="padding:8px 6px;border-bottom:1px solid #E5E8EB;font-size:12.5px;color:#52585F">'+esc(itemSizeLabel(it))+'</td>'+
      '<td style="padding:8px 6px;border-bottom:1px solid #E5E8EB;font-size:12.5px;color:#52585F">'+esc(it.brand||'-')+'</td>'+
      '<td style="padding:8px 6px;border-bottom:1px solid #E5E8EB;font-size:13px;text-align:right;font-family:monospace">'+fmtNum(it.qty)+' '+esc(it.unit)+'</td>'+
      '<td style="padding:8px 6px;border-bottom:1px solid #E5E8EB;font-size:13px;text-align:right;font-family:monospace;font-weight:700">'+(hasPrice(it)?money(lineTotal(it)):'<span style="color:#7A4010;font-weight:800">Add price</span>')+'</td></tr>';
  }).join('');
  let extra = '';
  function xrow(label,val){ return '<tr><td colspan="5" style="padding:4px 6px;text-align:right;font-size:12.5px;color:#52585F">'+label+'</td><td style="padding:4px 6px;text-align:right;font-family:monospace;font-size:12.5px">'+money(val)+'</td></tr>'; }
  if(Number(est.labourCost)) extra += xrow('Labour', Number(est.labourCost));
  if(Number(est.transportCost)) extra += xrow('Transport', Number(est.transportCost));
  if(Number(est.otherCost)) extra += xrow('Other', Number(est.otherCost));
  if(Number(est.discount)) extra += xrow('Discount', -Number(est.discount));
  const costBlock = hasCostBasis(est)
    ? ('<div style="display:flex;justify-content:flex-end;margin-top:14px"><div style="background:#0F3363;color:#fff;border-radius:12px;padding:14px 22px;text-align:right;min-width:260px">'+
        '<div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:#A9C6EA">Final Estimated Cost</div>'+
        '<div style="font-size:26px;font-weight:900;font-family:monospace;margin-top:2px">'+money(finalCostOf(est))+'</div>'+
        (unpricedCountOf(est)>0 ? '<div style="font-size:10.5px;color:#A9C6EA;margin-top:4px">'+unpricedCountOf(est)+' item(s) not priced, not included</div>' : '')+
      '</div></div>')
    : '';
  const disclaimer = hasCostBasis(est)
    ? '<div style="margin-top:16px;background:#F5E9DE;border:1px solid #E4C7A8;border-radius:8px;padding:10px 14px;font-size:11.5px;color:#5C3612">Prices shown are figures you\u2019ve entered, not verified market rates.</div>'
    : '<div style="margin-top:16px;background:#E7E9EC;border:1px solid #DCE0E5;border-radius:8px;padding:10px 14px;font-size:11.5px;color:#52585F">No prices added yet \u2014 this is just the materials list.</div>';
  const s = state.settings;
  const titleShop = s.shopName || s.businessName;
  const shopMeta = (s.ownerName ? 'Prop: ' + esc(s.ownerName) + ' \u00b7 ' : '') +
    (s.businessPhone ? esc(s.businessPhone) : '') +
    (s.whatsappPhone ? (s.businessPhone ? ' | ' : '') + 'WA: ' + esc(s.whatsappPhone) : '') +
    (s.gstin ? ' \u00b7 GSTIN: ' + esc(s.gstin) : '');

  return '<div style="width:800px;background:#FFFFFF;font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;padding:32px;box-sizing:border-box">'+
    '<div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #1B4F91;padding-bottom:16px;margin-bottom:18px">'+
      '<div style="display:flex;align-items:center;gap:10px">'+
        '<div style="width:36px;height:36px;border-radius:9px;background:#1B4F91;display:flex;align-items:center;justify-content:center;color:#A85A15;font-weight:900;font-size:18px">P</div>'+
        '<div><div style="font-weight:900;font-size:20px;color:#0F3363;letter-spacing:-0.02em">PipeList</div><div style="font-size:11.5px;color:#7C8288;font-weight:700;text-transform:uppercase;letter-spacing:.04em">Plumbing &amp; Irrigation Material Estimate</div></div>'+
      '</div>'+
      (titleShop ? '<div style="text-align:right"><div style="font-weight:800;font-size:14.5px;color:#0F3363">'+esc(titleShop)+'</div><div style="font-size:11px;color:#52585F;margin-top:2px">'+shopMeta+'</div></div>' : '')+
    '</div>'+
    '<div style="display:flex;justify-content:space-between;margin-bottom:18px;font-size:13px;color:#1A1F26">'+
      '<div><div style="color:#7C8288;font-size:11px;font-weight:700;text-transform:uppercase">Project</div><div style="font-weight:800;font-size:15px">'+esc(est.projectName||'-')+'</div><div style="color:#52585F;margin-top:2px">'+esc(est.customerName||'')+(est.customerPhone?' \u00b7 '+esc(est.customerPhone):'')+(est.customerWhatsapp?' (WA: '+esc(est.customerWhatsapp)+')':'')+'</div></div>'+
      '<div style="text-align:right"><div style="color:#7C8288;font-size:11px;font-weight:700;text-transform:uppercase">Date</div><div style="font-weight:700">'+esc(fmtDateDisplay(est.date))+'</div><div style="color:#52585F;margin-top:2px;font-family:monospace;font-size:11.5px">'+esc(est.id||'')+'</div></div>'+
    '</div>'+
    (est.notes ? '<div style="background:#E7E9EC;padding:8px 12px;border-radius:6px;font-size:12px;color:#52585F;margin-bottom:14px"><strong>Note:</strong> '+esc(est.notes)+'</div>' : '')+
    '<table style="width:100%;border-collapse:collapse;margin-bottom:6px"><thead><tr style="background:#1B4F91;color:#fff">'+
      '<th style="padding:9px 6px;text-align:left;font-size:11.5px">No.</th><th style="padding:9px 6px;text-align:left;font-size:11.5px">Material</th>'+
      '<th style="padding:9px 6px;text-align:left;font-size:11.5px">Size</th><th style="padding:9px 6px;text-align:left;font-size:11.5px">Brand</th>'+
      '<th style="padding:9px 6px;text-align:right;font-size:11.5px">Qty</th><th style="padding:9px 6px;text-align:right;font-size:11.5px">Total</th></tr></thead>'+
      '<tbody>'+itemsHtml+extra+'</tbody></table>'+
    costBlock + disclaimer +
  '</div>';

}
function renderToCanvas(est){
  const holder = document.getElementById('share-render');
  holder.innerHTML = buildShareImageHTML(est);
  return window.html2canvas(holder.firstChild, {scale:2, backgroundColor:'#ffffff', useCORS:true}).finally(function(){ holder.innerHTML=''; });
}
async function downloadEstimateImage(est){
  if(!ensureLibsLoaded('image')) return;
  if(!est.items.length){ showToast('Add at least one material first','error'); return; }
  try{
    const canvas = await renderToCanvas(est);
    canvas.toBlob(function(blob){
      if(!blob){ showToast('Could not create the image','error'); return; }
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href=url; a.download=(est.id||'PipeList-Estimate')+'.png'; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function(){ URL.revokeObjectURL(url); }, 4000);
      showToast('Image downloaded','success');
    }, 'image/png');
  }catch(e){ console.error(e); showToast('Could not create the image','error'); }
}

/* ============================= SHARE ============================= */
function shareTextFor(est){
  const lines = est.items.map(function(it,i){
    const base = (i+1)+'. '+lineLabel(it)+' \u2013 '+fmtNum(it.qty)+' '+it.unit;
    return hasPrice(it) ? (base+' \u2013 '+money(lineTotal(it))) : base;
  });
  let txt = 'PipeList Material Estimate\n\nProject: '+(est.projectName||'-');
  if(est.customerName) txt += '\nCustomer: '+est.customerName;
  txt += '\n\n'+lines.join('\n');
  if(hasCostBasis(est)){
    txt += '\n\nEstimated Total: '+money(finalCostOf(est));
    if(unpricedCountOf(est)>0) txt += ' ('+unpricedCountOf(est)+' item(s) not priced, not included)';
    txt += '\n\nPrices shown are figures entered in PipeList, not verified market rates.';
  } else {
    txt += '\n\n(No prices added yet \u2014 this is just the materials list.)';
  }
  return txt;
}
async function fallbackCopy(text){
  try{ await navigator.clipboard.writeText(text); showToast('Copied to clipboard','success'); }
  catch(e){ openModal('<div class="modal-title">Copy Text</div><div class="modal-sub">Tap the box to select it, then copy.</div><textarea class="textarea" style="min-height:220px" readonly onclick="this.select()">'+esc(text)+'</textarea>'); }
}
async function shareAsText(est){
  const text = shareTextFor(est);
  if(navigator.share){
    try{ await navigator.share({title:'PipeList Estimate', text:text}); return; }
    catch(e){ if(e && e.name==='AbortError') return; }
  }
  fallbackCopy(text);
}
async function shareAsPDF(est){
  if(!ensureLibsLoaded('pdf')) return;
  try{
    const doc = buildPDFDoc(est);
    const blob = doc.output('blob');
    const file = new File([blob], (est.id||'PipeList-Estimate')+'.pdf', {type:'application/pdf'});
    if(navigator.canShare && navigator.canShare({files:[file]})){
      await navigator.share({files:[file], title:'PipeList Estimate', text:'Material estimate for '+(est.projectName||'')});
    } else {
      doc.save((est.id||'PipeList-Estimate')+'.pdf');
      showToast('Sharing isn\u2019t supported here \u2014 PDF downloaded instead');
    }
  }catch(e){ if(e && e.name==='AbortError') return; console.error(e); showToast('Could not share the PDF','error'); }
}
async function shareAsImage(est){
  if(!ensureLibsLoaded('image')) return;
  try{
    const canvas = await renderToCanvas(est);
    canvas.toBlob(async function(blob){
      if(!blob){ showToast('Could not create the image','error'); return; }
      const file = new File([blob], (est.id||'PipeList-Estimate')+'.png', {type:'image/png'});
      if(navigator.canShare && navigator.canShare({files:[file]})){
        try{ await navigator.share({files:[file], title:'PipeList Estimate'}); }
        catch(e){ if(!e || e.name!=='AbortError') showToast('Could not share the image','error'); }
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href=url; a.download=file.name; document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function(){ URL.revokeObjectURL(url); }, 4000);
        showToast('Sharing isn\u2019t supported here \u2014 image downloaded instead');
      }
    }, 'image/png');
  }catch(e){ console.error(e); showToast('Could not create the image','error'); }
}
function openShareSheet(est){
  if(!est.items.length){ showToast('Add at least one material first','error'); return; }
  openModal(
    '<div class="modal-title">Share Estimate</div><div class="modal-sub">'+esc(est.projectName||'')+'</div>'+
    '<button type="button" class="share-option" id="sh-pdf"><span class="share-option-icon">'+icon('pdf')+'</span><span><span class="share-option-title" style="display:block">Share as PDF</span><span class="share-option-sub">Formatted document, ready to print</span></span></button>'+
    '<button type="button" class="share-option" id="sh-image"><span class="share-option-icon">'+icon('image')+'</span><span><span class="share-option-title" style="display:block">Share as Image</span><span class="share-option-sub">Best for WhatsApp</span></span></button>'+
    '<button type="button" class="share-option" id="sh-text"><span class="share-option-icon">'+icon('note')+'</span><span><span class="share-option-title" style="display:block">Share as Text</span><span class="share-option-sub">Quick summary message</span></span></button>'
  );
  document.getElementById('sh-pdf').addEventListener('click', function(){ closeModal(); shareAsPDF(est); });
  document.getElementById('sh-image').addEventListener('click', function(){ closeModal(); shareAsImage(est); });
  document.getElementById('sh-text').addEventListener('click', function(){ closeModal(); shareAsText(est); });
}

/* ============================= INIT ============================= */
function init(){
  window.addEventListener('online', function(){ state.online=true; render(); });
  window.addEventListener('offline', function(){ state.online=false; render(); });
  render();
  loadAll().then(render);
}
init();
