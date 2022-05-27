import * as actionTypes from "./company.action.type";

export const getCompanyApiLoading = () => ({
  type: actionTypes.COMPANY_API_LOADING,
});

export const getCompaniesApiSuccess = (companies) => ({
  type: actionTypes.GET_COMPANY_LIST,
  payload: companies,
});

export const getCompanyApiError = (error) => ({
  type: actionTypes.COMPANY_API_ERROR,
  payload: error,
});

export const createCompanyApi = (company) => ({
  type: actionTypes.CREATE_COMPANY,
  payload: company,
});

export const createCompanyApiSuccess = (company) => ({
  type: actionTypes.CREATE_COMPANY_SUCCESS,
  payload: company,
});

export const createCompanyApiError = (error) => ({
  type: actionTypes.CREATE_COMPANY_ERROR,
  payload: error,
});

export const updateCompanyApi = (company) => ({
  type: actionTypes.UPDATE_COMPANY,
  payload: company,
});

export const updateCompanyApiSuccess = (company) => ({
  type: actionTypes.UPDATE_COMPANY_SUCCESS,
  payload: company,
});

export const updateCompanyApiError = (error) => ({
  type: actionTypes.UPDATE_COMPANY_ERROR,
  payload: error,
});

export const deleteCompanyApi = (id) => ({
  type: actionTypes.DELETE_COMPANY,
  payload: id,
});

export const deleteCompanyApiSuccess = (id) => ({
  type: actionTypes.DELETE_COMPANY_SUCCESS,
  payload: id,
});

export const deleteCompanyApiError = (error) => ({
  type: actionTypes.DELETE_COMPANY_ERROR,
  payload: error,
});
