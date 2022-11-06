import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { IconButton, List, Paper, Typography } from "@mui/material";
import ListItemUser from "./components/ListItemUser";
import { useEffect, useState } from "react";
import axios from "axios";


const BASE_API_URL = `https://dummyjson.com`;

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      await axios
        .get(`${BASE_API_URL}/products/category/laptops`)
        .then((res) => {
          const responseData = res.data.products;
          setProducts(responseData);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        });
    }

    getProducts();
  }, []);


  const handleDeleteProducts = (id, idx) => {
    async function delProducts() {
      await axios
        .delete(`${BASE_API_URL}/products/${id}`)
        .then((res) => {
          let arr = products;
          if (idx !== -1) {
            arr.splice(idx, 1)
          }
          setProducts([...arr]);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        })
    }

    delProducts();
  };

  return (
    <div className="App">
      <div className="list-container">
        <div className="list-title-wrapper">
          <Typography variant="h4">List Laptops</Typography>
        </div>
        <Paper elevation={2} style={{ maxHeight: "700px", overflow: "auto" }}>
          <List>
            {products.map((d, idx) => (
              <ListItemUser
                key={d.id}
                image={d.thumbnail}
                primaryText={`$${d.price} ${d.title}`}
                secondaryText={`${d.description}`}
                rating = {`${d.rating}`}
                onDelete={() => handleDeleteProducts(d.id, idx)}
              />
            ))}
          </List>
        </Paper>
      </div>
    </div>
  );
}

export default App;
