import React from 'react';
import Mealapis from './Api';
import { useState } from 'react';
import './Timetable.scss';
import List from "../../components/ListArticle/list.json";
export default function Timetable() {
    const grade = ["1", "2"];
    const classes = ["1", "2", "3", "4"];
    const [grades, setGrades] = useState("1");
    const [classed, setClassed] = useState("1");
    function handlegrade(e) {
        setGrades(e.target.value);
    }
    function handleclass(e) {
        setClassed(e.target.value);
    }
    return (
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
                                {item}학년
                            </option>
                        ))}
                    </select>
                    <select onChange={handleclass} value={classed} className="classed">
                        {classes.map((item) => (
                            <option value={item} key={item}>
                                {item}반
                            </option>
                        ))}
                    </select>
                </div>
                <div className='time-box'>
                    <div className='time'>
                        <h2>1교시</h2>
                        <h2>2교시</h2>
                        <h2>3교시</h2>
                        <h2>4교시</h2>
                        <h2>5교시</h2>
                        <h2>6교시</h2>
                        <h2>7교시</h2>
                    </div>
                    <div className='classing'>
                        <Mealapis grade={grades} classing={classed} />
                    </div>
                </div>
            </div>
        </section>
    );
}