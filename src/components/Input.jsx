import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full flex justify-center items-center">
      {label && (
        <label
          className="inline-block basis-1/4 mb-1 mr-4 pl-1 text-left"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`${className} dark:bg-slate-700 bg-slate-200 py-1 px-2 rounded-md`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
