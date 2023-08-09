import React, {FC, memo} from 'react';
import Degree from "../UI/Degree/Degree";
import './Forecast.scss'
import Sunrise from "../Icons/Sunrise";
import Sunset from "../Icons/Sunset";
import Card from "../Card/Card";
import {AllData} from "../../type";
import {getDate} from "../../helpers";



const Forecast:FC<AllData> = memo((data) => {
    const today = data.weather
    const forecast = data.forecast
    const icon = data.forecast.list[0].weather[0].icon
    return (
        <div className='forecast'>
            <section className="forecast__header">
                <h2 className="forecast__title">{today.name} <span>{today.sys.country}</span></h2>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
                <div className="forecast__temp">{Math.round(today.main.temp)}</div>
                <p className="forecast__weather">{today.weather[0].main}, {today.weather[0].description}</p>
                <div className="forecast__temperature-range">
                    <p className="forecast__high-temp">H: <span><Degree temp={Math.ceil(today.main.temp_max)}/></span></p>
                    <p className="forecast__low-temp">L: <span><Degree temp={Math.floor(today.main.temp_min)}/></span></p>
                </div>
            </section>
            <section className="forecast__days days">
                <ul className="days__list">
                    {forecast.list.map((el,index) =>
                        <li key={el.dt_txt} className="days__item">
                            <div className="days__time">{index === 0 ? 'Now' : getDate(el.dt_txt)}</div>
                            <img className="days__icon" src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} alt=""/>
                            <div className="days__temp"><Degree temp={Math.round(el.main.temp)}/></div>
                        </li>
                    )}


                </ul>
            </section>
            <section className="forecast__sun-time sun-time">
                <div className="sun-time__item">
                    <Sunrise/>
                    <p className="sun-time__time">07:00</p>
                </div>
                <div className="sun-time__item">
                    <Sunset/>
                    <p className="sun-time__time">18:00</p>
                </div>
            </section>
            <section className="forecast__cards cards">
                <Card icon='wind' title='Wind' info='asd' description='asdasdsa' />
            </section>
        </div>
    );
});

export default Forecast;