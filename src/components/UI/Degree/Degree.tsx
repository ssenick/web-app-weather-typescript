import React, {FC} from 'react';

type Props = {
    temp: number
}

const Degree:FC<Props> = ({temp}) => {
    return (
        <span>{temp}<sup >o</sup></span>
    );
};

export default Degree;