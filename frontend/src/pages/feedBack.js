import React from 'react';
import {useEffect,useState} from 'react'
import { userFeedback,postFeedback } from '../api/userApi';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';

const FeedBack = () => {

    const [feedbacks, setFeedback] = useState([]);
    const [message,setMessage] = useState();
    const [status, setStatus] = useState(false);

    const handleChange = event => {
       setMessage(event.target.value)
       console.log(message);
      };

    useEffect(() => {
        (async () => {
          const res = await userFeedback(); 
         
          if(!res.msg){
            setFeedback(res)
          }
        })();
      }, [status]);

    return (
        <>
            <Header/>
            <div className="flex flex-col gap-4 pt-40 items-center mx-auto ">
                <p className="text-3xl font-bold">Phản hồi từ khách hàng</p>

                <div className="section flex flex-col gap-4 gap-y-6">
                    {
                        feedbacks.map((feedback,key)=>(
                            <div className="flex flex-col gap-4 bg-gray-50 rounded-xl p-2 shadow-md lg:w-[650px]">
                                <div className="flex flex-row gap-2 items-center border-b-2 border-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    <div className="flex flex-col">
                                        <p className="font-bold text-lg">{feedback.fullName}</p>
                                        <p className="italic text-gray-600 text-sm">{feedback.email}</p>
                                    </div>
                                
                                </div>
                                <p className="font-semibold">"{feedback.content}"</p>
                            </div>
                        ))
                    }
                </div>
              
                <div class="flex flex-col gap-4 form-group mb-6 gap-4">

                <textarea 
                onChange={handleChange}
                className="
                    form-control
                    block
                    w-full
                    lg:w-[650px]
                    w-[400px]
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Phản hồi của bạn"
                ></textarea>

                <button onClick={()=>{
                    setStatus(!status);
                    postFeedback(localStorage.getItem('user'),message)
                }} className="p-1 px-4 bg-sky-400 rounded-xl font-bold">Gửi</button>
    </div>

            </div>
            <Footer/>
        </>
    );
}

export default FeedBack;
