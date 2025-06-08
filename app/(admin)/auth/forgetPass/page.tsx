"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  email: z.string().email(),
});

function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    return (window.location.href = "auth/newPass");
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-3/12 bg-[--primaryBlack] text-[--primaryWhite] rounded-3xl border-2 border-[--secondary2] grid items-center justify-center p-6"
        >
          <div className="m-auto text-center">
            <h2 className="text-2xl font-bold">Forget Password</h2>
          </div>

          {/* This is Email Input */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    className="bg-[--primaryWhite]"
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

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
