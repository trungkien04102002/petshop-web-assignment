import React from 'react';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import arrow from '../img/arrow.png'
const About = () => {
    return (
        <>
            <Header/>

            <div className="flex flex-col gap-y-16 pt-32 px-4">
                 <p className="text-5xl font-extrabold text-center">Thông tin về PetMama</p>

                {/* about 1 */}
                <div className="flex flex-row flex-wrap gap-x-48 gap-y-8 justify-center ">
                     <div className="flex flex-col my-auto gap-y-4">
                        <p className="font-extrabold text-2xl">PetMama là</p>
                        <p className="max-w-[450px] text-xl md:text-lg">PetMama là một cửa hàng chuyên cung cấp thú cưng và sản phẩm vật nuôi chất lượng. Với cả cửa hàng truyền thống và cửa hàng trực tuyến, PetMama tập trung vào việc cá nhân hóa trải nghiệm mua hàng của khách hàng trên website. </p>
                    </div>
                    <div>
                        <img className="w-[605px] h-[280px] object-cover rounded-xl" src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-1308557657.jpg" alt="img"/>
                        
                        <img className="absolute scale-50 mt-[-250px] ml-[-300px]" src={arrow} alt="arrow"/>
                    </div>
                    
                </div> 

                {/* banner */}
                <div className="flex flex-col items-center pt-16 text-black">
                    <p className="text-3xl">▼・ᴥ・▼</p>
                    <p className="font-extrabold text-3xl max-w-[500px] text-center">We’re very proud to be and we will always put our before profit.</p>
                    <img className="" src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-1300842515.png" alt="banner"/>
                </div>

                {/* about 2 */}

                <div className="flex flex-row md:flex-wrap gap-x-48 gap-y-8 justify-center md:pt-16 pt-8 flex-wrap-reverse">
                    <img className="w-[605px] h-[280px] object-cover rounded-xl" src="https://petmania.vamtam.com/wp-content/uploads/2022/07/istockphoto-1134929522-2048x2048-1.jpg" alt="img"/>
                    <div className="flex flex-col my-auto gap-y-4">
                        <p className="font-extrabold text-2xl">Sứ mệnh của chúng tôi</p>
                        <p className="max-w-[450px] text-xl md:text-lg">Chúng tôi cam kết hỗ trợ các nỗ lực giải cứu động vật, từ việc tổ chức các sự kiện nhận con nuôi tại cửa hàng & gây quỹ, đến quyên góp khi nguồn lực của chúng tôi cho phép. Chúng tôi cam kết giúp đỡ động vật gặp khó khăn..</p>
                    </div>
                </div> 

                
            </div>
            <Footer/>
        </>
    );
}

export default About;
