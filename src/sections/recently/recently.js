import './recently.css';
import Section from '../section/section';
import MySwiperSlide from '../../components/swiperSlide/swiperSlide'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import React from 'react';
import { useRef } from 'react';
import music1 from '../../images/music/r_music1.jpg';
import music2 from '../../images/music/r_music2.jpg';
import music3 from '../../images/music/r_music3.jpg';
import music4 from '../../images/music/r_music4.jpg';
import music5 from '../../images/music/r_music5.jpg';
//import '../../responsev/media.css';
function Recently(props){
    
    const swiperRef = useRef();
    return(
        <div className="ms_rcnt_slider">
        
        <Section title={props.title} more={props.more}></Section>
        <div className="swiper-container">
            <div className="swiper-wrapper">
            <Swiper 
                spaceBetween={20}
                slidesPerView={6}
                loop = {true}
                speed = {1500}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                breakpoints ={ {
                    1800: {
                      //  width: 1800,
                        slidesPerView: 4,
                    },
                    1400: {
                       // width: 1400,
                        slidesPerView: 4,
                    },
                    992: {
                       // width: 992,
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    768: {
                     //   width: 768,
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                      //  width: 640,
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    480: {
                      //  width: 480,
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    375: {
                      //  width: 375,
                        slidesPerView: 1,
                        spaceBetween: 15,
                    }
                }}
                >
                <SwiperSlide>
                <MySwiperSlide img={music1} title="Dream Your Moments (Duet)" subtitle="Ava Cornish & Brian Hill"></MySwiperSlide>
                </SwiperSlide>
                <SwiperSlide>
                <MySwiperSlide img={music2} title="Until I Met You" subtitle="Ava Cornish & Brian Hill"></MySwiperSlide>
                </SwiperSlide>
                <SwiperSlide>
                <MySwiperSlide img={music3} title="Gimme Some Courage" subtitle="Ava Cornish & Brian Hill"></MySwiperSlide>
                </SwiperSlide>
                <SwiperSlide>
                <MySwiperSlide img={music4} title="Dark Alley Acoustic" subtitle="Ava Cornish & Brian Hill"></MySwiperSlide>
                </SwiperSlide>
                <SwiperSlide>
                <MySwiperSlide img={music5} title="Walking Promises" subtitle="Ava Cornish & Brian Hill"></MySwiperSlide>
                </SwiperSlide>
                
                </Swiper>

            </div>
        </div>
        
        <div  className="swiper-button-next slider_nav_next  swiper-button-next" onClick={() => swiperRef.current?.slidePrev()} ></div>
        <div className="swiper-button-prev slider_nav_prev " onClick={() => swiperRef.current?.slideNext()}></div>
       
    </div>
    );
}
export default Recently;