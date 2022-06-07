import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage'
import ItemPage from './pages/ItemPage'
import Title from './component/Title';
function App() {
  return (
    <div className="App">
      <Title />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/category/:cat' element={<ProductsPage />}/>
        <Route path='/item/:itemid' element={<ItemPage />}/>

      </Routes>
    </div>
  );
}

export default App;
