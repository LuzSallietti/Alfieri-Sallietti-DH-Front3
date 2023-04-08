import React, { useContext } from "react";
import { ContextGlobal } from "./global.context";
import Grid from "@mui/material/Grid";
import MUICard from "./MUICard";

const MUIFavs = () => {
  const { state } = useContext(ContextGlobal);
  const hasFavorites = state.data.length > 0;

  return (
    <>
      {
        <Grid container spacing={2} style={{ height: "78vh" }}>
          {hasFavorites ? (
            state.data.map((dentist) => (
              <Grid
                item
                xs={12}
                md={4}
                key={dentist.id}
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <MUICard dentist={dentist} />
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