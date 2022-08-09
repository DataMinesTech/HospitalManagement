import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  ViewState,
  GroupingState,
  IntegratedGrouping,
  IntegratedEditing,
  EditingState,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Resources,
  Appointments,
  AppointmentTooltip,
  GroupingPanel,
  DayView,
  AppointmentForm,
  Toolbar,
  DateNavigator,
  EditRecurrenceMenu,
} from "@devexpress/dx-react-scheduler-material-ui";
import { teal, indigo } from "@mui/material/colors";

const appointments = [
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

const owners = [
  {
    text: "Andrew Glover",
    id: 1,
    color: indigo,
  },
  {
    text: "Arnie Schwartz",
    id: 2,
    color: teal,
  },
];

const AppointmentCalendar = ({ appointments }) => {
  console.log("appointments", appointments);
  const doctors = appointments?.map((appointment) => {
    return appointment.doctorsAttending[0];
  });
  console.log("doctors", doctors);
  console.log(owners);
  const [state, setState] = useState({
    data: appointments?.map((appointment) => {
      const startDate = new Date(appointment.appointmentWith[0].appointmentOn);
      console.log(startDate);
      return {
        id: appointment._id,
        title: appointment.appointmentName,
        doctorName: [appointment.doctorsAttending[0].doctorId],
        // startDate,
        // endDate: startDate.setHours(startDate.getHours() + 2),
        startDate: new Date(),
        endDate: new Date().setHours(new Date().getHours() + 2),
      };
    }),
    resources: [
      {
        fieldName: "doctorName",
        title: "Doctors",
        instances: doctors
          .filter((doctor) => !!doctor.doctorId)
          .map((doctor) => {
            return {
              id: doctor.doctorId,
              text: doctor.doctorName,
            };
          }),
        allowMultiple: true,
      },
    ],
    grouping: [
      {
        resourceName: "doctorName",
      },
    ],
  });
  const { data, resources, grouping } = state;
  const commitChanges = ({ added, changed, deleted }) => {
    setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted);
      }
      return { data };
    });
  };
  return (
    <Paper>
      <Scheduler data={data}>
        <ViewState />
        <EditingState onCommitChanges={commitChanges} />
        <GroupingState grouping={grouping} />
        <DayView startDayHour={9} endDayHour={18} />
        <Appointments />
        <Resources data={resources} mainResourceName="doctorName" />
        <Toolbar />
        <DateNavigator />
        <EditRecurrenceMenu />
        <IntegratedGrouping />
        <IntegratedEditing />

        <AppointmentTooltip showOpenButton />
        <AppointmentForm />
        <GroupingPanel />
      </Scheduler>
    </Paper>
  );
};

export default AppointmentCalendar;
