const HowItWorks = () => {
  return (
    <section className="p-6 bg-gray-100 text-gray-800">
      <div className="container mx-auto">
        <span className="block mb-2 text-lg font-medium text-center uppercase text-violet-600">
          How it works
        </span>
        <h2 className="text-5xl font-bold text-center text-gray-900">
          Find your match with us
        </h2>
        <div className="grid gap-6 my-16 lg:grid-cols-3">
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-50">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-600 text-gray-50">
              1
            </div>
            <p className="text-2xl font-semibold">
              <b>Register.</b> Register with your credentials.
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-50">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-600 text-gray-50">
              2
            </div>
            <p className="text-2xl font-semibold">
              <b>Make biodata. </b>Make your biodata to find your soulmate.
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-50">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-600 text-gray-50">
              3
            </div>
            <p className="text-2xl font-semibold">
              <b>Search.</b> Search your preferred person from our huge collection of biodata.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
