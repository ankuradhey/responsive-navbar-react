import React, { FC } from "react";
import "./Logo.scss";
import {LogoText} from '../../../config';

/**
 * @description Interface for Props
 * @param logoLabel  Prop for 'header Text'.
 */
interface Props {
    logoClassName:string;
}

const Logo:FC<Props> = ({logoClassName}:Props) => {
    return (
        <a href="/" className={`navbar-logo ${logoClassName}`}>
            {LogoText}
        </a>
    );
};

export default Logo;
