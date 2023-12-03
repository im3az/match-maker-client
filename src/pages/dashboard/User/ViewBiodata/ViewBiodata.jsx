import Loader from "../../../../components/Loader/Loader";
import useUserBiodata from "../../../../hooks/useUserBiodata";
import ViewBiodataCard from "./ViewBiodataCard";

const ViewBiodata = () => {
  const [userBiodata, loading] = useUserBiodata();
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      {userBiodata.map((biodata) => (
        <ViewBiodataCard biodata={biodata} key={biodata._id} />
      ))}
    </div>
  );
};

export default ViewBiodata;
