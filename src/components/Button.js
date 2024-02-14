import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import { MdArrowOutward } from "react-icons/md";
import clsx from "clsx";

function Button({
  linkField,
  label,
  showIcon = true,
  className,
}) {
  return (
    React.createElement(PrismicNextLink, {
      field: linkField,
      className: clsx(
        "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105",
        className,
      ),
    },
    React.createElement("span", {
      className: clsx(
        "absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
      ),
    }),
    React.createElement("span", { className: "relative flex text-slate-900 items-center justify-center gap-2" },
      label, showIcon && React.createElement(MdArrowOutward, { className: "inline-block" })
    )
    )
  );
}

export default Button;
