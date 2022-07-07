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
import { getAllUsers } from "../../actions/userActions";
import { PageHeader } from "../Layout/Header/Header";
import Layout from "../Layout/LayoutComponent/Layout";
import SearchBar from "../Components/SearchBar";
import { FiClock } from "react-icons/fi";
import Button from "../Components/Button";

const doctorsList = [
  {
    id: 1,
    doctorName: "Dr. John Doe",
    department: "Cardiology",
    timing: "10:00 AM - 12:00 PM",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
    skills: {
      skill1: "Cardiology",
      skill2: "Heart",
      skill3: "Pulmonary",
      skill4: "Diabetics",
      skill5: "Neurology",
      skill6: "Oncology",
    },
    contactInfo: {
      phone: "1234567890",
      email: "john@doe.com",
      address: "123, Main St, New York, NY 10001",
    },
    availability: "Available",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    doctorName: "Dr. John Doe",
    department: "Cardiology",
    timing: "10:00 AM - 12:00 PM",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
    skills: {
      skill1: "Cardiology",
      skill2: "Heart",
      skill3: "Pulmonary",
      skill4: "Diabetics",
      skill5: "Neurology",
      skill6: "Oncology",
    },
    contactInfo: {
      phone: "1234567890",
      email: "john@doe.com",
      address: "123, Main St, New York, NY 10001",
    },
    availability: "Available",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    doctorName: "Dr. John Doe",
    department: "Cardiology",
    timing: "10:00 AM - 12:00 PM",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
    skills: {
      skill1: "Cardiology",
      skill2: "Heart",
      skill3: "Pulmonary",
      skill4: "Diabetics",
      skill5: "Neurology",
      skill6: "Oncology",
    },
    contactInfo: {
      phone: "1234567890",
      email: "john@doe.com",
      address: "123, Main St, New York, NY 10001",
    },
    availability: "Available",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    doctorName: "Dr. John Doe",
    department: "Cardiology",
    timing: "10:00 AM - 12:00 PM",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
    skills: {
      skill1: "Cardiology",
      skill2: "Heart",
      skill3: "Pulmonary",
      skill4: "Diabetics",
      skill5: "Neurology",
      skill6: "Oncology",
    },
    contactInfo: {
      phone: "1234567890",
      email: "john@doe.com",
      address: "123, Main St, New York, NY 10001",
    },
    availability: "Available",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    doctorName: "Dr. John Doe",
    department: "Cardiology",
    timing: "10:00 AM - 12:00 PM",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
    skills: {
      skill1: "Cardiology",
      skill2: "Heart",
      skill3: "Pulmonary",
      skill4: "Diabetics",
      skill5: "Neurology",
      skill6: "Oncology",
    },
    contactInfo: {
      phone: "1234567890",
      email: "john@doe.com",
      address: "123, Main St, New York, NY 10001",
    },
    availability: "Available",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    doctorName: "Dr. John Doe",
    department: "Cardiology",
    timing: "10:00 AM - 12:00 PM",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
    skills: {
      skill1: "Cardiology",
      skill2: "Heart",
      skill3: "Pulmonary",
      skill4: "Diabetics",
      skill5: "Neurology",
      skill6: "Oncology",
    },
    contactInfo: {
      phone: "1234567890",
      email: "john@doe.com",
      address: "123, Main St, New York, NY 10001",
    },
    availability: "Available",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    doctorName: "Dr. John Doe",
    department: "Cardiology",
    timing: "10:00 AM - 12:00 PM",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
    skills: {
      skill1: "Cardiology",
      skill2: "Heart",
      skill3: "Pulmonary",
      skill4: "Diabetics",
      skill5: "Neurology",
      skill6: "Oncology",
    },
    contactInfo: {
      phone: "1234567890",
      email: "john@doe.com",
      address: "123, Main St, New York, NY 10001",
    },
    availability: "Available",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    doctorName: "Dr. John Doe",
    department: "Cardiology",
    timing: "10:00 AM - 12:00 PM",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
    skills: {
      skill1: "Cardiology",
      skill2: "Heart",
      skill3: "Pulmonary",
      skill4: "Diabetics",
      skill5: "Neurology",
      skill6: "Oncology",
    },
    contactInfo: {
      phone: "1234567890",
      email: "john@doe.com",
      address: "123, Main St, New York, NY 10001",
    },
    availability: "Available",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    doctorName: "Dr. John Doe",
    department: "Cardiology",
    timing: "10:00 AM - 12:00 PM",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sed do eiusmod...",
    skills: {
      skill1: "Cardiology",
      skill2: "Heart",
      skill3: "Pulmonary",
      skill4: "Diabetics",
      skill5: "Neurology",
      skill6: "Oncology",
    },
    contactInfo: {
      phone: "1234567890",
      email: "john@doe.com",
      address: "123, Main St, New York, NY 10001",
    },
    availability: "Available",
    avatar: "https://via.placeholder.com/150",
  },
];

const AllDoctors = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.allUsers);

  const doctors = users.filter((user) => user.userRole === "doctor");

  console.log("doctors", doctors);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <div className="position-relative">
        <PageHeader title={"Doctors List"} />
        <Layout>
          <div className="d-flex justify-content-between align-item-center pb-3">
            <div>
              <SearchBar />
            </div>
          </div>
          <Box
            style={{
              marginTop: "20px",
            }}
          >
            <div className="row">
              {doctorsList.map((doctor) => (
                <div className="col-lg-4">
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
                          src={doctor.avatar}
                          sx={{
                            background: "#212121",
                            width: "60px",
                            height: "60px",
                          }}
                          aria-label="doctor Profile"
                        />
                      }
                      title={doctor.doctorName}
                      subheader={
                        <div>
                          <div>{doctor.department}</div>
                          <div className="d-flex justify-content-start align-item-center gap-1 py-1">
                            <FiClock className="self-align-center" size={16} />{" "}
                            {doctor.timing}
                          </div>
                        </div>
                      }
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: "14px", lineHeight: 1.75 }}
                      >
                        {doctor.bio}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        className="rounded-button primary"
                        text={"View Profile"}
                      />
                      <Button
                        className="rounded-button outline-button"
                        text={"Appointment"}
                      />
                    </CardActions>
                  </Card>
                </div>
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
