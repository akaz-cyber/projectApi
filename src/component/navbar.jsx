import React, { useEffect } from "react";
import { Navbar, Container, Nav, Button,NavDropdown,Form, Alert } from "react-bootstrap";
import Logo from "../images/logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../Connection/conect";

const Navigatorbar = () => {
  let userSession = sessionStorage.getItem("user");
  userSession = JSON.parse(userSession);

  const [users, setUser] = useState(null);

  useEffect(()=>{
    setUser(userSession);
  },[]);

 


  function logout(e) {
    e.preventDefault();
    console.log(userSession);
   
     console.log(userSession.email + ":" + userSession.password)

    axios 
    .get(`${baseURL}/user/logout`,{
     headers:{
      Authorization: "Basic " + btoa(userSession.email + ":" + userSession.password)
    
     }
    })
    .then((response) => {
      sessionStorage.clear("user");
      window.location.href = "/login";
    })
     .catch((response) => {
      alert("logout error")
     });

  //   axios 
  //   .get(baseURL + "/user/logout",{})
  //   .then((response) => {
  //    sessionStorage.clear("user");
  //   })
  //   .catch((error)=>{
  //     alert("logout error")
  //   });
  };
  
  function handleFacebookLogout() {
    // Tambahkan kode untuk logout dari Facebook di sini
    // Misalnya, menghapus token akses Facebook dan mengarahkan pengguna ke halaman login

    // Hapus data pengguna dari sessionStorage
    sessionStorage.clear();
    // Arahkan pengguna ke halaman login
    window.location.href = "/login";
  }





  return (
    <div>
      <Navbar  className="border shadow p-2 mb-2 bg-white rounded stiky-nav" expand="lg">
        <Container fluid>
          <Navbar.Brand><img src={Logo} width="120px"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {/* <Navbar.Collapse id="navbarScroll"> */}
          

        {users && userSession.provider === "LOCAL" &&(
          <Button className="d-flex me-5 mx-sm-2 mx-4 me-sm-3 but" as={Link} to="/" onClick={logout}  variant="danger" size="lg">Logout</Button>
        )} 
        
        {users && userSession.provider === "FACEBOOK" && (
            <Button  onClick={handleFacebookLogout} className="d-flex me-5 mx-sm-2 mx-4 me-sm-3 but" variant="danger" size="lg">Logout</Button>
        )}


        {!users && (
           <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 mx-4">
          <Nav.Link as={Link} to="/"> Home </Nav.Link>
          <Nav.Link as={Link} to="/about">About us </Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
          <Nav.Link as={Link} to="/teams">Teams And Conditions</Nav.Link>
      </Nav>
          <Button className="d-flex me-5 mx-sm-2 mx-4 me-sm-3 but" as={Link} to="/login" variant="primary" size="lg">Sign in</Button>
          </Navbar.Collapse>
          
        )}
              
            
            
            
            
            {/* <Button className="d-flex me-5 mx-sm-2 mx-4 me-sm-3 but" as={Link} to="/register" variant="success" size="sm">Registration</Button> */}
          
             
          
        </Container>
      </Navbar>
     
     


    </div>
  );
}

export default Navigatorbar;
