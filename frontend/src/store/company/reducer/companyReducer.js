import initialState from "./companyInitialState";
import * as actionTypes from "../actions/company.action.type";

export default function companyReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.COMPANY_API_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_COMPANY_LIST:
      return { ...state, companies: action.payload };
    case actionTypes.COMPANY_API_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actionTypes.CREATE_COMPANY:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.CREATE_COMPANY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        companies: [...state.companies, action.payload],
      };
    case actionTypes.CREATE_COMPANY_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actionTypes.UPDATE_COMPANY:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.UPDATE_COMPANY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        companies: state.companies.map((company) =>
          company._id === action.payload._id
            ? { ...company, ...action.payload }
            : company
        ),
      };
    case actionTypes.UPDATE_COMPANY_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actionTypes.DELETE_COMPANY:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.DELETE_COMPANY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        companies: state.companies.filter(
          (company) => company._id !== action.payload
        ),
      };
    case actionTypes.DELETE_COMPANY_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
