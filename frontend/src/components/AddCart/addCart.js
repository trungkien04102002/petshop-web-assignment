import {useState} from 'react'

// const Addcart = () => {

    

//     function AddItem(product){
     
//     return (
//         <div>
            
//         </div>
//     );
// }

export default Addcart;

export function AddItem (product){

    const [cartItems, setCartItems]=useState([]);
    const exits = cartItems.find(x=>x.id ===product.id);

    if(exits){
        setCartItems(cartItems.map(x=>x.id===product.id ? {...exits, qty: exits.qty+1}: x));
    }
    else{
        setCartItems(...cartItems,{...product,qty:1});
    }

}


