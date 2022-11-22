import './Banner.scss'
import {Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";
import {useState} from "react";
import {Link} from "react-router-dom";
import Header from '../Header/Header'

SwiperCore.use([Pagination, Autoplay, EffectFade])

function Banner(props){
    
    

    const[activeIndex, setActiveIndex] = useState(1)
    return(
        <div className='banner_tit'>
            <Header/>
            <Swiper
                className='banner'
                loop={true}
                effect={"fade"}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{clickable: true}}
                autoplay={{delay: 2000}}
                watchOverflow={true}
            >
                {props.banner.map(b => (
                    <SwiperSlide>
                        <Link to ="">
                            <img className='banner--image' src={b.img} alt="banner"/>
                        </Link>
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </div>
    )
}

export default Banner;