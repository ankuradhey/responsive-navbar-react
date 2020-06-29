import React, { FC } from "react";
import "./NavLink.scss";

const NavLink: FC<{ href: string }> = ({ children, href }) => {
    return (
        <a className="link" href={href}>
            {children}
        </a>
    );
};

export default NavLink;
