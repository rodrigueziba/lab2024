"use client"
import React, { useState, useEffect } from "react";


const FetchData = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(json => setUsers(json))
      .finally(() => {
        setLoading(false)
      })
  }, []);

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Listado de Usuarios</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Apellido</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Rol</th>
            <th className="px-4 py-2">Creado</th>
            <th className="px-4 py-2">Actualizado</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.nombre}</td>
              <td className="border px-4 py-2">{user.apellido}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.rol}</td>
              <td className="border px-4 py-2">{user.created_at}</td>
              <td className="border px-4 py-2">{user.update_at}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchData;