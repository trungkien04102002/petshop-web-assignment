import {useEffect, useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import { editFood, editPet, editProduct, editService } from '../api/userApi';
const UpdateProduct = ({data}) => {

    const {id} = useParams();
    const prdID=id;
    let res = data.find( ({ id }) => id === parseInt(prdID) ) ;
    // const [post, setPost] = useState();
    const token =localStorage.getItem('user');
    const navigate=useNavigate();

    var notify ='success';
    var titleNotify='Update successful';
    var messageNotify='Please back to dish '

    const [formValue, setformValue] = useState({
        name: '',
        imageUrl:'',
        type: '',
        unitPrice:0,
        discountedPrice:0,
        breed:1,
        isBought:false,
      });
    
    //   useEffect(()=>{
    //     (async () => {
    //         const res = await register(formValue); 
    //         result =res;
    //         // console.log(result);

    //         if(result === undefined) {
    //             notify ='warning'
    //             titleNotify="Warning"
    //             messageNotify='Please enter full input'
    //             setState1(!state1)
    //         }
        
    //         if(result !==undefined) {
    //             if(result.message !== undefined) {
    //                 notify ='danger'
    //                 titleNotify="Register failure"
    //                 messageNotify=result.message;      
    //             }
    //             else if(result.email !== undefined) {
    //                 notify ='success'
    //                 titleNotify="Register successful"
    //                 messageNotify="Please back to Login page to login";
    //             }    
    //         }
    //       })()
    // },[state]);

    const handleChangeText = (event) => {
    setformValue({
        ...formValue,
        [event.target.name]: event.target.value
    });
    }


    const callApi =()=>{

        // console.log(formValue)
        res.name = formValue.name;
        res.imageUrl= formValue.imageUrl;
        res.unitPrice = formValue.unitPrice;
        res.discountedPrice = formValue.discountedPrice;
        res.type = formValue.type;

        if(res.type === 'pet'){
            res.breed = formValue.breed;
            res.isBought = formValue.isBought
        }

        console.log(res)
        if(res.type ==='pet'){
            editPet(token,res); 
        }
        if(res.type==='food'){         
            editFood(token,res); 
        }
        if(res.type==='service'){
            editService(token,res);
        }
        if(res.type==='product'){
            editProduct(token,res);
        }
    }

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
                    {/*name*/}
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="name">Name</label>
                        <input onChange={handleChangeText}
                        className="border py-2 px-3 text-grey-800" type="text" name="name" id="name" defaultValue={res.name}></input>
                    </div>

                    {/* image */}
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="image">Image Link</label>
                        <input onChange={handleChangeText}
                        className="border py-2 px-3 text-grey-800" type="text" name="imageUrl" id="image" defaultValue={res.imageUrl}/>
                    </div>

                    {/* type */}
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="category">Type</label>
                        <input onChange={handleChangeText}
                        className="border py-2 px-3 text-grey-800" type="text" name="type" id="category" defaultValue={res.type}/>
                    </div>

                    {/* price */}
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="price">Price</label>
                        <input onChange={handleChangeText}
                        className="border py-2 px-3 text-grey-800" type="text" name="unitPrice" id="price" defaultValue={res.unitPrice}/>
                    </div>

                    {/* discounted Price */}
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor=" dishDetails">Discounted Price</label>
                        <input onChange={handleChangeText}
                        className="border py-2 px-3 text-grey-800" type="text" name=" discountedPrice" id=" dishDetails" defaultValue={res.discountedPrice}/>
                    </div>

                    {/* breed */}
                    {
                        (res.breed !==undefined)?<div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="dishDescription">Chủng loại</label>
                        <input onChange={handleChangeText}
                        className="border py-2 px-3 text-grey-800" type="text" name="breed" id="dishDescription" defaultValue={res.breed}/>
                    </div>:null
                    }

                    {/* isBought */}
                    {
                        (res.isBought !==undefined)? 
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" htmlFor=" dishDetails">Tráng thái đã được mua hay chưa</label>
                            <input onChange={handleChangeText}
                            className="border py-2 px-3 text-grey-800" type="text" name="isBought" id=" dishDetails" defaultValue={res.isBought}/>
                        </div>:null
                    }

                    <div className="flex flex-wrap gap-2">

                    <button onClick={()=>{ callApi() ;handleNotify()}} className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Update</button>
                    </div>

                </div>
                <div className="uppercase text-md font-semibold text-center p-4 rounded hover:text-blue-500 cursor-pointer" type="submit"
                onClick={()=>{navigate('/admin')}}>Back</div>
            </div>
            
        </div>
       </>
    );
}

export default UpdateProduct;
