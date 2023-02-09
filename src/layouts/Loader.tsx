import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex">
        <div className="mr-1 h-2.5 w-2.5 animate-bounce rounded-full bg-current"></div>
        <div className="animate-bounce200 mr-1 h-2.5 w-2.5 rounded-full bg-current"></div>
        <div className="animate-bounce400 h-2.5 w-2.5 rounded-full bg-current"></div>
      </div>
    </div>
  );
};

export default Loader;
