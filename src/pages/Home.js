// src/pages/Home.js
import React from "react";
import HeroSection from "../components/HeroSection";
import StructureSection from "../components/StructureSection";
import ProgramKerjaSection from "../components/ProgramKerjaSection";
import KegiatanSection from "../components/KegiatanSection";
import EkskulSection from "../components/EkskulSection";
import InformasiSection from "../components/InformasiSection";
import SaranSection from "../components/SaranSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <StructureSection />
      <ProgramKerjaSection />
      <KegiatanSection />
      <EkskulSection />
      <InformasiSection />
      <SaranSection />
    </div>
  );
}

export default Home;
