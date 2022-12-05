import {Routes, Route} from 'react-router-dom';
import {useState,createContext,useEffect} from 'react'

import './App.css';
import SignUp from './pages/signUp';
import SignInForm from './components/Login/signInForm';
import SignIn from './pages/signIn';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Pet from './pages/pet';
import Care from './pages/care';
import Cart from './pages/cart';
import Category from './pages/category';
import PetProduct from './pages/petProduct';
//import {petFoods,petServices,petProducts} from './data/data'
import ErrorPage from './pages/errorPage';
import {getPets,getFoods,getServices,getProducts,getAllPetFoods,getAllServices,getAllProducts,getAllPets} from './api/productApi.js'
import {getAllOrder} from './api/userApi'
import UserInfo from './pages/userInfo';
import AdminLogin from './pages/adminLogin';
import ProtectedRoutes from './pages/protectedRoutes';
import AdminPage from './pages/adminPage';
import Order from './pages/order';
import FeedBack from './pages/feedBack';
import AdminProduct from './pages/adminPet';
import UpdateProduct from './pages/updateProduct';
import AdminOrder from './pages/adminOrder';
import UpdateOrder from './pages/updateOrder';
import ChangePassword from './pages/changePassword';
import Search from './pages/search';
export const AddContext = createContext();

export let pets =[];
export let petFoods =[];
export let petServices =[];
export let petProducts =[];

export let allPets =[];
export let allPetFoods =[];
export let allPetServices =[];
export let allPetProducts =[];

export let allOrder =[];


function App() {
  let hotPets=[];
  let order=[];
  const [cartItems, setCartItems]=useState([]);
  const [status, setStatus] = useState(false);
  
  //call api
  useEffect(()=>{

    // call api
    (async () => {
      
      pets = await getPets(1);
      petFoods = await getFoods(1);
      petServices = await getServices(1);
      petProducts = await getProducts(1);
      allPets = await getAllPets();
      allPetFoods = await getAllPetFoods();
      allPetServices = await getAllServices();
      allPetProducts = await getAllProducts();
      allOrder = await getAllOrder(localStorage.getItem('user'));
      setStatus(!status);
    })()
    
  },[])

  //create order obj
  useEffect(()=>{
    cartItems.forEach(element => {
     let tempObj = {
        id:'',
        type:'',
        quantity:''
     }
     tempObj.id = element.id;
     tempObj.type = element.type;
     tempObj.quantity = element.quantity;

     order.push(tempObj);
    
    });
  },[cartItems])

  for(var i=0;i<6;i++){
    if(pets[i])
    hotPets.push(pets[i])
  }

  function onAdd(product){
      const exist = cartItems.find(x=>x.name === product.name);

      if(exist){
          setCartItems(cartItems.map(x=>x.name === product.name ? {...exist, quantity: exist.quantity+1}: x));
      }
      else{
          setCartItems([...cartItems,{...product,quantity:1}]);
      }
  }

  function onRemove(product) {
      // for(var i=0;i<cartItems.length;i++){
      //   if(cartItems[i].name ===product.name){
      //     setCartItems(cartItems.splice(i,1)); 
      //     console.log(cartItems);
      //   }
      // }
      const newCartItems = cartItems.filter(cartItem => {return cartItem.name !== product.name})
      setCartItems(newCartItems);
  }
  return (
    <>
    <AddContext.Provider value={{cartItems, order}}>
      <Routes>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>

          <Route path="/pet" element={<Pet data={pets}/>}/>
          <Route path="/pet/:id" element={<PetProduct href="pet" onAdd={onAdd} data={pets}/>}/>

          <Route path="/petFood" element={<Category href="petFood" name="Thức ăn cho thú cưng" data={petFoods}/>}/>
          <Route path="/petFood/:id" element={<PetProduct href="petFood" onAdd={onAdd} data={petFoods}/>}/>
          
          <Route path="/petService" element={<Category href="petService" name="Dịch vụ" data={petServices}/>}/>
          <Route path="/petService/:id" element={<PetProduct href="petService" onAdd={onAdd} data={petServices}/>}/>

          <Route path="/petProduct" element={<Category href="petProduct" name="Sản phẩm cho thú cưng" data={petProducts}/>}/>
          <Route path="/petProduct/:id" element={<PetProduct href="petProduct" onAdd={onAdd} data={petProducts}/>}/>
          <Route path="/search/:id" element={<Search/>}/>



          <Route path="/cart" element={<Cart onRemove={onRemove}/>}/>
          <Route path="/userInfo" element={<UserInfo/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/feedback" element={<FeedBack/>}/>
          <Route path="/changePassword" element={<ChangePassword/>}/>



          
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/" element={<Home data={hotPets}/>}/>

            {/*Admin route */}
           <Route element={<ProtectedRoutes/>}>
              <Route path="/admin" element={<AdminPage/>}/>
              <Route path="/signIn/admin" element={<AdminLogin/>}/>

              <Route path="/admin/pet" element={<AdminProduct data={allPets}/>}/>
              <Route path="/admin/pet/:id" element={<UpdateProduct data={allPets}/>}/>

              <Route path="/admin/food" element={<AdminProduct data={allPetFoods}/>}/>
              <Route path="/admin/food/:id" element={<UpdateProduct data={allPetFoods}/>}/>

              <Route path="/admin/product" element={<AdminProduct data={allPetServices}/>}/>
              <Route path="/admin/product/:id" element={<UpdateProduct data={allPetServices}/>}/>

              <Route path="/admin/service" element={<AdminProduct data={allPetProducts}/>}/>
              <Route path="/admin/service/:id" element={<UpdateProduct data={allPetProducts}/>}/>

              <Route path="/admin/order" element={<AdminOrder data={allOrder}/>}/>
              <Route path="/admin/order/:id" element={<UpdateOrder data={allOrder}/>}/>

           </Route>


      </Routes>
    </AddContext.Provider>
    </>
    
  );
}

export default App;
