import React, { FC } from "react";
import "./NavItem.scss";
import { NavItemProp } from "./index";

const Item: FC<NavItemProp> = ({ children, left = true, lg }) => {
    return <div className={`nav-item ${lg && lg.hidden ? "hidden-lg" : ""}`}>{children}</div>;
};

export default Item;
