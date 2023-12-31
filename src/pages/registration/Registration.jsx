import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Registration = () => {
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserProfile(data.name, data.photo)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };

            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                reset();
                Swal.fire({
                  icon: "success",
                  title: "Registration successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });

        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full mx-auto my-14 max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
      <h1 className="text-2xl font-bold text-center">Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label className="block text-gray-600">User name</label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            placeholder="User name"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
          />
          {errors.name && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>

        <div className="space-y-1 text-sm">
          <label className="block text-gray-600">Photo URL</label>
          <input
            type="text"
            name="photo"
            {...register("photo", { required: true })}
            placeholder="Photo url"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
          />
          {errors.photo && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>

        <div className="space-y-1 text-sm">
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
          />
          {errors.email && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>

        <div className="space-y-1 text-sm">
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">
              Password must be 6 characters or more
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-600">
              Password must have at least 1 uppercase, 1 lowercase , 1 number
              and 1 special characters.
            </p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>
      <p className="text-xs text-center sm:px-6 text-gray-600">
        Already have an account?
        <Link
          rel="noopener noreferrer"
          to="/login"
          className="underline text-blue-950 ml-1 "
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Registration;
