import React, {JSX} from 'react';

const Header = ():JSX.Element => {
   return (
      <header className='text-center'>
         <h1 className="text-4xl font-thin">
            Weather <span className="font-black">Forecast</span>
         </h1 >
         <p className="text-sm mt-2">
            Enter below a place you want to know the weather of and select an option
            from dropdown
         </p>
      </header>
   );
};

export default Header;