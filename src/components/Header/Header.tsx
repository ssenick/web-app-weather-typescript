import React, {FC, memo} from 'react';
import './Header.scss'

const Header: FC = memo(
    () => {
        return (
            <header className='header'>
                <h1 className="header__title">
                    Weather <span>Forecast</span>
                </h1>
                <p className="header__desc">
                    Enter below a place you want to know the weather of and select an option
                    from dropdown
                </p>
            </header>
        );
    }
)

export default Header;