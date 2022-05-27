import loadingLogo from "../../assets/ZZ5H.gif";

const LoadingPage = () => {
  return (
    <div className="loading-page d-flex justify-content-center">
      <img src={loadingLogo} alt="Loading..." />
      <h1>Loading...</h1>
    </div>
  );
};


export default LoadingPage;