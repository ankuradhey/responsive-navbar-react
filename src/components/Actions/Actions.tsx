import React, { FC } from "react";
import "./Actions.scss";

/**
 * @description Interface for Props
 * @param logoLabel  Prop for 'header Text'.
 */
interface Props {
    className:string;
    input:string;
}

const Logo:FC<Props> = ({className, input}:Props) => {
    return (
        <>
          <div className={className}>
            {input}
          </div>
        </>
    );
};

export default Logo;
