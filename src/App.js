import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button, IconButton, List, Paper, Typography } from "@mui/material";
import ListItemUser from "./components/ListItemUser";
import { useEffect, useState } from "react";
import axios from "axios";
import { AddCircle } from "@mui/icons-material";
import AddUserDialog from "./components/AddUserDialog";
import Card from "./components/Card.js";

const BASE_API_URL = `https://dummy.restapiexample.com/api/v1/employees`;

function App() {
  const [users, setUsers] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  console.log(users);

  useEffect(() => {
    async function getUsers() {
      await axios
        .get(`${BASE_API_URL}`)
        .then((res) => {
          const responseData = res.data.data;
          setUsers(responseData);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        });
    }

    getUsers();
  }, []);

  const handleDeleteUser = (userId, idx) => {
    async function delUser() {
      await axios
        .delete(`${BASE_API_URL}/{${userId}}`)
        .then((res) => {
          console.log(userId);
          console.log(idx);
          let arr = users;
          if (idx !== -1) {
            arr.splice(idx, 1);
          }
          setUsers([...arr]);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        });
    }

    delUser();
  };

  return (
    <div className="App">
      <div className="list-container">
        <div className="list-title-wrapper">
          <Typography variant="h4">List User</Typography>
        </div>

        {users.slice(0, 6).map((d, idx) => (
          <Card
            key={d.id}
            name={d.employee_name}
            salary={d.employee_salary}
            age={d.employee_age}
            onDelete={handleDeleteUser(d.id, idx)}
          />
        ))}
        
      </div>
    </div>
  );
}

export default App;
