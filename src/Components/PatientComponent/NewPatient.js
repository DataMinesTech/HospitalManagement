import React, { useState } from "react";
import Header from "../Layout/Header/Header";
import Sidebar from "../Layout/Sidebar/Sidebar";
import OutPatientModal from "../Layout/OutPatientModal/OutPatientModal";
import { Modal } from "@mui/material";
const divStyle = {
  width : '110px',
  margin: '20px',
  // border: '5px solid black'
};
const emailStyle = {
  width : '300px',
  margin: '40px',
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
      <div>
        <h2>Patient Registration</h2>
        <button onClick={() => setOpenModal(!openModal)}>options</button>
      </div>
      {openModal !== false ? (
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <OutPatientModal />
        </Modal>
      ) : (
        <>
          <div>
            <form encType="multipart/form-data" onSubmit={registerPatient}>
              <label>Patient Id</label>
              <input type="text" name="patientId" required />
              <label>Created Date</label>
              <input type="date" name="createdDate" />
              <input type="checkbox" />
              <label>New Born</label>

              <input type="file" name="avatar" accept="image/*" />

              <h3>Personal Details</h3>
              <div>
                <label>First Name</label>
                <input type="text" />
                <label>Middle Name</label>
                <input type="text" />
                <label>Last Name</label>
                <input type="text" />
                <br />
                <label>DOB</label>
                <input type="date" />
                <label>Age</label>
                <input placeholder="Years" />
                <input placeholder="Months" />
                <input placeholder="Day" />
                <label>Gender</label>
                <select class="form-select" name="gender" id="gender" style={divStyle}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <br />
                <label>Marital Status</label>
                <select class="form-select" name="maritalstatus" id="maritalstatus" style={divStyle}>
                  <option value="married">Married</option>
                  <option value="unmarried">Unmarried</option>
                </select>
                <label>Occupation</label>
                <select class = "form-select" name="occupation" id="occupation" style={divStyle}>
                  <option value="unemployed">Unemployed</option>
                  <option value="Employed">Employed</option>
                </select>
                <label>Language</label>
                <select class="form-select" name="language" id="language" style={divStyle}>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="other">Other</option>
                </select>
                <br />
                <label>Religion</label>
                <select class ="form-select" name="religion" id="religion" style={divStyle}>
                  <option value="hindu">Hindu</option>
                  <option value="jain">Jain</option>
                  <option value="sikh">Sikh</option>
                </select><br />
                
                <span>
                    <label>Nationality</label>
                    <select class="form-select" name="nationality" id="nationality" style={divStyle}>
                    <option value="nri">NRI</option>
                    <option value="indian">Indian</option>
                    <option value="other">other</option>
                  </select>
                </span>
                <label>Email Id</label>
                <input type="email" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" style={emailStyle}/>
                <br />
                <label>Loyalty Name</label>
                <input type="text" class="form-control" placeholder="Name" style={divStyle} />
                <label>Loyalty Card No</label>
                <input type="number" />
                <label>Expiry Date</label>
                <input type="date" />
                <br />
                <label>Identity No</label>
                <select class="form-select" style={divStyle}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <input type="number" placeholder="ID No" />
                <label>Visa Validity</label>
                <input type="date" />
                <h3>Home Address</h3>
                <label>Address/Village</label>
                <input type="text" />
                <label>Province</label>
                <select class="form-select" style={divStyle}>
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
                <input type="text" placeholder="PIN" class= "form-control" style={divStyle}   />
                <label>Telephone</label>
                <input type="number" placeholder="0755-123456" class="form-control" style={divStyle} />
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
                <input type="text" placeholder="Address" class="form-control" style={divStyle}/>
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
                <input class="form-control" type="number" placeholder="Telephone 2" />
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
              <button type="submit" class="btn btn-success">Submit </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
export default NewPatient;
