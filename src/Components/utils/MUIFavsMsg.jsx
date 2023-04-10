import React, { useContext } from "react";
import { ContextGlobal } from "./global.context";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import FavImg from "../../img/CardFavsImg.png";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

const MUIFavsMsg = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { color, secondary_color, card } = state.theme;

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
              marginTop:"30px",
              borderStyle:"solid",
              borderColor:color,
              borderRadius:"8px"
            
            }}
          />
        </Grid>
      </Grid>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end", margin:"0" }}>
        <Link key="home" style={{ color: color }} to="/home">
          <Button size="small">Volver</Button>
        </Link>
      </CardActions>
    </Card>
  );
};


export default MUIFavsMsg;
