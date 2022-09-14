import './Banner.scss'
import {Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import {useState} from "react";
import {Link} from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Autoplay])

function Banner(props){
    const[activeIndex, setActiveIndex] = useState(1)
    return(
        <div className='banner_tit'>
            <Swiper
                className='banner'
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                autoplay={{delay: 3000}}
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