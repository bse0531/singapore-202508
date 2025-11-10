
const files=['sample1.jpg','sample2.jpg','sample3.jpg'];
const grid=document.getElementById('galleryGrid');
if(grid){ files.forEach(n=>{ const img=document.createElement('img'); img.src='assets/'+n; img.loading='lazy'; grid.appendChild(img); }); }
