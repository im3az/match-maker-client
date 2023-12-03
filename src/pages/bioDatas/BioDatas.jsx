import Loader from "../../components/Loader/Loader";
import useBiodata from "../../hooks/useBiodata";
import Select from "react-select";
import BioDataCard from "./BioDataCard";

const ageOptions = [
  { value: "18-30", label: "18-30" },
  { value: "30-40", label: "30-40" },
  { value: "40-50", label: "40-50" },
  { value: "50-60", label: "50-60" },
  { value: "60-70", label: "60-70" },
  { value: "70-80", label: "70-80" },
  { value: "80-90", label: "80-90" },
  { value: "90-100", label: "90-100" },
];

const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

const divisionOptions = [
  { value: "Dhaka", label: "Dhaka" },
  { value: "Chattogram", label: "Chattogram" },
  { value: "Rangpur", label: "Rangpur" },
  { value: "Barisal", label: "Barisal" },
  { value: "Khulna", label: "Khulna" },
  { value: "Mymensing", label: "Mymensing" },
  { value: "Sylhet", label: "Sylhet" },
];

const BioDatas = () => {
  const [allBiodata, loading] = useBiodata();
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="flex max-w-7xl mx-auto">
        {/* filter section */}

        <div className="w-64 min-h-screen">
          <div className="h-full p-3 space-y-2 w-60 bg-gray-50 text-gray-800">
            <div className="flex items-center p-2 ">
              <h2 className="text-3xl ">Filters</h2>
            </div>
            <div className="">
              <ul className="pt-2 pb-4 space-y-5 text-sm ">
                <li className=" text-gray-900">
                  <Select options={ageOptions} />
                </li>

                <li className=" text-gray-900">
                  <h2>Filter by gender:</h2>
                  <Select options={genderOptions} />
                </li>

                <li className=" text-gray-900">
                  <h2>Filter by division:</h2>
                  <Select options={divisionOptions} />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-center font-bold text-4xl lg:text-5xl  mb-10">All Biodata</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 my-3">
            {allBiodata.map((singleBiodata) => (
              <BioDataCard
                key={singleBiodata._id}
                singleBiodata={singleBiodata}
              ></BioDataCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioDatas;
