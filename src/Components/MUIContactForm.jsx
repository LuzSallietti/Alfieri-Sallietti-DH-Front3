import React, { useState, useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import {
  Card,
  CardContent,
  TextField,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
    <main style={{ backgroundColor: body, padding: "6vh 5vw" }}>
      <div>
        <Card
          style={{
            maxWidth: 380,
            margin: "auto",
            padding: "5px",
            textAlign: "center",
            backgroundColor: card,
            color: secondary_color,
          }}
        >
          <CardContent style={{ height: "75vh" }}>
            <Typography variant="h5">Contacta con nosotros!</Typography>
            <Typography
              variant="body2"
              component="p"
              color={secondary_color}
              marginBottom="5vh"
            >
              Completa tus datos y envía tu mensaje
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(props) => (
                <Form style={{ minHeight: 380, color: secondary_color }}>
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
                        fullWidth
                        required
                        inputProps={{ style: { color: secondary_color } }}
                        InputLabelProps={{ style: { color: secondary_color } }}
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
                        fullWidth
                        required
                        inputProps={{ style: { color: secondary_color } }}
                        InputLabelProps={{ style: { color: secondary_color } }}
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
                        fullWidth
                        required
                        autocomplete="off"
                        inputProps={{ style: { color: secondary_color } }}
                        InputLabelProps={{ style: { color: secondary_color } }}
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
                        fullWidth
                        required
                        autocomplete="off"
                        inputProps={{ style: { color: secondary_color } }}
                        InputLabelProps={{ style: { color: secondary_color } }}
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Field
                        as={TextField}
                        name="mensaje"
                        multiline
                        rows={4}
                        label="mensaje"
                        placeholder="Ingrese su mensaje"
                        variant="outlined"
                        fullWidth
                        required
                        autocomplete="off"
                        inputProps={{ style: { color: secondary_color } }}
                        InputLabelProps={{ style: { color: secondary_color } }}
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
          </CardContent>
        </Card>

        <div>
          <Snackbar
            open={isSubmitted}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            autoHideDuration={3000}
          >
            <Alert onClose={handleClose}>
              Gracias por tu mensaje {name}, nos comunicaremos contigo a la
              brevedad
            </Alert>
          </Snackbar>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
