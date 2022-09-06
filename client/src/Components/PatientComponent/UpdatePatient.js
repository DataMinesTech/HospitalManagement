import React from "react";
import { PageHeader } from "../Layout/Header/Header";
import { useHistory } from "react-router-dom";
import { PatientForm } from "./PatientForm";

const UpdatePatient = ({ location }) => {
  const history = useHistory();
  const patientData = location.state.data;
  console.log({ patientData });

  return (
    <div className="relative">
      <PageHeader
        title={"Update Patient"}
        back
        searchHidden
        onClick={history.goBack}
      />
      <PatientForm data={patientData} />
    </div>
  );
};
export default UpdatePatient;
