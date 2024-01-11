"use client";
import React, { useState } from "react";
import Union from "../../../../public/svg/Union";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

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
        <div className="border border-light-gray flex w-full  gap-10 flex-col  items-center rounded-t-full p-6">
          <Union />
          <div className="flex flex-col gap-2 items-center ">
            <p className="text-3xl font-medium">Forgot password</p>
          </div>
          <div className="xl:w-4/5 sm:w-5/6 w-full flex flex-col gap-8 my-16">
            <Input
              name="email"
              placeholder="Email address"
              type="text"
              value={user.email}
              onChange={handleChange}
            />
            <p className="text-gray">
              Please enter your login email address to receive your password
              reset link.
            </p>
          </div>
        </div>
        <Button
          type="primary"
          value="Get the link"
          onClick={handleSubmit}
        ></Button>
      </form>
    </div>
  );
};

export default Singup;
