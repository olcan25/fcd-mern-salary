import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/validation-schema/employee";
import { useDispatch } from "react-redux";
import { updateEmployeeApirequest } from "../../store/employee/effects/employee.effect";
import { useNavigate, useLocation } from "react-router-dom";
import { singleFileUpload, singleDeleteFile } from "../../api/file.service";

const EmployeeEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onEdit = (data) => {
    const date = new Date(data.birthDate);
    data.birthDate = date.setDate(date.getDate() + 1);
    // duzenleme islemi
    if (data.uploadFile.length > 0) {
      editFile(data);
    } else {
      dispatch(updateEmployeeApirequest(data));
      navigate("/employees");
    }
  };

  const goToBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    location.state.birthDate = location.state.birthDate.split("T")[0];
    reset(location.state);
  }, [reset]);

  const editFile = (data) => {
    if (location.state.filePath) {
      singleDeleteFile({ path: location.state.filePath }).then(() => {
        console.log("file deleted");
      });
    }
    const formData = new FormData();
    formData.append("file", data.uploadFile[0]);
    singleFileUpload(formData)
      .then((res) => {
        data.filePath = res.data.path;
      })
      .finally(() => {
        dispatch(updateEmployeeApirequest(data));
        navigate("/employees");
      });
  };

  return (
    <form onSubmit={handleSubmit(onEdit)}>
      <h1>
        <span className="mx-2">Personel</span>
        <button type="submit" className="btn btn-primary">
          Duzenle
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
              type="date"
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

export default EmployeeEdit;
