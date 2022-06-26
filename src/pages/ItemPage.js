import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemComponent from '../component/ItemComponent'

import Style from './ItemPage.module.css'
export default function ItemPage(props){
    const[item,setItem]=useState({})
    const params=useParams()
    useEffect(function(){
        axios.get(`https://fakestoreapi.com/products/${params.itemid}`)
        .then((res)=>setItem(res.data))
    },[])
    console.log(props.cartArr);
    return <div>
        <ItemComponent item={item} addCart={props.addCart} cartArr={props.cartArr} removeCart={props.removeCart}/>
    </div>
}