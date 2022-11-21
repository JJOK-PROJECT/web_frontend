import './Anonym.scss';
import CommunNav from '../../../components/CommunNav/CommunNav';
import List from "../../../components/ListArticle/list.json";
import Cmunone from '../../../components/Cmunone/Cmunone';
import React, { useState, useEffect } from "react";
import axios from 'axios';
function Anonym() {

    useEffect(() => {
        axios.get("http://13.125.225.199:8003/all_contect")
            .then((response) => console.log(response.data));
    }, []);


    console.log(useEffect.data);
    return (
        <>
            <section className='Anonym-section'>
                <CommunNav />
                <div className='Anonym-tit'>
                    <div className='Anonym-top'>
                        <div className='Anonym-top-tit'>
                            <div className='annaemon'><img src={List.list[2].image} /></div>
                            <span>
                                <p>재학생 및 졸업생들과</p>
                                <p>익명으로 소통해보세요!</p>
                            </span>
                        </div>
                    </div>
                    <div className='Anonym-bottom'>
                        <div className='Anonym-bottom-cmunone'>
                            {useEffect.data && useEffect.data.map(f => (
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
                    </div>
                </div>
            </section>
        </>
    )
}
export default Anonym;