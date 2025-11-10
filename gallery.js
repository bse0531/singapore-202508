
const samples = ['sample1.jpg','sample2.jpg','sample3.jpg']; // replace with your files
const grid = document.getElementById('galleryGrid');
if (grid){
  samples.forEach(name=>{
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.alt = name;
    img.src = 'assets/' + name;
    grid.appendChild(img);
  });
}
