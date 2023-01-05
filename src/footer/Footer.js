import { Box, Stack, Typography, styled } from "@mui/material";
import {
  Facebook,
  Instagram,
  Menu as MenuIcon,
  Twitter,
} from "@mui/icons-material/";

import React from "react";

const Footer = () => {
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
    color: "white",
  });
  return (
    <Box sx={{ background: "black", height: "300px" }}>
      <Stack direction={{ xs: "row", sm: "row" }} p={7}>
        <Box flex={1}>
          <Typography color={"white"} align={"center"}>
            Contact Us
          </Typography>
          <Typography color={"white"} align={"center"}>
            Feel free to contact 
          </Typography>
          <Typography color={"white"} align={"center"}>
          us at our social media 
          </Typography>
          <Typography color={"white"} align={"center"}>
          handles anytime
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color={"white"} align={"center"}>
            Data Policy
          </Typography>
          <Typography color={"white"} align={"center"}>
            Cookies
          </Typography>
          <Typography color={"white"} align={"center"}>
            Data Safety
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color={"white"} align={"center"}>
            Categories
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"center"}>
            Kids
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"center"}>
            Men
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"center"}>
            Women
          </Typography>
        </Box>
        <Box>
          <Typography color={"white"} align={"center"}>
            Follow Us
          </Typography>
          <SocialBox>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialBox>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
