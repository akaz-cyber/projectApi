import Welcome from "../images/hero.jpg"
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import HR from "./hr-g";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faDiamond, faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { FaCalendar } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
const Hero = () => {
   const Navigate = useNavigate()

    return (    
        <>

        {/* welcome page */}
        {/* <div className="d-flex justify-content-between p-5"> */}
        
        <Row className="p-4">
        <Col md={8}>
        <div>
            <h1 className="color-b" > WELCOME</h1>
            <h2 className="text-primary"> <span className="color-2">To Website</span>  Know Your Neighborhood</h2>
            <p className="fs-5">Discover and connect with your neighbourhood like never before. Get to know your Neighborhood, explore local events, and stay informed about what's happening around you.</p>
            <Button onClick={() => Navigate ('/login')} className="but" variant="primary">Get Started</Button>
        </div>
        </Col>
      <Col md={4}>
      <div>
            <img src={Welcome} className="img-1 img-fluid" width="500px" ></img>
        </div>
        
      </Col>
       
        
        </Row> 
        
       
      

    {/* </div> */}
    {/* end welcome */}

    {/* banefit */}
    <div className="text-center bg-primary text-light p-5">
         <h1 className="fs-3">You will get good benefits here</h1>
            <hr className="custom-hr"/>
        <p className="mt-4 fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at fuga, illum ullam dolorum, quibusdam quae pariatur alias eaque minima ratione odio excepturi iure inventore harum et? Magni, magnam ea.</p>

    </div>
    {/* end banefit */}


    <div className="mt-3">
   <h1 className="text-center color-b">At Your Service</h1>
   <HR/>
    </div>


    <Container className="mt-4 mb-4 ">
       <Row>
        <Col md={4}>
        <Card className="shadow  mb-5 bg-white rounded" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><FontAwesomeIcon icon={faDiamond} className="me-2"/> Explore Neighborhood </Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> Explore Your Neighborhood</Card.Subtitle>
        <Card.Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eaque porro, consectetur temporibus blanditiis fugiat beatae magnam possimus ullam voluptate?
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>

        <Col md={4}>
        <Card className="shadow  mb-5 bg-white rounded" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><FontAwesomeIcon icon={faCalendar} className="me-3"/>Neighborhood Events</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Neighborhood your Events</Card.Subtitle>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, laborum? Asperiores sequi nesciunt perspiciatis corporis non illo voluptates eveniet modi.
        </Card.Text>
 
      </Card.Body>
    </Card>
        </Col>
        <Col md={4}>
        <Card className="shadow  mb-5 bg-white rounded" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><FontAwesomeIcon icon={faMoneyBillTransfer} className="me-3"/>Neighborhood Store</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Neighborhood your Store</Card.Subtitle>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, laborum? Asperiores sequi nesciunt perspiciatis corporis non illo voluptates eveniet modi.
          </Card.Text>
     
      </Card.Body>
    </Card>     
         </Col>
  

       </Row>

    </Container>
    
   

    </>
        
        
        
        );
}

export default Hero;