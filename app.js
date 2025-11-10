
// Active tab state based on URL
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.tabbar a').forEach(a=>{
    if(a.getAttribute('href')===path) a.classList.add('active');
  });
})();

// Lightbox with prev/next and memo field (per page gallery)
(function(){
  function setup(container){
    if(!container) return;
    const imgs = Array.from(container.querySelectorAll('img'));
    if(!imgs.length) return;
    function openAt(i0){
      let i = i0;
      const ov = document.createElement('div');
      ov.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.92);display:flex;flex-direction:column;gap:12px;align-items:center;justify-content:center;z-index:9999;padding:16px';
      const frame=document.createElement('div');
      frame.style.cssText='display:flex;align-items:center;gap:10px;max-width:96vw;';
      const img=document.createElement('img');
      img.style.maxWidth='90vw'; img.style.maxHeight='70vh'; img.style.borderRadius='12px';
      const prev=document.createElement('button'); prev.textContent='‹'; prev.className='btn';
      const next=document.createElement('button'); next.textContent='›'; next.className='btn';
      const memo=document.createElement('textarea');
      memo.placeholder='짧은 메모'; memo.style.cssText='width:min(720px,90vw);min-height:70px;border-radius:12px;padding:10px;border:1px solid rgba(0,0,0,.15);background:#fff;color:#111';
      const close=document.createElement('button'); close.textContent='Close'; close.className='btn outline';
      function render(){ img.src = imgs[i].src; }
      prev.onclick = ()=>{ i=(i-1+imgs.length)%imgs.length; render(); }
      next.onclick = ()=>{ i=(i+1)%imgs.length; render(); }
      close.onclick=()=>ov.remove();
      frame.appendChild(prev); frame.appendChild(img); frame.appendChild(next);
      ov.appendChild(frame); ov.appendChild(memo); ov.appendChild(close);
      document.body.appendChild(ov); render();
    }
    container.addEventListener('click', (e)=>{
      const im = e.target.closest('img'); if(!im) return;
      const idx = imgs.indexOf(im); openAt(idx);
    });
  }
  setup(document.getElementById('galleryGrid'));
  setup(document.getElementById('day1Gallery'));
  setup(document.getElementById('day2Gallery'));
  setup(document.getElementById('day3Gallery'));
})();
