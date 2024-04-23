const contents = [
  {
    title: "Developers",
    message1: "Residencia Moderno",
    message2: "Join as a Developer",
  },
  {
    title: "Banks",
    message1: "Join as a Bank",
  },
  {
    title: "Legal",
    message1: "Privacy Policy",
    message2: "Terms & Conditions",
  },
  {
    title: "Contact Us",
    message1: " info@giddaa.com",
    message2: "Whatsapp",
    message3: "Book a Meeting",
    message4: "+234 809 762 1791",
  },
  {
    title: "Site Navigation",
    message1: " Properties",
    message2: "Developers",
    message3: "Banks",
  },
];

const socials = [
  "linkedin.svg",
  "twitter.svg",
  "instagram.svg",
  "tik-tok.svg",
  "facebook.svg",
];

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 items-center bg-primary p-14">
      <button className="flex gap-4 items-center bg-white py-4 px-6 rounded-full">
        <img
          src="./src/assets/icons/whatsapp.svg"
          alt="whatsapp"
          className="w-8 h-8"
        />
        <p>Join our Whatsapp Community </p>
        <img
          src="./src/assets/icons/arrow.svg"
          alt="arrow"
          className="text-primary"
        />
      </button>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 lg:gap-32 justify-between text-white">
        {contents.map((content, i) => (
          <ul key={i}>
            <li className="gidda-footer-header text-semibold">
              {content.title}
            </li>
            <li className="gidda-footer-list">{content.message1}</li>
            <li className="gidda-footer-list">{content.message2}</li>
            <li className="gidda-footer-list">{content.message3}</li>
            <li className="gidda-footer-list">{content.message4}</li>
          </ul>
        ))}
      </div>

      <div className="flex gap-2">
        {socials.map((social, i) => (
          <div key={i} className="">
            <img src={`./src/assets/icons/${social}`} alt={social} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
