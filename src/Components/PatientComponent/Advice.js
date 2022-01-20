import React from "react";

const Advice = () => {
  return (
    <div>
      <h2>Advice</h2>
      <textarea>Enter Advice</textarea>
      <div>
        <label>Follow up date</label>
        <input type="date" />
        <br />
        <input type="checkbox" />
        <label>Refer to Emergency</label>
        <br />
        <input type="checkbox" />
        <label>Refer to Admission</label>
        <br />
        <input type="checkbox" />
        <label>Surgery Request</label>
        <br />
        <input type="checkbox" />
        <label>Refer to outside hospital</label>
      </div>
    </div>
  );
};

export default Advice;
