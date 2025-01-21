import Paragraph from "antd/es/typography/Paragraph";
import Button from "../../BaseUi/Button/Button";
import Title from "antd/es/typography/Title";

const HeroSections = () => {
  return (
    <div className="lg:flex grid justify-between w-full gap-4 mt-5 lg:p-5 p-0">
      <div className="flex flex-col justify-between border border-gray-200 lg:h-[800px] h-[600px] lg:w-1/2 w-screen p-5 rounded-md">
        <h1 className="lg:text-4xl text-[18px] mb-4">
          Trade Anywhere By Download The App
        </h1>
        <Paragraph className="mb-6 lg:text-3xl text-sm">
          We have a strong presence in North America, Southeast Asia, Eastern
          and Western Europe and Latin America. Our offices are located in
          Canada, CIS and across western Europe. We have a strong presence in
          North America, Southeast Asia, Eastern and Western Europe and Latin
          America. Our offices are located in Canada, CIS and across western
          Europe. We have a strong presence in North America, Southeast Asia,
          Eastern and Western Europe and Latin America. Our offices are located
          in Canada, CIS and across western Europe. We have a strong presence in
          North America, Southeast Asia, Eastern and Western Europe and Latin
          America. Our offices are located in Canada, CIS and across western
          Europe.
        </Paragraph>
        <div className="flex justify-start gap-2 items-center">
          <Button width={200}>
            <a target="_blank" rel="noopener noreferrer">
              Trade Now
            </a>
          </Button>
          <Button width={200}>
            <a target="_blank" rel="noopener noreferrer">
              SignUp Now
            </a>
          </Button>
        </div>
      </div>
      <div className="w-1/2 rounded-md p-5 lg:flex hidden">
        <img
          src=" https://images.prismic.io/tnfev2/ZkXoiiol0Zci9Mv-_tn-trade-like-a-boss.png?auto=compress,format"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSections;
