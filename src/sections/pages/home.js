
import Banner from '../banner/banner';
//import '../../responsev/media.css'
import Recently from '../recently/recently';
import Weekly from '../weekly/weekly';
import Releases from '../releases/releases';
import Genres from '../genres/genres';
import adv from '../../images/adv1.jpg';
import adv2 from '../../images/adv.jpg';
import Advr from '../advr/advr';
// import '../../responsev/media.css'
function Home(){
    return(
        <>
        
        <Banner/>
        <Recently title="Recently Played" more="view more"></Recently>
        <Weekly></Weekly>
        <Advr img={adv2}></Advr>
        <Releases></Releases>
        <Genres></Genres>
        <Advr img={adv}></Advr>
        </>
    );
}
export default Home;