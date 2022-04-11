import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment } from "../../actions/appointmentActions";
// import { set } from "../../../../backend/app";
import { getAllPatients } from "../../actions/patientActions";

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
        </>
      )}
    </>
  );
};

export default DoctorAppointment;
