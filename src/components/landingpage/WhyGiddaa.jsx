import { Underline } from "../../assets/icons/Icon";

const reviews = [
  {
    message: "I was scammed, by my wife!",
    reviewer: "~ DIASPORAN LIVING IN IRELAND",
  },
  {
    message: "The form was too long!",
    reviewer: "~ GOVERNMENT WORKER IN ABUJA",
  },
  {
    message: "I can’t track my repayments",
    reviewer: "~ NGO WORKER WHO RECENTLY PURCHASED AN APARTMENT",
  },
  {
    message:
      "They sell to diasporan clients at higher prices, that’s price discrimination. It is not fair.",
    reviewer: "~ SOMEONE IN CANADA",
  },
  {
    message:
      "They gave me a housing list on paper to find the house. In today’s tech world? Haba!",
    reviewer: "~ MORTGAGE SEEKER IN ABUJA, NIGERIA.",
  },
];

const WhyGiddaa = () => {
  return (
    <div className="giddaa-bg-light-accent-green lg:pl-14">
      <div className="relative flex justify-center lg:justify-start">
        <h2 className="giddaa-heading-two-b-millik pt-2 giddaa-primary">
          Why Giddaa?
        </h2>
        <div className="absolute lg:left-8 bottom-1">
          <Underline />
        </div>
      </div>
      <div className="py-4">
        <p className="flex w-[60%] mx-auto text-center giddaa-heading-three flex-col">
          Too many Nigerians at home and abroad have complained about scams,
          inavailabilty of flexible payment options, how stressful, ambiguous,
          and manual the property purchase process is, we heard you all,{" "}
          <span className="font-bold">over 100+ of you!</span>
        </p>
      </div>
      <div className="py-4">
        <div className="pt-6 flex pb-9">
          <div className="marquee">
            <div className="overflow-hidden">
              <div className="marquee-content">
                <div className="flex items-center ">
                  {reviews.map((review, i) => (
                    <div key={i} className="mx-8 flex">
                      <span className="text-primary text-2xl -mt-2">❝</span>
                      <div className="flex flex-col">
                        <span className="gidda-review-message">{`${review.message}`}</span>
                        <span className="gidda-review-reviewer">
                          {review.reviewer}
                        </span>
                      </div>
                      <span className="text-primary text-3xl mt-5">❞</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyGiddaa;
