import { useState } from "react";
import { AffordOffIcon, ApplyOnlineOff, ManageTermsOff, MultipleOptionsOffIcon, PayOnlineOffIcon, ScamFreeIcon, StreamlineOffIcon, VirtualViewingsOff } from "../../assets/icons/Icon";

const cards = [
  {
    icon: <ScamFreeIcon/>,
    title: "Stay Scam Free!",
    message:
      "We partner directly with trusted banks and developers. Your applications are sent straight to them, eliminating the need for agents, close relatives or friends. We connect you directly to the source.",
  },
  {
    icon: <StreamlineOffIcon />,
    title: "Streamline Your Search",
    message:
      "We simplify your property search by presenting comprehensive information in a visual and easily understandable format, making decision making easier and quicker for you along your journey.      ",
  },
  {
    icon: <MultipleOptionsOffIcon />,
    title: "Multiple Purchase Options",
    message:
      "We provide you with a diverse range of housing options and flexible financing plans, ensuring you have a wide selection of choices to suit your preferences and current financial situation.",
  },
  {
    icon: <PayOnlineOffIcon />,
    title: "Pay Online & Track All Payments",
    message:
      "Pay online and track every single payment you make. We make your transactions clear as day between you and the partner you purchase from ,be it a property developer or bank.",
  },
  {
    icon: <AffordOffIcon />,
    title: "Find What You Can Afford",
    message:
      "We use affordability tags to visually display properties and financing plans you can afford based on age and income, which could help you simplify your decision-making.",
  },
  {
    icon: <ApplyOnlineOff />,
    title: "Apply Online — in 5 Mins, and Track Your Application.",
    message:
      "Pay online and track every single payment you make. We make your transactions clear as day between you and the partner you purchase from ,be it a property developer or bank.",
  },
  {
    icon: <VirtualViewingsOff />,
    title: "See It For Yourself — Virtual Viewings",
    message:
      "Living abroad? We offer a service that allows you to view the property through a video call. We also send a report of the condition of the property after the viewing. We’re not quite at the VR level yet. 😁",
  },
  {
    icon: <ManageTermsOff />,
    title: "Manage Terms and Documentation",
    message:
      "All terms between you and the developer or bank are managed online. You can view the terms you’ve offered, send revisions, if need be all online. You can also view and manage important documents like offer letters online.",
  },
];

const HereIsWhy = () => {
  const [hoverState, setHoverState] = useState(null)
  return (
    <div className="flex flex-col justify-center p-14 giddaa-bg-light-accent-green">
      <h2 className="giddaa-heading-two-b-millik pt-2 giddaa-primary text-center">
        {`Here's Why!`}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoverState(i)}
            onMouseLeave={() => setHoverState(null)}
            className={`flex flex-col items-center gap-2 border rounded-xl p-5 ${(hoverState === i) ? 'bg-[#F5F5DE]' : 'bg-white'}`}
          >
            <div className={`w-20 h-20 flex justify-center items-center ${(hoverState === i) && 'border border-primary rounded-full'}`}>
              {card.icon}
            </div>
            <span className={`gidda-why-title text-center ${(hoverState === i) ? 'text-black' : 'text-primary'}`}>{card.title}</span>
            <p className="gidda-why-content text-center">{card.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HereIsWhy;
