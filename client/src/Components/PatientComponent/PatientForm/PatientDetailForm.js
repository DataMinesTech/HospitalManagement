import { Box } from "@mui/system";
import { Field } from "formik";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import { FiCalendar } from "react-icons/fi";
import { Paper } from "@mui/material";

export default function PatientDetailForm(props) {
  const [value, setValue] = React.useState(null);
  const {
    formField: {
      patientName,
      patientDOB,
      patientGender,
      patientMobile,
      patientEmail,
      patientDiagnosis,
      // patientAddress1,
      // patientAddress2,
      // patientCity,
      // patientState,
      // patientZipcode,
      // patientCountry,
      // patientGuardianName,
      // patientGuardianMobile,
      // patientGuardianDOB,
      // patientGuardianAddress1,
      // patientGuardianAddress2,
      // patientGuardianCity,
      // patientGuardianState,
      // patientGuardianZipcode,
    },
  } = props;
  return (
    <Box mb={4} sx={{ width: "80%", mx: "auto" }}>
      <div className="d-grid grid-cols-3 py-5 gap-4">
        <div>
          <div className="form-label">Patient Name</div>
          <div className="d-flex position-relative">
            <Field
              className="form-field"
              placeholder="Enter Name"
              name={patientName.name}
            />
          </div>
        </div>
        <div>
          <div className="form-label">Mobile Number</div>
          <div className="d-flex position-relative">
            <Field
              className="form-field"
              placeholder="Mobile Number"
              name={patientMobile.name}
            />
          </div>
        </div>
        <div>
          <div className="form-label">Date Of Birth</div>
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
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <div className="d-flex align-items-center">
                    {InputProps?.endAdornment}
                    <Field
                      name={patientDOB.name}
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
          <div className="form-label">Patient Gender</div>
          <div className="d-flex position-relative">
            <Field
              className="form-field"
              placeholder="Select Gender"
              name={patientGender.name}
            />
          </div>
        </div>
        <div>
          <div className="form-label">Patient Email</div>
          <div className="d-flex position-relative">
            <Field
              className="form-field"
              placeholder="Enter Email"
              name={patientEmail.name}
            />
          </div>
        </div>
        <div>
          <div className="form-label">Diagnosis</div>
          <div className="d-flex position-relative">
            <Field
              className="form-field"
              placeholder="Enter Diagnosis"
              name={patientDiagnosis.name}
            />
          </div>
        </div>
      </div>
    </Box>
  );
}
