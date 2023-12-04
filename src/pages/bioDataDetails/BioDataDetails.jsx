import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loader from "../../components/Loader/Loader";
import BioDataDetailsCard from "./BioDataDetailsCard";

const BioDataDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: biodataDetails = [], isLoading } = useQuery({
    queryKey: ["biodataDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodataDetails/${id}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }

  //   console.log(biodataDetails.name);

  return (
    <div className="max-w-7xl mx-auto">
      {biodataDetails && <BioDataDetailsCard biodataDetails={biodataDetails} />}
    </div>
  );
};

export default BioDataDetails;
