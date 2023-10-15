import React from "react";
import PointerImg from "./Pointer";
import Image from "next/image";

const Pointer = () => {
  return (
    // @ts-ignore
    <Image src={PointerImg} alt="p" />
  );
};

export default Pointer;
