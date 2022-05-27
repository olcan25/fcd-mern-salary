import apiAxios from "./config/apiAxios";

export const getAllEmployees = () => {
  return apiAxios.get("/employees");
};

export const createEmployee = (employee) => {
  return apiAxios.post("/employees", employee);
};

export const updateEmployee = (employee) => {
  return apiAxios.put(`/employees/${employee._id}`, employee);
};

export const deleteEmployee = (id) => {
  return apiAxios.delete(`/employees/${id}`);
};
