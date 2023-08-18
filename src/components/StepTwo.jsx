import React, { useState } from "react";
import Button from "./UiComponent/Button";
import InputField from "./FromComponents/InputField";

const StepTwo = ({ data, onPrevious, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit({ ...data });
  };

  return (
    <div>
      <h2>Step 2</h2>
      <p>Name: {data.name}</p>
      <InputField
        type={"file"}
        title={"Upload CSV File"}
        placeholder="Description"
        value=""
      />
      <InputField
        type={"number"}
        title={"max_X"}
        placeholder="max_X"
        value=""
      />
      <InputField
        type={"number"}
        title={"min_X"}
        placeholder="min_X"
        value=""
      />
      <InputField
        type={"number"}
        title={"max_Y"}
        placeholder="max_Y"
        value=""
      />
      <InputField
        type={"number"}
        title={"min_Y"}
        placeholder="min_Y"
        value=""
      />
      <InputField
        type={"number"}
        title={"max_Z"}
        placeholder="max_Y"
        value=""
      />
      <InputField
        type={"number"}
        title={"min_Z"}
        placeholder="min_Z"
        value=""
      />

      <div className="flex gap-3">
        <Button title={"Previous"} onPrevious={onPrevious} />
        <Button title={"Submit"} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default StepTwo;
