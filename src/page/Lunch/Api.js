import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Lunch.scss'
export default function Mealapis({year, month, days, judge}) {
    const [dayse, setDayse]  = useState(null);
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [rm, setRm] = useState('Loading....');
    let fridaye = "저녁 없는 날"
    let mealList = new Array();
    let jinmeal = new Array();
    let judging = 0;
    useEffect(() => {
        const fetchtime = async () => {
            try {
                setMeal(null);
                setLoading(true);
                setDayse(days);
                const response = await axios.get(`http://13.125.225.199:8000/api/school/neisAPI/meal?year=20${year}&month=${month}`);
                mealList = response.data.School_Meal;
                jinmeal = mealList[days-1].day;
                if(judge == 'morning') judging = 0;
                else if(judge == 'lunch') judging = 1;
                else judging = 2;
                console.log(jinmeal);
                console.log(judge);
                console.log(jinmeal[judging]);
                console.log(mealList[days-1]);
                jinmeal = jinmeal[judging];
                if(judging == 0) jinmeal = jinmeal.조식
                else if(judging == 1) jinmeal = jinmeal.중식
                else jinmeal = jinmeal.석식
                console.log(jinmeal);
                setRm(jinmeal);
                if(jinmeal == ")") {
                    setRm(fridaye);
                }
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchtime();
    }, [year, month, days, judge]);
    if (error) return <div>에러가 발생했습니다</div>;
    return (
        <div className='infadein'>
            {rm}
        </div>
    );
} 