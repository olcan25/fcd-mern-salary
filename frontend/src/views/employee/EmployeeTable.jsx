import TableView from "../../components/table/TableView";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmployeesApiRequest } from "../../store/employee/effects/employee.effect";
import { useNavigate } from "react-router-dom";

const header = {
  firstName: "Ad",
  lastName: "Soyad",
  nationalIdentity: "Kimlik No",
  netSalary: "Net Maas",
  birthDate: "Dogum Tarihi",
};

const EmployeeTable = () => {
  const dispatch = useDispatch();
  const { employees } = useSelector((state) => state.employeeReducer);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getEmployeesApiRequest());
  }, [dispatch]);

  const createRoute = () => {
    navigate("/employees/new");
  };

  return (
    <div>
      <h1 className="mb-2 mt-4 ms-5">Personel Tablosu</h1>
      <button className="btn btn-primary mb-2" onClick={() => createRoute()}>
        Yeni Personel Ekle
      </button>
      <TableView headers={header} data={employees} navRouter="employees" />
    </div>
  );
};

export default EmployeeTable;
