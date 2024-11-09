// Script for Map
// CENTER (Halden, Norway)
const centerLat = 59.128;  // Halden Latitude
const centerLong = 11.386;  // Halden Longitude

// DATA: ARRAY OF PLACES
const places = [
  {
    name: "Kvik Halden Fotballklubb",
    lat: 59.1383,    
    long: 11.3750, 
    image: "images/kvik_halden.png", // Path to image for Kvik Halden
    type: "football",
    zoomLevel: 16 // Custom zoom level
  },
  {
    name: "Tistedal Klubb",
    lat: 59.134,      
    long: 11.4568,
    image: "images/tistedal.png", // Path to image for Tistedal
    type: "football",
    zoomLevel: 15 // Custom zoom level
  },
  {
    name: "Berg Idrettsklubb",
    lat: 59.123070,  // Nøyaktig latitude for Sørliveien 128, 1788 Berg i Østfold
    long: 11.301110, // Nøyaktig longitude for Sørliveien 128, 1788 Berg i Østfold
    image: "images/berg.png",
    type: "football",
    zoomLevel: 15, // Custom zoom level
    address: "Sørliveien 128, 1788 Berg i Østfold"
}

,
  {
    name: "Idd Idrettsklubb",
    lat: 59.118543,
    long: 11.409084,
    image: "images/idd.png", // Path to image for Idd Idrettsklubb
    type: "football",
    zoomLevel: 15 // Custom zoom level
  },
  {
    name: "Aremark Fotball Klubb",
    lat: 59.293,
    long: 11.680,
    image: "images/aremark.png", // Path to image for Aremark Fotball Klubb
    type: "football",
    zoomLevel: 15 // Custom zoom level
  },
  {
    name: "FC Pristina v/ Risum KG/Gress",
    lat: 59.124,
    long: 11.387,
    image: "images/pristina.png", // Path to image for FC Pristina
    type: "football",
    zoomLevel: 16 // Custom zoom level
  },
  {
    name: "Halden Volleyball Klubb",
    lat: 59.120,
    long: 11.387,
    image: "images/halden_volleyball.png", // Path to image for Halden Volleyball Klubb
    type: "volleyball",
    zoomLevel: 16 // Custom zoom level
  },
  {
    name: "HSS Volleyball",
    lat: 59.1292,
    long: 11.3528,
    image: "images/hss_volleyball.png", // Path to image for HSS Volleyball
    type: "volleyball",
    zoomLevel: 15 // Custom zoom level
  }
];

// INITIATE MAP
let map = L.map("map", {
  center: [centerLat, centerLong],
  zoom: 14,  // Adjusted zoom level for closer view of Halden
  scrollWheelZoom: false // Disable scroll to avoid accidental zooming
});

// SET MAP CONSTRUCTOR
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// CREATE ICONS
const footballIcon = L.icon({
  iconUrl: "pictures/ball.webp", // Specify the correct path for the football icon
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
});

const volleyballIcon = L.icon({
  iconUrl: "pictures/volleyball.jpg", // Specify the correct path for the volleyball icon
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
});

// Prepare navigation HTML
let navHTML = "";

// Loop through places
places.forEach((place) => {
  // Select icon based on type
  const icon = place.type === "football" ? footballIcon : volleyballIcon;

  // Place markers
  L.marker([place.lat, place.long], { icon: icon })
    .addTo(map)
    .bindPopup(`
      <div>
        <h3>${place.name}</h3>
        <img src="${place.image}" alt="${place.name} logo" style="width:100px; height:auto;"/>
      </div>
    `); // Include image in popup

  // Build navigation
  navHTML += `
    <article>
      <h3>${place.name}</h3>
      <button onclick="map.flyTo([${place.lat}, ${place.long}], ${place.zoomLevel})">Vis på kart</button>
    </article>
  `;
});

// Add HTML to nav
document.getElementById("klubbkart").innerHTML = navHTML;
