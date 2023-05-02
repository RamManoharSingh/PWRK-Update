import { React, useState, useEffect } from "react";
import Parse from "parse/dist/parse.min.js";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import Routes from "../../../routes/routeName";
import { Alert } from "react-bootstrap";
import { ClassSharp } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup } from '@themesberg/react-bootstrap';

export const ForgotPassword = (props) => {
  // State variables
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleReset = async (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      let result = await axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}Account/ForgotPassword?EmailID=${email}`
        )
        .then((res) => {
          Swal.fire(res.data);
          navigate(Routes.LOGIN);
        })
        .catch((err) => {
          Swal.fire(
            "Password Reset Link sent on your Mail",
            "Plese check your Mail",
            "Success"(email)
          );
          console.log(err);
        });
    } else {
      console.log(validateEmail(email));
      console.log(email);
      if (email === "") {
        setError("Please Enter Your Registered Email");
      } else {
        setError("This is Not Registered Email ID");
      }
    }
  };

  const [error, setError] = useState("");
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const [loading, setLoading] = useState(false);
  const doRequestPasswordReset = async function () {
    const emailValue = email;
    try {
      if (validateEmail(email)) {
        await Parse.User.requestPasswordReset(email);
        // Swal.fire(
        //   `Success! Please check ${email} to proceed with password reset.`
        // );
        Swal.fire(
          "Password Reset Link sent on your Mail",
          "Plese check your Mail",
          "Success"(email)
        );
        return true;
      }
    } catch (error) {
      alert(`Error! ${error}`);
      return false;
    }
  };
  return (
    <main>
      <section className="vh-lg-100 mt-4 mt-lg-0 bg-soft d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <p className="text-center">
              <Card.Link as={Link} to={Routes.LOGIN} className="text-gray-700">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to sign in
              </Card.Link>
            </p>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="signin-inner my-3 my-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <h3>Forgot your password?</h3>
                <p className="mb-4">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
                <Form onSubmit={handleReset}>
                  <div className="mb-4">
                    <Form.Label htmlFor="email">Your Email</Form.Label>
                    <InputGroup id="email">
                      <Form.Control autoFocus required type="text" placeholder="example@company.com" onChange={(e) => setEmail(e.target.value)} />
                    </InputGroup>
                  </div>
                  <Button variant="primary" type="submit" className="w-100">
                    Recover password
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
