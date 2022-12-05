
import {Routes, Route} from 'react-router-dom';
import {useState,createContext} from 'react'
import './App.css';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Login from './components/Pages/Login';
import Menu from './components/Pages/Menu';
import Cart from './components/Pages/Cart';
import Product from './components/Pages/Product/product';
import foodList from './data/data'
import Signup from './components/Pages/Sign up/signUp';
import AdminLogin from './components/Pages/Admin/AdminLogin/adminLogin';
import AdminPage from './components/Pages/Admin/AdminPage/adminPage';
import Home from './components/Pages/Home/home';
import Info from './components/Pages/Info/info';
import CateAdmin from './components/Pages/Admin/Category/category';
import UpdateCategory from './components/Pages/Admin/AdminCategory/updateCategory';
import AddCategory from './components/Pages/Admin/AdminCategory/addProduct';
import AdProduct from './components/Pages/Admin/Product/product';





export const AddContext = createContext();

function App() {

    const [cartItems, setCartItems]=useState([]);

    function onAdd(product){
      const exist = cartItems.find(x=>x.id === product.id);

      if(exist){
          setCartItems(cartItems.map(x=>x.id === product.id ? {...exist, qty: exist.qty+1}: x));
      }
      else{
          setCartItems([...cartItems,{...product,qty:1}]);
      }
    }

    function onRemove(product) {
      for(var i=0;i<cartItems.length;i++){
        if(cartItems[i].id ===product.id){
          cartItems= cartItems.splice(i,1);
          console.log(cartItems);
        }
      }
    }

  return (
    <>
      <AddContext.Provider value={cartItems}>
    <Routes>

      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Cart" element={<Cart onRemove={onRemove} />}/>
      <Route path="/Product/:id" element={<Product onAdd={onAdd} foodList= {foodList}/>}/>
      <Route path="/SignUp" element={<Signup/>}/>
      <Route path="/info" element={<Info/>}/>


      {/*Admin route */}
      <Route path="/Login/admin" element={<AdminLogin/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/admin/cate" element={<CateAdmin/>}/>
      <Route path="/admin/cate/:cateID" element={<UpdateCategory/>}/>
      <Route path="/admin/cate/add" element={<AddCategory/>}/>
      <Route path="/admin/product" element={<AdProduct/>}/>





      
      <Route path="/" element={<Home/>}/>

    </Routes>
      </AddContext.Provider>

      

     
    
    

    </>
  )
}

export default App;
