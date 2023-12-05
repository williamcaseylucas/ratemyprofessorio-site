import { SlSocialInstagram } from "react-icons/sl"; // instagram
import { TiSocialTwitter } from "react-icons/ti"; // twitter
import { TiSocialFacebookCircular } from "react-icons/ti"; // facebook
import { MdEmail } from "react-icons/md"; // email
import { Link } from "react-router-dom";

const Footer = ({page}) => {
  return (
    <div className="w-full h-60 bg-blue-800 text-white font-semibold">
      <div className="flex max-w-screen-xl mx-auto">
        {/* Site */}
        <div className="w-1/3 p-4 m-4">
          <h3 className="text-2xl font-bold mb-4">Site</h3>
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
          </ul>
        </div>
        {/* Legal */}
        <div className="w-1/3 p-4 m-4">
          <h3 className="text-2xl font-bold mb-4">Legal</h3>
          <ul>
            <li>
              <Link
              className={`hover:text-slate-300 ${
                page === "terms" && "underline underline-offset-8"
              }`}
              to={"/terms"}
              >
              Terms & Conditions
              </Link>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Copyright Compliance Policy</a>
            </li>
            <li>
              <a href="">Notice at Collection</a>
            </li>
            <li>
              <a href="">Do Not Tell or Share My Personal Information</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="w-1/3 p-4 m-4 flex flex-col">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <div className="flex gap-4">
            <TiSocialTwitter className="cursor-pointer" size={24} />
            <SlSocialInstagram className="cursor-pointer" size={24} />
            <TiSocialFacebookCircular className="cursor-pointer" size={24} />
            <MdEmail className="cursor-pointer" size={24} />
          </div>
          <span className="flex-grow flex flex-col-reverse">
            &copy; {new Date().getFullYear()} LMC 3403, Inc. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;