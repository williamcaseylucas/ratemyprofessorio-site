import Navbar from "./Navbar";
import Footer from "./Footer";
import Divider from "./Divider";
import { useState } from "react";
import User from "./User";
import Markdown from "react-markdown";

import students_by_table from "../images/students_by_table.png";
import admin_setup from "../images/admin_setup.png";
import admin_faq from "../images/admin_faq.png";
import Accordian from "./Accordian";
import Tutorial from "./Tutorial";
import Stillshots from "./Stillshots";

const markdown = `
  # Teachers

Send this educational website to faculty and request that they sign up and list their teaching preferences. Step by step instructions are provided in the subsection titled “for teachers”.

# Students

Send this educational website to students and request that they sign up and list their teaching preferences. Step by step instructions are provided in the subsection titled “for students”.

# Development

## Overview

For this project, you will have to reach out to a software engineer who is familiar with working with frontend, backend, and natural language processing technologies. 

## Frontend

Use Streamlit to create the frontend for this product. In particular, each user will need to create an account with RateMyProfessorIO and will need to sign in before being able to use the platform. Details on how to create unique user accounts can be found here: 

[Create unique user accounts](https://blog.streamlit.io/streamlit-authenticator-part-1-adding-an-authentication-component-to-your-app/)

Next, create a custom page based on whether the user is a student or professor. Streamlit offers markdown functionality which means writing textual information with images, latex, and code can be neatly formatted here. See the student and teacher pages to see examples of how the template should be created. 

See this page for details on how to use streamlit to create dynamic calendars, images, metrics, and much more:

[Streamlit API](https://docs.streamlit.io/library/api-reference)
## Backend

This database can be setup with a technology stack called FastAPI. FastAPI toutes being one of the fastest api’s out on the market today, and it is lightweight enough to enable writing endpoint routes that are succinct and concise. Note that it’s important that we are using a framework like FastAPI because it is written in Python, which means integrating with our natural language processing model will be more seamless as it is also written in Python. 

Since we will be performing various relations to our data, it is best we use a relational database like PostgreSQL. This will enhance our ability to join tables together based on sharing a common University, class, etc. 

The backend will consist of students and professors and their respective answers to questions they answered when signing up. Students will also have the information logged in the database for the classes they intend to take and input into the frontend. 

## Natural Language Processing Model

For this portion, we will take advantage of two technologies: LangChain and Google’s PaLM 2. LangChain will allow us to interface with external large language models and interact with it like you would with ChatGPT. The queries we pass to LangChain can then be passed to PaLM 2, which makes use of an optimized model that can write the necessary SQL code to query our database and gather important information on a professor’s teaching style, and also any information students log as to whether the professor’s rankings for themselves were actually accurate or not. 

Responses can be cached in our database and vectorized using HuggingFace to further train on and optimize over time.
  `;

const Admin = () => {
  const [cards, setCards] = useState([
    {
      header: "Setup Instructions",
      image: admin_setup,
      text: "Please watch the following video for an in-depth guide on implementing our software",
    },
  ]);

  const questions = [
    {
      header: "How do I get RateMyProfessorIO for my school or district?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales nibh, eu ullamcorper orci. Pellentesque suscipit blandit posuere. Cras interdum tellus non eleifend pretium. Phasellus urna diam, feugiat nec ex vel, molestie bibendum ligula. Pellentesque luctus eget enim eget egestas. Nulla eu risus id quam luctus molestie.",
    },
    {
      header: "What are the benefits of using RateMyProfessorIO?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales nibh, eu ullamcorper orci. Pellentesque suscipit blandit posuere. Cras interdum tellus non eleifend pretium. Phasellus urna diam, feugiat nec ex vel, molestie bibendum ligula. Pellentesque luctus eget enim eget egestas. Nulla eu risus id quam luctus molestie.",
    },
    {
      header: "What are the system requirements for RateMyProfessorIO",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales nibh, eu ullamcorper orci. Pellentesque suscipit blandit posuere. Cras interdum tellus non eleifend pretium. Phasellus urna diam, feugiat nec ex vel, molestie bibendum ligula. Pellentesque luctus eget enim eget egestas. Nulla eu risus id quam luctus molestie.",
    },
    {
      header:
        "I'm having trouble setting up RateMyProfessorIO. What should I do?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales nibh, eu ullamcorper orci. Pellentesque suscipit blandit posuere. Cras interdum tellus non eleifend pretium. Phasellus urna diam, feugiat nec ex vel, molestie bibendum ligula. Pellentesque luctus eget enim eget egestas. Nulla eu risus id quam luctus molestie.",
    },
    {
      header: "Can I contact the developers of RateMyProfessorIO for support?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac sodales nibh, eu ullamcorper orci. Pellentesque suscipit blandit posuere. Cras interdum tellus non eleifend pretium. Phasellus urna diam, feugiat nec ex vel, molestie bibendum ligula. Pellentesque luctus eget enim eget egestas. Nulla eu risus id quam luctus molestie.",
    },
  ];

  return (
    <div>
      <div className="bg-blue-800">
        <Navbar page="admins" />
      </div>
      <Tutorial header="Overview" text={markdown} image={students_by_table} />
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
      <Accordian questions={questions} />
      <Footer />
    </div>
  );
};

export default Admin;
