import React, { FC } from "react";
import "./Logo.scss";

/**
 * @description Interface for Props
 * @param logoLabel  Prop for 'header Text'.
 */
interface Props {
    logoLabel:string;
}

const Logo:FC<Props> = ({logoLabel}:Props) => {
    return (
        <a href="/" className="navbar-logo">
            {logoLabel}
        </a>
    );
};

export default Logo;
