import Navbar from "./Navbar";
import Footer from "./Footer";
import Divider from "./Divider";
import User from "./User";
import { useState } from "react";
import Markdown from "react-markdown";
import React from "react";

import teacher_board from "../images/teacher_board.png";
import teacher_features from "../images/teacher_features.png";
import teacher_faq from "../images/teacher_faq.png";
import Accordian from "./Accordian";
import Tutorial from "./Tutorial";

const Teacher = () => {
  const [cards, setCards] = useState([
    {
      header: "Features",
      image: teacher_features,
      text: "Set up a profile with your institution and teaching methods to gain insight on the effectiveness of your courses on student success.",
    },
  ]);

  // {
  //     header: "Overview",
  //     image: teacher_board,
  //     text: "Adapt your teaching approach to student feedback for improved learning environments",
  //   },

  const markdown = `
    # Title 1
    - bullet 1
  `;

  const questions = [
    {
      header: "How often are my profile ratings updated?",
      text: "Sample Answer",
    },
    {
      header: "Can I remove my profile?",
      text: "Sample Answer",
    },
    {
      header: "How are reviews verified to be students?",
      text: "Sample Answer",
    },
    {
      header: "Can I edit or delete my student's reviews?",
      text: "Sample Answer",
    },
    {
      header: "How do I report a bug to the developers?",
      text: "Sample Answer",
    },
  ];

  return (
    <div>
      <div className="bg-blue-800">
        <Navbar page="teachers" />
      </div>
      <Tutorial header="Overview" text={markdown} image={teacher_board} />
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

export default Teacher;
