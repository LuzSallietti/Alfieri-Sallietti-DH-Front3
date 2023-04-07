import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";

//imports del componente Card
import doctor from "../../img/doctor.jpg";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

export default function MUICard({ dentist }) {
  //esto de abajo debe manejarse en el estado GLOBAL
  const [editClicked, setEditClicked] = useState(false);

  //lógica del icono FAV
  const handleEditClick = (event) => {
    event.stopPropagation();
    setEditClicked(!editClicked);
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
              onClick={handleEditClick}
              className="favButton"
            >
              <FavoriteIcon sx={{ color: editClicked ? "red" : "inherit" }} />
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
