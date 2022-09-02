import './Main.scss';
import BannerDate from './banner.json';
import Banner from "../../components/Banner/Banner";
import Header from '../../components/Header/Header';
export default function Main(){
    return(
        <section>
            <Banner
                banner={BannerDate.banners}
            />
        </section>
    )
}