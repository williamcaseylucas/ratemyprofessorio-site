import Divider from "./Divider";
import Footer from "./Footer";
import Hero from "./Hero";
import Overview from "./Overview";
import User from "./User";
import Navbar from "./Navbar";

import { useState } from "react";
import pose33 from "../images/pose_33.png"; // Dummy example
import professorCoffee from "../images/professor_coffee.png";
import studentComputer from "../images/student_computer.png";
import background from "../images/hero.jpg";
import admins from "../images/business_idea.png";
import Info from "./Info";

// "homepage": "https://github.gatech.edu/pages/wrunyon3/lmc-react-website/"

const Main = () => {
  const [cards, setCards] = useState([
    {
      header: "For Students",
      image: studentComputer,
      text: "Streamline the course selection process and provides students with valuable insights into professor effectiveness. By tailoring recommendations to your individual needs, we help you identify professors who are most likely to support your academic path to success.",
      link: "/students",
    },
    {
      header: "For Teachers",
      image: professorCoffee,
      text: "Gain valuable insights into your students’ performance by accessing your personalized dashboard. Identify areas where students excel and pinpoint potential challenges faced by specific majors or learning styles and proactively adapt your teaching approach to better support at-risk students and optimize their learning outcomes.",
      link: "/teachers",
    },
    {
      header: "For Admins",
      image: admins,
      text: "Enhance your programs’ effectiveness by implementing RateMyProfessorIO’s robust machine learning model into your school system. Encourage students and staff to take part in the enhancement of their education using AI supported reviewing.",
      link: "/admins",
    },
  ]);
  return (
    <div className="w-full">
      <div className="w-full h-[75%] flex flex-col">
        <div
          className="h-[40rem] bg-center relative bg-no-repeat bg-cover object-center bg-blend-overlay bg-fixed  bg-black/50"
          style={{ backgroundImage: `url(${background})` }}
        >
          <Navbar page="home" />
          <Hero />
          <div className="wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <Overview />

      <Info />

      {cards.map((card, idx) => {
        return (
          <>
            <User key={idx} index={idx} {...card} buttonActive={true} />
            {idx !== cards.length - 1 && <Divider />}
          </>
        );
      })}

      <Footer />
    </div>
  );
};

export default Main;
