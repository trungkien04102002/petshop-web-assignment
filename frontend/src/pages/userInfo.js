import React from 'react';
import {useEffect,useState} from 'react'


import {userInfo,userAvatar} from '../api/userApi'
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import AvatarInput from '../components/Input/avatarInput';
import Input from '../components/Input/input';

const description=[{
    fullname_des:"Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn.",
    sex:"Giới tính của bạn Nam(M) / Nữ(F)",
    avatar_des:"Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG ",
    phone_des:"Điện thoại kết nối với PetMama."
}]

const UserInfo = () => {
    const [info, setInfo] = useState({});
    const [avatar, setAvatar] = useState();
    
    const [update, setUpdate] = useState({
      email: '',
      fullName: '',
      sex:'',
      phoneNumber: '',
    });

    useEffect(() => {
        (async () => {
          const res = await userInfo(localStorage.getItem('user')); 
          const ava = await userAvatar(localStorage.getItem('user'));

          if(res.fullName) {
            setInfo(res);
            setUpdate({
              email: res.email,
              fullName: res.fullName,
              sex: res.sex,
              phoneNumber: res.phoneNumber,
            })
            // console.log(update)
            setAvatar(ava.avatar)
          }
        })();
      }, []);
    return (
      

       <>
        <Header/>
        <div className="lg:pl-60 pl-12 pt-32">

                <p className="text-3xl font-semibold text-gray-800 ">Cài đặt</p>
                <div className="flex flex-col gap-4 pt-4 divide-solid divide-y divide-slate-200 lg:w-3/5">
                    <p className="text-xl font-semibold text-gray-800 border-b-2 py-2">Thông tin cá nhân</p>
                </div>

               <Input data={update} setData={setUpdate} title={"Họ tên"} des={description[0].fullname_des} value={update.fullName}/>

               <Input data={update} setData={setUpdate} title={"Giới tính"} des={description[0].sex} value={update.sex}/>
               {/* <Input title={"Avatar"} des={description[0].avatar_des} value={avatar}/> */}
                <AvatarInput title={"Avatar"} des={description[0].avatar_des} value={avatar}/>

               <Input data={update} setData={setUpdate} title={"Email"} des={null} value={update.email}/>
               {/* <Input title={"User Name"} des={settings[0].username_des} value={settings[0].username}/> */}
               <Input data={update} setData={setUpdate} title={"Số điện thoại"} des={description[0].phone_des} value={update.phoneNumber}/>

            </div>
        <Footer/>
       </>
    );
}

export default UserInfo;
