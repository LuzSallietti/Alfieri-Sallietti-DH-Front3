import React, { useContext } from "react";
import { ContextGlobal } from "./global.context";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MUICard from "./MUICard";
import MUIFavsMsg from "./MUIFavsMsg";

const MUIFavs = () => {
  const { state } = useContext(ContextGlobal);
  const { body, secondary_color } = state.theme;
  const hasFavorites = state.data.length > 0;

  return (
    <main
      style={{
        backgroundColor: body,
        
        color: secondary_color,
        minHeight: "75vh",
      }}
    >
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        padding="6vh 0"
        textAlign="center"
      >
        Favoritos
      </Typography>
      <Grid container spacing={2}>
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
          <Grid
            item
            xs={12}
            md={12}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <MUIFavsMsg />
          </Grid>
        )}
      </Grid>
    </main>
  );
};

export default MUIFavs;
