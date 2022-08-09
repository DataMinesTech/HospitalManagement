import { Avatar } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Components/Button";
import { PageHeader } from "../Layout/Header/Header";
import Layout from "../Layout/LayoutComponent/Layout";

const PatientView = ({ location }) => {
  const history = useHistory();
  const patientData = location.state.data;
  console.log("patient data", patientData);
  return (
    <div className="relative">
      <PageHeader
        title={patientData.patientName}
        searchHidden
        back
        onClick={history.goBack}
      />
      <Layout>
        <div className=" bg-white shadow-xl shadow-orange-50 py-5 px-5 rounded-lg grid grid-cols-5 gap-5">
          <div className="flex space-x-5 justify-start items-center col-span-2">
            <Avatar
              className="border-2 border-white rounded-full"
              sx={{ width: 100, height: 100, objectFit: "cover" }}
              alt={patientData.patientName}
              src={patientData.patientEmail}
            />
            <div className="flex flex-col space-y-1">
              <div className="text-lg text-black font-bold ">
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
              <div className="font-bold text-sm uppercase text-[#FF7B54]">
                room
              </div>
              <div className="font-black uppercase text-lg">
                {patientData.patientInRoom}
              </div>
            </div>
            <div className="px-5">
              <div className="font-bold text-sm uppercase text-[#FF7B54]">
                Blood Group
              </div>
              <div className="font-black uppercase text-lg">
                {patientData.patientBloodGroup}
              </div>
            </div>
            <div className="px-5">
              <div className="font-bold text-sm uppercase text-[#FF7B54]">
                Status
              </div>
              <div className="font-black uppercase text-lg">
                {patientData.patientAdmissionStatus}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Button className="outline-button" text={"Edit"} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PatientView;
