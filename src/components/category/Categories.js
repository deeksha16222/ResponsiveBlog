import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { Stack } from "@mui/system";
const Categories = () => {
  const StyledBox = styled(Box)({
    height: 200,
    width: "100%",
    cursor: "pointer",
  });
  const StyledTypography = styled(Typography)({
    margin: "25% 50px 25% 50px",
    background: "white",
    opacity: "0.8",
  });
  return (
    <Box>
      <Stack direction={"row"} spacing={4}>
        <StyledBox>
          <StyledTypography align="center" variant="h3">
            Kids
          </StyledTypography>
        </StyledBox>
        <StyledBox>
          <StyledTypography align="center" variant="h3">Men</StyledTypography>
        </StyledBox>
        <StyledBox>
          <StyledTypography align="center" variant="h3">Women</StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Categories;
