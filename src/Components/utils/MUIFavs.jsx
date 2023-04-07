import React from "react";
import { useReducer } from "react";
import Grid from "@mui/material/Grid"
import MUIFavCard from "./MUIFavCard";

const MUIFavs = () => {
  
  //CAMBIAR LA LÓGICA PORQUE LO QUE VA A MAPEAR ES LO QUE TRAIGA de la propiedad data DEL CONTEXTO GLOBAL

  return (
    <>
    {/*<Grid container spacing={2}
    style={{height:"78vh"}}>
      {favorites.map((dentist) => (   
        <Grid item xs={12} md={4} key={dentist.id} style={{ display:"flex", justifyContent:"space-around"}}>
        <MUIFavCard          
          dentist={dentist}          
        />
       </Grid> 
      ))}
      </Grid>*/
}
      </>
    
  );
};

export default MUIFavs;
