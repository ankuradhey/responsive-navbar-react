import React, { useState } from "react";
import { MdClass, MdDataUsage } from "react-icons/md";
import HamburgerSVG from "./hamburger.svg";
import CloseSVG from "./close.svg";
import {
    Logo,
    Navbar,
    NavItem,
    Nav,
    NavLink,
    NavbarToggler,
    NavbarCollapse,
    Button,
    Avatar,
    Card,
} from "./components";
import {
    LogoText,
    TalkFinanceLabel,
    ScheduleCallLabel,
    Devon,
    UnlockScore,
    NavLinks,
    ProfileLinks,
} from "./config";

const App = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const clickHandler = () => {
        console.log(collapsed);
        setCollapsed(!collapsed);
    };

    return (
        <div className="App">
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
                    <Nav lg={{ hidden: true }}>
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
                            >
                                {ProfileLinks.map((link) => (
                                    <NavItem>
                                        <NavLink href={link.href}>{link.label}</NavLink>
                                    </NavItem>
                                ))}
                            </Card>
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
                    <NavbarToggler
                        icon={HamburgerSVG}
                        onClick={clickHandler}
                        collapsed={collapsed}
                    />
                </NavItem>
            </Navbar>
        </div>
    );
};

export default App;
