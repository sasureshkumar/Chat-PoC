import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Loader from "layouts/Loader";
import Dashboard from "features/chat/Index";

const Wrapper = React.lazy(() => import("layouts/Wrapper"));

const Router: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
