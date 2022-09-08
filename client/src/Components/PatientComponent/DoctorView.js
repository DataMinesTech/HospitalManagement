import { Tab } from "@headlessui/react";
import { Avatar } from "@mui/material";
import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import Button from "../Components/Button";
import { PageHeader } from "../Layout/Header/Header";
import Layout from "../Layout/LayoutComponent/Layout";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const tabItems = [
  {
    label: "Chief Compaints",
    data: "Chief Compaints Informations",
  },
  {
    label: "Vitals",
    data: "Vitals Informations",
  },
  {
    label: "Medical History",
    data: "Medical history Informations",
  },
  {
    label: "Prescribed Tests",
    data: "Prescribed Tests Informations",
  },
  {
    label: "Summary",
    data: "Summary Informations",
  },
];

const DoctorView = ({ location }) => {
  const history = useHistory();
  const doctorData = location.state.data;
  console.log("doctors view", doctorData);
  return (
    <div className="relative">
      <PageHeader
        title={doctorData.userName}
        searchHidden
        back
        onClick={history.goBack}
      />
      <Layout>
        <div className="bg-white shadow-xl shadow-orange-50 py-5 px-5 rounded-lg grid grid-cols-5 gap-5">
          <div className="flex space-x-5 justify-start items-center col-span-2">
            <Avatar
              className="border-2 border-white rounded-full"
              sx={{ width: 100, height: 100, objectFit: "cover" }}
              alt={doctorData.userName}
              src={doctorData.userRole}
            />
            <div className="flex flex-col space-y-1">
              <div className="text-lg text-black font-black bg-[#] ">
                {doctorData.userName}
              </div>
              <div className="text-md text-gray-400 uppercase">
                <span>Doctor ID:</span>{" "}
                {doctorData._id.substr(doctorData._id.length - 6)}
              </div>
              <div className="text-md text-gray-400">
                <span>Doctor No.:</span> {doctorData.phoneNo}
              </div>
              <div className="text-md text-gray-400">
                <span>Doctor Email:</span> {doctorData.email}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center col-span-2"></div>
          <div className="flex items-center justify-end">
            <Button className="outline-button" text={"Edit"} />
          </div>
        </div>

        <div className="mt-10">
          <div className="text-sm font-bold pb-5 uppercase">
            Patient Details
          </div>
          <div>
            <Tab.Group>
              <div className="grid grid-cols-4 gap-5">
                <Tab.List className="bg-white flex flex-col space-y-5 col-span-1 py-5 px-2">
                  {tabItems.map((item, index) => (
                    <Tab
                      key={index}
                      className={({ selected }) =>
                        classNames(
                          "leading-5 text-base text-left py-2 px-2 outline-none transition-colors duration-300 font-bold w-full",
                          selected
                            ? "bg-primaryColor text-white"
                            : "bg-white text-black"
                        )
                      }
                      as={Fragment}
                    >
                      <button>{item.label}</button>
                    </Tab>
                  ))}
                </Tab.List>
                <div className="bg-white py-5 px-2 col-span-3">
                  <Tab.Panels>
                    {tabItems.map((item, index) => (
                      <Tab.Panel className={"text-xl font-bold"} key={index}>
                        {" "}
                        {item.data}{" "}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </div>
              </div>
            </Tab.Group>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default DoctorView;
