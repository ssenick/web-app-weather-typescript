import React, {FC} from 'react';
import './Loader.scss'
interface Props {
    w?:string,
    h?:string
}


const Loader:FC<Props> = ({w,h}) => {
    return (
        <span style={{width:w,height:h}}  className='loader'></span>
    );
};

export default Loader;