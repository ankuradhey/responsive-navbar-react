import React from 'react';

interface Props {
    icon: string;
}
/**
 * Icon Component
 */
const Icon: React.FC<Props> = ({icon}:Props) => {
    return (
      <>
        {icon}
      </>
    );
};
export default Icon;
