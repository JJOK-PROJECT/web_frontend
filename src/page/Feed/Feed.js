import FeedData from './feed.json';
import './Feed.scss';
function Feed() {
    return (
        <section className='Feed-section'>
            <div className='Feed-div-tit-div'>
                <div className='Feed-div-tit'>
                    <div className='Feed-top'>
                        <span className='Feed-top-title'>{FeedData.title}</span>
                        <span className='Feed-top-right'>
                            <span className='Feed-top-writer'>{FeedData.userName}</span>
                            <span className='Feed=top-day'>{FeedData.upload_date.substr(0,10)}</span>
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