import React from "react";
import { Box, Typography } from "@mui/material";
import HeroImage from "../../static/HeroImage.jpg"

const Hero = () => {
  return <Box>
  <Typography align="center" variant="h3" sx={{fontWeight:900}}>
  Fashions<b style={{color:"red"}}>Blog</b>
  </Typography>
  <Typography align="center" variant="body2" sx={{fontWeight:100}}>
  We make you feel and look better!
  </Typography>
  <Box sx={{backgroundImage:`url(${HeroImage})`, backgroundRepeat:"no-repeat",backgroundColor:"black",backgroundPosition:"center",backgroundSize:"cover",height:600,width:"100%"}}></Box>
  </Box>;
};

export default Hero;
