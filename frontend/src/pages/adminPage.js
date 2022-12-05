import { useNavigate } from "react-router-dom";
import {useEffect,useState} from 'react'
import AdminHeader from "../components/Header/adminHeader";
import {getUser,getAllOrder} from '../api/userApi'

const cates =[
    {
        name:'Thú cưng',
        path:'pet'
    },
    {
        name:'Thức ăn',
        path:'food'
    },
    {
        name:'Phụ kiện',
        path:'product'
    },
    {
        name:'Dịch vụ',
        path:'service'
    },
]

const AdminPage = () => {
  const navigate=useNavigate();
  const [listOrder, setListOrder] = useState([]);

   // call api
  useEffect(()=>{
    (async () => {
      const order = await await getAllOrder(localStorage.getItem('user'));
      setListOrder(order);
    })()
  },[])

  let res=[] ;
    return (
        <>
             <div className="min-h-screen md:flex md:flex-row bg-gray-100 ">
                <AdminHeader/>
      
                <div className="md:w-full">

                {/*Category card */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-4 lg:flex lg:justify-between">
                    <p className="font-semibold md:pl-16 pt-20 lg:pt-16 md:text-justify text-center">Expenses By Category</p>
                    </div>
                    
                    <div className="flex md:flex-row flex-col flex-wrap items-center lg:justify-center md:pl-16 gap-4 pt-4 cursor-pointer">

                    {
                        
                        cates.map((cate,index)=>(
                        
                        <div className="md:basis-1/3 lg:basis-[22%] bg-white p-6 rounded-xl border border-gray-50 hover:bg-blue-100"
                        onClick={()=>{navigate(`/admin/${cate.path}`)}}>
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col">
                                    <p className="text-xs text-gray-600 tracking-wide">Category</p>
                                    <h3 className="mt-1 text-lg text-blue-500 font-bold">{cate.name}</h3>
                                </div>
                                <div className="bg-gray-200 p-2 md:p-1 xl:p-2 rounded-md">
                                    {/* <img src="" alt="icon" className="w-auto h-8 md:h-6 xl:h-8 object-cover"/> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                        </svg>
                                </div>
                            </div>
                    </div>
                        
                        ))
                    }

                    


                    </div>

                {/*Order list */}
                <p className="font-semibold md:pl-16 pt-8 lg:pt-8 md:text-justify text-center pb-4">Order in process</p>

                <div className="bg-white rounded-lg overflow-x-auto mx-16 divide-y-2 px-8">

                <p className="font-semibold p-4 md:text-justify text-center ">Last process</p>
                    

                    {
                        listOrder.map((order,key)=>(
                            <li class="py-3 flex justify-between text-sm items-center mx-auto text-gray-500 font-semibold">
                                <p class="px-4 font-semibold">OrderID: {order.orderID}</p>
                                <p class="px-4 text-gray-600">UserID: {order.userID}</p>
                                {/* <p class="px-4 tracking-wider">Cash</p> */}
                                <p class="px-4 text-blue-600">{order.totalPrice} VND</p>
                                <p class="md:text-base text-gray-800 flex items-center gap-2">Payment method: {order.paymentMethod}</p>
                            </li>
                        ))
                    }

                </div>


                </div>

            </div>
        </>
    );
}

export default AdminPage;
