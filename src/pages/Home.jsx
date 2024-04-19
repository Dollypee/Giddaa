import HeroSection from "../components/landingpage/HeroSection"
import MetricsSection from "../components/landingpage/MetricsSection"
import NavMenu from "../components/landingpage/NavMenu"
import TrustedPartners from "../components/landingpage/TrustedPartners"


const Home = () => {

  return (
    <div>
      
      {/* Navbar Section */}
      <NavMenu />

      {/* Hero Section */}
      <HeroSection />

      {/* Metrics Speaks Section */}
      <MetricsSection />

      {/* Trusted Partners Section */}
      <TrustedPartners />

    </div>
  )
}

export default Home