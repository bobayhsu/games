/* 遊戲頁底部圖示列（2026-11-04；遊戲已搬到獨立的 games 專案）
   和《五大類故事》簡報底部同一排圖示：左邊 影片、說書人、練習、遊戲、薩提爾、下載；右邊 靶心人、五大類、末頁、上一頁、首頁。
   放在簡報的同步視窗裡時，簡報本身已經疊了一排同樣的圖示，所以這裡只留出底部空間，不重複顯示。 */
(()=>{'use strict';
const FS='https://bobayhsu.github.io/fivestory/';
const ICON={"video": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"3\"/><path d=\"M10 9.2v5.6l4.8-2.8z\" fill=\"currentColor\"/></svg>", "teller": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><circle cx=\"12\" cy=\"12\" r=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"1.3\" fill=\"currentColor\"/></svg>", "practice": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"13.5\" r=\"7.5\"/><path d=\"M12 9.5v4l2.5 2M10 2.5h4M12 2.5V6\"/></svg>", "games": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"2\" y=\"6\" width=\"20\" height=\"12\" rx=\"6\"/><path d=\"M7 10v4M5 12h4\"/><circle cx=\"15.5\" cy=\"11\" r=\"1\" fill=\"currentColor\"/><circle cx=\"18\" cy=\"13.5\" r=\"1\" fill=\"currentColor\"/></svg>", "formula": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><circle cx=\"12\" cy=\"12\" r=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"1.3\" fill=\"currentColor\"/></svg>", "types": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"6\" cy=\"7\" r=\"2.3\"/><circle cx=\"12\" cy=\"7\" r=\"2.3\"/><circle cx=\"18\" cy=\"7\" r=\"2.3\"/><circle cx=\"9\" cy=\"15\" r=\"2.3\"/><circle cx=\"15\" cy=\"15\" r=\"2.3\"/></svg>", "end": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#FBF8F3\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 6l7 6-7 6\"/><path d=\"M12 6l7 6-7 6\"/><path d=\"M20 5v14\"/></svg>", "back": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#FBF8F3\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 5l-7 7 7 7\"/></svg>", "home": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#FBF8F3\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 11l9-8 9 8\"/><path d=\"M5 10v10h5v-6h4v6h5V10\"/></svg>", "satir": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 5.5A2.5 2.5 0 0 1 5.5 3h7A2.5 2.5 0 0 1 15 5.5v4A2.5 2.5 0 0 1 12.5 12H8l-3.5 3v-3A2.5 2.5 0 0 1 3 9.5z\"/><path d=\"M18 8.5h.5A2.5 2.5 0 0 1 21 11v4a2.5 2.5 0 0 1-2.5 2.5V21L15 17.5h-3.5A2.5 2.5 0 0 1 9 15v-.5\"/></svg>", "download": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 4v11\"/><path d=\"M7 10l5 5 5-5\"/><path d=\"M5 20h14\"/></svg>"};
const inFrame=(()=>{try{return window.self!==window.top;}catch(_){return true;}})();
const st=document.createElement('style');
st.textContent='body{padding-bottom:calc(var(--gbar,80px) + env(safe-area-inset-bottom,0px))!important}'+
 '#gameBar{position:fixed;left:0;right:0;bottom:0;z-index:2147483646;display:flex;justify-content:space-between;align-items:center;gap:8px;padding:8px 12px calc(8px + env(safe-area-inset-bottom,0px));pointer-events:none}'+
 '#gameBar .g{display:flex;gap:8px;pointer-events:auto}'+
 '#gameBar a{width:60px;height:60px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:#FBF8F3;box-shadow:0 3px 8px rgba(0,0,0,.35);text-decoration:none;transition:transform .15s,background .15s}'+
 '#gameBar a:hover{transform:scale(1.08);background:#D2262E!important}'+
 '#gameBar svg{width:32px;height:32px}'+
 '@media (max-width:900px){#gameBar a{width:50px;height:50px}#gameBar svg{width:28px;height:28px}}'+'@media (max-width:520px){body{padding-bottom:calc(64px + env(safe-area-inset-bottom,0px))!important}#gameBar{padding:6px 4px calc(6px + env(safe-area-inset-bottom,0px));gap:3px}#gameBar .g{gap:3px}#gameBar a{width:min(46px,calc((100vw - 46px) / 11));height:min(46px,calc((100vw - 46px) / 11))}#gameBar svg{width:60%;height:60%}}'+
 '';
document.head.appendChild(st);
const toG=document.getElementById('toGames');if(toG)toG.style.display='none';
/* 2026-11-04：遊戲頁按 F 也能切換全螢幕（在簡報同步視窗裡，就讓整個簡報全螢幕） */
document.addEventListener('keydown',e=>{
  if((e.key!=='f'&&e.key!=='F')||e.ctrlKey||e.metaKey||e.altKey||e.repeat)return;
  const t=e.target;if(t&&(t.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)))return;
  let d=document;if(inFrame){try{d=window.parent.document;}catch(_){}}
  try{if(d.fullscreenElement)d.exitFullscreen();else{const p=d.documentElement.requestFullscreen();if(p&&p.catch)p.catch(()=>{});}}catch(_){}
});
if(inFrame){try{gameSync();}catch(e){console.warn('[遊戲同步] 啟動失敗',e);}return;}
/* 2026-11-04：在簡報同步視窗裡，遊戲裡的操作也讓手機、桌機同步。
   點擊、輸入、送出都會傳給另一台照做；變色賓果有隨機，所以改傳整個盤面。 */
function gameSync(){
  const P=window.parent;const qs=new URLSearchParams(P.location.search);
  if(!qs.has('sync')||!P.firebase||!P.firebase.database)return;
  const room=qs.get('sync')||'demo';if(!/^[A-Za-z0-9_-]{4,60}$/.test(room))return;
  const ref=P.firebase.database().ref('rooms/'+room+'/screen/gameCmd');
  /* 狀態提示：左上角小標籤。連上顯示「遊戲同步 ✓」幾秒後淡出；寫入或讀取失敗會一直顯示紅色，方便判斷問題 */
  const tag=document.createElement('div');tag.id='gameSyncTag';
  tag.style.cssText='position:fixed;left:8px;top:8px;z-index:2147483647;padding:4px 10px;border-radius:12px;font:700 12px "Noto Sans TC",sans-serif;color:#fff;background:#1f7a4d;opacity:.92;pointer-events:none;transition:opacity .6s';
  const say=(t,bad)=>{tag.textContent=t;tag.style.background=bad?'#c41f27':'#1f7a4d';tag.style.opacity='.92';clearTimeout(tag._h);if(!bad)tag._h=setTimeout(()=>{tag.style.opacity='0';},2500);};
  (document.body?Promise.resolve():new Promise(r=>addEventListener('DOMContentLoaded',r))).then(()=>{document.body.appendChild(tag);say('遊戲同步 ✓ '+room);});
  const node='g-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const page=location.pathname.split('/').pop()||'index.html';
  const isBingo=!!document.querySelector('.board .tile .tile-number')&&typeof window.updateStatus==='function';
  let seq=0,first=true,lastId='';
  const pathOf=el=>{const p=[];while(el&&el!==document.body){const par=el.parentElement;if(!par)return null;p.unshift([...par.children].indexOf(el));el=par;}return el===document.body?p:null;};
  const byPath=p=>{let el=document.body;for(const i of p||[]){el=el&&el.children[i];}return el||null;};
  const send=(kind,extra)=>{ref.set(Object.assign({id:node+'-'+(++seq),source:node,page,kind,at:P.firebase.database.ServerValue.TIMESTAMP},extra)).catch(e=>{console.warn('[遊戲同步] 寫入失敗',e);say('遊戲同步失敗：無法寫入（'+(e&&e.code||e&&e.message||'錯誤')+'）',true);});};
  const bingoState=()=>{const t=[...document.querySelectorAll('.board .tile')];return{nums:t.map(x=>x.dataset.number||''),sel:t.map((x,i)=>x.classList.contains('selected')?i:-1).filter(i=>i>=0),latest:t.findIndex(x=>x.classList.contains('latest'))};};
  const applyBingo=st=>{const t=[...document.querySelectorAll('.board .tile')];if(!st||!Array.isArray(st.nums)||st.nums.length!==t.length)return;
    t.forEach((x,i)=>{const n=st.nums[i];x.dataset.number=n;const l=x.querySelector('.tile-number');if(l)l.textContent=n;x.setAttribute('aria-label','標記 '+n);
      const on=(st.sel||[]).includes(i);x.classList.toggle('selected',on);x.classList.toggle('latest',i===st.latest);x.setAttribute('aria-pressed',String(on));});
    if(st.latest>=0){const x=t[st.latest];x.classList.remove('drawn');void x.offsetWidth;x.classList.add('drawn');}
    try{window.updateStatus();}catch(_){}};
  document.addEventListener('click',e=>{if(!e.isTrusted)return;
    if(e.target.closest&&e.target.closest('#gameBar'))return;
    if(isBingo){setTimeout(()=>send('state',{state:bingoState()}),30);return;}
    const sb=e.target.closest&&e.target.closest('button[type=submit],input[type=submit]');if(sb)return; // 送出交給 submit 事件
    const p=pathOf(e.target);if(p)send('click',{path:p});},true);
  document.addEventListener('input',e=>{if(!e.isTrusted||isBingo)return;const p=pathOf(e.target);if(p)send('input',{path:p,value:String(e.target.value||'')});},true);
  document.addEventListener('submit',e=>{if(!e.isTrusted||isBingo)return;const p=pathOf(e.target);if(p)send('submit',{path:p});},true);
  ref.on('value',snap=>{const c=snap.val();if(first){first=false;return;}
    if(!c||c.source===node||c.id===lastId||c.page!==page)return;lastId=c.id;
    try{
      say('遊戲同步 ✓ 收到另一台的操作');
      if(c.kind==='state'&&isBingo){applyBingo(c.state);return;}
      const el=byPath(c.path);if(!el)return;
      if(c.kind==='click')el.click();
      else if(c.kind==='input'){el.value=c.value;el.dispatchEvent(new Event('input',{bubbles:true}));}
      else if(c.kind==='submit'&&el.requestSubmit)el.requestSubmit();
    }catch(err){console.warn('[遊戲同步] 套用失敗',err);}
  },err=>{console.warn('[遊戲同步] 讀取失敗',err);say('遊戲同步失敗：無法讀取（'+(err&&err.code||'錯誤')+'）',true);});
  addEventListener('pagehide',()=>{try{ref.off();}catch(_){}});
}
const mk=(key,title,href,color,onClick)=>{const a=document.createElement('a');a.href=href;a.title=title;a.setAttribute('aria-label',title);
  a.innerHTML=ICON[key];a.style.background=color;const s=a.querySelector('svg');if(s){s.removeAttribute('width');s.removeAttribute('height');}
  if(onClick)a.addEventListener('click',e=>{e.preventDefault();onClick();});return a;};
const blue='#1F5FA8',dark='#1E1C1A';
const dl=mk('download','下載課程資料','https://drive.google.com/drive/folders/19fBkcYqqWOZ9kjti1zahK3B_ObkxC251?usp=drive_link',blue);dl.target='_blank';dl.rel='noopener';
const bar=document.createElement('nav');bar.id='gameBar';bar.setAttribute('aria-label','導覽列');
const L=document.createElement('div');L.className='g';const R=document.createElement('div');R.className='g';
L.append(
  mk('video','影片','https://bobayhsu.github.io/allbobay/',blue),
  mk('teller','說書人','https://bobayhsu.github.io/bullseye/',blue),
  mk('practice','練習','https://bobayhsu.github.io/practice/',blue),
  mk('games','遊戲','./',blue,()=>location.replace('./')),
  mk('satir','薩提爾',FS+'satir/',blue),
  dl);
R.append(
  mk('formula','靶心人公式',FS+'#2',dark),
  mk('types','五大類故事',FS+'#3',dark),
  mk('end','末頁',FS+'#end',dark),
  mk('back','上一頁','#',dark,()=>{if(history.length>1)history.back();else location.replace('./');}),
  mk('home','回首頁',FS,dark));
bar.append(L,R);
const add=()=>document.body.appendChild(bar);
document.body?add():addEventListener('DOMContentLoaded',add);
})();
