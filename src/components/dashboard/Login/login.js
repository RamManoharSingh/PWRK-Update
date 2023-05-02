import { React } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Routes from "../../../routes/routeName";
import { Alert } from "react-bootstrap";
import { red } from "@mui/material/colors";
import Password from "antd/es/input/Password";
import { header } from "../../common/Header/header";
import Captcha from "../Captcha/Captcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';


import BgImage from "../../../assets/signin.svg";

const Login = (props) => {
  const [captcha, setCaptcha] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loginId, setLoginId] = useState("");
  // const validateEmail = (email) => {
  //   return email.match(
  //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   );
  // };
  const [passwordShown, setPasswordShown] = useState(true);
  const [loading, setLoading] = useState(false);
  let captchaVerified;
  const navigate = useNavigate();

  // handle button click of login form
  const handleLogin = async (e) => {
    e.preventDefault();
    let payload = {
      loginId: loginId,
      password: password,

    };
    console.log(payload, "payload");

    if (password !== "" && loginId !== "") {
      let result = await axios
        .post(`${process.env.REACT_APP_API_BASE_URL}Account/SignIn`, payload)
        .then((res) => {
          console.log("out-------", res.data);
          console.log(res.data.message);
          if (res.data.message != "") {
            setError(res.data.message);
          } else {
          }

          if (res.data && res.data.token) {
            const { token, userId, RoleId, loginId, userName, resiAdd, address } = res.data;
            console.log(token);
            // let token = res.data.token;
            // let userId = res.data.userID;
            // const RoleId = res.data.roleId;
            // let loginId = res.data.loginId;
            // let userName = res.data.userName;
            // let resiAdd = res.data.resiAdd;
            // let address = res.data.address;
            localStorage.setItem("token", token);
            localStorage.setItem("UserId", userId);
            localStorage.setItem("UserName", userName);
            localStorage.setItem("RoleId", RoleId);
            localStorage.setItem("LoginId", loginId);
            localStorage.setItem("ResiAdd", resiAdd);
            localStorage.setItem("Address", address);
            // navigate("/");
            // if(roleId===1){

            // }
            // else if(roleId===2){

            // }else{

            // }
            navigate(Routes.DASHBOARD)
          }
        })
        .catch((err) => {
          setError(err.message);
        });
    } else {
      if (userName === "") {
        setError("Please Enter User Name");
      }
      else if (password === "") {
        setError("Please Enter your Password");
      } else if (!captchaVerified) {
        setError("Please Verify Captcha");
      }
      else {
        setError("Please Enter user  Name and Password");
      }
    }

  };

  const getCapchaVerified = (isVerified) => {
    console.log(isVerified, "verified function");
    captchaVerified = isVerified;
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={Routes.DASHBOARD} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in to our platform</h3>
                </div>
                <Form onSubmit={handleLogin} className="mt-4">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text" placeholder="example@company.com" onChange={(e) => setLoginId(e.target.value)} />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control required type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check type="checkbox">
                        <FormCheck.Input id="defaultCheck5" className="me-2" />
                        <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Remember me</FormCheck.Label>
                      </Form.Check>
                      <Card.Link onClick={()=>navigate("/ForgotPassword")} className="small text-end">Lost password?</Card.Link>
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Sign in
                  </Button>
                </Form>

                {/* <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or login with</span>
                </div> */}
                <div className="d-flex justify-content-center my-4">
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link as={Link} to={"/"} className="fw-bold">
                      {` Create account `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Login;





{/* <div className="Auth-form-container" style={{ marginTop: "-37px" }}>
      <header />
      <form
        className="Auth-form"
        onSubmit={(e) => {
          handleLogin(e);
        }}
      >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
          {error !== "" ? (
            <Alert key={"danger"} variant={"danger"}>
              {error}
            </Alert>
          ) : (
            <div></div>
          )}
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              type="email"
              style={{ width: 324 }}
              className="form-control mt-1"
              placeholder="Enter Login Id"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type={passwordShown ? "password" : "text"}
              style={{ width: 324 }}
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="checkbox"
              style={{ margin: 9 }}
              id="topping"
              onClick={togglePassword}
            />
            Show Password
          </div>
          <label>Captcha</label>
          <div className="form-group ">
            <Captcha
              userCaptcha={captcha}
              setUserCaptcha={setCaptcha}
              getCapchaVerified={getCapchaVerified}
            />
          </div>
          {/* <Hcaptcha />  */}
    //       <div className="d-grid gap-2 mt-3">
    //         <button className="btn btn-primary" onClick={(e) => handleLogin(e)}>
    //           Login
    //         </button>
    //       </div>
    //       <p className="forgot-password text-right mt-2">
    //         <Link to={routeNames.FORGOTPASSWORD}> Forgot password?</Link>
    //       </p>
    //     </div>
    //   </form>
    // </div> */}
