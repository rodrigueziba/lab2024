// FetchData.js
"use client"
// FetchData.js
import React, { useState, useEffect } from "react";

const SendData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    rol: "",
  });

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(json => setUsers(json))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(addedUser => {
        // Update the users state with the new user
        setUsers((prevUsers) => [...prevUsers, addedUser]);
        // Clear the form fields
        setNewUser({
          nombre: "",
          apellido: "",
          email: "",
          password: "",
          rol: "",
        });
      })
      .catch(error => console.error("Error creating user:", error));
  };

  return (
    <div className="container mx-auto mt-4 p-4 bg-gray-100 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Formulario de Usuario</h1>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-1" htmlFor="nombre">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={newUser.nombre}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1" htmlFor="apellido">
            Apellido:
          </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={newUser.apellido}
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
            value={newUser.email}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={newUser.password}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1" htmlFor="rol">
            Rol:
          </label>
          <input
            type="text"
            id="rol"
            name="rol"
            value={newUser.rol}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Agregar Usuario
        </button>
      </form>
    </div>
  );
};

export default SendData;
