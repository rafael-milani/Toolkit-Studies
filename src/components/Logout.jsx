import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

export default function Logout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
