
// Theme toggle (persist)
const btn = document.getElementById('themeToggle');
if (btn){
  const key = 'theme';
  const apply = (m)=>document.documentElement.dataset.theme = m;
  const saved = localStorage.getItem(key);
  if (saved) apply(saved);
  btn.addEventListener('click', ()=>{
    const cur = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(cur); localStorage.setItem(key, cur);
  });
  if (!saved) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    apply(prefersDark ? 'dark' : 'light');
  }
}

// Lightweight lightbox
document.addEventListener('click', (e)=>{
  const img = e.target.closest('[data-lightbox] img');
  if(!img) return;
  const src = img.getAttribute('src');
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.9);display:flex;align-items:center;justify-content:center;cursor:zoom-out;z-index:9999;padding:20px';
  const big = document.createElement('img');
  big.src = src;
  big.style.maxWidth = '96vw';
  big.style.maxHeight = '92vh';
  big.style.borderRadius = '12px';
  overlay.appendChild(big);
  document.body.appendChild(overlay);
  overlay.addEventListener('click', ()=> overlay.remove());
});
