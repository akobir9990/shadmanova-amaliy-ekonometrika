import React from "react";
import { useForm } from "react-hook-form";

function RankingForm({ setUserDetails, setShowTest }) {
  const handleChange = (e) => {
    const { name, value } = e.target.name;
    setUserDetails((prev) => {
      return { ...prev, [name]: value };
    });
    // console.log(userDetails);
  };
  const onSubmit = (data) => {
    setShowTest(true);
    setUserDetails(data);
    console.log(data);
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  console.log(errors);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[100%] min-w-[350px] bg-[rgba(24,118,210,0.6)] rounded p-5 flex flex-col"
      >
        <h1 className="text-3xl my-5"> Foydalanuvchi ma'lumotlari</h1>
        <div className="flex justify-between ">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            id="name"
            onChange={handleChange}
            className="mb-4 w-[300px] h-10 rounded p-2 bg-transparent border-[1px] border-[white] border-[solid] placeholder:text-[#5a5a5a] "
            {...register("name", { required: "ismingizni kiriitng" })}
          />
          {errors.name && <div> {errors.name.message} </div>}
        </div>
        <div className="flex justify-between ">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            placeholder="surname"
            name="surname"
            id="surname"
            onChange={handleChange}
            className="mb-4 w-[300px] h-10 rounded p-2 bg-transparent border-[1px] border-[white] border-[solid] placeholder:text-[#5a5a5a] "
            {...register("surname", { required: "Familiyangizni kiriting" })}
          />
          {errors.surname && <div> {errors.surname.message} </div>}
        </div>
        <div className="flex justify-between">
          <label htmlFor="department" className="flex">
            Department
          </label>
          <input
            type="text"
            placeholder="department of ..."
            name="department"
            id="department"
            onChange={handleChange}
            className="mb-4 w-[300px] h-10 rounded p-2 bg-transparent border-[1px] border-[white] border-[solid] placeholder:text-[#5a5a5a] "
            {...register("department", { required: "kafedrangizni kriiting" })}
          />
          {errors.department && <div> {errors.department.message} </div>}
        </div>
        <button
          type="submit"
          className="rounded w-[150px] h-10 bg-[rgb(24,118,210)]"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default RankingForm;
