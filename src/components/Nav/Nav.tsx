import React, { FC } from "react";
import "./Nav.scss";
import { NavProps } from "./index";

const Nav: FC<NavProps> = ({ children, lg, md, sm, left, right }) => {
    const lgClass = lg && lg.hidden ? "hidden-lg" : "";
    const mdClass = md && md.hidden ? "hidden-md" : "";
    const smClass = sm && sm.hidden ? "hidden-sm" : "";
    const leftClass = left ? "flex-start" : "";
    const rightClass = right ? "right-end" : "";
    return (
        <div className={`navbar-nav ${lgClass} ${mdClass} ${smClass} ${leftClass} ${rightClass}`}>
            {children}
        </div>
    );
};

export default Nav;
