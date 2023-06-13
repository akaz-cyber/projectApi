import { Helmet } from "react-helmet";
import FormLogin from "../component/formlogin";

const Login = () => {
    return (  
        <div>
            <Helmet> <title>Login</title></Helmet>
           <FormLogin/>
        </div>
     );
}
 
export default Login;