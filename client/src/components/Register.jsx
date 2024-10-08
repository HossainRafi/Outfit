import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="h-screen flex items-center justify-center p-2">
      <div className="shadow bg-primary-light rounded-md p-8 max-w-sm mx-auto">
        <h2 className="text-2xl text-center font-semibold pt-5">
          Register Here !
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 max-w-sm mx-auto pt-6"
        >
          <input
            {...register("username", { required: true })}
            type="text"
            placeholder="Username"
            className="w-full rounded-md bg-gray-100 focus:outline-none px-5 py-3"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">Username is required !</p>
          )}

          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="w-full rounded-md bg-gray-100 focus:outline-none px-5 py-3"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">Email is required !</p>
          )}
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            className="w-full rounded-md bg-gray-100 focus:outline-none px-5 py-3"
          />

          {errors.password && (
            <p className="text-red-500 text-sm">Password is required !</p>
          )}

          <button className="w-full mt-5 bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-md">
            Register
          </button>
        </form>
        <div className="my-5 text-sm text-center">
          Have an account ? Please
          <Link
            to="/login"
            className="text-red-700 px-1 underline cursor-pointer"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
