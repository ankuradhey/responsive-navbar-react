import React, { FC } from "react";
import "./NavbarCollapse.scss";
import CloseSVG from "../../close.svg";

const NavbarCollapse: FC<{ isOpen: boolean; onClick: any }> = ({
    children,
    isOpen = false,
    onClick,
}) => {
    return (
        <div className="navbar-collapse-wrapper">
            <div className={`navbar-overlay ${isOpen ? "expanded" : "collapsed"}`}></div>
            <div className={`navbar-collapse ${isOpen ? "expanded" : "collapsed"}`}>
                <div
                    className="close-action"
                    style={{ backgroundImage: `url(${CloseSVG})` }}
                    onClick={onClick}
                ></div>
                <div className="collapse-content">{children}</div>
                <div className="collapse-overlay"></div>
            </div>
        </div>
    );
};

export default NavbarCollapse;
