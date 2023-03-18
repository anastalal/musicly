import play from '../../images/svg/play.svg';
function GenresBox(props){
    return(
        <div className="ms_genres_box">
        <img src={props.img} alt="" className="img-fluid" />
        <div className="ms_main_overlay">
            <div className="ms_box_overlay" />
            <div className="ms_play_icon">
                <img src={play} alt="" />
            </div>
            <div className="ovrly_text_div">
                <span className="ovrly_text1"><a href={props.link1}>{props.text1}</a></span>
                <span className="ovrly_text2"><a href={props.link2}>{props.text2}</a></span>
            </div>
        </div>
        <div className="ms_box_overlay_on">
            <div className="ovrly_text_div">
            <span className="ovrly_text1"><a href={props.link1}>{props.text1}</a></span>
                <span className="ovrly_text2"><a href={props.link2}>{props.text2}</a></span>
            </div>
        </div>
    </div>
    );
}
export default GenresBox;