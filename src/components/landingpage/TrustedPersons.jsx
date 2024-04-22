import { HandShakeIcon } from "../../assets/icons/Icon"
import { Dooshima, Emmanuel, Kunle, LanreEdun } from "../../assets/images/images"
import CardScroll from "../scroll/CardScroll"
import Person from "./Person"

const people = [
  {
    name: "Lanre Edun",
    title: "HEAD OF MARKETING AT BRAINS & HAMMERS",
    image: LanreEdun
  },
  {
    name: "Kunle Fatimehin",
    title: "DIRECTOR OF DIGITAL & INNOVATION AT KAIROS HOF",
    image: Kunle
  },
  {
    name: "Emmanuel Uge",
    title: "DIRECTOR OF SALES AT WIGWE INFRASTURUCTURE",
    image: Emmanuel
  },
  {
    name: "Dooshima Anakaa",
    title: "DIRECTOR OF FINANCE AT IKPAAHINDI VENTURES",
    image: Dooshima
  },
  {
    name: "Lanre Edun1",
    title: "HEAD OF MARKETING AT BRAINS & HAMMERS",
    image: LanreEdun
  },
]
const TrustedPersons = () => {
  return (
    <div className="giddaa-bg-trusted-persons">
      <div className="relative flex justify-center bottom-1">
        <div className="absolute trust-us-rect-transform">
          <div className="trust-us-rect flex py-1 px-5 rounded-full space-x-3 items-center">
            <HandShakeIcon />
            <span className="giddaa-primary giddaa-normal-text-one-millik">If They Trust Us, So Can You</span>
          </div>
        </div>
      </div>

      <div className="flex mt-12 pl-4 md:pl-8 lg:pl-14">
        <CardScroll>
          {people.map((person) => (
            <Person person={person} key={person.name} />
          ))}
        </CardScroll>
      </div>

    </div>
  )
}

export default TrustedPersons 