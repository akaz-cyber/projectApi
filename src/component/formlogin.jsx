import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import { FaFacebook } from "react-icons/fa";
import { json, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { baseURL } from "../Connection/conect";
import IR from "../images/register.jpg";
// import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import FacebookLogin from "@greatsumini/react-facebook-login";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const logData = {
      email: email,
      password: password,
      provider: "LOCAL"
    };
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true);

    if (form.checkValidity()) {
      try {
        
        const response = await axios.post(`${baseURL}/user/login`, {
          email: email,
          password: password,
          provider :"LOCAL"
        });

        sessionStorage.setItem('user', JSON.stringify(logData));
        console.log(response.data);
        swal("Success", "Login successfully!", "success").then(() => {
          window.location.href = "/profile";
        });
      } catch (error) {
        console.log(error);
        swal("Error", "Error login", "error");
      }
    }
  };
const handlefacebooklogin = (response) =>{
  let FbData ={
      email: response.email,
      fullName : response.fullName,
      provider : "FACEBOOK",
  };

  axios.post(`${baseURL}/user/login`,FbData).then((response) => {
    sessionStorage.setItem('user',JSON.stringify(FbData))
    console.log(response.data);
    swal("Success", "Login successfully!", "success").then(() => {
      window.location.href = "/profile";
    });
  })

  .catch((error) =>{
    console.log(error);
    swal("Error", "Error login", "error");
  })


}
  return (
    <div>
      <Container>
        <Row>
          <Col sm={6}>
            <img src={IR} className="img-fluid" alt="Register" />
          </Col>
          <Col sm={6} className="mt-5">
            <h4>
              Sign in with
              <FacebookLoginButton>
              <FacebookLogin className="btn button-primary text-light fs-4 "
                appId="651314313508532"
                onSuccess={(response) => {
                  console.log('Login Success!', response);
                }}
                onFail={(error) => {
                  console.log('Login Failed!', error);
                }}
                onProfileSuccess={handlefacebooklogin}
                
                // ={(response) => {
                //    let data= {
                //      email: response.name,
                //      name: response.email,
                //      provider: "FACEBOOK"
                //    };

                //  sessionStorage.setItem("user",JSON.stringify(data));
                //  window.location.href ="/profile"
                // }}
              />



              </FacebookLoginButton>
              
                
            </h4>
            <h4 className="mb-4">Or</h4>

            <Form onSubmit={handleSubmit} noValidate validated={validated}>
              <Form.Floating className="mb-3 mt-4">
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Label htmlFor="floatingInputCustom">
                  Email address
                </Form.Label>
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address.
                </Form.Control.Feedback>
              </Form.Floating>
              <Form.Floating className="mt-4">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Label htmlFor="floatingPasswordCustom">
                  Password
                </Form.Label>
                <Form.Control.Feedback type="invalid">
                  Please enter your password.
                </Form.Control.Feedback>
              </Form.Floating>
              <Button className="mt-5 mx-1" type="submit">
                Sign in
              </Button>
            </Form>

            <p className="mt-3">
              Don't have an account?{" "}
              <Link className="text-decoration-none" to="/regis">
                Sign up
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormLogin;
