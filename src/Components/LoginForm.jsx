import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import {
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const { dispatch } = useContext(ContextGlobal);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Ingrese un email válido").required("requerido"),
    password: Yup.string().min(8, "Mínimo 8 caracteres").required("requerido"),
  });
  return (
    <>
      <Card
        style={{
          width: 380,
          height: "60vh",
          margin: "0 auto",
          padding: "20px 5px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <Typography
            variant="body2"
            component="p"
            color="textSecondary"
            gutterBottom
          >
            Ingresa tus datos
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              dispatch({ type: "LOGGIN", payload: values.email });
              navigate("/home");
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form style={{ height: "30vh" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <Field
                    as={TextField}
                    name="email"
                    size="small"
                    type="text"
                    label="E-mail"
                    placeholder="Ingrese su e-mail"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    style={{ color: "red", textAlign: "right" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <Field
                    as={TextField}
                    name="password"
                    size="small"
                    type="password"
                    label="Password"
                    placeholder="Ingrese su contraseña"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    style={{ color: "red", textAlign: "right" }}
                  />
                </div>
                <Button
                  type="submit"
                  size="small"
                  variant="contained"
                  disabled={isSubmitting}
                >
                  Ingresar
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </>
  );
};

export default LoginForm;
