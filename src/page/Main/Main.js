import './Main.scss';
import BannerData from "./banner.json";
import ListData from "./list.json";
import Listcomponent from "../../components/ListArticle/ListArticle";
import Banner from "../../components/Main/Banner/Banner";
export default function Main(){
    
    return(
        <section>
            <Banner
                banner={BannerData.banners}
            />
            <Listcomponent
                image={ListData.img}
                title={ListData.name}
                mesage={ListData.message}
            />
        </section>
    )
}