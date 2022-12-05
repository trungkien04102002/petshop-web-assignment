import React from 'react';
import { useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import logo from '../../img/logo.png'
import { signUp } from '../../api/userApi';

const Schema = Yup.object().shape({
    password: Yup.string().required("This field is required"),
    changepassword: Yup.string().when("password", {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      )
    })
  });

const SignUpForm = () => {
    const navigate=useNavigate();
    const [state,setState] = useState(true);
    const [state1,setState1] = useState(true);

    var result;

    var notify ='warning';
    var titleNotify='Warning';
    var messageNotify='Please enter full input'

    // save text
    const [formValue, setformValue] = useState({
        fullName: '',
        phoneNumber:'',
        password: '',
        phoneNumber:'',
        email:'',
        sex:'M'
      });
    //text event
    const handleChangeText = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
      }

    // call api    
    useEffect(()=>{
        (async () => {
            const res = await signUp(formValue); 
            result =res;
            // console.log(result);

            if(result === undefined) {
                notify ='warning'
                titleNotify="Warning"
                messageNotify='Please enter full input'
                setState1(!state1)
            }
        
            if(result !==undefined) {
                if(result.msg !== undefined) {
                    notify ='danger'
                    titleNotify="Register failure"
                    messageNotify=result.msg;      
                }
                else if(result.email !== undefined) {
                    notify ='success'
                    titleNotify="Register successful"
                    messageNotify="Please back to Login page to login";
                }    
            }
          })()
    },[state]);

   
    //notify
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
              duration: 4500,
              onScreen: true
            }
          });
      } 
    return (
        <>
        <ReactNotifications/>
             <section className=" flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen md:h-full lg:py-0">
                        {/* Logo shop */}
                        <div onClick={()=>(navigate('/'))} className="flex items-center mb-6 text-2xl font-semibold text-gray-900 pt-8">
                            <img className="w-8 h-8 mr-2" src={logo} alt="logo"/>
                            PetMama    
                        </div>

                        {/* sign up form */}
                        <div className="z-10 w-full bg-rose-50 rounded-lg shadow shadow-lg md:mt-0 sm:max-w-md xl:p-0 mb-8">
                            <div className="p-6 rounded-full bg-rose-50 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    Tạo tài khoản
                                </h1>
                                    
                                {/* input */}
                                <div className="space-y-4 md:space-y-6">

                                    {/* name */}
                                    <div>
                                        <label for="fullName" className="block mb-2 text-sm font-medium text-gray-900">Họ và tên</label>
                                        <input  onChange={handleChangeText} type="fullName" name="fullName" id="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Tên của bạn là?" required=""/>
                                    </div>

                                    {/* email */}
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Địa chỉ email</label>
                                        <input  onChange={handleChangeText} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
                                    </div>

                                    {/* phone */}
                                    <div>
                                        <label for="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">Số điện thoại</label>
                                        <input  onChange={handleChangeText} type="phoneNumber" name="phoneNumber" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="số điện thoại" required=""/>
                                    </div>
                                    
                                    <Formik
                                        initialValues={{
                                            password: "",
                                            changepassword: ""
                                        }}
                                        validationSchema={Schema}
                                        onSubmit={() => {}}
                                        >
                                        {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
                                            return (
                                            <form >

                                                <span className="error" style={{ color: "red" }}>
                                                {errors.password}
                                                </span>
                                                {/* <input
                                                type="password"
                                                name="password"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                onInput={handleChangeText}
                                                value={values.password}
                                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                                placeholder="Password" required
                                                /> */}

                                                <div>
                                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Mật khẩu</label>
                                                    <input 
                                                     onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    onInput={handleChangeText}
                                                    value={values.password}
                                                    type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                                                </div>

                                                {/* <input
                                                type="password"
                                                name="changepassword"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.changepassword}
                                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                                placeholder="Confirm password" required
                                                /> */}

                                                <div>
                                                    <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Xác nhận mật khẩu</label>
                                                    <input
                                                        type="password"
                                                        name="changepassword"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.changepassword}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                        placeholder="Confirm password" required
                                                    />
                                                </div>

                                                <span className="error" style={{ color: "red" }}>
                                                {errors.changepassword}
                                                </span>

                                            </form>
                                            );
                                        }}
                                    </Formik>

                                    {/* pass */}
                                    {/* <div>
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Mật khẩu</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                                    </div> */}
                                    {/* re-pass */}
                                    {/* <div>
                                        <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Xác nhận mật khẩu</label>
                                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                                    </div> */}

                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required=""/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="terms" className="font-light text-gray-500">Tối chấp nhận <a className="font-medium text-primary-600 hover:underline" href="#">các chính sách và điều khoản</a></label>
                                        </div>
                                    </div>

                                    <button 
                                        onClick={()=>{setState(!state); handleNotify()}}
                                        type="submit" 
                                        className="w-full text-white bg-sky-300  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tạo tài khoản</button>
                                    <p className="text-sm font-light text-gray-500">
                                        Đã có tài khoản? <div onClick={()=>{navigate('/signIn')}} className="font-medium text-sky-500 hover:underline">Đăng nhập ngay</div>
                                    </p>
                                </div>
                            </div>
                        </div>
            </section>
        </>
    );
}

export default SignUpForm;
