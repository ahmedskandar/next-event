import Footer from "@/components/ui/footer/Footer";
import Header from "@/components/ui/header/Header";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col justify-between min-h-[100svh]">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
