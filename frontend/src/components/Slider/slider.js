import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination} from 'swiper';

import slide1 from '../../img/slide5.png';
import slide2 from '../../img/slide4.png';
import slide3 from '../../img/slide3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const sliderList = [
    {
    id:1,
    content :'NHỮNG THÚ CƯNG CỰC DỄ THƯƠNG',
    secondaryContent :'TRẮNG MUỐT',
    thirContent :'So cute!',
    discount :'HÃY MUA NGAY',
    buttonContent:'Mua ngay',
    image:slide1
    },
  
    {
        id:1,
        content :'NHỮNG THÚ CƯNG CỰC DỄ THƯƠNG',
        secondaryContent :'VÀNG ÓNG',
        thirContent :'So cute!',
        discount :'HÃY MUA NGAY',
        buttonContent:'Mua ngay',
        image:slide2
    },
  
    {
        id:1,
        content :'NHỮNG THÚ CƯNG CỰC DỄ THƯƠNG',
        secondaryContent :'MÈO NÈ',
        thirContent :'So cute!',
        discount :'HÃY MUA NGAY',
        buttonContent:'Mua ngay',
        image:slide3
    },
      
  ]

const Slider = () => {
    return (
        <>
        <Swiper
            modules={[Autoplay,Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            pagination={{clickable:true}}
            autoplay={{ delay: 2500,disableOnInteraction: false }}

            >
                {
                sliderList.map((slider)=>(
                <SwiperSlide key ={slider.id}>   
                <>
                <div className="flex flex-col md:flex-row md:pt-20 pt-24">
                    <div  className="basis-3/4 rounded-lg flex items-center justify-center lg:ml-32">
                        <div className="flex flex-col p-8 lg:p-32">
                        <h3 className="text-gray-600 text-green-500 p-2">{slider.content}</h3>
                        <h2 className="font-medium text-5xl p-2">{slider.secondaryContent}</h2>
                        <h2 className="font-bold text-5xl p-2">{slider.thirContent}</h2>
                        <h3 className="font-bold text-2xl text-pink-400 p-3">{slider.discount}</h3>
                        <button className="mt-2 ml-2 whitespace-nowrap w-32 inline-flex items-center justify-center 
                        px-4 py-2 border border-transparent rounded-3xl shadow-sm text-base font-medium text-white bg-sky-400 hover:bg-sky-500">
                            {slider.buttonContent}</button>
                        </div>
                    </div>

                    <div className="basis-11/12 rounded-lg flex items-center justify-center hover:scale-105 ease-in-out duration-300">
                        <img alt="" src={slider.image}  className="w-auto lg:mr-32 mt-8"></img>
                    </div>
                </div>
                </>
                </SwiperSlide>
                ))
            }
        </Swiper>
        </>
    );
}

export default Slider;
