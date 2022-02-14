const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Rooms = require("../models/roomModel");

//Create Room
exports.createRoom = catchAsyncErrors(async (req, res) => {
  const room = await Rooms.create(req.body);

  res.status(201).json({
    success: true,
    room,
  });
});

//Get All Rooms

exports.getAllRooms = catchAsyncErrors(async (req, res) => {
  const rooms = await Rooms.find();

  res.status(200).json({
    success: true,
    rooms,
  });
});

exports.updateRoom = catchAsyncErrors(async (req, res) => {
  let room = await Rooms.findById(req.params.id);

  console.log("room", room);

  if (!room) {
    return res.status(500).json({
      success: false,
      message: "User not found",
    });
  }

  const prevPatientRoom = await room.saveCurrentPatient(room);

  const updatedBody = {
    admissionDate: room.admissionDate,
    patientId: room.patientId,
    patientName: room.patientName,
    roomNo: room.roomNo,
    vacancyStatus: room.vacancyStatus,
    history: prevPatientRoom,
  };
  console.log("updated body", updatedBody);

  room = await Rooms.findByIdAndUpdate(req.params.id, updatedBody, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    room,
  });
});
