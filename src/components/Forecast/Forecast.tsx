import React, {FC, memo} from 'react';
import {AllData} from "../../type";
import {Card, Degree} from "../index";
import {Sunrise, Sunset} from "../Icons";
import {
    getDayDate,
    getFeelsLikeText,
    getHumidityValue,
    getPop,
    getSunTime,
    getVisibilityValue,
    getWindDirection
} from "../../helpers";
import s from './Forecast.module.scss'
import card from '../Card/Card.module.scss'


interface ForecastProps {
    cityData: {
        name: string,
        country: string
    }
    data: AllData
}

const Forecast: FC<ForecastProps> = memo((props) => {
    // Rain, Clouds, Clear ,
    const {cityData, data} = props;
    const icon = data.daily[0].weather[0].icon
    console.log(data.daily[0].weather[0].main)
    return (
        <div className={s.forecast}>
            <section className={s.forecast__header}>
                <h2 className={s.forecast__title}>{cityData.name} <span>{cityData.country}</span></h2>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
                <div className={s.forecast__temp}>{Math.round(data.current.temp)}</div>
                <p className={s.forecast__weather}>{data.daily[0].weather[0].main}, {data.daily[0].weather[0].description}</p>
                <div className={s.forecast__temperatureRange}>
                    <p className={s.forecast__highTemp}>H: <span><Degree
                        temp={Math.ceil(data.daily[0].temp.max)}/></span></p>
                    <p className={s.forecast__lowTemp}>L: <span><Degree
                        temp={Math.floor(data.daily[0].temp.min)}/></span></p>
                </div>
            </section>
            <section className={`${s.forecast__days} ${s.days}`}>
                <ul className={s.days__list}>
                    {data.daily.map((el, index) =>
                        <li key={el.dt} className={s.days__item}>
                            <div className={s.days__time}>{index === 0 ? 'Today' : `${getDayDate(el.dt)}`}</div>
                            <img className={s.days__icon}
                                 src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} alt="picture whether "/>
                            <div className={s.days__temp}><Degree temp={Math.round(el.temp.day)}/></div>
                        </li>
                    )}

                </ul>
            </section>
            <section className={s.sunTime}>
                <div className={s.sunTime__item}>
                    <Sunrise/>
                    <p className={s.sunTime__time}>{getSunTime({
                        timestamp: data.current.sunrise,
                        timeZone: data.timezone
                    })}</p>
                </div>
                <div className={s.sunTime__item}>
                    <Sunset/>
                    <p className={s.sunTime__time}>{getSunTime({
                        timestamp: data.current.sunset,
                        timeZone: data.timezone
                    })}</p>
                </div>
            </section>
            <section className={card.cards}>
                <Card
                    icon='wind'
                    title='Wind'
                    info={`${Math.round(data.current.wind_speed)} km/h`}
                    description={`${getWindDirection(data.current.wind_deg)}, gusts ${Math.round(data.current.wind_gust)} km/h`}/>
                <Card
                    icon='feels'
                    title='Feels like'
                    info={<Degree temp={Math.round(data.current.feels_like)}/>}
                    description={getFeelsLikeText(Math.round(data.current.temp), Math.round(data.current.feels_like))}/>
                <Card
                    icon='pressure'
                    title='Pressure'
                    info={`${data.current.pressure} hPa`}
                    description={`${
                        Math.round(data.current.pressure) < 1013 ? 'Lower' : 'Higher'
                    } than standard`}/>
                <Card
                    icon='visibility'
                    title='Visibility'
                    info={`${Math.round(data.current.visibility) / 1000} km`}
                    description={`${getVisibilityValue(data.current.visibility)}`}/>

                <Card
                    icon='humidity'
                    title='Humidity'
                    info={`${Math.round(data.current.humidity)} %`}
                    description={getHumidityValue(data.current.humidity)}/>
                <Card
                    icon='pop'
                    title='Precipitation'
                    info={`${Math.round(data.daily[0].pop * 100)} %`}
                    description={`${getPop(data.daily[0].pop)}, clouds at ${data.current.clouds}% `}/>
            </section>
        </div>
    );
});

export default Forecast;