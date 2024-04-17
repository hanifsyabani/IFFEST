import cosmicLogo from '../../assets/logo.png'
import meteor from '../../assets/meteor.png'


const Navbar = () => {
  return (
    <nav className='fixed bg-transparent w-full px-[5%] py-6 z-20'>
      <div className='flex items-center gap-64'>
        <img src={cosmicLogo} alt='logo' width={500} height={500} className='w-28'/>
        <ul className='flex items-center gap-20 text-white text-lg'>
          <li>Home</li>
          <li>Planet</li>
          <li>About Us</li>
        </ul>
      </div>
      <img src={meteor} alt='logo' width={500} height={500} className='w-24 absolute right-28 top-10'/>
    </nav>
  )
}

export default Navbar