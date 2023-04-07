import React from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import { endpoint } from "../../Routes/Home";

//MUI imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import doctor from "../../img/doctor.jpg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MUILoading from "./MUILoading";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const MUIDetail = () => {
  const navigate = useNavigate();
  const routeParams = useParams();
  const { values } = useGetData(`${endpoint}/${routeParams.id}`);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    values ? setIsLoading(false) : setIsLoading(true);
  });
  const handleVolver = () => {
    navigate(-1);
  };

  return (
    <>
    {isLoading ? <MUILoading /> : null}
      {values && (
        <>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flexStart"
            alignItems="center"
            height="75vh"
          >
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              margin="5vh 0"
            >
              Contacto:
            </Typography>
            <Card sx={{ width: 250 }}>
              <CardMedia sx={{ height: 200 }} image={doctor} title="doctor" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {values.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
                <Button size="small" onClick={handleVolver}>
                  Volver
                </Button>
              </CardActions>
            </Card>
          </Box>
        </>
      )}
    </>
  );
};

export default MUIDetail;
