import React from "react";
import {
  List,
  Box,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Divider,
  Card,
} from "@mui/material";
import image1 from "../static/image1.jpg";
import image2 from "../static/image2.jpg";
import image3 from "../static/image3.jpg";
import image4 from "../static/image4.jpg";

const Rightbar = () => {
  return (
    <Box>
      <Typography align="center" bgcolor={"black"} color="white">
        Most Popular
      </Typography>
      <List
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={image1}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={"I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={image2}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={"I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={image3}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={"I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <Divider variant="inset" component={"li"} />
      </List>
      <Typography align="center" bgcolor={"black"} color="white">
        About Us
      </Typography>
      <Card cardImage={image4} />
    </Box>
  );
};

export default Rightbar;