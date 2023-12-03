import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Button } from "flowbite-react";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };

        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data) {
            Swal.fire({
              icon: "success",
              title: "Login successful",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          }

          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="p-8">
      <div>
        <Button onClick={handleGoogleSignIn}>
          <FaGoogle />
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
