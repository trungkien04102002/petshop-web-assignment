import React from 'react';
import {useState} from 'react'

const CartPrd = ({setStatus,onRemove,product}) => {
    const[ count,setCount]= useState(false);
    let quantity = 0;
    return (
        <>
             <div className="flex flex-row flex-wrap items-center gap-x-4 p-4 gap-y-4 border-b-2 border-gray-200 justify-between">

                {/*  info */}
                <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-4 ">
                    {/* remove button */}
                    <svg onClick={()=>{setCount(!count);onRemove(product)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="cursor-pointer w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                    <img className="w-32 h-32 rounded-lg" src={product.imageUrl} alt="list"/>
                    <div className="flex flex-col gap-y-2 min-w-[320px]">
                        <p className="text-lg">{product.name}</p>
                        <p className="text-lg">{+product.quantity *(+product.unitPrice) } VND</p>
                    </div>
                </div>
              

                {/* counter */}
                <div className="flex flex-row flex-wrap gap-4 items-center mx-auto">
                    <button className="" onClick={()=>{ setCount(!count); product.quantity = product.quantity-1;
                        if(product.quantity<1) product.quantity = 1}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                        </svg>
                    </button>
                    <div className="m-auto rounded-2xl px-2" >{product.quantity}</div>
                    <button className="" onClick={()=>{setCount(!count);product.quantity = product.quantity+1;}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                </div>

            </div>
        </>
    );
}

export default CartPrd;
