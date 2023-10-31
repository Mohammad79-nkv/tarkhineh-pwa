"use client";

import { useState } from "react";
import { Toaster } from "react-hot-toast";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    useState()
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default AuthLayout;
