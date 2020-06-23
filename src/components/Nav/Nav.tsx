import React, { FC } from "react";
import "./Nav.scss";

const Nav: FC<{ lg?: { visible: boolean } }> = ({ children, lg }) => {
    return <div className={`navbar-nav ${lg && lg.visible ? "show-lg" : ""}`}>{children}</div>;
};

export default Nav;
