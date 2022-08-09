import React, { useEffect } from "react";
import { PageHeader } from "../Header/Header";
import AppointmentCalendar from "./Components/AppointmentCalendar";
import Layout from "../LayoutComponent/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../../../actions/appointmentActions";

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
  const dispatch = useDispatch();
  const { appointments } = useSelector((state) => state.allappointments);

  useEffect(() => {
    dispatch(getAllAppointments());
  }, [dispatch]);
  return (
    <div className="relative">
      <PageHeader title={"Today's Appoinments"} />
      <Layout>
        {appointments.length ? (
          <AppointmentCalendar appointments={appointments} />
        ) : (
          <div>loading...</div>
        )}
      </Layout>
    </div>
  );
};

export default TodaysAppointment;
