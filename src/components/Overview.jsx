import pose33 from "../images/boy_and_girl_blue.png";

const Overview = () => {
  return (
    <div className="flex h-[30rem] mt-5">
      <div id="left" className="w-[50%] p-8 ml-24">
        <h1 className="text-6xl mb-8">Overview</h1>
        <p className="text-2xl">
          Introducing RateMyProfessorIO, your personalized guide to academic
          success. RateMyProfessorIO goes beyond traditional professor ratings,
          providing you with tailored recommendations that align with your
          learning preferences and aspirations. Our intelligent algorithm
          analyzes your academic background, learning style, and desired
          outcomes to suggest professors who can effectively support your growth
        </p>
      </div>
      <div
        id="right"
        className="w-[50%] relative mx-auto flex items-center justify-center "
      >
        <img
          className="h-full absolute object-contain  rounded-md "
          src={pose33}
          alt=""
        />
      </div>
    </div>
  );
};

export default Overview;
