import { lazy } from "react";
const CompanyTable = lazy(() => import("../views/company/CompanyTable"));
const CompanyCreate = lazy(() => import("../views/company/CompanyCreate"));
const CompanyDelete = lazy(() => import("../views/company/CompanyDelete"));
const CompanyEdit = lazy(() => import("../views/company/CompanyEdit"));

const companyRoutes = [
  { path: "/companies", element: <CompanyTable /> },
  { path: "/companies/new", element: <CompanyCreate /> },
  { path: "/companies/delete", element: <CompanyDelete /> },
  { path: "/companies/edit", element: <CompanyEdit /> },
];

export default companyRoutes;
