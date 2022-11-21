import React from 'react';
import Mealapis from './Api';
import { useState } from 'react';
import './Timetable.scss';
import List from "../../components/ListArticle/list.json";
export default function Timetable() {
    const grade = ["1학년", "2학년"];
    const classes = ["1반", "2반", "3반", "4반"];
    const [grades, setGrades] = useState("1학년");
    const [classed, setClassed] = useState("1반");
    function handlegrade(e) {
        setGrades(e.target.value);
    }
    function handleclass(e) {
        setClassed(e.target.value);
    }
    return(
        <section className='Time-section'>
            <div className='Time-tit'>
                <div className='Time-top'>
                    <div className='Time-top-tit'>
                        <div className='annaemon'><img src={List.list[1].image} /></div>
                        <span>
                            <p>오늘의 시간표를</p>
                            <p>확인하세요!</p>
                        </span>
                    </div>
                </div>
                <div className='classbox'>
                    <select onChange={handlegrade} value={grades} className="graded">
                        {grade.map((item) => (
                            <option value={item} key={item} className="hovers">
                                {item}
                            </option>
                        ))}
                    </select>
                    <select onChange={handleclass} value={classed} className="classed">
                        {classes.map((item) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <Mealapis grade={grades} classing={classed}/>
            </div>
        </section>
    );
}