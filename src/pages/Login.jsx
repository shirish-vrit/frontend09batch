import { useForm } from "react-hook-form";
import { loginFunction } from "../apiLayer";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();

  const [isLoggedin, setIsLoggedin] = useState(false);
  const onSubmit = (data) => {
    // api call garne steps tala mention garinxa
    loginFunction(data).then((response) => {
      if (response?.token) {
        Cookies.set("acces_token", response?.token);
        setIsLoggedin(true);
      }
    });
  };

  useEffect(() => {
    let alreadyLoggedIn = Cookies.get("acces_token");

    if (alreadyLoggedIn) {
      setIsLoggedin(true);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center">
      {
        <button
          className="p-3 border rounded-md border-gray-400"
          onClick={() => {
            if (isLoggedin) {
              navigate("/profile");
            }
          }}
        >
          {isLoggedin ? "Profile" : "Login"}
        </button>
      }
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-gray-400 flex flex-col justify-center items-center gap-3 p-5"
      >
        {/* username field */}
        <div className="flex gap-3 justify-start items-center">
          <label htmlFor="username">Email</label>
          <input
            id="username"
            className="border border-gray-400 p-1"
            {...register("email")}
          />
        </div>

        {/* password field */}
        <div className="flex gap-3 justify-start items-center">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="border border-gray-400 p-1"
            {...register("password")}
          />
        </div>

        {/* submit button */}

        <button
          type="submit"
          className="border border-blue-500 p-2 bg-blue-400 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
