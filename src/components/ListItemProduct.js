import { Delete, RoundedCorner } from "@mui/icons-material";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  IconButton
} from "@mui/material";
import React from "react";

function ListItemProducts({ image, primaryText, secondaryText, rating, onDelete }) {
  return (
    <ListItem>
      <ListItemAvatar sx={{ marginRight: 2 }}>
        <Avatar variant="square" alt="avatar" src={image} sx={{ width: 75, height: 75  }}/>
      </ListItemAvatar>
      <ListItemText
        primary={<Typography variant="h6">{primaryText}</Typography>}
        secondary={<Typography variant="p">{secondaryText}</Typography>}
      />
      <Typography sx={{fontWeight: 'bold'}} variant="h8">{rating}</Typography>
      <IconButton size="large" onClick={onDelete}>
        <Delete />
      </IconButton>
    </ListItem>
  );
}

export default ListItemProducts;
