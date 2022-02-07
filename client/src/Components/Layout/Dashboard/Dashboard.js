import React from "react";
import { Link } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ReportOffIcon from "@mui/icons-material/ReportOff";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import BiotechIcon from "@mui/icons-material/Biotech";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import EggIcon from "@mui/icons-material/Egg";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FlagIcon from "@mui/icons-material/Flag";
import FeedbackIcon from "@mui/icons-material/Feedback";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import AdfScannerIcon from "@mui/icons-material/AdfScanner";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ApiIcon from "@mui/icons-material/Api";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import SecurityIcon from "@mui/icons-material/Security";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import ScienceIcon from "@mui/icons-material/Science";
import { Divider } from "@mui/material";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Divider />
      <br />
      <div className="d-flex justify-content-evenly">
        <div>
          <button
            type="button"
            className="btn rounded-circle btn-lg py-4 px-4 "
          >
            <img src="https://img.icons8.com/color/48/000000/calendar--v1.png" />
          </button>

          <p>Appoinment</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/edit-user-male--v1.png" />
          </button>
          <p>Patient Register</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/clinic.png" />
          </button>
          <p>Clinic manage</p>
        </div>

        <div>
          {" "}
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/doctors-bag.png" />
          </button>
          <p>Emergency</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/hospital.png" />
          </button>
          <p>Procedure room</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/hospital-room--v1.png" />
          </button>
          <p>Operation Theatre</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            {" "}
            <img src="https://img.icons8.com/color/48/000000/call-in-bed.png" />
          </button>
          <p>In-Patient Management</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/looking-after.png" />
          </button>
          <p>Nurse Station</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/estimate.png" />
          </button>
          <p>Billing and collection</p>
        </div>

        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/bill.png" />
          </button>
          <p>Insuarance nd claim</p>
        </div>
      </div>
      <div className="d-flex justify-content-evenly">
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/enema.png" />
          </button>
          <p>Phlebotomy</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/laboratory.png" />
          </button>
          <p>Laboratory</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/diabetes-monitor.png" />
          </button>
          <p>Blood bank</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/xray.png" />
          </button>
          <p>Radiology</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/clothes-in-laundry.png" />
          </button>
          <p>Linen and laundary</p>
        </div>

        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/leave-house.png" />
          </button>
          <p>Discharge Summary</p>
        </div>

        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/funeral.png" />
          </button>
          <p>Mortuary management</p>
        </div>
        <div>
          <Link to="/feedback">
            <button
              type="button"
              className="btn  rounded-circle btn-xl py-4 px-4"
            >
              <img src="https://img.icons8.com/color/48/000000/feedback.png" />
            </button>
            <p>Feedback Management</p>
          </Link>
        </div>

        <div>
          <Link to="/inventory">
            <button
              type="button"
              className="btn  rounded-circle btn-xl py-4 px-4"
            >
              <img src="https://img.icons8.com/color/48/000000/new-product--v1.png" />
            </button>
          </Link>
          <p>Inventory</p>
        </div>

        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/online-request.png" />
          </button>
          <p>MRD</p>
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-evenly">
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/combo-chart--v1.png" />
          </button>
          <p>Mis Dashboard</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/report-card.png" />
          </button>
          <p>Mis Reports</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/move-by-trolley.png" />
          </button>
          <p>Inventory Setup</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/template.png" />
          </button>
          <p>Custom Template</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/project-management.png" />
          </button>
          <p>Software Management</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/support.png" />
          </button>
          <p>CSSO</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/cyber-security.png" />
          </button>
          <p>System Control</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/user-credentials.png" />
          </button>
          <p>Security and Audit</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/administrator-female.png" />
          </button>
          <p>HR Management</p>
        </div>
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/ambulance.png" />
          </button>
          <p>Ambulance management</p>
        </div>
      </div>
      <br />
      <div
        className="d-flex justify-content-start"
        style={{ paddingLeft: "1rem" }}
      >
        <div>
          <button
            type="button"
            className="btn  rounded-circle btn-xl py-4 px-4"
          >
            <img src="https://img.icons8.com/color/48/000000/chemical-plant-3.png" />
          </button>
          <p>Laboratory Setup</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
