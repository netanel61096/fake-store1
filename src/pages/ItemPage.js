import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemComponent from '../component/ItemComponent'


export default function ItemPage(){
    const[item,setItem]=useState({})
    const params=useParams()
    useEffect(function(){
        axios.get(`https://fakestoreapi.com/products/${params.itemid}`)
        .then((res)=>setItem(res.data))
    },[])
    console.log(item);
    return <div>
        <ItemComponent item={item}/>
    </div>
}