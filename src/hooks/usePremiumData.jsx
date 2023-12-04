import { useQuery } from "react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePremiumData = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: premiumCollection = [],
    refetch,
    isLoading: premiumLoading,
  } = useQuery({
    queryKey: ["premiumCollection"],
    queryFn: async () => {
      const res = await axiosPublic.get("/premiumCollection");
      return res.data;
    },
  });

  return [premiumCollection, premiumLoading, refetch];
};

export default usePremiumData;
