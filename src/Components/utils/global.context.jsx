import { createContext, useState, useMemo } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);


/*Paso 3: Implementación del Contexto Global
Una vez que ya tenemos toda la estructura de nuestra aplicación podemos pasar a consumir la API realizando una llamada por fetch o axios.

Deberán guardar dicha información en un contexto global, junto con el theme de la app.
Utilizando useReducer crear los métodos necesarios para el manejo de su comportamiento (cambio de theme de la App y guardado de la respuesta de la API en el Contexto). */


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [globalContext, setGlobalContext] = useState(initialState);
  const handleTheme = () =>{
    //la funcion seteadora del tema (cambio de light a dark)
  }
  const handleData = () => {
    //la funcion seteadora de los datos provenientes de la API
  }

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};
