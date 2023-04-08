import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextGlobal } from "./global.context";
import doctor from "../../img/doctor.jpg";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Tooltip } from "@mui/material";

export default function MUICard({ dentist }) {
  //esto de abajo debe manejarse en el estado GLOBAL
  const { state, dispatch } = useContext(ContextGlobal);
  const isFavorite = state.data.some(element => element.id === dentist.id);

  //lógica del icono FAV
  const handleEditClick = (e,item) => {
    e.stopPropagation()
    dispatch({ type: "FAVS", payload: item })
  };

  //Logica de agregar y retirar de favoritos
  const navigate = useNavigate();

  const showDetails = () => {
    navigate(`/dentist/${dentist.id}`);
  };

  return (
    <Card
      sx={{ width: 350, height: "60vh", margin: "0" }}
      className="card"
      onClick={showDetails}
    >
      <CardHeader
        style={{ width: "100%" }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {dentist.name.charAt(0)}
          </Avatar>
        }
        action={
          <Tooltip title="Add to favorites">
            <IconButton
              aria-label="add to favorites"
              onClick={(e)=> handleEditClick(e,dentist)}
              className="favButton"
            >
              <FavoriteIcon sx={{ color: isFavorite ? "red" : "inherit" }} />
            </IconButton>
          </Tooltip>
        }
        title={"Dr. " + dentist.name}
        subheader={dentist.address.city}
      />

      <CardMedia component="img" height="194" image={doctor} alt="doctor" />
      <CardContent style={{ width: "100%" }}>
        <Typography variant="body2" color="text.secondary">
          {dentist.company.catchPhrase}
        </Typography>
      </CardContent>
    </Card>
  );
}
