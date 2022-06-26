import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ItemPage from "./pages/ItemPage";
import Title from "./component/Title";
import Cart from "./component/Cart";
import { useState } from "react";
function App() {
  const [cartArr, setCartArr] = useState([
   
  ]);
  function addCart(item) {
    const foundItem = cartArr.find((i) => i.id == item.id);
    if (foundItem) {
      setCartArr(
        cartArr.map((v) =>
          v.id == item.id ? { ...v, stock:v.stock + 1 } : v
        )
      );
    } else {
      const itemToCart = { ...item,stock:1 };
      setCartArr([...cartArr,itemToCart]);
    }
  }
  function removeCart(item) {
   const foundItem= cartArr.find(i=>i.id==item.id)
   if(foundItem.stock>1){
     setCartArr(cartArr.map(v=> v.id == item.id ? { ...v, stock:v.stock - 1 } : v))
   }
   else{
     setCartArr(cartArr.filter(v=>v.id!=item.id))
   }


  }

  return (
    <div className="App">
      <Title />
      <main>
        
        <Cart cartArr={cartArr} addCart={addCart} removeCart={removeCart}/>
        
         <div className="main">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:cat" element={<ProductsPage addCart={addCart} cartArr={cartArr}  removeCart={removeCart} />} />
          <Route path="/item/:itemid" element={<ItemPage addCart={addCart} cartArr={cartArr}  removeCart={removeCart} />} />
        </Routes>
        </div> 
      </main>
    </div>
  );
}

export default App;
