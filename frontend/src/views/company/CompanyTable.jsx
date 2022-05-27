import TableView from "../../components/table/TableView";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/company/actions/company.action.thunk";
import { useNavigate } from "react-router-dom";

const header = {
  name: "Sirket Adi",
  tradeName: "Sirtket Ticari Adi",
  uidNumber: "UID Numarasi",
  vatNumber: "KDV Numarasi",
  region: "Bolge",
};

const CompanyTable = () => {
  const dispatch = useDispatch();
  const { companies } = useSelector((state) => state.companyReducer);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(actions.getCompaniesApiRequest());
  }, [dispatch]);

  const createRoute = () => {
    navigate("/companies/new");
  };

  return (
    <div>
      <h1 className="mb-2 mt-4 ms-5">Sirket Tablosu</h1>
      <button className="btn btn-primary mb-2" onClick={() => createRoute()}>
        Yeni Sirket Ekle
      </button>
      <TableView headers={header} data={companies} navRouter="companies" />
    </div>
  );
};

export default CompanyTable;
