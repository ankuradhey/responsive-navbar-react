import React, { FC } from "react";
import { TogglerProp } from "./index";
import "./NavbarToggler.scss";

const NavbarToggler: FC<TogglerProp> = ({ className = "", onClick, icon, collapsed = true }) => {
    return (
        <button
            className={`navbar-toggler ${className}`}
            onClick={onClick}
            style={{ backgroundImage: `url(${icon})` }}
        >
            &nbsp;
        </button>
    );
};

export default NavbarToggler;
