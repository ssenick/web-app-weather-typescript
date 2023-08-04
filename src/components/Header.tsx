import React, {JSX} from 'react';
import './index.scss'
const Header = ():JSX.Element => {
   return (
      <header className='header'>
         <h1 className="header__title">
            Weather <span>Forecast</span>
         </h1 >
         <p className="header__desc">
            Enter below a place you want to know the weather of and select an option
            from dropdown
         </p>
      </header>
   );
};

export default Header;