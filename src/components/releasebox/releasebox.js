import play from '../../images/svg/play.svg';
function ReleaseBox (props){
    return(
        <div className="ms_release_box">
        <div className="w_top_song">
            <span className="slider_dot"></span>
            <div className="w_tp_song_img">
                <img src={props.img} alt=""/>
                <div className="ms_song_overlay">
                </div>
                <div className="ms_play_icon">
                    <img src={play} alt="" />
                </div>
            </div>
            <div className="w_tp_song_name">
                <h3><a href={props.link}>{props.title}</a></h3>
                <p>{props.subtitle}</p>
            </div>
        </div>
        <div className="weekly_right">
            <span className="w_song_time">{props.time}</span>
        </div>
    </div>

    );
}
export default ReleaseBox;