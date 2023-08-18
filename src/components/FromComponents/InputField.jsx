import React from "react";

const InputField = ({
  title,
  placeholder,
  type,
  Handler,
  name,
  value,
  ref,
}) => {
  return (
    <div>
      <label className="flex flex-col">
        <span className="font-Poppins text-white py-2 after:content-['*'] after:ml-0.5 after:text-red-500">
          {title}
        </span>
        <input
          type={type}
          name={name}
          ref={ref}
          step="any"
          required={true}
          defaultValue={value}
          className="rounded-md py-2 px-2 placeholder:text-xs outline-1 outline-white focus:outline-purple-800"
          placeholder={placeholder}
          onChange={Handler}
        />
      </label>
    </div>
  );
};

export default InputField;
