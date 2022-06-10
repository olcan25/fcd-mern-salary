import React, { useEffect } from "react";

const SalaryLine = ({ fields, append, register }) => {
  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id}>
          <div className="row">
            <div className="col-6">
              <label className="visually-hidden">Isci</label>
              <input
                type="text"
                className="form-control"
                {...register(`salaryLines.${index}.employeeId`)}
              />
            </div>
            <div className="col-6">
              <label className="visually-hidden">Net Maas</label>
              <input
                type="password"
                className="form-control"
                {...register(`salaryLines.${index}.netSalary`)}
              />
            </div>
            <div className="col-6">
              <label className="visually-hidden">Brut Maas</label>
              <input
                type="password"
                className="form-control"
                {...register(`salaryLines.${index}.grossSalary`)}
              />
            </div>
            <div className="col-6">
              <label className="visually-hidden">Toplam Maas</label>
              <input
                type="password"
                className="form-control"
                {...register(`salaryLines.${index}.totalSalary`)}
              />
            </div>
            <div className="col-6">
              <label className="visually-hidden">Vergi</label>
              <input
                type="password"
                className="form-control"
                {...register(`salaryLines.${index}.taxSalary`)}
              />
            </div>
            <div className="col-6">
              <label className="visually-hidden">Isci Kontr</label>
              <input
                type="password"
                className="form-control"
                {...register(`salaryLines.${index}.employeeContribute`)}
              />
            </div>
            <div className="col-6">
              <label className="visually-hidden">Is Veren Kontr</label>
              <input
                type="password"
                className="form-control"
                {...register(`salaryLines.${index}.employerContribute`)}
              />
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          append({ firstName: "", lastName: "" });
        }}
      >
        append
      </button>
    </div>
  );
};

export default SalaryLine;
