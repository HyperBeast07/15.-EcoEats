import banner_img from "../assets/images/banner_img.png";
const Banner = () => {
  return (
    <div className="py-12 flex flex-col gap-12 md:flex-row items-center justify-evenly" style={{ backgroundColor: "rgb(196,243,199)"}}>
      <div className=" border-solid border-8 border-black w-2/5 py-8 pl-8">
        <h1 className="vanBold text-2xl">
          <span className="text-6xl lg:text-7xl">FORTY PERCENT </span>
          <br></br>OF ALL FOOD IN THE WORLD IS WASTED.
        </h1>
      </div>
      <div className="">
        <img src={banner_img} alt="" className="h-40 lg:h-48" />
      </div>
    </div>
  );
};

export default Banner;