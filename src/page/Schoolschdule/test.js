import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Scheapis from './Api'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Schoolschdule.scss';
function Scheapis() {
    const [sche, setSche] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchtime = async () => {
            try {
                setSche(null);
                setLoading(true);
                const response = await axios.get(`http://13.125.225.199:8001/api/school/neisAPI/schedule?year=2022&month=11`);
                console.log(response.data);
                setSche(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchtime();
    }, []);
    if (error) return <div>에러가 발생했습니다</div>;
    if (!sche) return null;
    return (
            <ul>
                {sche.map(index => (
                    <p key={index.id} className="spacing">
                        <b>
                        {index.day}
                        </b>
                    </p>
                ))}
            </ul>
    );
}
export default function DemoApp()  {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  let day = now.getDate()+1;
  let lastday;

  useEffect(() => {
    effect
    return () => {
      cleanup
    };
  }, [input]);

    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        eventContent={renderEventContent}
        viewClassNames='sf'
        id="sio"
        
      />
    )
}

function renderEventContent(eventInfo) {
  return (
    <>
      
    </>
  )
}