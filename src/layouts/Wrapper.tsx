import { FC } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "layouts/NavBar";

const Wrapper: FC = () => {
  return (
    <>
      <div className="relative flex min-h-full flex-col">
        <NavBar />
        <div className="">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Wrapper;
