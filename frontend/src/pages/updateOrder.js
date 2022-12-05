import {useEffect, useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import { updateOrderStatus } from '../api/userApi';

const UpdateOrder = ({data}) => {
    const {id} = useParams();
    const prdID=id;
    let res = data.find( ({ orderID }) => orderID === parseInt(prdID) ) ;
    const navigate=useNavigate();

    var notify ='success';
    var titleNotify='Update successful';
    var messageNotify='Please back to dish '

    console.log(res.orderID)
    // const [ID, setID] = useState(false);
    
    // const handleChange = event => {
    //     setID(event.target.value);
    //   };

     //notify
     const handleNotify=()=>{
        Store.addNotification({
            title: titleNotify,
            message: messageNotify,
            type: notify,
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2500,
              onScreen: true
            }
          });
      }
    return (
       <>
        <ReactNotifications/>
        <div className="flex justify-center items-center py-8 w-full bg-sky-100">
            <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
                <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Update Product</h1>
                <div >
                    {/*userID*/}
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="name">userID</label>
                        <input
                        className="border py-2 px-3 text-grey-800" type="text" name="name" id="name" defaultValue={res.userID}></input>
                    </div>

                    {/* payment method */}
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="image">Payment method</label>
                        <input
                        className="border py-2 px-3 text-grey-800" type="text" name="image" id="image" defaultValue={res.paymentMethod}/>
                    </div>

                    {/* total price */}
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="category">Total price</label>
                        <input
                        className="border py-2 px-3 text-grey-800" type="text" name="category" id="category" defaultValue={res.totalPrice}/>
                    </div>

                    {/* isPaid */}
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="price">isPaid</label>
                        <input
                        className="border py-2 px-3 text-grey-800" type="text" name="price" id="price" defaultValue={res.isPaid}/>
                    </div>


                    {/* breed */}
                    {
                        (res.breed !==undefined)?<div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="dishDescription">Chủng loại</label>
                        <input
                        className="border py-2 px-3 text-grey-800" type="text" name="dishDescription" id="dishDescription" defaultValue={res.breed}/>
                    </div>:null
                    }

                    {/* isBought */}
                    {
                        (res.isBought !==undefined)? 
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" htmlFor=" dishDetails">Tráng thái đã được mua hay chưa</label>
                            <input
                            className="border py-2 px-3 text-grey-800" type="text" name=" dishDetails" id=" dishDetails" defaultValue={res.isBought}/>
                        </div>:null
                    }

                    <div className="flex flex-wrap gap-2">

                    <button onClick={()=>{  updateOrderStatus(localStorage.getItem('user'),res.orderID); ;handleNotify()}} className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Update isPaid status</button>
                    </div>

                </div>
                <div className="uppercase text-md font-semibold text-center p-4 rounded hover:text-blue-500 cursor-pointer" type="submit"
                onClick={()=>{
                    navigate('/admin')}}>Back</div>
            </div>
            
        </div>
       </>
    );
}

export default UpdateOrder;
