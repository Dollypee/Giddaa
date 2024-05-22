import { HeroImage } from '../../assets/images/images'

const HeroSection = () => {
  return (
    <div className='flex flex-col lg:flex-row pl-4 md:pl-8 lg:pl-14'>
      <div className='mt-20 pr-4 text-center lg:text-left lg:w-[45%] xl:w-[40%]'>
        <h1 className='giddaa-heading-two-a-millik'>Securely and Affordably Own a Home in Nigeria. <br /> <span className='giddaa-primary'>We Serve Nigerians Across the Globe.</span></h1>
        <p className='mt-3 giddaa-normal-text-one'>Experience confidence when buying a home in Nigeria whether you’re in Nigeria or <span className='font-bold'>Abroad!</span> Enjoy peace of mind with legitimate transactions, straightfoward processes, and a variety of flexible payment options directly from top developers and banks.</p>
        <div className='mt-5 mb-8 flex flex-col lg:flex-row lg:space-x-4'>
            <button className='giddaa-bg-primary text-white whitespace-nowrap p-4 rounded-full'>Find a home</button>
          <span className='giddaa-button-transparent w-full rounded-lg my-4 lg:my-0 p-4 text-center font-bold text-capitalize'>10,000 People Have Seen This</span>
        </div>
      </div>
      <div className='lg:w-[55%] xl:w-[60%]'>
        <img src={HeroImage} alt='Giddaa Hero Banner' className='h-full object-cover' />
      </div>

    </div>
  )
}

export default HeroSection