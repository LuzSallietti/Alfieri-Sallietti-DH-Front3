import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import doctor from "../../img/doctor.jpg";

export default function MediaCard({dentist, dispatch, btnText}) {
  
  //logica de add y remove fav replicada
  
  const addFav = (event, dentist, dispatch) => {
    // Aqui iria la logica para agregar la Card en el localStorage
    event.stopPropagation();
    console.log("pasé por AddFav")
    dispatch({ type: "ADD_FAV", payload: dentist })
    

  }

  const removeFav = (event, dentist, dispatch) => {
    event.stopPropagation();
    console.log("pasé por RemoveFav")
    dispatch({ type: "REMOVE_FAV", payload: dentist.id })
  }
  
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={doctor}
        title="doctor"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {dentist.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {dentist.email}
          <br/>
          {dentist.phone}
          <br/>
          {dentist.address.street}. {dentist.address.suite}
          <br/>
          {dentist.address.city}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"
         onClick={(event) => {
          event.stopPropagation();
          btnText === "AddFav" ? addFav(event,dentist, dispatch) : removeFav(event,dentist,dispatch);
        }}
        className="favButton"
      >
        {btnText}
       </Button>
        
      </CardActions>
    </Card>
  );
}