import React from 'react';

const BannerFloat = () => {
    return (
        <div className='container mx-auto '>
            <div className="relative">
        <div className="lg:my-8  bg-inherit rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12  mx-auto">
          <div
            className="  rounded-2xl lg:w-2/3  md:w-11/12 w-full mx-auto"
          >
            <img
      src="src/assets/images/banner.jpg"
      alt="banner-img"
      className="rounded-2xl border-2 backdrop-blur-lg p-3"
    />
           
          </div>
        </div>
      </div>
        </div>
    );
};

export default BannerFloat;