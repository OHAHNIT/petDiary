import React from "react";
import {Link} from "react-router-dom"
import Logo from "./images/pawprint.png"
const Nav = () => {
    return(
        <Link to = "/"><img src = {Logo} alt = "로고"/></Link>
    )
}

export default Nav