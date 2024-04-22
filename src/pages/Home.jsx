import HeroSection from "../components/landingpage/HeroSection"
import MetricsSection from "../components/landingpage/MetricsSection"
import NavMenu from "../components/landingpage/NavMenu"
import PurchaseOptions from "../components/landingpage/PurchaseOptions"
import TrustedPartners from "../components/landingpage/TrustedPartners"
import TrustedPersons from "../components/landingpage/TrustedPersons"
import WhyGiddaa from "../components/landingpage/WhyGiddaa"


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

      {/* Trusted Persons Section */}
      <TrustedPersons />

      {/* Purchase Options Section */}
      <PurchaseOptions />

      {/* Why Giddaa Section*/}
      <WhyGiddaa />

    </div>
  )
}

export default Home