import axios from "axios";
import { useEffect, useState } from "react";
import HomeComponent from "../component/HomeComponent";
import Style from './HomePage.module.css'
export default function HomePage() {
  const [catgories, setCatgories] = useState();
  useEffect(function () {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCatgories(res.data));
  }, []);
  console.log(catgories);
  return catgories ? (
    <div >
      <HomeComponent catgories={catgories} />
    </div>
  ) : (
    <div>loading...</div>
  );
}
