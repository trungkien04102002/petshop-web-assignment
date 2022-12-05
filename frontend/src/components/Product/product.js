import React from 'react';
import { useNavigate } from 'react-router-dom'

import '../../scss/_product.scss'

import slide5 from '../../img/slide5.png'
const Product = ({pet}) => {
    const navigate=useNavigate();
    return (
        
    <>
        <div className="product-item" onClick={()=>{navigate(`/pet/${pet.id}`)}}>
            <div className="product-thumb bg-sky-50">
                
                <img className="w-[370px] h-[420px]" src={pet.imageUrl} width="370" height="450" alt="Image-HasTech"/>
                <span className="flag-new">new</span>
                <div className="product-action">
                    <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
            <div className="product-info">
                <div className="product-rating">
                    <div className="rating">
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-half-o"></i>
                    </div>
                </div>
                <h4 className="title"><a href="product-details.html">{pet.name}</a></h4>
                <div className="prices">
                    <span className="price">{pet.unitPrice} VND</span>
                </div>
            </div>
            <div className="product-action-bottom">
                <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    </>
    );
}

export default Product;
