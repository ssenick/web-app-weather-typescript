import React, {FC, memo} from 'react';
import Degree from "../UI/Degree/Degree";
import './Forecast.scss'
import Sunrise from "../Icons/Sunrise";
import Sunset from "../Icons/Sunset";
import {AllData} from "../../type";
import {
    getDate,
    getFeelsLikeText,
    getHumidityValue,
    getPop,
    getSunTime,
    getVisibilityValue,
    getWindDirection
} from "../../helpers";
import Card from "../Card/Card";



const Forecast:FC<AllData> = memo((data) => {
    const today = data.weather
    const forecast = data.forecast
    const icon = data.forecast.list[0].weather[0].icon

    return (
        <div className='forecast'>
            <section className="forecast__header">
                <h1>{new Date(today.dt * 1000).getHours()}</h1>
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
                    <p className="sun-time__time">{getSunTime(today.sys.sunrise)}</p>
                </div>
                <div className="sun-time__item">
                    <Sunset/>
                    <p className="sun-time__time">{getSunTime(today.sys.sunset)}</p>
                </div>
            </section>
            <section className="forecast__cards cards">
                <Card
                    icon='wind'
                    title='Wind'
                    info={`${Math.round(today.wind.speed)} km/h`}
                    description={`${getWindDirection(today.wind.deg)}, gusts ${Math.round(today.wind.gust)} km/h`} />
                <Card
                    icon='feels'
                    title='Feels like'
                    info={<Degree temp={Math.round(today.main.feels_like)}/>}
                    description={getFeelsLikeText(Math.round(today.main.temp), Math.round(today.main.feels_like))} />
                <Card
                    icon='humidity'
                    title='Humidity'
                    info={`${Math.round(today.main.humidity)} %`}
                    description={getHumidityValue(today.main.humidity)} />
                <Card
                    icon='visibility'
                    title='Visibility'
                    info={`${Math.round(today.visibility) / 1000} km`}
                    description={`${getVisibilityValue(today.visibility)}`} />
                <Card
                    icon='pressure'
                    title='Pressure'
                    info={`${today.main.pressure} hPa`}
                    description={`${
                        Math.round(today.main.pressure) < 1013 ? 'Lower' : 'Higher'
                    } than standard`} />
                <Card
                    icon='pop'
                    title='Precipitation'
                    info={`${forecast.list[0].pop} %`}
                    description={`${getPop(forecast.list[0].pop)}, clouds at ${today.clouds.all}% `} />
            </section>
        </div>
    );
});

export default Forecast;