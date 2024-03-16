import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

const MainPage = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 flex">
      <Sidebar />
      <Content />
    </div>
  );
};

export default MainPage;
