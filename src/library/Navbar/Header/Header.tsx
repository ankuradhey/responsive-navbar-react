import React, { FC, useState } from "react";
import { MdClass, MdDataUsage } from "react-icons/md";
import Logo from "../Logo";
import Navbar from "../Navbar";
import NavItem from "../NavItem";
import Nav from "../Nav";
import NavLink from "../NavLink";
import NavbarToggler from "../NavbarToggler";
import HamburgerSVG from "../../../hamburger.svg";

import NavbarCollapse from "../NavbarCollapse";
import Button from "../Button";
import Avatar from "../Avatar";
import Card from "../Card";
import {LogoText, TalkFinanceLabel, ScheduleCallLabel, Devon, UnlockScore, NavLinks } from "../../../config";

const Header: FC<{}> = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const clickHandler = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Navbar className="container-fluid navbar">
            <NavItem>
                <Logo logoLabel={LogoText}/>
            </NavItem>
            <NavbarCollapse isOpen={!collapsed} onClick={clickHandler}>
                <Nav lg={{ hidden: true }}>
                    {NavLinks.map((link) => (
                        <NavItem>
                            <NavLink href={link.href}>{link.label}</NavLink>
                        </NavItem>
                    ))}
                </Nav>
                <Nav sm={{ visible: true }}>
                    <NavItem>
                        <Card
                            heading={TalkFinanceLabel}
                            action={ScheduleCallLabel}
                            icon={MdClass}
                            iconConfig={{ color: "blue", className: "card__icon__box" }}
                        ></Card>
                    </NavItem>
                    <NavItem>
                        <Card
                            heading={Devon}
                            action={UnlockScore}
                            icon={MdDataUsage}
                            iconConfig={{ color: "grey", className: "card__icon__circle" }}
                        ></Card>
                    </NavItem>
                </Nav>
            </NavbarCollapse>
            <Nav md={{ hidden: true }} sm={{ hidden: true }}>
                {NavLinks.map((link) => (
                    <NavItem>
                        <NavLink href={link.href}>{link.label}</NavLink>
                    </NavItem>
                ))}
            </Nav>
            <Nav sm={{ hidden: true }} right>
                <NavItem>
                    <Avatar />
                </NavItem>
                <NavItem>
                    <Button>{ScheduleCallLabel}</Button>
                </NavItem>
            </Nav>
            <NavItem lg={{ hidden: true }}>
                <NavbarToggler icon={HamburgerSVG} onClick={clickHandler} collapsed={collapsed} />
            </NavItem>
        </Navbar>
    );
};

export default Header;
