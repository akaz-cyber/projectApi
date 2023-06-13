import { Breadcrumb } from "react-bootstrap";
import HRR from "../component/hr-r";

import Layout from "../component/layout";

const Teams = () => {
    return (  
<div>
  <Layout title="Teams And Conditions">
  <Breadcrumb className="mx-3 mt-3">

<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item active>Teams And Conditions</Breadcrumb.Item>
</Breadcrumb>
<div class="container">
    <h1 class="mt-5 color-b">Terms and Conditions</h1>
     <HRR/>
    <h2 class="mt-4">1. Introduction</h2>
    <p>Welcome to Know Your Neighborhood. These terms and conditions outline the rules and regulations for the use of our website.</p>

    <h2 class="mt-4">2. Acceptance of Terms</h2>
    <p>By accessing or using our website, you accept and agree to be bound by these terms and conditions. If you disagree with any part of these terms, you may not use our website.</p>

    <h2 class="mt-4">3. Use License</h2>
    <p>Permission is granted to use the materials and information on Know Your Neighborhood for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>

    <h2 class="mt-4">4. Intellectual Property Rights</h2>
    <p>All intellectual property rights of Know Your Neighborhood, including but not limited to logos, graphics, and content, are owned by us. You may not use, reproduce, or distribute any of our intellectual property without our prior written consent.</p>

    <h2 class="mt-4">5. User Conduct</h2>
    <p>While using our website, you agree not to engage in any unlawful or harmful activities, including but not limited to:</p>
    <ul>
      <li>Posting or transmitting any content that is offensive, defamatory, or violates any third-party rights.</li>
      <li>Attempting to gain unauthorized access to our systems or interfere with the website's security.</li>
      <li>Engaging in any activity that disrupts or affects the website's performance.</li>
    </ul>

    <h2 class="mt-4">6. Limitation of Liability</h2>
    <p>Know Your Neighborhood and its owners will not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use or inability to use our website.</p>

    <h2 class="mt-4">7. Modifications</h2>
    <p>We reserve the right to modify these terms and conditions at any time without prior notice. By continuing to use our website after any changes, you agree to be bound by the updated terms and conditions.</p>

    <h2 class="mt-4">8. Governing Law</h2>
    <p>These terms and conditions are governed by and construed in accordance with the laws of [your country]. Any disputes arising out of these terms will be subject to the exclusive jurisdiction of the courts in [your country].</p>

    <h2 class="mt-4">9. Contact Us</h2>
    <p>If you have any questions or concerns regarding these terms and conditions, please contact us at [contact email].</p>
  </div>
        
  </Layout>
    
    
    </div>

    );
}
 
export default Teams;