import './Anonym.scss';
import CommunNav from '../../../components/CommunNav/CommunNav';
import List from "../../../components/ListArticle/list.json";
import Cmunone from '../../../components/Cmunone/Cmunone';
import AnonymData from './Anonym.json';
function Anonym() {
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
                        <Cmunone/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Anonym;