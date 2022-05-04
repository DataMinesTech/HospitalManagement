import React from "react";
import { PageHeader } from "../Layout/Header/Header";
import Layout from "../Layout/LayoutComponent/Layout";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import SearchBar from "../Components/SearchBar";
import FilterModal from "../Components/FilterModal";
import Button from "@mui/material/Button";
import { BiFilterAlt } from "react-icons/bi";
import Avatar from "@mui/material/Avatar";

const columns = [
  {
    field: "patientName",
    headerName: "Patient name",
    headerClassName: "super-app-theme--header",
    sortable: false,
    width: 250,
    renderCell: (params) => {
      console.log(params);
      return (
        <>
          <Avatar sx={{ width: 35, height: 35 }} src={params.value.avatar} />
          <span className="px-3">
            {params.row.firstName} {params.row.lastName}
          </span>
        </>
      );
    },
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "id",
    headerClassName: "super-app-theme--header",
    headerName: "Patient ID",
    width: 120,
  },
  {
    field: "checkInDate",
    headerClassName: "super-app-theme--header",
    headerName: "Check-In Date",
    width: 120,
  },
  { field: "doctorAssigned", headerName: "Doctor Assigned", width: 180 },
  {
    field: "diagnosis",
    headerClassName: "super-app-theme--header",
    headerName: "Diagnosis",
    width: 160,
  },
  {
    field: "status",
    headerClassName: "super-app-theme--header",
    headerName: "Status",
    width: 120,
  },
  {
    field: "roomNo",
    headerClassName: "super-app-theme--header",
    headerName: "Room No.",
    width: 100,
  },
  {
    field: "action",
    headerClassName: "super-app-theme--header",
    headerName: "",
    width: 100,
    sortable: false,
  },
];

const rows = [
  {
    id: 1,
    avatar:
      "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
  },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const PatientList = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="position-relative">
      <PageHeader title={"Patient List"} />
      <Layout>
        <div className="d-flex justify-content-between align-item-center pb-3">
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
          <DataGrid
            autoHeight
            rowHeight={70}
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Box>
      </Layout>
    </div>
  );
};

export default PatientList;
