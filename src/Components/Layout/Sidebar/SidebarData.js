import DashboardIcon from "@mui/icons-material/Dashboard";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import MedicationIcon from "@mui/icons-material/Medication";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArticleIcon from "@mui/icons-material/Article";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

export const SidebarData = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <AppRegistrationIcon />,
    title: "Patient Registration",
    link: "/newpatient",
  },
  {
    icon: <AirlineSeatFlatIcon />,
    title: "Patient Visit",
    link: "/patientvisit",
  },
  {
    icon: <PersonAddAltIcon />,
    title: "Patient Issue",
    link: "/patientissue",
  },
  {
    icon: <MedicationIcon />,
    title: "Medicine Dispense",
    link: "/medicinedispense",
  },
  {
    icon: <NewReleasesIcon />,
    title: "Invesigtion Acknowledge",
    link: "/investigationacknowledge",
  },
  {
    icon: <SummarizeIcon />,
    title: "Out Patient Billing",
    link: "/outpatientbilling",
  },
  {
    icon: <AssessmentIcon />,
    title: "Sample Collection",
    link: "/samplecollection",
  },
  {
    icon: <PictureAsPdfIcon />,
    title: "Sample Acknowledge",
    link: "/sampleacknowledge",
  },
  {
    icon: <ArticleIcon />,
    title: "Result",
    link: "/result",
  },
];