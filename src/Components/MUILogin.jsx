import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {ContextGlobal} from "./utils/global.context";
import {
  Card,
  CardContent,
  TextField,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const MUILogin = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  

  //revisar esto con Néstor!
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { dispatch } = useContext(ContextGlobal);

  const onSubmit = (values, props) => {
    
    console.log(values.email);
    console.log(values.password);
    if (values.email && values.password) {
      //dispatch({ type: "LOGGIN", payload: values.email });
    }
    console.log(dispatch)
    props.resetForm(); //no sería necesario?
    setIsSubmitted(true); ///borrar
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
              initialValues={values}
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
