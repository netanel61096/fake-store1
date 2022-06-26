import { Link } from "react-router-dom";
import Style from './HomeComponent.module.css'
export default function HomeComponent(props){
return props.catgories? <div className={Style.Active}>
    {props.catgories.map(c=> 
    <Link end="true"
    className={Style.active}
    to={`/category/${c}`}
    key={`${c}123`}><div  className={Style.link}>
      
    
    {c}</div></Link>)}
</div>
: ' '
}