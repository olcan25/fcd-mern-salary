import apiAxios from "./config/apiAxios";

export const singleFileUpload = (file) => {
  return apiAxios.post("/uploads/single", file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};