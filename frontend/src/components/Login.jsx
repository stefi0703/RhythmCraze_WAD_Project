import React, { useState } from "react";
import { Container, Form, InputGroup, Button, Alert } from "react-bootstrap";
import Axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import CustomNavbar from "./CustomNavbar";
import styles from "./LoginForm.css";

function Login() {
  const [error, setError] = useState("");

  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        const response = await Axios.post(
          "http://localhost:8080/login",
          values
        );
        console.log(response.data);
        // Redirect to home page upon successful login
        // window.location.href = "/";
      } catch (error) {
        if (error.response.status === 401) {
          setError("Invalid credentials");
        } else {
          setError("An error occurred. Please try again later.");
        }
      }
    },
  });

  return (
    <>
      <CustomNavbar />
      <Container className={styles.formContainer}>
        <Form className={styles.formCard} onSubmit={formik.handleSubmit}>
          <h1>Login</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              isInvalid={formik.touched.username && formik.errors.username}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.username}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              isInvalid={formik.touched.password && formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" variant="primary">
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Login;
