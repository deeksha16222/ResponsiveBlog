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
        {" "}
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
              sx={{ height: 80, weight: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={image1}
            />
          </ListItemAvatar>
          <ListItemText secondary={"I will be in your neighbourhood"} />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, weight: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={image2}
            />
          </ListItemAvatar>
          <ListItemText secondary={"I will be in your neighbourhood"} />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, weight: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={image4}
            />
          </ListItemAvatar>
          <ListItemText secondary={"I will be in your neighbourhood"} />
        </ListItem>
        <Divider variant="insert" component={"li"} />
      </List>
      <Typography align="center" bgcolor={"black"} color="white">
        {" "}
        About Us
      </Typography>
      <Card cardImage={image2} />
    </Box>
  );
};

export default Rightbar;
