import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import HomePage from "../components/HomePage";
import PublicRoute from "./PublicRouter";
import PrivateRoute from "./PrivateRouter";
import SignUpPage from "../components/SignUp"
import LoginPage from "../components/LoginPage";
import FormsPage from "../components/FormsPage";
import CodeGeneratorPage from "../components/CodeGeneratorPage";
import CodeExecutor from '../components/CodeExecutor';
import InstructionPage from "../components/InstructionPage";


import Footer from "../components/Footer";
import Header from "../components/Header";
import CodeBlockComp from "../components/utils/CodeBlockComp";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        {/* Replace Route with public and private  */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/code-generator" element={<CodeGeneratorPage />} />
        <Route path="/instructions" element={<InstructionPage />} />
        <Route path="/" element={<CodeExecutor/>}/>
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
