import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProfileCard from "../Components/ProfileCard";
import FavsMsg from "../Components/FavsMsg";

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const { body, secondary_color } = state.theme;
  const hasFavorites = state.data.length > 0;

  return (
    <main
      style={{
        backgroundColor: body,
        color: secondary_color,
        minHeight: "95vh",
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
              <ProfileCard dentist={dentist} />
            </Grid>
          ))
        ) : (
          <Grid
            item
            xs={12}
            md={12}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <FavsMsg />
          </Grid>
        )}
      </Grid>
    </main>
  );
};

export default Favs;