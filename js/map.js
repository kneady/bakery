// Initialize and add the map
function initMap() {
  // The location of Kneady Bakery.
  const kneady = { lat: 53.378779, lng: -6.376460 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13.5,
    center: kneady,
  });
  const marker = new google.maps.Marker({
    position: kneady,
    map: map,
    title: "The Kneady Bakery",
    icon: icon.icon,
  });
}