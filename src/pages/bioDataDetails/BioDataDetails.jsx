import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loader from "../../components/Loader/Loader";
import BioDataDetailsCard from "./BioDataDetailsCard";
import BiodataSuggestion from "./BiodataSuggestion";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BioDataDetails = () => {
  const { id } = useParams();
  // const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { data: biodataDetails = [], isLoading } = useQuery({
    queryKey: ["biodataDetails"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/biodataDetails/${id}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }

  console.log(biodataDetails.gender);

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        {biodataDetails && (
          <BioDataDetailsCard biodataDetails={biodataDetails} />
        )}
      </div>
      <div>
        <h2 className="text-center font-bold text-4xl lg:text-3xl  my-10">
          More {biodataDetails.gender} biodata Suggestions
        </h2>
        <BiodataSuggestion gender={biodataDetails.gender} />
      </div>
    </div>
  );
};

export default BioDataDetails;
