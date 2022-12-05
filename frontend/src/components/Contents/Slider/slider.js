
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination} from 'swiper';
import beepsteak from '../../../images/beefsteak.png'
import salad from '../../../images/salad.png'
import salad2 from '../../../images/salad2.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const sliderList = [
  {
  id:1,
  content :'THE BEST CUISINE AWAITS YOUS',
  secondaryContent :'Beefsteak',
  thirContent :'Delicious!',
  discount :'20% | DISCOUNT UPON',
  buttonContent:'Register',
  image:beepsteak
  },

  {
  id:2,
  content :'THE BEST CUISINE AWAITS YOUS',
  secondaryContent :'Best food',
  thirContent :'Healthy food',
  discount :'20% | DISCOUNT UPON',
  buttonContent:'Register',
  image:salad
  },

  {
    id:3,
    content :'THE BEST CUISINE AWAITS YOUS',
    secondaryContent :'Welcome!',
    thirContent :'To my food',
    discount :'20% | DISCOUNT UPON',
    buttonContent:'Register',
    image:salad2
  },
    
]


export default function Slider() {
  return (
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
          <div className="flex flex-col md:flex-row pt-16">
            <div  className="basis-3/4 rounded-lg flex items-center justify-center lg:ml-32">
                <div className="flex flex-col p-8 lg:p-32">
                  <h3 className="text-gray-600 p-2">{slider.content}</h3>
                  <h2 className="font-medium text-5xl p-2">{slider.secondaryContent}</h2>
                  <h2 className="font-bold text-5xl p-2">{slider.thirContent}</h2>
                  <h3 className="font-bold text-3xl text-green-600 p-4">{slider.discount}</h3>
                  <button className="mt-2 ml-2 whitespace-nowrap w-32 inline-flex items-center justify-center 
                  px-4 py-2 border border-transparent rounded-3xl shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600">
                      {slider.buttonContent}</button>
                </div>
            </div>

              <div className="basis-11/12 rounded-lg flex items-center justify-center ">
                <img src={slider.image}  className="w-auto lg:mr-32 mt-8"></img>
              </div>
          </div>
          </>
          </SwiperSlide>
        ))
      }
    
    </Swiper>
  );
};
