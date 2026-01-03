"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../services";
import Link from "next/link";
import LaravelIconComponent from "@/components/LaravelIconComponent";
import LoginFormInputsComponent from "./LoginFormInputsComponent";

const LoginFormComponent = () => {
  type LoginFormValues = z.infer<typeof loginSchema>;

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    console.log(values);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8">
      <LaravelIconComponent/>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="bg-stone-950 rounded-[3px] py-8 px-12 lg:w-[500px] lg:min-h-[600px] flex flex-col justify-between">
            <div className="text-center ">
              <h3 className="text-2xl font-semibold mb-2">Log in to your account</h3>
              <p className="text-gray-300">
                Enter your email and password below to log in
              </p>
            </div>

            <div className="mt-12 mb-15">
              <LoginFormInputsComponent form={form} />
            </div>

            <div className="mt-6">
              <Button
                type="submit"
                className="w-full text-lg font-semibold py-6 mb-6"
              >
                Login
              </Button>
              <p className="text-center text-gray-300">
                don't have an account?
                <span className="ms-3 underline underline-offset-2 text-white font-semibold">
                  <Link href={"/register"}>Sign up</Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginFormComponent;
