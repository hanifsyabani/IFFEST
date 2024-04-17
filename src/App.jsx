import Navbar from "./components/Navbar/Navbar"
import bg from './assets/stars.png'
import saturn from './assets/saturn.png'

function App() {

  return (
    <div className="bg-gradient-to-b from-primary to-black to-80% h-screen overflow-y-hidden">
      <Navbar/>
      <img src={bg} alt="background" width={1080} height={1080} className="mx-auto pt-10 h-full" />
      <div className=" z-30">
        <img src={saturn} alt="saturn" width={1000} height={200} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 " />
      </div>
    </div>
  )
}

export default App
