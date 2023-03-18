
import Recently from '../recently/recently';
import Falbums from '../albums/f_albums';
function Album(){
    return(
       <>
       <div className='mt-5'></div>
       <Falbums></Falbums>
       <div className='mt-5'></div>
       <Recently title="Trending Albums" more="view more"></Recently>
       </>
    );
}
export default Album;