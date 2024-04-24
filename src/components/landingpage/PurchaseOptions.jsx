import { ArrowDown, LightBulb, ListStyleRightArrow, PlayIcon, Underline2 } from "../../assets/icons/Icon"
import { Horse, Rabbit, Turtle } from "../../assets/images/images"

const PurchaseOptions = () => {
  return (
    <div className="pl-4 md:pl-8 lg:pl-14 pr-4 md:pr-8 lg:pr-0 py-8 pb-16">
      <div className="relative flex justify-center text-center lg:text-left lg:justify-start">
        <h2 className="giddaa-heading-two-b-millik pt-8 giddaa-primary">
          Your Purchase Options
        </h2>
        <div className="absolute lg:left-24 bottom-1">
          <Underline2 />
        </div>
      </div>
      <div className="pt-6 flex pb-9">
        <h3 className="giddaa-heading-three text-center lg:w-[50%] mx-auto px-2 lg:px-3">Buying a home isn’t a one-size fits all kind of purchase — we know!. So…we give you all the options the market has to offer to choose from!</h3>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-evenly lg:items-stretch">
        <div className="giddaa-bg-light-accent-green rounded-2xl px-3 py-6 hover:border-[3px] hover:border-primary hover:cursor-pointer lg:w-[30%]">
          <div className="flex">
            <div className="w-[10%]">
              <img src={Turtle} alt="turtle icon" />
            </div>
            <div className="w-[90%] text-center">
              <h2 className="giddaa-heading-three-millik giddaa-primary">Mortgages</h2>
              <h4 className="giddaa-normal-text-three pt-1">THE SLOW TURTLE</h4>
            </div>
          </div>
          <div className="pt-3">
            <p className="giddaa-normal-text-two">Imagine you want to buy a house, but you don’t have all the money upfront. A mortgage is like a loan from a bank or a lender that helps you buy the house now, and you pay back the loan over time, usually with interest. It’s a way to spread out the cost of buying a house over several years instead of paying for it all at once. Once you pay off the mortgage, you own the house outright.</p>
          </div>
          <div className="py-8 flex space-x-3 items-center">
            <ArrowDown />
            <div className="flex items-center">
              <h3 className="giddaa-subtitle-three giddaa-primary">View Another Explanation </h3>
              <LightBulb />
            </div>
          </div>

          <div className="pt-3">
            <h2 className="giddaa-heading-four-millik giddaa-primary text-center">Features of Mortgages</h2>
            <ul>
              <li className="flex space-x-2">
                <span className="inline pt-2"><ListStyleRightArrow /> </span>
                <span className="giddaa-normal-text-two"> For budget conscious people without the money to make large payments.</span>
              </li>
              <li className="flex space-x-2">

                <span className="inline pt-2"><ListStyleRightArrow /> </span>
                <span className="giddaa-normal-text-two"> Mostly offered by banks & financial institutions</span>
              </li>
              <li className="flex space-x-2">

                <span className="inline pt-2"><ListStyleRightArrow /> </span>
                <span className="giddaa-normal-text-two"> Typically attracts payment of interest</span>
              </li>
              <li className="flex space-x-2">

                <span className="inline pt-2"><ListStyleRightArrow /> </span>
                <span className="giddaa-normal-text-two"> Payment periods are usually long term <span className="font-bold">(Typically between 10 - 30 years)</span></span>
              </li>
              <li className="flex space-x-2">
                <span className="inline pt-2"><ListStyleRightArrow /> </span>
                <span className="giddaa-normal-text-two"> Monthly Payments are fixed, meaning it remains the same throughout the payment period. For example, you pay N150,000 in Month 1, you’ll pay N150,000 in Month 70. The payment remains the same over time.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 flex justify-center">
            <button className='giddaa-button-white rounded-lg px-4 py-2 text-center font-bold text-capitalize flex space-x-3'><PlayIcon /> <span className="giddaa-normal-text-two">WATCH THE VIDEO TO LEARN MORE</span></button>
          </div>
        </div>

        <div className="giddaa-bg-tertiary-yellow rounded-2xl px-3 py-6 hover:border-[3px] hover:border-primary hover:cursor-pointer lg:w-[30%] mt-6 lg:mt-0">
          <div className="flex">
            <div className="w-[10%]">
              <img src={Horse} alt="turtle icon" />
            </div>
            <div className="w-[90%] text-center">
              <h2 className="giddaa-heading-three-millik giddaa-primary">Payment Plans</h2>
              <h4 className="giddaa-normal-text-three pt-1">THE GALLOPING HORSE</h4>
            </div>
          </div>
          <div className="pt-3">
            <p className="giddaa-normal-text-two">Imagine you’re looking to buy your dream house, but you don’t have all the money saved up. A payment plan is a structured arrangement where you agree to pay for your home over a period of time instead of all at once. It allows you to split the cost into smaller, manageable payments spread out over months, or years until the full amount is paid off. This makes the purchase of your dream home more affordable and accessible by breaking down the total cost into more managable payments, usually monthly.</p>
          </div>
          <div className="py-8 flex space-x-3 items-center">
            <ArrowDown />
            <div className="flex items-center">
              <h3 className="giddaa-subtitle-three giddaa-primary">View Another Explanation </h3>
              <LightBulb />
            </div>
          </div>

          <div className="pt-3">
            <h2 className="giddaa-heading-four-millik giddaa-primary text-center">Features of Payment Plans</h2>
            <ul>
              <li className="flex space-x-2">

                <span className="inline pt-2"><ListStyleRightArrow /> </span>
                <span className="giddaa-normal-text-two"> For people who want pocket friendly options, but don’t want to pay interest</span>
              </li>
              <li className="flex space-x-2">

                <span className="inline pt-2"><ListStyleRightArrow /> </span>
                <span className="giddaa-normal-text-two"> Mostly offered by property Developers</span>
              </li>
              <li className="flex space-x-2">

                <span className="inline pt-2"><ListStyleRightArrow /> </span>
                <span className="giddaa-normal-text-two"> Usually zero (0%) interest. Payment plans usally don’t attract interest.</span>
              </li>
              <li className="flex space-x-2">
                <span className="inline pt-2"><ListStyleRightArrow /> </span>
                <span className="giddaa-normal-text-two"> Payment periods are usually short term  <span className="font-bold">(6 Months - 3 Years)</span></span>
              </li>
              <li className="flex space-x-2">
                <span className="inline pt-2"><ListStyleRightArrow /> </span>
                <span className="giddaa-normal-text-two"> Like ,mortgages, monthly payments are also fixed, but may change if the property developer experiences issues during development. If periodic payments are subject to change, the developer usually states it in your offer letter.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 flex justify-center">
            <button className='giddaa-button-white rounded-lg px-4 py-2 text-center font-bold text-capitalize flex space-x-3'><PlayIcon /> <span className="giddaa-normal-text-two">WATCH THE VIDEO TO LEARN MORE</span></button>
          </div>
        </div>

        <div className="giddaa-bg-light-grey rounded-2xl px-3 py-6 hover:border-[3px] hover:border-primary hover:cursor-pointer lg:w-[30%] mt-6 lg:mt-0">
          <div className="flex">
            <div className="w-[10%]">
              <img src={Rabbit} alt="rabbit icon" />
            </div>
            <div className="w-[90%] text-center">
              <h2 className="giddaa-heading-three-millik giddaa-primary">Ouright Purchase</h2>
              <h4 className="giddaa-normal-text-three pt-1">THE SWIFT RABBIT</h4>
            </div>
          </div>
          <div className="pt-3">
            <p className="giddaa-normal-text-two">The outright purchase of a house refers to buying a home directly without the need for financing through a mortgage or creation of flexible payment plans by developers. In this scenario, you pay the entire purchase price upfront using your own funds or savings, without relying on a loan from a bank or flexible payment options from developers. This means that once the transaction is complete, the you own the property outright, without any debt or ongoing payments to a lender or property developer.</p>
          </div>
          <div className="py-8 flex space-x-3 items-center">
            <ArrowDown />
            <div className="flex items-center">
              <h3 className="giddaa-subtitle-three giddaa-primary">View Another Explanation </h3>
              <LightBulb />
            </div>
          </div>

          <div className="pt-3">
            <h2 className="giddaa-heading-four-millik giddaa-primary text-center">Features of Outright Purchase</h2>
            <ul>
              <li className="flex space-x-2">

                <span className="inline"><ListStyleRightArrow /> </span>
                <span className="giddaa-normal-text-two"> For people who have the ability to make large purchases at once.</span>
              </li>
              <li className="flex space-x-2">

                <span className="inline pt-2"><ListStyleRightArrow /> </span>
                <span className="giddaa-normal-text-two"> Mostly offered by property Developers</span>
              </li>
              <li className="flex space-x-2">

                <span className="inline pt-2"><ListStyleRightArrow /> </span>
                <span className="giddaa-normal-text-two"> Usually zero (0%) interest. Payment plans usally don’t attract interest.</span>
              </li>
              <li className="flex space-x-2">

                <span className="inline pt-2"><ListStyleRightArrow /> </span>
                <span className="giddaa-normal-text-two"> There are no payment periods. This requires a one-time payment.</span>
              </li>
              <li className="flex space-x-2">
                <span className="inline pt-2"><ListStyleRightArrow /> </span>
                <span className="giddaa-normal-text-two"> This requires one lump sum payment, upon which the property is fully yours.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 flex justify-center">
            <button className='giddaa-button-white rounded-lg px-4 py-2 text-center font-bold text-capitalize flex space-x-3'><PlayIcon /> <span className="giddaa-normal-text-two">WATCH THE VIDEO TO LEARN MORE</span></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseOptions