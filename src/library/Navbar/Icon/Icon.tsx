import React from 'react';
import { IconContext, IconType } from "react-icons";

interface Props {
    Icon: IconType;
    iconConfig: Object
}
/**
 * Icon Component
 */
const Icon: React.FC<Props> = ({Icon,iconConfig}:Props) => {
    return (
      <IconContext.Provider value={iconConfig}>
        <Icon />
      </IconContext.Provider>
    );
};
export default Icon;
