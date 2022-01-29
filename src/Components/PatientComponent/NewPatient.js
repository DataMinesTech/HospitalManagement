import React, { useState } from "react";
import Header from "../Layout/Header/Header";
import Sidebar from "../Layout/Sidebar/Sidebar";
import OutPatientModal from "../Layout/OutPatientModal/OutPatientModal";
import { Divider, Modal, Typography } from "@mui/material";
const divStyle = {
  width: "110px",
  margin: "20px",
  // border: '5px solid black'
};
const emailStyle = {
  width: "300px",
  margin: "40px",
  // border: '5px solid black'
};
const NewPatient = () => {
  const [user, setUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    dob: "",
    age: "",
    gender: "",
    maritalStatus: "",
  });
  const [openModal, setOpenModal] = useState(false);

  const registerPatient = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <div>
      {/* <Header />    
      <Sidebar /> */}
      <div className="d-flex justify-content-between">
        <p className="h2 px-3 ">Patient Registration</p>
        <button onClick={() => setOpenModal(!openModal)}>options</button>
      </div>
      {openModal !== false ? (
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <OutPatientModal />
        </Modal>
      ) : (
        <>
          <div className="container-fluid ">
            <form
              encType="multipart/form-data"
              className="form-horizontal"
              onSubmit={registerPatient}
            >
              <div className="form-group ">
                <div className="d-flex justify-content-around">
                  <div>
                    <label className=" px-2" for="patientId">
                      Patient Id
                    </label>
                    <input
                      className="pl-2 py-2 form-control-sm shadow-sm mb-3 bg-white rounded border-2"
                      type="text"
                      name="patientId"
                      required
                    />
                  </div>
                  <div>
                    <label className="pl-5  ">Created Date</label>
                    <input
                      className="pl-2 form-control-sm shadow-sm mb-2 bg-white rounded border border-2"
                      type="date"
                      name="createdDate"
                    />
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>New Born</label>
                  </div>

                  <input type="file" name="avatar" accept="image/*" />
                  <Typography />
                </div>
                <p className="h4 px-2">Personal Details</p>
                <Divider></Divider>
                <div className="py-2">
                  <div className="d-flex justify-content-around">
                    <div>
                      <label>First Name: &nbsp;</label>
                      <input
                        type="text"
                        className="pl-2 py-2 form-control-sm shadow-sm mb-3 bg-white rounded border-2"
                      />
                    </div>
                    <div>
                      <label>Middle Name: &nbsp;</label>
                      <input
                        type="text"
                        className="pl-2 py-2 form-control-sm shadow-sm mb-3 bg-white rounded border-2"
                      />
                    </div>
                    <div>
                      <label>Last Name: &nbsp; </label>
                      <input
                        type="text"
                        className="pl-2 py-2 form-control-sm shadow-sm mb-3 bg-white rounded border-2"
                      />
                    </div>
                  </div>
                  <br />
                  <div className=" d-flex justify-content-around">
                    <div>
                      <label>DOB</label>
                      <input type="date" />
                    </div>
                    <div>
                      <label>Age</label>
                      <input
                        type="number"
                        placeholder="Years"
                        className="pl-2 form-control-sm -p-2 shadow-sm mb-3 bg-white rounded border-1 "
                      />
                      <input type="number" placeholder="Months" />
                      <input type="number" placeholder="Day" />
                    </div>
                    <div>
                      <label>Gender : &nbsp; </label>
                      <select
                        className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                        name="gender"
                        id="gender"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex justify-content-around">
                    <div>
                      <label>Marital Status: &nbsp;</label>
                      <select
                        className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                        name="maritalstatus"
                        id="maritalstatus"
                      >
                        <option value="married">Married</option>
                        <option value="unmarried">Unmarried</option>
                      </select>
                    </div>
                    <div>
                      <label>Occupation: &nbsp;</label>
                      <select
                        className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                        name="occupation"
                        id="occupation"
                      >
                        <option value="unemployed">Unemployed</option>
                        <option value="Employed">Employed</option>
                      </select>
                    </div>
                    <div>
                      <label>Language: &nbsp;</label>
                      <select
                        class="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                        name="language"
                        id="language"
                      >
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex justify-content-around">
                    <div>
                      <label>Religion: &nbsp;</label>
                      <select
                        class="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                        name="religion"
                        id="religion"
                      >
                        <option value="hindu">Hindu</option>
                        <option value="jain">Jain</option>
                        <option value="sikh">Sikh</option>
                      </select>
                    </div>

                    <span>
                      <label>Nationality: &nbsp;</label>
                      <select
                        class="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                        name="nationality"
                        id="nationality"
                      >
                        <option value="nri">NRI</option>
                        <option value="indian">Indian</option>
                        <option value="other">other</option>
                      </select>
                    </span>
                    <div>
                      <label>Email Id: &nbsp;</label>
                      <input
                        type="email"
                        class="pl-2 form-control-sm shadow-sm mb-3 bg-white rounded border"
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="d-flex justify-content-around">
                    <div>
                      <label>Loyalty Name: &nbsp;</label>
                      <input
                        type="text"
                        class="pl-2 form-control-sm shadow-sm mb-3 bg-white rounded border"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <label>Loyalty Card No: &nbsp;</label>
                      <input
                        type="number"
                        className="pl-2 form-control-sm shadow-sm mb-3 bg-white rounded border"
                      />
                    </div>
                    <div>
                      <label>Expiry Date: &nbsp;</label>
                      <input
                        type="date"
                        className="pl-2 form-control-sm shadow-sm mb-3 bg-white rounded border"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="d-flex justify-content-around">
                    <div>
                      <label>Identity No</label>
                      <select class="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border ">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <input
                        type="number"
                        placeholder="ID No"
                        className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border "
                      />
                    </div>
                    <div>
                      <label>Visa Validity</label>
                      <input
                        type="date"
                        className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border "
                      />
                    </div>
                  </div>
                  <p className="h3">Home Address</p>
                  <Divider></Divider>
                  <div className="d-flex justify-content-around">
                    <div>
                      <label>Address/Village</label>
                      <input
                        type="text"
                        className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                      />
                    </div>
                    <div>
                      <label>Province</label>
                      <select class="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
                        <option value="up">Uttar Pradesh</option>
                        <option value="andhrapradesh">Andhra Pradesh</option>
                        <option value="punjab">Punjab</option>
                      </select>
                    </div>
                    <div>
                      <label>District</label>
                      <select class="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
                        <option value="anantpur">Anantpur</option>
                        <option value="chittoor">chittoor</option>
                        <option value="agra">Agra</option>
                      </select>
                    </div>
                  </div>
                  <label>Postal Code</label>
                  <input type="text" placeholder="PIN" />
                  <label>Telephone</label>
                  <input type="number" placeholder="0755-123456" />
                  <br />
                  <label>Postal Address</label>
                  <input type="checkbox" />
                  <label>Telephone 2</label>
                  <input type="number" placeholder="Telephone 2" />

                  <h3>Nearest Relative</h3>
                  <input type="checkbox" />
                  <label>Same address as patient</label>
                  <br />
                  <label>Relative Name</label>
                  <input type="text" placeholder="Telephone 2" />
                  <label>Address/Village</label>
                  <input
                    type="text"
                    placeholder="Address"
                    class="form-control"
                    style={divStyle}
                  />
                  <label>Province</label>
                  <select>
                    <option value="up">Uttar Pradesh</option>
                    <option value="andhrapradesh">Andhra Pradesh</option>
                    <option value="punjab">Punjab</option>
                  </select>
                  <label>District</label>
                  <select class="form-select" style={divStyle}>
                    <option value="anantpur">Anantpur</option>
                    <option value="chittoor">chittoor</option>
                    <option value="agra">Agra</option>
                  </select>
                  <label>Postal Code</label>
                  <input type="number" />
                  <label>Telephone</label>
                  <input type="number" />
                  <br />
                  <label>Postal Address</label>
                  <input type="checkbox" />
                  <label>Telephone 2</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="Telephone 2"
                  />
                  <h3>Payer Information</h3>
                  <label>Payer</label>
                  <select>
                    <option value="standard">Standard</option>
                  </select>
                  <br />
                  <label>Sponsor </label>
                  <select>
                    <option value="standard">Standard</option>
                  </select>
                  <br />
                  <label>Network</label>
                  <select>
                    <option value="select">Select</option>
                  </select>
                </div>
                <button type="submit" class="btn btn-success">
                  Submit{" "}
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
