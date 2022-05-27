import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/validation-schema/company";
import { useDispatch } from "react-redux";
import { createCompanyApiRequest } from "../../store/company/actions/company.action.thunk";
import { useNavigate } from "react-router-dom";
import { singleFileUpload } from "../../api/file.service";

const CreateCompany = () => {
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
    fileUpload(data);
  };

  const fileUpload = (data) => {
    const formData = new FormData();
    formData.append("file", data.uploadFile[0]);
    singleFileUpload(formData)
      .then((res) => {
        data.filePath = res.data.path;
      })
      .then(() => {
        dispatch(createCompanyApiRequest(data));
        navigate("/companies");
      });
  };

  const goToBack = () => {
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit(onCreate)}>
      <h1>
        <span className="mx-2">Yeni Sirket</span>
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
            <label className="form-label">Sirket Ismi</label>
            <input {...register("name")} className="form-control" />
            {errors.name && errors.name?.type === "required" && (
              <p className="alert alert-danger">Bu alan zorunludur</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Sirket Ticari Ismi</label>
            <input {...register("tradeName")} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">UID Numarasi</label>
            <input {...register("uidNumber")} className="form-control" />
            {errors.uidNumber && errors.uidNumber?.type === "required" && (
              <p className="alert alert-danger">Bu alan zorunludur</p>
            )}
            {errors.uidNumber &&
              errors.uidNumber?.type === "uidNumberStartsWith" && (
                <p className="alert alert-danger">
                  Bu alan 8 veya 6 ile baslamalidir
                </p>
              )}
          </div>
          <div className="mb-3">
            <label className="form-label">KDV Numarasi</label>
            <input {...register("vatNumber")} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Ulke</label>
            <input {...register("country")} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Sehir</label>
            <input {...register("city")} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Adres</label>
            <input {...register("address")} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Bolge</label>
            <input {...register("region")} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Ekle Bilgi</label>
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
              {...register("uploadFile")}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateCompany;
