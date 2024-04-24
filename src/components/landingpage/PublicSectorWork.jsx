import { DropdownIcon, PublicSectorIcon } from "../../assets/icons/Icon";
import { Public_Workers } from "../../assets/images/images";

const points = ['Have A Place You Can Call Yours!', 'Don’t Let Rent Go Up On You, Again!!', 'Build A Solid Foundation For Your Family.', 'No Agency Fees. Giddaa is Free!'];

const PublicSectorWork = () => {
  return (
    <div className="giddaa-bg-light-accent-green flex flex-col gap-8 p-14">
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-40">
        <div className="flex flex-col items-center lg:items-start gap-6">
          <div className="flex items-center w-24 h-24 p-4 rounded-full bg-white">
            <PublicSectorIcon
            />
          </div>

          <div className="">
            <h1 className="text-primary giddaa-heading-one-millik text-center lg:text-left">
              Public Sector Workers
            </h1>
            <p className="gidda-serve-content text-center lg:text-left">
              You serve the people, and now let us serve you!. Government
              workers can effortlessly apply for a National Housing Fund (NHF)
              loan through a primary mortgage bank with Giddaa—no stress or
              connections needed. Giddaa ensures a seamless application process
              for NHF loans, and government workers can seamlessly explore
              alternative properties and plans beyond NHF.
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
            src={Public_Workers}
            alt="Public workers"
          // className="w-50% h-50%"
          />
        </div>
      </div>
    </div>
  );
};

export default PublicSectorWork;
