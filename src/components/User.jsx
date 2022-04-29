import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

export default function User() {
  const { name } = useSelector(selectUser);

  return (
    <div>
      <h1>Usuario: {name}</h1>
    </div>
  );
}
