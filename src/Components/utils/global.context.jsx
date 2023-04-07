import { createContext, useState, useMemo, useReducer } from "react";
import { removeFromStorage, addInStorage } from './helpers'


export const ContextGlobal = createContext({});

const handleDispatch = (state, { type, payload }) => {
  switch (type) {
      case "LOGGIN":
          sessionStorage.setItem("token", JSON.stringify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"));
          return {
              ...state,
              isLogged: true,
              user: payload
          }
      case "LOGOUT":
          localStorage.clear();
          sessionStorage.clear();
          return {
              ...state,
              isLogged: false,
              user: null
          }
      case "FAVS":
          //AQUÍ VA LA LÓGICA PARA VERIFICAR SI EL ELEMENTO YA SE ENCUENTRA
          const doesExist = state.data.some(dentist => dentist.id === payload.id);
          doesExist ? removeFromStorage(state, payload) : addInStorage(state, payload);
          return doesExist ? {
              ...state,
              data: removeFromStorage(state, payload)
          } : {
              ...state,
              data: addInStorage(state, payload)
          }
      default:
          return state;
  }
}

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

const initialState = {
    isLogged: !!sessionStorage.getItem("token"),    
    data: JSON.parse(localStorage.getItem("favorites")) ?? [],
    theme: "light" //falta esta implementacion
};
const [state, dispatch] = useReducer(handleDispatch, initialState);

const contextProperties = { state, dispatch }

  return (
    <ContextGlobal.Provider value={contextProperties}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;