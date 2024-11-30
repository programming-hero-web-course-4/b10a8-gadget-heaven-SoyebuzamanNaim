import { Outlet, NavLink, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  const isCart = location.pathname === "/dashboard/cart";
  const isWishlist = location.pathname === "/dashboard/wishlist";
  const isDashboard = location.pathname === "/dashboard";

  return (
    <div>
      <div className="bg-purple-500 py-8">
        <div className="container mx-auto flex-col justify-center items-center">
          <h2 className="text-2xl font-extrabold text-white text-center">
            Dashboard
          </h2>
          <p className="text-white mt-2 opacity-90 text-center">
            Shopping Cart & Wishlist Tracker
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <NavLink
              to="/dashboard/cart"
              className={`btn rounded-3xl font-bold ${
                isDashboard||isCart
                  ? "bg-white text-purple-500"
                  : "bg-purple-500 text-white hover:bg-purple-600"
              }`}
            >
              Cart
            </NavLink>

            <NavLink
              to="/dashboard/wishlist"
              className={`btn rounded-3xl font-bold  ${
                isWishlist
                  ? "bg-white text-purple-500"
                  : "bg-purple-500 text-white hover:bg-purple-600"
              }`}
            >
              Wishlist
            </NavLink>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Dashboard;
