import React from 'react';
import Mealapis from './Api';
import './Timetable.scss';
import List from "../../components/ListArticle/list.json";
export default function Timetable() {
    return(
        <section className='Time-section'>
            <div className='Time-tit'>
                <div className='lunch-top'>
                    <div className='lunch-top-tit'>
                        <div className='annaemon'><img src={List.list[4].image} /></div>
                        <span>
                            <p>오늘의 시간표를</p>
                            <p>확인하세요!</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}