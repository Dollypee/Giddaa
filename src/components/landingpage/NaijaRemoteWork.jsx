import { DropdownIcon, NaijaRemoteIcon } from "../../assets/icons/Icon";
import { RemoteMan } from "../../assets/images/images";

const points = [
  " Work From “Your Own Home”",

  " Invest In Man’s Greatest Asset Class",

  "Don’t Let Rent Go Up On You, Again!!",
  'No Agency Fees. Giddaa Is Free!'
];

const NaijaRemoteWork = () => {
  return (
    <div className="flex flex-col gap-8 giddaa-bg-light-accent-green p-14">
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-40">
        <div className="flex flex-col items-center lg:items-start gap-6">
          <div className="flex items-center w-24 h-24 p-4 bg-white rounded-full">
            <NaijaRemoteIcon />
          </div>

          <div className="">
            <h1 className="text-primary giddaa-heading-one-millik text-center lg:text-left">
              Naija Remote Workers
            </h1>
            <p className="gidda-serve-content text-center lg:text-left">
              Do you work from <span className="line-through">home?</span> Your own Home? With Giddaa, that’s possible. You don’t need to have all the money at once to buy a house to become a homeowner. Leverage your job flexibility working remotely and your current earning capacity to build equity in a home of your own.
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
            src={RemoteMan}
            alt="Remote Worker"
          // className="w-50% h-50%"
          />
        </div>
      </div>
    </div>
  );
};

export default NaijaRemoteWork;
