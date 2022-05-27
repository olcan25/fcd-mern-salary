import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/validation-schema/employee";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createEmployeeApiRequest } from "../../store/employee/effects/employee.effect";
import { singleFileUpload } from "../../api/file.service";

const EmployeeCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onCreate = (data) => {
    const date = new Date(data.birthDate);
    data.birthDate = date.setDate(date.getDate() + 1);
    fileUpload(data);
  };

  const fileUpload = (data) => {
    const formData = new FormData();
    formData.append("file", data.uploadFile[0]);
    singleFileUpload(formData)
      .then((res) => {
        data.filePath = res.data.path;
      })
      .finally(() => {
        dispatch(createEmployeeApiRequest(data));
        navigate("/employees");
      });
  };

  const goToBack = () => {
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit(onCreate)}>
      <h1>
        <span className="mx-2">Yeni Personel</span>
        <button type="submit" className="btn btn-primary">
          Ekle
        </button>
        <button
          className="btn btn-warning"
          type="button"
          onClick={() => goToBack()}
        >
          Geri Don
        </button>
      </h1>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Adi</label>
            <input {...register("firstName")} className="form-control" />
            {errors.firstName && errors.firstName?.type === "required" && (
              <p className="alert alert-danger">Bu alan zorunludur</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Soyadi</label>
            <input {...register("lastName")} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Kimlik Numarasi</label>
            <input {...register("nationalIdentity")} className="form-control" />
            {errors.nationalIdentity &&
              errors.nationalIdentity?.type === "required" && (
                <p className="alert alert-danger">Bu alan zorunludur</p>
              )}
          </div>
          <div className="mb-3">
            <label className="form-label">Dogum Gunu</label>
            <input
              type={"date"}
              {...register("birthDate")}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Net Maas</label>
            <input {...register("netSalary")} className="form-control" />
            {errors.netSalary && errors.netSalary?.type === "required" && (
              <p className="alert alert-danger">Bu alan zorunludur</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Adres</label>
            <input {...register("address")} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Sehir</label>
            <input {...register("city")} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Ulke</label>
            <input {...register("country")} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Ek Bilgi</label>
            <input
              {...register("additionalInformation")}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Dosya Ekle</label>
            <input
              className="form-control"
              type="file"
              accept="application/pdf"
              {...register("uploadFile")}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EmployeeCreate;
