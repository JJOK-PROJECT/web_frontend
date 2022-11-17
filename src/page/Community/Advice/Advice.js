import './Advice.scss';
import CommunNav from '../../../components/CommunNav/CommunNav';
import List from "../../../components/ListArticle/list.json";
import Cmunone from '../../../components/Cmunone/Cmunone';
import AdviceData from './Advice.json';
export default function Advice() {
    return (
        <>
            <section className='Advice-section'>
                <CommunNav />
                <div className='Advice-tit'>
                    <div className='Advice-top'>
                        <div className='Advice-top-tit'>
                            <div className='annaemon'><img src={List.list[3].image} /></div>
                            <span>
                                <p>선배들에게</p>
                                <p>다양한 조언을 얻어보세요!</p>
                            </span>
                        </div>
                    </div>
                    <div className='Advice-bottom'>
                        <div className='Advice-bottom-cmunone'>
                            {AdviceData.data.map(d => (
                                <Cmunone
                                    id={d.id}
                                    uid={d.uid}
                                    title={d.title}
                                    contact={d.contact}
                                    heart={d.heart}
                                    userName={d.userName}
                                    upload_date={d.upload_date}
                                    isNotice={d.isNotice}
                                    isPrivate={d.isPrivate}
                                    isHot={d.isHot}

                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}