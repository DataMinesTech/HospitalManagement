import React, { useEffect } from "react";

import Layout from "../Layout/LayoutComponent/Layout";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deletePatient, getAllPatients } from "../../actions/patientActions";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { PageHeader } from "../Layout/Header/Header";
import Button from "../Components/Button";
import { useHistory } from "react-router-dom";

const PatientList = () => {
  const history = useHistory();
  // const navigate = useLocation();
  const dispatch = useDispatch();
  const { patient } = useSelector((state) => state.patients);

  console.log("Patient List", patient);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(getAllPatients());
  }, [dispatch]);

  const deleteUser = React.useCallback(
    (id) => () => {
      dispatch(deletePatient(id));
      dispatch(getAllPatients());
    },
    [dispatch]
  );

  const columns = () => [
    {
      field: "patientName",
      headerName: "Patient name",
      className: "super-app-theme-header",
      width: 170,
      renderCell: (params) => {
        return (
          <div
            onClick={() => {
              // console.log("onCellClick", abc);
              history.push(`/patient/${params.id}-${params.row.firstName}`, {
                data: patient.find((item) => item._id === params.id),
              });
            }}
          >
            {/* <Avatar sx={{ width: 35, height: 35 }} src={params.value.avatar} /> */}
            <span className="px-3 underline cursor-pointer text-blue-600">
              {params.row.firstName} {params.row.lastName}
            </span>
          </div>
        );
      },
    },
    // {
    //   field: "patientID",
    //   headerClassName: "super-app-theme-header",
    //   headerName: "Patient ID",
    //   width: 200,
    // },
    {
      field: "patientEmail",
      className: "super-app-theme-header",
      headerName: "Patient Email",
      width: 200,
    },
    {
      field: "patientPhoneNo",
      className: "super-app-theme-header",
      headerName: "Phone No.",
      width: 170,
    },
    {
      field: "patientAge",
      className: "super-app-theme-header",
      headerName: "Patient Age",
    },
    {
      field: "patientBloodGroup",
      className: "super-app-theme-header",
      headerName: "Patient Blood Group",
    },
    {
      field: "patientInRoom",
      className: "super-app-theme-header",
      headerName: "Room No.",
    },

    {
      field: "patientAdmissionStatus",
      className: "super-app-theme-header",
      headerName: "Status",
      width: 170,
      renderCell: (params) => {
        return (
          <>
            {/* <Avatar sx={{ width: 35, height: 35 }} src={params.value.avatar} /> */}
            <div
              className={`flex justify-center items-center px-4 py-2 rounded-full font-bold text-xs ${
                params.row.patientAdmissionStatus === "Admitted"
                  ? "bg-blue-100 text-blue-600 "
                  : "bg-amber-100 text-amber-600"
              } `}
            >
              {params.row.patientAdmissionStatus}
            </div>
          </>
        );
      },
    },
    {
      field: "actions",
      type: "actions",
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<FiEdit size={16} />}
          label="Edit"
          onClick={(e) => {}}
        />,
        <GridActionsCellItem
          icon={<FiTrash2 size={16} />}
          label="Delete"
          onClick={deleteUser(params.id)}
        />,
      ],
    },
  ];

  const rows = () =>
    patient?.map(
      ({
        _id,
        patientName,
        patientEmail,
        patientPhoneNo,
        patientAdmissionStatus,
        patientInRoom,
        patientAge,
        patientBloodGroup,
      }) => {
        return {
          id: _id,
          // patientName: patientName,
          firstName: patientName.split(" ")[0],
          lastName: patientName.split(" ")[1],
          patientEmail: patientEmail,
          patientPhoneNo: patientPhoneNo,
          patientAdmissionStatus: patientAdmissionStatus,
          patientInRoom: patientInRoom,
          patientAge: patientAge,
          patientBloodGroup: patientBloodGroup,
        };
      }
    );

  return (
    <div className="relative">
      <PageHeader title={"Patient List"} />
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
            <div className="font-bold text-xl">All Patients</div>
            <div className="flex space-x-6">
              <Button className="primary-button" text={"Add Patient"} />
              <Button className="primary-button" text={"Patient Addmission"} />
            </div>
          </div>
          {patient.length > 0 && (
            <>
              <DataGrid
                sx={{
                  border: "none",
                  "& .super-app-theme-header": {
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
                componentsProps={{
                  toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 500 },
                  },
                }}
                // onCellClick={(data) => {
                //   // console.log("onCellClick", abc);
                //   history.push(`/patient/${data.id}-${data.row.firstName}`, {
                //     data: patient.find((item) => item._id === data.id),
                //   });
                // }}
                autoHeight
                rowHeight={70}
                rows={rows()}
                columns={columns()}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </>
          )}
        </Box>
      </Layout>
    </div>
  );
};

export default PatientList;
