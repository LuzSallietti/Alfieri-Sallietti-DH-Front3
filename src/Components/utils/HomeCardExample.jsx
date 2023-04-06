import React from "react";
import { useNavigate } from "react-router-dom";
import doctor from "../../img/doctor.jpg";



const HomeCardExample = ({ dentist, dispatch, btnText }) => {
  const navigate = useNavigate();

  const showDetails = (event) => {
    event.preventDefault();
    navigate(`/dentist/${dentist.id}`);
  };

  const addFav = (event, dentist, dispatch) => {
    // Aqui iria la logica para agregar la Card en el localStorage

    event.stopPropagation();
    console.log("pasé por AddFav")
    dispatch({ type: "ADD_FAV", payload: dentist })
    

  }

  const removeFav = (event, dentist, dispatch) => {
    event.stopPropagation();
    console.log("pasé por RemoveFav")
    dispatch({ type: "REMOVE_FAV", payload: dentist.id })
  }

  return (
    <div className="card" onClick={showDetails}>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* En cada card deberan mostrar en name - username y el id */}
      <div>
        <img
          src={doctor}
          alt={dentist.name}
          style={{ width: "100%", height: "100%" }}
        ></img>
      </div>
      <h3>{dentist.name}</h3>
      <p>{dentist.username}</p>
      <p>{dentist.id}</p>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {/*<button onClick={() => dispatch({ type: "ADD_DESTACADO", payload: dentist })}>
  Destacar
</button>;*/}
      <button
        onClick={(event) => {
          event.stopPropagation();
          btnText === "AddFav" ? addFav(event,dentist, dispatch) : removeFav(event,dentist,dispatch);
        }}
        className="favButton"
      >
        {btnText}
      </button>
    </div>
  );
};


export default HomeCardExample;