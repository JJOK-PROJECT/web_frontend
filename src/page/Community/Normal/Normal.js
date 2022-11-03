import './Normal.scss';
import CommunNav from '../../../components/CommunNav/CommunNav';
import List from "../../../components/ListArticle/list.json";
import Cmunone from '../../../components/Cmunone/Cmunone';
import NormalData from './Normal.json';
function Normal() {
    return (
        <>
            <section className='Normal-section'>
                <CommunNav />
                <div className='Normal-tit'>
                    <div className='Normal-top'>
                        <div className='Normal-top-tit'>
                            <div className='annaemon'><img src={List.list[5].image} /></div>
                            <span>
                                <p>재학생 및 졸업생들과</p>
                                <p>소통해보세요!</p>
                            </span>
                        </div>
                    </div>
                    <div className='Normal-bottom'>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Normal;