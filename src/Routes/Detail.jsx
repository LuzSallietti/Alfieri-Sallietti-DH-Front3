import React from "react";
import { useParams } from "react-router-dom";
import { useGetData } from '../hooks/useGetData';
import { endpoint } from "./Home";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  const routeParams = useParams();
  const {values} = useGetData(`${endpoint}/${routeParams.id}`);
  
  return (
    values && (
      <>
        <h1>Detail Dentist id </h1>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <div>
          <h3>{values.name}</h3>
          <p>{values.email}</p>
          <p>{values.phone}</p>
          <p>{values.website}</p>
        </div>
      </>
    )
  );
};

export default Detail;