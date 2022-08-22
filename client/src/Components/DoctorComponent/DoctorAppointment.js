import { Autocomplete, Box, Paper, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiCalendar } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createAppointment } from "../../actions/appointmentActions";
// import { set } from "../../../../backend/app";
import { getAllPatients } from "../../actions/patientActions";
import Button from "../Components/Button";
import { PageHeader } from "../Layout/Header/Header";
import Layout from "../Layout/LayoutComponent/Layout";
import Select from "react-select";
import { getAllDoctors } from "../../actions/doctorActions";

const selectStyle = {
  control: (base, state) => ({
    ...base,
    color: "##9CA3AF",
    width: "100%",
    height: "100%",
    outline: "none",
    transition: "all 0.3s ease",
    background: "ffffff",
    borderRadius: "0.25rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "1rem",
    overflow: "auto",
    border: "2px solid #E5E7EB",

    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#00AA88" : "#E5E7EB",
    },
  }),
};

const DoctorAppointment = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = React.useState(null);
  const { error, patient, loading } = useSelector((state) => state.patients);

  const { allDoctors } = useSelector((state) => state.allDoctors);

  console.log("doctors list in appointment", allDoctors);

  console.log("patient in appointment", patient);
  const [patientName, setPatientName] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [patientValue, setPatientValue] = useState("");

  useEffect(() => {
    if (!error) {
      dispatch(getAllPatients());
      dispatch(getAllDoctors());
    }
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    // setValue,
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

  const getPatientOptions = () => {
    return patient
      ?.map((item) => {
        return {
          value: item.patientName,
          label: item.patientName,
          id: item._id,
        };
      })
      .sort((a, b) => {
        if (a.value < b.value) {
          return -1;
        }
        if (a.value > b.value) {
          return 1;
        }
        return 0;
      });
  };

  const getDoctorOptions = () => {
    return allDoctors
      ?.map((doctor) => {
        return {
          value: doctor.userName,
          label: doctor.userName,
          id: doctor._id,
        };
      })
      .sort((a, b) => {
        if (a.value < b.value) {
          return -1;
        }
        if (a.value > b.value) {
          return 1;
        }
        return 0;
      });
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
        <div className="relative">
          <PageHeader title={"Add Appointment"} back onClick={history.goBack} />
          <Layout>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                padding: "16px 16px",
              }}
            >
              <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="grid grid-cols-3 gap-10">
                      <div className="w-full h-full">
                        <div className="form-label">Select Doctor</div>
                        <div className="flex relative"></div>
                        <Field
                          className="form-field"
                          placeholder="Enter Name"
                          type="text"
                          {...register("appointmentName")}
                        />
                      </div>
                      <div className="w-full">
                        <div className="form-label">Appointment On</div>
                        <Paper
                          component="form"
                          className="form-field"
                          elevation={0}
                        >
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                              OpenPickerButtonProps={{
                                style: {
                                  color: "#4988FC",
                                  background: "#E1EBFF",
                                  borderRadius: "8px",
                                },
                              }}
                              components={{
                                OpenPickerIcon: FiCalendar,
                              }}
                              className="form-field"
                              openTo="date"
                              views={["year", "month", "day"]}
                              value={value}
                              inputFormat="dd/MM/yyyy"
                              // onChange={(newValue) => {
                              //   console.log("newValue", newValue);
                              //   setFieldValue(patientDOB.name, newValue);
                              // }}
                              renderInput={({
                                inputRef,
                                inputProps,
                                InputProps,
                              }) => (
                                <div className="flex items-center">
                                  {InputProps?.endAdornment}
                                  <Field
                                    name="appointmentOn"
                                    ref={inputRef}
                                    {...inputProps}
                                    className="date-field"
                                  />
                                </div>
                              )}
                            />
                          </LocalizationProvider>
                        </Paper>
                      </div>
                    </div>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <div className="form-label">Appointment Name</div>
                  <div className="flex relative">
                    <input
                      className="form-field"
                      placeholder="Enter Name"
                      type="text"
                      {...register("appointmentName")}
                    />
                  </div>
                </div>
                <div>
                  <div className="form-label">Appointsadment On</div>
                  <Paper component="form" className="form-field" elevation={0}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        OpenPickerButtonProps={{
                          style: {
                            color: "#4988FC",
                            background: "#E1EBFF",
                            borderRadius: "8px",
                          },
                        }}
                        components={{
                          OpenPickerIcon: FiCalendar,
                        }}
                        openTo="date"
                        views={["day", "month", "year"]}
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={({ inputRef, inputProps, InputProps }) => (
                          <div className="flex items-center">
                            {InputProps?.endAdornment}
                            <input
                              {...register("appointmentOn")}
                              ref={inputRef}
                              placeholder="DD | MM | YYYY"
                              className="date-field"
                            />
                          </div>
                        )}
                      />
                    </LocalizationProvider>
                  </Paper>
                </div>
              </div>

              <div className="grid grid-cols-3 py-5 gap-4">
                <div>
                  <div className="form-label">Patient Name</div>
                  <div className="flex relative">
                    <Select
                      styles={selectStyle}
                      options={patient.length && getPatientOptions()}
                      name="patientName"
                      placeholder="Select Patient"
                      isLoading={false}
                      loadingMessage={() => "Fetching Patient"}
                      noOptionsMessage={() => "This patient is not Exist"}
                      value={patient?.patientName}
                      // onChange={(selectedOption) => {
                      //   handleCountryChange(selectedOption, values);
                      //   values.Country = selectedOption.value;
                      //   values.CountryCode = selectedOption.code;
                      //   // handleChange = (value) => {
                      //   //   setFieldValue("CountryCode", values.CountryCode);
                      //   // };
                      // }}
                    />
                    {/* <input
                      className="form-field"
                      placeholder="Enter patient Name"
                      type="text"
                      {...register("patientName")}
                    /> */}
                  </div>
                </div>
                <div>
                  <div className="form-label">Doctor Name</div>
                  <div className="flex relative">
                    <Select
                      styles={selectStyle}
                      options={patient.length && getDoctorOptions()}
                      name="doctorName"
                      placeholder="Select Doctor"
                      isLoading={false}
                      loadingMessage={() => "Fetching Doctor"}
                      noOptionsMessage={() => "This doctor is not Exist"}
                      value={patient?.patientName}
                      // onChange={(selectedOption) => {
                      //   handleCountryChange(selectedOption, values);
                      //   values.Country = selectedOption.value;
                      //   values.CountryCode = selectedOption.code;
                      //   // handleChange = (value) => {
                      //   //   setFieldValue("CountryCode", values.CountryCode);
                      //   // };
                      // }}
                    />
                    {/* <input
                      className="form-field"
                      placeholder="Enter patient Name"
                      type="text"
                      {...register("patientName")}
                    /> */}
                  </div>
                </div>

                <div>
                  <div className="form-label">Anticipated Time</div>
                  <div className="flex relative">
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
                  <div className="flex relative">
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
                  className="primary-button"
                  // onClick={handleNext}
                  text={"Submit"}
                />
              </Box>
            </Box>
          </Layout>
          {/* <form onSubmit={handleSubmit(submitHandler)}>
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
          </form> */}
        </div>
      )}
    </>
  );
};

export default DoctorAppointment;
