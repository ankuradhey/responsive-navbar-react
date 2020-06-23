export { default } from "./NavItem";

export interface NavItemProp {
    left?: boolean;
    children: JSX.Element;
    lg?: { hidden: boolean };
}
