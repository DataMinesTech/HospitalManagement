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

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>

      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4 "
      >
        <CalendarTodayIcon />
      </button>
      {/* <br />
        <span>Appointment </span> */}

      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <PersonAddAltIcon />
      </button>
      {/* <br />
        <span>Doctor </span> */}

      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <ManageAccountsIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <MedicalServicesIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <MeetingRoomIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <RoomPreferencesIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        {" "}
        <ManageSearchIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <AddBusinessIcon />
      </button>
      {/* <p>Nurse Station </p> */}
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <SummarizeIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <ReportOffIcon />
      </button>
      <br />
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <VolunteerActivismIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <BiotechIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <BloodtypeIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <EggIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <CheckroomIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <ExitToAppIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <FlagIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <FeedbackIcon />
      </button>
      <Link to="/inventory">
        <button
          type="button"
          className="btn btn-danger rounded-circle btn-xl py-4 px-4"
        >
          <InventoryIcon />
        </button>
      </Link>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        {" "}
        <AddRoadIcon />
      </button>
      <br />
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <AdfScannerIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <AssessmentIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <AllInboxIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <BorderColorIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <ApiIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        {" "}
        <WysiwygIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <ControlCameraIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <SecurityIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        {" "}
        <LaptopChromebookIcon />
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <AirportShuttleIcon />
      </button>
      <br />
      <button
        type="button"
        className="btn btn-danger rounded-circle btn-xl py-4 px-4"
      >
        <ScienceIcon />
      </button>
    </div>
  );
};

export default Dashboard;
