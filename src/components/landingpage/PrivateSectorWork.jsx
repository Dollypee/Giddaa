import { DropdownIcon, PrivateSectorIcon } from "../../assets/icons/Icon";
import { Private_Workers } from "../../assets/images/images";

const points = [
  "Work From “Your Own Home”",

  "Don’t Let Rent Go Up On You, Again!!",

  "Build A Solid Foundation For Your Family",

  "No Agency Fees. Giddaa Is Free!",
];

const PrivateSectorWork = () => {
  return (
    <div className="flex flex-col gap-8 p-14">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-40">
        <div className="flex flex-col items-center lg:items-start gap-6">
          <div className="flex items-center w-24 h-24 p-4 bg-[#c3b40a] bg-opacity-[10%] rounded-full">
            <PrivateSectorIcon />
          </div>

          <div className="">
            <h1 className="text-primary giddaa-heading-one-millik opacity-[30%] text-center lg:text-left">
              Private Sector Workers
            </h1>
            <p className="gidda-serve-content text-center lg:text-left">
              Whether you’re a doctor, nurse, banker, tech bro or sis, or work
              in another industry in the private sector, Giddaa assists
              individuals looking to purchase property without straining their
              budget or breaking the bank. In the face of rising property
              prices, we empower middle-class individuals, like you, to achieve
              homeownership!
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
            src={Private_Workers}
            alt="Private Workers"
          // className="w-50% h-50%"
          />
        </div>
      </div>
    </div>
  );
};

export default PrivateSectorWork;
