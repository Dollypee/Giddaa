import { TrustedUnderline } from "../../assets/icons/Icon"
// import Partners from "./Partners"

// const partners = [
//   {
//     name: 'Partner1',
//     logo: ''
//   }
//   'Partner1',
//   'Partner2',
//   'Partner3',
//   'Partner4',
//   'Partner5',
// ]

const TrustedPartners = () => {
  return (
    <div className="giddaa-bg-trusted-partners min-h-24 pl-4 md:pl-8 lg:pl-14">
      <div className="relative">
        <h2 className="giddaa-heading-two-b-millik pt-2 giddaa-primary">
          Trusted By
        </h2>
        <div className="absolute left-8 bottom-1">
          <TrustedUnderline />
        </div>
      </div>
      <div className="pt-6 flex animate-slide space-x-4">
        {/* <Partners partners={partners} /> */}
        <div>Icon 1</div>
        <div>Icon 1</div>
        <div>Icon 1</div>
        <div>Icon 1</div>
        <div>Icon 1</div>
        <div>Icon 1</div>
        <div>Icon 1</div>
        <div>Icon 1</div>
        <div>Icon 1</div>
        <div>Icon 1</div>
        <div>Icon 1</div>
        <div>Icon 1</div>
        <div>Icon 1</div>
        <div>Icon 1</div>
        <div>Icon 1</div>
        <div>Icon 1</div>
        <div>Icon 1</div>
        <div>Icon 1</div>
        <div>Icon 1</div>
      </div>
    </div>
  )
}

export default TrustedPartners