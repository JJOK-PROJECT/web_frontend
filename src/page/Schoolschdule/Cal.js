import { useState } from 'react';
import moment from 'moment';
import './Cal.scss';
import Scheapis from './Api';
const Cal = () => {
    const [getMoment, setMoment] = useState(moment());
    const today = getMoment;
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    const calendarArr = () => {
        let result = [];
        let week = firstWeek;
        for (week; week <= lastWeek; week++) {
            result = result.concat(
                <tr key={week}>
                    {
                        Array(7).fill(0).map((data, index) => {
                            let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성
                            if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                                return (
                                    <td key={index} style={{ backgroundColor: 'lightgray'}} >
                                        <span>{days.format('D')}<Scheapis number={days}/></span>
                                    </td>
                                );
                            } else if (days.format('MM') !== today.format('MM')) {
                                return (
                                    <td key={index} style={{ opacity: 0.3, backgroundColor: 'lightgray' }} >
                                        <span>{days.format('D')}</span>
                                    </td>
                                );
                            } else {
                                return (
                                    <td key={index}  >
                                        <span>{days.format('D')}</span>
                                    </td>
                                );
                            }
                        })
                    }
                </tr>
            );
        }
        return result;
    }
    return (
        <div className="App">
            <div className="control">
                <button onClick={() => { setMoment(getMoment.clone().subtract(1, 'month')) }} className="prev">Prev</button>
                <span><b>{today.format('YYYY 년 MM 월')}</b></span>
                <button onClick={() => { setMoment(getMoment.clone().add(1, 'month')) }} className="next">Next</button>
            </div>
            <table>
                <tbody>
                    <div className='dayweek'>
                        <div><text>일요일</text></div>
                        <div><text>월요일</text></div>
                        <div><text>화요일</text></div>
                        <div><text>수요일</text></div>
                        <div><text>목요일</text></div>
                        <div><text>금요일</text></div>
                        <div><text>토요일</text></div>
                    </div>
                    {calendarArr()}
                </tbody>
            </table>
        </div>
    );
}
export default Cal;