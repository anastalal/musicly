
import './weekly.css';
import song1 from '../../images/weekly/song1.jpg';
import WeeklyBox from '../../components/weeklyBox/weeklyBox';
//import '../../responsev/media.css';
function Weekly(){
    return(
        <div className="ms_weekly_wrapper">
        <div className="ms_weekly_inner">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ms_heading">
                        <h1>weekly top 15</h1>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 padding_right40">
                    <WeeklyBox 
                    num="01"
                    img={song1}
                    text="Until I Met You"
                    artist="Ava Cornish"
                    time="5:10"
                    ></WeeklyBox>
                      <WeeklyBox 
                    num="01"
                    img={song1}
                    text="Until I Met You"
                    artist="Ava Cornish"
                    time="5:10"
                    ></WeeklyBox>
                      <WeeklyBox 
                    num="01"
                    img={song1}
                    text="Until I Met You"
                    artist="Ava Cornish"
                    time="5:10"
                    ></WeeklyBox>
                      <WeeklyBox 
                    num="01"
                    img={song1}
                    text="Until I Met You"
                    artist="Ava Cornish"
                    time="5:10"
                    ></WeeklyBox>
                      <WeeklyBox 
                    num="01"
                    img={song1}
                    text="Until I Met You"
                    artist="Ava Cornish"
                    time="5:10"
                    ></WeeklyBox>
                      <WeeklyBox 
                    num="01"
                    img={song1}
                    text="Until I Met You"
                    artist="Ava Cornish"
                    time="5:10"
                    ></WeeklyBox>
                    
                    
                </div>
                
            </div>
        </div>
    </div>
    );
}
export default Weekly;