
import {  Link } from "react-router-dom";
function NavButton(props){
    return(
        <Link to={props.link} className={props.active} title={props.title}>
						<span className="nav_icon">
							<span className={props.class}></span>
						</span>
						<span className="nav_text">
							{props.text}
						</span>
						</Link>
						
    );
}
export default NavButton;