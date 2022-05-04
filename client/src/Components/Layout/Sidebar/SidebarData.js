import DashboardIcon from "../../../images/icons/dashboard-icon.svg";
import PatientIcon from "../../../images/icons/patient-icon.svg";
import DoctorIcon from "../../../images/icons/doctor-icon.svg";
import EmergencyIcon from "../../../images/icons/emergency-icon.svg";
import OperationIcon from "../../../images/icons/operation-icon.svg";
import ReportsIcon from "../../../images/icons/reports-icon.svg";
import AccountsIcon from "../../../images/icons/accounts-icon.svg";
import ExpenseIcon from "../../../images/icons/expense-icon.svg";

export const SidebarData = [
  { id: 1, icon: DashboardIcon, title: "Dashboard", link: "/dashboard" },
  {
    id: 2,
    icon: PatientIcon,
    title: "Patients",
    item: [
      { id: 1, title: "Patient List", link: "/patientlist" },
      { id: 2, title: "Add Patient", link: "/newpatient" },
    ],
  },
  {
    id: 3,
    icon: DoctorIcon,
    title: "Doctor",
    item: [
      { id: 1, title: "Doctor List", link: "/alldoctors" },
      { id: 2, title: "Add Doctor", link: "/newpatient" },
      { id: 3, title: "Appointment", link: "/appointment" },
    ],
  },
  {
    id: 4,
    icon: EmergencyIcon,
    title: "Emergency",
    item: [
      { id: 1, title: "Emergency Form", link: "/alldoctors" },
      { id: 2, title: "Emergency List", link: "/newpatient" },
    ],
  },
  {
    id: 5,
    icon: OperationIcon,
    title: "Operation",
    link: "/dashboard",
  },
  {
    id: 6,
    icon: ReportsIcon,
    title: "Reports",
    link: "/dashboard",
  },
  {
    id: 7,
    icon: AccountsIcon,
    title: "Accounts",
    link: "/dashboard",
  },
  {
    id: 8,
    icon: ExpenseIcon,
    title: "Expense",
    item: [
      { id: 1, title: "Expense List", link: "/alldoctors" },
      { id: 2, title: "Add Expense", link: "/newpatient" },
    ],
  },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Patient Registration",
  //   link: "/newpatient",
  // },

  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Patient Issue",
  //   link: "/patientissue",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "All Appointments",
  //   link: "/allappointments",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Schedule an Appointment",
  //   link: "/appointment",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Invesigtion Acknowledge",
  //   link: "/investigationacknowledge",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Out Patient Billing",
  //   link: "/outpatientbilling",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Sample Collection",
  //   link: "/samplecollection",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Sample Acknowledge",
  //   link: "/sampleacknowledge",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Room Status",
  //   link: "/roomstatus",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "All Doctors",
  //   link: "/alldoctors",
  // },
  // {
  //   icon: <FiActivity color="white" />,
  //   title: "Assign a Room",
  //   link: "/room",
  // },
];
