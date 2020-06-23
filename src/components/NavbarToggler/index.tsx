import React from "react";

export { default } from "./NavbarToggler";

interface IconType {
    collapsed: string;
    expanded: string;
}

export interface TogglerProp {
    className?: string;
    onClick?: any;
    collapsed: boolean;
    icon: IconType;
}
