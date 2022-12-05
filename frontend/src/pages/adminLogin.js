import React from 'react';
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const navigate=useNavigate()

    return (
        <>
        <div class="bg-grey-lighter min-h-screen flex flex-col bg-[url('https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/129144681/original/be7fbfe8e3108a536ba4236bcc5d11059d0b214d/design-cute-2d-cartoon-animal-character.jpg')]">
            <div class="container  max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center font-semibold">Sign In for Admin</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="username" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
            
                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Sign In</button>

                </div>

                <div class="text-black mt-6 font-semibold">
                    Don't have an account? 
                    <a class="no-underline border-b border-blue text-blue-500 font-semibold" href="#" onClick={()=>{navigate('/')}}>
                        Back to Home
                    </a>.

                </div>
                

            </div>
        </div>
        </>
    );
}

export default AdminLogin;
