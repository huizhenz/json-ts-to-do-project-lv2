import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import NonPage from "../pages//nonPage/NonPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NonPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
