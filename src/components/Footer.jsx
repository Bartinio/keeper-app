import React from "react";

   
function Footer() {
    const date = new Date();
    const cutterntDate = date.getFullYear();        
    return (
        <>
            <footer>
                 <p> &copy; {cutterntDate}</p>
             </footer>
        </>
    )
    
}

export default Footer;