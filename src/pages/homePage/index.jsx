import React from "react";
import { Box, Container } from "@mui/material";
import "./style.css";
function index() {
  return (
    <Container>
      <Box>
        <Box className="h-[90vh] flex justify-center items-center text-center">
          <p className="md:text-5xl text-[22px]">
            Axborot texnologiyalari va jarayonlarni matematik modellashtirish
            fanidan <br />
            <b>web darslik</b>
          </p>
        </Box>
      </Box>
    </Container>
  );
}

export default index;
