import './Main.scss';
import BannerData from "./banner.json";
import ListData from "./list.json";
import Banner from "../../components/Main/Banner/Banner";
import ListArticle from "../../components/ListAritcle/ListArticle";
export default function Main(){
    
    return(
        <section>
            <Banner
                banner={BannerData.banners}
            />
        </section>
    )
}