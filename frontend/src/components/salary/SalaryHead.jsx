import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/company/actions/company.action.thunk";

const SalaryHead = ({ register, errors }) => {
  const dispatch = useDispatch();
  const { companies } = useSelector((state) => state.companyReducer);

  useEffect(() => {
    dispatch(actions.getCompaniesApiRequest());
  }, [dispatch]);

  return (
    <div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Ay</label>
            <input
              type="text"
              className="form-control"
              {...register("month")}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Yil</label>
            <input type="text" className="form-control" {...register("year")} />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <label className="form-label">Sirket Ismi</label>
        <div className="input-group has-validation">
          <select className="form-select" {...register("companyId")}>
            {companies.map((company) => (
              <option key={company._id} value={company._id}>
                {company.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-md-4">
        <label className="form-label">Ek Bilgi</label>
        <input
          type="text"
          className="form-control"
          {...register("additionalInformation")}
        />
      </div>
    </div>
  );
};

export default SalaryHead;
