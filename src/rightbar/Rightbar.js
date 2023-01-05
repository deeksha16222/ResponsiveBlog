import React from "react";
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from "@mui/material";
import image1 from "../../src/static/image1.jpg";

const Rightbar = () => {
  return (
    <div>
    <Typography align="center" bgcolor={"black"} color="white"> Most Popular</Typography>
      <List sx={{ width: "100%", height:'100%',maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar sx={{height:80, weight:80}} variant="square" alt="Remy Sharp" src={image1} />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={"I will be in your neighbourhood"}
          />
        </ListItem>
      </List>
    </div>
  );
};

export default Rightbar;
