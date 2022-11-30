import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import Scheapis from './Api'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Schoolschdule.scss';

export default function DemoApp() {
    const now = new Date();
    const [year, setYear] = useState(`${now.getFullYear()}`);
    const [month, setMonth] = useState(`${now.getMonth() + 1}`)
    const [cal, setCal] = useState([]);
    useEffect(()=>{
        (async()=>{
            try{
                const response = (await axios.get(`http://13.125.225.199:8001/api/school/neisAPI/schedule?year=${year}&month=${month}`)).data
                const newArray = [];
                for(let i=0;i<response.length;i++){
                    if(response[i].day === "일정 없는 날") continue;
                    const date = year.toString() + "-" + month.toString().padStart(2, "0") + "-" + (i+1).toString().padStart(2, "0")
                    const newObj = {
                        title: response[i].day,
                        start: date,
                        end: date,
                    }
                    newArray.push(newObj)
                }
                setCal(newArray)
            }catch(error){
                console.log('error')
            }
        })();
    }, [year, month])
    function handlei(e) {
        console.log(e);
        var chanye = parseInt(e.startStr.substr(0, 4));
        if(year != chanye){
            var chan = parseInt(e.startStr.substr(5, 2));
            chan = '0' + chan;
            setMonth(chan);
            setYear(chanye);
        }
        else {var chan = parseInt(e.startStr.substr(5, 2)) + 1;
            if(chan <= 10) chan = '0' + chan;
            setMonth(chan);
            setYear(chanye);
        }
    }
    return (
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            editable={true}
            viewClassNames='sf'
            id="sio"
            events={cal}
            initialView={"dayGridMonth"}
            eventTextColor={'#FFF'}
            eventDisplay={'block'}
            datesSet={handlei}
        />
    )
}
