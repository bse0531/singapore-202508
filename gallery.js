
const samples=['sample1.jpg','sample2.jpg','sample3.jpg'];
const grid=document.getElementById('galleryGrid');
if(grid){
  samples.forEach(name=>{
    const img=document.createElement('img');
    img.src='assets/'+name;
    img.loading='lazy';
    grid.appendChild(img);
  });
}
