import React, { FC } from "react";
import "./Navbar.scss";

type toggleState = "expanded" | "collapsed";

const Navbar: FC<{ className: string }> = ({ children, className }) => {
    const expanded = true;
    return (
        <nav className={`navbar action-items ${className} ${!expanded ? "collapsed" : "expanded"}`}>
            {children}
        </nav>
    );
};

export default Navbar;
