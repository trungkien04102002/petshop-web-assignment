import Footer from "../../Footer";
import Header from "../../Header";

const teamate = [
  {
    name:'Hà Phan Thiên Phú',
    position: 'Founder / CEO',
    image:'https://i.ibb.co/DLGjKkZ/phu.jpg',
    facebook:"https://www.facebook.com/thin.phiu/",
    github:"https://github.com/devthienphu",
  }
]


export default function Contact() {
    return (
      <>
      <Header/>

      <div className="max-w-screen-xl px-4 mx-auto md:px-8 pt-32">
          <div className="mb-10 md:mb-16">
            <h2
              className="
                mb-4
                text-2xl
                font-bold
                text-center text-gray-800
                lg:text-3xl
                md:mb-6
              "
            >
              Our Team Section
            </h2>

            <p className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
              This is Luna Eatery, which is founded by myself. If you want to get our info, click on the icon bellow, bye ! 
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 justify-center items-center">

            {
              teamate.map((teams)=>(

            <div className="p-4 shadow">
              <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                <img
                  src={teams.image}
                  className="object-cover object-center w-full h-full"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="font-bold text-indigo-500 md:text-lg">{teams.name}</div>
                <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
                  {teams.position}
                </p>

                <div className="flex">
                  <div className="flex gap-4">
                    <a rel="noopener noreferrer" href={teams.facebook}>
                      <svg
                        className="w-6 h-6 text-blue-600 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                        />
                      </svg>
                    </a>
                    <a className="cursor-pointer" href={teams.github}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <div className="cursor-pointer">
                      <svg
                        className="w-6 h-6 text-blue-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              ))
            }

           

          </div>
        </div>

      <Footer/>
      </>
    )
}