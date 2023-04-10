import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextGlobal } from "./global.context";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import FavImg from "../../img/CardFavsImg.png";
import Grid from "@mui/material/Grid";

const MUIFavsMsg = () => {
  const { state } = useContext(ContextGlobal);
  const { color, secondary_color, card } = state.theme;
  const navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 350, backgroundColor: card }}>
      <Grid container spacing={2} sx={{ padding: "20px 30px 0" }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
          }}
        >
          {/* Content for the left side */}
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: secondary_color }}
          >
            No hay favoritos...
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: secondary_color }}
          >
            Agrega algunos desde el listado anterior.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Content for the right side */}
          <CardMedia
            component="img"
            alt="card imagess"
            image={FavImg}
            sx={{
              width: 250,
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
              borderStyle: "solid",
              borderColor: color,
              borderRadius: "8px",
            }}
          />
        </Grid>
      </Grid>
      <CardActions
        sx={{ display: "flex", justifyContent: "flex-end", margin: "0" }}
      >
        <Button size="small" onClick={()=> navigate("/home") }>Volver</Button>
      </CardActions>
    </Card>
  );
};

export default MUIFavsMsg;
