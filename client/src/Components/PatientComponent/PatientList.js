import React, { useEffect } from "react";

import Layout from "../Layout/LayoutComponent/Layout";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import SearchBar from "../Components/SearchBar";
import FilterModal from "../Components/FilterModal";
import Button from "@mui/material/Button";
import { BiFilterAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatients } from "../../actions/patientActions";

const PatientList = () => {
  const dispatch = useDispatch();
  const { patient } = useSelector((state) => state.patients);

  console.log("Patient List", patient);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getAllPatients());
  }, [dispatch]);

  const columns = () => [
    {
      field: "patientName",
      headerName: "Patient name",
      headerClassName: "super-app-theme-header",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            {/* <Avatar sx={{ width: 35, height: 35 }} src={params.value.avatar} /> */}
            <span className="px-3">
              {params.row.firstName} {params.row.lastName}
            </span>
          </>
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
      headerClassName: "super-app-theme-header",
      headerName: "Patient Email",
      width: 200,
    },
    {
      field: "patientPhoneNo",
      headerClassName: "super-app-theme-header",
      headerName: "Phone No.",
    },
    {
      field: "patientAdmissionStatus",
      headerClassName: "super-app-theme-header",
      headerName: "Status",
    },
    {
      field: "patientInRoom",
      headerClassName: "super-app-theme-header",
      headerName: "Room No.",
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
        };
      }
    );

  return (
    <div className="position-relative">
      {/* <PageHeader title={"Patient List"} /> */}
      <Layout>
        <div className="flex justify-content-between align-item-center pb-3">
          <div>
            <SearchBar />
          </div>
          <div>
            <Button
              sx={{ fontWeight: "700", fontSize: "14px" }}
              startIcon={<BiFilterAlt />}
              variant="outlined"
              onClick={handleOpen}
            >
              Filter
            </Button>
            <FilterModal open={open} onClose={handleClose} />
          </div>
        </div>
        <Box
          style={{
            overflow: "auto",
            "& .super-app-theme--header": {
              backgroundColor: "rgba(255, 7, 0, 0.55)",
            },
          }}
        >
          {patient.length > 0 && (
            <>
              <DataGrid
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
