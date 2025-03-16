import React from "react";
import "../styles/components/EkskulCard.css"; // Import CSS kustom untuk sedikit styling card

const EkskulCard = ({ ekskul }) => {
  if (!ekskul) {
    return null;
  }

  const { title, description, image, schedule } = ekskul;
  const imageUrl = image || "path/to/default-image.jpg"; // Placeholder default image

  return (
    <div className="ekskul-card card h-100">
      {" "}
      <img
        src={imageUrl}
        alt={title}
        className="card-img-top ekskul-image"
      />{" "}
      <div className="card-body d-flex flex-column justify-content-between">
        {" "}
        <div>
          <h5 className="card-title ekskul-title">{title}</h5>{" "}
          <p className="card-text ekskul-description">{description}</p>{" "}
        </div>
        <div className="mt-3 ekskul-schedule">
          {" "}
          {schedule && (
            <>
              <p className="card-text mb-1">
                <i className="far fa-calendar-alt mr-2"></i>{" "}
                <span className="font-weight-bold">Hari:</span> {schedule.day}
              </p>
              <p className="card-text">
                <i className="far fa-clock mr-2"></i>{" "}
                <span className="font-weight-bold">Waktu:</span> {schedule.time}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EkskulCard;
