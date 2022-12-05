import React from 'react';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import RelatedProduct from '../components/Product/relatedProduct';


const Category = ({href,name,data}) => {
    return (
       <>
        <Header/>
            <p className="font-extrabold text-3xl text-center pt-44 pb-8">{name}</p>
            <div className="flex flex-row flex-wrap gap-4 justify-center">
                {
                    data.map((product,key)=>(
                        <RelatedProduct href={href} product={product} key={key}/>
                    ))
                }

            </div>
        <Footer/>
       </>
    );
}

export default Category;
