import React, { useContext } from "react";
import { ContextGlobal } from "./global.context";
import { useGetData } from "../../hooks/useGetData";
import Typography from "@mui/material/Typography";
import MUICard from "./MUICard";
import Grid from "@mui/material/Grid";
import MUILoading from "./MUILoading";

export const endpoint = "https://jsonplaceholder.typicode.com/users";

const MUIExample = () => {
  const { values } = useGetData(endpoint);
  const { state } = useContext(ContextGlobal);
  const { body, secondary_color } = state.theme;

  return (
    <main
      style={{ backgroundColor: body, padding: "6vh 5vw", color: secondary_color }}
    >
      {values ? (
        <>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            textAlign="center"
          >
            Staff
          </Typography>
          <div>
            <Grid container spacing={2}>
              {values?.map((dentist) => {
                return (
                  <Grid
                    key={dentist.id}
                    item
                    xs={12}
                    md={4}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <MUICard dentist={dentist} />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </>
      ) : (
        <MUILoading />
      )}
    </main>
  );
};

export default MUIExample;
