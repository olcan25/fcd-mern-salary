import { lazy } from "react";
const EmployeeTable = lazy(() => import("../views/employee/EmployeeTable"));
const EmployeeCreate = lazy(() => import("../views/employee/EmployeeCreate"));
const EmployeeDelete = lazy(() => import("../views/employee/EmployeeDelete"));
const EmployeeEdit = lazy(() => import("../views/employee/EmployeeEdit"));

const employeeRoutes = [
  { path: "/employees", element: <EmployeeTable /> },
  { path: "/employees/new", element: <EmployeeCreate /> },
  { path: "/employees/delete", element: <EmployeeDelete /> },
  { path: "/employees/edit", element: <EmployeeEdit /> },
];

export default employeeRoutes;