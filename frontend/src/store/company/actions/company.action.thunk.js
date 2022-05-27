import * as actionCreator from "./company.action.js";
import {
  getAllCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
} from "../../../api/company.service.js";
import {
  errorMessage,
  successMessage,
} from "../../../services/alert/alert-service";

export function getCompaniesApiRequest() {
  return (dispatch) => {
    dispatch(actionCreator.getCompanyApiLoading());
    getAllCompanies()
      .then((response) => {
        dispatch(actionCreator.getCompaniesApiSuccess(response.data));
      })
      .catch((error) => {
        dispatch(actionCreator.getCompanyApiError(error));
      });
  };
}

export function createCompanyApiRequest(company) {
  return (dispatch) => {
    dispatch(actionCreator.createCompanyApi(company));
    createCompany(company)
      .then((response) => {
        successMessage("Yeni Şirket Oluşturuldu");
        dispatch(
          actionCreator.createCompanyApiSuccess({
            ...response.data.data,
          })
        );
        console.error("response ", response);
      })
      .catch((error) => {
        errorMessage(`Yeni Şirket Oluşturulamadı ${error.response.data}`);
        dispatch(actionCreator.createCompanyApiError(error));
      });
  };
}

export function updateCompanyApiRequest(company) {
  return (dispatch) => {
    dispatch(actionCreator.updateCompanyApi(company));
    updateCompany(company)
      .then((response) => {
        successMessage("Şirket Bilgileri Duzenlendi");
        dispatch(actionCreator.updateCompanyApiSuccess(response.data.data._id));
      })
      .catch((error) => {
        errorMessage(`Şirket Bilgileri Duzenlenemedi ${error.response.data}`);
        dispatch(actionCreator.updateCompanyApiError(error));
      });
  };
}

export function deleteCompanyApiRequest(id) {
  return (dispatch) => {
    dispatch(actionCreator.deleteCompanyApi(id));
    deleteCompany(id)
      .then((response) => {
        successMessage("Şirket Silindi");
        dispatch(actionCreator.deleteCompanyApiSuccess(response.data));
      })
      .catch((error) => {
        errorMessage(`Şirket Silinemedi ${error.response.data}`);
        dispatch(actionCreator.deleteCompanyApiError(error));
      });
  };
}
