import { Box, Paper, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Field } from "formik";
import React from "react";
import { FiCalendar } from "react-icons/fi";

export default function PatientGuardianDetailForm(props) {
  const [value, setValue] = React.useState(null);
  const {
    formField: {
      patientGuardianName,
      patientGuardianMobile,
      patientGuardianDOB,
      patientGuardianAddress1,
      patientGuardianAddress2,
      patientGuardianCity,
      patientGuardianState,
      patientGuardianZipcode,
    },
  } = props;
  return (
    <Box mb={4} sx={{ width: "80%", mx: "auto" }}>
      <div className="d-grid grid-cols-3 py-5 gap-4">
        <div>
          <div className="form-label">Guardian Name</div>
          <div className="d-flex position-relative">
            <Field
              className="form-field"
              placeholder="Guardian Name"
              name={patientGuardianName.name}
            />
          </div>
        </div>
        <div>
          <div className="form-label">Guardian Mobile No.</div>
          <div className="d-flex position-relative">
            <Field
              className="form-field"
              placeholder="Guardian Mobile No."
              name={patientGuardianMobile.name}
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
                      name={patientGuardianDOB.name}
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
          <div className="form-label">Guardian Address1</div>
          <div className="d-flex position-relative">
            <Field
              className="form-field"
              placeholder="Guardian Address1"
              name={patientGuardianAddress1.name}
            />
          </div>
        </div>
        <div>
          <div className="form-label">Guardian Address2</div>
          <div className="d-flex position-relative">
            <Field
              className="form-field"
              placeholder="Guardian Address2"
              name={patientGuardianAddress2.name}
            />
          </div>
        </div>
        <div>
          <div className="form-label">City</div>
          <div className="d-flex position-relative">
            <Field
              className="form-field"
              placeholder="Enter City"
              name={patientGuardianCity.name}
            />
          </div>
        </div>
        <div>
          <div className="form-label">State</div>
          <div className="d-flex position-relative">
            <Field
              className="form-field"
              placeholder="State"
              name={patientGuardianState.name}
            />
          </div>
        </div>
        <div>
          <div className="form-label">Zipcode</div>
          <div className="d-flex position-relative">
            <Field
              className="form-field"
              placeholder="Zipcode"
              name={patientGuardianZipcode.name}
            />
          </div>
        </div>
      </div>
    </Box>
  );
}
