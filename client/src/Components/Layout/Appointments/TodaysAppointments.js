import React, { useEffect } from "react";
import { PageHeader } from "../Header/Header";
import Layout from "../LayoutComponent/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../../../actions/appointmentActions";
import Button from "../../Components/Button";
import AddPatientModal from "../../Components/FilterModal";
import { Box, TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import { Calendar, momentLocalizer, Views, Navigate } from "react-big-calendar";
import Toolbar from "react-big-calendar/lib/Toolbar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const CustomToolbar = ({
  date,
  view,
  views,
  label,
  onView,
  onNavigate,
  localizer,
}) => {
  // const onPickerChange = (newDate) => onNavigate(Navigate.DATE, newDate);
  return <div>TodaysAppointments</div>;
  // this only works if `newDate` is a true JS Date

  // ... the rest of your Toolbar display
};

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
  const [date, newDate] = React.useState(new Date());

  const handleNavigation = (date, view, action) => {
    console.log({ date, view, action });
    newDate(date);
    //it returns current date, view options[month,day,week,agenda] and action like prev, next or today
  };
  const handleChange = () => {
    console.log("this block code executed");
  };
  console.log({ datee: date });
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
                // toolbar={CustomToolbar}
                components={{
                  event: EventComponent({ eventsForCalendar, handleChange }),
                  toolbar: CalenderToolbar({
                    eventsForCalendar,
                    handleChange,
                    newDate,
                    date,
                  }),
                }}
                // defaultDate={defaultDate}
                defaultView={Views.DAY}
                events={eventsForCalendar}
                localizer={momentLocalizer(moment)}
                resourceIdAccessor="resourceId"
                resources={doctorsForAppointment}
                resourceTitleAccessor="resourceTitle"
                onNavigate={handleNavigation}
                step={60}
                views={["day"]}
                date={date}
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

const EventComponent =
  ({ events, change }) =>
  (props) => {
    return (
      <div className="customEventTile" title="This is EventTile">
        <h5>{props.event.title}</h5>
        <button onClick={props.change}>Do Something</button>
      </div>
    );
  };

const CalenderToolbar = ({ handleChange, newDate, date }) => {
  return class BaseToolBar extends Toolbar {
    constructor(props) {
      super(props);
    }
    handleDayChange = (event, mconte) => {
      mconte(event.target.value);
    };
    handleNamvigate = (detail, elem) => {
      detail.navigate(elem);
    };

    render() {
      console.log({ props: this.props });
      return (
        <div className="posr">
          <div className="rbc-btn-group">
            <button
              type="button"
              className="defaultbtn"
              onClick={() => this.handleNamvigate(this, "TODAY")}
            >
              Today
            </button>
            <button
              type="button"
              className="nextp-btn"
              onClick={() => this.handleNamvigate(this, "PREV")}
            >
              Prev
            </button>
            <button
              type="button"
              className="nextp-btn"
              onClick={() => this.handleNamvigate(this, "NEXT")}
            >
              Next
            </button>
          </div>
          <div className="rbc-toolbar-label">{this.props.label}</div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Basic example"
              value={date}
              onChange={(newValue, event) => {
                console.log({ n: newValue.$d, event });
                newDate(newValue.$d);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <div className="rbc-btn-group">
            <select
              className="form-control"
              onChange={(e) => this.handleDayChange(e, this.view)}
              defaultValue={"week"}
            >
              <option className="optionbar" value="day">
                Day
              </option>
              <option className="optionbar" value="week">
                Week
              </option>
              <option className="optionbar" value="month">
                Month
              </option>
              <option className="optionbar" value="agenda">
                Agenda
              </option>
            </select>
          </div>
        </div>
      );
    }
  };
};
