import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { set } from "../../../../backend/app";
import { getAllPatients } from "../../actions/patientActions";

const DoctorAppointment = () => {
  const dispatch = useDispatch();

  const { error, patient, loading } = useSelector((state) => state.patients);

  const [patientName, setPatientName] = useState([]);
  const [patientId, setPatientId] = useState("");

  console.log("patients", patient);
  // console.log("patients", error);

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
    console.log(data, "data appoitment");

    console.log("patientId", patientId);
  };

  const confirmAppointment = (e) => {
    console.log("eee", e.target.value);
  };

  const searchPatient = (e) => {
    const searchWord = e.target.value;
    const newFilter = patient.filter((val) => {
      return val.patientName.toLowerCase().includes(searchWord.toLowerCase());
    });
    setPatientName(newFilter);
    // setSendPatient(newFilter);
  };

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <>
          <div>
            <h1>Doctor Appointment</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
              <br />
              <label>appointmentName:</label>
              <input type="text" {...register("appointmentName")} />
              <br />
              <label>appointmentWith: </label>
              <br />
              <label>patientName</label>
              <input type="text" {...register("patientId")} />
              <input
                type="text"
                {...register("patientName")}
                value={patientName.patientName}
                onChange={searchPatient}
              />

              {/* {patient && patient.length > 0 ? (
                patient.filter((val) => {
                  console.log(val, "val");

                  if (patientName === "") {
                    return val;
                  } else if (
                    val.patientName
                      .toLowerCase()
                      .includes(patientName.toLowerCase())
                  ) {
                    return val;
                  }
                })
              ) : (
                <></>
  )} */}
              {patientName.length !== 0 ? (
                patientName.map((data, key) => {
                  return (
                    <button
                      key={data._id}
                      onClick={() => setPatientId(data._id)}
                    >
                      {data.patientName}
                    </button>
                  );
                })
              ) : (
                <></>
              )}

              {/* : (
                 .map((val, key) => {
                  return (
                    <div key={val._id}>
                      <h3>{val.patientName}</h3>
                    </div>
                  );
                })
                <></>
              )} */}

              <label>appointment On</label>
              <input type="text" {...register("appointment On")} />
              <label>anticipatedTime</label>
              <input type="datetime-local" {...register("anticipated Time")} />
              <label>doctorsAttending</label>
              <label>Doctor Name</label>
              <input type="text" {...register("doctorName")} />
              <input type="text" {...register("doctorId")} />
              <button type="submit" class="btn btn-primary btn-block mb-4  ">
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default DoctorAppointment;
