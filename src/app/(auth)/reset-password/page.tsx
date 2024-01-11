"use client";
import React, { useState } from "react";
import Union from "../../../../public/svg/Union";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

const Singup = () => {
  const [user, setUser] = useState({
    password: "",
    confirmPassword: "",
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
        <div className="border border-light-gray flex w-full  gap-10 flex-col  items-center rounded-t-full p-6">
          <Union />
          <div className="flex flex-col gap-2 items-center ">
            <p className="text-3xl font-medium">Reset password</p>
          </div>
          <div className="xl:w-4/5 sm:w-5/6 w-full flex flex-col gap-8 my-16">
            <Input
              name="password"
              placeholder="password"
              type="password"
              value={user.password}
              onChange={handleChange}
            />
            <Input
              name="confirmPassword"
              placeholder="confirm password"
              type="password"
              value={user.confirmPassword}
              onChange={handleChange}
            />
            <p className="text-gray">hey</p>
          </div>
        </div>
        <Button type="primary" value="Sign in" onClick={handleSubmit}></Button>
      </form>
    </div>
  );
};

export default Singup;
