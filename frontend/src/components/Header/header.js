import { Fragment,useContext } from 'react'
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { Popover, Transition, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {useEffect,useState} from 'react'
import pawprint from '../../img/pawprint.png'
import logo from '../../img/logo.png'
import { AddContext } from '../../App';
import {userInfo} from '../../api/userApi'
import { search } from '../../api/productApi';

const solutions = [
{
    name: 'Trang chủ',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/',
    icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png'
},
{
    name: 'Thú cưng',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/pet',
    icon:'https://cdn-icons-png.flaticon.com/512/1076/1076877.png',
},
{
    name: 'Thức ăn',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/petFood',
    icon: 'https://cdn-icons-png.flaticon.com/512/3737/3737711.png',
},
{
    name: 'Phụ kiện',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/petProduct',
    icon: 'https://cdn-icons-png.flaticon.com/512/1871/1871629.png',
},
{
    name: 'Dịch vụ',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/petService',
    icon: 'https://cdn-icons-png.flaticon.com/512/2138/2138261.png',
},

{
    name: 'Tài khoản',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/userInfo',
    icon: 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png',
},

{
    name: 'Đổi mật khẩu',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/changePassword',
    icon: 'https://cdn-icons-png.flaticon.com/512/1250/1250615.png',
},

{
    name: 'Đơn hàng',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/order',
    icon: 'https://cdn-icons-png.flaticon.com/512/839/839860.png',
},

{
    name: 'Phản hồi',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/feedback',
    icon: 'https://cdn-icons-png.flaticon.com/512/707/707661.png',
},

{ 
    name: 'Giới thiệu', 
    description: "Your customers' data will be safe and secure.", 
    href: '/About', 
    icon: 'https://cdn-icons-png.flaticon.com/512/3356/3356068.png' 
},
{
    name: 'Liên hệ',
    description: "Connect with third-party tools that you're already using.",
    href: '/Contact',
    icon: 'https://cdn-icons-png.flaticon.com/512/1034/1034153.png',
},

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

let isLogin=true;

const Header = () => {
    const {cartItems,order}= useContext(AddContext);
    const [isLogin, setIsLogin] = useState(false);
    const [keySearch, setKeySearch] = useState();
    // const [searchRes, setSearchRes] = useState([]);
    //call api
    useEffect(() => {
        (async () => {
          const res = await userInfo(localStorage.getItem('user'));
          if(res.fullName) {
            setIsLogin(true);
          }
        })();
      }, []);

      const handleChange = event => {
        setKeySearch(event.target.value);
      };

    const navigate = useNavigate();
    return (
        <>
        <Popover className="relative bg-white">
            <div className="mx-auto px-4 sm:px-6 fixed top-0 right-0 left-0 z-10 bg-white">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-between md:space-x-10">


                <Popover.Group as="nav" className="hidden md:flex space-x-1 justify-start">
                                        
                    {/* Option */}

                    <NavLink to='/' className={({ isActive }) =>
              			isActive ? "flex flex-row items-center p-1 px-2 rounded-2xl": "flex flex-row items-center p-2 px-4 rounded-2xl hover:bg-yellow-200"
                    }>
						<p className="font-bold text-sm">Trang chủ</p>

					</NavLink>

                    <Menu as="div" className="relative inline-block text-left px-4">
						<div>
							<Menu.Button className="flex flex-row text-sm items-center p-2 px-4 rounded-2xl hover:bg-yellow-100">
                                 <p className="font-bold">Thú cưng</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
							</Menu.Button>
						</div>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="origin-top-right absolute p-3 mt-2 w-52 rounded-xl shadow-lg drop-shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ">
							<div className="py-1 divide-y divide-slate-100 space-y-1">
                                <Menu.Item>
								{({ active }) => (
                                    <NavLink to='/pet' className={({ isActive }) =>
                                    isActive ? "flex flex-row items-center gap-2 font-bold text-black bg-yellow-100 rounded-full px-2 p-1": "flex flex-row items-center gap-2 px-2"
                                }>
                                    <img className="h-8 w-8" src={pawprint} alt="icon"/>
									<p className="text-gray-600">Thú cưng</p>
                                    </NavLink> 
								)}
								</Menu.Item>

                                <Menu.Item>
								{({ active }) => (
                                    <NavLink to='/petFood' className={({ isActive }) =>
                                    isActive ? "flex flex-row items-center gap-2 font-bold text-black bg-yellow-100 rounded-full px-2 p-1": "flex flex-row items-center gap-2 px-2"
                                }>
                                    <img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/3737/3737711.png" alt="icon"/>
									<p className="text-gray-600">Thức ăn</p>
                                    </NavLink> 
								)}
								</Menu.Item>

                                <Menu.Item>
								{({ active }) => (
                                    <NavLink to='/petProduct' className={({ isActive }) =>
                                    isActive ? "flex flex-row items-center gap-2 font-bold text-black bg-yellow-100 rounded-full px-2 p-1": "flex flex-row items-center gap-2 px-2"
                                }>
                                    <img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/1650/1650477.png" alt="icon"/>
									<p className="text-gray-600">Phụ kiện</p>
                                    </NavLink> 
								)}
								</Menu.Item>

                                <Menu.Item>
								{({ active }) => (
                                    <NavLink to='/petService' className={({ isActive }) =>
                                    isActive ? "flex flex-row items-center gap-2 font-bold text-black bg-yellow-100 rounded-full px-2 p-1": "flex flex-row items-center gap-2 px-2"
                                }>
                                    <img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/3636/3636096.png" alt="icon"/>
									<p className="text-gray-600">Dịch vụ</p>
                                    </NavLink> 
								)}
								</Menu.Item>
							</div>
							</Menu.Items>
						</Transition>
					</Menu>

                    <NavLink to='/about' className={({ isActive }) =>
              			isActive ? "flex flex-row items-center p-1 px-2 rounded-2xl bg-yellow-200": "flex flex-row items-center p-2 px-4 rounded-2xl hover:bg-yellow-100"
                    }>
						<p className="font-bold text-sm">Giới thiệu</p>

					</NavLink>

                    <NavLink to='/contact' className={({ isActive }) =>
              			isActive ? "flex flex-row items-center p-1 px-2 rounded-2xl bg-yellow-200": "flex flex-row items-center p-2 px-4 rounded-2xl hover:bg-yellow-100"
                    }>
						<p className="font-bold text-sm">Liên hệ</p>

					</NavLink>

                </Popover.Group>

                {/* logo web */}
                <div className="flex justify-center lg:w-0 lg:flex-1">
                    
                    <div className="cursor-pointer flex flex-col items-center">
                    <img
                        className="h-8  w-auto sm:h-10"
                        src={logo}
                        alt="logo"
                    />
                    <span className="font-bold text-2xl text-gray-900">PetMama</span>
                    </div>
                </div>

                 {/* menu button */}
                 <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>
                
                {/* login, cart, search button */}
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-x-8">
                    {/* Find button */}
                    <div class="flex items-center">   
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input onChange={handleChange}
                            type="text" 
                            id="simple-search" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" 
                            placeholder="Search" 
                            required/>
                        </div>
                        <button onClick={()=>{navigate(`/search/${keySearch}`)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
                                <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    {/* Cart button */}
                    <button className="p-1 bg-gray-700 rounded-2xl hover:bg-gray-800" onClick={()=>{ navigate("/cart");}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 fill-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>

                         <p className="absolute px-1.5 ml-6 bg-red-400 text-white text-sm rounded-full ml-3 mt-[-10px]">{cartItems.length}</p>
                     </button>
                    
                    {(isLogin)
                    ?
                    
                     <Menu as="div" className="relative inline-block text-left">
						<div>
							<Menu.Button className="p-1 bg-gray-700 rounded-2xl hover:bg-gray-800">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 fill-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
							</Menu.Button>
						</div>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="origin-top-right absolute p-2 right-0 mt-2 w-56 rounded-xl shadow-lg drop-shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
							<div className="py-1 divide-y divide-slate-100 space-y-1">

                                {/* userInfo */}
                                <Menu.Item>
								{({ active }) => (
                                    <NavLink to='/userInfo' className={({ isActive }) =>
                                    isActive ? "flex flex-row items-center gap-2 font-bold text-black bg-yellow-100 rounded-full px-2 p-1": "flex flex-row items-center gap-2 px-2"
                                }>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                    </svg>

									<p className="text-gray-600">Tài khoản</p>
                                    </NavLink> 
								)}
								</Menu.Item>

                                {/* change password */}
                                 <Menu.Item>
								{({ active }) => (
                                    <NavLink to='/changePassword' className={({ isActive }) =>
                                    isActive ? "flex flex-row items-center gap-2 font-bold text-black bg-yellow-100 rounded-full px-2 p-1": "flex flex-row items-center gap-2 px-2"
                                }>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                                    </svg>


									<p className="text-gray-600">Đổi mật khẩu</p>
                                    </NavLink> 
								)}
								</Menu.Item>

                                {/* order */}
                                <Menu.Item>
								{({ active }) => (
                                    <NavLink to='/order' className={({ isActive }) =>
                                    isActive ? "flex flex-row items-center gap-2 font-bold text-black bg-yellow-100 rounded-full px-2 p-1": "flex flex-row items-center gap-2 px-2"
                                }>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                    </svg>


									<p className="text-gray-600">Đơn hàng</p>
                                    </NavLink> 
								)}
								</Menu.Item>

                                 {/* order */}
                                 <Menu.Item>
								{({ active }) => (
                                    <NavLink to='/feedback' className={({ isActive }) =>
                                    isActive ? "flex flex-row items-center gap-2 font-bold text-black bg-yellow-100 rounded-full px-2 p-1": "flex flex-row items-center gap-2 px-2"
                                }>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                    </svg>



									<p className="text-gray-600">Phản hồi</p>
                                    </NavLink> 
								)}
								</Menu.Item>
                                
                                {/* logout */}
                                <Menu.Item>
								{({ active }) => (
                                    <div onClick={()=>{delete localStorage.user; navigate('/'); setIsLogin(false)}}  className="cursor-pointer flex flex-row items-center gap-2 px-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                    </svg>

									<p className="text-gray-600">Đăng xuất</p>
                                    </div> 
								)}
								</Menu.Item>


							</div>
							</Menu.Items>
						</Transition>
					</Menu>
                    :
                      
                    <button className="p-1 bg-gray-700 rounded-2xl hover:bg-gray-800" onClick={()=>{ navigate("/signIn");}}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 fill-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                         </svg>

                    </button>
                    }

                   


                  
                    
                </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                className="fixed top-0 right-0 left-0 z-10 "
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 ">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <div>
                            <img
                                className="h-8 w-auto"
                                src={logo}
                                alt="logo"
                            />
                            </div>
                            <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                            </div>
                        </div>
                        
                        {/* mobile navigate */}
                        <div className="mt-6">
                            <nav className="grid gap-y-8">
                            {solutions.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                >
                                <img src={item.icon} alt="icon" className="w-6 h-6"/>
                                <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                </a>
                            ))}
                            </nav>
                        </div>
                    </div>

                    {/* login */}
                    {
                        (isLogin)?
                        <div className="flex py-6 px-5 space-y-6 mx-auto items-center justify-center">
                        <button className="bg-sky-300 p-1 rounded-xl font-bold px-4 mx-auto">Đăng xuất</button>
                        </div>
                       :
                    <div className="py-6 px-5 space-y-6">
                        <div>
                            <a
                            href="signUp"
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-400 hover:bg-sky-500"
                            >
                            Sign up
                            </a>

                            <p className="mt-6 text-center text-base font-medium text-gray-500">
                            Existing customer?{' '}
                            <a href="signIN" className="text-indigo-600 hover:text-indigo-500">
                                Sign in
                            </a>
                            </p>
                        </div>
                        </div>
                    }
                    
                    
                    
                    
                </div>
                </Popover.Panel>
            </Transition>
         </Popover>
        </>
    );
}

export default Header;
