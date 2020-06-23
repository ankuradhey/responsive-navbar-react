import React, { FC } from "react";

const Button: FC<{
    className?: string;
    borderless?: boolean;
}> = ({ children, className = "" }) => {
    return <button className={`btn ${className}`}>{children}</button>;
};

export default Button;
