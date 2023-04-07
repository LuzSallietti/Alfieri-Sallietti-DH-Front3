import React from "react";
import { useGetData } from "../../hooks/useGetData";
import Typography from "@mui/material/Typography";
import MUICard from "./MUICard";
import Grid from "@mui/material/Grid";
import MUILoading from "./MUILoading";

export const endpoint = "https://jsonplaceholder.typicode.com/users";

const MUIExample = () => {
  const { values } = useGetData(endpoint);

  return (
    <main>
      {values ? (
        <>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            margin="5vh 0"
            textAlign="center"
          >
            Staff
          </Typography>
          <div className="card-grid">
            <Grid container spacing={2}>
              {values?.map((dentist) => {
                return (
                  <Grid
                    item
                    xs={12}
                    md={4}
                    key={dentist.id}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <MUICard
                      dentist={dentist}                      
                    />
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