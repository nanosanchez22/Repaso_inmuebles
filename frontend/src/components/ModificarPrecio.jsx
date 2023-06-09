import React, { useState } from "react";

function ModificarPrecio() {
  const [precio, setPrecio] = useState("");
  const [id, setId] = useState(0);

  const cambiarPrecio = async (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      precio_venta: precio,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        `http://localhost:3001/api/inmuebles/editar/${id}`,
        requestOptions
      );
      if (response.ok) {
        const resultado = await response.json();
        alert("El precio se modificó");
      } else {
        const resultado = await response.json();
        alert(error.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <form action="submit" onSubmit={cambiarPrecio}>
        <input
          type="number"
          placeholder="Ingrese el id de la propiedad que quiere cambiar"
          onChange={(e) => {
            setId(e.target.value);
          }}
          value={id}
        />
        <label htmlFor="">Modificar precio</label>
        <input
          type="text"
          placeholder="Ingrese un nuevo precio"
          onChange={(e) => {
            setPrecio(e.target.value);
          }}
          value={precio}
        />
        <button type="submit">Modificar</button>
      </form>
    </div>
  );
}

export default ModificarPrecio;
