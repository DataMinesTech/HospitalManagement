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
} from "@devexpress/dx-react-scheduler-material-ui";

const AppointmentCalendar = ({ appointments }) => {
  console.log("appointments", appointments);
  const doctors = appointments?.map((appointment) => {
    return appointment.doctorsAttending[0];
  });
  console.log("doctors", doctors);

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
        allowMultiple: false,
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
        {/* <EditRecurrenceMenu /> */}
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
