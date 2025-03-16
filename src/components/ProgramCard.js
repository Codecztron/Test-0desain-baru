import React from "react";
import "../styles/components/ProgramCard.css";

const ProgramCard = ({ program }) => {
  return (
    <div className="program-card">
      <div className="card-header">
        <i className={`program-icon ${program.icon}`} aria-hidden="true"></i>{" "}
        {/* Gunakan prop icon */}
        <h3 className="program-title">{program.title}</h3>
      </div>
      <div className="card-body">
        <p className="program-description">{program.description}</p>
        {program.date && (
          <p className="program-date">
            <i className="far fa-calendar-alt icon-date"></i> {program.date}
          </p>
        )}
        {program.status && (
          <p
            className={`program-status status-${program.status.toLowerCase().replace(" ", "-")}`}
          >
            <i className="fas fa-check-circle icon-status"></i> Status:{" "}
            {program.status}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProgramCard;
