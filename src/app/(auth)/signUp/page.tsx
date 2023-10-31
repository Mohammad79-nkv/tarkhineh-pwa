"use client";

import toast, { Toaster } from "react-hot-toast";
import { SimpleLogo } from "@/components/icons/SimpleLoga";
import StyledInput from "@/components/styledInput/StyledInput";
import axios, { AxiosResponse } from "axios";
import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useSession } from "next-auth/react";

type Inputs = {
  email: string;
  fullName: string;
  password: string;
};

const SignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const session = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (form) => {
    const { email, password, fullName } = form;
    try {
      setLoading(true);
      const toastId = toast.loading("لطفا منتظر بمانید...");
      const res: AxiosResponse = await axios.post(
        `/api/signUp`,
        JSON.stringify({
          fullName,
          email,
          password,
        })
      );
      toast.dismiss(toastId)
      setLoading(false);
      if (res.status === 201) {
        toast.success("ثبت نام شما با موفقیت انجام شد.");
        router.push("/signIn?success=Account has been created");
      }
      console.log(res.status);
    } catch (error) {
      setLoading(false);
    }
  };

  if (session.status === "authenticated") {
    return;
  }

  return (
    <section className="flex justify-center items-center bg-gray-100 h-screen w-screen">
      {/* <Toaster /> */}
      <div className="w-full h-full bg-white rounded-4 md:shadow md:max-w-md md:max-h-[700px] flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-3 w-2/3">
          <div className="w-14">
            <SimpleLogo />
          </div>
          <h2 className="text-base font-bold">ورود / ثبت نام</h2>
          <p className="text-gray-500 text-center text-sm md:text-base]">
            لطفا برای ثبت نام تمام اطلاعات خواسته شده را وارد کنید{" "}
          </p>
        </div>
        <div className="w-2/3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-4"
          >
            {/* register your input into the hook by invoking the "register" function */}
            <StyledInput
              register={register("fullName")}
              placeholder="نام و نام خانوادگی"
            />
            {errors.fullName && <span>This field is required</span>}
            {/* <StyledInput placeholder="نام خانوادگی" {...register("example")} /> */}
            {/* {errors.e && <span>This field is required</span>} */}
            <StyledInput register={register("email")} placeholder="ایمیل" />
            {errors.email && <span>This field is required</span>}

            {/* include validation with required or other standard HTML validation rules */}
            <StyledInput
              register={register("password")}
              placeholder="رمز عبور"
              type="password"
            />
            {/* errors will return when field validation fails  */}
            {errors.password && <span>This field is required</span>}

            <button className="bg-primary text-white text-sm  rounded-4 py-2">
              {/* <svg className="animate-spin "></svg> */}
              تایید و ادامه
            </button>
            <div className="text-sm">
              <p className="text-center">
                ورود شما در ترخینه به منزله قبول{" "}
                <a
                  className="text-primary"
                  href="/easyaccess/rules-of-tarkhine"
                >
                  قوانین و مقررات{" "}
                </a>{" "}
                است
              </p>
            </div>
            <Link
              href="/signIn"
              className="flex justify-center items-center gap-2 text-sm bg-transparent"
            >
              ورود
              <div className="w-3">
                <ArrowLeft2 size={0} />
              </div>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
