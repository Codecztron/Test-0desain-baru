// src/services/api.js
import axios from "axios";

const BASE_URL = window.location.origin;

export const getNavbar = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/data.json`);
    return response.data.navbar; // Ubah dari struktur ke navbar
  } catch (error) {
    console.error("Error fetching navbar:", error);
    throw error;
  }
};

export const getHeroData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/data.json`);
    return response.data.heroSection;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    throw error;
  }
};

export const getStruktur = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/data.json`);
    return response.data.struktur;
  } catch (error) {
    console.error("Failed to fetch struktur data:", error);
    throw error;
  }
};

export const getProgramKerja = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/data.json`);
    return response.data.programKerja;
  } catch (error) {
    console.error("Error fetching program kerja:", error);
    throw error;
  }
};

export const getKegiatan = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/data.json`);
    return response.data.kegiatan;
  } catch (error) {
    console.error("Error fetching kegiatan: ", error);
    throw error;
  }
};

export const getEkskul = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/data.json`);
    return response.data.ekskul;
  } catch (error) {
    console.error("Error fetching ekskul: ", error);
    throw error;
  }
};

export const getInformasi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/data.json`);
    return response.data.informasi;
  } catch (error) {
    console.error("Error fetching informasi: ", error);
    throw error;
  }
};

export const getAnggota = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/data.json`);
    return response.data.anggotaKetaqwaan;
  } catch (error) {
    console.error("Error fetching anggota ketaqwaan: ", error);
    throw error;
  }
};
// Tambahkan fungsi lain jika perlu (misalnya, untuk mengambil data informasi)
