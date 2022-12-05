import React from 'react';
import { useNavigate } from 'react-router-dom'

import heartIcon from '../../img/heartIcon.png'

const RelatedProduct = ({href,product}) => {
    const navigate=useNavigate();

    return (
        <>
            <div className="product-item flex flex-col relative gap-y-2 rounded-xl border border-gray-300 max-w-[350px] p-3 cursor-pointer hover:shadow-lg"
                onClick={()=>{navigate(`/${href}/${product.id}`)}}>
                <div className="flex flex-row justify-end">
                    <img className="w-5 h-5 cursor-pointer" src={heartIcon} alt="icon"/>
                </div>
                <img className="rounded-xl max-w-[350px] min-w-[250px] w-[300px] max-h-[320px] h-[320px] object-cover" src={product.imageUrl} alt="prd"/>
                <p className="font-semibold text-sm">{product.name}</p>
                <p className="font-bold text-xl">{product.unitPrice} VND</p>
                <div className="flex flex-row justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </>
    );
}

export default RelatedProduct;
