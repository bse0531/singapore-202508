
const map = L.map('map').setView([1.3521, 103.8198], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
const places = [
  { name: 'Hotel', coords: [1.2897, 103.7865] },
  { name: 'Gardens by the Bay', coords: [1.2816, 103.8636] }
];
places.forEach(p=> L.marker(p.coords).addTo(map).bindPopup(p.name));
