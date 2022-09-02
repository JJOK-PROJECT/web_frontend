import './Banner.scss';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Autoplay} from 'swiper';
import {Link} from "react-router-dom";
import {useState} from "react";

SwiperCore.use([Navigation, Autoplay]);

export default function Banner(props){

    const [activeIndex, setActiveIndex] = useState(1)

    return(
        <div className='main-banner'>
            <Swiper
                className='main-banner'
                slidesPerView={1}
                navigationloop
                autoplay={{delay: 4000}}
                onActiveIndexChange={i => setActiveIndex(i.realIndex)}
            >
                {props.Banner.map(b => (
                    <SwiperSlide>
                        <Link to="">
                            <img className='main-banner--img' src={b.img} alt="banner"/>
                        </Link>
                    </SwiperSlide>
                ))}
                <div className='main-banner--active'>
                    <div className='main-banner--active-index'>
                        {activeIndex + 1} / {props.Banner.length}
                    </div>
                </div>
            </Swiper>
        </div>
    )
}