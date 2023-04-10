import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { useGetData } from "../hooks/useGetData";
import ProfileCard from "../Components/ProfileCard";
import Loading from "../Components/Loading";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const endpoint = "https://jsonplaceholder.typicode.com/users";

const Home = () => {
  const { values } = useGetData(endpoint);
  const { state } = useContext(ContextGlobal);
  const { body, secondary_color } = state.theme;

  return (
    <main
      style={{
        backgroundColor: body,
        padding: "6vh 5vw",
        color: secondary_color,
      }}
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
                    <ProfileCard dentist={dentist} />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default Home;
