import React, {FC} from 'react';
import { DataForecast, GlobalOption} from "../../type";
import {Loader} from "../index";
import s from './Search.module.scss'

const Search: FC<DataForecast> = (data) => {
    const {
        term,
        onChangeCity,
        errorOptions,
        errorAllData,
        isLoadingOptions,
        onSubmitHandler,
        city,
        options,
        setOption,
        isLoadingAllData
    } = data

    return (
        <div onClick={e => e.stopPropagation()} className={s.search}>
            <div className={s.search__wrapper}>
                <div className={s.search__input}>
                    <input
                        type="text"
                        value={term}
                        onChange={onChangeCity}
                    />
                    {(errorOptions || errorAllData ) &&
                       <div className={s.search__error}>Error: <span>{errorOptions || errorAllData}</span></div>
                    }
                    {(isLoadingOptions || isLoadingAllData) &&
                       <div className={s.search__loader}>
                          <Loader w='20px' h='20px'/>
                       </div>
                    }
                </div>
                <button onClick={onSubmitHandler} disabled={!city} className={s.search__button}>Search</button>
                <ul className={s.search__options}>
                    {options.map((elem: GlobalOption) =>
                        <li key={`${elem.lat}${elem.lon}`} className={s.search__option}>
                            <button onClick={() => setOption(elem)}>{elem.name}, {elem.country}</button>
                        </li>)}
                </ul>
            </div>
        </div>

    );
};

export default Search;

