import { useState } from "react";

const AccordianItem = ({ header, text, open, toggle }) => {
  return (
    <div className="p-3 m-3 cursor-pointer select-none" onClick={toggle}>
      <div className="flex justify-between items-center w-[48rem]">
        <h1 className="text-2xl mb-2">{header}</h1>
        {/* toggle arrow up or down */}
        {!open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="12"
            viewBox="0 0 384 512"
          >
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />{" "}
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="12"
            viewBox="0 0 384 512"
          >
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        )}
      </div>

      {open && <p className="text-gray-500">{text}</p>}
    </div>
  );
};

const Accordian = (props) => {
  const questions = Object.values(props);

  const toggle = (index) => {
    if (open === index) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };

  const [open, setOpen] = useState(-1);
  return (
    <div className="w-full p-4 min-h-[30rem]  flex flex-col items-center justify-evenly mb-[2rem]">
      <h1 className="text-6xl mb-8 mt-2">FAQ</h1>
      <div className="outline outline-blue-300 rounded-lg">
        {questions.map((item, idx) => (
          <AccordianItem
            key={idx}
            {...item}
            open={idx === open}
            toggle={() => toggle(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordian;
