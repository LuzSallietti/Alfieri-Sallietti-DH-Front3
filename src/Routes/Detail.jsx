import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { useParams, useNavigate } from "react-router-dom";
import { useGetData } from "../hooks/useGetData";
import { endpoint } from "./Home";
import doctor from "../img/doctor.jpg";
import Loading from "../Components/Loading";
//MUI imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Detail = () => {
  const routeParams = useParams();
  const { values } = useGetData(`${endpoint}/${routeParams.id}`);
  const { state } = useContext(ContextGlobal);
  const { body, card, secondary_color } = state.theme;
  const navigate = useNavigate();

  return (
    <main style={{ backgroundColor: body, padding: "6vh 0" }}>
      {values ? (
        <>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flexStart"
            alignItems="center"
            minHeight="95vh"
          >
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              marginBottom="6vh"
              color={secondary_color}
            >
              Contacto:
            </Typography>
            <Card sx={{ width: 250, backgroundColor: card }}>
              <CardMedia sx={{ height: 200 }} image={doctor} title="doctor" />
              <CardContent sx={{ color: secondary_color }}>
                <Typography gutterBottom variant="h5" component="div">
                  {values.name}
                </Typography>
                <Typography variant="body2" color={secondary_color}>
                  {values.email}
                  <br />
                  {values.phone}
                  <br />
                  {values.address.street}. {values.address.suite}
                  <br />
                  {values.address.city}
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Button size="small" onClick={() => navigate(-1)}>
                  Volver
                </Button>
              </CardActions>
            </Card>
          </Box>
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default Detail;
