import { Underline } from "../../assets/icons/Icon";

const contents = [
  {
    number: " 1",
    title: "Find Your Dream Home.",
    message:
      "Choose from the variety of properties available on the platform. You have various options to select from. From completed properties, off-plan properties, and properties in-construction",
  },
  {
    number: "2",
    title: "Find Your Dream Home.",
    message:
      "Choose from the variety of properties available on the platform. You have various options to select from. From completed properties, off-plan properties, and properties in-construction",
  },
  {
    number: "3",
    title: "Find Your Dream Home.",
    message:
      "Choose from the variety of properties available on the platform. You have various options to select from. From completed properties, off-plan properties, and properties in-construction",
  },
  {
    number: "4",
    title: "Find Your Dream Home.",
    message:
      "Choose from the variety of properties available on the platform. You have various options to select from. From completed properties, off-plan properties, and properties in-construction",
  },
  {
    number: "5",
    title: "Find Your Dream Home.",
    message:
      "Choose from the variety of properties available on the platform. You have various options to select from. From completed properties, off-plan properties, and properties in-construction",
  },
  {
    number: "6",
    title: "Find Your Dream Home.",
    message:
      "Choose from the variety of properties available on the platform. You have various options to select from. From completed properties, off-plan properties, and properties in-construction",
  },
];
const HowItWorks = () => {
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
          <div key={i} className="flex gap-4 p-6">
            <div className="bg-[#F5F5DE] flex items-center rounded-2xl h-1/3 w-1/3 p-4">
              <h1 className="gidda-number">{content.number}</h1>
            </div>
            <div className="flex flex-col gap-1">
              <span className="gidda-how-it-works-title text-primary">{content.title}</span>
              <p className="gidda-serve-content">{content.message}</p>
              <button className="bg-white border border-primary rounded-full text-[8px] flex items-center gap-2 w-auto p-2 mt-2">
                <img
                  src="./src/assets/icons/play-small.svg"
                  alt=""
                  className="w-4 h-4"
                />
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
