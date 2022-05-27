import * as actionTypes from "./employee.action.type";

export const getEmployeesApiLoading = () => ({
  type: actionTypes.EMPLOYEE_API_LOADING,
});

export const getEmployeesApiSuccess = (employees) => ({
  type: actionTypes.GET_EMPLOYEE_LIST,
  payload: employees,
});

export const getEmployeesApiError = (error) => ({
  type: actionTypes.EMPLOYEE_API_ERROR,
  payload: error,
});

export const createEmployeeApi = (employee) => ({
  type: actionTypes.CREATE_EMPLOYEE,
  payload: employee,
});

export const createEmployeeApiSuccess = (employee) => ({
  type: actionTypes.CREATE_EMPLOYEE_SUCCESS,
  payload: employee,
});

export const createEmployeeApiError = (error) => ({
  type: actionTypes.CREATE_EMPLOYEE_ERROR,
  payload: error,
});

export const updateEmployeeApi = (employee) => ({
  type: actionTypes.UPDATE_EMPLOYEE,
  payload: employee,
});

export const updateEmployeeApiSuccess = (employee) => ({
  type: actionTypes.UPDATE_EMPLOYEE_SUCCESS,
  payload: employee,
});

export const updateEmployeeApiError = (error) => ({
  type: actionTypes.UPDATE_EMPLOYEE_ERROR,
  payload: error,
});

export const deleteEmployeeApi = (id) => ({
  type: actionTypes.DELETE_EMPLOYEE,
  payload: id,
});

export const deleteEmployeeApiSuccess = (id) => ({
  type: actionTypes.DELETE_EMPLOYEE_SUCCESS,
  payload: id,
});

export const deleteEmployeeApiError = (error) => ({
  type: actionTypes.DELETE_EMPLOYEE_ERROR,
  payload: error,
});
