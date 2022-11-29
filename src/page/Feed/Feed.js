import FeedData from './feed.json';
import './Feed.scss';
import axios from 'axios';
import Cmunone from '../../components/Cmunone/Cmunone';
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function Feed() {

    const location = useLocation();
    const cmunp = location.state;

    const [feeds, setFeeds] = useState([]);
    console.log(cmunp)
    useEffect(() => {
        axios.get(`http://13.125.225.199:8003/get_contact?id=${cmunp.id}`)
            .then(response => {
                setFeeds(response.data);
            });
    }, []);

    return (
        <section className='Feed-section'>
            <div className='Feed-div-tit-div'>
                <div className='Feed-div-tit'>
                    <div className='Feed-top'>
                        <span className='Feed-top-title'>{feeds.title}</span>
                        <span className='Feed-top-right'>
                            <span className='Feed-top-writer'>{feeds.userName}</span>
                            <span className='Feed=top-day'>{feeds.upload_date}</span>
                        </span>
                    </div>
                    <hr className='Feed-section-top' />
                    <div className='Feed-bottom'>
                        <div>
                            <span>
                                {feeds.contactId}
                                <div><img src={feeds.image_path}/></div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Feed;