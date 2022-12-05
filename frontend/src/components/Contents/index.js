import Slider from "./Slider/slider";
import Category from "./ExampleCard/examCard";
import Card from "./Cards/card";
import Footer from "../Footer";
import Header from "../Header";
import dish from "../../images/dishfood.png";
import chef from "../../images/chef.png";
import foodList from '../../data/data';
import {useState} from 'react'



export default function Content() {
     const [state, setstate] = useState('popular');
    return (
      <>

    <Header/>
    
    <div className="w-64 h-64 z-10 bg-green-500 right-0 fixed clip hidden lg:flex">
        
    </div>

     <Slider></Slider>
     <Category></Category>
     <Card foodList={foodList} state={state} ></Card>

     {/*advertisement */}

      <div className="flex flex-col md:flex-row justify-center items-center pt-10 space-x-4 space-y-4 pb-4">
        <div className="basis-1/2 flex flex-col flex-wrap pl-16">
            <p className="mx-auto text-5xl font-bold leading-normal ">Cooked by the <br/>Best Chefs in the<br/> World</p>
            <p className="text-gray-500 text-lg mx-auto my-4 lg:pl-14">we present the best chef to cook your food to make<br/> the food state extraordinary</p>
            
            <div className="mx-auto">

            <div className="flex flex-row mr-32 my-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-green-500 mx-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-lg font-semibold">A guaranteed delicious meal</p>
            </div>

            <div className="flex flex-row mr-32 my-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-green-500 mx-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-lg font-semibold">Food is guaranteed hygienic</p>
            </div>

            <div className="flex flex-row mr-32 my-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-green-500 mx-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-lg font-semibold">Cooked quickly</p>
            </div>
            
            </div>
        </div>

        <div className="basis-1/2 flex flex-wrap items-center">
          <img src={chef} img="" className="m-auto pt-8 w-fit lg:pr-32"></img>
        </div>


      </div>
      
      
      <div className="flex flex-col md:flex-row justify-center items-center pt-10 space-x-4 space-y-4">

        <div className="basis-1/2 flex flex-wrap items-center">
          <img src={dish} img="" className="m-auto pt-8 w-fit lg:ml-32"></img>
        </div>

        <div className="basis-1/2 flex flex-wrap items-center mr-8">
          <p className="mx-auto text-5xl font-bold leading-snug ">Customer<br/> say about us</p>


          <div  className="container mx-auto px-4 max-w-lg
              transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 pt-8">
            <div className="md:flex flex-col md:flex-row md:flex-wrap md:-mx-4 mb-4 justify-center items-center">

              <div className=" md:px-2 mt-6 md:mt-0 ">
                <div className="rounded-lg testimonial p-6 hover:bg-gray-100 flex transition-colors duration-300 ">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                    <img src="https://gamek.mediacdn.vn/133514250583805952/2021/12/20/17939299-1631633830956-5a524af748005-1640018821731416772953.jpg" 
                    alt="profile" className="w-full h-full object-cover"/>
                  </div>
                  
                  <div>
                    <p className="text-gray-600">How much welght could you lose for good?
                        Members eat freely five days ơ week no rules or food
                        lIogging. How much welight could you lose for good?
                        Members eadt freely fiíve days ơ week no rules or food
                        logging five days a week.</p>

                    <div className="flex items-center mt-3 mb-2.5">
                              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                          </div>
                    
                    <div className="text-gray-900 font-bold uppercase mt-2">Tuna</div>
                    <div className="text-gray-600">Youtube</div>
                  </div>

                </div>
              </div>

            </div>
          </div>


        </div>

      </div>
    

    <Footer/>
      </>
    
    );
  }
  