import React, { useEffect } from "react";
import { PageHeader } from "../Header/Header";
import AppointmentCalendar from "./Components/AppointmentCalendar";
import Layout from "../LayoutComponent/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../../../actions/appointmentActions";
import Button from "../../Components/Button";
import AddPatientModal from "../../Components/FilterModal";
import { Box } from "@mui/material";
import { useHistory } from "react-router-dom";

export const appointments = [
  {
    id: 0,
    title: "Watercolor Landscape",
    members: [1],
    roomId: 1,
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    id: 1,
    title: "Oil Painting for Beginners",
    members: [1],
    roomId: 2,
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    id: 2,
    title: "Testing",
    members: [1, 2],
    roomId: 1,
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    id: 3,
    title: "Final exams",
    members: [1, 2],
    roomId: 2,
    startDate: new Date(2017, 4, 29, 9, 30),
    endDate: new Date(2017, 4, 29, 12, 0),
  },
];

export const owners = [
  {
    text: "Andrew Glover",
    id: 1,
    color: "#7159c1",
  },
  {
    text: "Arnie Schwartz",
    id: 2,
    color: "#ab59c1",
  },
];

const TodaysAppointment = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { appointments } = useSelector((state) => state.allappointments);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getAllAppointments());
  }, [dispatch]);
  return (
    <div className="relative">
      <PageHeader title={"Today's Appoinments"} />
      <Layout>
        <Box
          style={{
            overflow: "auto",
            backgroundColor: "#fff",
            borderRadius: "4px",
            padding: "16px 16px",
          }}
        >
          <div className="flex justify-between items-center pb-5 border-b border-gray-200">
            <div className="font-bold text-xl">All Appointments</div>
            <div className="flex space-x-6">
              <Button
                className="primary-button"
                onClick={() => history.push("/newAppointment")}
                text={"Add Appointment"}
              />
            </div>
            <AddPatientModal open={open} onClose={handleClose} />
          </div>
          {appointments.length ? (
            <AppointmentCalendar appointments={appointments} />
          ) : (
            <div>loading...</div>
          )}
        </Box>
      </Layout>
    </div>
  );
};

export default TodaysAppointment;
