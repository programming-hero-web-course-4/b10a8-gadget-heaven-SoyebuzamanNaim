import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Gadget Heaven</title>
      </Helmet>
      <div className="mb-60 md:mb-80 lg:mb-[28rem]">
        <Banner></Banner>
      </div>
      <div className="container mx-auto py-10">
        <Gadgets></Gadgets>
      </div>
    </div>
  );
};

export default HomePage;
