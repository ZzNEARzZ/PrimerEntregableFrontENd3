import { cardContainer } from "../styles/Card.module.css";

const Card = ({nombre, correo}) => {
  return (
    <div className={cardContainer}>    
    <h2>Gracias Usuario {nombre}</h2>
    <br />
    <h2>Revise su correo {correo} para confirmar su subscripcion</h2>    
    <button >Cerrar 🛒</button>
  </div>
  )
}

export default Card