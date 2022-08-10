import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PageHeader } from "../Layout/Header/Header";
import Layout from "../Layout/LayoutComponent/Layout";
import SearchBar from "../Components/SearchBar";
import { FiClock } from "react-icons/fi";
import Button from "../Components/Button";
import { getAllDoctors } from "../../actions/doctorActions";
import { useHistory } from "react-router-dom";

// const doctorsList = [
//   {
//     id: 1,
//     doctorName: "Dr. John Doe",
//     department: "Cardiology",
//     timing: "10:00 AM - 12:00 PM",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
//     skills: {
//       skill1: "Cardiology",
//       skill2: "Heart",
//       skill3: "Pulmonary",
//       skill4: "Diabetics",
//       skill5: "Neurology",
//       skill6: "Oncology",
//     },
//     contactInfo: {
//       phone: "1234567890",
//       email: "john@doe.com",
//       address: "123, Main St, New York, NY 10001",
//     },
//     availability: "Available",
//     avatar: "https://via.placeholder.com/150",
//   },
//   {
//     id: 2,
//     doctorName: "Dr. John Doe",
//     department: "Cardiology",
//     timing: "10:00 AM - 12:00 PM",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
//     skills: {
//       skill1: "Cardiology",
//       skill2: "Heart",
//       skill3: "Pulmonary",
//       skill4: "Diabetics",
//       skill5: "Neurology",
//       skill6: "Oncology",
//     },
//     contactInfo: {
//       phone: "1234567890",
//       email: "john@doe.com",
//       address: "123, Main St, New York, NY 10001",
//     },
//     availability: "Available",
//     avatar: "https://via.placeholder.com/150",
//   },
//   {
//     id: 3,
//     doctorName: "Dr. John Doe",
//     department: "Cardiology",
//     timing: "10:00 AM - 12:00 PM",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
//     skills: {
//       skill1: "Cardiology",
//       skill2: "Heart",
//       skill3: "Pulmonary",
//       skill4: "Diabetics",
//       skill5: "Neurology",
//       skill6: "Oncology",
//     },
//     contactInfo: {
//       phone: "1234567890",
//       email: "john@doe.com",
//       address: "123, Main St, New York, NY 10001",
//     },
//     availability: "Available",
//     avatar: "https://via.placeholder.com/150",
//   },
//   {
//     id: 4,
//     doctorName: "Dr. John Doe",
//     department: "Cardiology",
//     timing: "10:00 AM - 12:00 PM",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
//     skills: {
//       skill1: "Cardiology",
//       skill2: "Heart",
//       skill3: "Pulmonary",
//       skill4: "Diabetics",
//       skill5: "Neurology",
//       skill6: "Oncology",
//     },
//     contactInfo: {
//       phone: "1234567890",
//       email: "john@doe.com",
//       address: "123, Main St, New York, NY 10001",
//     },
//     availability: "Available",
//     avatar: "https://via.placeholder.com/150",
//   },
//   {
//     id: 5,
//     doctorName: "Dr. John Doe",
//     department: "Cardiology",
//     timing: "10:00 AM - 12:00 PM",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
//     skills: {
//       skill1: "Cardiology",
//       skill2: "Heart",
//       skill3: "Pulmonary",
//       skill4: "Diabetics",
//       skill5: "Neurology",
//       skill6: "Oncology",
//     },
//     contactInfo: {
//       phone: "1234567890",
//       email: "john@doe.com",
//       address: "123, Main St, New York, NY 10001",
//     },
//     availability: "Available",
//     avatar: "https://via.placeholder.com/150",
//   },
//   {
//     id: 6,
//     doctorName: "Dr. John Doe",
//     department: "Cardiology",
//     timing: "10:00 AM - 12:00 PM",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
//     skills: {
//       skill1: "Cardiology",
//       skill2: "Heart",
//       skill3: "Pulmonary",
//       skill4: "Diabetics",
//       skill5: "Neurology",
//       skill6: "Oncology",
//     },
//     contactInfo: {
//       phone: "1234567890",
//       email: "john@doe.com",
//       address: "123, Main St, New York, NY 10001",
//     },
//     availability: "Available",
//     avatar: "https://via.placeholder.com/150",
//   },
//   {
//     id: 7,
//     doctorName: "Dr. John Doe",
//     department: "Cardiology",
//     timing: "10:00 AM - 12:00 PM",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
//     skills: {
//       skill1: "Cardiology",
//       skill2: "Heart",
//       skill3: "Pulmonary",
//       skill4: "Diabetics",
//       skill5: "Neurology",
//       skill6: "Oncology",
//     },
//     contactInfo: {
//       phone: "1234567890",
//       email: "john@doe.com",
//       address: "123, Main St, New York, NY 10001",
//     },
//     availability: "Available",
//     avatar: "https://via.placeholder.com/150",
//   },
//   {
//     id: 8,
//     doctorName: "Dr. John Doe",
//     department: "Cardiology",
//     timing: "10:00 AM - 12:00 PM",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
//     skills: {
//       skill1: "Cardiology",
//       skill2: "Heart",
//       skill3: "Pulmonary",
//       skill4: "Diabetics",
//       skill5: "Neurology",
//       skill6: "Oncology",
//     },
//     contactInfo: {
//       phone: "1234567890",
//       email: "john@doe.com",
//       address: "123, Main St, New York, NY 10001",
//     },
//     availability: "Available",
//     avatar: "https://via.placeholder.com/150",
//   },
//   {
//     id: 9,
//     doctorName: "Dr. John Doe",
//     department: "Cardiology",
//     timing: "10:00 AM - 12:00 PM",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
//     skills: {
//       skill1: "Cardiology",
//       skill2: "Heart",
//       skill3: "Pulmonary",
//       skill4: "Diabetics",
//       skill5: "Neurology",
//       skill6: "Oncology",
//     },
//     contactInfo: {
//       phone: "1234567890",
//       email: "john@doe.com",
//       address: "123, Main St, New York, NY 10001",
//     },
//     availability: "Available",
//     avatar: "https://via.placeholder.com/150",
//   },
// ];

const AllDoctors = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { allDoctors } = useSelector((state) => state.allDoctors);

  console.log("doctors list", allDoctors);

  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  return (
    <div>
      <div className="relative">
        <PageHeader title={"Doctors List"} />
        <Layout>
          <Box
            style={{
              overflow: "auto",
              backgroundColor: "#fff",
              borderRadius: "4px",
              padding: "16px 16px",
            }}
          >
            <div className="flex justify-between items-center pb-5 border-b border-gray-200">
              <div className="font-bold text-xl">All Doctors</div>
              <div className="flex space-x-6">
                <Button className="primary-button" text={"Add Doctors"} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-10 pt-10">
              {allDoctors?.map((doctor) => (
                <Card
                  className="mb-3"
                  style={{
                    borderRadius: "12px",
                    border: "1px solid #e6e6e6",
                    boxShadow: "none",
                    backgroundColor: "#fff",
                  }}
                >
                  <CardHeader
                    style={{
                      backgroundColor: "#fff",
                      borderBottom: "1px solid #e6e6e6",
                    }}
                    titleTypographyProps={{
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                    avatar={
                      <Avatar
                        // src={doctor.avatar}
                        sx={{
                          background: "#212121",
                          width: "60px",
                          height: "60px",
                        }}
                        aria-label="doctor Profile"
                      />
                    }
                    title={doctor?.userName}
                    subheader={
                      <div>
                        <div>{doctor?.department}</div>
                        <div className="flex justify-start items-center gap-1 py-1">
                          {/* <FiClock className="self-center" size={16} />{" "} */}
                          {doctor?.userAvailability}
                        </div>
                      </div>
                    }
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "14px", lineHeight: 1.75 }}
                    >
                      {doctor.biography}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      className="primary-button w-full"
                      text={"View Profile"}
                    />
                    <Button
                      className="outline-button w-full"
                      text={"Appointment"}
                    />
                  </CardActions>
                </Card>
              ))}
            </div>
          </Box>
        </Layout>
      </div>
      {/* <>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Availabilty</th>
              <th scope="col">email</th>
              <th scope="col">Doctors Name</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((data) => {
              return (
                <tr>
                  <th scope="row">1</th>
                  <td>{data.userAvailability}</td>
                  <td>{data.email}</td>
                  <td>{data.userName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </> */}
    </div>
  );
};

export default AllDoctors;
