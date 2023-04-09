import { useContext } from "react";
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
import { blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Tooltip } from "@mui/material";

export default function MUICard({ dentist }) {
  const { state, dispatch } = useContext(ContextGlobal);
  const { secondary_color, card } = state.theme;
  const isFavorite = state.data.some((element) => element.id === dentist.id);

  //lógica del icono FAV
  const handleEditClick = (e, item) => {
    e.stopPropagation();
    dispatch({ type: "FAVS", payload: item });
  };

  //navegar a vista de detalle
  const navigate = useNavigate();
  const showDetails = () => {
    navigate(`/dentist/${dentist.id}`);
  };

  return (
    <Card
      sx={{
        width: 350,
        height: 350,
        margin: "1vh 0",
        cursor: "pointer",
        backgroundColor: card,
      }}
      onClick={showDetails}
    >
      <CardHeader
        style={{ width: "100%" }}
        avatar={
          <Avatar sx={{ bgcolor: blue[900] }} aria-label="recipe">
            {dentist.name.charAt(0)}
          </Avatar>
        }
        action={
          <Tooltip
            title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          >
            <IconButton
              aria-label="add to favorites"
              onClick={(e) => handleEditClick(e, dentist)}
            >
              <FavoriteIcon
                sx={{ color: isFavorite ? "#ef5350" : "#9e9e9e" }}
              />
            </IconButton>
          </Tooltip>
        }
        title={"Dr. " + dentist.name}
        titleTypographyProps={{ color: secondary_color }}
        subheader={dentist.address.city}
        subheaderTypographyProps={{ color: secondary_color }}
      />
      <Tooltip title="Ver detalle">
        <CardMedia component="img" height="194" image={doctor} alt="doctor" />
      </Tooltip>
      <CardContent style={{ width: "100%", color: secondary_color }}>
        <Typography variant="body2">{dentist.company.catchPhrase}</Typography>
      </CardContent>
    </Card>
  );
}
