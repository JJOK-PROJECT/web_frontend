import List from "../../components/ListArticle/list.json";
import './Roadview.scss';
export default function Metabus() {
    return (
        <section className='Metabus_section'>
            <div className='Metabus_div'>
                <div className='meta-top'>
                    <div className='meta-top-tit'>
                        <div className='annaemon'><img src={List.list[0].image} /></div>
                        <span>
                            <p>학교의 다양한</p>
                            <p>시설을 확인해보세요!</p>
                        </span>
                    </div>
                </div>
                <div className="Metabus_iframe">
                    <iframe src='http://13.125.225.199:8008/' />
                </div>
                <div className="Metabus_ment">   
                    <div className="roadview"><a href='http://13.125.225.199:8008/' target='_blank'>로드뷰 자세히 보기</a></div>
                    <div><span>조작이 잘 안된다면 더블 클릭을 해주세요!</span></div>
                </div>
            </div>
        </section>
    )
}