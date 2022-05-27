import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCompanyApiRequest } from "../../store/company/actions/company.action.thunk";
import { singleDeleteFile } from "../../api/file.service";

const CompanyDelete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDelete = (id) => {
    fileDelete({ path: location.state.filePath });
    dispatch(deleteCompanyApiRequest(id));
    navigate("/companies");
  };

  const fileDelete = (path) => {
    if (path) {
      singleDeleteFile(path).then((res) => {
        console.log(res);
      });
    }
  };

  const goToBack = () => {
    navigate(-1);
  };
  return (
    <div className="container">
      <div className="p-5 mb-4 bg-light rounded-3 mt-5">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Sirket Silme Islemi</h1>
          <div className="col-md-8 fs-4">
            {location.state.name} ({location.state.tradeName}){" "}
            {location.state.uidNumber} firmasını silmek istediğinize emin
            misiniz?
            <p className="fw-bold">Bu işlem geri alınamaz.</p>
          </div>
          <button
            className="btn btn-danger btn-lg"
            onClick={() => onDelete(location.state._id)}
            type="button"
          >
            Sil
          </button>
          <button
            className="btn btn-warning btn-lg"
            type="button"
            onClick={() => goToBack()}
          >
            Geri Don
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyDelete;
