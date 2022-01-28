import React, { useState } from "react";
import Header from "../Layout/Header/Header";
import Sidebar from "../Layout/Sidebar/Sidebar";
import Drawer from "../Layout/Sidebar/MaterialDrawer";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { SidebarData } from "../Layout/Sidebar/SidebarData";
import MaterialDrawer from "../Layout/Sidebar/MaterialDrawer";
import Dashboard from "../Layout/Dashboard/Dashboard";

const Home = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <MaterialDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <Dashboard />
    </div>
  );
};

export default Home;
