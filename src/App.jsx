import './App.css'
import CaseStudies from './components/CaseStudies';
import DiscoverExpertise from './components/DiscoverExpertise';
import FeaturedProjects from './components/FeaturedProjects';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import WebDesignAgency from './components/WebDesignAgency';

function App() {

  return (
   <div className=''>
    {/* for top main header and hero  */}
<div className='h-[90vh] bg-[#00042A] '>
<Navbar/>
<HeroSection/>
</div>
{/* project sections  */}
<FeaturedProjects/>
{/* fullstack web agency  */}
<WebDesignAgency/>
{/* discover expertise  */}
<DiscoverExpertise/>
{/* case studies  */}
<CaseStudies/>


   </div>
  )
}

export default App
