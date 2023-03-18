import play from '../../images/svg/play.svg';
import more from '../../images/svg/more.svg'; 
//import '../../sections/recently/recently.css';
//import '../../responsev/media.css';
function MySwiperSlide(props){
    return(
        <div className="swiper-slide">
                    <div className="ms_rcnt_box">
                        <div className="ms_rcnt_box_img">
                            <img src={props.img} alt=""/>
                            <div className="ms_main_overlay">
                                <div className="ms_box_overlay"></div>
                                <div className="ms_more_icon">
                                    <img src={more} alt=""/>
                                </div>
                                <ul className="more_option">
                                    <li><a href="/#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</a></li>
                                    <li><a href="/#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                    <li><a href="/#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                    <li><a href="/#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                    <li><a href="/#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                </ul>
                                <div className="ms_play_icon">
                                    <img src={play} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="ms_rcnt_box_text">
                            <h3><a href="/#">{props.title}</a></h3>
                            <p>{props.subtitle}</p>
                        </div>
                    </div>
                </div>
    );

}

export default MySwiperSlide;