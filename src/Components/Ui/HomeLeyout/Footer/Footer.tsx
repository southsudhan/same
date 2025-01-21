import { BiLogoMediumOld, BiLogoTelegram } from "react-icons/bi";
import { BsDiscord, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white  relative bottom-0 w-screen lg:text-[15px] text-sm">
      <div className="flex justify-between  h-[250px]">
        <div className="bg-gray-200 m-2 p-10 rounded-md w-1/3">
          <h1 className="text-3xl font-bold">dydX</h1>
          <p>Milton, Brisbane, Queensland</p>
          <p>Media enquiries</p>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Telegram">
              <BiLogoTelegram className="text-lg" />
            </a>
            <a href="#" aria-label="Medium">
              <BiLogoMediumOld className="text-lg" />
            </a>
            <a href="#" aria-label="Twitter">
              <BsTwitterX className="text-lg" />
            </a>
            <a href="#" aria-label="Discord">
              <BsDiscord className="text-lg" />
            </a>
          </div>
        </div>

        <div className="flex  bg-gray-200 m-2 rounded-md w-2/3 text-center justify-around py-14 ">
          <div>
            <h2 className="font-semibold">Company</h2>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliate
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Assets</h2>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  All assets
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Buy Bitcoin
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Buy Ethereum
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">More</h2>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Tapping Into Crypto
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  OTC
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Latest Scams
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center flex justify-between items-center m-2 p-2 rounded-md bg-gray-200">
        <p>© 2024 dydX. All rights reserved.</p>
        <div className="mt-4 p-1">
          <a href="#" className="hover:underline">
            Sitemap
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
