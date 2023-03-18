
import './container.css'
import SideMenu from '../sidemenu/sidemenu';
import Header from '../../components/header/header';
//import '../../responsev/media.css'
import Home from '../pages/home';
import Player from '../player/player';
import Album from '../pages/album';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Container(){
    return (
        <>
        <div className='ms_main_wrapper'>
        <Router>
        <SideMenu></SideMenu>
         
        <div className="ms_content_wrapper padder_top80"> 
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
         <Route path='album' element={<Album/>}/>
       
        </Routes>
       

        </div>
        <Player></Player>
        </Router>
        </div>
        </>
    );
}
export default Container;