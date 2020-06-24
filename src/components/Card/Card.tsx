import React from 'react';
import './Card.scss';

/**
 * @description Interface for Props
 * @param heading  Prop for card heading.
 * @param action Props for card action.
 * @param children Node children.
 */
interface Props {
    heading: string;
    action: string;
    children: React.ReactNode
}

/**
 * Logo Component
 */
const Card:React.FC<Props> = ({heading, action, children}:Props) => {
    return (
      <div className="card__container">
        <div className="card__icon">
          {children}
        </div>
        <div className="card__content">
            <div className="card__content--heading">
                {heading}
            </div>
            <div className="card__content--action">
                {action}
            </div>
        </div>
      </div>
    );
};

export default Card;