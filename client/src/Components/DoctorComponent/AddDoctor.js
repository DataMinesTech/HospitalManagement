import { Box } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createNewUser } from "../../actions/userActions";
import Button from "../Components/Button";
import { PageHeader } from "../Layout/Header/Header";
import Layout from "../Layout/LayoutComponent/Layout";

const AddDoctor = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = (data) => {
    const address = `${data.address1}###${data.address2}###${data.city}###${data.state}###${data.country}###${data.zipCode}`;
    const obj = {
      userName: data.doctorName,
      userRole: "doctor",
      userAvailability: "Available",
      email: data.email,
      phoneNo: data.phoneNo,
      password: "11111111",
      address,
      biography: data.biography,
    };
    dispatch(createNewUser(obj));
  };
  return (
    <div className="relative">
      <PageHeader
        title={"Add Doctor"}
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
              doctorName: "",
              email: "",
              phoneNo: "",
              address1: "",
              address2: "",
              city: "",
              state: "",
              country: "",
              zipCode: "",
              biography: "",
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log({ values });
              submitHandler(values);
              resetForm();
            }}
          >
            {() => (
              <Form className="flex flex-col space-y-5">
                <div className="text-lg font-bold pb-2 border-b border-gray-200">
                  Add Doctor
                </div>
                <div className="grid grid-cols-3 gap-10 pb-5">
                  <div className="w-full">
                    <div className="form-label">Doctor Name</div>
                    <div className="flex relative">
                      <Field
                        className="form-field"
                        placeholder="Enter Doctor Name"
                        name="doctorName"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-label">Email Address</div>
                    <div className="flex relative">
                      <Field
                        className="form-field"
                        placeholder="Enter Email Address"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-label">Phone Number</div>
                    <div className="flex relative">
                      <Field
                        className="form-field"
                        placeholder="Enter Phone Number"
                        name="phoneNo"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-lg font-bold pb-2 border-b border-gray-300">
                  Doctor Address
                </div>
                <div className="grid grid-cols-3 gap-x-10 gap-y-5 pb-5">
                  <div className="w-full">
                    <div className="form-label">Doctor Address 1</div>
                    <div className="flex relative">
                      <Field
                        className="form-field"
                        placeholder="Enter Doctor Name"
                        name="address1"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-label">Doctor Address 2</div>
                    <div className="flex relative">
                      <Field
                        className="form-field"
                        placeholder="Enter Email Address"
                        name="address2"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-label">Doctor City</div>
                    <div className="flex relative">
                      <Field
                        className="form-field"
                        placeholder="Enter City"
                        name="city"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-label">Doctor State</div>
                    <div className="flex relative">
                      <Field
                        className="form-field"
                        placeholder="Enter State"
                        name="state"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-label">Doctor Zipcode</div>
                    <div className="flex relative">
                      <Field
                        className="form-field"
                        placeholder="Enter Zipcode"
                        name="zipCode"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-label">Doctor Country</div>
                    <div className="flex relative">
                      <Field
                        className="form-field"
                        placeholder="Enter Country"
                        name="country"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-lg font-bold pb-2 border-b border-gray-300">
                  Doctor Biography
                </div>
                <div className="grid grid-cols-1 gap-x-10 gap-y-5 pb-5">
                  <div className="w-full">
                    <div className="form-label">Doctor Biography</div>
                    <div className="flex relative">
                      <Field
                        as="textarea"
                        className="form-field h-40 text-start items-start"
                        placeholder="Enter biography"
                        name="biography"
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

export default AddDoctor;
