import React from "react";
import { useReducer } from "react";
import { initialState, reducer } from "./Example";
import MUIDetailsCard from "./MUIDetailsCard";
import Grid from "@mui/material/Grid"
const MUIFavs = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { favorites } = state;

  return (
    <>
    <Grid container spacing={2}>
      {favorites.map((dentist) => (        
        <Grid item xs={4}>
        <MUIDetailsCard
          key={dentist.id}
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
