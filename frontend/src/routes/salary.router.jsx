import { lazy } from "react";

const SalaryCreate = lazy(() => import("../views/salary/SalaryCreate"));

const salaryRoutes = [{ path: "/salaries/new", element: <SalaryCreate /> }];

export default salaryRoutes;
