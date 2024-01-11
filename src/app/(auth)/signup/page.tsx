"use client";
import React, { useState } from "react";
import Union from "../../../../public/svg/Union";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Link from "next/link";

const Singup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name: string, value: string) => {
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = () => {};
  return (
    <div className="w-full px-6  font-jost flex flex-col justify-between h-full gap-10 ">
      <form action=" " className="flex gap-10 flex-col items-center">
        <div className="border  border-light-gray w-full  gap-10 flex-col  items-center rounded-t-full p-8">
          <div className="flex flex-col items-center gap-10">
            <Union />
            <div className="flex flex-col gap-2 items-center ">
              <p className="text-3xl font-medium">Sign in</p>
            </div>
            <div className="xl:w-4/5 sm:w-5/6 w-full flex flex-col gap-8 my-8">
              <Input
                name="email"
                placeholder="email"
                type="text"
                value={user.email}
                onChange={handleChange}
              />
              <Input
                name="password"
                placeholder="password"
                type="password"
                value={user.password}
                onChange={handleChange}
              />
              <Link href="/forgot-password">
                <p className=" text-start underline cursor-pointer">
                  Forgot Password?
                </p>
              </Link>
            </div>
          </div>
        </div>
        <Button type="primary" value="Sign in" onClick={handleSubmit}></Button>
      </form>
    </div>
  );
};

export default Singup;
