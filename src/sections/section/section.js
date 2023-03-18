import './section.css'
function Section(props){
    return (
        <div className="ms_heading">
                    <h1>{props.title}</h1>
                    <span className="veiw_all"><a href={props.link}>{props.more}</a></span>
                </div>
    );

}
export default Section;