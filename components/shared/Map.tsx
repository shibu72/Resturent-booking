"use client"; // Required for Next.js App Router

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

const position: LatLngExpression = [23.8103, 90.4125]; // Dhaka, Bangladesh

export default function Map() {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden">
      <MapContainer center={position} zoom={12} className="w-full h-full rounded-xl">
        {/* OpenStreetMap Tiles */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Marker */}
        <Marker position={position}>
          <Popup>📍 This is Dhaka, Bangladesh!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
