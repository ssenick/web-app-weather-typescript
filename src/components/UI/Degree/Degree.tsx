import React, {FC} from 'react';

type DegreeProps = {
    temp: number
}

const Degree:FC<DegreeProps> = ({temp}) => {
    return (
        <span>{temp}<sup >o</sup></span>
    );
};

export default Degree;