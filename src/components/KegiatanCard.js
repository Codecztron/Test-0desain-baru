import React from "react";
import "../styles/KegiatanCard.css";

const KegiatanCard = ({ kegiatan }) => {
  if (!kegiatan) {
    return null;
  }

  const { title, description, image, date } = kegiatan;
  const imageUrl = image || "path/to/default-image.jpg"; // Placeholder default image

  return (
    <div className="kegiatan-card">
      <img src={imageUrl} alt={title} className="kegiatan-image" />
      <div className="kegiatan-content">
        <h3 className="kegiatan-title">{title}</h3>
        <p className="kegiatan-description">{description}</p>

        {date && (
          <p className="card-text">
            <i className="far fa-calendar-alt mr-2"></i>{" "}
            <span className="font-weight-bold">Tanggal:</span> {date}
          </p>
        )}
        {/* <button className="kegiatan-button">Lihat Detail</button>{" "} */}
      </div>
    </div>
  );
};

export default KegiatanCard;
