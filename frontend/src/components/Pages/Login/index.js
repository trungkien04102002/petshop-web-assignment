import { useNavigate } from 'react-router-dom'


export default function Login() {

  const navigate=useNavigate()
    return (
      <>
        <div class="bg-grey-lighter min-h-screen flex flex-col bg-[url('https://asianfoodnetwork.com/content/dam/afn/global/en/homepage/new-content-carousel/AFN_Food_Made_Good_HK_Awards_good_to_go_award_mobile.jpg.transform/desktop-img/img.jpg')]">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center font-semibold">Sign In</h1>
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

                    <div class="text-center text-sm text-grey-dark mt-4">

                        <a class="no-underline border-b border-grey-dark text-md text-grey-dark text-green-700 font-semibold" href="#"  onClick={()=>{navigate('/')}}>
                            Back To Home
                        </a>
                    </div>
                </div>

                <div class="text-white mt-6 font-semibold">
                    Don't have an account? 
                    <a class="no-underline border-b border-blue text-blue-500 font-semibold" href="#" onClick={()=>{navigate('/Signup')}}>
                        Create Account
                    </a>.

                </div>
                

            </div>
        </div>
  
      </>
    )
}
  
