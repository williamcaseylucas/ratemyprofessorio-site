const Stillshots = ({ image1, image2 }) => {
  console.log("image1", image1);
  console.log("image2", image2);
  return (
    <div className="w-full">
      <h1 className="text-6xl text-center mb-6">Screenshots</h1>
      <div className="p-5 gap-5 flex justify-between">
        <div className="" id="left">
          <img className="rounded-xl" src={image1} alt="" />
        </div>
        <div className="" id="right">
          <img className="rounded-xl" src={image2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Stillshots;
