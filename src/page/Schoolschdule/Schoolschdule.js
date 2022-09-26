import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Schoolschdule.scss';
export default function Schoolsch(){
    const [value, onChange] = useState(new Date());
    return(
        <div className='Calendar_tit'>
            <Calendar onChange={onChange} value={value} />
        </div>
    )
}