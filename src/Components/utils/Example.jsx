import React from "react";
import { useReducer } from "react";
import HomeCardExample from "./HomeCardExample";
import { useGetData } from "../../hooks/useGetData";
export const endpoint = "https://jsonplaceholder.typicode.com/users";

//Este estado inicial (su propiedad favorites) lo podemos combinar con el initialState del contexto global??

export const initialState = {
  favorites: JSON.parse(localStorage.getItem("favs")) || [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_FAV":
      const newFav = action.payload;
      const newFavs = [...state.favorites, newFav];
      localStorage.setItem("favs", JSON.stringify(newFavs));
      return { ...state, favorites: newFavs };
    case "REMOVE_FAV":
      const idFav = action.payload;
      const otherFavs = state.favorites.filter(
        (favorite) => favorite.id !== idFav
      );
      localStorage.setItem("favs", JSON.stringify(otherFavs));
      return { ...state, favorites: otherFavs };
    default:
      return state;
  }
}


const Example = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {values} = useGetData(endpoint);
 
    /*!!!-->EN EL HOME NO MAPEARÉ los favorites sino la data de la API!*/
 
 return (
   <main className="">
     <h1>Home</h1>
     <div className="card-grid">
       {values &&
         values.map((dentist) => {
           return <HomeCardExample key={dentist.id}
           dentist={dentist}
           dispatch={dispatch}
           btnText={"AddFav"}
            />;
         })}
     </div>
   </main>
 )    
};

export default Example;