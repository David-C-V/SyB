import "../App.css";

import React, { useState } from 'react';

const Citas = () => {
  const [cita, setCita] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCita((prevCita) => ({
      ...prevCita,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para manejar la cita, por ejemplo, enviarla a un servidor.
    console.log('Cita agendada:', cita);
    // También puedes reiniciar el estado del formulario después de procesar la cita.
    setCita({
      nombre: '',
      email: '',
      telefono: '',
      fecha: '',
      hora: '',
    });
  };

  return (
    <div>
      <h1>Agendar Cita</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={cita.nombre}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Correo Electrónico:
          <input
            type="email"
            name="email"
            value={cita.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Teléfono:
          <input
            type="tel"
            name="telefono"
            value={cita.telefono}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Fecha:
          <input
            type="date"
            name="fecha"
            value={cita.fecha}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Hora:
          <input
            type="time"
            name="hora"
            value={cita.hora}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Agendar Cita</button>
      </form>
    </div>
  );
};

export default Citas;