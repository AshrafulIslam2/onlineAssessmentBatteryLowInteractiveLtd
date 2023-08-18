import React, { useState } from "react";
import InputField from "./FromComponents/InputField";
import Button from "./UiComponent/Button";

const StepOne = ({ onNext }) => {
  const [FirstStepData, setFirstStepData] = useState();
  console.log(FirstStepData);
  const handleNext = () => {
    onNext({ FirstStepData });
  };

  const HandleFirstStepData = (event) => {
    const { name, value } = event.target;
    setFirstStepData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Step 1</h2>
      {/* <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}
      <InputField
        type={"text"}
        title={"Project Name"}
        name="projectname"
        placeholder="Enter project name"
        value=""
        HandleFirstStepData={HandleFirstStepData}
      />
      <InputField
        type={"text"}
        name="projectnamedescription"
        title={"Project Description"}
        placeholder="Description"
        value=""
        HandleFirstStepData={HandleFirstStepData}
      />
      <InputField
        title={"Client"}
        name="clientname"
        placeholder="Client Name"
        value=""
        HandleFirstStepData={HandleFirstStepData}
      />
      <InputField
        title={"Contractor"}
        name="contractorname"
        placeholder="Contractor Name"
        value=""
        HandleFirstStepData={HandleFirstStepData}
      />

      <Button title={"NEXT"} handleNext={handleNext} />
    </div>
  );
};

export default StepOne;
