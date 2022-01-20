import React from "react";
import Header from "../Layout/Header/Header";
import Sidebar from "../Layout/Sidebar/Sidebar";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { SidebarData } from "../Layout/Sidebar/SidebarData";

const Home = () => {
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  return (
    <div>
      <Header />
      {SidebarData.map((data, index) => {
        return (
          <li key={index}>
            <Sidebar title={data.title} link={data.link} />
          </li>
        );
      })}
    </div>
  );
};

export default Home;
