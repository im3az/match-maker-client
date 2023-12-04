import { Button } from "flowbite-react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

const occupationOptions = [
  { value: "Student", label: "Student" },
  { value: "Job", label: "Job" },
  { value: "House wife", label: "House wife" },
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

const heightOptions = [
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
];

const weightOptions = [
  { value: "20-30", label: "20-30" },
  { value: "30-40", label: "30-40" },
  { value: "40-50", label: "40-50" },
  { value: "50-60", label: "50-60" },
  { value: "60-70", label: "60-70" },
  { value: "70-80", label: "70-80" },
  { value: "80-90", label: "80-90" },
  { value: "90-100", label: "90-100" },
];

const religionOptions = [
  { value: "Islam", label: "Islam" },
  { value: "Hindu", label: "Hindu" },
  { value: "Buddhism", label: "Buddhism" },
  { value: "Christian", label: "Christian" },
];

const EditBiodata = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit, reset, control } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);

    const biodata = {
      age: data.age,
      dateOfBirth: data.dateOfBirth,
      email: data.email,
      fathersName: data.fathersName,
      gender: data.gender,
      height: data.height,
      image: data.image,
      mobileNumber: data.mobileNumber,
      mothersName: data.mothersName,
      name: data.name,
      occupation: data.occupation,
      partnerAge: data.partnerAge,
      partnerHeight: data.partnerHeight,
      partnerWeight: data.partnerWeight,
      permanentDivision: data.permanentDivision,
      presentDivision: data.presentDivision,
      religion: data.religion,
      weight: data.weight,
    };

    // console.log(biodata);

    const biodataRes = await axiosSecure.put("/editBiodata", biodata);

    console.log(biodataRes.data);

    if (biodataRes.data.upsertedCount > 0) {
      Swal.fire({
        icon: "success",
        title: "Biodata created",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (biodataRes.data.modifiedCount > 0) {
      Swal.fire({
        icon: "success",
        title: "Biodata Updated",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    reset();
  };

  return (
    <div>
      <div className=" min-h-screen p-20 ">
        <h2 className="text-center font-bold text-4xl lg:text-5xl  mb-10">
          Edit your biodata
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name , Gender, Age*/}
          <div className="md:flex mb-8 gap-5">
            <div className="md:w-1/3">
              <label className="text-lg">Name</label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                className="w-full rounded-md focus:ring border-gray-300 text-gray-900"
              />
            </div>

            <div className="md:w-1/3">
              <label className="text-lg">Gender</label>

              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select
                    options={genderOptions}
                    value={genderOptions.find((c) => c.value === field.value)}
                    onChange={(val) => field.onChange(val.value)}
                  />
                )}
              />
            </div>

            <div className="md:w-1/3">
              <label className="text-lg">Age</label>
              <input
                type="number"
                placeholder="Age"
                {...register("age", { required: true })}
                className="w-full rounded-md focus:ring border-gray-300 text-gray-900"
              />
            </div>
          </div>

          {/* Occupation, Father's name, Mother's name*/}
          <div className="md:flex mb-8 gap-5">
            <div className="md:w-1/3">
              <label className="text-lg">Occupation</label>

              <Controller
                name="occupation"
                control={control}
                render={({ field }) => (
                  <Select
                    options={occupationOptions}
                    value={occupationOptions.find(
                      (c) => c.value === field.value
                    )}
                    onChange={(val) => field.onChange(val.value)}
                  />
                )}
              />
            </div>

            <div className="md:w-1/3">
              <label className="text-lg">Father&apos;s name</label>
              <input
                type="text"
                placeholder="Father's name"
                {...register("fathersName", { required: true })}
                className="w-full rounded-md focus:ring border-gray-300 text-gray-900"
              />
            </div>

            <div className="md:w-1/3">
              <label className="text-lg">Mother&apos;s name</label>
              <input
                type="text"
                placeholder="Mother's name"
                {...register("mothersName", { required: true })}
                className="w-full rounded-md focus:ring border-gray-300 text-gray-900"
              />
            </div>
          </div>

          {/* Present division, Permanent division, Date of birth */}
          <div className="md:flex mb-8 gap-5">
            <div className="md:w-1/3">
              <label className="text-lg">Present division</label>

              <Controller
                name="presentDivision"
                control={control}
                render={({ field }) => (
                  <Select
                    options={divisionOptions}
                    value={divisionOptions.find((c) => c.value === field.value)}
                    onChange={(val) => field.onChange(val.value)}
                  />
                )}
              />
            </div>

            <div className="md:w-1/3">
              <label className="text-lg">Permanent division</label>

              <Controller
                name="permanentDivision"
                control={control}
                render={({ field }) => (
                  <Select
                    options={divisionOptions}
                    value={divisionOptions.find((c) => c.value === field.value)}
                    onChange={(val) => field.onChange(val.value)}
                  />
                )}
              />
            </div>

            <div className="md:w-1/3">
              <label className="text-lg">Date of birth</label>
              <input
                type="date"
                placeholder="Date of birth"
                {...register("dateOfBirth", { required: true })}
                className="w-full rounded-md focus:ring border-gray-300 text-gray-900"
              />
            </div>
          </div>

          {/* Image, Height, Weight */}
          <div className="md:flex mb-8 gap-5">
            <div className="md:w-1/3">
              <label className="text-lg">Image</label>
              <input
                type="text"
                placeholder="Image"
                {...register("image", { required: true })}
                className="w-full rounded-md focus:ring border-gray-300 text-gray-900"
              />
            </div>

            <div className="md:w-1/3">
              <label className="text-lg">Height</label>

              <Controller
                name="height"
                control={control}
                render={({ field }) => (
                  <Select
                    options={heightOptions}
                    value={heightOptions.find((c) => c.value === field.value)}
                    onChange={(val) => field.onChange(val.value)}
                  />
                )}
              />
            </div>

            <div className="md:w-1/3">
              <label className="text-lg">Weight</label>

              <Controller
                name="weight"
                control={control}
                render={({ field }) => (
                  <Select
                    options={weightOptions}
                    value={weightOptions.find((c) => c.value === field.value)}
                    onChange={(val) => field.onChange(val.value)}
                  />
                )}
              />
            </div>
          </div>

          {/* Expected partner age, height, weight */}
          <div className="md:flex mb-8 gap-5">
            <div className="md:w-1/3">
              <label className="text-lg">Expected partner age</label>
              <input
                type="number"
                placeholder="Expected partner age"
                {...register("partnerAge", { required: true })}
                className="w-full rounded-md focus:ring border-gray-300 text-gray-900"
              />
            </div>

            <div className="md:w-1/3">
              <label className="text-lg">Expected partner height</label>

              <Controller
                name="partnerHeight"
                control={control}
                render={({ field }) => (
                  <Select
                    options={heightOptions}
                    value={heightOptions.find((c) => c.value === field.value)}
                    onChange={(val) => field.onChange(val.value)}
                  />
                )}
              />
            </div>

            <div className="md:w-1/3">
              <label className="text-lg">Expected partner weight</label>

              <Controller
                name="partnerWeight"
                control={control}
                render={({ field }) => (
                  <Select
                    options={weightOptions}
                    value={weightOptions.find((c) => c.value === field.value)}
                    onChange={(val) => field.onChange(val.value)}
                  />
                )}
              />
            </div>
          </div>

          {/*  Email, Mobile number, Religion*/}
          <div className="md:flex mb-8 gap-5">
            <div className="w-1/3">
              <label className="text-lg">Email</label>
              <input
                type="email"
                placeholder="Email"
                defaultValue={user?.email}
                readOnly
                {...register("email", { required: true })}
                className="w-full rounded-md focus:ring border-gray-300 text-gray-900"
              />
            </div>
            <div className="w-1/3">
              <label className="text-lg">Mobile number</label>
              <input
                type="tel"
                placeholder="Mobile number"
                {...register("mobileNumber", {
                  required: true,
                })}
                className="w-full rounded-md focus:ring border-gray-300 text-gray-900"
              />
            </div>
            <div className="w-1/3">
              <label className="text-lg">Religion</label>

              <Controller
                name="religion"
                control={control}
                render={({ field }) => (
                  <Select
                    options={religionOptions}
                    value={religionOptions.find((c) => c.value === field.value)}
                    onChange={(val) => field.onChange(val.value)}
                  />
                )}
              />
            </div>
          </div>
          <Button
            type="submit"
            className="mx-auto px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100 w-1/2"
          >
            Save & Publish
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditBiodata;
