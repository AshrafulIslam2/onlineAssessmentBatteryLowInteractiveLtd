import React, { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const FormContainer = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const handleData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  const downloadCSV = async () => {
    if (formData) {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([600, 400]);
      const { width, height } = page.getSize();
      page.drawText("Battery Low Interactive Ltd.", {
        x: 50,
        y: height - 50,
        size: 20,
      });

      page.drawText("ashrafulislamsay7@gmail.com", {
        x: 50,
        y: 10,
        size: 10,
      });

      let yOffset = height - 80;
      for (const [key, value] of Object.entries(formData)) {
        page.drawText(`${key}: ${value}`, {
          x: 50,
          y: yOffset,
          size: 14,
          color: rgb(0, 0, 0),
        });
        yOffset -= 20;
      }

      const pdfBytes = await pdfDoc.save();

      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const blobURL = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobURL;
      link.download = "Battery_Low_Interactive_Ltd.pdf";
      link.click();

      URL.revokeObjectURL(blobURL);
    }
    // const csvData = [Object.keys(formData), Object.values(formData)];
    // console.log(csvData);
    // const csvContent = csvData.map((row) => row.join(",")).join("\n");
    // console.log(csvContent);
    // const blob = new Blob([csvContent], { type: "application/pdf" });
    // const blobURL = URL.createObjectURL(blob);
    // console.log(blobURL);
    // const link = document.createElement("a");
    // link.href = blobURL;
    // link.download = "data.pdf";
    // link.click();

    // URL.revokeObjectURL(blobURL);
  };
  const GOBack = () => {
    setFormData({});
    setStep(1);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 h-[1000px]">
      {!formData.min_Z && (
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
      )}
      {}

      {formData.min_Z && (
        <div className="flex flex-col items-center">
          <div className="flex justify-start  w-full">
            <button
              className=" px-4 py-2 hover:-translate-x-2 hover:bg-lime-200 rounded-md hover:text-orange-400 font-Poppins font-medium"
              onClick={GOBack}
            >
              Go Back
            </button>
          </div>
          <table
            id="table-to-export"
            className="border-collapse border border-slate-400 rounded-md table-fixed mx-auto my-10 "
          >
            <caption class="caption-top  pb-10 text-xl">
              Table 1.1: Battery Low Interactive Ltd.
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
          <div className="flex justify-center  bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
            <button
              className="py-2 px-2 text-white hover:border-b "
              onClick={downloadCSV}
            >
              Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormContainer;
