import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Schoolschdule.scss';
export default function Scheapis() {
    const [sche, setSche] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const fuk = 0;
    useEffect(() => {
        const fetchsche = async () => {
            try {
                setSche([]);
                setLoading(true);
                const response = await axios.get(`http://13.125.225.199:8001/api/school/neisAPI/schedule?year=2022&month=11`);
                console.log(response.data.Schedule_Day);
                setSche(response.data.Schedule_Day);
            } catch (e) {
                setError(e);
                console.log(e);
            }
            setLoading(false);
        }; 
        fetchsche();
    }, []);
    if (error) return <div>에러가 발생했습니다</div>;
    if (!sche) return null;
    return (
        <>
            {sche.map(sch => (
                <p key={sch.id} className="spacing">
                    <b>
                        {sch.fuk}
                    </b>
                </p>
            ))}
        </>
    );
}