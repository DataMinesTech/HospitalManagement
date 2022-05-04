import React, { useEffect } from "react";
import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../../../actions/appointmentActions";
import { getAllPatients } from "../../../actions/patientActions";
import { getAllRooms } from "../../../actions/roomActions";
import { PageHeader } from "../Header/Header";
import Layout from "../LayoutComponent/Layout";
import PatientDashboardIcon from "../../../images/icons/patient-dashboard-icon.svg";
import AppointmentDashboardIcon from "../../../images/icons/appointment-dashboard-icon.svg";
import OperationDashboardIcon from "../../../images/icons/operation-dashboard-icon.svg";
import ReportsDashboardIcon from "../../../images/icons/reports-dashboard-icon.svg";

const Dashboard = (props) => {
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );

  const { appointments } = useSelector((state) => state.allappointments);
  const { patient } = useSelector((state) => state.patients);
  const { rooms } = useSelector((state) => state.allrooms);

  console.log("props", rooms);

  useEffect(() => {
    if (user) {
      dispatch(getAllAppointments());
    }

    dispatch(getAllPatients());
    dispatch(getAllRooms());
  }, [dispatch]);

  return (
    <div className="position-relative">
      <PageHeader title={"Dashboard"} />
      <Layout>
        {/* <div className="fs-4 fw-bold">Hello, {user?.userName}</div> */}
        <div className="d-grid grid-cols-4 pt-3 gap-3">
          <div className="card-container">
            <div className="d-flex justify-content-start align-items-center gap-3">
              <img
                src={PatientDashboardIcon}
                alt="Rooms Occupied"
                srcset=""
                width={50}
              />
              <div>
                <div className="card-dashboard-title">Patients</div>
                <div className="card-dashboard-heading">{patient?.length}</div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="d-flex justify-content-start align-items-center gap-3">
              <img
                src={AppointmentDashboardIcon}
                alt="Rooms Occupied"
                srcset=""
                width={50}
              />
              <div>
                <div className="card-dashboard-title">Appointments</div>
                <div className="card-dashboard-heading">
                  {appointments?.length}
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="d-flex justify-content-start align-items-center gap-3">
              <img
                src={OperationDashboardIcon}
                alt="Rooms Occupied"
                srcset=""
                width={50}
              />
              <div>
                <div className="card-dashboard-title">Operations</div>
                <div className="card-dashboard-heading">{rooms?.length}</div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="d-flex justify-content-start align-items-center gap-3">
              <img
                src={ReportsDashboardIcon}
                alt="Rooms Occupied"
                srcset=""
                width={50}
              />
              <div>
                <div className="card-dashboard-title">Rooms Occupied</div>
                <div className="card-dashboard-heading">{rooms?.length}</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
