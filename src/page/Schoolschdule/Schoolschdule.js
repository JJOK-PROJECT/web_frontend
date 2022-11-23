import './Schoolschdule.scss';
import List from '../../components/ListArticle/list.json';
import SchduleDiv from '../../components/SchduleDiv/SchduleDiv';
import SchduleData from './schdule.json';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Datepicker, { registerLocale } from 'react-datepicker';
import Cal from './Cal';
import Test from './test'


function Schoolschdule() {
    const [value, onChange] = useState(new Date());
    const [mark, setMark] = useState([]);
    const handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
    }
    return (
        <section className='Schdule-section'>
            <div className='Schdule-tit'>
                <div className='Schdule-top'>
                    <div className='Schdule-top-tit'>
                        <div className='annaemon'><img src={List.list[6].image} /></div>
                        <span>
                            <p>학교 일정에 대해</p>
                            <p>확인해보세요!</p>
                        </span>
                    </div>
                </div>
                <div>
                    <Test/>
                </div>
            </div>
        </section>
    )
}
export default Schoolschdule;