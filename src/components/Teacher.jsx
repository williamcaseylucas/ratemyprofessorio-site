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
import Stillshots from "./Stillshots";

import student_ratings from "../images/Personal_Preferences_Ratings.png";
import teacher_ratings from "../images/Personal_Preferences_Teacher.png";

import { useLayoutEffect } from "react";

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
# How to get started
1. Go to the website sent by your administrator
2. Create an account and enter your name, the school you teach at, the classes you currently teach (which can be updated later), your current preferences as a teacher (how often you give out take-home exams, allow regrade requests, etc), and a personal bio explaining your interests as a professor and research you have been involved in (this will be later used by our NLP model to infer which students are best matched to you).
3. After you have created an account, navigate to the dashboard and see any instances where your name came up in a recommendation.

# How this tool can help you
When you see which recommendations your name was listed in, you can see exactly why you ranked the way you did. This recommendation was made by referencing your bio along with your self reported ratings and ratings students made of you. Now, you can see further details as to which students of which majors or interests are being catered to by your teaching style, and which students may be struggling because certain vital teaching components aren't included in your courses while they are in others. 
`;

  const questions = [
    {
      header: "How often are my profile ratings updated?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales nibh, eu ullamcorper orci. Pellentesque suscipit blandit posuere. Cras interdum tellus non eleifend pretium. Phasellus urna diam, feugiat nec ex vel, molestie bibendum ligula. Pellentesque luctus eget enim eget egestas. Nulla eu risus id quam luctus molestie.",
    },
    {
      header: "Can I remove my profile?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales nibh, eu ullamcorper orci. Pellentesque suscipit blandit posuere. Cras interdum tellus non eleifend pretium. Phasellus urna diam, feugiat nec ex vel, molestie bibendum ligula. Pellentesque luctus eget enim eget egestas. Nulla eu risus id quam luctus molestie.",
    },
    {
      header: "How are reviews verified to be students?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales nibh, eu ullamcorper orci. Pellentesque suscipit blandit posuere. Cras interdum tellus non eleifend pretium. Phasellus urna diam, feugiat nec ex vel, molestie bibendum ligula. Pellentesque luctus eget enim eget egestas. Nulla eu risus id quam luctus molestie.",
    },
    {
      header: "Can I edit or delete my student's reviews?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales nibh, eu ullamcorper orci. Pellentesque suscipit blandit posuere. Cras interdum tellus non eleifend pretium. Phasellus urna diam, feugiat nec ex vel, molestie bibendum ligula. Pellentesque luctus eget enim eget egestas. Nulla eu risus id quam luctus molestie.",
    },
    {
      header: "How do I report a bug to the developers?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales nibh, eu ullamcorper orci. Pellentesque suscipit blandit posuere. Cras interdum tellus non eleifend pretium. Phasellus urna diam, feugiat nec ex vel, molestie bibendum ligula. Pellentesque luctus eget enim eget egestas. Nulla eu risus id quam luctus molestie.",
    },
  ];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

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
      <Stillshots image1={student_ratings} image2={teacher_ratings} />
      <Divider />
      <Accordian questions={questions} />
      <Footer />
    </div>
  );
};

export default Teacher;
