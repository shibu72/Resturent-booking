"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(50),
});

function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-3/12 bg-[--primaryBlack] text-[--primaryWhite] rounded-3xl border-2 border-[--secondary2] grid items-center justify-center p-6"
        >
          <div className="m-auto text-center">
            <h2 className="text-2xl font-bold">Login to Account</h2>
            <p className="text-base font-normal">
              Please enter your email and password to continue
            </p>
          </div>

          {/* This is Email Input */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="" className="bg-[#F8FAFC]" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* this is password input */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="" className="bg-[#F8FAFC]" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Check box started here */}
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms2" className="bg-[#F8FAFC]" />
              <label
                htmlFor="terms2"
                className="text-sm font-medium leading-none"
              >
                Remember Password
              </label>
            </div>
            <Link href={"/admin/auth/forgetPass"}> Forget Password?</Link>
          </div>
          <Button
            type="submit"
            variant={"secondary"}
            className="w-fit m-auto py-2 px-4 font-semibold capitalize "
          >
            sign in
          </Button>
        </form>
      </Form>
    </>
  );
}

export default Page;
