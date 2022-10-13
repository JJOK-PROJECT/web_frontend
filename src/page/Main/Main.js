import './Main.scss';
import BannerData from "./banner.json";
import Banner from "../../components/Banner/Banner";
import {Link} from "react-router-dom";
import ListArticle from '../../components/ListArticle/ListArticle';
export default function Main(){
    
    return(
        <section>
            <Banner
                banner={BannerData.banners}
            />
            <ListArticle />
        </section>
    )
}
