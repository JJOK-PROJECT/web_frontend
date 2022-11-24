import FeedData from './feed.json';
import './Feed.scss';
import axios from 'axios';
import Cmunone from '../../components/Cmunone/Cmunone';
import React, { useState, useEffect } from "react";
function Feed() {
    const [feeds, setFeeds] = useState();

    useEffect(() => {
        axios.get(`http://13.125.225.199:8003/get_contact?id=${Cmunone.id}`)
            .then(response => {
                setFeeds(response.data)
            })
    })
console.log(feeds);
    return (
        <section className='Feed-section'>
            <div className='Feed-div-tit-div'>
                <div className='Feed-div-tit'>
                    <div className='Feed-top'>
                        <span className='Feed-top-title'>{feeds.title}</span>
                        <span className='Feed-top-right'>
                            <span className='Feed-top-writer'>{feeds.userName}</span>
                            <span className='Feed=top-day'>{feeds.upload_date.substr(0,10)}</span>
                        </span>
                    </div>
                    <hr className='Feed-section-top' />
                    <div className='Feed-bottom'>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Feed;