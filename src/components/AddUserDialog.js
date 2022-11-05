import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const BASE_API_URL = `https://reqres.in/api`;

export default function AddUserDialog({ open, onClose, users, setUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    axios
      .post(`${BASE_API_URL}/users`, {
        name: name,
        email: email,
      })
      .then((res) => {
        setUsers([...users, res.data]);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add user</DialogTitle>
      <DialogContent
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          padding: "8px 20px",
        }}
      >
        <TextField
          name="name"
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          name="email"
          label="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}

