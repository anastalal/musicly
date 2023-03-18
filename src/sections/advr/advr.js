
function Advr(props){
    return(
        <div className="ms_advr_wrapper ms_advr2">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<a href={props.link}><img src={props.img} alt="" className="img-fluid" /></a>
						</div>
					</div>
				</div>
			</div>
    );
}
export default Advr;