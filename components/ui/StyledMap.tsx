"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Иконка маркера
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Координаты (Ставрополь, Кубанский проезд, 1Б)
const position: [number, number] = [45.0355, 41.9696];

// ЭКСПОРТИРУЕМ КОМПОНЕНТ ОБЕРТКУ (не дефолтный экспорт)
export function StyledMap() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="h-full w-full bg-bg-alt flex items-center justify-center text-ink-light font-bold">
        Загрузка карты...
      </div>
    );
  }

  return (
    <div className="h-full w-full relative z-0">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        className="grayscale-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <strong>ТоптыжкА</strong><br />
            г. Ставрополь, Кубанский проезд, 1Б
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}