import './Main.scss';
import BannerData from "./banner.json";
import Banner from "../../components/Banner/Banner";
import {Link} from "react-router-dom";
import ListArticle from '../../components/ListArticle/ListArticle';
import Footer from '../../components/Footer/Footer';
export default function Main(){
    
    return(
        <section>
            <Banner
                banner={BannerData.banners}
            />
            <ListArticle />
            <Footer/>
        </section>
    )
}
