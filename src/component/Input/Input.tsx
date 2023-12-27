import React, { FC } from "react";

const Input: FC = () => {
  return (
    <div className="bg-zinc-950 flex">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="Frist Name" />
      <p>This information is required.</p>
    </div>
  );
};

export default Input;
