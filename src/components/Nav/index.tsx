export { default } from "./Nav";

export interface NavProps {
    lg?: { hidden?: boolean };
    md?: { hidden?: boolean };
    sm?: { hidden?: boolean };
    left?: boolean;
    right?: boolean;
}
