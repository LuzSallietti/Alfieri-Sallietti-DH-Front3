import React, { useState, useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import {
  Card,
  CardMedia,
  TextField,
  Grid,
  Button,
  Typography,
} from "@mui/material";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import contact from "../img/contact.jpg";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const { state } = useContext(ContextGlobal);
  const { body, secondary_color, card } = state.theme;

  const initialValues = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  };

  const onSubmit = (values, props) => {
    setName(values.nombre);
    props.resetForm();
    setIsSubmitted(true);
  };
  function handleClose() {
    setIsSubmitted(false);
  }
  const validationSchema = Yup.object().shape({
    nombre: Yup.string().min("3").required("completar"),
    apellido: Yup.string().min("3").required("completar"),
    email: Yup.string().email("Ingrese un email válido").required("completar"),
    telefono: Yup.number("ingrese un numero válido").required("completar"),
  });

  return (
    <main
      style={{
        minHeight: "95vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: body
      }}
    >
      <Grid
        className="Container"
        container
        spacing={2}
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: card,
          display: "flex",
          justifyContent: "space-around",
          width:"700px"
        }}
      >
        <Grid
        className="izquierdo"
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <Typography variant="h5" gutterBottom color={secondary_color} sx={{}}>
            Contactanos!
          </Typography>
          <CardMedia
            component="img"
            alt="card images"
            image={contact}
            style={{ width: 300, height: "auto", borderRadius: "8px", marginBottom:"5px"}}
            
          />
          <Typography variant="body2" component="p" color={secondary_color} >
            Envíanos tu mensaje
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}
        className="derecho">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form style={{ height: 380, color: secondary_color }}>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <Field
                      as={TextField}
                      name="nombre"
                      helperText={<ErrorMessage name="nombre" />}
                      error={props.errors.nombre && props.touched.nombre}
                      type="text"
                      label="nombre"
                      placeholder="Ingrese su nombre"
                      variant="outlined"
                      aria-label="nombre"
                      fullWidth
                      required
                      inputProps={{ style: { color: secondary_color, backgroundColor:body } }}
                      InputLabelProps={{
                        style: { color: secondary_color},
                      }}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <Field
                      as={TextField}
                      name="apellido"
                      helperText={<ErrorMessage name="apellido" />}
                      error={props.errors.apellido && props.touched.apellido}
                      label="apellido"
                      placeholder="Ingrese su apellido"
                      variant="outlined"
                      aria-label="apellido"
                      fullWidth
                      required
                      inputProps={{ style: { color: secondary_color , backgroundColor:body} }}
                      InputLabelProps={{
                        style: { color: secondary_color },
                      }}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Field
                      as={TextField}
                      name="email"
                      helperText={<ErrorMessage name="email" />}
                      error={props.errors.email && props.touched.email}
                      type="email"
                      label="email"
                      placeholder="Ingrese su email"
                      variant="outlined"
                      aria-label="email"
                      fullWidth
                      required                      
                      inputProps={{ style: { color: secondary_color , backgroundColor:body} }}
                      InputLabelProps={{
                        style: { color: secondary_color },
                      }}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Field
                      as={TextField}
                      name="telefono"
                      helperText={<ErrorMessage name="telefono" />}
                      error={props.errors.telefono && props.touched.telefono}
                      type="number"
                      label="telefono"
                      placeholder="Ingrese su telefono"
                      variant="outlined"
                      aria-label="telefono"
                      fullWidth
                      required                      
                      inputProps={{ style: { color: secondary_color , backgroundColor:body} }}
                      InputLabelProps={{
                        style: { color: secondary_color },
                      }}
                    />
                  </Grid>
                  <Grid xs={12} item >
                    <Field
                    sx={{backgroundColor:body}}
                      as={TextField}
                      name="mensaje"
                      multiline
                      rows={4}
                      label="mensaje"
                      placeholder="Ingrese su mensaje"
                      variant="outlined"
                      aria-label="mensaje"
                      fullWidth
                      required                      
                      inputProps={{ style: { color: secondary_color} }}
                      InputLabelProps={{
                        style: { color: secondary_color },
                      }}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Enviar
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>

      <Snackbar
        open={isSubmitted}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={3000}
      >
        <Alert onClose={handleClose}>
          Gracias por tu mensaje {name}, nos comunicaremos contigo a la brevedad
        </Alert>
      </Snackbar>
    </main>
  );
};

export default ContactForm;
