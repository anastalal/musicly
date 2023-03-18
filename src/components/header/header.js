import './header.css';
import 'font-awesome/css/font-awesome.min.css'; 
// import '../../responsev/media.css';
//import $ from 'jquery';
function Header(){
    return (
        <div className="ms_header">
                <div className="ms_top_left">
                    <div className="ms_top_search">
                        <input type="text" className="form-control" placeholder="Search Music Here.."/>
                        <span className="search_icon">
							<img src="images/svg/search.svg" alt=""/>
						</span>
                    </div>
                    
                </div>
                <div className="ms_top_right">
                    <div className="ms_top_lang">
                        <span data-toggle="modal" data-target="#lang_modal">languages <img src="images/svg/lang.svg" alt=""/></span>
                    </div>
                    <div className="ms_top_btn">
                        <a href="/#" className="ms_btn reg_btn" data-toggle="modal" data-target="#myModal"><span>register</span></a>
                        <a href="/#" className="ms_btn login_btn" data-toggle="modal" data-target="#myModal1"><span>login</span></a>
                    </div>
                </div>
            </div>
    );
}
// $(".ms_nav_close").on('click', function() {
//     $(".ms_sidemenu_wrapper").toggleClass('open_menu');
//     console.log("hrllo");
// });
export default Header