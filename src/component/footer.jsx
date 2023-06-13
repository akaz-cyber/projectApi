import { Card,Row, Col, Container } from "react-bootstrap";

import { FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (  
        <>
  <Card>
   
      <Card.Body>
      <Container>
      <Row>
          <Col md={5}>
            <h4>About Us</h4>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales volutpat risus, eu cursus mi ullamcorper sed. Vestibulum at lorem eget odio aliquet aliquet sed id dui.</p>
          </Col>
          <Col md={5}>
            <div>
            <h4>Contact Us</h4>
            <p><strong>Address:</strong> 123 Main Street, City, Country</p>
            <p><strong>Phone:</strong> +1 123-456-7890</p>
            <p><strong>Email:</strong> info@example.com</p>
            </div>
            
          </Col>
          <Col md={2}>
            <h4 className="fs-4">Follow Us</h4>
            <ul className="list-inline  fs-4  ">
              <li className="list-inline-item  "><i><a href="https://www.twitter.com/example"><FaFacebook className="text-dark me-2 "/></a> </i></li>
              <li className="list-inline-item"><a href="https://www.twitter.com/example"><FaTwitter className="text-dark me-2"/></a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com/example"><FaInstagram className="text-dark me-2"/></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      
      </Card.Body>
      <Card.Footer className="text-muted text-center">&copy; {new Date().getFullYear()} Know Your Neighborhood. All rights reserved.</Card.Footer>
    </Card>
        </>


    );
}
 
export default Footer;