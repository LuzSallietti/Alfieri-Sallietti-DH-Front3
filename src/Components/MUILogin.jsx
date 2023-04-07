import React, { useState } from "react";
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
import Stack from "@mui/material/Stack";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const MUILogin = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, props) => {
    console.log(values.nombre);
    setName(values.nombre);
    props.resetForm();
    setIsSubmitted(true);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Ingrese un email válido").required("requerido"),
    password: Yup.string().min(8, "8 o más caracteres").required("requerido"),
  });
  return (
    <div>
      {!isSubmitted && (
        <Card
          style={{
            maxWidth: 450,
            margin: "0 auto",
            padding: "20px 5px",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
            <Typography
              variant="body2"
              component="p"
              gutterBottom
              color="textSecondary"
            >
              Ingresa tus datos
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(props) => (
                <Form style={{ minHeight: 250 }}>
                  <Grid container spacing={1}>
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
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Field
                        as={TextField}
                        name="password"
                        helperText={<ErrorMessage name="password" />}
                        error={props.errors.password && props.touched.password}
                        type="password"
                        label="password"
                        placeholder="Ingrese su password"
                        variant="outlined"
                        fullWidth
                        required
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
      )}
    </div>
  );
};

export default MUILogin;
