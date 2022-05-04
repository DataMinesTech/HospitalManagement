import { Autocomplete, Box, Paper, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiCalendar } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment } from "../../actions/appointmentActions";
// import { set } from "../../../../backend/app";
import { getAllPatients } from "../../actions/patientActions";
import Button from "../Components/Button";
import { PageHeader } from "../Layout/Header/Header";
import Layout from "../Layout/LayoutComponent/Layout";

const DoctorAppointment = () => {
  const dispatch = useDispatch();

  const { error, patient, loading } = useSelector((state) => state.patients);

  const [patientName, setPatientName] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [patientValue, setPatientValue] = useState("");

  useEffect(() => {
    if (!error) {
      dispatch(getAllPatients());
    }
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    const obj = {
      appointmentName: data.appointmentName,
      appointmentWith: [
        {
          patientId: patientId,
          patientName: patientValue,
          appointmentOn: data.appointmentOn,
        },
      ],
      anticipatedTime: data.anticipatedTime,
      doctorsAttending: [{ doctorName: data.doctorName }],
    };

    dispatch(createAppointment(obj));
  };

  const searchPatient = (e) => {
    const searchWord = e.target.value;
    const newFilter = patient.filter((val) => {
      return val.patientName.toLowerCase().includes(searchWord.toLowerCase());
    });
    setPatientName(newFilter);
    // setPatientValue(newFilter);
    console.log("paient vaue", patientValue);
    // setPatienValue();
    // setSendPatient(newFilter);
  };

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="position-relative">
          <PageHeader title={"Doctor Appointment"} />
          <Layout>
            <Box mb={4} sx={{ width: "80%", mx: "auto" }}>
              <div className="d-grid grid-cols-3 py-5 gap-4">
                <div>
                  <div className="form-label">Appointment Name</div>
                  <div className="d-flex position-relative">
                    <input
                      className="form-field"
                      placeholder="Enter Name"
                      type="text"
                      {...register("appointmentName")}
                    />
                  </div>
                </div>
                <div>
                  <div className="form-label">Patient Name</div>
                  <div className="d-flex position-relative">
                    <input
                      className="form-field"
                      placeholder="Enter patient Name"
                      type="text"
                      {...register("patientName")}
                    />
                  </div>
                </div>
                <div>
                  <div className="form-label">Appointment On</div>
                  <Paper
                    component="form"
                    className="form-field"
                    sx={{ borderRadius: "8px", padding: "20px 5px" }}
                    elevation={0}
                  >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        OpenPickerButtonProps={{
                          style: {
                            color: "#4988FC",
                            background: "#E1EBFF",
                            borderRadius: "8px",
                            width: "50px",
                            height: "50px",
                          },
                        }}
                        components={{
                          OpenPickerIcon: FiCalendar,
                        }}
                        className="form-field"
                        openTo="date"
                        views={["day", "month", "year"]}
                        // value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={({ inputRef, inputProps, InputProps }) => (
                          <div className="d-flex align-items-center">
                            {InputProps?.endAdornment}
                            <input
                              {...register("appointmentOn")}
                              ref={inputRef}
                              placeholder="DD | MM | YYYY"
                              className="date-form-field"
                            />
                          </div>
                        )}
                      />
                    </LocalizationProvider>
                  </Paper>
                </div>
                <div>
                  <div className="form-label">Anticipated Time</div>
                  <div className="d-flex position-relative">
                    <input
                      className="form-field"
                      placeholder="Enter Anticipated Time"
                      type="text"
                      {...register("anticipatedTime")}
                    />
                  </div>
                </div>
                <div>
                  <div className="form-label">Doctor Name</div>
                  <div className="d-flex position-relative">
                    <input
                      className="form-field"
                      placeholder="Enter Doctor Name"
                      type="text"
                      {...register("doctorName")}
                    />
                  </div>
                </div>
              </div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                  mr: 3,
                  pt: 2,
                  mx: "auto",
                }}
              >
                <Button
                  // disabled={isSubmitting}
                  type="submit"
                  className="rounded-button primary"
                  // onClick={handleNext}
                  text={"Submit"}
                />
              </Box>
            </Box>
          </Layout>
          <form onSubmit={handleSubmit(submitHandler)}>
            <br />
            <label>appointmentName:</label>
            <input type="text" {...register("appointmentName")} />
            <br />
            <label>appointmentWith: </label>
            <br />
            <label>patientName</label>
            <input type="hidden" {...register("patientId")} />
            <input
              type="search"
              {...register("patientName")}
              onChange={searchPatient}
              defaultValue={patientValue}
              // onPatientValue={(e) => setPatientValue(e.target.value)}
            />
            {patientName.length !== 0 ? (
              patientName.map((data, key) => {
                return (
                  <button
                    type="button"
                    key={data._id}
                    onClick={() => {
                      setPatientId(data._id);
                      setPatientValue(data.patientName);
                    }}
                  >
                    {data.patientName}
                  </button>
                );
              })
            ) : (
              <></>
            )}

            <label>appointment On</label>
            <input type="datetime-local" {...register("appointmentOn")} />
            <label>anticipatedTime</label>
            <input type="text" {...register("anticipatedTime")} />
            <label>doctorsAttending</label>
            <label>Doctor Name</label>
            <input type="text" {...register("doctorName")} />
            <input type="hidden" {...register("doctorId")} />
            <button type="submit" class="btn btn-primary btn-block mb-4  ">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default DoctorAppointment;
