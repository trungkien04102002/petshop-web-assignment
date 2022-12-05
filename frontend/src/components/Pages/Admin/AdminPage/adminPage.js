import { useNavigate } from "react-router-dom";
import AdminHeader from "../../../Header/adminHeader";
import { cate } from "../../../../data/data";

export default function AdminPage() {
  const navigate=useNavigate();
  let res=[] ;
  for(let i=0;i<cate.length-1;i++) {
    res.push(cate[i]) ;
  }

  return (
    
    <>
    <div className="min-h-screen md:flex md:flex-row bg-gray-100 ">
      <AdminHeader/>
      
    
    <div className="md:w-full">

    {/*Category card */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 lg:flex lg:justify-between">
        <p className="font-semibold md:pl-16 pt-20 lg:pt-16 md:text-justify text-center">Expenses By Category</p>
        <p className="font-semibold md:pl-16 pt-16 pr-32 text-right uppercase hidden lg:flex hover:text-blue-500 cursor-pointer"
        onClick={()=>{navigate('/admin/cate')}}
        >More</p>
        </div>
        
        <div className="flex md:flex-row flex-col flex-wrap items-center lgjustify-center md:pl-16 gap-4 pt-4 cursor-pointer">

          {
            
            res.map((category,index)=>(
            
            <div key={index} className="md:basis-1/3 lg:basis-[22%] bg-white p-6 rounded-xl border border-gray-50 hover:bg-blue-100"
            onClick={()=>{navigate(`cate/${category.cateID}`)}}>
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <p className="text-xs text-gray-600 tracking-wide">Category</p>
                    <h3 className="mt-1 text-lg text-blue-500 font-bold">{category.cateName}</h3>
                    <span className="mt-4 text-xs text-gray-500">Last Transaction 3 Hours ago</span>
                </div>
                <div className="bg-blue-500 p-2 md:p-1 xl:p-2 rounded-md">
                    <img src="https://atom.dzulfarizan.com/assets/dish-2.png" alt="icon" className="w-auto h-8 md:h-6 xl:h-8 object-cover"/>
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
        
     
        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
          <p class="px-4 font-semibold">Today</p>
          <p class="px-4 text-gray-600">McDonald</p>
          <p class="px-4 tracking-wider">Cash</p>
          <p class="px-4 text-blue-600">Food</p>
          <p class="md:text-base text-gray-800 flex items-center gap-2">
              16.90
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
          </p>
        </li>

        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
          <p class="px-4 font-semibold">Today</p>
          <p class="px-4 text-gray-600">McDonald</p>
          <p class="px-4 tracking-wider">Cash</p>
          <p class="px-4 text-blue-600">Food</p>
          <p class="md:text-base text-gray-800 flex items-center gap-2">
              16.90
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
          </p>
        </li>
        
        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
          <p class="px-4 font-semibold">Today</p>
          <p class="px-4 text-gray-600">McDonald</p>
          <p class="px-4 tracking-wider">Cash</p>
          <p class="px-4 text-blue-600">Food</p>
          <p class="md:text-base text-gray-800 flex items-center gap-2">
              16.90
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
          </p>
        </li>
        
        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
          <p class="px-4 font-semibold">Today</p>
          <p class="px-4 text-gray-600">McDonald</p>
          <p class="px-4 tracking-wider">Cash</p>
          <p class="px-4 text-blue-600">Food</p>
          <p class="md:text-base text-gray-800 flex items-center gap-2">
              16.90
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
          </p>
        </li>

      </div>


    </div>

    



    </div>

        
        
    </>

    
  )
}
