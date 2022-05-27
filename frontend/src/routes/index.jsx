import { useRoutes } from "react-router-dom";
import companyRoutes from "./company.router";
import employeeRoutes from "./employee.router";

export default function Router() {
  let routes = useRoutes([
    ...companyRoutes,
    ...employeeRoutes,
  ]);
  return routes;
}
