import { Breadcrumb } from "react-bootstrap";

import Bout from "../component/bout";
import Layout from "../component/layout";

const About = () => {
    return ( 
        <div>
        <Layout title="About">
        <div className="mx-3 mt-3">
        <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
         <Breadcrumb.Item active>About</Breadcrumb.Item>  
        </Breadcrumb>
    </div>
 
 <Bout/>    
            
            </Layout>    
      

        </div>
  



     );
}
 
export default About;