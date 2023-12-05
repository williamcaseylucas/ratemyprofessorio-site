import Navbar from "./Navbar";
import Footer from "./Footer";
import Divider from "./Divider";
import User from "./User";
import { useState } from "react";
import Markdown from "react-markdown";
import React from "react";

import boyGirlCollab from "../images/boy_girl_collab.png";
import background from "../images/hero.jpg";
import student_features from "../images/student_features.png";
import student_faq from "../images/student_faq.png";
import Accordian from "./Accordian";
import Tutorial from "./Tutorial";

// const Student = () => {
//   const [cards, setCards] = useState([
//   {
//     header: "Overview",
//     image: boyGirlCollab,
//     text: "Implement RateMyProfessorIO to encourage your academic community to take a more active part in their educator selection",
//   },
// ]);
// return (
//      <div>
//        <div className="bg-blue-800">
//          <Navbar page="students" />
//        </div>
//        <div className="w-full max-w-screen-xlg flex items-center justify-center">
//          {/* <Markdown className="prose">{markdown}</Markdown> */}

//        </div>
//        <Divider />
//        <Footer />
//      </div>
//    );
// };

// export default Student;

const Student = () => {
  const questions = [
    {
      header: "Do I have to pay for RateMyProfessorIO?",
      text: "Sample Answer",
    },
    {
      header: "Will my teachers see the reviews I leave?",
      text: "Sample Answer",
    },
    {
      header: "Is my information shared with third parties?",
      text: "Sample Answer",
    },
    {
      header: "Can I edit or delete my reviews?",
      text: "Sample Answer",
    },
    {
      header: "Can I delete my account?",
      text: "Sample Answer",
    },
  ];
  const [cards, setCards] = useState([
    {
      header: "Features",
      image: student_features,
      text: "Tell us your major and rank what is most important for your success in the classroom and get a personalized list of professors who most closely match your preferences",
    },
  ]);

  // {
  //     header: "Overview",
  //     image: boyGirlCollab,
  //     text: "Identify professors with teaching styles more closely catered to your academic needs",
  //   },

  // {
  //     header: "FAQ",
  //     image: student_faq,
  //   },

  console.log("student questions", questions);

  console.log("when we ...", ...questions);

  const markdown = `
    # student markdown
    - some other text
  `;

  return (
    <div>
      <div className="bg-blue-800">
        <Navbar page="students" />
      </div>
      <Tutorial header="Overview" text={markdown} image={boyGirlCollab} />
      <Divider />
      {cards.map((card, idx) => {
        return (
          <>
            <User key={idx} index={idx} {...card} />
            {idx !== cards.length - 1 && <Divider />}
          </>
        );
      })}
      <Divider />
      <Accordian {...questions} />
      <Footer />
    </div>
  );
};

export default Student;
