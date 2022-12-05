import React from 'react';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import Product from '../components/Product/product';

// import {pets} from '../data/data.js'
const Pet = ({data}) => {
    return (
        <>
            <Header/>
            <div className="font-extrabold text-3xl text-center pt-44 pb-8">Thú cưng</div>
            <div className="flex flex-row flex-wrap gap-4 justify-center">
                {
                    data.map((pet,key) => (
                        <Product key={key} pet={pet}/>
                    ))
                }
                
            </div>
            <Footer/>
        </>
    );
}

export default Pet;
