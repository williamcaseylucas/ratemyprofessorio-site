import { SlSocialInstagram } from "react-icons/sl"; // instagram
import { TiSocialTwitter } from "react-icons/ti"; // twitter
import { TiSocialFacebookCircular } from "react-icons/ti"; // facebook
import { MdEmail } from "react-icons/md"; // email
import { Link } from "react-router-dom";

const Navbar = ({ page }) => {
  return (
    <div className="w-full h-24 flex items-center p-4 justify-between text-white  font-bold">
      <div id="left" className="ml-4">
        <ul className="flex gap-8 hover:text-slate-100">
          <li>
            <Link
              className={`hover:text-slate-300 ${
                page === "home" && "underline underline-offset-8"
              }`}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-slate-300 ${
                page === "students" && "underline underline-offset-8"
              }`}
              to={"/students"}
            >
              For Students
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-slate-300 ${
                page === "teachers" && "underline underline-offset-8"
              }`}
              to={"/teachers"}
            >
              For Professors
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-slate-300 ${
                page === "admins" && "underline underline-offset-8"
              }`}
              to={"/admins"}
            >
              For Administrators
            </Link>
          </li>
        </ul>
      </div>
      <div id="right" className="flex gap-3 mr-4">
        <SlSocialInstagram
          className="cursor-pointer hover:text-slate-300"
          size={24}
        />
        <TiSocialFacebookCircular
          className="cursor-pointer hover:text-slate-300"
          size={24}
        />
        <TiSocialTwitter
          className="cursor-pointer hover:text-slate-300"
          size={24}
        />
        <MdEmail className="cursor-pointer hover:text-slate-300" size={24} />
      </div>
    </div>
  );
};

export default Navbar;
