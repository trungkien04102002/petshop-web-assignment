import React from 'react';
import { useNavigate,useParams } from "react-router-dom";
import {useEffect,useState} from 'react'


import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import RelatedProduct from '../components/Product/relatedProduct';
import { search } from '../api/productApi';

const Search = () => {

    const {id} = useParams();
    const [data, setData] = useState([]);
    //call api
    useEffect(() => {
        (async () => {
          const res = await search(id);
          setData(res);
          console.log(data);
        })();
      }, [id]);

    function cate(product){
        if(product.type === 'pet')
            return 'pet'
        if(product.type === 'food')
            return 'petFood'
        if(product.type === 'service')
            return 'petService'
        if(product.type === 'product')
            return 'petProduct'
    }

    return (
        <>
            <Header/>
            <p className="font-extrabold text-3xl text-center pt-44 pb-8">Tìm kiếm kết quả cho: {id}</p>
            <div className="flex flex-row flex-wrap gap-4 justify-center">
                {
                    data.map((product,key)=>(
                        
                        <RelatedProduct href={cate(product)} product={product} key={key}/>
                    ))
                }

            </div>
            <Footer/>
        </>
    );
}

export default Search;
