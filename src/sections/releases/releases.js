import './releases.css';
import Section from '../section/section';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import React from 'react';
import { useRef } from 'react';
import ReleaseBox from '../../components/releasebox/releasebox';
import song1 from '../../images/weekly/song1.jpg';
//import '../../responsev/media.css';
function Releases(){
    const swiperRef = useRef();
    return(
        <div className="ms_releases_wrapper">
                <Section title="New Releases" more="view more "></Section>
                
                <div className="ms_divider"></div>
                <div className="ms_release_slider swiper-container swiper-container-horizontal">
                
                <Swiper 
                spaceBetween={20}
                slidesPerView={4}
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
                        slidesPerView: 3,
                    },
                    1400: {
                       // width: 1400,
                        slidesPerView: 3,
                    },
                    992: {
                       // width: 992,
                        slidesPerView: 2,
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
                   
                    
                    <div className="swiper-wrapper">
                   
                    <SwiperSlide>
                        <ReleaseBox
                        title="Dark Alley Acoustic"
                        img={song1}
                        subtitle="Ava Cornish"
                        link="/#"
                        time="5:10">
                        </ReleaseBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReleaseBox
                        title="Dark Alley Acoustic"
                        img={song1}
                        subtitle="Ava Cornish"
                        link="/#"
                        time="5:10">
                        </ReleaseBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReleaseBox
                        title="Dark Alley Acoustic"
                        img={song1}
                        subtitle="Ava Cornish"
                        link="/#"
                        time="5:10">
                        </ReleaseBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReleaseBox
                        title="Dark Alley Acoustic"
                        img={song1}
                        subtitle="Ava Cornish"
                        link="/#"
                        time="5:10">
                        </ReleaseBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReleaseBox
                        title="Dark Alley Acoustic"
                        img={song1}
                        subtitle="Ava Cornish"
                        link="/#"
                        time="5:10">
                        </ReleaseBox>
                    </SwiperSlide>
                        {/* <div className="swiper-slide">
                            <div className="ms_release_box">
                                <div className="w_top_song">
                                    <span className="slider_dot" />
                                    <div className="w_tp_song_img">
                                        <img src="images/weekly/song1.jpg" alt="" />
                                        <div className="ms_song_overlay">
                                        </div>
                                        <div className="ms_play_icon">
                                            <img src="images/svg/play.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="w_tp_song_name">
                                        <h3><a href="#">Dark Alley Acoustic</a></h3>
                                        <p>Ava Cornish</p>
                                    </div>
                                </div>
                                <div className="weekly_right">
                                    <span className="w_song_time">5:10</span>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="ms_release_box">
                                <div className="w_top_song">
                                    <span className="slider_dot" />
                                    <div className="w_tp_song_img">
                                        <img src="images/weekly/song2.jpg" alt="" />
                                        <div className="ms_song_overlay">
                                        </div>
                                        <div className="ms_play_icon">
                                            <img src="images/svg/play.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="w_tp_song_name">
                                        <h3><a href="#">Dark Alley Acoustic</a></h3>
                                        <p>Ava Cornish</p>
                                    </div>
                                </div>
                                <div className="weekly_right">
                                    <span className="w_song_time">5:10</span>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="ms_release_box">
                                <div className="w_top_song">
                                    <span className="slider_dot" />
                                    <div className="w_tp_song_img">
                                        <img src="images/weekly/song3.jpg" alt="" />
                                        <div className="ms_song_overlay">
                                        </div>
                                        <div className="ms_play_icon">
                                            <img src="images/svg/play.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="w_tp_song_name">
                                        <h3><a href="#">Dark Alley Acoustic</a></h3>
                                        <p>Ava Cornish</p>
                                    </div>
                                </div>
                                <div className="weekly_right">
                                    <span className="w_song_time">5:10</span>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="ms_release_box">
                                <div className="w_top_song">
                                    <span className="slider_dot" />
                                    <div className="w_tp_song_img">
                                        <img src="images/weekly/song4.jpg" alt="" />
                                        <div className="ms_song_overlay">
                                        </div>
                                        <div className="ms_play_icon">
                                            <img src="images/svg/play.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="w_tp_song_name">
                                        <h3><a href="#">Dark Alley Acoustic</a></h3>
                                        <p>Ava Cornish</p>
                                    </div>
                                </div>
                                <div className="weekly_right">
                                    <span className="w_song_time">5:10</span>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="ms_release_box">
                                <div className="w_top_song">
                                    <span className="slider_dot" />
                                    <div className="w_tp_song_img">
                                        <img src="images/weekly/song5.jpg" alt="" />
                                        <div className="ms_song_overlay">
                                        </div>
                                        <div className="ms_play_icon">
                                            <img src="images/svg/play.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="w_tp_song_name">
                                        <h3><a href="#">Dark Alley Acoustic</a></h3>
                                        <p>Ava Cornish</p>
                                    </div>
                                </div>
                                <div className="weekly_right">
                                    <span className="w_song_time">5:10</span>
                                </div>
                            </div>
                        </div> */}
                       
                    </div>
                    </Swiper>
                </div>
            
                { /* Add Arrows */ }
                <div className="swiper-button-next2 slider_nav_next" onClick={() => swiperRef.current?.slideNext()} ></div>
                <div className="swiper-button-prev2 slider_nav_prev" onClick={() => swiperRef.current?.slidePrev()} ></div>
            </div>
    );
}
export default Releases;