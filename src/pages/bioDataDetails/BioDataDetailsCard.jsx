import { Button } from "flowbite-react";
import usePremium from "../../hooks/usePremium";
import Loader from "../../components/Loader/Loader";

const BioDataDetailsCard = ({ biodataDetails }) => {
  const [isPremium, isPremiumLoading] = usePremium();
  if (isPremiumLoading) {
    return <Loader />;
  }

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
  } = biodataDetails;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
            src={image}
            alt=""
          />

          <div className=" lg:w-1/2 lg:px-6 space-y-2 lg:mt-0">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-xl ">
              Name: {name}
            </h1>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-xl ">
              Gender: {gender}
            </h1>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-xl ">
              Age: {age}
            </h1>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-xl ">
              Occupation: {occupation}
            </h1>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-xl ">
              Religion: {religion}
            </h1>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-xl ">
              Weight: {weight}
            </h1>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-xl ">
              Date of birth: {dateOfBirth}
            </h1>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-xl ">
              Father&apos;s name: {fathersName}
            </h1>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-xl ">
              Mother&apos;s name: {mothersName}
            </h1>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-xl ">
              Height: {height}
            </h1>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-xl ">
              Permanent division: {permanentDivision}
            </h1>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-xl ">
              Present division: {presentDivision}
            </h1>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-xl ">
              Expected partner age: {partnerAge}
            </h1>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-xl ">
              Expected partner height: {partnerHeight}
            </h1>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-xl ">
              Expected partner weight: {partnerWeight}
            </h1>
            {isPremium ? (
              <>
                <>
                  <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-xl ">
                    Email: {email}
                  </h1>
                  <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-xl ">
                    Phone number : {mobileNumber}
                  </h1>
                </>
              </>
            ) : (
              <>
                <Button>Request contact information</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioDataDetailsCard;
