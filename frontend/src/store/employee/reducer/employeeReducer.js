import initialState from "./employeeInitialState";
import * as actionTypes from "../actions/employee.action.type";

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.EMPLOYEE_API_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_EMPLOYEE_LIST:
      return { ...state, employees: action.payload };
    case actionTypes.EMPLOYEE_API_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actionTypes.CREATE_EMPLOYEE:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.CREATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        employees: [...state.employees, action.payload],
      };
    case actionTypes.CREATE_EMPLOYEE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actionTypes.UPDATE_EMPLOYEE:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        employees: state.employees.map((employee) =>
          employee._id === action.payload._id
            ? { ...employee, ...action.payload }
            : employee
        ),
      };
    case actionTypes.UPDATE_EMPLOYEE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actionTypes.DELETE_EMPLOYEE:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        employees: state.employees.filter(
          (employee) => employee._id !== action.payload
        ),
      };
    case actionTypes.DELETE_EMPLOYEE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
