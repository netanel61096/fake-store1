import Style from './BottunAddCart.module.css'
export default function BottunAddCart(props){
    return <div className={Style.div}>
        <button className={Style.button} onClick={(e)=>{e.preventDefault();props.removeCart(props.item)}}>-</button>
        <span className={Style.stock}>{props.stock}</span>
        <button className={Style.button} onClick={(e)=>{e.preventDefault();props.addCart(props.item)}}>+</button>

    </div>

        
}