import * as actionCreator from "../actions/employee.action";
import {
  getAllEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} from "../../../api/employee.service";
//import { singleFileUpload } from "../../../api/file.service";
import {
  successMessage,
  errorMessage,
} from "../../../services/alert/alert-service";

export function getEmployeesApiRequest() {
  return (dispatch) => {
    dispatch(actionCreator.getEmployeesApiLoading());
    getAllEmployees()
      .then((response) => {
        dispatch(actionCreator.getEmployeesApiSuccess(response.data));
      })
      .catch((error) => {
        dispatch(actionCreator.getEmployeesApiError(error));
      });
  };
}

export function createEmployeeApiRequest(employee) {
  return (dispatch) => {
    dispatch(actionCreator.createEmployeeApi(employee));
    createEmployee(employee)
      .then((response) => {
        successMessage("Yeni Personel Oluşturuldu");
        dispatch(
          actionCreator.createEmployeeApiSuccess({
            ...response.data.data,
          })
        );
        console.log("response ", response);
      })
      .catch((error) => {
        errorMessage(`Yeni Personel Oluşturulamadı ${error.response.data}`);
        dispatch(actionCreator.createEmployeeApiError(error));
      });
  };
}

export function deleteEmployeeApiRequest(id) {
  return (dispatch) => {
    dispatch(actionCreator.deleteEmployeeApi(id));
    deleteEmployee(id)
      .then((response) => {
        successMessage("Personel Silindi");
        dispatch(actionCreator.deleteEmployeeApiSuccess(id));
      })
      .catch((error) => {
        errorMessage(`Personel Silinemedi ${error.response.data}`);
        dispatch(actionCreator.deleteEmployeeApiError(error));
      });
  };
}

export function updateEmployeeApirequest(employee) {
  return (dispatch) => {
    dispatch(actionCreator.updateEmployeeApi(employee));
    updateEmployee(employee)
      .then((response) => {
        successMessage("Personel Bilgileri Duzenlendi");
        dispatch(
          actionCreator.updateEmployeeApiSuccess(response.data.data._id)
        );
      })
      .catch((error) => {
        errorMessage(`Personel Bilgileri Duzenlenemedi ${error.response.data}`);
        dispatch(actionCreator.updateEmployeeApiError(error));
      });
  };
}
