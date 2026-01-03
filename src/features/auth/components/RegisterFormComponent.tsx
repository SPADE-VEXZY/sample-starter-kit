"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterFormInputsComponent from "./RegisterFormInputsComponent";
import { registerSchema } from "../services";
import Link from "next/link";
import LaravelIconComponent from "@/components/LaravelIconComponent";

const RegisterFormComponent = () => {
  type RegisterFormValues = z.infer<typeof registerSchema>;

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: RegisterFormValues) => {
    console.log(values);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8">
      <LaravelIconComponent/>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="bg-stone-950 rounded-[3px] py-8 px-12 lg:w-[500px]">
            <div className="text-center ">
              <h3 className="text-2xl font-semibold mb-2">Create an account</h3>
              <p className="text-gray-300">
                Enter your details below to create your account
              </p>
            </div>

            <div className="mt-12 mb-15">
              <RegisterFormInputsComponent form={form} />
            </div>

            <div className="mt-6">
              <Button
                type="submit"
                className="w-full text-lg font-semibold py-6 mb-6"
              >
                Create Account
              </Button>
              <p className="text-center text-gray-300">
                Already have a account?
                <span className="ms-3 underline underline-offset-2 text-white font-semibold">
                  <Link href={"/login"}>Log in</Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RegisterFormComponent;
