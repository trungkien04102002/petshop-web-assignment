import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import wishlist from '../img/wishlist.png'
import { editPet, userOrder } from '../api/userApi';

const Order = () => {
    const navigate = useNavigate();
    const [orders, setOrder]=useState([]);

    useEffect(() => {
        (async () => {

        const res = await userOrder(localStorage.getItem('user'))
        // const test = await editPet(localStorage.getItem('user'))

        if(res.data){
            if(!res.data.msg)
            setOrder(res.data);
        }
        })();
    }, []);
    return (
        <>
            <Header/>
            {
                (orders.length===0)?
                <div className="flex flex-col text-center justify-center items-center gap-y-4 pt-40">
                        <p className="font-extrabold text-4xl text-black">Đơn hàng của bạn</p>
                        <p>Hiện bạn đang chưa có đơn hàng nào</p>
                        <img className="ml-8 max-w-[200px]" src={wishlist} alt="list"/>
                        <p>Xem qua các mặt hàng và mua ngày nao!</p>
                        <button className="text-white font-semibold bg-gray-700 w-fit rounded-3xl p-2 px-6" onClick={()=>{navigate('/pet')}}>Mua hàng ngay</button>
                </div>
                :
                <div className="flex flex-col pt-40 mx-auto justify-center items-center gap-4">
                <p className="text-2xl font-bold">Đơn hàng của bạn</p>
                
                {
                    orders.map((order,key) => (
                        <div key={key} className="flex flex-row flex-wrap gap-4 border-b-2 border-gray-100 pt-8">
                            <div className="flex flex-col flex-wrap gap-4">
                                <p><b>Mã đơn hàng:</b> {order.orderID}</p>
                                <p><b>Phương thức thanh toán:</b> {order.paymentMethod}</p>
                            </div>

                            <div className="flex flex-col flex-wrap gap-4">
                                <p><b>Số tiền:</b> {order.totalPrice} VND</p>
                                <p><b>Tình trạng:</b> {(order.isProcessed === 0)?"Đang xử lý":"Đã hoàn thành"}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            }

            

           
            <Footer/>
        </>
    );
}

export default Order;
