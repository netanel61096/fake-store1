import BottunAddCart from "./BottunAddCart";
import Style from './CartProduct.module.css'
export default function CartProduct(props){
    return <div className={Style.div}>
        <ul className={Style.ul}>
            <li>{props.title}</li>
            <li className={Style.price}>{props.price*props.stock}$ </li>
            <li><img src={props.image} style={{height:"100px",width:"100px"}}/></li>
        </ul>
        <BottunAddCart stock={props.stock}  addCart={props.addCart}
        removeCart={props.removeCart} item={props.item}/>

    </div>
}