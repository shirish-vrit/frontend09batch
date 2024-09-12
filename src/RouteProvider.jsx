import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListings from "./components/ProductListings";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignupComponent from "./components/SignupComponent";
function RouteProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignupComponent />}></Route>
        <Route path="/products" element={<ProductListings />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="profile" element={<Profile />}></Route> */}
        {/* <Route path="/" element={<Layout />}>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="profile/:name" element={<ProfileDetail />}></Route>
        </Route> */}
        {/* <Route path="/" element={<HomepageComponent />}></Route>
        <Route path="/products" element={<ProductListing />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default RouteProvider;
