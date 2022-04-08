import React from "react";
import useLetras from "../hooks/useLetras";
export const Letra = () => {
  const { letra } = useLetras();
  return <div className="letra">{letra}</div>;
};
