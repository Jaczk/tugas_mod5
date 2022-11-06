import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Delete } from "@mui/icons-material";
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export default function ActionAreaCard({ image, firstName, lastName, height, onDelete }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    src={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {firstName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {firstName} + {lastName}
                        <br />
                        {height}
                    </Typography>
                    <IconButton onClick={onDelete}>
                        <Delete />
                    </IconButton>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
