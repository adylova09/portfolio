import { useState, useEffect } from "react";

const MapLocation = ({ defaultCoords }) => {
  const [userLocation, setUserLocation] = useState(null);

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      alert("Геолокация не поддерживается");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      () => alert("Не удалось определить геолокацию")
    );
  };

  const openRoute = () => {
    if (!userLocation) return;
    window.open(
      `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/${defaultCoords.lat},${defaultCoords.lng}`,
      "_blank"
    );
  };

  const mapCenter = userLocation || defaultCoords;

  const mapSrc = `https://www.google.com/maps/embed/v1/view?key=ВАШ_API_KEY&center=${mapCenter.lat},${mapCenter.lng}&zoom=15`;

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
      <iframe
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={mapSrc}
      />

      <div style={{ marginTop: "12px", display: "flex", gap: "10px" }}>
        <button onClick={getUserLocation} className="bg-yellow-400 px-3 py-1 rounded">
          📍 Определить моё местоположение
        </button>

        {userLocation && (
          <button onClick={openRoute} className="bg-green-500 px-3 py-1 rounded">
            🧭 Построить маршрут
          </button>
        )}
      </div>
    </div>
  );
};

export default MapLocation;
