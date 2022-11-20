import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Mealapis() {
    const [meals, setMeals] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                setMeals(null);
                setLoading(true);
                const response = await axios.get('http://13.125.225.199:8002/api/school/neisAPI/timeline?grade=2&classs=2');
                setMeals(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchMeals();
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!meals) return null;
    return (
        <ul>
            {meals.map(meal => (
                <li key={meal.id}>
                    {meal.time} ({meal.study})
                </li>
            ))}
        </ul>
    );
}