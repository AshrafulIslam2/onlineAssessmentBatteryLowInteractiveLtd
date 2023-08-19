import React, { useState } from "react";
import InputField from "./FromComponents/InputField";
import Button from "./UiComponent/Button";

const StepOne = ({ onNext }) => {
  const [FirstStepData, setFirstStepData] = useState();
  console.log(FirstStepData);
  const handleNext = () => {
    onNext({ ...FirstStepData });
  };

  const HandleFirstStepData = (event) => {
    const { name, value } = event.target;
    setFirstStepData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={HandleFirstStepData} className="py-4">
      <h2 className="text-center text-2xl text-white bg-lime-950 py-2 rounded-md mt-2">
        Step 1
      </h2>
      <InputField
        type={"text"}
        title={"Project Name"}
        name="projectname"
        placeholder="Enter project name"
        value=""
        Handler={HandleFirstStepData}
      />
      <InputField
        type={"text"}
        name="projectnamedescription"
        title={"Project Description"}
        placeholder="Description"
        value=""
        Handler={HandleFirstStepData}
      />
      <InputField
        title={"Client"}
        name="clientname"
        placeholder="Client Name"
        value=""
        Handler={HandleFirstStepData}
      />
      <InputField
        title={"Contractor"}
        name="contractorname"
        placeholder="Contractor Name"
        value=""
        Handler={HandleFirstStepData}
      />

      <Button type="submit" title={"NEXT"} handleNext={handleNext} />
    </form>
  );
};

export default StepOne;
