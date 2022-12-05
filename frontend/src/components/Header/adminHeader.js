import React from 'react';
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
    const navigate=useNavigate();
  
    const active =()=>{
        const btn = document.querySelector('.moblie-menu-btn');
        const sidebar = document.querySelector('.sidebar');
        
        btn.addEventListener('click',()=>{
            sidebar.classList.toggle('-translate-x-full');
        })
    }
    return (
       <>
        {/* destop menu */}

        <div className="fixed top-0 left-0 sidebar flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden
        transform -translate-x-full transition duration-200 ease-in-out md:relative md:translate-x-0">
            <div className="flex items-center justify-center h-20 shadow-md">
            <h1 className="text-xl uppercase text-indigo-500 font-semibold">Admin Center</h1>
            </div>

            <ul className="flex flex-col py-4">
            <li>
                <div className="cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                onClick={()=>{navigate('/admin')}}>
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                <span className="text-sm font-medium">Dashboard</span>
                </div>
            </li>

            <li>
                <div className="cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                onClick={()=>{navigate('/admin/pet')}}>
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                <span className="text-sm font-medium">Thú cưng</span>
                </div>
            </li>

            <li>
                <div className="cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                onClick={()=>{navigate('/admin/food')}}>
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                <span className="text-sm font-medium">Thức ăn</span>
                </div>
            </li>

            <li>
                <div className="cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                onClick={()=>{navigate('/admin/product')}}>
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
                <span className="text-sm font-medium">Dịch vụ</span>
                </div>
            </li>

            <li>
                <div className="cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                onClick={()=>{navigate('/admin/service')}}>
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                <span className="text-sm font-medium">Phụ kiện</span>
                </div>
            </li>

            <li>
                <div className="cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                onClick={()=>{navigate('/admin/order')}}>
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                <span className="text-sm font-medium">Order</span>
                </div>
            </li>

            <li>
                <div className="cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                onClick={()=>{navigate('/admin/account')}}>
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                <span className="text-sm font-medium">Tài khoản</span>
                </div>
            </li>

            <li>
                <div onClick={()=>{
                    if(localStorage.getItem('user')!==null){ 
                        localStorage.removeItem('user')
                        navigate('/')}
                    }}
                className="cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                <span className="text-sm font-medium">Logout</span>
                </div>
            </li>
            </ul>
        </div>

        {/* moblie menu */}
        
        <div className="bg-white flex justify-between md:hidden fixed top-0 right-0 left-0">
         <h1 className="text-xl uppercase text-indigo-500 font-semibold p-4">Admin Center</h1>

         <button className="moblie-menu-btn p-4 focus:outline-none focus:bg-gray-50" onClick={()=>{active()}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
         </button>
        </div>
       </>
    );
}

export default AdminHeader;
