import { Divider } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Result = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Result </h2>
      <Divider />
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="d-flex justify-content-evenly">
          <div>
            <input type="radio" {...register("all")} />
            <label>All</label>
          </div>
          <div>
            <input type="radio" {...register("outpatient")} />
            <label>Out-Patient</label>
          </div>
          <div>
            <input type="radio" {...register("inpatient")} />
            <label>In Patient </label>
          </div>
          <div>
            <input type="radio" {...register("emergency")} />
            <label>Emergency</label>
          </div>
        </div>

        <div>
          <label>Stat</label>
        </div>
        <div className="d-flex justify-content-evenly">
          <div>
            <label>Search by</label>

            <select
              {...register("search")}
              className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
            >
              <option>Select</option>
              <option>Lab No</option>
            </select>

            <input
              type="text"
              {...register("searchText")}
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
          <div>
            <label>Sample Status </label>
            <select
              {...register("sampleStatus")}
              className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
            >
              <option>Collected</option>
              <option>Not Collected</option>
            </select>
          </div>
          <div>
            <label>Order Type</label>
            <select
              {...register("orderType")}
              className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
            >
              <option>Select</option>
              <option>All</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Result;
