import './Main.scss';
import BannerData from "./banner.json";
import ListData from "./list.json";
import Listcomponent from "../../components/ListArticle/ListArticle";
import Banner from "../../components/Main/Banner/Banner";
import {Link} from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, {Navigation} from 'swiper';
import "swiper/scss";
export default function Main(){
    SwiperCore.use([Navigation])

    return(
        <section>
            <Banner
                banner={BannerData.banners}
            />
            <div className='main-category-swiper'>
                <Swiper
                    spaceBetween={15}
                    slidesPerView={5}
                    slidesPerGroup={5}
                    navigation
                    loop={true}
                >
                {
                    ListData.list.map(li => (
                        <SwiperSlide>
                            <Listcomponent
                                image={li.image}
                                name={li.name}
                                message={li.message}
                                link={li.link}
                            />
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
        </section>
    )
}