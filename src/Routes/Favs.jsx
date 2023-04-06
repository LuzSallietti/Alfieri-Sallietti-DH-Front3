import React from "react";
import Card from "../Components/Card";
import { useState, useEffect } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favs, setFavs] = useState(null);
  const getFavs = () => {
    const data = JSON.parse(sessionStorage.getItem("favs"));
    if (data) {
      setFavs(data);
      console.log(data);
    }
  };
  useEffect(() => {
    getFavs();
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs &&
          favs.map((fav) => {
            return (
              <Card
                key={fav.id}
                id={fav.id}
                name={fav.name}
                username={fav.username}
              />
            );
          })}
        {/*REVISAR LA PERFORMANCE con los nuevos hooks--> se llama muchas veces con useEffect*/}
        {/*El botón ADD FAV de la Card original no sirve para este uso--> hacemos uno nuevo?*/}

        {/* OPCIONAL: eliminar un favorito */}
        {/* OPCIONAL: liberar/limpiar favoritos */}
      </div>
    </>
  );
};

export default Favs;