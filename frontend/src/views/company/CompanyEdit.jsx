import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/validation-schema/company";
import { useDispatch } from "react-redux";
import { updateCompanyApiRequest } from "../../store/company/actions/company.action.thunk";
import { useNavigate, useLocation } from "react-router-dom";
import { singleDeleteFile, singleFileUpload } from "../../api/file.service";

const CompanyEdit = () => {
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
    if(data.fileUpload){
      editFile(data);
    }else{
      dispatch(updateCompanyApiRequest(data));
      navigate("/companies");
    }
  };

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
        dispatch(updateCompanyApiRequest(data));
        navigate("/companies");
      });
  };

  const goToBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    reset(location.state);
  }, [reset]);

  return (
    <form onSubmit={handleSubmit(onEdit)}>
      <h1>
        <span className="mx-2">Sirket</span>
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
            {errors.uidNumber &&
              errors.vatNumber?.type === "vatNumberStartsWith" && (
                <p className="alert alert-danger">Bu alan 3 ile baslamalidir</p>
              )}
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
              accept="application/pdf"
              {...register("uploadFile")}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CompanyEdit;
