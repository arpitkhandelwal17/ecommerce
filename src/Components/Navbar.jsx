import React from "react";
 import { Link } from "react-router-dom";




function Navbar(){
    return ( 
        <div className="Navbar">
           <h2> <Link to = "/">Shop</Link></h2>
            <h2><Link to = "/Cart">Cart</Link></h2>
        </div>
    );
}

export default Navbar;
