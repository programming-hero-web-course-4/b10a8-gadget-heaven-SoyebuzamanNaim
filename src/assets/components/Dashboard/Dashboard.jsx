import { Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <h2 className="text-5xl ">Dashboard</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;