import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container max-w-5xl px-4 mx-auto w-full">{children}</div>
  );
};

export default Container;
