import React from "react";
import BannerFloat from "./BannerFloat";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const handleShopNow = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <div className="relative text-center bg-purple-500 md:mx-4 md:rounded-b-2xl pb-48 md:pb-60 ">
        <div className="container mx-auto space-y-6 mb-4">
          <h1
            className="text-white font-bold text-3xl md:text-4xl lg:text-5xl pt-4 md:pt-12 md:w-3/4 mx-auto"
            style={{ lineHeight: "1.25" }}
          >
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-white opacity-75 md:w-9/12 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button
            onClick={handleShopNow}
            className="btn rounded-2xl bg-white text-purple-500 font-bold "
          >
            Shop Now
          </button>
        </div>
      </div>

      <BannerFloat></BannerFloat>
    </>
  );
};

export default Banner;
