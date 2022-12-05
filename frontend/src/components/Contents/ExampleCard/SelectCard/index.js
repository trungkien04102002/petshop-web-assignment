import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation} from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const selectMenu = [
    {
        title:'Fast food',
        type:'Fast food',
        image:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
    },
    {
        title:'Sushi',
        type:'Sushi',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png'
    },
    {
        title:'Dessert',
        type:'Dessert',
        image:'https://www.nicepng.com/png/full/95-951391_caramel-pudding-cream-caramel-pudding-png.png'
    },
    {
        title:'Soups',
        type:'Soups',
        image:'https://salt.tikicdn.com/cache/w1200/ts/product/e4/3b/54/8c56ac7bfc2f45bba05efcde966d9250.png'
    },
    {
        title:'Drinks',
        type:'Drinks',
        image:'https://shopnguyenlieu.com/wp-content/uploads/2019/09/tradaothachdao-550x467.png'
    },
  ]
export default function SelectCard({state,setState}) {
    return (
      <>
        <p className="text-2xl font-semibold text-center pt-32"> Options</p>

        <Swiper
        modules={[Autoplay,Navigation]}
        spaceBetween={-150}
        slidesPerView={1}
        loop={true}
        navigation
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
            {
                selectMenu.map((menu,index)=>(
                <SwiperSlide key={index}>
                    <div className="flex flex-col lg:flex-row flex-wrap gap-x-8 gap-y-20 justify-center items-center pt-8 mb-4"
                    onClick={()=>{setState(menu.type)}}
                    >
                    <div className="basis-1/2 rounded-2xl flex flex-col xl:flex-row items-center justify-center shadow-lg
                        border border-solid border-green-500 border-2 transition ease-in-out hover:-translate-y-1 hover:scale-110
                        hover:bg-green-100"> 

                        <img className="w-24 ml-6 h-24" src={menu.image} alt=""></img>
                        
                        <p className="mx-auto font-semibold text-xl">{menu.title}</p>
                        
                    </div>
                    </div>
                </SwiperSlide>
                ))

            }
        </Swiper>


      </>
    
    );
  }
  