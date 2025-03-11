import React, { useState, useEffect } from "react";
import { getProgramKerja } from "../services/api";
import ProgramCard from "./ProgramCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../styles/ProgramKerjaSection.css";

function ProgramKerjaSection() {
  const [programKerja, setProgramKerja] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProgramKerja();
        setProgramKerja(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading-indicator">Loading Program Kerja...</div>;
  }

  if (error) {
    return (
      <div className="error-message">Terjadi kesalahan: {error.message}</div>
    );
  }

  return (
    <section id="proker" className="program-section">
      <div className="program-container">
        <h2 className="section-title">{programKerja.ProgramKerjaJudul}</h2>
        <p className="section-subtitle">{programKerja.ProgramKerjaDeskripsi}</p>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="swiper-program-kerja"
        >
          {programKerja.programs.map((program, index) => (
            <SwiperSlide key={index}>
              <ProgramCard program={program} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProgramKerjaSection;
