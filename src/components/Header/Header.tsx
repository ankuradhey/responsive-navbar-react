import React, { FC, useState } from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar";
import NavItem from "../NavItem";
import Nav from "../Nav";
import NavLink from "../NavLink";
import NavbarToggler from "../NavbarToggler";
import hamburgerSVG from "../../hamburger.svg";
import NavbarCollapse from "../NavbarCollapse";

const Header: FC<{}> = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const clickHandler = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Navbar className="container-fluid navbar">
            <NavItem>
                <Logo />
            </NavItem>
            <NavbarCollapse isOpen={!collapsed}>
                <Nav>
                    <NavItem>
                        <NavLink href="/">For You</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Tasks</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Marketplace</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Accounts</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Explore</NavLink>
                    </NavItem>
                </Nav>
            </NavbarCollapse>
            <Nav lg={{ visible: true }}>
                <NavItem>
                    <NavLink href="/">For You</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">Tasks</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">Marketplace</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">Accounts</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">Explore</NavLink>
                </NavItem>
            </Nav>
            <NavItem lg={{ hidden: true }}>
                <NavbarToggler
                    collapsed
                    icon={{ collapsed: hamburgerSVG, expanded: hamburgerSVG }}
                    onClick={clickHandler}
                />
            </NavItem>
        </Navbar>
    );
};

export default Header;
