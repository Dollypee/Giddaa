import HereIsWhy from "../components/landingpage/HereIsWhy"
import HeroSection from "../components/landingpage/HeroSection"
import MetricsSection from "../components/landingpage/MetricsSection"
import NaijaRemoteWork from "../components/landingpage/NaijaRemoteWork"
import NavMenu from "../components/landingpage/NavMenu"
import PrivateSectorWork from "../components/landingpage/PrivateSectorWork"
import PublicSectorWork from "../components/landingpage/PublicSectorWork"
import PurchaseOptions from "../components/landingpage/PurchaseOptions"
import TrustedPartners from "../components/landingpage/TrustedPartners"
import TrustedPersons from "../components/landingpage/TrustedPersons"
import WhoWeServe from "../components/landingpage/WhoWeServe"
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
      <HereIsWhy />

      {/* Who We Serve Section */}
      <WhoWeServe />

      {/* Naija Remote Work Section */}
      <NaijaRemoteWork />
      
      {/* Private Sector Section */}
      <PrivateSectorWork />

      {/* Public Sector Section */}
      <PublicSectorWork />

    </div>
  )
}

export default Home