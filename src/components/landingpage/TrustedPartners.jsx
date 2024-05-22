import { Chrome, Dropbox, Reddit, Underline, Viber, Vimeo } from "../../assets/icons/Icon"
const partners = [
  {
    icon: <Vimeo />
  },
  {
    icon: <Chrome />
  },
  {
    icon: <Dropbox />
  },
  {
    icon: <Reddit />
  },
  {
    icon: <Viber />
  },
  {
    icon: <Vimeo />
  },
  {
    icon: <Chrome />
  },
  {
    icon: <Dropbox />
  },
  {
    icon: <Reddit />
  },
  {
    icon: <Viber />
  },
  {
    icon: <Dropbox />
  },
  {
    icon: <Reddit />
  },
  {
    icon: <Viber />
  },
  {
    icon: <Chrome />
  },
  {
    icon: <Dropbox />
  },

]

const TrustedPartners = () => {
  return (
    <div className="giddaa-bg-trusted-partners min-h-24 lg:pl-14">
      <div className="relative flex justify-center lg:justify-start">
        <h2 className="giddaa-heading-two-b-millik pt-2 giddaa-primary">
          Trusted By
        </h2>
        <div className="absolute lg:left-8 bottom-1">
          <Underline />
        </div>
      </div>
      <div className="pt-6 flex pb-9">
        <div className="marquee">
          <div className="overflow-hidden">
            <div className="marquee-content">
              <div className="flex items-center">
                {partners.map((partner, i) => (
                  <span key={i} className="mx-8">{partner.icon}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TrustedPartners