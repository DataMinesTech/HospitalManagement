import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadUser } from "./actions/userActions";
import "./App.css";
import Login from "./Components/Auth/Login";
import DoctorAppointment from "./Components/DoctorComponent/DoctorAppointment";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Layout/Dashboard/Dashboard";
import Inventory from "./Components/Layout/Dashboard/Inventory";
import InvestigationAcknowledge from "./Components/Layout/Dashboard/InvestigationAcknowledge";
import PatientIssue from "./Components/Layout/Dashboard/PatientIssue";
import Room from "./Components/Layout/Dashboard/Room";
import SampleAcknowledge from "./Components/Layout/Dashboard/SampleAcknowledge";
import SampleCollection from "./Components/Layout/Dashboard/SampleCollection";
import Header from "./Components/Layout/Header/Header";
import AllAppointments from "./Components/Layout/OutPatientModal/AllAppointments";
import OutPatientBilling from "./Components/Layout/OutPatientModal/OutPatientBilling";
import MaterialDrawer from "./Components/Layout/Sidebar/MaterialDrawer";
import Advice from "./Components/PatientComponent/Advice";
import Diagnosis from "./Components/PatientComponent/Diagnosis";
import AllDoctors from "./Components/PatientComponent/AllDoctors";
import HistoryAndExam from "./Components/PatientComponent/HistoryAndExam";
import InvestigationProcedure from "./Components/PatientComponent/InvestigationProcedure";
import MedicalCertificate from "./Components/PatientComponent/MedicalCertificate";
import Medication from "./Components/PatientComponent/Medication";
import NewPatient from "./Components/PatientComponent/NewPatient";
import PatientAdmission from "./Components/PatientComponent/PatientAdmission";
import PatientDischarge from "./Components/PatientComponent/PatientDischarge";
import PatientList from "./Components/PatientComponent/PatientList";
import PatientVisit from "./Components/PatientComponent/PatientVisit";
import PrescriptionMedicine from "./Components/PatientComponent/PrescriptionMedicine";
import PresentingComplaint from "./Components/PatientComponent/PresentingComplaint";
import ReferToDoctor from "./Components/PatientComponent/ReferToDoctor";
import RoomStatus from "./Components/PatientComponent/RoomStatus";
import RoomTransfer from "./Components/PatientComponent/RoomTransfer";
import RoomsOccupied from "./Components/RoomComponent/RoomsOccupied";
import ProtectedRoute from "./routes/ProtectedRoute";
import store from "./store";
import { Box, Toolbar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TodaysAppointment from "./Components/Layout/Appointments/TodaysAppointments";
import PatientView from "./Components/PatientComponent/PatientView";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Nunito Sans, sans-serif",
      textTransform: "none",
      fontSize: 14,
    },
  },
});

function App(props) {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: "flex", position: "relative" }}>
          {/* <Header isOpen={isOpen} setIsOpen={setIsOpen} user={user} /> */}
          <MaterialDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              position: "relative",
              minHeight: "100vh",
              backgroundColor: "#F5F0ED",
            }}
          >
            {/* <Toolbar /> */}
            <Switch>
              <Route exact path="/" component={Login} />
              <ProtectedRoute
                exact
                path="/dashboard"
                component={Dashboard}
                user={user}
              />
              <Route exact path="/home" component={Home} />
              <ProtectedRoute exact path="/newpatient" component={NewPatient} />
              <Route
                exact
                path="/patientvisit"
                component={PatientVisit}
                user={user}
              />
              {/* <Route exact path="/allergies" component={PatientAllergies} /> */}
              <Route exact path="/complaint" component={PresentingComplaint} />
              <Route exact path="/medication" component={Medication} />
              <Route exact path="/diagnosis" component={Diagnosis} />
              <Route exact path="/historyandexam" component={HistoryAndExam} />
              <Route
                exact
                path="/investigation"
                component={InvestigationProcedure}
              />
              <Route
                exact
                path="/prescription"
                component={PrescriptionMedicine}
              />
              <Route exact path="/advice" component={Advice} />
              <Route
                exact
                path="/medicalcertificate"
                component={MedicalCertificate}
              />
              <Route exact path="/roomstatus" component={RoomsOccupied} />
              <Route exact path="/refertodoctor" component={ReferToDoctor} />
              <Route exact path="/inventory" component={Inventory} />
              <Route exact path="/patientissue" component={PatientIssue} />
              <Route
                exact
                path="/allappointments"
                component={AllAppointments}
              />
              <Route
                exact
                path="/samplecollection"
                component={SampleCollection}
              />
              <Route
                exact
                path="/sampleacknowledge"
                component={SampleAcknowledge}
              />
              <Route exact path="/appointment" component={DoctorAppointment} />
              <Route exact path="/appointments" component={TodaysAppointment} />
              <Route exact path="/room" component={Room} />
              <Route
                exact
                path="/investigationacknowledge"
                component={InvestigationAcknowledge}
              />
              <Route
                exact
                path="/outpatientbilling"
                component={OutPatientBilling}
              />
              <Route exact path="/patientlist" component={PatientList} />
              <Route exact path="/patient/:id" component={PatientView} />
              <Route exact path="/roomstatus" component={RoomStatus} />
              <Route exact path="/roomtransfer" component={RoomTransfer} />
              <Route exact path="/alldoctors" component={AllDoctors} />
              <Route
                exact
                path="/patientadmission"
                component={PatientAdmission}
              />
              <Route
                exact
                path="/patientdischarge"
                component={PatientDischarge}
              />
            </Switch>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
