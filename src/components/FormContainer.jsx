import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const FormContainer = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  console.log(formData);

  const handleNextStep = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  const handleSubmitForm = (data) => {
    console.log("Final Form Data:", data);
  };

  return (
    <div className="w-screen lg:max-w-lg lg:mx-auto">
      {step === 1 && <StepOne onNext={handleNextStep} />}
      {step === 2 && (
        <StepTwo
          data={formData}
          onPrevious={handlePreviousStep}
          onSubmit={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default FormContainer;
