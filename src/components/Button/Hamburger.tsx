import React, { FC } from "react";
import hamburgerSVG from "../../hamburger.svg";
import closeSVG from "../../close.svg";

type toggleState = "expanded" | "collapsed";

export const HamburgerBtn: FC<{
    className?: string;
    borderless?: boolean;
    style?: React.CSSProperties;
    toggle?: toggleState;
    clickHandlerFn?: any;
}> = ({ children, toggle = "collapsed", clickHandlerFn }) => {
    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        clickHandlerFn(toggle);
    };

    return (
        <button
            className="navbar-toggler no-border"
            onClick={clickHandler}
            style={{ backgroundImage: `url(${toggle === "collapsed" ? hamburgerSVG : closeSVG})` }}
        >
            {children}
        </button>
    );
};
