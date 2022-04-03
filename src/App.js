import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home'
import Shop from './Component/Shop/Shop'
import About from './Component/About/About'
import Order from './Component/Order/Order'
import Contact from './Component/Contact/Contact'
import Details from './Component/Details/Details';

function App() {
  return (
    <div className="">
  <Header></Header>
  <Routes className="">
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/shop" element={<Shop></Shop>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/order" element={<Order></Order>}></Route>
    <Route path="/contact" element={<Contact></Contact>}></Route>
    <Route path="/details" element={<Details></Details>}></Route>
  </Routes>
    </div>
  );
}

export default App;
