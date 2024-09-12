import { useForm } from "react-hook-form";
import { signupFunction } from "../apiLayer";
import { useNavigate } from "react-router";

function SignupComponent() {
  const yopagemaLaija = useNavigate();
  const { register, handleSubmit } = useForm();
  const meroOnSubmitFunction = (data) => {
    console.log(data);
    const pathauneydata = {
      ...data,
      name: {
        firstname: data?.firstname,
        lastname: data?.lastname,
      },
    };
    signupFunction(pathauneydata).then(() => {
      yopagemaLaija("/profile");
    });
  };
  return (
    <form onSubmit={handleSubmit(meroOnSubmitFunction)}>
      <div>
        <label>Email</label>
        <input type="text" {...register("email")} />
      </div>
      <div>
        <label>Username</label>
        <input type="text" {...register("username")} />
      </div>
      <div>
        <label>password</label>
        <input type="password" {...register("password")} />
      </div>
      <div>
        <label>FirstName</label>
        <input type="text" {...register("firstname")} />
      </div>
      <div>
        <label>Lastname</label>
        <input type="text" {...register("lastname")} />
      </div>

      <button type="submit">Sign up</button>
    </form>
  );
}

export default SignupComponent;
