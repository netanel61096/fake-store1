import { Link } from "react-router-dom";

export default function ProductComponent(props){
return props.product? <div className="product">
    {props.product.map(item=>
    <div className="item">
     <Link 
    end="true"
    className="link2"
    to={`/item/${item.id}`}
    key={`${item.id}`}
    >
        <img src={`${item.image}`} style={{height: "150px",width:"150px",borderRadius:"20px"}}></img>
        <div className="price">{item.price}$</div>
        <p>{item.title}</p>
    </Link>
    </div>
    )}
</div>
: ' '
}