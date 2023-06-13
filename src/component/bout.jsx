import { Row, Col, Card,  } from "react-bootstrap";
import HR from "./hr-g";
import AB from "../images/about.jpg"
import HRR from "./hr-r";


const Bout = () => {
   const year = new Date().getFullYear();
   const randomname = "lorem";
  
  return (
    <>
      <div className="border d-flex align-items-center justify-content-center p-2 bg-p" style={{ height: "250px" }}>
        <div>
          <h1 className="text-light">About Us</h1>
          <HRR/>
         
          <h3 className="text-smoke"  >Discover Your Neighborhood</h3>
          <p className="text-light text-p ">We are dedicated to providing you with valuable information about your local community. Our goal is to help you explore and discover everything there is to know about your neighborhood, from nearby amenities and services to upcoming events and local attractions</p>
        </div>
      </div>
     
     <Card className="mt-3 shadow-lg p-3 mb-5 bg-white rounded" >

      

     <div className="mt-5">
        <Row>
          <Col md={8}>
            <h1 className="text-center color-b">Discover Your Neighborhood</h1>
            <HR />
            <div className="px-5 p-3">
            <p>
              Welcome to our application, a platform designed to help you
              explore and connect with the shops and stores in your neighborhood.
              Our application was founded in {year} by {randomname} with the
              goal of providing valuable information about the local businesses
              near you.
            </p>
            <p>
              Our team envisioned a solution that would make it easy for people
              to discover the hidden gems in their neighborhood and support local
              businesses. We wanted to create a platform where users could find
              detailed information about shops, stores, and events happening
              nearby.
            </p>
            <p>
              Our application is all about empowering the community by providing
              up-to-date information about the shops and stores in your area. We
              understand the importance of supporting local businesses and creating
              strong neighborhood connections. With our app, you can easily explore
              various shops, find out about exciting events, and stay informed about
              what's happening around you.
            </p>
            <p>
              We invite you to join our community and be a part of this journey.
              Start discovering your neighborhood today and experience the benefits
              of connecting with local businesses. Together, we can make a positive
              impact on our community and support the growth of small businesses.
            </p>
            <p>
              Thank you for choosing our application. We are excited to have you on
              board!
            </p>


            </div>
           
          </Col>

          <Col md={4}>
            <img src={AB} alt="" className="img-fluid me-3" />
          </Col>

        </Row>
      </div>

      
     </Card>
      
      {/* <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center">About Us</h1>

          <h2 className="text-center mb-4">Discover Your Neighborhood</h2>

          <div className="about-paragraph">
            <p>
              Welcome to our application, a platform designed to help you
              explore and connect with the shops and stores in your neighborhood.
              Our application was founded in [year] by [founder's name] with the
              goal of providing valuable information about the local businesses
              near you.
            </p>
          </div>

          <div className="about-paragraph">
            <p>
              Our team envisioned a solution that would make it easy for people
              to discover the hidden gems in their neighborhood and support local
              businesses. We wanted to create a platform where users could find
              detailed information about shops, stores, and events happening
              nearby.
            </p>
          </div>

          <div className="about-paragraph">
            <p>
              Our application is all about empowering the community by providing
              up-to-date information about the shops and stores in your area. We
              understand the importance of supporting local businesses and creating
              strong neighborhood connections. With our app, you can easily explore
              various shops, find out about exciting events, and stay informed about
              what's happening around you.
            </p>
          </div>

          <div className="about-paragraph">
            <p>
              We invite you to join our community and be a part of this journey.
              Start discovering your neighborhood today and experience the benefits
              of connecting with local businesses. Together, we can make a positive
              impact on our community and support the growth of small businesses.
            </p>
          </div>

          <div className="about-paragraph">
            <p>
              Thank you for choosing our application. We are excited to have you on
              board!
            </p>
          </div>

          <div className="text-center mt-4">
            <p>Best regards,</p>
            <p>The [Application Name] Team</p>
          </div>
        </Col>
      </Row>
    </Container> */}




    </>

  );
}

export default Bout;