import React, { FC, useState } from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar";
import NavItem from "../NavItem";
import Nav from "../Nav";
import NavLink from "../NavLink";
import NavbarToggler from "../NavbarToggler";
import HamburgerSVG from "../../hamburger.svg";
import CloseSVG from "../../close.svg";
import NavbarCollapse from "../NavbarCollapse";
import Button from "../Button";
import Avatar from "../Avatar";

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
            <Nav md={{ hidden: true }} sm={{ hidden: true }}>
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
            <Nav sm={{ hidden: true }} right>
                <NavItem>
                    <Avatar />
                </NavItem>
                <NavItem>
                    <Button>Shedule a call</Button>
                </NavItem>
            </Nav>
            <NavItem lg={{ hidden: true }}>
                <NavbarToggler
                    icon={{ collapsed: HamburgerSVG, expanded: CloseSVG }}
                    onClick={clickHandler}
                    collapsed={collapsed}
                />
            </NavItem>
        </Navbar>
    );
};

export default Header;
