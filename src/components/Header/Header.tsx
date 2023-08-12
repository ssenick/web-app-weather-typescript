import React, {FC, memo} from 'react';
import s from './Header.module.scss'

const Header: FC = memo(
    () => {
        return (
            <header className={s.header}>
                <h1 className={s.header__title}>
                    Weather <span>Forecast</span>
                </h1>
                <p className={s.header__desc}>
                    Enter below a place you want to know the weather of and select an option
                    from dropdown
                </p>
            </header>
        );
    }
)

export default Header;