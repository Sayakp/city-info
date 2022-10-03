import React, { useState } from "react";

const UseField = (type: string) => {
  const [value, setValue] = useState("");

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(event.target.value);
  };
  return {
    type,
    value,
    onChange,
  };
};

export default UseField;
