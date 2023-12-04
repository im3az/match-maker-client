import { useQuery } from "react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../../components/Loader/Loader";
import BioDataCard from "../bioDatas/BioDataCard";

const BiodataSuggestion = ({ gender }) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: suggestions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["suggestions"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/suggestions?gender=${gender}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }

  //   console.log(suggestions);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 my-3 max-w-7xl mx-auto">
      {suggestions.map((singleBiodata) => (
        <BioDataCard
          key={singleBiodata._id}
          singleBiodata={singleBiodata}
          isLoading={isLoading}
          refetch={refetch}
        ></BioDataCard>
      ))}
    </div>
  );
};

export default BiodataSuggestion;
