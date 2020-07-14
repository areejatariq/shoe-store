import React from "react";
import { Outlet } from "react-router-dom";

export const Product = () => {
  return (
    <div>
      <h4>PRODUCTS</h4>
      <Outlet />
    </div>
  );
};
