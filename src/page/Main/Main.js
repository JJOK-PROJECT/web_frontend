import './Main.scss';
import BannerData from "./banner.json";
import ListData from "./list.json";
import Listcomponent from "../../components/ListArticle/ListArticle";
import Banner from "../../components/Banner/Banner";
import {Link} from "react-router-dom";

export default function Main(){
    
    return(
        <section>
            <Banner
                banner={BannerData.banners}
            />
            <div className='main-category-swiper'>
               
            {
                    ListData.list.map(li => (
                        <Listcomponent
                            image={li.image}
                            name={li.name}
                            message={li.message}
                            link={li.link}
                        />
                    ))
                }
            </div>
        </section>
    )
}
