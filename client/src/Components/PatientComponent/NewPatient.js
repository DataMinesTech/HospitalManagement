import React, { useState } from "react";
import Header from "../Layout/Header/Header";
import Sidebar from "../Layout/Sidebar/Sidebar";
import OutPatientModal from "../Layout/OutPatientModal/OutPatientModal";
import { Divider, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./NewPatient.css";
import WebcamCapture from "../../Helpers/WebcamCapture";
import { useForm } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem",
};

const NewPatient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [openModal, setOpenModal] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);

  const registerPatient = (data) => {
    console.log("hello", data);

    const patientName = `${data.firstName} ${data.middleName} ${data.lastName}`;
    const patientAddress = `${data.address} ${data.province} ${data.district} ${data.postalcode}`;
    const patientAge = new Date().getFullYear() - data.years;

    const newData = {
      patientName,
      patientAddress,
      patientGender: data.gender,
      patientEmail: data.email,
      patientPhoneNo: data.phone,
      patientAge,
      patientOccupation: data.occupation,
      patientAdmissionStatus: data.Admitted ?? "Not Admitted",
    };

    console.log("patientName", newData);
  };

  return (
    <div>
      {/* <Header />    
      <Sidebar /> */}
      <div className="d-flex justify-content-between py-2">
        <p className="h2 px-3 ">Patient Registration</p>
        <button onClick={() => setOpenModal(!openModal)}>options</button>
      </div>
      <Divider></Divider>
      {openModal !== false ? (
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Box sx={style}>
            <OutPatientModal />
          </Box>
        </Modal>
      ) : (
        <>
          <div className="container-fluid ">
            <form
              encType="multipart/form-data"
              className="form-horizontal"
              onSubmit={handleSubmit(registerPatient)}
            >
              <div className="form-group py-2 ">
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <label className="px-2" for="patientId">
                        Patient Id
                      </label>
                      <input
                        className="pl-2 py-2 form-control-sm shadow-sm mb-3 bg-white rounded border-2"
                        type="text"
                        name="patientId"
                      />
                    </div>
                    <div className="col">
                      <label className="pl-5 px-2 ">Created Date</label>
                      <input
                        className="pl-2 form-control-sm shadow-sm mb-2 bg-white rounded border border-2"
                        type="date"
                        name="createdDate"
                        style={{ marginLeft: "28px" }}
                      />
                    </div>
                    <div className="col">
                      <input type="checkbox" />
                      <label>New Born</label>
                    </div>
                    <div class="" style={{ width: "60px", height: "60px" }}>
                      <button
                        className="rounded-circle w-60 h-60 "
                        onClick={() => {
                          setOpenCamera(true);
                        }}
                        style={{ marginRight: "20px" }}
                      >
                        <img
                          src="https://img.icons8.com/color/48/000000/test-account.png"
                          width="50"
                          class="rounded-circle"
                        />
                      </button>
                    </div>
                  </div>
                  {openCamera === true ? (
                    <>
                      <Modal
                        open={openCamera}
                        onClose={() => setOpenCamera(false)}
                      >
                        <Box sx={style}>
                          <WebcamCapture />
                        </Box>
                      </Modal>
                    </>
                  ) : (
                    <></>
                  )}
                  <Typography />
                </div>
                <p className="h4 px-2">Personal Details</p>
                <Divider></Divider>
                <div className="container px-2">
                  <div className="row">
                    <div className="col-sm">
                      <label>First Name: &nbsp;</label>
                      <input
                        type="text"
                        {...register("firstName")}
                        className="pl-2 py-2 form-control-sm shadow-sm mb-3 bg-white rounded border-2"
                      />
                    </div>
                    <div className="col-sm">
                      <label>Middle Name: &nbsp;</label>
                      <input
                        {...register("middleName")}
                        type="text"
                        className="pl-2 py-2 form-control-sm shadow-sm mb-3 bg-white rounded border-2"
                      />
                    </div>
                    <div className="col-sm">
                      <label>Last Name: &nbsp; </label>
                      <input
                        {...register("lastName")}
                        type="text"
                        className="pl-2 py-2 form-control-sm shadow-sm mb-3 bg-white rounded border-2"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col pl-4">
                      <label>DOB </label>
                      <input
                        type="date"
                        className="pl-4"
                        style={{ marginLeft: "58px" }}
                      />
                    </div>
                    <div className="col-sm wrap">
                      <label for="years">Age &nbsp;</label>
                      <input
                        type="number"
                        id="years"
                        placeholder="Years"
                        {...register("years")}
                        className="shadow-sm col-sm input-sm bg-white rounded border-1 "
                        style={{ width: "80px", marginLeft: "13px" }}
                      />
                      <input
                        type="number"
                        placeholder="Months"
                        className="col-sm shadow-sm col-sm input-sm bg-white rounded border-1 "
                        style={{ width: "80px" }}
                      />
                      <input
                        type="number"
                        placeholder="Day"
                        className="col-sm shadow-sm col-sm input-sm bg-white rounded border-1 "
                        style={{ width: "80px" }}
                      />
                    </div>
                    <div className="col-sm">
                      <label>Gender : &nbsp; </label>
                      <select
                        className="selectpicker border-1 mb-1 px-5   py-1 rounded shadow"
                        name="gender"
                        {...register("gender")}
                        id="gender"
                        style={{ marginLeft: "28px" }}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div className="row py-2">
                    <div className="col-sm">
                      <label>Marital Status:</label>
                      <select
                        className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                        {...register("maritalstatus")}
                        id="maritalstatus"
                        style={{ marginLeft: "20px" }}
                      >
                        <option value="married">Married</option>
                        <option value="unmarried">Unmarried</option>
                      </select>
                    </div>
                    <div className="col-sm">
                      <label>Occupation: &nbsp;</label>
                      <select
                        className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                        {...register("occupation")}
                        name="occupation"
                        id="occupation"
                        style={{ marginLeft: "32px" }}
                      >
                        <option value="unemployed">Unemployed</option>
                        <option value="Employed">Employed</option>
                      </select>
                    </div>
                    <div className="col-sm">
                      <label>Language: &nbsp;</label>
                      <select
                        class="input-lg border-1 mb-1 px-5 py-1 rounded shadow"
                        name="language"
                        id="language"
                        style={{ marginLeft: "18px" }}
                      >
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm">
                      <label>Religion: &nbsp;</label>
                      <select
                        class="selectpicker border-1 mb-1 px-5 py-1 rounded shadow"
                        name="religion"
                        id="religion"
                        style={{ marginLeft: "34px" }}
                      >
                        <option value="hindu">Hindu</option>
                        <option value="jain">Jain</option>
                        <option value="sikh">Sikh</option>
                      </select>
                    </div>

                    <div className="col-sm">
                      <label>Nationality: &nbsp;</label>
                      <select
                        class="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                        name="nationality"
                        id="nationality"
                        style={{ marginLeft: "83px" }}
                      >
                        <option value="nri">NRI</option>
                        <option value="indian">Indian</option>
                        <option value="other">other</option>
                      </select>
                    </div>
                    <div className="col-sm">
                      <label>Email Id: &nbsp;</label>
                      <input
                        type="email"
                        {...register("email")}
                        class="pl-2 form-control-sm shadow-sm mb-3 bg-white rounded border-2"
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        style={{ marginLeft: "20px" }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm">
                      <label>Loyalty Name: &nbsp;</label>
                      <input
                        type="text"
                        class="pl-2 form-control-sm shadow-sm mb-3 bg-white rounded border"
                        placeholder="Name"
                        style={{ width: "160px" }}
                      />
                    </div>
                    <div className="col-sm">
                      <label>Loyalty Card No: &nbsp;</label>
                      <input
                        type="number"
                        className="pl-2 form-control-sm shadow-sm mb-3 bg-white rounded border"
                        style={{ width: "160px", marginLeft: "8px" }}
                      />
                    </div>
                    <div className="col-sm">
                      <label>Expiry Date: &nbsp;</label>
                      <input
                        type="date"
                        className="pl-2 form-control-sm shadow-sm mb-3 bg-white rounded border"
                        style={{ marginLeft: "8px" }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-8">
                      <label>Identity No</label>
                      <select
                        class="pl-2 form-control-sm px-3 shadow-sm mb-3 bg-white rounded border "
                        style={{ marginLeft: "15px" }}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <input
                        type="number"
                        placeholder="ID No"
                        className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border "
                        style={{ width: "110px" }}
                      />
                    </div>
                    <div className="col-4">
                      <label>Visa Validity</label>
                      <input
                        type="date"
                        className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border "
                      />
                    </div>
                  </div>
                </div>
                <p className="h3">Home Address</p>
                <Divider></Divider>
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <label>Address/Village &nbsp;</label>
                      <input
                        type="text"
                        className="pl-3 py-2 form-control-sm shadow-sm mb-3 bg-white rounded border-2s"
                        style={{ width: "145px" }}
                        {...register("address")}
                      />
                    </div>
                    <div className="col-sm">
                      <label>Province &nbsp;</label>
                      <select
                        class="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                        style={{ marginLeft: "35px" }}
                        {...register("province")}
                      >
                        <option value="up">Uttar Pradesh</option>
                        <option value="andhrapradesh">Andhra Pradesh</option>
                        <option value="punjab">Punjab</option>
                      </select>
                    </div>
                    <div className="col-sm">
                      <label>District &nbsp; &nbsp; </label>
                      <select
                        {...register("district")}
                        class="selectpicker border-1 mb-1 px-5 py-1 rounded shadow"
                        style={{ marginLeft: "15px" }}
                      >
                        <option value="anantpur">Anantpur</option>
                        <option value="chittoor">chittoor</option>
                        <option value="agra">Agra</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm">
                      <label>Commune/Sangkat &nbsp;</label>

                      <input
                        type="text"
                        className="pl-2 py-2 form-control-sm shadow-sm mb-3 bg-white rounded border-2"
                        style={{ width: "120px" }}
                      />
                    </div>
                    <div className="col-sm">
                      <label>Postal Code</label>
                      <input
                        type="text"
                        {...register("postalcode")}
                        className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                        placeholder="PIN"
                        style={{ marginLeft: "28px", width: "180px" }}
                      />
                    </div>
                    <div className="col-sm">
                      <label>Telephone</label>
                      <input
                        type="number"
                        {...register("phone")}
                        className="pl-2 form-control-sm px-2  shadow-sm mb-3 bg-white rounded border"
                        style={{ marginLeft: "18px" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col-sm-8 form-check">
                        <label>Postal Address</label>
                        <input
                          className="form-check-input"
                          type="checkbox px-4 pl-2"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Telephone 2</label>
                        <input
                          type="number"
                          className="pl-2 form-control-sm px-2   shadow-sm mb-3 bg-white rounded border"
                          placeholder="Telephone 2"
                          style={{ marginLeft: "5px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h3>Nearest Relative</h3>
                <div className="d-flex justify-content-end">
                  <input type="checkbox" className="form-check-input" />
                  <label>Same address as patient</label>
                </div>
                <Divider></Divider>

                <div className="container py-2">
                  <div className="row">
                    <div className="col-sm">
                      <label>Relative Name</label>
                      <input
                        type="text"
                        className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                        style={{ width: "155px", marginLeft: "10px" }}
                      />
                    </div>
                    <div className="col-sm">
                      <label>Address/Village</label>
                      <input
                        type="text"
                        placeholder="Address"
                        className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                        style={{ marginLeft: "28px", width: "150px" }}
                      />
                    </div>
                    <div className="col-sm">
                      <label>Province</label>
                      <select
                        className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                        style={{ marginLeft: "25px" }}
                      >
                        <option value="up">Uttar Pradesh</option>
                        <option value="andhrapradesh">Andhra Pradesh</option>
                        <option value="punjab">Punjab</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm">
                      <label>District</label>

                      <select
                        class="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                        style={{ marginLeft: "75px" }}
                      >
                        <option value="anantpur">Anantpur</option>
                        <option value="chittoor">chittoor</option>
                        <option value="agra">Agra</option>
                      </select>
                    </div>
                    <div className="col-sm">
                      <label>Postal Code</label>
                      <input
                        type="number"
                        className="pl-2 form-control-sm px-2   shadow-sm mb-3 bg-white rounded border"
                        style={{ marginLeft: "25px" }}
                      />
                    </div>
                    <div className="col-sm">
                      <label>Telephone</label>
                      <input
                        type="number"
                        className="pl-2 form-control-sm px-2   shadow-sm mb-3 bg-white rounded border"
                        style={{ marginLeft: "18px" }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-8 form-check">
                      <label>Postal Address</label>
                      <input type="checkbox" className="form-check-input" />
                    </div>
                    <div className="col-4">
                      <label>Telephone 2</label>
                      <input
                        type="number"
                        className="pl-2 form-control-sm px-2   shadow-sm mb-3 bg-white rounded border"
                        placeholder="Telephone 2"
                        style={{ marginLeft: "5px" }}
                      />
                    </div>
                  </div>
                </div>

                <h3>Payer Information</h3>
                <Divider></Divider>
                <div className="container py-2">
                  <div className="row">
                    <div className="col-sm">
                      <label>Payer</label>
                      <select
                        className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                        style={{ marginLeft: "88px" }}
                      >
                        <option value="standard">Standard</option>
                      </select>
                    </div>
                    <div className="col-sm">
                      <label>Sponsor </label>
                      <select
                        className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                        style={{ marginLeft: "95px" }}
                      >
                        <option value="standard">Standard</option>
                      </select>
                    </div>

                    <div className="col-sm">
                      <label>Network</label>
                      <select
                        className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                        style={{ marginLeft: "95px" }}
                      >
                        <option value="select">Select</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex py-2 justify-content-center">
                <button type="submit" class="btn btn-primary btn-block mb-4  ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
export default NewPatient;
