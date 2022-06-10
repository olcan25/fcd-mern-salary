import { useRoutes } from "react-router-dom";
import companyRoutes from "./company.router";
import employeeRoutes from "./employee.router";
import salaryRoutes from "./salary.router";

export default function Router() {
  let routes = useRoutes([
    ...companyRoutes,
    ...employeeRoutes,
    ...salaryRoutes,
  ]);
  return routes;
}
