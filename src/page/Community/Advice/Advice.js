import './Advice.scss';
import CommunNav from '../../../components/CommunNav/CommunNav';
import List from "../../../components/ListArticle/list.json";
import Cmunone from '../../../components/Cmunone/Cmunone';
import FeedData from '../feedlist.json';
export default function Advice() {
    const n = FeedData.data.isNotice;

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
                        { n === 0 ?
                        <div className='Advice-bottom-cmunone'>
                            {FeedData.data.map(f => (
                                <Cmunone
                                    id={f.id}
                                    uid={f.uid}
                                    title={f.title}
                                    contact={f.contact}
                                    heart={f.heart}
                                    userName={f.userName}
                                    upload_date={f.upload_date}
                                    isNotice={f.isNotice}
                                    isPrivate={f.isPrivate}
                                    isHot={f.isHot}

                                />
                            ))}
                        </div>
                            :
                            <></>
                            }
                    </div>
                </div>
            </section>
        </>
    )
}