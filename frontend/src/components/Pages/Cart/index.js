import { useContext, useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { AddContext } from "../../../App";


const listCart =[
    {
        name:'Salamon salad',
        price:49,
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png'
    },
    {
        name:'Salamon salad',
        price:49,
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png'
    },
    {
        name:'Salamon salad',
        price:49,
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png'
    },
    {
        name:'Salamon salad',
        price:49,
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png'
    },
]


export default function Cart({onRemove}) {

    const cartItems= useContext(AddContext);

    // console.log(cartItems);
    // console.log(listCart);
    
    
    const[ count,setCount]= useState(false);

    var totalPrice =0;
    for(var i =0;i<cartItems.length;i++) {
      totalPrice += cartItems[i].price*cartItems[i].qty;
    }

  return (
    <>
    <Header/>
    <p className="text-xl font-bold pt-32 ml-32 pb-8">Shopping Cart</p>

    <div className="flex flex-col flex-wrap lg:flex-row items-center justify-center space-y-8">
        {/* cart items */}
        <div className="basis-1/2 flex flex-col flex-wrap items-center space-y-8 lg:pl-32">
        {cartItems.length ===0 && <div className="text-2xl font-bold m-auto ml-20"> Cart is empty</div>} 
        {
            cartItems.map((cart,index)=>(

            <div key ={index} className="md:w-5/6 items-center justify-center flex flex-col md:flex-row flex-wrap 
            bg-gray-100 rounded-2xl pl-2 border border-green-400 border-2 shadow-lg hover:bg-white">
                   <div className="flex">
                    <img src={cart.image} alt="" className="w-28 h-28 p-2 "></img>
                    <p className="m-auto font-semibold ml-4 mr-4 text-lg">{cart.name}</p>
                   </div>

                    <div className="flex ">

                    <button className="mt-12 mb-12 bg-white rounded-xl m-auto bg-green-300" 
                    onClick={()=>{setCount(!count); cart.qty=cart.qty+1;} }>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    </button>
                    
                    <div className=" m-auto rounded-2xl px-2" >{cart.qty}</div>

                    <button className=" mt-12 mb-12 bg-white rounded-xl m-auto bg-green-300" 
                    onClick={()=>{setCount(!count); cart.qty=cart.qty-1;
                        if(cart.qty<1)
                          cart.qty=1; 
                          }
                        }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                        </svg>
                    </button>

                    <p className="m-auto ml-8 text-2xl font-semibold">${+cart.price *(+cart.qty)}</p>

                    <button className="bg-red-300 rounded-2xl m-auto ml-12 mr-4" onClick={()=>{setCount(!count); onRemove(cart); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
            </div>
            ))
        }

        </div>


        {/*cart info */}
        <div className="basis-1/3 flex flex-col items-left md:mr-16 px-2">
            <div className="bg-gray-100  rounded-2xl pb-8">
            
              <p className="text-xl font-semibold mx-8 mt-8">Cart Items</p>

              <p className="mx-8 mt-4">Payment Method</p>

              <div className="mx-4 mt-4 items-center flex">
                <div className="flex items-center mb-4 border border-green-500 border-2 bg-white rounded-xl mx-8 mt-4 items-center flex">
                  <input id="payment-option-1" type="radio" name="payments" value="USA" 
                  className=" ml-4 w-6 h-6 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 
                  dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" defaultChecked/>

                  <label htmlFor="payment-option-1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <img className="w-8 md:w-16 mx-4 mr-6 my-2" src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" alt=""></img>
                  </label>
                </div>

                <div className="flex items-center mb-4 border border-green-500 border-2 bg-white rounded-xl mx-8 mt-4 items-center flex">
                  <input id="payment-option-2" type="radio" name="payments" value="USA" 
                  className=" ml-4 w-6 h-6 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 
                  dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>

                  <label htmlFor="payment-option-2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 md:w-16 mx-4 mr-6 my-2 fill-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </label>
                </div>
              </div>

              <div className="mb-6 mx-4">
              <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 ">Họ và tên</label>
              <input type="text" id="large-input" className="bg-gray-50 border border-blue-400 text-gray-900 border-2
              text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
              block w-full p-2.5 "/>
              </div>

              <div className="mb-6 mx-4">
              <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Địa chỉ</label>
              <input type="text" id="base-input" className="bg-gray-50 border border-blue-400 text-gray-900 border-2
              text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
              block w-full p-2.5"/>
              </div>

              <div className="mx-4">
              <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Ghi chú</label>
              <input type="text" id="small-input" className="bg-gray-50 border border-blue-400 text-gray-900 border-2
              text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
              block w-full p-2.5"/>
              </div>

              <p className="font-semibold text-xl mx-4 mt-4">Total pay: ${totalPrice}</p>

              <button className="mt-8 ml-4 whitespace-nowrap w-32 inline-flex items-center justify-center 
                  px-4 py-2 border border-transparent rounded-3xl shadow-sm text-base font-medium text-white bg-blue-400 hover:bg-blue-600"> Check out</button>
            </div>
        </div>

     </div>
    
    
    <Footer/>

    </>
  )
}
