function onGeoOk(posotion) {
    const lat = posotion.coords.latitude;
    const lng = posotion.coords.longitude;
    console.log("You live in", lat, lng);
    
}
function onGeoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);