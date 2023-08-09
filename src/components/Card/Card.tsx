import React, {FC,JSX} from 'react';
import Wind from "../Icons/Wind";
import Feels from "../Icons/Feels";
import Humidity from "../Icons/Humidity";
import Visibility from "../Icons/Visibility";
import Pressure from "../Icons/Pressure";
import Pop from "../Icons/Pop";
import './Card.scss'

interface Props  {
   icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop'
   title: string
   info: string | JSX.Element
   description?: string | JSX.Element
}

const icons = {
    wind: Wind,
    feels: Feels,
    humidity: Humidity,
    visibility: Visibility,
    pressure: Pressure,
    pop: Pop,
}

const Card:FC<Props> = ({icon,title,info,description}) => {
    const Icon = icons[icon]

   return (
      <article className='card'>
         <div className="card__title">
            <Icon/>
            <span>{title}</span>
         </div>
         <div className="card__value">
             {info}
         </div>
         <div className='card__description'>
             {description}
         </div>
      </article>
   );
};

export default Card;