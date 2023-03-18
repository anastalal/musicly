
import './sidemenu.css'
//import icon from '../../images/svg/icon.svg';
import logo from '../../images/logo.png';
import logo_open from '../../images/open_logo.png';
import NavButton from '../../components/navBotton/navbotton'; 
// import '../../responsev/media.css';
 import { Outlet } from "react-router-dom";

function SideMenu(){
    return(
		<>
        <div className="ms_sidemenu_wrapper">
            <div className="ms_nav_close">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            <div className="ms_sidemenu_inner">
                <div className="ms_logo_inner">
                    <div className="ms_logo">
                        <a href="index-2.html"><img src={logo} alt="" className="img-fluid"/></a>
                    </div>
                    <div className="ms_logo_open">
                        <a href="index-2.html"><img src={logo_open} alt="" className="img-fluid"/></a>
                    </div>
                </div>
                <div className="ms_nav_wrapper">
                    <ul>
						<li>
							<NavButton link="/#" active="active" title="Discover" class="icon icon_discover" text="discover"/>
						</li>
						<li>
							<NavButton link="album"  title="Albums" class="icon icon_albums" text="albums"/>
						</li>
						<li>
							<NavButton link="/#"  title="Artists" class="icon icon_artists" text="artists"/>
						</li>
                        <li>
							<NavButton link="/#"  title="Genres" class="icon icon_genres" text="genres"/>
						</li>
                        <li>
							<NavButton link="/#"  title="Top Tracks" class="icon icon_tracks" text="top tracks"/>
						</li>
                        <li>
							<NavButton link="/#"  title="Free Music" class="icon icon_music" text="free music"/>
						</li>
                        <li>
							<NavButton link="/#"  title="Stations" class="icon icon_station" text="stations"/>
						</li>
                       
                    </ul>
                    <ul className="nav_downloads">
                        <li><a href="download.html" title="Downloads">
						<span className="nav_icon">
							<span className="icon icon_download"></span>
						</span>
						<span className="nav_text">
							downloads
						</span>
						</a>
                        </li>
                        <li><a href="purchase.html" title="Purchased">
						<span className="nav_icon">
							<span className="icon icon_purchased"></span>
						</span>
						<span className="nav_text">
							purchased
						</span>
						</a>
                        </li>
                        <li><a href="favourite.html" title="Favourites">
						<span className="nav_icon">
							<span className="icon icon_favourite"></span>
						</span>
						<span className="nav_text">
							favourites
						</span>
						</a>
                        </li>
                        <li><a href="history.html" title="History">
						<span className="nav_icon">
							<span className="icon icon_history"></span>
						</span>
						<span className="nav_text">
							history
						</span>
						</a>
                        </li>
                    </ul>
                    <ul className="nav_playlist">
                        <li><a href="feature_playlist.html" title="Featured Playlist">
						<span className="nav_icon">
							<span className="icon icon_fe_playlist"></span>
						</span>
						<span className="nav_text">
							featured playlist
						</span>
						</a>
                        </li>
                        <li><a href="add_playlist.html" title="Create Playlist">
						<span className="nav_icon">
							<span className="icon icon_c_playlist"></span>
						</span>
						<span className="nav_text">
							create playlist
						</span>
						</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
		<Outlet />
		</>
    );
}
// $(".ms_nav_wrapper").mCustomScrollbar({
// 	theme:"minimal"
// });
export default SideMenu;