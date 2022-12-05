import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import Header from '../../Header';
import Footer from '../../Footer';

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

export default function About() {

  

    return (
      <>
      <Header/>

      <p className="pt-4 text-center text-2xl font-semibold pt-32">About Us</p>
      <p className="pt-1 text-center text-3xl font-semibold uppercase text-green-600 pb-8 hover:text-blue-600 
      transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rotate-3 hover:skew-x-3">
       why you choice our restaurant?</p>

      <div className="flex flex-row justify-center items-center lg:space-x-10">
      
      
        <div className="hidden lg:flex basis-1/3 rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
          <img className="" src="https://www.sgsgroup.com.hk/-/media/global/images/structural-website-images/hero-images/hero-agri-appetizers.jpg" alt=""></img>
        </div>
      
        <div className="basis-1/3">  
          <h2 className="font-semibold md:text-3xl sm:text-xl text-center">We serve the best delicious and quality foods.</h2>

          <h2 className="text-md pt-4 px-4 sm:px-0">Our restaurant's dishes use ingredients fresh, clean, and carefully selected before processing.</h2>
          <br/>
          <h2 className="text-md px-4 sm:px-0">Our restaurant chooses chefs with professional working styles and experience serving in large restaurants! hello</h2>
          
          <div className="flex flex-row justify-center items-center space-x-2 sm:space-x-4 py-8">
            
            <div className="text-sm flex basis-1/3 rounded-lg p-2 text-center border border-2 border-green-500 font-medium
                            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-green-400 hover:bg-indigo-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-green-500 ml-3" viewBox="0 0 20 20" fill="currentColor" >
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="m-auto ml-2">Fresh food</p>
            </div>

            <div className="text-sm flex basis-1/3  rounded-lg p-2 text-center border border-2 border-green-500 font-medium
                            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-green-400 hover:bg-indigo-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-green-500 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            <p className="m-auto ml-2">Fast delivery</p>
            </div>

            <div className="text-sm flex basis-1/3  rounded-lg p-2 text-center border border-2 border-green-500 font-medium
                            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-green-400 hover:bg-indigo-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-green-500 ml-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
            <p className="m-auto ml-2">Fast payment</p>
            </div>
          </div>

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


      <div className="testimonial-1 py-4 md:py-12">

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

        <Footer></Footer>
  
      </>
    )
}