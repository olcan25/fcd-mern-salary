import { combineReducers } from "redux";
import companyReducer from "./company/reducer/companyReducer";
import employeeReducer from "./employee/reducer/employeeReducer";

const reducers = combineReducers({
  companyReducer,
  employeeReducer,
});

export default reducers;
