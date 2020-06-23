import React, { FC } from "react";

export const Link: FC<{ reverse?: boolean }> = ({ children, reverse = false }) => {
    return (
        <li className="nav-item link">
            <a className="nav-link" href="/">
                {children}
            </a>
        </li>
    );
};

export const Item: FC<{}> = ({ children }) => {
    return (
        <li className="nav-item">
            <div className="nav-link">{children}</div>
        </li>
    );
};
