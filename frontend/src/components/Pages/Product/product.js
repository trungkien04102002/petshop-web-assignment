import {useParams} from 'react-router-dom';
import { useState} from "react";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Store } from 'react-notifications-component';
import 'animate.css/animate.min.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import Notification from '../../Notification/notification';
import Footer from '../../Footer';
import Header from '../../Header';


// fake api data
const rates = [
    { 
      name:'- Tuna.',
      company:'Apple',
      comment: 'Very delicious, best service. Perfect!',
      image:'https://gamek.mediacdn.vn/133514250583805952/2021/12/20/17939299-1631633830956-5a524af748005-1640018821731416772953.jpg'
    },
    { 
      name:'- Tuna.',
      company:'Apple',
      comment: 'Very delicious, best service. Perfect!',
      image:'https://gamek.mediacdn.vn/133514250583805952/2021/12/20/17939299-1631633830956-5a524af748005-1640018821731416772953.jpg'
    },
    { 
      name:'- Tuna.',
      company:'Apple',
      comment: 'Very delicious, best service. Perfect!',
      image:'https://gamek.mediacdn.vn/133514250583805952/2021/12/20/17939299-1631633830956-5a524af748005-1640018821731416772953.jpg'
    },
    { 
      name:'- Tuna.',
      company:'Apple',
      comment: 'Very delicious, best service. Perfect!',
      image:'https://gamek.mediacdn.vn/133514250583805952/2021/12/20/17939299-1631633830956-5a524af748005-1640018821731416772953.jpg'
    },
    { 
      name:'- Tuna.',
      company:'Apple',
      comment: 'Very delicious, best service and',
      image:'https://gamek.mediacdn.vn/133514250583805952/2021/12/20/17939299-1631633830956-5a524af748005-1640018821731416772953.jpg'
    },
    { 
      name:'- Tuna.',
      company:'Apple',
      comment: 'Very delicious, best service. Perfect!',
      image:'https://gamek.mediacdn.vn/133514250583805952/2021/12/20/17939299-1631633830956-5a524af748005-1640018821731416772953.jpg'
    },
    { 
      name:'- Tuna.',
      company:'Apple',
      comment: 'Very delicious, best service. Perfect!',
      image:'https://gamek.mediacdn.vn/133514250583805952/2021/12/20/17939299-1631633830956-5a524af748005-1640018821731416772953.jpg'
    }
]

let isLogin = true;

export default function Product({onAdd,foodList}) {

    // notify when add 
    const {id} = useParams();
    const foodId = id;
    let notify ='warning';
    let titleNotify='Add failure';
    let messageNotify='Please login to add to cart'

    if(isLogin){
      notify='success';
      titleNotify='Add to your Cart successfully';
      messageNotify='"Check your cart!';
    }

    const handleNotify=()=>{
      Store.addNotification({
        title: titleNotify,
        message: messageNotify,
        type: notify,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2200,
          onScreen: true
        }
      })
    } 

    // find item in data
    let result = foodList.find( ({ id }) => id === parseInt(foodId) );
    // update status
    const[state,setState] = useState(false);


    return (
      <>
       <div>
          <ReactNotifications/>
           <Header/>

            <div className="flex flex-col lg:flex-row flex-wrap gap-x-8 gap-y-20 justify-center items-center pt-32 md:pt-48">

                <div className="basis-1/3 rounded-lg flex flex-col items-left justify-center p-2">
                    <p className="text-5xl font-semibold block ">{result.name}</p>

                    <div className="flex items-center mt-2.5 mb-5 pt-4">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                    
                    <p className="text-gray-600">{result.dishDescription}</p>

                    <p className="text-4xl font-bold py-4">${result.price}</p>

                    <button className="whitespace-nowrap w-36 h-12 inline-flex items-center justify-center px-2 py-1
                        border border-transparent rounded-3xl shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                        onClick={()=>{ 
                            result.isCheck = !result.isCheck;
                            setState(!state);
                            handleNotify();
                            onAdd(result);
                            }}
                        >Order now</button>
                </div>

                <div className=" basis-1/3 items-left justify-center">
                    <img className="ml-8 w-80 lg:w-full" src={result.image} alt="" ></img>
                </div>

            </div>

            <p className="text-green-600 font-semibold text-3xl text-center p-8 hover:text-blue-600 
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rotate-6 hover:skew-x-6">
            Reviews</p>

            <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        pagination={{clickable:true}}
        autoplay={{ delay: 2500,disableOnInteraction: false }}
        breakpoints={{
          // when window width is >= 640px
        
          // when window width is >= 768px
          768:{
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
        },
  }}
        
      >

      <div className="testimonial-1 py-4 md:py-20">

        {
        rates.map((testi,index)=>(

          <SwiperSlide key ={index}>

          <div  className="container mx-auto px-4">
            <div className="md:flex flex-col md:flex-row md:flex-wrap md:-mx-4 mb-4 justify-center items-center">

              <div className=" md:px-2 mt-6 md:mt-0 ">
                <div className="rounded-lg testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                    <img src={testi.image} alt="profile" className="w-full h-full object-cover"/>
                  </div>
                  
                  <div>
                    <p className="text-gray-600">{testi.comment}</p>

                    <div className="flex items-center mt-3 mb-2.5">
                              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                          </div>
                    
                    <div className="text-gray-900 font-bold uppercase mt-2">{testi.name}</div>
                    <div className="text-gray-600">{testi.company}</div>
                  </div>

                </div>
              </div>

            </div>
          </div>
          </SwiperSlide>



        ))

        }



      </div>

            </Swiper>

           <Footer/>
       </div>
      </>
    )
}

  
