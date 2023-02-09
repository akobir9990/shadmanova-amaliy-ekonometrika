import React from "react";
import { Box, Container } from "@mui/material";
import "./style.css";
function index() {
  return (
    <Container>
      <Box>
        <Box
          // sx={{
          //   height: "90vh",
          //   textAlign: "center",
          //   display: "flex",
          //   alignItems: "center",
          // }}
          className="h-[90vh] flex justify-center items-center text-center"
        >
          <p className="text-5xl">
            ATvaJMM fanidan <br />
            <b>web darslik</b>
          </p>
        </Box>
      </Box>
    </Container>
  );
}

export default index;
