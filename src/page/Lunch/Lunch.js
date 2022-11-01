import './Lunch.scss';
import { useState } from 'react';
import List from "../../components/ListArticle/list.json";
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
                                        <span>🌞</span>
                                    </button>
                                    <button>
                                        <span>💝</span>
                                    </button>
                                    <button>
                                        <span>🌞</span>
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