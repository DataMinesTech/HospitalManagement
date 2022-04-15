import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms } from "../../actions/roomActions";

const RoomsOccupied = () => {
  const dispatch = useDispatch();

  const { rooms } = useSelector((state) => state.allrooms);

  console.log("rooms occupied", rooms);

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  return (
    <div>
      <div>Rooms Occupied</div>
      <div className=" justify-content-center" style={{ height: 400 }}>
        <>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Appointment Time</th>
                <th scope="col">Appointment With</th>
                <th scope="col">Doctors</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((data) => {
                console.log(data, "appicancana");

                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>{data.admissionDate}</td>
                    <td>{data.roomNo}</td>
                    <td>{data.patientName}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      </div>
    </div>
  );
};

export default RoomsOccupied;
