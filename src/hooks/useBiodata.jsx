import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBiodata = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allBiodata = [] } = useQuery({
    queryKey: ["allBiodata"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allBiodata");
      return res.data;
    },
  });
  return [allBiodata];
};

export default useBiodata;
