import React from 'react';
import SignInForm from '../components/Login/signInForm';

const SignIn = () => {
    return (
        <> 
            <div className="bg-green-50 z-[-100]">
                <img className="hidden lg:flex absolute right-[-300px] scale-50" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3035fb76965389.5c7945b0d0567.gif" alt=""/>
                <img className="hidden lg:flex absolute right-[-300px] bottom-0 scale-50" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/74731f76965389.5c7945b0cfcc3.gif" alt=""/>
                <img className="hidden lg:flex absolute left-[-300px] bottom-20 scale-75" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ce8b1e76965389.5c7945b0cffef.gif" alt=""/>
        
                <SignInForm/>
        </div>  
        </>
    );
}

export default SignIn;
