import './Lunch.scss';
import { useState } from 'react';
import List from "../../components/ListArticle/list.json";
import Lunchicon from "../../assets/icon/lunch.svg";
import Breakicon from "../../assets/icon/breakfast.svg";
import Dinnericon from "../../assets/icon/dinner.svg";
export default function Lunch() {
    const [tab,setTab] = useState('curr');
    return (
        <section className='Lunch-section'>
            <div className='Lunch-tit'>
                <div className='lunch-top'>
                    <div className='lunch-top-tit'>
                        <div className='annaemon'><img src={List.list[4].image} /></div>
                        <span>
                            <p>오늘의 급식을</p>
                            <p>확인하세요!</p>
                        </span>
                    </div>
                </div>
                <div className='lunch-bottom'>
                    <div className='lunch-bottom-tit'>
                        <div className='lunch-day'>
                            <span>22-01-30</span>
                        </div>
                        <div className='lunch-bottom-bottom'>
                            <div className='lunch-bottom-time'>
                                <div className='lunch-time'>
                                    <button>
                                        <img src={Breakicon}/>
                                    </button>
                                    <button>
                                        <img src={Lunchicon}/>
                                    </button>
                                    <button>
                                        <img src={Dinnericon}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='lunch-bottom-menu'>
                            <div className='lunch-bottom-menu-musa'>
                                <div className='lunch-bottom-menu-button'>
                                    <button>
                                        <img src='https://ifh.cc/g/m7tztq.png'/>
                                    </button>
                                </div>
                                <div className='lunch-bottom-menu-menu'>
                                    <p><span>감자</span></p>
                                    <p><span>핫도그</span></p>
                                    <p><span>우거지국</span></p>
                                    <p><span>감자</span></p>
                                    <p><span>우거지국</span></p>
                                    <p><span>감자</span></p>
                                    <p><span>우거지국</span></p>
                                </div>
                                <div className='lunch-bottom-menu-button'>
                                    <button>
                                        <img src='https://ifh.cc/g/2v62hD.png'/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}