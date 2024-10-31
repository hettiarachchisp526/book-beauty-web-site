

import FeaturedBranches from './Components/FeaturedBranches'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import MainService from './Components/MainService'
import Navbar from './Components/Navbar'

function App() {
  

  return (
    <div className=''>
      <Navbar/>
      <div className='px-6 mx-auto max-w-[1600px]'>
      <Hero/>
      <MainService/>
      <FeaturedBranches/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
