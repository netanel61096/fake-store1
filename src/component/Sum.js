import Style from "./Sum.module.css"
export default function Sum(props){
    let sum=0
    console.log(props.cartArr);
    {
        props.cartArr.forEach(v => {
            {sum += v.price*v.stock}
            console.log(sum);
        });
        return <div className={Style.sum}>SUM={sum}$</div>
    }
}