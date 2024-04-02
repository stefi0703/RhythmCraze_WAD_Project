import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import CustomNavbar from "./CustomNavbar";
import styles from "./RegisterForm.css";
import { Card, Container } from "react-bootstrap";

function RegisterForm() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    username: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    address: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <>
      <CustomNavbar />
      <br />

      <Container className={styles.formContainer}>
        <Card className={styles.formCard}>
          <Card.Body className={styles.formCardBody}>
            <Card.Title className={styles.formCardTitle}>
              Registration Form
            </Card.Title>

            <Formik
              validationSchema={schema}
              onSubmit={console.log}
              initialValues={{
                firstName: "Mark",
                lastName: "Otto",
                email: "",
                username: "",
                password: "",
                confirmPassword: "",
                address: "",
                terms: false,
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormikFirstName"
                    >
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        isInvalid={!!errors.firstName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.firstName}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormikLastName"
                    >
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        isInvalid={!!errors.lastName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.lastName}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormikEmail"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="6"
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
                      as={Col}
                      md="6"
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
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikConfirmPassword"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPassword}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Form.Group
                    className="mb-3"
                    controlId="validationFormikAddress"
                  >
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Address"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      isInvalid={!!errors.address}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.address}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      name="terms"
                      label="Agree to terms and conditions"
                      onChange={handleChange}
                      isInvalid={!!errors.terms}
                      feedback={errors.terms}
                      feedbackType="invalid"
                      id="validationFormikTerms"
                    />
                  </Form.Group>
                  <Button type="submit" className={styles.submitButton}>
                    Submit form
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

export default RegisterForm;
