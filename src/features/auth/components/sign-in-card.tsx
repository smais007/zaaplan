"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { DottedSeparator } from "@/components/dotted-separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "../schemas";
import { useLogin } from "../api/use-login";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";

export const SignInCard = () => {
  const { mutate } = useLogin();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    mutate({ json: values });
  };

  return (
    <Card className="w-full h-full md:w-[487px]  shadow-none border-none">
      <CardHeader className="">
        <Link href="/">
          <Image src="/AstroColab.svg" alt="Logo" width={140} height={100} />{" "}
        </Link>

        <CardTitle className="text-xl font-semibold">
          Sign in to your account{" "}
        </CardTitle>
      </CardHeader>

      <CardContent className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Label className="text-sm -pb-1">Email address</Label>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="hello@example.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Label className="text-sm -pb-1">Password</Label>
                  <FormControl>
                    <Input {...field} type="password" placeholder="••••••••" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full rounded-full" variant="primary">
              Sign in
            </Button>
          </form>
        </Form>
        <div className="pt-4">
          <p className="text-sm text-gray-800 text-center">
            Don&apos;t have an account?{" "}
            <span>
              <Link href="/sign-up" className="hover:underline font-medium">
                Sign Up{" "}
              </Link>
            </span>
          </p>
        </div>
      </CardContent>

      <CardContent className="">
        <div className="flex items-center my-5">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-muted-foreground">
            Or continue with
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex flex-col gap-y-4">
          <Button
            variant="primary"
            disabled={false}
            className="w-full rounded-full"
          >
            <FcGoogle className="size-5 mr-2" />
            Google
          </Button>
          <Button
            variant="primary"
            disabled={false}
            className="w-full rounded-full"
          >
            <FaGithub className="size-5 mr-2" />
            Github
          </Button>
        </div>
        <p className="text-sm text-gray-700 text-center pt-10">
          By clicking on sign in, you agree to our{" "}
          <span>
            <Link className="font-medium underline" href="/">
              Terms of Service
            </Link>
          </span>{" "}
          and{" "}
          <span>
            <Link className="font-medium underline" href="/">
              Privacy Policy
            </Link>
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
