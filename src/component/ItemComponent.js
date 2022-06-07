export default function ItemComponent(props){
return props.item? <div>
 <img src={`${props.item.image}`}></img>
 <p>{props.item.title}</p>
 <div>{props.item.price}</div>
 <p>{props.item.description}</p>
</div>
: ' '
}