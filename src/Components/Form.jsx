import { useState } from "react";

import Card from "./Card";

const Form = () => {

    const [user, setUser] = useState({
        nombre: "",
        correo: "",
    });
    const [exito, setExito] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const nombreApellido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+( [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/;
        
        
        if (
          user.nombre.trim().length >= 3 &&
          user.correo.trim().length>=6 &&
          nombreApellido.test(user.nombre) 
          
        ) {
          setExito(true);
        } else {
          setError(true);
        }
      };

  return (
    <div>
        {exito ? (
            <>
            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input
                    value={user.nombre}
                    type="text"
                    onChange={(e) => setUser({ ...user, nombre: e.target.value })}
                />
                <br />
                <label>Correo:</label>
                <input
                    value={user.correo}
                    type="text"
                    onChange={(e) => setUser({ ...user, correo: e.target.value })}
                />
                <br />
                <button>Enviar</button>  
                        
            </form>              
            <Card nombre={user.nombre} correo={user.correo}/>  
            
            </>
                     
                      
        //<Mensaje nombre={user.nombre} correo={user.correo} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            value={user.nombre}
            type="text"
            onChange={(e) => setUser({ ...user, nombre: e.target.value })}
          />
          <br />
          <label>Correo:</label>
          <input
            value={user.correo}
            type="text"
            onChange={(e) => setUser({ ...user, correo: e.target.value })}
          />
          <br />
          <button>Enviar</button>

          {error && (
            <h4 style={{ color: "red" }}>
              Por favor, coloque la información correctamente
            </h4>
          )}
        </form>
      )}
    </div>
  )
}

export default Form