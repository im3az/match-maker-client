import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const usePremium = () => {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: isPremium, isLoading: isPremiumLoading } = useQuery({
    queryKey: ["isPremium", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/premium/${user?.email}`);
      console.log(res.data);
      return res.data?.premium;
    },
  });
  return [isPremium, isPremiumLoading];
};

export default usePremium;
