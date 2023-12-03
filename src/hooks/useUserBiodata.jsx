import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUserBiodata = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userBiodata = [], isLoading: loading } = useQuery({
    queryKey: ["userBiodata", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/userBiodata?email=${user?.email}`);
      return res.data;
    },
  });
  return [userBiodata, loading];
};

export default useUserBiodata;
