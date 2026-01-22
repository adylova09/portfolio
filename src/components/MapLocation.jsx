import { useState } from "react";

const MapLocation = () => {
  const [userLocation, setUserLocation] = useState(null);
  const mallLocation = {
    lat: 42.85570920364617,
    lng: 74.58258377467789,
  };

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      alert("Геолокация не поддерживается");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        alert("Не удалось получить геолокацию");
      }
    );
  };

  const openRoute = () => {
    if (!userLocation) return;

    window.open(
      `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/${mallLocation.lat},${mallLocation.lng}`,
      "_blank"
    );
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.811690846015!2d74.58258377467789!3d42.85570920364617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9d3088356eb%3A0xb6b7beaa1240556a!2sAsia%20Mall!5e0!3m2!1sen!2skg!4v1769077183669"
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      />

      <div style={{ marginTop: "12px" }}>
        <button onClick={getUserLocation}>
          📍 Определить моё местоположение
        </button>

        {userLocation && (
          <button onClick={openRoute} style={{ marginLeft: "10px" }}>
            🧭 Построить маршрут
          </button>
        )}
      </div>
    </div>
  );
};

export default MapLocation;
