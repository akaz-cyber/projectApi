import { Helmet } from "react-helmet";
import React from "react";
const Layout = ({children,title}) => {
    return (  
     <>
     <Helmet>
        <title>{title}</title>
     </Helmet>
     {children}
     </>

    );
}
 
export default Layout;