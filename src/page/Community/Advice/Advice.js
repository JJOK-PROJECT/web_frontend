import './Advice.scss';
import CommunNav from '../../../components/CommunNav/CommunNav';
import List from "../../../components/ListArticle/list.json";
import Cmunone from '../../../components/Cmunone/Cmunone';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

import { useHistory } from "react-router-dom";


export default function Advice() {
    const [users, setUsers] = useState([]);

    
    useEffect(() => {
        axios.get('http://13.125.225.199:8003/all_contect')
            .then(response => {
                setUsers(response.data);
            });
    }, []);


    return (
        <>
            <section className='Advice-section'>
                <CommunNav />
                <div className='Advice-tit'>
                        <div className='Advice-top-write'>
                            <Link to="/welbato/community/write" >
                                <span>글쓰기</span>
                            </Link>
                        </div>
                    <div className='Advice-top'>
                        <div className='Advice-top-tit'>
                            <div className='annaemon'><img src={List.list[4].image} /></div>
                            <span>
                                <p>선배들에게</p>
                                <p>다양한 조언을 얻어보세요!</p>
                            </span>
                        </div>
                    </div>
                    <div className='Advice-bottom'>
                        <div className='Advice-bottom-cmunone'>
                            {users.data && users.data.map(f => (
                                f.isHot === 1 ?
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
                                :
                                <>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}