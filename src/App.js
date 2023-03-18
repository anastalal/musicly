
import './App.css';
import Container from './sections/container/container';
import $ from 'jquery';
import 'malihu-custom-scrollbar-plugin';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';

//import './responsev/media.css'; 
//import 'jquery-nice-select';
//import 'nice-select.css';
// import Home from './sections/pages/home';
// import Album from './sections/pages/album';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> anda anas to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Container>
    </Container>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Container />}>
    //       {/* <Route index element={<Container />} /> */}
    //       <Route path='album' element={<Album />} />
          
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}
$(document).ready(function() {
$(".ms_nav_close").on('click', function() {
  $(".ms_sidemenu_wrapper").toggleClass('open_menu');
  
});
$(".ms_nav_wrapper").mCustomScrollbar({
	theme:"minimal"
});
$(".ms_more_icon").on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  var target;
 // console.log("asa");
  if (typeof $(this).attr('data-other') != 'undefined') {
        target = $(this).parent().parent();
  } else {
       target = $(this).parent();
  }
  if (target.find("ul.more_option").hasClass('open_option')) {
      target.find("ul.more_option").removeClass('open_option');
  } else {
      $("ul.more_option.open_option").removeClass('open_option');
      target.find("ul.more_option").addClass('open_option');
  }
});
$(document).on("click", function(e) {
  $("ul.more_option.open_option").removeClass("open_option");
})
$(".ms_player_close").on('click', function() {
  $(".ms_player_wrapper").toggleClass("close_player");
  $("body").toggleClass("main_class")
})
$(".play-left-arrow").on('click', function() {
  $(".player_left").toggleClass('open_list');
});



})
export default App;
