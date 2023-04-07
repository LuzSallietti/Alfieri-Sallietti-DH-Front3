import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import doctor from "../../img/doctor.jpg";
import { Tooltip } from "@mui/material"
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";



export default function MUIFavCard({dentist, dispatch, btnText}) {
  
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
  //esto de abajo debe manejarse en el estado GLOBAL
  const [editClicked, setEditClicked] = React.useState(false);


  
  const handleEditClick = (event) => {
    event.stopPropagation();
    setEditClicked(!editClicked);
    btnText === "AddFav" ? addFav(event, dentist, dispatch) : removeFav(event, dentist, dispatch);
    //editClicked ? addFav(event,dentist, dispatch) : removeFav(event,dentist,dispatch);
  };
 

  
  return (
    <Card sx={{ width: 250, height: 400,  }}>
      <CardMedia
        sx={{ height: 140 }}
        image={doctor}
        title="doctor"
      />
      
      <CardContent >
        <Typography gutterBottom variant="h6" component="div" sx={{textAlign:"left", padding:"15px 0",margin:"0", width:"100%"}}>
          {dentist.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{paddingBottom:"5px"}}>
          {dentist.email}
          <br/>
          <Typography variant="body2" color="text.secondary" sx={{paddingBottom:"5px"}}></Typography>
          {dentist.phone}
          <br/>
          <Typography variant="body2" color="text.secondary" sx={{paddingBottom:"5px"}}></Typography>
          {dentist.address.street}.{dentist.address.suite}
          <br/>
          <Typography variant="body2" color="text.secondary" sx={{paddingBottom:"5px"}}></Typography>
          {dentist.address.city}
        </Typography>
      </CardContent>
      <CardActions>
      <Tooltip title="remove fav">
        <IconButton
          aria-label="add to favorites"
          onClick={handleEditClick}
          className="favButton"
        >
          <FavoriteIcon 
          sx={{ color: editClicked ? "red" : "inherit" }} />
        </IconButton>
        </Tooltip>
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