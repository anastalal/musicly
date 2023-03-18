import './genres.css';
//import '../../responsev/media.css';
import GenresBox from '../../components/genresBox/genresBox';
import Section from '../section/section';
import img1 from '../../images/genrs/img1.jpg';
import img2 from '../../images/genrs/img2.jpg';
import img3 from '../../images/genrs/img3.jpg';
import img4 from '../../images/genrs/img4.jpg';
import img5 from '../../images/genrs/img5.jpg';
import img6 from '../../images/genrs/img6.jpg';
function Genres(){
    return(
        <div className="ms_genres_wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <Section title="Top Genres" more="view more"></Section>
                    </div>
                    <div className="col-lg-4">
                        <GenresBox text1="romantic" text2="view more" img={img1} ></GenresBox>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-4">
                            <GenresBox text1="Classical"  img={img2} ></GenresBox>
                               
                            </div>
                            <div className="col-lg-8">
                            <GenresBox text1="hip hop"  img={img3} ></GenresBox>
                                
                            </div>
                            <div className="col-lg-8">
                            <GenresBox text1="dancing"  img={img5} ></GenresBox>
                                
                            </div>
                            <div className="col-lg-4">
                            <GenresBox text1="EDM"  img={img6} ></GenresBox>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                    <GenresBox text1="rock"  img={img4} ></GenresBox>
                        
                    </div>
                </div>
            </div>
    );

}
export default Genres;