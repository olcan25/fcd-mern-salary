import React, { lazy } from "react";
const SalaryHead = lazy(() => import("../../components/salary/SalaryHead"));
const SalaryLine = lazy(() => import("../../components/salary/SalaryLine"));
import { useForm, useFieldArray } from "react-hook-form";

const SalaryCreate = () => {
  const { register, control, handleSubmit, errors } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "salaryLines",
  });

  const onCreate = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onCreate)}>
        <SalaryHead register={register} errors={errors} />
        <SalaryLine fields={fields} append={append} register={register} />
        <button type="submit" className="btn btn-primary">
          Ekle
        </button>
      </form>
    </div>
  );
};

export default SalaryCreate;
