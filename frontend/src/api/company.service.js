import apiAxios from "./config/apiAxios";

export const getAllCompanies = () => {
  return apiAxios.get("/companies");
};

export const createCompany = (company) => {
  return apiAxios.post("/companies", company);
};

export const updateCompany = (company) => {
  return apiAxios.put(`/companies/${company._id}`, company);
}

export const deleteCompany = (id) => {
  return apiAxios.delete(`/companies/${id}`);
}
