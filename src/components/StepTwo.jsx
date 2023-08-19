import React, { useRef, useState } from "react";

import Papa from "papaparse";
import InputField from "./FromComponents/InputField";
import Button from "./UiComponent/Button";

const StepTwo = ({ data, onPrevious, onSubmit, setFormData }) => {
  const formRef = useRef(null);
  const [csvFile, setCsvFile] = useState(null);
  const [minX, setMinX] = useState(null);
  const [maxX, setMaxX] = useState(null);
  const [minY, setMinY] = useState(null);
  const [maxY, setMaxY] = useState(null);
  const [minZ, setMinZ] = useState(null);
  const [maxZ, setMaxZ] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    onSubmit(data);
  };
  const RedCSVFIle = (event) => {
    const file = event.target.files[0];
    setCsvFile(file);
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          const data = result.data;
          const xValues = data.map((row) => {
            return row[1];
          });
          const yValues = data.map((row) => {
            return row[2];
          });
          const zValues = data.map((row) => {
            return row[3];
          });
          const xAxis = xValues
            .slice(1)
            .map((value) => parseFloat(value))
            .filter((value) => !isNaN(value));
          if (xAxis.length === 0) {
            console.log("No numeric values found.");
          } else {
            // Find the minimum and maximum values
            setMinX(Math.min(...xAxis));
            setMaxX(Math.max(...xAxis));
          }
          const YAxis = yValues
            .slice(1)
            .map((value) => parseFloat(value))
            .filter((value) => !isNaN(value));
          if (YAxis.length === 0) {
            console.log("No numeric values found.");
          } else {
            // Find the minimum and maximum values
            setMinY(Math.min(...YAxis));
            setMaxY(Math.max(...YAxis));
          }
          const zAxis = zValues
            .slice(1)
            .map((value) => parseFloat(value))
            .filter((value) => !isNaN(value));
          if (zAxis.length === 0) {
            console.log("No numeric values found.");
          } else {
            // Find the minimum and maximum values
            setMinZ(Math.min(...zAxis));
            setMaxZ(Math.max(...zAxis));
          }
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="py-4">
      <h2 className="text-center text-2xl text-white bg-lime-950 py-2 rounded-md mt-2">
        Step 2
      </h2>
      <InputField
        type={"file"}
        title={"Upload CSV File"}
        placeholder="Description"
        value=""
        Handler={RedCSVFIle}
      />
      <InputField
        type={"number"}
        title={"max_X"}
        placeholder="max_X"
        name={"max_X"}
        value={maxX}
      />
      <InputField
        type={"number"}
        title={"min_X"}
        placeholder="min_X"
        value={minX}
        name={"min_X"}
      />
      <InputField
        type={"number"}
        title={"max_Y"}
        placeholder="max_Y"
        value={maxY}
        name={"max_Y"}
      />
      <InputField
        type={"number"}
        title={"min_Y"}
        placeholder="min_Y"
        value={minY}
        name={"min_Y"}
      />
      <InputField
        type={"number"}
        title={"max_Z"}
        name={"max_Z"}
        placeholder="max_z"
        value={maxZ}
      />
      <InputField
        type={"number"}
        title={"min_Z"}
        name="min_Z"
        placeholder="min_Z"
        value={minZ}
      />

      <div className="flex gap-3">
        <Button title={"Previous"} onPrevious={onPrevious} />
        <Button type="submit" title="Submit" />
      </div>
    </form>
  );
};

export default StepTwo;
