import React from 'react';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';

const Contact = () => {
    return (
        <>
            <Header/>
            <div className="flex flex-col gap-y-12 justify-center pt-48 items-center p-4">
                <p className="text-5xl font-extrabold">Liên hệ</p>
                <p className="text-center text-xl md:lg">Thật tuyệt vời khi chúng tôi nhận được những lời nhắn từ bạn <br/> hãy liên hệ ngay với chúng tôi để được trải nghiệm dịch vụ tốt nhất</p>
                <div className="flex flex-row flex-wrap divide-x-2 gap-x-8 text-lg md:text-normal">
                    <div className="flex flex-col pl-4 mx-auto">
                        <p>PetMania, 2015 - 2022</p>
                        <p>Quận 10 - Lý thường Kiệt</p>
                    </div>
                    <div className="flex flex-col pl-6 mx-auto">
                        <p><b>Số điện thoại:</b> 1900 - 8910 - JQK</p>
                        <p><b>Email:</b> info@petmama.com</p>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;
