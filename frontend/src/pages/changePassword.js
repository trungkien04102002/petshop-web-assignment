import React from 'react';
import {useState} from 'react';
import { changePassword } from '../api/userApi';
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'


import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';

const ChangePassword = () => {

    const [password, setPassword] = useState();

    var notify ='warning';
    var titleNotify='Thông báo';
    var messageNotify='Post successful'

    const handleChange = event => {
        setPassword(event.target.value);
      };
    
    function callApi (){
        const res = changePassword(localStorage.getItem('user'),password)
        if(password=== undefined || password===null)
        messageNotify= "Chưa điền thông tin";
        setPassword(null);
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
            <Header/>
            <div className="flex flex-col pt-40 mx-auto items-center gap-4">
                <p className="text-3xl font-bold">Đổi mật khẩu</p>

                <div className="flex flex-col gap-1">
                    <label class="block text-gray-700 font-bold mb-2" for="password">
                        Nhập mật khẩu mới
                    </label>
                    <input  onChange={handleChange}
                            class="shadow appearance-none border lg:w-[500px] rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                            id="password" 
                            type="password" 
                            placeholder="******************"></input>
                    <button onClick={()=>{handleNotify();
                            callApi()}}
                            className=" p-2 bg-sky-200 rounded-2xl font-bold hover:bg-sky-300"
                    >Xác nhận</button>
                </div>
               
            </div>
            <Footer/>
        </>
    );
}

export default ChangePassword;
