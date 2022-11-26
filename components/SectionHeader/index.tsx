import React from "react";

interface IProps {
  text: string;
}

const SectionHeader = ({ text }: IProps) => {
  return (
    <h2 className="text-center mt-4 text-2xl uppercase font-sans">{text}</h2>
  );
};

export default SectionHeader;
