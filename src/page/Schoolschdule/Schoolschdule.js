import './Schoolschdule.scss';
import List from '../../components/ListArticle/list.json';
import SchduleDiv from '../../components/SchduleDiv/SchduleDiv';
import SchduleData from './schdule.json';
function Schoolschdule() {
    return (
        <section className='Schdule-section'>
            <div className='Schdule-tit'>
                <div className='Schdule-top'>
                    <div className='Schdule-top-tit'>
                        <div className='annaemon'><img src={List.list[6].image} /></div>
                        <span>
                            <p>학교 일정에 대해</p>
                            <p>확인해보세요!</p>
                        </span>
                    </div>
                </div>
                <div className='Schdule-bottom'>
                    <div className='Schdule-one'>
                        <SchduleDiv
                            schdule = {SchduleData}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Schoolschdule;