import { DiasporaIcon, DropdownIcon, Underline } from "../../assets/icons/Icon";
import { WeServe } from "../../assets/images/images";

const points = [
  "No Agency Fees. Giddaa Is Free!",

  "We Eliminate Price Discrimination",

  "Giddaa Is Scam Proof!",

  "Relevant Information To Boost Your Confidence!",

  "We Are Responsive!",
];

const WhoWeServe = () => {
  return (
    <div className="flex flex-col gap-8 p-14">
      <div className="relative flex justify-center lg:justify-start ">
        <h2 className="giddaa-heading-two-b-millik pt-2 giddaa-primary text-center lg:text-start">
          Who We Serve
        </h2>
        <div className="absolute lg:left-8 bottom-1">
          <Underline />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-40">
        <div className="flex flex-col items-center lg:items-start gap-6">
          <div className="flex items-center w-24 h-24 p-4 bg-[#c3b40a] bg-opacity-[10%] rounded-full">
            <DiasporaIcon />
          </div>

          <div className="">
            <h1 className="giddaa-heading-one-millik text-primary opacity-[30%] text-center lg:text-left">
              The Diaspora
            </h1>
            <p className="gidda-serve-content text-center lg:text-left">
              Living outside Nigeria? Thinking about buying a place Back Home
              for viists (No need for hotels, Airbnbs, or your parent’s house),
              Investment, or is it a personal goal of yours? Or maybe you see
              yourself spending more time back home . If any of those sounds
              like you, we can help you along your home purchase journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {points.map((point, i) => (
              <div key={i} className="flex items-center gap-4 cursor-pointer">
                <div className="w-5 h-5">
                  <DropdownIcon
                  />
                </div>
                <p className="text-primary giddaa-heading-five">{point}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full">
          <img
            src={WeServe}
            alt="we serve"
          // className="w-50% h-50%"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
