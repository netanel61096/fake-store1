import Style from './AddCartButton.module.css'
export default function AddCartButton(props){
    return <div >
        <button className={Style.button} onClick={(e)=>{e.preventDefault();props.addCart(props.item)}}>ADD TO CART</button>
    </div>
    
}