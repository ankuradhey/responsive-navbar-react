import React, { FC } from "react";
import "./NavItem.scss";
import { NavItemProp } from "./index";

const Item: FC<NavItemProp> = ({ children, left = true, lg, md, sm }) => {
    const lgClass = lg && lg.hidden ? "hidden-lg" : "";
    const mdClass = md && md.hidden ? "hidden-md" : "";
    const smClass = sm && sm.hidden ? "hidden-sm" : "";
    return <div className={`nav-item ${lgClass} ${mdClass} ${smClass}`}>{children}</div>;
};

export default Item;
