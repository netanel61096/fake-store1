import { Link } from "react-router-dom";

export default function HomeComponent(props){
return props.catgories? <div className="Active">
    {props.catgories.map(c=> 
    <div  className="active">
     <Link 
    end="true"
    className="link"
    to={`/category/${c}`}
    key={`${c}123`}
    >{c}</Link></div>)}
</div>
: ' '
}