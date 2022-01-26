import React from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = ({ ...rest }) => {
  return (
    <div>
      <Route {...rest} />
    </div>
  );
};

export default ProtectedRoute;
