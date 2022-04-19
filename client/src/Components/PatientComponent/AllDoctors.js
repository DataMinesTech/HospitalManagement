import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../actions/userActions";

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
      <>
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
      </>
    </div>
  );
};

export default AllDoctors;
