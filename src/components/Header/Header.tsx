import React, { FC } from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

const Header: FC<{}> = () => {
    return (
        <div className="container-fluid navbar">
            <Logo />
            <Navbar />
        </div>
    );
};

export default Header;
