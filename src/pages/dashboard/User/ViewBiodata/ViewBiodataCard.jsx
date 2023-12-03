import { Button } from "flowbite-react";

const ViewBiodataCard = ({ biodata }) => {
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

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
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

              
                <Button className="mt-5">Make premium</Button>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewBiodataCard;
