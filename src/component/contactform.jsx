import {  Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import HR from './hr-g';

const FormContact = () => {
    return ( 
       <>
       <div className='p-2  bg-con'>
       <h1 className='text-center color-b '>Contact us</h1>   
        <HR/>
        </div>
        <Row className='mx-3 mt-3  shadow p-3 mb-5 bg-w rounded'>
        <Col md={8}>
          <div className="contact-info">
            <h2 className='text-primary'>Get in Touch</h2>
            <p className='fs-5'>Have any questions or inquiries? Fill out the form below or reach out to us using the contact details provided.</p>
          </div>

          <div className="contact-form">
            <h2 className='text-primary'>Send us a Message</h2>
            <Form>
              <Form.Group controlId="formMessage">
                <Form.Control as="textarea" rows={6} placeholder="Enter your message" />
              </Form.Group>

              <Button variant="primary" className="mt-3 mb-4" type="submit">
                Send Message
              </Button>
            </Form>
          </div>
        </Col>

        <Col md={4}>
          <div className="contact-details">
            <h2 className='text-primary'>Contact Information</h2>
            <p><strong>Address:</strong> 123 Main Street, City, Country</p>
            <p><strong>Phone:</strong> +1 123-456-7890</p>
            <p><strong>Email:</strong> info@example.com</p>
          </div>

          <div className="map">
            {/* Peta lokasi dapat ditambahkan di sini */}
          </div>

          <div className="social-media">
            <h2 className='text-primary'>Connect with Us</h2>
            <ul className='list-unstyled'>
              <li><a href="https://www.facebook.com/example" className='text-decoration-none'><FaFacebook style={{width: "20px"}} /> <span>facebook</span></a></li>
              <li><a href="https://www.twitter.com/example" className='text-decoration-none'><FaTwitter style={{width: "20px"}} /><span>Twitter</span></a></li>
              <li><a href="https://www.instagram.com/example" className='text-decoration-none'><FaInstagram style={{width: "20px"}} /><span>Instagram</span></a></li>
            </ul>
          </div>
        </Col>
      </Row>
       </>

     );
}
 
export default FormContact;