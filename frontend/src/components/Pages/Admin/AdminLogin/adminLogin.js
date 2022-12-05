import { useNavigate } from 'react-router-dom'


export default function AdminLogin() {

  const navigate=useNavigate()
    return (
      <>
        <div class="bg-grey-lighter min-h-screen flex flex-col bg-[url('https://asianfoodnetwork.com/content/dam/afn/global/en/homepage/new-content-carousel/AFN_Food_Made_Good_HK_Awards_good_to_go_award_mobile.jpg.transform/desktop-img/img.jpg')]">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
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

                <div class="text-white mt-6 font-semibold">
                    Don't have an account? 
                    <a class="no-underline border-b border-blue text-blue-500 font-semibold" href="#" onClick={()=>{navigate('/')}}>
                        Back to Home
                    </a>.

                </div>
                

            </div>
        </div>
  
      </>
    )
}
  
