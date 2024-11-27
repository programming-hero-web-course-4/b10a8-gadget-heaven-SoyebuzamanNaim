import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center space-y-8">
      <h2 className="text-5xl ">
        Sorry!! <br />
        Page not found
      </h2>
      <Link
        to={"/"}
        className="text-3xl mx-auto items-center btn btn-primary btn-outline  rounded-lg "
      >
        Go to HomePage
      </Link>
    </div>
  );
};

export default ErrorPage;
