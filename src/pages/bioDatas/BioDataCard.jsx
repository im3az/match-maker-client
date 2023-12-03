import { FaUser, FaBriefcase } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { GiTimeTrap } from "react-icons/gi";

const BioDataCard = ({ singleBiodata }) => {
  const {
    age,
    dateOfBirth,
    email,
    fathersName,
    gender,
    height,
    image,
    mobileNumber,
    mothersName,
    name,
    occupation,
    partnerAge,
    partnerHeight,
    partnerWeight,
    permanentDivision,
    presentDivision,
    religion,
    weight,
    biodataId,
  } = singleBiodata;
  return (
    <div>
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover object-center w-full h-56"
          src={image}
          alt="avatar"
        />

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {name}
          </h1>

          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <FaUser />
            <h1 className="px-2 text-sm">ID: {biodataId}</h1>
          </div>

          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <BiMaleFemale className="text-lg" />
            <h1 className="px-2 text-sm">Gender: {gender}</h1>
          </div>

          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <FaLocationDot />
            <h1 className="px-2 text-sm">Division: {permanentDivision}</h1>
          </div>

          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <GiTimeTrap />
            <h1 className="px-2 text-sm">Age: {age}</h1>
          </div>

          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <FaBriefcase />
            <h1 className="px-2 text-sm">Occupation: {occupation}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioDataCard;
