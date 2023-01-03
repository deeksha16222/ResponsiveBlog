import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { Box } from "@mui/system";
import {Facebook, Instagram, Twitter} from '@mui/icons-material/';


const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SocialBox = styled(Box)(
    {
        display:"flex",
        gap:10,
    }
  )
  return (
    <AppBar>
      <StyledToolbar>
        <SocialBox> 
        <Facebook/>
        <Instagram/>
        <Twitter/>
        </SocialBox>
        <Box> Menu </Box>
        <Box> Search </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
