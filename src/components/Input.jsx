import React, { useId, useState } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFileName(selectedFile?.name || "");
    if (onChange) onChange(e); // let react-hook-form handle the file
  };

  if (type === "file") {
    return (
      <div className="w-full mb-4">
        {label && <p className="mb-2 text-left text-sm font-medium">{label}</p>}

        <label
          htmlFor={id}
          className="block w-full px-4 py-2 text-center bg-indigo-600 text-white rounded-md cursor-pointer hover:bg-indigo-700 transition"
        >
          Choose File
        </label>

        <input
          type="file"
          id={id}
          ref={ref}
          className="hidden"
          onChange={handleFileChange}
          {...props}
        />

        {fileName && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Selected: {fileName}
          </p>
        )}
      </div>
    );
  }

  // Default input for text, email, etc.
  return (
    <div className="w-full mb-4">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        ref={ref}
        className={`w-full py-2 px-3 rounded-md dark:bg-slate-700 bg-slate-200 ${className}`}
        {...props}
      />
    </div>
  );
});

export default Input;
