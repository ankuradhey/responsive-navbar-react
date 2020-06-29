import React from "react";
import "./Card.scss";
import Icon from "../Icon";
import { IconType } from "react-icons";

/**
 * @description Interface for Props
 * @param heading  Prop for card heading.
 * @param action Props for card action.
 * @param children Node children.
 */
interface Props {
    heading: string;
    action: string;
    children?: React.ReactNode;
    icon: IconType;
    iconConfig: Object;
}

/**
 * Logo Component
 */
const Card: React.FC<Props> = ({ heading, action, icon, iconConfig, children }: Props) => {
    return (
        <div className="card__container">
            <div className="card__container--header">
                <div className="card__icon">
                    <Icon Icon={icon} iconConfig={iconConfig} />
                </div>
                <div className="card__header">
                    <div className="card__header--heading">{heading}</div>
                    <div className="card__header--action">{action}</div>
                </div>
            </div>
            {children && <div className="card__container--content">{children}</div>}
        </div>
    );
};

export default Card;
