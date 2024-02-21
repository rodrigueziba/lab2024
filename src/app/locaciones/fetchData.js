"use client"
// FetchData.js
import React, { useState, useEffect } from "react";


const FetchData = () => {
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
    // Implement edit functionality here using the locacion id
    console.log(`Editing locacion with ID: ${id}`);
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
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Descripción</th>
            <th className="px-4 py-2">Ciudad</th>
            <th className="px-4 py-2">Jurisdicción</th>
            <th className="px-4 py-2">Dirección</th>
            <th className="px-4 py-2">Instagram</th>
            <th className="px-4 py-2">Facebook</th>
            <th className="px-4 py-2">Sitio Web</th>
            <th className="px-4 py-2">Teléfono</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Imagen de Perfil</th>
            <th className="px-4 py-2">Latitud</th>
            <th className="px-4 py-2">Longitud</th>
            <th className="px-4 py-2">Categoría ID</th>
            <th className="px-4 py-2">Creado Por</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {locaciones.map((locacion) => (
            <tr key={locacion.id}>
              <td className="border px-4 py-2">{locacion.id}</td>
              <td className="border px-4 py-2">{locacion.nombre}</td>
              <td className="border px-4 py-2">{locacion.descripcion}</td>
              <td className="border px-4 py-2">{locacion.ciudad}</td>
              <td className="border px-4 py-2">{locacion.jurisdiccion}</td>
              <td className="border px-4 py-2">{locacion.direccion}</td>
              <td className="border px-4 py-2">{locacion.instagram}</td>
              <td className="border px-4 py-2">{locacion.facebook}</td>
              <td className="border px-4 py-2">{locacion.sitio_web}</td>
              <td className="border px-4 py-2">{locacion.telefono}</td>
              <td className="border px-4 py-2">{locacion.email}</td>
              <td className="border px-4 py-2">{locacion.imagen_perfil}</td>
              <td className="border px-4 py-2">{locacion.direccion_latitud}</td>
              <td className="border px-4 py-2">{locacion.direccion_longitud}</td>
              <td className="border px-4 py-2">{locacion.categoria_id}</td>
              <td className="border px-4 py-2">{locacion.creado_por}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleEditClick(locacion.id)}
                  className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteClick(locacion.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded-md"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchData;
