import { createContext, useReducer } from "react";
import { removeFromStorage, addInStorage } from "./helpers";
import { themes } from "./themes";

export const ContextGlobal = createContext({});

const handleDispatch = (state, { type, payload }) => {
  switch (type) {
    case "LOGGIN":
      sessionStorage.setItem(
        "token",
        JSON.stringify(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        )
      );
      return {
        ...state,
        isLogged: true,
        user: payload,
      };
    case "LOGOUT":
      localStorage.clear();
      sessionStorage.clear();
      return {
        ...state,
        isLogged: false,
        user: null,
      };
    case "FAVS":
      const doesExist = state.data.some((dentist) => dentist.id === payload.id);
      doesExist
        ? removeFromStorage(state, payload)
        : addInStorage(state, payload);
      return doesExist
        ? {
            ...state,
            data: removeFromStorage(state, payload),
          }
        : {
            ...state,
            data: addInStorage(state, payload),
          };
    case "THEME":
      return {
        ...state,
        theme: state.theme === themes.light ? themes.dark : themes.light,
      };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const initialState = {
    isLogged: !!sessionStorage.getItem("token"),
    data: JSON.parse(localStorage.getItem("favorites")) ?? [],
    theme: themes.light,
  };
  const [state, dispatch] = useReducer(handleDispatch, initialState);

  const contextProperties = { state, dispatch };

  return (
    <ContextGlobal.Provider value={contextProperties}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
