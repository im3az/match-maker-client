import { TfiEnvelope } from "react-icons/tfi";
import { FaMale, FaFemale } from "react-icons/fa";
import { GiLoveLetter } from "react-icons/gi";

const SuccessCounter = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-5xl font-bold text-center text-gray-900">
            Success Counter
          </h2>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <TfiEnvelope className="text-indigo-500 text-3xl mx-auto my-2" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Total Biodata</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FaMale className="text-indigo-500 text-3xl mx-auto my-2" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.3K
              </h2>
              <p className="leading-relaxed">Male Biodata</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FaFemale className="text-indigo-500 text-3xl mx-auto my-2" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.4K
              </h2>
              <p className="leading-relaxed">Female Biodata</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <GiLoveLetter className="text-indigo-500 text-3xl mx-auto my-2" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                0.7K
              </h2>
              <p className="leading-relaxed">Marriage Count</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCounter;
