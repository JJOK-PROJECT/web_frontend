import './Lunch.scss';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import List from "../../components/ListArticle/list.json";
import Lunchicon from "../../assets/icon/lunch.svg";
import Breakicon from "../../assets/icon/breakfast.svg";
import Dinnericon from "../../assets/icon/dinner.svg";
import Mealapis from './Api';
export default function Lunch() {
    let now = new Date();
    let year = now.getFullYear();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();
    year = year.toString();
    year = year.substr(2, 4);
    const [today, setToday] = useState(`${todayDate}`);
    const [tomonth, setTomonth] = useState(`${todayMonth}`);
    const [toyear, setToyear] = useState(`${year}`);
    function plusdate() {
        setToday(todayDate => Number(todayDate) + 1);
        console.log(today)
        console.log(tomonth)
        console.log(toyear)
        if (today > 29 && (tomonth == 11 || tomonth == 9 || tomonth == 6 || tomonth == 4)) {
            setToday(todayDate => Number(todayDate) * 0 + 1);
            setTomonth(todayMonth => Number(todayMonth) + 1);
            if (tomonth > 11) {
                setTomonth(todayMonth => Number(todayMonth) * 0 + 1);
                setToyear(toyear => Number(toyear) + 1);
            }
        }
        else if(tomonth == 2){
            if(toyear % 4 == 0){
                if(today > 28){
                setToday(todayDate => Number(todayDate) * 0 + 1);
                setTomonth(todayMonth => Number(todayMonth) + 1);
            }}
                else if(today > 27){
                    setToday(todayDate => Number(todayDate) * 0 + 1);
                    setTomonth(todayMonth => Number(todayMonth) + 1);
                }
        }
        else if(today > 30 && (tomonth == 12 || tomonth == 10 || tomonth == 8 || tomonth == 7 || tomonth == 5 || tomonth == 3 || tomonth == 1)) {
            setToday(todayDate => Number(todayDate) * 0 + 1);
            setTomonth(todayMonth => Number(todayMonth) + 1);
            if (tomonth > 11) {
                setTomonth(todayMonth => Number(todayMonth) * 0 + 1);
                setToyear(toyear => Number(toyear) + 1);
            }
        }
    }
    function minusdate() {
        setToday(todayDate => Number(todayDate) - 1);
        if (today < 2) {
            if (tomonth < 2) {
                setTomonth(todayMonth => Number(todayMonth) * 0 + 13);
                setToyear(toyear => Number(toyear) - 1);
            }
            if(tomonth == 12 || tomonth == 10 || tomonth == 7 || tomonth == 5){
                setToday(todayDate => Number(todayDate) * 0 + 30);
                setTomonth(todayMonth => Number(todayMonth) - 1);
            }
            else if(tomonth == 3){
                if(toyear % 4 == 0){
                    setToday(todayDate => Number(todayDate) * 0 + 29);
                    setTomonth(todayMonth => Number(todayMonth) - 1);
                }
                else {
                setToday(todayDate => Number(todayDate) * 0 + 28);
                setTomonth(todayMonth => Number(todayMonth) - 1);
                }
            }
            else {
                setToday(todayDate => Number(todayDate) * 0 + 31);
                setTomonth(todayMonth => Number(todayMonth) - 1);
            }
        }
    }
    let start = 'morning';
    let middle = 'lunch';
    let end = 'dinner';
    let [backs, setBacks] = useState('morning');
    function morning() {
        setBacks(start);
    }
    function lunch(){
        setBacks(middle);
    }
    function dinner() {
        setBacks(end);
    }
    return (
        <section className='Lunch-section'>
            <div className='Lunch-tit'>
                <div className='lunch-top'>
                    <div className='lunch-top-tit'>
                        <div className='annaemon'><img src={List.list[4].image}/></div>
                        <span>
                            <p>오늘의 급식을</p>
                            <p>확인하세요!</p>
                        </span>
                    </div>
                </div>
                <div className='lunch-bottom'>
                    <div className='lunch-bottom-tit'>
                        <div className='lunch-day'>
                            <span>{toyear}-{tomonth}-{today}</span>
                        </div>
                        <div className='lunch-bottom-bottom'>
                            <div className='lunch-bottom-time'>
                                <div className='lunch-time'>
                                    <button onClick={morning} className={"btn" + (backs == 'morning' ? " active" : "")}>
                                        <img src={Breakicon}/>
                                    </button>
                                    <button onClick={lunch} className={"cc" + (backs == 'lunch' ? " active" : "")}>
                                        <img src={Lunchicon}/>
                                    </button>
                                    <button onClick={dinner} className={"dinner" + (backs == 'dinner' ? " active" : "")}>
                                        <img src={Dinnericon}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='lunch-bottom-menu'>
                            <div className='lunch-bottom-menu-musa'>
                                <div className='lunch-bottom-menu-button'>
                                    <button onClick={minusdate}>
                                        <img src='https://ifh.cc/g/m7tztq.png' />
                                    </button>
                                </div>
                                <div className='lunch-bottom-menu-menu'>
                                    <Mealapis year={toyear} month={tomonth} days={today} judge={backs} />                          
                                </div>
                                <div className='lunch-bottom-menu-button'>
                                    <button onClick={plusdate}>
                                        <img src='https://ifh.cc/g/2v62hD.png' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}