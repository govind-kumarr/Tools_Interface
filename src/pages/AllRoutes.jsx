import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tools from "./Tools";
import UserInfo from "../Tools/UserInfo";
import ColdEmail from "../Tools/ColdEmail";
import User_info_Doc from "../documentation/User_info.jsx";
import Login from "./Login";
import Email_Gen from "../documentation/Email_Gen";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tools />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user_info" element={<UserInfo />} />
        <Route path="/generate_email" element={<ColdEmail />} />
        <Route path="/user_info/docs" element={<User_info_Doc />} />
        <Route path="/generate_email/docs" element={<Email_Gen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
