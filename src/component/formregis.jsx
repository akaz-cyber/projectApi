import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ER from "../images/er.jpg";
import { Link } from "react-router-dom";
import HR from "./hr-g";
import axios from "axios";
import { baseURL } from "../Connection/conect";
import { useState } from "react";
import swal from "sweetalert";


const FormRegis = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const submitPost = async (e) => {
    e.preventDefault();
    // const Reg = e.currentTarget;
    setValidated(true);
  
    if (validated) {
      try {
        const response = await axios.post(`${baseURL}/user/register`, {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password
        });
        
        console.log(response.data);
        swal("Success", "Registration successfully!", "success").then(() => {
          window.location.href = "/login";
        });
      } catch (error) {
        console.log(error);
        swal("Error", "Error Registration", "error");
      }
  
      console.log(firstname, lastname, email, password);
    }
  };
  

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <img src={ER} className="img-fluid" alt="ER" />
        </Col>
        <Col sm={6} className="mt-5">
          <h4 className="text-center color-b">Registration</h4>
          <HR />
          <Form onSubmit={submitPost} noValidate validated={validated}>
            <Row>
              <Col sm={6}>
                <Form.Floating className="mb-3 mt-4">
                  <Form.Control
                    id="floatingInputCustom1"
                    type="text"
                    placeholder="First Name"
                    required
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  <label htmlFor="floatingInputCustom1">First Name</label>
                </Form.Floating>
              </Col>
              <Col sm={6}>
                <Form.Floating className="mb-3 mt-4">
                  <Form.Control
                    id="floatingInputCustom2"
                    type="text"
                    placeholder="Last Name"
                    required
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                  <label htmlFor="floatingInputCustom2">Last Name</label>
                </Form.Floating>
              </Col>
            </Row>
            <Form.Floating className="mb-3 mt-4">
              <Form.Control
                id="floatingInputCustom3"
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInputCustom3">Email address</label>
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
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
            <Button className="mt-5 mx-1" type="submit">
              Sign in
            </Button>
          </Form>
          <p className="mt-3">
            You have an account click here{" "}
            <Link className="text-decoration-none" to="/login">
              Sign in
            </Link>{" "}
          </p>
        </Col>  
      </Row>
    </Container>
  );
};

export default FormRegis;