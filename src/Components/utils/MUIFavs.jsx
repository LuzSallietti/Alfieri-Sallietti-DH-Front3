import React from "react";
import { useReducer } from "react";
import { initialState, reducer } from "./Example";
import MUIDetailsCard from "./MUIFavCard";
import Grid from "@mui/material/Grid"
import MUIFavCard from "./MUIFavCard";

const MUIFavs = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { favorites } = state;

  return (
    <>
    <Grid container spacing={2}
    style={{height:"78vh"}}>
      {favorites.map((dentist) => (   
        <Grid item xs={12} md={4} key={dentist.id} style={{ display:"flex", justifyContent:"space-around"}}>
        <MUIFavCard          
          dentist={dentist}
          dispatch={dispatch}
          btnText={"Remove Fav"}
        />
       </Grid> 
      ))}
      </Grid>
      </>
    
  );
};

export default MUIFavs;
