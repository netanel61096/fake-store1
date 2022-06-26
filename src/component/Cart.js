import CartProduct from "./CartProduct"
import Sum from "./Sum"
import Style from './Cart.module.css'
export default function Cart(props){
    return <div className={Style.cart}>
        <h2>CART</h2>
        <div className="productCart">
{props.cartArr.map(i=>{
    return  <CartProduct title={i.title} price={i.price} id={i.id} key={i.id}
     image={i.image} stock={i.stock} addCart={props.addCart} removeCart={props.removeCart} item={i}/>
})}</div>

    <Sum cartArr={props.cartArr}/>

    </div>
}