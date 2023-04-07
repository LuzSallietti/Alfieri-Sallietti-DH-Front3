import React from "react";
import Typography from '@mui/material/Typography';
import { useReducer } from "react";
import HomeCardExample from "./HomeCardExample";
import { useGetData } from "../../hooks/useGetData";
import MUICard from "./MUICard";
import Grid from "@mui/material/Grid"
import Item from "@mui/material/Grid"



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
     <Typography gutterBottom variant="h4" component="div" margin="5vh 0" textAlign="center">
      Staff</Typography>
     <div className="card-grid" >
       {values && 
       <Grid container spacing={2} >
         {values.map((dentist) => (
          //return <HomeCardExample key={dentist.id}  //reemplazo el renderizado por una MUICard
           <Grid item xs={12} md={4} key={dentist.id}  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <MUICard          
           dentist={dentist}
           dispatch={dispatch}
           btnText={"AddFav"}
            />
            </Grid>
         ))}
         </Grid>
         }
     </div>
   </main>
 )    
};

export default Example;