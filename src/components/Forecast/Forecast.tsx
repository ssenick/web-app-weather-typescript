import React from 'react';
import Degree from "../UI/Degree/Degree";
import './Forecast.scss'

const Forecast = () => {
    const number = 21;
    return (
        <div className='forecast'>
            <section className="forecast__header">
                <h2 className="forecast__title">London <span>GB</span></h2>
                <img src={`http://openweathermap.org/img/wn/04d@2x.png`} alt=""/>
                <div className="forecast__temp">24</div>
                <p className="forecast__weather">Smoke</p>
                <div className="forecast__temperature-range">
                    <p className="forecast__high-temp">H: <span><Degree temp={number}/></span></p>
                    <p className="forecast__low-temp">L: <span><Degree temp={number}/></span></p>
                </div>
            </section>
            <section className="forecast__main ">
                <div className="days">
                    <ul className="days__list">
                        <li className="days__item">
                            <div className="days__time">19</div>
                            <img className="days__icon" src={`http://openweathermap.org/img/wn/04d@2x.png`} alt=""/>
                            <div className="days__temp">23</div>
                        </li>
                        <li className="days__item">
                            <div className="days__time">19</div>
                            <img className="days__icon" src={`http://openweathermap.org/img/wn/04d@2x.png`} alt=""/>
                            <div className="days__temp">23</div>
                        </li>
                        <li className="days__item">
                            <div className="days__time">19</div>
                            <img className="days__icon" src={`http://openweathermap.org/img/wn/04d@2x.png`} alt=""/>
                            <div className="days__temp">23</div>
                        </li>
                        <li className="days__item">
                            <div className="days__time">19</div>
                            <img className="days__icon" src={`http://openweathermap.org/img/wn/04d@2x.png`} alt=""/>
                            <div className="days__temp">23</div>
                        </li>
                        <li className="days__item">
                            <div className="days__time">19</div>
                            <img className="days__icon" src={`http://openweathermap.org/img/wn/04d@2x.png`} alt=""/>
                            <div className="days__temp">23</div>
                        </li>
                        <li className="days__item">
                            <div className="days__time">19</div>
                            <img className="days__icon" src={`http://openweathermap.org/img/wn/04d@2x.png`} alt=""/>
                            <div className="days__temp">23</div>
                        </li>
                        <li className="days__item">
                            <div className="days__time">19</div>
                            <img className="days__icon" src={`http://openweathermap.org/img/wn/04d@2x.png`} alt=""/>
                            <div className="days__temp">23</div>
                        </li>
                        <li className="days__item">
                            <div className="days__time">19</div>
                            <img className="days__icon" src={`http://openweathermap.org/img/wn/04d@2x.png`} alt=""/>
                            <div className="days__temp">23</div>
                        </li>
                        <li className="days__item">
                            <div className="days__time">19</div>
                            <img className="days__icon" src={`http://openweathermap.org/img/wn/04d@2x.png`} alt=""/>
                            <div className="days__temp">23</div>
                        </li>

                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Forecast;