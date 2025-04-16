import './App.css'
import CaseStudies from './components/CaseStudies';
import DiscoverExpertise from './components/DiscoverExpertise';
import FeaturedProjects from './components/FeaturedProjects';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import WebDesignAgency from './components/WebDesignAgency';
import AgencySection from './components/AgencySection';
import CustomDesign from './components/CustomDesign';
import ClientReviews from './components/ClientReviews';
import CMSPlatforms from './components/CMSPlatforms';
import WebsiteDesignProcess from './components/WebsiteDesignProcess';
import FeaturedWebsites from './components/FeaturedWebsites';
import BestWebAgency from './components/BestWebAgency';
import StayAhead from './components/StayAhead';
import ChooseWebDesign from './components/ChooseWebDesign';
import Locations from './components/Locations';
import FrequentlyQuestions from './components/FrequentlyQuestions';
import WebDesignExpert from './components/WebDesignExpert';
import SignUp from './components/SignUp';
import Conversations from './components/Conversations';
import Footer from './components/Footer';

function App() {

  return (
   <div className=''>
    {/* for top main header and hero  */}
<div className='h-[90vh] bg-[#00042A] '>
<Navbar/>
<HeroSection/>
</div>
<AgencySection/>
{/* project sections  */}
<FeaturedProjects/>
{/* fullstack web agency  */}
<WebDesignAgency/>
{/* discover expertise  */}
<DiscoverExpertise/>
{/* case studies  */}
<CaseStudies/>
{/* cline reviews  */}
<ClientReviews/>
<CMSPlatforms/>
<WebsiteDesignProcess/>
<CustomDesign/>
<FeaturedWebsites/>
<BestWebAgency/>
<StayAhead/>
<ChooseWebDesign/>
<Locations/>
<FrequentlyQuestions/>
<WebDesignExpert/>
<SignUp/>
<Conversations/>
<Footer/>



   </div>
  )
}

export default App
