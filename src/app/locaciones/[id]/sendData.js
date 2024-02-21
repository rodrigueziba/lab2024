// FetchData.js
"use client"
// SendData.js
// SendData.js
import React, { useState } from "react";

const SendData = () => {
  const [newLocacion, setNewLocacion] = useState({
    nombre: "",
    descripcion: "",
    ciudad: "",
    jurisdiccion: "",
    direccion: "",
    instagram: "",
    facebook: "",
    sitio_web: "",
    telefono: "",
    email: "",
    imagen_perfil: "",
    direccion_latitud: "",
    direccion_longitud: "",
    categoria_id: "",
    creado_por: "",
  });
  const JurisdiccionEnum = {
    Privado: "privado",
    Estatal: "estatal",
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLocacion((prevLocacion) => ({
      ...prevLocacion,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/locaciones", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLocacion),
    })
      .then(response => response.json())
      .then(addedLocacion => {
        // Handle the response as needed
        console.log("Locación agregada:", addedLocacion);
        // Clear the form fields
        setNewLocacion({
          nombre: "",
          descripcion: "",
          ciudad: "",
          jurisdiccion: "",
          direccion: "",
          instagram: "",
          facebook: "",
          sitio_web: "",
          telefono: "",
          email: "",
          imagen_perfil: "",
          direccion_latitud: "",
          direccion_longitud: "",
          categoria_id: "",
          creado_por: "",
        });
      })
      .catch(error => console.error("Error creating locacion:", error));
  };

  return (
    <div className="container mx-auto mt-4 p-4 bg-gray-100 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Formulario de Locación</h1>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-1" htmlFor="nombre">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={newLocacion.nombre}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1" htmlFor="descripcion">
            Descripción:
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={newLocacion.descripcion}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1" htmlFor="ciudad">
            Ciudad:
          </label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            value={newLocacion.ciudad}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <div className="flex flex-col">
  <label className="mb-1" htmlFor="jurisdiccion">
    Jurisdicción:
  </label>
  <select
    id="jurisdiccion"
    name="jurisdiccion"
    value={newLocacion.jurisdiccion}
    onChange={handleInputChange}
    className="border p-2"
  >
    <option value={JurisdiccionEnum.Privado}>Privado</option>
    <option value={JurisdiccionEnum.Estatal}>Estatal</option>
  </select>
</div>

        <div className="flex flex-col">
          <label className="mb-1" htmlFor="direccion">
            Dirección:
          </label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={newLocacion.direccion}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1" htmlFor="instagram">
            Instagram:
          </label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={newLocacion.instagram}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1" htmlFor="facebook">
            Facebook:
          </label>
          <input
            type="text"
            id="facebook"
            name="facebook"
            value={newLocacion.facebook}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1" htmlFor="sitio_web">
            Sitio Web:
          </label>
          <input
            type="text"
            id="sitio_web"
            name="sitio_web"
            value={newLocacion.sitio_web}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1" htmlFor="telefono">
            Teléfono:
          </label>
          <input
            type="number"
            id="telefono"
            name="telefono"
            value={newLocacion.telefono}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1" htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={newLocacion.email}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1" htmlFor="imagen_perfil">
            Imagen Perfil:
          </label>
          <input
            type="number"
            id="imagen_perfil"
            name="imagen_perfil"
            value={newLocacion.imagen_perfil}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1" htmlFor="direccion_latitud">
            Latitud de la Dirección:
          </label>
          <input
            type="number"
            id="direccion_latitud"
            name="direccion_latitud"
            value={newLocacion.direccion_latitud}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1" htmlFor="direccion_longitud">
            Longitud de la Dirección:
          </label>
          <input
            type="number"
            id="direccion_longitud"
            name="direccion_longitud"
            value={newLocacion.direccion_longitud}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1" htmlFor="categoria_id">
            ID de Categoría:
          </label>
          <input
            type="number"
            id="categoria_id"
            name="categoria_id"
            value={newLocacion.categoria_id}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1" htmlFor="creado_por">
            Creado por:
          </label>
          <input
            type="number"
            id="creado_por"
            name="creado_por"
            value={newLocacion.creado_por}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Agregar Locación
        </button>
      </form>
    </div>
  );
};

export default SendData;

