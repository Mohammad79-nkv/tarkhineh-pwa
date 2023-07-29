"use client";

import { SimpleLogo } from "@/components/icons/SimpleLoga";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <section className="flex justify-center items-center bg-gray-100 h-screen w-screen">
      <div className="w-full h-full bg-white rounded-4 md:shadow md:max-w-md md:max-h-[700px] flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="w-20">
            <SimpleLogo />
          </div>
          <h2 className="text-base font-bold">ورود / ثبت نام</h2>
          <p className="text-gray-500 text-center text-sm md:text-base]">
            لطفا برای ثبت نام تمام اطلاعات خواسته شده را وارد کنید{" "}
          </p>
        </div>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input  placeholder="dwed" {...register("example")}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            {errors.e && <span>This field is required</span>}

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
