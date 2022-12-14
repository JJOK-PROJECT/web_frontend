import './Normal.scss';
import CommunNav from '../../../components/CommunNav/CommunNav';
import List from "../../../components/ListArticle/list.json";
import Cmunone from '../../../components/Cmunone/Cmunone';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Normal() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://13.125.225.199:8003/all_contect')
            .then(response => {
                setUsers(response.data);
            });
    }, []);


    return (
        <>
            <section className='Normal-section'>
                <CommunNav />
                <div className='Normal-tit'>
                        <div className='Normal-top-write'>
                            <Link to={{
                                pathname: '/welbato/community/write',
                                state: { // 오.. 새 기술이다
                                    isPrivate : 1
                                }
                            }}>
                                <span>글쓰기</span>
                            </Link>
                        </div>
                    <div className='Normal-top'>
                        <div className='Normal-top-tit'>
                            <div className='annaemon'><img src={List.list[2].image} /></div>
                            <span>
                                <p>재학생 및 졸업생들과</p>
                                <p>소통해보세요!</p>
                            </span>
                        </div>
                    </div>
                    <div className='Normal-bottom'>
                        <div className='Normal-bottom-div'>
                            <div className='Normal-bottom-cmunone'>
                                {
                                    users.data && users.data.map(f => (
                                        f.isPrivate === 0 && f.isHot === 0 ?
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
                                            <></>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Normal;