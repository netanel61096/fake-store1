import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductComponent from "../component/ProductComponent";
import Style from './ProductsPage.module.css'
export default function ProductsPage(props){
    const[products,setProducts]=useState([])
    const params=useParams()
    useEffect(function(){
        axios.get(`https://fakestoreapi.com/products/category/${params.cat}`)
        .then((res)=>setProducts(res.data))
    },[])
    // console.log(products);
    return <div>
          <ProductComponent product={products} addCart={props.addCart} cartArr={props.cartArr} removeCart={props.removeCart}/>
    </div>
}