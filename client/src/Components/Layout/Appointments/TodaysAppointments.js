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
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";

const events = [
  {
    id: 0,
    title: "Board meeting",
    start: new Date(2022, 8, 1, 9, 0, 0),
    end: new Date(2022, 8, 1, 13, 0, 0),
    resourceId: 1,
  },
  {
    id: 1,
    title: "MS training",
    allDay: true,
    start: new Date(2018, 0, 29, 14, 0, 0),
    end: new Date(2018, 0, 29, 16, 30, 0),
    resourceId: 2,
  },
  {
    id: 2,
    title: "Team lead meeting",
    start: new Date(2018, 0, 29, 8, 30, 0),
    end: new Date(2018, 0, 29, 12, 30, 0),
    resourceId: 3,
  },
  {
    id: 11,
    title: "Birthday Party",
    start: new Date(2018, 0, 30, 7, 0, 0),
    end: new Date(2018, 0, 30, 10, 30, 0),
    resourceId: 4,
  },
];

// export const appointments = [
//   {
//     id: 0,
//     title: "Watercolor Landscape",
//     members: [1],
//     roomId: 1,
//     startDate: new Date(),
//     endDate: new Date(),
//   },
//   {
//     id: 1,
//     title: "Oil Painting for Beginners",
//     members: [1],
//     roomId: 2,
//     startDate: new Date(),
//     endDate: new Date(),
//   },
//   {
//     id: 2,
//     title: "Testing",
//     members: [1, 2],
//     roomId: 1,
//     startDate: new Date(),
//     endDate: new Date(),
//   },
//   {
//     id: 3,
//     title: "Final exams",
//     members: [1, 2],
//     roomId: 2,
//     startDate: new Date(2017, 4, 29, 9, 30),
//     endDate: new Date(2017, 4, 29, 12, 0),
//   },
// ];

// export const owners = [
//   {
//     text: "Andrew Glover",
//     id: 1,
//     color: "#7159c1",
//   },
//   {
//     text: "Arnie Schwartz",
//     id: 2,
//     color: "#ab59c1",
//   },
// ];

const resourceMap = [
  { resourceId: 1, resourceTitle: "Board room" },
  { resourceId: 2, resourceTitle: "Training room" },
  { resourceId: 3, resourceTitle: "Meeting room 1" },
  { resourceId: 4, resourceTitle: "Meeting room 2" },
];

const TodaysAppointment = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { appointments } = useSelector((state) => state.allappointments);
  const doctors = appointments
    ?.filter((appointment, index, self) => {
      return (
        appointment.doctorsAttending[0].doctorId &&
        self.findIndex(
          (self) =>
            self.doctorsAttending[0].doctorId ===
            appointment.doctorsAttending[0].doctorId
        ) === index
      );
    })
    .map((appointment) => appointment.doctorsAttending[0]);

  const doctorsForAppointment = doctors.map(({ doctorId, doctorName }) => ({
    resourceId: doctorId,
    resourceTitle: doctorName,
  }));

  const eventsForCalendar =
    appointments?.length > 0
      ? appointments
          .filter((item) => item.doctorsAttending[0].doctorId)
          .map((item) => ({
            id: item._id,
            title: item.appointmentName,
            start: new Date(item.anticipatedTime),
            end: addHours(new Date(item.anticipatedTime), 2),
            resourceId: item.doctorsAttending[0].doctorId,
          }))
      : [];

  console.log({ eventsForCalendar });

  console.log("daoijsaofkj", doctors);
  console.log("safjhajkfh", appointments);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getAllAppointments());
  }, [dispatch]);

  // const allappointments = ()

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
            <div className="height600">
              <Calendar
                // defaultDate={defaultDate}
                defaultView={Views.DAY}
                events={eventsForCalendar}
                localizer={momentLocalizer(moment)}
                resourceIdAccessor="resourceId"
                resources={doctorsForAppointment}
                resourceTitleAccessor="resourceTitle"
                step={60}
                views={["day"]}
              />
            </div>
          ) : (
            <div>loading...</div>
          )}
          {/* {appointments.length ? (
            <AppointmentCalendar appointments={appointments} />
          ) : (
            <div>loading...</div>
          )} */}
        </Box>
      </Layout>
    </div>
  );
};

export default TodaysAppointment;
