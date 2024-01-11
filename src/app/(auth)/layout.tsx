"use client";

import Image from "next/image";
import Logo from "../../../components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const isLogin = path === "/login";
  const isSign = path === "/signup";

  return (
    <div>
      <div className="flex  min-h-screen w-full lg:flex-row flex-col overflow-x-hidden">
        <div className=" lg:w-[70%] w-screen lg:h-screen md:h-[600px] h-[500px]  relative">
          <Image
            src="/images/background.png"
            alt="background"
            fill
            className=" object-cover"
          />
          <div className="fixed top-10">
            <Logo />
          </div>
        </div>
        <div className="bg-white flex-1">
          <div className="flex flex-col items-center py-10 gap-12 h-full">
            <div className="font-jost flex gap-8  border-b-2 border-light-gray py-3 relative px-1 ">
              <Link href="/login">
                <span className="text-black ">Join PANDA</span>
              </Link>
              <span className=" text-gray">or</span>
              <Link href="/signup">
                <span className="text-black">Sign in</span>
              </Link>

              {(isLogin || isSign) && (
                <div className={`absolute w-full bottom-0 overflow-hidden`}>
                  <div
                    className={` h-1 bg-active  transition-all ease-in-out duration-700 ${
                      isLogin
                        ? "translate-x-0 w-2/5 "
                        : "translate-x-full w-2/3"
                    }`}
                  ></div>
                </div>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
