import { Breadcrumb } from "react-bootstrap";
import FormContact from "../component/contactform";
import Layout from "../component/layout";


const Contact = () => {
    return ( 
      <>
      <Layout title="Contact us">
      <div className="mx-3 mt-3">
        <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
         <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>  
        </Breadcrumb>
    </div>
    <FormContact/>

      </Layout>
      
    
    
      </>
   

     );
}
 
export default Contact;