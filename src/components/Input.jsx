import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  // const id = useId();
  return (
    <div className="w-full">
      <Input
        type={type}
        className={`px-3 py-2 rounded-lg bg-blue-600 text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        // id={id}
      />
    </div>
  );
});

export default Input;
