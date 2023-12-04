import { useQuery } from "react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import BioDataCard from "../../bioDatas/BioDataCard";
import Loader from "../../../components/Loader/Loader";

const PremiumBiodata = () => {
  const axiosPublic = useAxiosPublic();
  const { data: premiumBiodata = [], isLoading: loading } = useQuery({
    queryKey: ["premiumBiodata"],
    queryFn: async () => {
      const res = await axiosPublic.get("/premiumBiodata");
      return res.data;
    },
  });

  if (loading) {
    return <Loader />;
  }


  return (
    <div className="max-w-7xl  mx-auto my-10">
      <h2 className="text-center font-bold text-4xl lg:text-5xl  mb-10">
        Premium Biodata
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 my-3">
        {premiumBiodata.map((singleBiodata) => (
          <BioDataCard
            key={singleBiodata._id}
            singleBiodata={singleBiodata}
          ></BioDataCard>
        ))}
      </div>
    </div>
  );
};

export default PremiumBiodata;
