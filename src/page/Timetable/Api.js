import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Timetable.scss';
export default function Mealapis({ grade, classing }) {
    const [meals, setMeals] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                setMeals(null);
                setLoading(true);
                const response = await axios.get(`http://13.125.225.199:8002/api/school/neisAPI/timeline?grade=${grade}&classs=${classing}`);
                setMeals(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchMeals();
    }, [grade, classing]);
    if (error) return <div>에러가 발생했습니다</div>;
    if (!meals) return null;
    return (
        <div className='infadein'>
            <ul>
                {meals.map(meal => (
                    <p key={meal.id} className="spacing">
                        <b>
                        {meal.study}
                        </b>
                    </p>
                ))}
            </ul>
        </div>
    );
}