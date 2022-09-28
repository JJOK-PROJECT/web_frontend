import './Main.scss';
import BannerData from "./banner.json";
import ListData from "./list.json";
import Listcomponent from "../../components/ListArticle/ListArticle";
import Banner from "../../components/Banner/Banner";
import { SwiperSlide,Swiper } from 'swiper/react';
import {Link} from "react-router-dom";
import "swiper/scss";
export default function Main(){
    
    return(
        <section>
            <Banner
                banner={BannerData.banners}
            />
            <div className='main-category-swiper'>
                <Swiper
                    spaceBetween={220}
                    slidesPerView={7}
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
