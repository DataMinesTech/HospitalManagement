import { Avatar } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../Components/Button";
import { PageHeader } from "../Layout/Header/Header";
import Layout from "../Layout/LayoutComponent/Layout";
import { Tab } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatients } from "../../actions/patientActions";
import MedicalHistory from "./MedicalHistory";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PatientView = ({ location }) => {
  const history = useHistory();
  const patientData = location.state.data;
  console.log("patient data", patientData);
  const dispatch = useDispatch();
  const { patient } = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch(getAllPatients());
  }, [dispatch]);

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
      data: <MedicalHistory patientData={patientData} />,
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

  return (
    <div className="relative">
      <PageHeader
        title={patientData.patientName}
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
              alt={patientData.patientName}
              src={patientData.patientEmail}
            />
            <div className="flex flex-col space-y-1">
              <div className="text-lg text-black font-black bg-[#] ">
                {patientData.patientName}
              </div>
              <div className="text-md text-gray-400 uppercase">
                <span>Patient ID:</span>{" "}
                {patientData._id.substr(patientData._id.length - 6)}
              </div>
              <div className="text-md text-gray-400">
                <span>Patient No.:</span> {patientData.patientPhoneNo}
              </div>
              <div className="text-md text-gray-400">
                <span>Patient Email:</span> {patientData.patientEmail}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center col-span-2">
            <div className="px-5">
              <div className="font-bold text-sm uppercase text-primaryColor">
                room
              </div>
              <div className="font-black uppercase text-lg">
                {patientData.patientInRoom}
              </div>
            </div>
            <div className="px-5">
              <div className="font-bold text-sm uppercase text-primaryColor">
                Blood Group
              </div>
              <div className="font-black uppercase text-lg">
                {patientData.patientBloodGroup}
              </div>
            </div>
            <div className="px-5">
              <div className="font-bold text-sm uppercase text-primaryColor">
                Status
              </div>
              <div className="font-black uppercase text-lg">
                {patientData.patientAdmissionStatus}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Button
              onClick={() => {
                history.push(
                  `/updatepatient/${patientData._id}-${
                    patientData.patientName.split(" ")[0]
                  }`,
                  {
                    data: patient.find((item) => item._id === patientData._id),
                  }
                );
              }}
              className="outline-button"
              text={"Edit"}
            />
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

export default PatientView;
