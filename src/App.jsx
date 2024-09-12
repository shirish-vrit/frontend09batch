import RouteProvider from "./RouteProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  // route provider component comprises of all the routes in the project
  return (
    <>
      <ToastContainer />
      <RouteProvider />;
    </>
  );
}

export default App;
