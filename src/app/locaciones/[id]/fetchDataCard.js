"use client"
// FetchData.js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LocacionCard from "./LocacionCard";

const FetchDataCard = () => {
  const [locaciones, setLocaciones] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query; // Obtén el ID de la locación desde la ruta

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/locaciones")
      .then(response => response.json())
      .then(json => setLocaciones(json))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const currentLocacion = locaciones.find(locacion => locacion.id === Number(id));

  if (!currentLocacion) {
    return <p>Locación no encontrada</p>;
  }

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Listado de Locaciones</h1>
      <LocacionCard
        locacion={currentLocacion}
        onEditClick={(id) => console.log(`Editing locacion with ID: ${id}`)}
        onDeleteClick={(id) => console.log(`Deleting locacion with ID: ${id}`)}
      />
    </div>
  );
};

export default FetchDataCard;