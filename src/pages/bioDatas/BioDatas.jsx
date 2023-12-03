import Loader from "../../components/Loader/Loader";
import useBiodata from "../../hooks/useBiodata";
import { Label, Select } from "flowbite-react";
import BioDataCard from "./BioDataCard";

// const ageOptions = [
//   { value: "18-30", label: "18-30" },
//   { value: "30-40", label: "30-40" },
//   { value: "40-50", label: "40-50" },
//   { value: "50-60", label: "50-60" },
// ];

// const genderOptions = [
//   { value: "Male", label: "Male" },
//   { value: "Female", label: "Female" },
// ];

// const divisionOptions = [
//   { value: "Dhaka", label: "Dhaka" },
//   { value: "Chattogram", label: "Chattogram" },
//   { value: "Rangpur", label: "Rangpur" },
//   { value: "Barisal", label: "Barisal" },
//   { value: "Khulna", label: "Khulna" },
//   { value: "Mymensing", label: "Mymensing" },
//   { value: "Sylhet", label: "Sylhet" },
// ];

const BioDatas = () => {
  const [allBiodata, loading] = useBiodata();
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="flex max-w-7xl mx-auto">
        {/* filter section */}

        <div className="w-64 ">
          <div className="h-full p-3 space-y-2 w-60 bg-gray-50 text-gray-800">
            <div className="flex items-center p-2 ">
              <h2 className="text-3xl ">Filters</h2>
            </div>
            <div className="">
              <form className="pt-2 pb-4 space-y-5 text-sm " action="">
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="Filter by age:" />
                  </div>
                  <Select id="countries">
                    <option>18-30</option>
                    <option>31-40</option>
                    <option>41-50</option>
                    <option>51-60</option>
                  </Select>
                </div>

                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="Filter by gender:" />
                  </div>
                  <Select id="countries">
                    <option>Male</option>
                    <option>Female</option>
                  </Select>
                </div>

                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="Filter by age:" />
                  </div>
                  <Select id="countries">
                    <option>Dhaka</option>
                    <option>Chattogram</option>
                    <option>Rangpur</option>
                    <option>Barisal</option>
                    <option>Khulna</option>
                    <option>Mymensing</option>
                    <option>Sylhet</option>
                  </Select>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-center font-bold text-4xl lg:text-5xl  mb-10">
            All Biodata
          </h2>
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
