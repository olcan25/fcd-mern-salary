import { Suspense, lazy } from "react";
const NavHeader = lazy(() => import("./layout/navbar/NavHeader"));
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import LoadingPage from "./views/loading/LoadingPage";

function App() {
  return (
    <div>
      <Suspense fallback={<LoadingPage />}>
        <NavHeader />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
