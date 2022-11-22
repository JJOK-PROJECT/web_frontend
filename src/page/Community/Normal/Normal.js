import './Normal.scss';
import CommunNav from '../../../components/CommunNav/CommunNav';
import List from "../../../components/ListArticle/list.json";
import Cmunone from '../../../components/Cmunone/Cmunone';
import FeedData from '../feedlist.json';
import React, { useState, useEffect } from "react";
import axios from 'axios';
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
                            <div className='Normal-bottom-cmunone'>
                                {
                                    users.data && users.data.map(f => (
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
                                    ))
                                }
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Normal;