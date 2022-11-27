import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Mealapis({year, month, days, judge}) {
    const [dayse, setDayse]  = useState(null);
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    let number = 0;
    useEffect(() => {
        const fetchtime = async () => {
            try {
                setMeal(null);
                setLoading(true);
                setDayse(days);
                const response = await axios.get(`http://13.125.225.199:8000/api/school/neisAPI/meal?year=20${year}&month=${month}`);
                console.log(response.data.School_Meal);
                setMeal(response.data.School_Meal);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchtime();
    }, [year, month, days]);
    if (error) return <div>에러가 발생했습니다</div>;
    if (!meal) return null;
    return (
        <div className='infadein'>
            <ul>
                {meal.map(value => (
                    <p key={value.days} className="spacing">
                        {value.day.number}
                    </p>
                ))}
            </ul>
        </div>
    );
} 