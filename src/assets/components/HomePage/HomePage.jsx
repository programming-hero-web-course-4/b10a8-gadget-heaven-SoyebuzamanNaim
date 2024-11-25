

const HomePage = () => {
  return (
    <div className="text-center bg-purple-500 md:mx-4 md:rounded-b-2xl">
      <div className="container mx-auto space-y-6">
        <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl pt-4 md:pt-12 md:w-3/4 mx-auto" style={{ lineHeight: '1.25' }}>
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="text-white opacity-75">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="pb-10">
          <button className="btn rounded-2xl bg-white text-purple-500 font-bold">Shop Now</button>
        </div>
        <div className="indicator">
          <span className="indicator-item indicator-bottom indicator-center items-center inline-flex justify-center">
           <div>
           <img src="/banner.jpg" alt="banner-img" className="w-full" />
            
           </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
