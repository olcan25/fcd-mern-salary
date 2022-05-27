import apiAxios from "./config/apiAxios";

export const singleFileUpload = (file) => {
  return apiAxios.post("/files/uploads/single", file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const singleDeleteFile = (path) => {
  console.log(path);
  return apiAxios.post(`/files/delete`, path);
};
