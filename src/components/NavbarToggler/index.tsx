import React from "react";

export { default } from "./NavbarToggler";

export interface TogglerProp {
    className?: string;
    onClick?: any;
    collapsed: boolean;
    icon: string;
}
