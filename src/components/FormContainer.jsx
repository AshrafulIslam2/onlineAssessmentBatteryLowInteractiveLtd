import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const FormContainer = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  console.log(formData);
  const handleData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  // const handleSubmitForm = (data) => {
  //   console.log("Final Form Data:", data);
  // };

  return (
    <div>
      <div className="w-screen lg:max-w-lg lg:mx-auto">
        {step === 1 && <StepOne onNext={handleData} />}
        {step === 2 && (
          <StepTwo
            data={formData}
            onPrevious={handlePreviousStep}
            onSubmit={handleData}
            setFormData={setFormData}
          />
        )}
      </div>
      <table className="border-collapse border border-slate-400 rounded-md table-fixed mx-auto my-10">
        <caption class="caption-bottom">
          Table 3.1: Battery Low Interactive Ltd.
        </caption>
        <thead>
          <tr>
            <td className="border-collapse border border-black text-white rounded-md text-xl font-medium font-Poppins px-4 py-1">
              Project Name
            </td>
            <td className="border-collapse border border-black text-white rounded-md text-xl font-medium font-Poppins px-4 py-1">
              Project Description
            </td>
            <td className="border-collapse border border-black text-white rounded-md text-xl font-medium font-Poppins px-4 py-1">
              Client
            </td>
            <td className="border-collapse border border-black text-white rounded-md text-xl font-medium font-Poppins px-4 py-1">
              Contractor
            </td>
            <td className="border-collapse border border-black text-white rounded-md text-xl font-medium font-Poppins px-4 py-1">
              MaxX
            </td>
            <td className="border-collapse border border-black text-white rounded-md text-xl font-medium font-Poppins px-4 py-1">
              MinX
            </td>
            <td className="border-collapse border border-black text-white rounded-md text-xl font-medium font-Poppins px-4 py-1">
              MaxY
            </td>
            <td className="border-collapse border border-black text-white rounded-md text-xl font-medium font-Poppins px-4 py-1">
              MinY
            </td>
            <td className="border-collapse border border-black text-white rounded-md text-xl font-medium font-Poppins px-4 py-1">
              MaxZ
            </td>
            <td className="border-collapse border border-black text-white rounded-md text-xl font-medium font-Poppins px-4 py-1">
              MinZ
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-collapse border border-black text-white rounded-md">
              {formData.projectname}
            </td>
            <td className="border-collapse border border-black text-white rounded-md">
              {formData.projectnamedescription}
            </td>
            <td className="border-collapse border border-black text-white rounded-md">
              {formData.clientname}
            </td>
            <td className="border-collapse border border-black text-white rounded-md">
              {formData.contractorname}
            </td>
            <td className="border-collapse border border-black text-white rounded-md">
              {formData.max_X}
            </td>
            <td className="border-collapse border border-black text-white rounded-md">
              {formData.min_X}
            </td>
            <td className="border-collapse border border-black text-white rounded-md">
              {formData.max_Y}
            </td>
            <td className="border-collapse border border-black text-white rounded-md">
              {formData.min_Y}
            </td>
            <td className="border-collapse border border-black text-white rounded-md">
              {formData.max_Z}
            </td>
            <td className="border-collapse border border-black text-white rounded-md">
              {formData.min_Z}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FormContainer;
