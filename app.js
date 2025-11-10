
document.addEventListener('click', e=>{
  const img = e.target.closest('[data-lightbox] img');
  if(!img) return;
  const overlay = document.createElement('div');
  overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.9);display:flex;align-items:center;justify-content:center;z-index:9999;cursor:zoom-out';
  const big=document.createElement('img');
  big.src=img.src;
  big.style.maxWidth='96vw'; big.style.maxHeight='92vh'; big.style.borderRadius='12px';
  overlay.appendChild(big);
  document.body.appendChild(overlay);
  overlay.onclick=()=>overlay.remove();
});
