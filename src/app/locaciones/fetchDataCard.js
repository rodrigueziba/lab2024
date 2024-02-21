"use client"
// FetchData.js
import React, { useState, useEffect } from "react";
import LocacionCard from "./LocacionCard"; 


const FetchDataCard = () => {
  const [locaciones, setLocaciones] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/locaciones")
      .then(response => response.json())
      .then(json => setLocaciones(json))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleEditClick = (id) => {
    window.location.href = `http://localhost:4000/locaciones/${id}`;
  };

  const handleDeleteClick = (id) => {
    // Implement delete functionality here using the locacion id
    fetch(`http://localhost:3000/locaciones/${id}`, {
      method: "DELETE",
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Remove the deleted locacion from the state
        setLocaciones(prevLocaciones => prevLocaciones.filter(locacion => locacion.id !== id));
      })
      .catch(error => console.error("Error deleting locacion:", error));
  };

  return (
    
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Listado de Locaciones</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {locaciones.map((locacion) => (
          <LocacionCard
            key={locacion.id}
            locacion={locacion}
            onEditClick={() => handleEditClick(locacion.id)}
            onDeleteClick={() => handleDeleteClick(locacion.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FetchDataCard;
