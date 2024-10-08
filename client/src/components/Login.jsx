import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
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
        <h2 className="text-2xl font-semibold pt-5 text-center">
          Login Here !
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 max-w-sm mx-auto pt-6"
        >
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="w-full rounded-md bg-gray-100 focus:outline-none px-5 py-3"
          />
          {errors.email && <p className="text-red-500">Email is required !</p>}
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            className="w-full rounded-md bg-gray-100 focus:outline-none px-5 py-3"
          />

          {errors.password && (
            <p className="text-red-500">Password is required !</p>
          )}

          <button className="w-full mt-5 bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-md">
            Login
          </button>
        </form>
        <div className="my-5 text-sm text-center">
          Don't have an account ? Please
          <Link
            to="/register"
            className="text-red-700 px-1 underline cursor-pointer"
          >
            Register
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
