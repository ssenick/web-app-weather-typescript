import React, {FC} from 'react';
import s from './Loader.module.scss'

interface Props {
    w?:string,
    h?:string
}

const Loader:FC<Props> = ({w,h}) => {
    return (
        <span style={{width:w,height:h}}  className={s.loader}></span>
    );
};

export default Loader;