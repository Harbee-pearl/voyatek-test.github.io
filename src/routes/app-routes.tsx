import DefaultLayout from "@/layouts/default-layout";
import FourOhFour from "@/pages/404";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@/pages/home"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />

      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
};

export default AppRoutes;
