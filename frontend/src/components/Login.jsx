import React from "react";
import { Container, Col, Form, InputGroup, Button } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import CustomNavbar from "./CustomNavbar";
import styles from "./LoginForm.css";
import { Card } from "react-bootstrap";

function Login() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  return (
    <>
      <CustomNavbar />
      <br />

      <Container className={styles.formContainer}>
        <Card className={styles.formCard}>
          <Card.Body className={styles.formCardBody}>
            <Card.Title className={styles.formCardTitle}>Login</Card.Title>

            <Formik
              validationSchema={schema}
              onSubmit={console.log}
              initialValues={{
                username: "",
                password: "",
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group
                    className="mb-3"
                    controlId="validationFormikUsername"
                  >
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.username}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="validationFormikPassword"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button type="submit" className={styles.submitButton}>
                    Login
                  </Button>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Login;
