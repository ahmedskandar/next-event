import { CircularProgress } from "@nextui-org/progress";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <CircularProgress size="lg" aria-label="Loading..." />
    </div>
  );
};

export default LoadingPage;
