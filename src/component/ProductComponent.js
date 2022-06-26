import { Link } from "react-router-dom";
import AddCartButton from "./AddCartButton";
import BottunAddCart from "./BottunAddCart";
import Style from './ProductComponent.module.css'
export default function ProductComponent(props){

    return props.product? <div className={Style.products}>
    {props.product.map(item=>
     <Link 
    end="true"
    to={`/item/${item.id}`}
    key={`${item.id}`}
    >
        <div className={Style.item}>
        <img src={`${item.image}`} className={Style.img}></img>
        {props.cartArr.find(v=>v.id==item.id)  ?
        <BottunAddCart stock={props.cartArr.find(v=>v.id==item.id).stock}  addCart={props.addCart}
        removeCart={props.removeCart} item={item}/>:
        <AddCartButton addCart={props.addCart} item={item} removeCart={props.removeCart}/> },
        {item.title}
        <div className={Style.price}>{item.price}$</div>
        </div>
    </Link>
    )}
</div>
: ' '
}