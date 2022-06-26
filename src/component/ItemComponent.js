import AddCartButton from "./AddCartButton";
import BottunAddCart from "./BottunAddCart";
import Style from './ItemComponent.module.css'
export default function ItemComponent(props){
    console.log(props.cartArr);
return props.item? <div className={Style.item}>
 <img src={`${props.item.image}`} className={Style.img}></img>
 <div className={Style.price}>{props.item.price}$</div>
 <p>{props.item.title}</p>
 <p>{props.item.description}</p>
 {props.cartArr.find(v=>v.id==props.item.id)  ?
        <BottunAddCart stock={props.cartArr.find(v=>v.id==props.item.id).stock}  addCart={props.addCart}
        removeCart={props.removeCart} item={props.item}/>:
        <AddCartButton addCart={props.addCart} item={props.item} removeCart={props.removeCart}/> }
</div>
: ' '
}
{/* <AddCartButton addCart={props.addCart} item={props.item}/> */}