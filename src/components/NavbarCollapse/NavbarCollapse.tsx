import React, { FC } from "react";
import "./NavbarCollapse.scss";

const NavbarCollapse: FC<{ isOpen: boolean }> = ({ children, isOpen = false }) => {
    return <div className={`navbar-collapse ${isOpen ? "expanded" : "collapsed"}`}>{children}</div>;
};

export default NavbarCollapse;
