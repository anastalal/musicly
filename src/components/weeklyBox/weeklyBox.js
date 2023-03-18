import play  from "../../images/svg/play.svg";
import more from "../../images/svg/more.svg";
function WeeklyBox(props){
    return(
        <div className="ms_weekly_box">
                        <div className="weekly_left">
                            <span className="w_top_no">
                                {props.num}
                            </span>
                            <div className="w_top_song">
                                <div className="w_tp_song_img">
                                    <img src={props.img} alt="" className="img-fluid" />
                                    <div className="ms_song_overlay">
                                    </div>
                                    <div className="ms_play_icon">
                                        <img src={play} alt="" />
                                    </div>
                                </div>
                                <div className="w_tp_song_name">
                                    <h3><a href={props.link}>{props.text}</a></h3>
                                    <p>{props.artist}</p>
                                </div>
                            </div>
                        </div>
                        <div className="weekly_right">
                            <span className="w_song_time">{props.time}</span>
                            <span className="ms_more_icon" data-other="1">
                                <img src={more} alt="" />									
                            </span>
                        </div>
                        <ul className="more_option">
                            <li><a href="/#"><span className="opt_icon"><span className="icon icon_fav" /></span>Add To Favourites</a></li>
                            <li><a href="/#"><span className="opt_icon"><span className="icon icon_queue" /></span>Add To Queue</a></li>
                            <li><a href="/#"><span className="opt_icon"><span className="icon icon_dwn" /></span>Download Now</a></li>
                            <li><a href="/#"><span className="opt_icon"><span className="icon icon_playlst" /></span>Add To Playlist</a></li>
                            <li><a href="/#"><span className="opt_icon"><span className="icon icon_share" /></span>Share</a></li>
                        </ul>
                    </div>
    );
}
export default WeeklyBox;