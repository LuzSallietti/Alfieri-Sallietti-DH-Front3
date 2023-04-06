import React from "react";
import { useNavigate } from "react-router-dom";
import doctor from '../img/doctor.jpg'

const Card = ({ name, username, id }) => {
  const navigate = useNavigate();
 

  const showDetails = (event) => {
    event.preventDefault();
    navigate(`/dentist/${id}`);
  };

  const addFav = (event, newFav) => {
    // Aqui iria la logica para agregar la Card en el localStorage
    
    event.stopPropagation();

    const favs = JSON.parse(sessionStorage.getItem("favs"));
    if (favs) {
      console.log(favs)   //borrar!   
      favs.push(newFav);      
      sessionStorage.setItem("favs", JSON.stringify(favs));
    } else {
      sessionStorage.setItem("favs", JSON.stringify([newFav]));
    }
  };

  return (
    <div className="card" onClick={showDetails}>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* En cada card deberan mostrar en name - username y el id */}
      <div>
        <img src={doctor} alt={name} style={{width:"100%", height:"100%"}}></img>
      </div>
      <h3>{name}</h3>
      <p>{username}</p>
      <p>{id}</p>            
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button
        onClick={(event) => {
          event.stopPropagation();
          addFav(event, { id, name, username });
        }}
        className="favButton"
      >
        Add fav
      </button>
    </div>
  );
};

export default Card;