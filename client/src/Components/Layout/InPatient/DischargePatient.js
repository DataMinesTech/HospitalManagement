import { Box, Paper } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllDoctors } from "../../../actions/doctorActions";
import { getAllPatients, updatePatient } from "../../../actions/patientActions";
import Button from "../../Components/Button";
import { PageHeader } from "../Header/Header";
import Layout from "../LayoutComponent/Layout";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { FiCalendar } from "react-icons/fi";

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

const DischargePatient = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const [value, setValue] = React.useState(null);
  const { error, patient, loading } = useSelector((state) => state.patients);
  const { allDoctors } = useSelector((state) => state.allDoctors);
  console.log("doctors list in admisssion", allDoctors);
  console.log("patient in admisssion", patient);
  useEffect(() => {
    if (!error) {
      dispatch(getAllPatients());
      dispatch(getAllDoctors());
    }
  }, [dispatch]);
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
  return (
    <div className="relative">
      <PageHeader
        title={"Patient Discharge"}
        searchHidden
        back
        onClick={history.goBack}
      />
      <Layout>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "4px",
            padding: "16px 16px",
          }}
        >
          <Formik
            initialValues={{
              patientName: "",
              patientUHID: "",
              patientBloodGroup: "",
              patientAppointment: new Date().toLocaleDateString(),
              vitals: "",
              patientInRoom: "",
              doctorName: "",
              doctorId: "",
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log({ values });
              dispatch(
                updatePatient({
                  ...values,
                  patientAdmissionStatus: "Discharged",
                })
              );
              setOpen(true);
              resetForm();
            }}
          >
            {({ isSubmitting, setFieldValue, values }) => (
              <Form className="flex flex-col space-y-5">
                <div className="text-lg font-bold pb-2 border-b border-gray-200">
                  Patient Detail
                </div>
                <div className="grid grid-cols-3 gap-10 pb-5">
                  <div className="w-full h-full">
                    <div className="form-label">Select Patient</div>
                    <div className="flex relative w-full">
                      <Select
                        className="w-full"
                        styles={selectStyle}
                        options={patient.length && getPatientOptions()}
                        name="patientName"
                        placeholder="Select Patient"
                        isLoading={false}
                        loadingMessage={() => "Fetching Patient"}
                        noOptionsMessage={() => "This patient is not Exist"}
                        onChange={(selectedOption) => {
                          setFieldValue("patientUHID", selectedOption.id);
                          setFieldValue("patientName", selectedOption.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="form-label">Patient UHID</div>
                    <div className="flex relative">
                      <Field
                        className="form-field bg-gray-200 border-transparent focus:border-transparent"
                        placeholder={"Patient UHID"}
                        value={values.patientUHID}
                        readOnly
                        name="patientUHID"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="form-label">Patient Blood Group</div>
                    <div className="flex relative">
                      <Field
                        className="form-field"
                        placeholder="Enter Blood Group"
                        name="patientBloodGroup"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-lg font-bold pb-2 border-b border-gray-300">
                  Discharge Details
                </div>
                <div className="grid grid-cols-3 gap-10 pb-5">
                  <div className="w-full h-full">
                    <div className="form-label">Discharge On</div>
                    <div className="flex relative w-full">
                      <Paper
                        sx={{
                          borderRadius: "8px",
                          display: "flex",

                          alignItems: "center",
                        }}
                        className="border-2 border-gray-300 w-full"
                        elevation={0}
                      >
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            OpenPickerButtonProps={{
                              style: {
                                color: "#FF7B54",
                                background: "#FFF1EC",
                                borderRadius: "8px",
                                marginRight: "4px",
                                position: "relative",
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
                              setFieldValue("patientAppointment", newValue);
                            }}
                            inputFormat="dd/MM/yyyy"
                            // onChange={(newValue) => {
                            //   console.log("newValue", newValue);
                            //   props.setFieldValue(
                            //     patientDOB.name,
                            //     newValue
                            //   );
                            // }}
                            renderInput={({
                              inputRef,
                              inputProps,
                              InputProps,
                            }) => (
                              <div className="flex items-center relative">
                                {InputProps?.endAdornment}
                                <Field
                                  className="py-3 px-3 w-full outline-none"
                                  name="patientAppointment"
                                  ref={inputRef}
                                  {...inputProps}
                                />
                              </div>
                            )}
                          />
                        </LocalizationProvider>
                      </Paper>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-label">Admission For</div>
                    <div className="flex relative">
                      <Field
                        className="form-field"
                        placeholder="Ex: Checkup"
                        name="vitals"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-label">Patient Room No.</div>
                    <div className="flex relative">
                      <Field
                        className="form-field"
                        placeholder="Enter Room No."
                        name="patientInRoom"
                      />
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="form-label">Admitting Doctor</div>
                    <div className="flex relative w-full">
                      <Select
                        styles={selectStyle}
                        options={patient.length && getDoctorOptions()}
                        name="doctorName"
                        placeholder="Select Doctor"
                        className="w-full"
                        isLoading={false}
                        loadingMessage={() => "Fetching Doctor"}
                        noOptionsMessage={() => "This doctor is not Exist"}
                        onChange={(selectedOption) => {
                          setFieldValue("doctorName", selectedOption.value);
                          setFieldValue("doctorId", selectedOption.id);
                        }}
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
              </Form>
            )}
          </Formik>
        </Box>
      </Layout>
    </div>
  );
};

export default DischargePatient;
