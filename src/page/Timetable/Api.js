import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Timetable.scss';
export default function Timeapis({ grade, classing }) {
    const [time, setTime] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchtime = async () => {
            try {
                setTime(null);
                setLoading(true);
                const response = await axios.get(`http://13.125.225.199:8002/api/school/neisAPI/timeline?grade=${grade}&classs=${classing}`);
                console.log(response.data);
                setTime(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchtime();
    }, [grade, classing]);
    if (error) return <div>에러가 발생했습니다</div>;
    if (!time) return null;
    return (
        <div className='infadein'>
            <ul>
                {time.map(meal => (
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