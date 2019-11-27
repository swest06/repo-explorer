import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.colour}`}>
        <i className="fas fa-info-circle" /> {alert.text}
      </div>
    )
  );
};

export default Alert;
