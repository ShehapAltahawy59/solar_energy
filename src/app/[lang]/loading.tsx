import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative w-24 h-24">
        <div className="absolute w-full h-full border-4 border-green-200 rounded-full animate-ping"></div>
        <div className="absolute w-full h-full border-4 border-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
