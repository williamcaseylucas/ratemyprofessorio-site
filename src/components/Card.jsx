const Card = ({ image, title, text }) => {
  return (
    <div className="min-w-[12rem] max-w-[20rem] rounded-md outline outline-slate-500 p-5 m-3">
      <svg
        className="text-violet-600 font-bold mb-4"
        xmlns="http://www.w3.org/2000/svg"
        height={image.height}
        width={image.width}
        viewBox={image.viewBox}
        fill="currentColor"
      >
        <path d={image.path} />
      </svg>
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-gray-300">{text}</p>
    </div>
  );
};

export default Card;
