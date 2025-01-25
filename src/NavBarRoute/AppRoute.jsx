import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

const AppRoute = () => {
  return (
    <>
        <Sidebar />
        <Header />

        <Outlet />
    </>
  )
}

export default AppRoute