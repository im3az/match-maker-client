import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="w-full mx-auto my-14 max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
      <h1 className="text-2xl font-bold text-center">Registration</h1>
      <form noValidate="" action="" className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block text-gray-600">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="photo" className="block text-gray-600">
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            id="photo"
            placeholder="Photo url"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
          />
        </div>
        <Button className="w-full">Register</Button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        {/* <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        <p className="px-3 text-sm text-gray-600">Login with google accounts</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div> */}
      </div>
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
