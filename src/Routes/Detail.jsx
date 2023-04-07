import React from "react";
import { useParams } from "react-router-dom";
import { useGetData } from '../hooks/useGetData';
import { endpoint } from "./Home";

//MUI imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import doctor from "../img/doctor.jpg";




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  const routeParams = useParams();
  const {values} = useGetData(`${endpoint}/${routeParams.id}`);
  
  return (
    values && (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={doctor}
        title="doctor"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {values.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {values.email}
          <br/>
          {values.phone}
          <br/>
          {values.address.street}. {values.address.suite}
          <br/>
          {values.address.city}
        </Typography>
      </CardContent>
      <CardActions>
       
        
      </CardActions>
    </Card>
    </Box>
    )
  );
};

export default Detail;

/*
<>
        <h1>Detail Dentist id </h1>*/
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
  /*      <div>
          <h3>{values.name}</h3>
          <p>{values.email}</p>
          <p>{values.phone}</p>
          <p>{values.website}</p>
        </div>
      </>
*/