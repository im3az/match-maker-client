import { Button } from "flowbite-react";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ViewBiodataCard = ({ biodata }) => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

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
  } = biodata;

  const handlePremium = (name, email) => {
    console.log(name, email);
    const userInfo = {
      name,
      email,
    };
    axiosPublic
      .post("/premiumRequest", userInfo)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Request sent",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire("Already requested");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="text-center font-bold text-4xl lg:text-5xl  mb-10">
            My biodata
          </h2>
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 space-y-3">
              <h2 className="text-lg text-gray-900">Name: {name}</h2>
              <h2 className="text-lg text-gray-900">Gender: {gender}</h2>
              <h2 className="text-lg text-gray-900">
                Date of birth: {dateOfBirth}
              </h2>
              <h2 className="text-lg text-gray-900">Height: {height}</h2>
              <h2 className="text-lg text-gray-900">Weight: {weight}</h2>
              <h2 className="text-lg text-gray-900">Age: {age}</h2>
              <h2 className="text-lg text-gray-900">
                Occupation: {occupation}
              </h2>
              <h2 className="text-lg text-gray-900">Religion: {religion}</h2>
              <h2 className="text-lg text-gray-900">
                Fathers name: {fathersName}
              </h2>
              <h2 className="text-lg text-gray-900">
                Mothers name : {mothersName}
              </h2>
              <h2 className="text-lg text-gray-900">
                Permanent Division name : {permanentDivision}
              </h2>
              <h2 className="text-lg text-gray-900">
                Present Division name: {presentDivision}
              </h2>
              <h2 className="text-lg text-gray-900">
                Expected Partner Age: {partnerAge}
              </h2>
              <h2 className="text-lg text-gray-900">
                Expected Partner Height: {partnerHeight}
              </h2>
              <h2 className="text-lg text-gray-900">
                Expected Partner Weight: {partnerWeight}
              </h2>
              <h2 className="text-lg text-gray-900">Contact Email: {email}</h2>
              <h2 className="text-lg text-gray-900">
                Mobile Number: {mobileNumber}
              </h2>

              <Button
                onClick={() => handlePremium(name, email)}
                className="mt-5"
              >
                Make premium
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewBiodataCard;
