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
import Stillshots from "./Stillshots";

import image_cross from "../images/Personal_Preferences_Cross.png";
import ratings_student from "../images/Personal_Preferences_Ratings.png";

const markdown = `
# How to get started
1. Head to the url your administrator provided you and create an account. When doing so, you will be prompted with various questions asking you to fill out your name, your univeristy, your email, your interests / preferences in courses, and a short bio about yourself. Note that the more keywords and useful descriptions you give in your bio will help our model best match you to the right professor. 

# How to use the platform
1. Head to the dashboard and click "create new class"
2. Add the course number or class name from the drop down that pops up
3. State which semester you intend to take this course
4. See a curated list of instructors names pop up from best to worst based on who taught that course in previous semesters as well as a short description as to why they are best suited for your learning style
5. Continue to add more classes and keep a collection of these "cards" so that you know exactly which professors are best for you
6. After the anticapted time has elapsed when you stated you would take that course, you will recieve an email asking you to give a personal score of them yourself and also will be asked whether the ranking for the professor you took was accurate or not. (we will continue improving our model based on your feedback).
  `;

const Student = () => {
  const questions = [
    {
      header: "Do I have to pay for RateMyProfessorIO?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales nibh, eu ullamcorper orci. Pellentesque suscipit blandit posuere. Cras interdum tellus non eleifend pretium. Phasellus urna diam, feugiat nec ex vel, molestie bibendum ligula. Pellentesque luctus eget enim eget egestas. Nulla eu risus id quam luctus molestie.",
    },
    {
      header: "Will my teachers see the reviews I leave?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales nibh, eu ullamcorper orci. Pellentesque suscipit blandit posuere. Cras interdum tellus non eleifend pretium. Phasellus urna diam, feugiat nec ex vel, molestie bibendum ligula. Pellentesque luctus eget enim eget egestas. Nulla eu risus id quam luctus molestie.",
    },
    {
      header: "Is my information shared with third parties?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales nibh, eu ullamcorper orci. Pellentesque suscipit blandit posuere. Cras interdum tellus non eleifend pretium. Phasellus urna diam, feugiat nec ex vel, molestie bibendum ligula. Pellentesque luctus eget enim eget egestas. Nulla eu risus id quam luctus molestie.",
    },
    {
      header: "Can I edit or delete my reviews?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales nibh, eu ullamcorper orci. Pellentesque suscipit blandit posuere. Cras interdum tellus non eleifend pretium. Phasellus urna diam, feugiat nec ex vel, molestie bibendum ligula. Pellentesque luctus eget enim eget egestas. Nulla eu risus id quam luctus molestie.",
    },
    {
      header: "Can I delete my account?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales nibh, eu ullamcorper orci. Pellentesque suscipit blandit posuere. Cras interdum tellus non eleifend pretium. Phasellus urna diam, feugiat nec ex vel, molestie bibendum ligula. Pellentesque luctus eget enim eget egestas. Nulla eu risus id quam luctus molestie.",
    },
  ];
  const [cards, setCards] = useState([
    {
      header: "Features",
      image: student_features,
      text: "Tell us your major and rank what is most important for your success in the classroom and get a personalized list of professors who most closely match your preferences",
    },
  ]);

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
      <Stillshots image1={image_cross} image2={ratings_student} />
      <Divider />
      <Accordian questions={questions} />
      <Footer />
    </div>
  );
};

export default Student;
