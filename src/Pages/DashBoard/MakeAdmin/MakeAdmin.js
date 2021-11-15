import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { user } = useAuth();
  const [success, setSuccess] = useState(false);
  //   const token = localStorage.getItem("idToken");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const adminRequest = { requester: user.email, email: email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        // authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(adminRequest),
    })
      .then((res) => res.json())

      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          setEmail("");
          e.target.email.value = "";
        } else {
          setSuccess(false);
          setEmail("");
        }
      });

    e.preventDefault();
  };

  return (
    <>
      <div>
        <h2>Make an Admin</h2>
        {success && (
          <Alert sx={{ my: 3, width: "45%" }} severity="success">
            Made Admin Successfuly
          </Alert>
        )}
        <form onSubmit={handleAdminSubmit}>
          <TextField
            sx={{ width: "45%" }}
            placeholder="Enter email"
            name="email"
            type="email"
            label="email"
            variant="standard"
            onBlur={handleOnBlur}
          />
          <br />
          <Button sx={{ mt: 4 }} type="submit" variant="contained">
            Make Admin
          </Button>
        </form>
      </div>
    </>
  );
};

export default MakeAdmin;
