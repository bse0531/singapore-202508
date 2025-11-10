
// Auto-load images from assets folder by listing known sample names.
// Tip: Replace with your own filenames.
const samples = ['sample1.jpg','sample2.jpg','sample3.jpg'];
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
