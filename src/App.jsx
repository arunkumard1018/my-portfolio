import home_icon from './assets/home.svg'
import user_icon from './assets/user.svg'
import contact_icon from './assets/contact.svg'
import project_icon from './assets/project.svg'
import bars_icon from './assets/bars.svg'
import blogs_icon from './assets/blogs.svg'

function App() {

  return (
    <>
      <div className="conatiner flex flex-row text-white ">

        <aside className="bg-[#222222]  basis-[20%] h-[100vh] flex flex-col p-5">
          <div className="basis-1/4 relative">
            <h1 className="my text-6xl font-bold m-4">A <span className="text-green-600">/</span> K</h1>
          </div>
          <div className="basis-2/4">
            <ul className="menu ml-4 space-y-4 font-medium cursor-pointer">
              <li className='flex text-[1.1rem] items-center'><img src={home_icon} className="w-5 mr-2" alt="" />Home</li>
              <li className='flex text-[1.1rem] items-center'><img src={user_icon} className="w-5 mr-2" alt="" />About</li>
              <li className='flex text-[1.1rem] items-center'><img src={bars_icon} className="w-5 mr-2 invert" alt="" />Skills</li>
              <li className='flex text-[1.1rem] items-center'><img src={project_icon} className="w-5 mr-2" alt="" />Projects</li>
              <li className='flex text-[1.1rem] items-center'><img src={contact_icon} className="w-5 mr-2" alt="" />Contact</li>
              <li className='flex text-[1.1rem] items-center'><img src={blogs_icon} className="w-5 mr-2" alt="" />Blog</li>
            </ul>
          </div>
          <div className="basis-1/4 "><p className='ml-4 mt-[4rem] '>© 2024 Built by Arun</p></div>
        </aside>


        <main className="bg-[#151515] basis-[80%]">
          main
        </main>
      </div>
    </>
  )
}

export default App
