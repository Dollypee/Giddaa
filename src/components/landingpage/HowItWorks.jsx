import { useState } from "react";
import { PlaySmallIcon, Underline } from "../../assets/icons/Icon";

const contents = [
  {
    number: " 1",
    title: "Find Your Dream Home.",
    message:
      "Choose from the variety of properties available on the platform. You have various options to select from. From completed properties, off-plan properties, and properties in-construction",
  },
  {
    number: "2",
    title: "Select A Plan.",
    message:
      "Choose the best way YOU want to buy your dream home. We do most of the hardwork by automatically calculating which properties you are able to afford, as long as you put in your correct age and income.",
  },
  {
    number: "3",
    title: "Book A Viewing",
    message:
      "We give you several options to book a viewing for the property. You can view it yourself, with our agent (for a small fee), or use someone you trust, maybe a family member or close friend. Choose a date and time and book your viewing.",
  },
  {
    number: "4",
    title: "Apply!",
    message:
      "After you have booked a viewing and you are satisfied with the viewing, you acknowledge having viewed the property and then proceed to submit the document required by the organzation you are applying to.",
  },
  {
    number: "5",
    title: "Wait For Application Processing",
    message:
      <div>The partner <span className="font-bold">(Developer or Bank)</span> you applied to will process your application and the submitted documents. You will be notified if your application is accepted or not.</div>,
  },
  {
    number: "6",
    title: "Accept Terms & Make Payment",
    message:
      <div>If the partner accepts your application, they will submit the terms of your <span className="font-bold">application</span> and an offer letter or a term sheet for you to review. If you accept the terms, you can then proceed to make payment and create a mandate for repayment, if it is a mortgage or payment plan.</div>,
  },
];
const HowItWorks = () => {
  const [hoverState, setHoverState] = useState(null)
  return (
    <div className="flex flex-col gap-4 p-4 md:p-2 lg:p-14">
      <div className="relative flex justify-center lg:justify-start ">
        <h2 className="giddaa-heading-two-b-millik pt-2 giddaa-primary">
          How It Works{" "}
        </h2>
        <div className="absolute lg:left-8 bottom-1">
          <Underline />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-12">
        {contents.map((content, i) => (
          <div key={i} className="flex gap-4 p-6" onMouseEnter={() => setHoverState(i)} onMouseLeave={() => setHoverState(null)}>
            <div className={`bg-[#F5F5DE] flex items-center rounded-2xl h-1/3 w-1/3 p-4 text-primary ${(hoverState === i) && 'bg-primary text-white'}`}>
              <h1 className="gidda-number">{content.number}</h1>
            </div>
            <div className={`flex flex-col gap-1 p-3 ${(hoverState === i) && 'bg-[#F3FAF2] rounded-2xl'}`}>
              <span className="gidda-how-it-works-title text-primary">{content.title}</span>
              <p className="gidda-serve-content">{content.message}</p>
              <button className="bg-white border border-primary rounded-full text-sm flex items-center gap-2 w-fit px-2 py-1 mt-2">
                <PlaySmallIcon />
                WATCH THE VIDEO TO LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
