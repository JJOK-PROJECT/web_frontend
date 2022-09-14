import './Main.scss';
import BannerData from "./banner.json";
import Banner from "../../components/Main/Banner/Banner";
export default function Main(){
    let i = 0
    return(
        <section>
            <Banner
                banner={BannerData.banners}
            />
        </section>
    )
}