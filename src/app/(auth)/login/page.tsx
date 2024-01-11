"use client";
import React, { useState } from "react";
import Union from "../../../../public/svg/Union";
import Input from "../../../../components/Input";
import RadioButton from "../../../../components/RadioButton";
import Button from "../../../../components/Button";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [exp, setExp] = useState("");

  const handleChange = (name: string, value: string) => {
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleRadioChange = (value: string) => {
    setExp(value);
  };
  const handleSubmit = () => {};
  const isChecked = (value: string) => exp === value;

  return (
    <div className="w-full lg:px-6 px-3  font-jost flex flex-col justify-between h-full gap-10 ">
      <form action=" " className="flex gap-10 flex-col items-center">
        <div className="border border-light-gray w-full flex gap-10 flex-col  items-center rounded-t-full lg:p-10 p-6">
          <Union />
          <div className="flex flex-col gap-2 items-center ">
            <p className="lg:text-3xl text-2xl font-medium">
              Create your free account
            </p>
            <span className="lg:text-2xl text-xl">
              Take Less than <span className="text-active">5 minutes...</span>
            </span>
          </div>
          <div className="xl:w-4/5 sm:w-5/6 w-full flex flex-col gap-8">
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
            <Input
              name="confirmPassword"
              placeholder="confirm password"
              type="password"
              value={user.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex gap-8 flex-col">
          <div className="flex flex-col gap-5">
            <RadioButton
              id="expert"
              name="experience"
              value="Expert"
              text={"I'm an expert"}
              onChange={handleRadioChange}
              checked={isChecked("Expert")}
            />

            <RadioButton
              id="organization"
              name="experience"
              value="Organisation in Africa"
              text={"I'm  an organization in Africa"}
              onChange={handleRadioChange}
              checked={isChecked("Organisation in Africa")}
            />
          </div>
          <Button
            type="primary"
            value="Join PANDA"
            onClick={handleSubmit}
          ></Button>
        </div>
      </form>
      <p className="text-gray text-lg text-center mx-4">
        By clicking on &quot;Create an account&quot;, you agree to our{" "}
        <span className="underline">terms of use</span> and{" "}
        <span className="underline"> privacy policy</span>.
      </p>
    </div>
  );
};

export default Login;
