import React, { useContext } from "react";
import { ContextGlobal } from "./global.context";
import Grid from "@mui/material/Grid";
import MUIFavCard from "./MUIFavCard";

const MUIFavs = () => {
  const { state } = useContext(ContextGlobal);

  //CAMBIAR LA LÓGICA PORQUE LO QUE VA A MAPEAR ES LO QUE TRAIGA de la propiedad data DEL CONTEXTO GLOBAL

  return (
    <>
      {
        <Grid container spacing={2} style={{ height: "78vh" }}>
          {state.data.lenght >= 1 ? (
            state.data.map((dentist) => (
              <Grid
                item
                xs={12}
                md={4}
                key={dentist.id}
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <MUIFavCard dentist={dentist} />
              </Grid>
            ))
          ) : (
            <p>Añade favoritos a tu lista</p>
          )}
          {/*un componente MUIacá que sirva para el mensaje*/}
        </Grid>
      }
    </>
  );
};

export default MUIFavs;
