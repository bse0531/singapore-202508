
// Active tab
(function(){
  const p=(location.pathname.split('/').pop()||'index.html');
  document.querySelectorAll('.tabbar a').forEach(a=>{ if(a.getAttribute('href')===p) a.classList.add('active'); });
})();

// Lightbox with prev/next + memo
(function(){
  function setup(container){
    if(!container) return;
    const imgs=[...container.querySelectorAll('img')];
    if(!imgs.length) return;
    function openAt(i0){
      let i=i0;
      const ov=document.createElement('div');
      ov.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.92);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px;z-index:9999;';
      const frame=document.createElement('div'); frame.style.cssText='display:flex;gap:10px;align-items:center;';
      const img=document.createElement('img'); img.style.cssText='max-width:90vw;max-height:70vh;border-radius:12px;';
      const prev=document.createElement('button'); prev.textContent='‹'; prev.className='arrow';
      const next=document.createElement('button'); next.textContent='›'; next.className='arrow';
      const memo=document.createElement('textarea'); memo.placeholder='짧은 메모'; memo.style.cssText='width:min(720px,90vw);min-height:70px;border-radius:12px;padding:10px;';
      const close=document.createElement('button'); close.textContent='Close'; close.className='arrow';
      function render(){ img.src=imgs[i].src; }
      prev.onclick=()=>{ i=(i-1+imgs.length)%imgs.length; render(); };
      next.onclick=()=>{ i=(i+1)%imgs.length; render(); };
      close.onclick=()=>ov.remove();
      frame.append(prev,img,next); ov.append(frame,memo,close); document.body.appendChild(ov); render();
    }
    container.addEventListener('click', e=>{
      const im=e.target.closest('img'); if(!im) return;
      openAt(imgs.indexOf(im));
    });
  }
  setup(document.getElementById('galleryGrid'));
  setup(document.getElementById('day1Gallery'));
  setup(document.getElementById('day2Gallery'));
  setup(document.getElementById('day3Gallery'));
})();

// Map
(function(){
  const el=document.getElementById('map');
  if(!el) return;
  const map=L.map('map').setView([1.3521,103.8198],12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap'}).addTo(map);
  [{name:'Hotel',coords:[1.2897,103.7865]},{name:'Gardens by the Bay',coords:[1.2816,103.8636]}]
    .forEach(p=>L.marker(p.coords).addTo(map).bindPopup(p.name));
})();
